import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import passport from "passport";
import session from "express-session";
import GoogleStrategy from "passport-google-oauth20";
import LocalStrategy from "passport-local";
// import MongoStore from "connect-mongo";

import Project from "./schemas/projectSchema.js";
import User from "./schemas/userSchema.js";

dotenv.config({ path: "../.env" });

const verifyCallback = async (accessToken, refreshToken, profile, done) => {
  const currentUser = await User.findOne({ email: profile.emails[0].value });
  if (currentUser) {
    console.log("User exist");
    await done(null, currentUser);
  } else {
    const newUser = await new User({
      username: profile.displayName,
      email: profile.emails[0].value,
    }).save();
    await done(null, newUser);
  }
};

passport.use(
  new GoogleStrategy(
    {
      callbackURL: "/auth/google/callback",
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      scope: ["profile", "email"],
    },
    verifyCallback
  )
);
passport.use(User.createStrategy());
// passport.use(
//   new LocalStrategy(function (email, password, done) {
//     User.findOne({ email: email }, function (err, user) {
//       if (err) {
//         return done(err);
//       }
//       if (!user) {
//         return done(null, false);
//       }
//       if (!user.verifyPassword(password)) {
//         return done(null, false);
//       }
//       return done(null, user);
//     });
//   })
// );

mongoose.connect(process.env.MONGO_API_KEY);

const lestateDB = mongoose.connection;
lestateDB.on("error", console.error.bind(console, "connection error:"));
lestateDB.once("open", () => {
  console.log("Database connected");
});

// const store = MongoStore.create({
//   mongoUrl: process.env.MONGO_API_KEY,
//   touchAfter: 24 * 60 * 60,
//   crypto: {
//     secret: process.env.CRYPTO_SECRET,
//   },
// });
// store.on("error", (e) => {
//   console.log("Store error!", e);
// });

const sessionConfig = {
  name: "didit",
  secret: [process.env.SECRET],
  resave: true,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    expires: Date.now() + 604800000,
    maxAge: 604800000,
  },
};

async function loadAllProjects() {
  return await Project.find({});
}

const app = express();

app.use(session(sessionConfig));
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD"],
    credentials: true,
  })
);
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, done) {
  done(null, user.id);
});
passport.deserializeUser(function (id, done) {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

app.get("/projects", async (req, res) => {
  return res.status(200).json(await loadAllProjects());
});

// app.get("/auth/google", passport.authenticate("google"));

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "http://localhost:5173/auth",
  }),
  (req, res) => {
    console.log(req.user, "it's me");
    res.redirect("http://localhost:5173/");
  }
);

app.post("/auth/signup", async (req, res) => {
  const { displayName, email, password } = req.body;
  console.log(email, displayName);
  const currentUser = await User.findOne({ email: email });
  if (currentUser) {
    console.log("User exist", currentUser);
    res.status(409).json({ err: "User already exist!" });
  } else {
    const user = new User({ username: displayName, email: email });

    const regUser = await User.register(user, password);
    console.log(regUser);
    res.status(201).json(regUser);
  }
});

app.get("/auth/signup", (req, res) => {
  res.redirect("http://localhost:5173/");
});

app.get("/auth/login", (req, res) => {
  // Access user data from the session

  const isAuth = req.isAuthenticated();

  const username = req.user?.username;
  console.log(username, "From the sessin", req.sessionID, isAuth);
  if (username) {
    res.json({ message: "Welcome to your profile!", username, isAuth });
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
});

app.post(
  "/auth/login",
  passport.authenticate("local", {
    failureRedirect: "http://localhost:5173/auth",
    failureMessage: true,
  }),
  async (req, res) => {
    const { email } = req.user;
    const logUser = await User.findOne({ email: email });
    if (logUser) {
      console.log("login", req.user);
      res.status(200).json(req.user);
    }
  }
  //   TODO: Make error messages with different statuses
);

app.get("/auth/logout", (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("http://localhost:5173/");
  });
});

app.listen(8000, async () => {
  await loadAllProjects();
  console.log("Server is running port 8000");
});
