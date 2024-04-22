import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/navigation/Navigation";
import Footer from "./routes/footer/Footer";
import Home from "./routes/home/Home";
import "./App.scss";
import Contacts from "./routes/contacts/Contacts";
import ProjectsPage from "./routes/projects/ProjectsPage";
import ProjectPageCard from "./routes/projects/projectPageCard/ProjectPageCard";
import Auth from "./routes/authentication/Auth";
import Reservation from "./routes/reservation/Reservation";
import AppartmentsPage from "./routes/appartmentsPage/AppartmentsPage";

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
        <Route path="/projects">
          <Route index element={<ProjectsPage />} />
          <Route path=":id" element={<ProjectPageCard />}>
            <Route path="/appartment" element={<AppartmentsPage />} />
          </Route>
        </Route>
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/reservation" element={<Reservation />} />
      </Route>
    </Routes>
  );
}

export default App;
