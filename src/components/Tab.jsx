import { useEffect } from "react";
import { useState } from "react";
import ExperienceStyles from "../styles/Experience.module.scss";

function Tab({ company, active, setActive }) {
  const handleClick = () => {
    setActive(company);
  };
  return (
    <div className={ExperienceStyles.company} onClick={handleClick}>
      <span
        style={{
          color: active ? "red" : "black",
        }}
      >
        {company}
      </span>
    </div>
  );
}

export default Tab;
