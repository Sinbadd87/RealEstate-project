import ProjectCard from "../projectCard/ProjectCard";
import "./projectcategories.scss";
import { useGetProjectsQuery } from "../../api/project.api";

const ProjectCategories = () => {
  const { data } = useGetProjectsQuery();
  const categories = data;

  return (
    <div className="projectCategoriesContainer">
      {categories &&
        categories.map((category) => {
          return <ProjectCard key={category.name} category={category} />;
        })}
    </div>
  );
};

export default ProjectCategories;
