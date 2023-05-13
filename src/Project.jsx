import React from "react";
import ProjectsStyles from "./styles/Projects.module.scss";
import { TiTick } from "react-icons/ti";

function Project({
  title,
  subtitle,
  description,
  sourceBut,
  liveBut,
  image,
  tegnologies,
}) {
  return (
    <div className={ProjectsStyles.project}>
      <div className={ProjectsStyles.info}>
        <p className={ProjectsStyles.title}>{title}</p>
        <p className={ProjectsStyles.subtitle}>{subtitle}</p>
        <p className={ProjectsStyles.description}>{description}</p>
        <div className={ProjectsStyles.tegnologies}>
          <ul className={ProjectsStyles.tegnologiesList}>
            {tegnologies.map((tegnology, index) => (
              <li key={index}>
                <TiTick />
                {tegnology}
              </li>
            ))}
          </ul>
        </div>
        <div className={ProjectsStyles.buttons}>
          <a className={ProjectsStyles.sourceBut} href={sourceBut}>
            <span>source code</span>{" "}
          </a>
          {liveBut && (
            <a className={ProjectsStyles.liveBut}>
              {" "}
              <span>live demo</span>{" "}
            </a>
          )}
        </div>
      </div>
      <div className={ProjectsStyles.image}>
        <img src={image} alt="" />
      </div>
    </div>
  );
}

export default Project;
