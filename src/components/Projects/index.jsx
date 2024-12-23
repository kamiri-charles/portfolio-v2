import { useEffect, useState } from "react";
import Project from "../Project";
import Loader from "../Loader";
import data from "../../projects.json";
import "./styles.scss";

const Projects = () => {
	let [projects, setProjects] = useState();

	useEffect(() => {
		setTimeout(() => {
			setProjects(data);
		}, 2000);
	}, [projects]);

	return (
		<div className="projects" id="projects">
			{projects ? (
				projects.map((project, idx) => <Project key={idx} {...project} />)
			) : (
				<Loader />
			)}
		</div>
	);
};

export default Projects;
