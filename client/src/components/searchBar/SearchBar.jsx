// import { useState } from "react";
import Select from "react-select";
import MultiRangeSlider from "../dualSlider/DualSlider";
import { MdOutlineClose } from "react-icons/md";

import "./searchBar.scss";
import categories from "../../seeds/categories";

const SearchBar = () => {
  const location = categories.map((category) => ({
    value: category.location,
    label: category.location,
  }));
  //   const completionDate = categories.map((category) => ({
  //     value: category.completionDate,
  //     label: category.completionDate,
  //   }));
  //   console.log(location);
  //   const [selected, setSelected] = useState(false);
  //   const chooseHandler = () => setSelected(!selected);
  const colorStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "#f4f6fb",
      border: "none",
      borderRadius: "8px",
      height: "56px",
      width: "512px",
      paddingLeft: "10px",
      transition: "all .3s ease",
      cursor: "pointer",
      ":hover": { borderRadius: "25px" },
    }),
    placeholder: (styles) => ({
      ...styles,
      color: "#282d3c",
      fontWeight: "500",
    }),
  };
  return (
    <div className="searchBarContainer">
      <h1>Our projects</h1>
      <form>
        <div className="formContainer">
          <label>
            <h6>Choose location</h6>
            <Select
              isMulti
              options={location}
              styles={colorStyles}
              placeholder="Type address"
            />
          </label>
          <label>
            <h6 id="contrastColor">Choose price</h6>
            <MultiRangeSlider
              min={0}
              max={1000}
              onChange={({ min, max }) =>
                console.log(`min = ${min}, max = ${max}`)
              }
            />
          </label>
          <label>
            <h6>Completion date</h6>
            <div className="buttons">
              <button className="btn">2024</button>
              <button className="btn">2025</button>
              <button className="btn">2026</button>
            </div>
          </label>
        </div>
        <div className="submitAndClearContainer">
          <a type="submit" className="resultSubmit">
            Found 10 objects
          </a>
          <div className="clearFilter">
            <MdOutlineClose />
            Clear
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
