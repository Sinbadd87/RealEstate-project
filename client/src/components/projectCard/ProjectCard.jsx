import { useState } from "react";
import { Link } from "react-router-dom";
import PreviewSlider from "../previewSlider/PreviewSlider";
import "./projectCard.scss";

const ProjectCard = ({ category }) => {
  const slide = category.images.preview;
  const name = category.name;
  const price = category.minPrice;
  const location = category.location;
  const completionDate = category.completionDate;
  const id = category.id;
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  return (
    <div
      className="cardContainer"
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <div className="cardPreviewSlider">
        <Link to={`/projects/${id}`}>
          <PreviewSlider slides={slide} className="previewTest" />
        </Link>
        <div className="complitionDateInfo">{completionDate}</div>
        <button className={hovered ? "active btnAboutProject" : "hidden"}>
          <Link to={`/projects/${id}`} target="_blank">
            Learn More
          </Link>
        </button>
      </div>
      <div className="projectTitleContainer">
        <Link to={`/projects/${id}`}>
          <div className="projectTitleRow">
            <h4>{name}</h4>
            <h5>from {price} $</h5>
          </div>
          <div className="projectInfoRow">
            <h6>{location}</h6>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
