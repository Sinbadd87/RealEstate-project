import { MdOutlineClose } from "react-icons/md";
import { useDeleteReserveMutation } from "../../api/projectApiSlice";
import "./reserveCard.scss";

const ReserveCard = ({ image, price, name, id }) => {
  const [deleteReserve, { isSuccess, isError }] = useDeleteReserveMutation();
  const handleReserve = () => {
    alert("Call us: 050 000-00-00");
    // TODO: Create modal popup instead alert
  };
  const handleDeleteReserve = async () => {
    try {
      await deleteReserve(id);
      console.log("deleted", isSuccess);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="reserveCardContainer">
      <div className="reserveCardImage">
        <img src={image} />
      </div>
      <div className="reserveCardBody">
        <div className="reserveCardTitle">{name}</div>
        <div className="reserveCardInfo">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
          natus quibusdam cumque distinctio molestias, officia nihil, facere
          commodi nesciunt asperiores numquam quaerat aspernatur, voluptate
          maxime voluptas dolore inventore at ab!
        </div>
        <div className="reserveCardPrice">${price}</div>
        <button className="btnReserveContact" onClick={handleReserve}>
          Confirm
        </button>
      </div>
      <div className="reserveCardDelete">
        <MdOutlineClose onClick={handleDeleteReserve} />
      </div>
    </div>
  );
};

export default ReserveCard;
