import { useState } from "react";
import PreviewSlider from "../previewSlider/PreviewSlider";
// import categories from "../../seeds/categories";
import "./projectCard.scss";

// const slide = categories[0].images.preview;

const ProjectCard = ({ category }) => {
  const slide = category.images.preview;
  const name = category.name;
  const price = category.minPrice;
  const location = category.location;
  const completionDate = category.completionDate;
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  return (
    <div
      className="cardContainer"
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <div className="cardPreviewSlider">
        <PreviewSlider slides={slide} />
        <div className="complitionDateInfo">{completionDate}</div>
        <button className={hovered ? "active btnAboutProject" : "hidden"}>
          <a>Learn More</a>
        </button>
      </div>
      <div className="projectTitleContainer">
        <div className="projectTitleRow">
          <h4>{name}</h4>
          <h5>from {price} $</h5>
        </div>
        <div className="projectInfoRow">
          <h6>{location}</h6>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
