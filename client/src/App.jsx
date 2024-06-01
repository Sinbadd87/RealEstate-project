import "./App.scss";

import { useEffect, lazy, Suspense } from "react";
import { useGetAuthUserQuery } from "./api/projectApiSlice";
import { useDispatch } from "react-redux";
import { setCredentials } from "./features/auth/authSlice";
import { Routes, Route } from "react-router-dom";
import Spinner from "./components/spinner/Spinner";

import ApartmentsPage from "./routes/apartmentsPage/ApartmentsPage";
import Auth from "./routes/authentication/Auth";
import Contacts from "./routes/contacts/Contacts";
import Footer from "./routes/footer/Footer";
import Home from "./routes/home/Home";
import Navigation from "./routes/navigation/Navigation";
import ProjectsPage from "./routes/projects/ProjectsPage";
import ProjectPageCard from "./routes/projects/projectPageCard/ProjectPageCard";
import Reservation from "./routes/reservation/Reservation";

function App() {
  const { data } = useGetAuthUserQuery();
  const dispatch = useDispatch();
  useEffect(() => {
    const setUser = async () => {
      if (await data?.isAuth) {
        console.log(await data.username);
        dispatch(setCredentials(await data));
      } else {
        dispatch(setCredentials(null));
      }
    };
    setUser();
  }, [data]);

  return (
    <Suspense fallback={<Spinner />}>
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
            <Route path=":id">
              <Route index element={<ProjectPageCard />} />
              <Route path="apartments" element={<ApartmentsPage />} />
            </Route>
          </Route>
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/reservation" element={<Reservation />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
