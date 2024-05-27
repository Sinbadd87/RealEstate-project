import ProjectCard from "../projectCard/ProjectCard";
import "./projectCategories.scss";
import {
  useFilterProjectsMutation,
  useGetProjectsQuery,
} from "../../api/projectApiSlice.js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectProjects, setProjects } from "../../features/projectsSlice.js";

const ProjectCategories = () => {
  const getProjects = useGetProjectsQuery();
  const categories = getProjects?.data;

  const [filterProjects, { data }] = useFilterProjectsMutation({
    fixedCacheKey: "sharedFilterProjects",
  });

  const dispatch = useDispatch();
  const projects = useSelector(selectProjects);

  useEffect(() => {
    if (data) {
      dispatch(setProjects(data));
    } else if (getProjects.isSuccess) {
      dispatch(setProjects(categories));
    }
  }, [data, getProjects, categories, dispatch]);

  return (
    <div className="projectCategoriesContainer">
      {projects &&
        projects.map((category) => {
          return <ProjectCard key={category.name} category={category} />;
        })}
    </div>
  );
};

export default ProjectCategories;
