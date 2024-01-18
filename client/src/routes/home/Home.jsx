import PreviewSlider from "../../components/previewSlider/PreviewSlider";
import previewSlides from "../../seeds/previewslides";
import "./home.scss";

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="previewSliderContainer">
        <PreviewSlider slides={previewSlides} />
      </div>
    </div>
  );
};

export default Home;
