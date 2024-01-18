import { useState } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { GoHorizontalRule } from "react-icons/go";

import "./previewSlider.scss";

const slideStyles = {
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
};

const PreviewSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  return (
    <div className="sliderStyles">
      <div>
        <div
          onClick={goToPrevious}
          onMouseEnter={goToPrevious}
          className="leftArrowStyles"
        >
          <MdOutlineKeyboardArrowLeft />
        </div>
        <div
          onClick={goToNext}
          onMouseEnter={goToNext}
          className="rightArrowStyles"
        >
          <MdOutlineKeyboardArrowRight />
        </div>
      </div>
      <div style={slideStylesWidthBackground}>
        <div className="dotsContainerStyles">
          {slides.map((slide, slideIndex) => (
            <div
              className="dotStyle"
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              onMouseEnter={() => goToSlide(slideIndex)}
            >
              <GoHorizontalRule />
            </div>
          ))}
          {/* <div className="test">Choose now!</div> */}
        </div>
      </div>
    </div>
  );
};

export default PreviewSlider;
