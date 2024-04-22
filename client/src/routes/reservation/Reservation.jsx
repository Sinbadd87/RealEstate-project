// import { selectCurrentUser } from "../../features/auth/authSlice";
// import { useSelector } from "react-redux";
// import { Navigate } from "react-router-dom";

import { useGetAuthUserQuery } from "../../api/projectApiSlice";

const Reservation = () => {
  //   const currentUser = useSelector(selectCurrentUser);
  //   if (!currentUser) {
  //     return <Navigate to="/auth" replace />;
  //   }
  const { data } = useGetAuthUserQuery();
  if (data) {
    const user = data.username;
    const isAuth = data.isAuth;
    console.log("reservation", user, isAuth, data);
    return <div>`Reservation: {user}`</div>;
  } else {
    return <div>Loading...</div>;
  }

  //   const [user, setUser] = useState();
  //   useEffect(() => {
  //     const getUser = async () => {
  //       const response = await fetch("http://localhost:8000/auth/login");
  //       const data = await response.json();
  //       console.log(data);
  //       return data;
  //     };
  //     setUser(getUser());
  //   });
};

export default Reservation;
