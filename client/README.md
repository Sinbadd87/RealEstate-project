Project structure:

- Navigation and footer through all pages

1. Home page
   a. Banner
   b. Search bar
   c. Categories cards
   2./search
   a. Search bar
   b. Categories cards
2. /projects
   a. Search bar
   b. Categories cards
3. /projects/{category name}
   a. Banner
   b. Search bar only for this project
   c. Product cards
   d. Interactive map?

---

\*Authentication/Authorization

1. Google and email/password authentication
2. Posibility to book a product
3. Ask for callback?

---

Search Bar/Filter
Data: {
name: String,
location: String,
minimalPrice: Number,
maximumPrice: Number,
completionDate: Number,
appartments: {
rooms: Number,
price: Number
}
}
