import "./home.scss";

import PreviewSlider from "../../components/previewSlider/PreviewSlider";
import previewSlides from "../../seeds/previewslides";
import SearchBar from "../../components/searchBar/SearchBar";
import ProjectCategories from "../../components/projectCategories/ProjectCategories";

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="previewSliderContainer">
        <PreviewSlider slides={previewSlides} />
      </div>
      <SearchBar />
      <ProjectCategories />
    </div>
  );
};

export default Home;
