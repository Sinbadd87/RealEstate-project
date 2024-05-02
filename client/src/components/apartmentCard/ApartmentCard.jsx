import { useReserveMutation } from "../../api/projectApiSlice.js";
import { useNavigate } from "react-router-dom";
import "./apartmentCard.scss";

const ApartmentCard = ({ apartment }) => {
  const { image, rooms, price, project, _id } = apartment;
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
      console.log(error);
    }
  };
  return (
    <div className="apartmentCardContainer">
      <div className="apartmentCardTitle">
        <h3>{rooms} rooms appartment</h3>
      </div>
      <div className="apartmentCardImage">
        <img src={image} />
      </div>
      <div className="apartmentCardInfo">Price: {price}$</div>
      <div className="apartmentCardBtn">
        <button className="reserveBtn" onClick={handleReserve}>
          Reserve
        </button>
      </div>
    </div>
  );
};

export default ApartmentCard;
