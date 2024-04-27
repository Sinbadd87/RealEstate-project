import ApartmentCard from "../../components/apartmentCard/ApartmentCard.jsx";
import { useParams } from "react-router-dom";
import { useGetApartmentQuery } from "../../api/projectApiSlice.js";

import "./apartmentPage.scss";

const ApartmentsPage = () => {
  let { id } = useParams();
  const { data, isSuccess, isLoading } = useGetApartmentQuery(id);
  const apartments = data?.apartments;

  return (
    <div className="apartmentPageContainer">
      {isSuccess &&
        apartments.map((apartment, i) => {
          return <ApartmentCard key={i} apartment={apartment} />;
        })}
      {isLoading && <h1>Loading</h1>}
    </div>
  );
};

export default ApartmentsPage;
