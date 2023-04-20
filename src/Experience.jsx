import React, { useState } from "react";
import ExperienceStyles from "./styles/Experience.module.scss";
import Tab from "./components/Tab";
import ExperienceDetail from "./components/ExperienceDetail";

function Feature() {
  const [activePer, setActivePer] = useState(true);
  const [activeCog, setActiveCog] = useState(false);
  const [activeInf, setActiveInf] = useState(false);

  const setActiveParent = (company) => {
    if (company === "Perficient") {
      setActivePer(true);
      setActiveCog(false);
      setActiveInf(false);
    } else if (company === "Cognizant") {
      setActivePer(false);
      setActiveCog(true);
      setActiveInf(false);
    } else if (company === "Infosys") {
      setActivePer(false);
      setActiveCog(false);
      setActiveInf(true);
    }
  };

  return (
    <section className={ExperienceStyles.container}>
      <p className={ExperienceStyles.title}>My Experience</p>

      <div className={ExperienceStyles.companyDetail}>
        <div className={ExperienceStyles.companies}>
          <Tab
            company="Perficient"
            active={activePer}
            setActive={setActiveParent}
          />
          <Tab
            company="Cognizant"
            active={activeCog}
            setActive={setActiveParent}
          />
          <Tab
            company="Infosys"
            active={activeInf}
            setActive={setActiveParent}
          />
        </div>
        <div className={ExperienceStyles.DetailsContainer}>
          <ExperienceDetail
            show={activePer}
            position="Software Developer"
            company="Perficient"
            dates={["June 2022", "Present"]}
            details={[
              "Developed a web application using React, Redux, and Node.js to help users find the best deals on flights and hotels.",
              "Implemented a RESTful API using Node.js and Express.js to fetch data from the database and send it to the client.",
              "Designed and implemented a database using MongoDB to store user information and flight/hotel data.",
            ]}
          />
          <ExperienceDetail
            show={activeCog}
            position="Software and Web Developer"
            company="Cognizant"
            dates={["June 2022", "Present"]}
            details={[
              "Developed a web application using React, Redux, and Node.js to help users find the best deals on flights and hotels.",
              "Implemented a RESTful API using Node.js and Express.js to fetch data from the database and send it to the client.",
              "Designed and implemented a database using MongoDB to store user information and flight/hotel data.",
            ]}
          />
          <ExperienceDetail
            show={activeInf}
            position="Software engineer"
            company="Infosys"
            dates={["June 2022", "Present"]}
            details={[
              "Developed a web application using React, Redux, and Node.js to help users find the best deals on flights and hotels.",
              "Implemented a RESTful API using Node.js and Express.js to fetch data from the database and send it to the client.",
              "Designed and implemented a database using MongoDB to store user information and flight/hotel data.",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

export default Feature;
