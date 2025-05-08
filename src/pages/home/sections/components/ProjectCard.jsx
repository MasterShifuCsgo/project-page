import React from "react";
import styles from '../styles/card-styles.module.css'
import icon from './Icon';


function ProjectCard({ imgURL, title, desc, iconList }) {

  const icons = iconList.map(({ name, link }, index) => (<div key={index}>icon(name, link)</div>));

  return (
    <div className={styles.card}>
      <div className={styles.card_top}>
        {imgURL && <img className={styles.card_image} src={imgURL} alt="card_image" />}
      </div>
      <div className={styles.card_bottom}>
        <div className={`text-black ${styles.text_area}`}>
          <h1 className="text-4xl">{title ? title : "No title"}</h1>
          <p className="text-xl">{desc ? desc : "No description"}</p>
          <nav className="w-fit">
            {icons}
          </nav>
        </div>
      </div>
    </div>
  )


}

export default ProjectCard
