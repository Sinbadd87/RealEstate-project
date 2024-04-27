import { useState } from "react";
import Select from "react-select";
import MultiRangeSlider from "../dualSlider/DualSlider";
import { MdOutlineClose } from "react-icons/md";
import {
  useFilterProjectsMutation,
  useGetProjectsQuery,
} from "../../api/projectApiSlice";

import "./searchBar.scss";

const SearchBar = () => {
  const getProjects = useGetProjectsQuery();
  const categories = getProjects.isSuccess ? getProjects.data : [];

  const location = categories.map((category) => ({
    value: category.location,
    label: category.location,
    id: category.name,
  }));

  const completionDateArr = categories
    .map((category) => category.completionDate)
    .sort();

  const completionDate = [...new Set(completionDateArr)];

  const minPricesArr = categories.map((category) => {
    return category.minPrice;
  });
  const maxPriceArr = categories.map((category) => {
    return category.maxPrice;
  });
  const min = Math.min(...minPricesArr);
  const max = Math.max(...maxPriceArr);

  //  Trying another way to set min/max. Leave for later
  // const getMin = (a, b) => Math.min(a, b);
  //   console.log(categories.map((catrgory) => catrgory.minPrice).reduce(getMin));

  //   States
  const [filteredItems, setFilteredItems] = useState(categories);
  const [minNum, setMinNum] = useState(min);
  const [maxNum, setMaxNum] = useState(max);
  const [compDate, setCompDate] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [filterProjects, { data }] = useFilterProjectsMutation({
    fixedCacheKey: "sharedFilterProjects",
  });

  const pushButton = (pushedBtn) => {
    const isExist = compDate.find((data) => data === pushedBtn);
    if (!isExist) {
      return setCompDate([...compDate, pushedBtn]);
    } else {
      return setCompDate(compDate.filter((date) => date !== pushedBtn));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const selectedLocation = selectedOption.map((option) => {
      const location = option.value;
      return location;
    });
    try {
      const filter = await filterProjects({
        compDate,
        minNum,
        maxNum,
        selectedLocation,
      }).unwrap();
      console.log(filter);
    } catch (error) {
      console.log(error);
    }
  };
  // TODO: Make Select and DualRange clear on button click!
  const handleClear = (e) => {
    e.preventDefault();
    setCompDate([]);
  };
  // Select multi styles
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
    menu: (styles) => ({
      ...styles,
      zIndex: "2",
    }),
  };

  return (
    <div className="searchBarContainer">
      <h1>Our projects</h1>
      <form onSubmit={handleSubmit} method="POST">
        <div className="formContainer">
          <label>
            <h6>Choose location</h6>
            <Select
              isMulti
              options={location}
              styles={colorStyles}
              placeholder="Type address"
              onChange={setSelectedOption}
            />
          </label>
          <label>
            <h6 id="contrastColor">Choose price</h6>
            {getProjects.isSuccess && (
              <MultiRangeSlider
                min={min}
                max={max}
                onChange={({ min, max }) => {
                  setMinNum(min);
                  setMaxNum(max);
                  //   console.log(`min = ${min}, max = ${max}`);
                }}
              />
            )}
          </label>
          <label style={{ height: "20px" }}>
            <h6>Completion date</h6>
            <div className="buttons">
              {/* TODO: Or create Button component, or make hover effect onMouseEnter/onMouseLeave */}
              {completionDate.map((date, idx) => {
                return (
                  <button
                    id={idx}
                    key={idx}
                    className={`${
                      compDate.find((el) => el === date.toString())
                        ? "activeBtn btn"
                        : "btn"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      pushButton(e.target.value);
                    }}
                    value={date}
                  >
                    {date}
                  </button>
                );
              })}
            </div>
          </label>
        </div>
        <div className="submitAndClearContainer">
          <button>
            <a type="submit" className="resultSubmit">
              Found {filteredItems.length} objects
            </a>
          </button>
          <div className="clearFilter" onClick={handleClear}>
            <MdOutlineClose />
            Clear
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
