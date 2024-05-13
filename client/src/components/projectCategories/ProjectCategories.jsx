import ProjectCard from "../projectCard/ProjectCard";
import "./projectcategories.scss";
import {
  useFilterProjectsMutation,
  useGetProjectsQuery,
} from "../../api/projectApiSlice.js";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectProjects, setProjects } from "../../features/projectsSlice.js";

const ProjectCategories = () => {
  const getProjects = useGetProjectsQuery();
  const categories = getProjects?.data;

  const [filterProjects, { data, reset }] = useFilterProjectsMutation({
    fixedCacheKey: "sharedFilterProjects",
  });

  const dispatch = useDispatch();
  const projects = useSelector(selectProjects);
  //   const [projects, setProjects] = useState([]);
  useEffect(() => {
    if (data) {
      console.log("Check", data);
      dispatch(setProjects(data));
    } else if (getProjects.isSuccess) {
      dispatch(setProjects(categories));
    }
  }, [data, getProjects, categories, dispatch]);
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
