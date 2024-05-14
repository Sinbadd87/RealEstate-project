import {
  useGetAuthUserQuery,
  useGetReserveQuery,
} from "../../api/projectApiSlice";
import ReserveCard from "../../components/reserveCard/ReserveCard";

import "./reservation.scss";

const Reservation = () => {
  const { data: reserve, isSuccess, isError, isLoading } = useGetReserveQuery();

  const { data } = useGetAuthUserQuery();

  if (data) {
    const user = data.username;

    return (
      <div className="reserveContainer">
        <div className="reserveGreeting">Hello {user}!</div>
        {isLoading && <div>Loading...</div>}
        {isSuccess &&
          reserve.map((resApartment, i) => {
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
  }
};

export default Reservation;
