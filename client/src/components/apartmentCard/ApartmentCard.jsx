import "./apartmentCard.scss";

const ApartmentCard = ({ apartment }) => {
  const { image, rooms, price } = apartment;
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
        <button className="reserveBtn">Reserve</button>
      </div>
    </div>
  );
};

export default ApartmentCard;
