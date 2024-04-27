import { useState } from "react";
import Map from "../../components/map/Map";
// import categories from "../../seeds/categories.js";

import "./contacts.scss";
import { useGetProjectsQuery } from "../../api/projectApiSlice.js";

const headOffice = [
  {
    name: "Head Office",
    location: "Hod HaSharon",
    geometry: [34.883333, 32.15],
  },
];

const Contacts = () => {
  const [isMoscow, setIsMoscow] = useState(false);
  const [isHeadOffice, setIsHeadOffice] = useState(true);
  const { data, isSuccess } = useGetProjectsQuery();
  const categories = data;

  return (
    <div className="contactContainer">
      <div className="contactInfo">
        <h2>Sales Offices</h2>
        <button
          className={isHeadOffice ? "btnMap activeMapBtn" : "btnMap"}
          onClick={() => {
            setIsMoscow(false);
            setIsHeadOffice(true);
          }}
        >
          Head Office
        </button>
        <button
          onClick={() => {
            setIsMoscow(true);
            setIsHeadOffice(false);
          }}
          className={isMoscow ? "btnMap activeMapBtn" : "btnMap"}
        >
          Moscow
        </button>
      </div>
      <div className="mapContainer">
        {isMoscow && isSuccess && (
          <Map projects={categories} initLat={55.751244} initLng={37.618423} />
        )}
        {isHeadOffice && (
          <Map projects={headOffice} initLat={32.15} initLng={34.883333} />
        )}
      </div>
    </div>
  );
};

export default Contacts;
