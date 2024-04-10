import { Link } from "react-router-dom";
import ProjectCard from "../projectCard/ProjectCard";
import "./projectcategories.scss";
import categories from "../../seeds/categories";

const ProjectCategories = () => {
  return (
    <div className="projectCategoriesContainer">
      {categories.map((category) => {
        return <ProjectCard key={category.name} category={category} />;
      })}
    </div>
  );
};

export default ProjectCategories;
