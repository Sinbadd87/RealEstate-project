import ProjectCard from "../projectCard/ProjectCard";
import "./projectcategories.scss";
import {
  useFilterProjectsMutation,
  useGetProjectsQuery,
} from "../../api/projectApiSlice.js";
import { useEffect, useMemo, useState } from "react";

const ProjectCategories = () => {
  const getProjects = useGetProjectsQuery();
  const categories = getProjects.data;

  const [filterProjects, { data }] = useFilterProjectsMutation({
    fixedCacheKey: "sharedFilterProjects",
  });
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    if (data) {
      console.log("Check", data);
      setProjects(data);
    } else if (getProjects.isSuccess) {
      setProjects(categories);
    }
  }, [data, getProjects, categories]);
  console.log(projects);

  return (
    <div className="projectCategoriesContainer">
      {getProjects.isSuccess &&
        projects.map((category) => {
          return <ProjectCard key={category.name} category={category} />;
        })}
    </div>
  );
};

export default ProjectCategories;
