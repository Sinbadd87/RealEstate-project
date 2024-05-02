import {
  useGetAuthUserQuery,
  useGetReserveQuery,
} from "../../api/projectApiSlice";
import ReserveCard from "../../components/reserveCard/ReserveCard";

import "./reservation.scss";

const Reservation = () => {
  const reserve = useGetReserveQuery();
  const resApartment = reserve.data ? reserve.data[0].apartment : null;
  const resId = reserve.data ? reserve.data[0]._id : null;
  const { data } = useGetAuthUserQuery();
  if (data) {
    const user = data.username;
    const isAuth = data.isAuth;
    // const { project, image, price, reserved } = resApartment;
    console.log("reservation", user, isAuth, data);
    console.log("Reserve:", resId, resApartment);
    return (
      <div className="reserveContainer">
        <div className="reserveGreeting">Hello {user}!</div>
        {resApartment ? (
          <>
            <h5>Confirm reservation</h5>
            <ReserveCard
              image={resApartment.image}
              name={resApartment.project.name}
              price={resApartment.price}
              id={resId}
            />
          </>
        ) : (
          <h5>You haven`&apos;`t reservation yet</h5>
        )}
      </div>
    );
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
