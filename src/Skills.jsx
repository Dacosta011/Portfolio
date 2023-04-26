import React from "react";
import { DiReact } from "react-icons/di";
import { IoPhonePortraitOutline, IoLogoNodejs } from "react-icons/io5";
import Skil from "./Skil";
import SkillsStyles from "./styles/Skills.module.scss";

function Skills() {
  return (
    <section className={SkillsStyles.skilsContainer}>
      <Skil
        title="React Js"
        description="Tengo experiencia en la construcción de interfaces de usuario interactivas y dinámicas para aplicaciones web utilizando la biblioteca de JavaScript React.js. He trabajado con tecnologías relacionadas como Redux, React Router, Material UI, y Styled Components."
      >
        {" "}
        <DiReact className={SkillsStyles.logo} />{" "}
      </Skil>
      <Skil
        title="React Native"
        description="He trabajado con React Native para crear aplicaciones móviles para iOS y Android. Tengo experiencia en la creación de componentes personalizados utilizando tecnologías como Expo, Redux, React Navigation y Styled Components. También he trabajado con herramientas de pruebas como Jest y Enzyme para garantizar una calidad de código elevada."
      >
        {" "}
        <IoPhonePortraitOutline className={SkillsStyles.logo} />{" "}
      </Skil>
      <Skil
        title="Node Js"
        description="Tengo experiencia en la construcción de aplicaciones web del lado del servidor utilizando Node.js. He trabajado con frameworks como Express.js, NestJS y MeteorJS, y he creado APIs RESTful utilizando tecnologías como MongoDB, PostgreSQL y GraphQL. También tengo experiencia en el uso de herramientas de automatización de tareas como Gulp, Grunt y Webpack."
      >
        {" "}
        <IoLogoNodejs className={SkillsStyles.logo} />{" "}
      </Skil>
    </section>
  );
}

export default Skills;
