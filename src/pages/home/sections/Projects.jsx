import React from "react";
import ProjectCard from "./components/ProjectCard.jsx";
import styles from './styles/projects.module.css';
import projects from '../../../data/projects.js'

function Projects() {


  return (

    <section className="flex justify-center w-[100%] ">
      <div className={`${styles.projects_container} p-[10em] w-[120em] `}>
        <div className={styles.projects}>
          {projects.map((card, index) => (
            <ProjectCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects;
