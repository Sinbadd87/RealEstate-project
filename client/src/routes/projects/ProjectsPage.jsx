import SearchBar from "../../components/searchBar/SearchBar";
import ProjectCategories from "../../components/projectCategories/ProjectCategories";
import Map from "../../components/map/Map";
import categories from "../../seeds/categories.js";
import "./projectPage.scss";

const ProjectsPage = () => {
  return (
    <div className="projectsPageContainer">
      <div className="projectPageMapContainer">
        <Map
          projects={categories}
          initLat={55.6461611998274}
          initLng={37.63567793970108}
          initZoom={9}
        />
      </div>
      <SearchBar />
      <ProjectCategories />
    </div>
  );
};

export default ProjectsPage;
