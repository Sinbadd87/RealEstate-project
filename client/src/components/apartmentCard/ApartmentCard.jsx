import { useReserveMutation } from "../../api/projectApiSlice.js";
import { useNavigate } from "react-router-dom";
import "./apartmentCard.scss";

const ApartmentCard = ({ apartment }) => {
  const { image, rooms, price, _id, reserved } = apartment;
  const navigate = useNavigate();
  const [reserve] = useReserveMutation();
  const handleReserve = async (e) => {
    e.preventDefault();
    try {
      const reserveApartment = await reserve({
        _id,
      }).unwrap();
      console.log(reserveApartment);
      navigate("/reservation");
    } catch (error) {
      navigate("/auth");
    }
  };
  const handleDisabledEvent = (e) => {
    e.preventDefault();
  };
  return (
    <div className="apartmentCardContainer" aria-disabled={reserved}>
      <div className="apartmentCardTitle">
        <h3>{rooms} rooms appartment</h3>
      </div>
      <div className="apartmentCardImage">
        <img src={image} />
        {reserved && <div className="reserved">Reserved</div>}
      </div>
      <div className="apartmentCardInfo">Price: {price}$</div>
      <div className="apartmentCardBtn">
        <button
          className={reserved ? "reserveBtn reservedBtn" : "reserveBtn"}
          onClick={reserved ? handleDisabledEvent : handleReserve}
          aria-disabled={reserved}
        >
          Reserve
        </button>
      </div>
    </div>
  );
};

export default ApartmentCard;
