import {
  useGetAuthUserQuery,
  useGetReserveQuery,
} from "../../api/projectApiSlice";
import ReserveCard from "../../components/reserveCard/ReserveCard";

import "./reservation.scss";

const Reservation = () => {
  const { data: reserve, isSuccess, isError, isLoading } = useGetReserveQuery();
  //   const resApartment = reserve ? reserve[0].apartment : null;
  //   const resId = reserve ? reserve[0]._id : null;
  const { data } = useGetAuthUserQuery();

  if (data) {
    const user = data.username;
    // const isAuth = data.isAuth;
    // const { project, image, price, reserved } = resApartment;
    // console.log("reservation", user, isAuth, data);
    // console.log("Reserve:", resId, resApartment);
    return (
      <div className="reserveContainer">
        <div className="reserveGreeting">Hello {user}!</div>
        {isLoading && <div>Loading...</div>}
        {isSuccess &&
          reserve.map((resApartment, i) => {
            console.log("success");
            const { image, project, price } = resApartment.apartment;
            const id = resApartment._id;
            return (
              <>
                <h5>Confirm reservation</h5>
                <ReserveCard
                  key={i}
                  image={image}
                  name={project.name}
                  price={price}
                  id={id}
                />
              </>
            );
          })}
        {isError && <h5>You haven&apos;t reservation yet</h5>}
      </div>
    );

    // return (
    //   <div className="reserveContainer">
    //     <div className="reserveGreeting">Hello {user}!</div>
    //     {reserve ? (
    //       <>
    //         <h5>Confirm reservation</h5>
    //         <ReserveCard
    //           image={resApartment.image}
    //           name={resApartment.project.name}
    //           price={resApartment.price}
    //           id={resId}
    //         />
    //       </>
    //     ) : (
    //       <h5>You haven&apos;t reservation yet</h5>
    //     )}
    //   </div>
    // );
  }
};

export default Reservation;
