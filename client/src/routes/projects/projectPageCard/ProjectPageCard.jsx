import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import categories from "../../../seeds/categories";
import PreviewSlider from "../../../components/previewSlider/PreviewSlider";
import "./projectPageCard.scss";
import Map from "../../../components/map/Map";

const Styles = {
  width: "100%",
  height: "100%",
  borderRadius: "0",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
};

const ProjectPageCard = () => {
  let { id } = useParams();
  const project = categories.find((project) => project.id === id);
  console.log([project]);
  return (
    <div className="pageCardContainer">
      <div className="previewProjectPage">
        <PreviewSlider slides={project.images.preview} testStyle={Styles} />
      </div>
      <div className="cardInfo">
        <h2>{project.name}</h2>
        <h4>From {project.minPrice}$</h4>
        <h4>{project.location}</h4>
      </div>
      <div className="aboutProject">
        <div className="aboutText">
          <h2>About</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            sequi, a vero necessitatibus nulla id porro dolores exercitationem
            magnam reiciendis iste expedita officia fugit praesentium corrupti
            incidunt temporibus totam commodi. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Rem libero voluptates aspernatur,
            maiores aliquam quaerat ratione? Provident inventore, eligendi
            similique, explicabo placeat, quas pariatur natus commodi vero quasi
            saepe reprehenderit?
          </p>
          <button className="btnProjectPage">
            <Link to="/auth" style={{ color: "white", fontWeight: "500" }}>
              Learn more
            </Link>
          </button>
        </div>
        <div className="aboutImg">
          <img src={project.images.preview[2].url} />
        </div>
      </div>
      <div className="projectPageMap">
        <Map
          projects={[project]}
          initLat={project.geometry[1]}
          initLng={project.geometry[0]}
          initZoom={11}
        />
      </div>
    </div>
  );
};

export default ProjectPageCard;
