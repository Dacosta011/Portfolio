import React from "react";
import SkillsStyles from "./styles/Skills.module.scss";

function Skil({ title, description, children }) {
  return (
    <div className={SkillsStyles.skill}>
      {children}
      <p className={SkillsStyles.title}>{title}</p>
      <p className={SkillsStyles.description}>{description}</p>
    </div>
  );
}

export default Skil;
