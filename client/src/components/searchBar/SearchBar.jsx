import { useEffect, useState } from "react";
import Select from "react-select";
import MultiRangeSlider from "../dualSlider/DualSlider";
import { MdOutlineClose } from "react-icons/md";
import { useFilterProjectsMutation } from "../../api/projectApiSlice";

import "./searchBar.scss";
import categories from "../../seeds/categories";

const SearchBar = () => {
  const [filterProjects, { data }] = useFilterProjectsMutation();
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

  //   const defaultFilter = {
  //     dates: [],
  //     minPrice: null,
  //     maxPrice: null,
  //     locations: {},
  //   };

  //   States
  //   const [filter, setFilter] = useState(defaultFilter);
  const [filteredItems, setFilteredItems] = useState(categories);
  const [minNum, setMinNum] = useState(min);
  const [maxNum, setMaxNum] = useState(max);
  //   const [isClicked, setIsClicked] = useState(false);
  const [compDate, setCompDate] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState([]);

  //   const { dates, minPrice, maxPrice, locations } = filter;

  //   handlefunctions
  const chooseHandler = (selectedOptions) => {
    console.log(selectedOptions);
    selectedOptions.map((option) => {
      const location = option.value;
      console.log(option.value);
      setSelectedLocation([...selectedLocation, location]);
    });
  };

  const pushButton = (pushedBtn) => {
    const isExist = compDate.find((data) => data === pushedBtn);
    if (!isExist) {
      return setCompDate([...compDate, pushedBtn]);
    } else {
      return setCompDate(compDate.filter((date) => date !== pushedBtn));
    }
  };

  //   useEffect(() => {
  //     const handleFilterChange = () => {
  //       setFilter({
  //         dates: compDate,
  //         minPrice: minNum,
  //         maxPrice: maxNum,
  //         location: selectedLocation,
  //       });
  //     };
  //     handleFilterChange();
  //   }, [compDate, maxNum, minNum, selectedLocation]);

  const handleSubmit = async (e) => {
    e.preventDefault();
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
  console.log(data);

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
              onChange={chooseHandler}
            />
          </label>
          <label>
            <h6 id="contrastColor">Choose price</h6>
            <MultiRangeSlider
              min={min}
              max={max}
              onChange={({ min, max }) => {
                setMinNum(min);
                setMaxNum(max);
                console.log(`min = ${min}, max = ${max}`);
              }}
            />
          </label>
          <label>
            <h6>Completion date</h6>
            <div className="buttons">
              {completionDate.map((date, idx) => {
                return (
                  <button
                    id={idx}
                    key={idx}
                    className={`btn ${
                      compDate.find((el) => el === date.toString())
                        ? "active"
                        : ""
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
          <div
            className="clearFilter"
            onClick={() => {
              console.log("cleared");
            }}
          >
            <MdOutlineClose />
            Clear
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
