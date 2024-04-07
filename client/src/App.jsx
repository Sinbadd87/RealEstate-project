import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/navigation/Navigation";
import Footer from "./routes/footer/Footer";
import Home from "./routes/home/Home";
import "./App.scss";
import Contacts from "./routes/contacts/Contacts";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navigation />
            <Footer />
          </>
        }
      >
        <Route index element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
}

export default App;
