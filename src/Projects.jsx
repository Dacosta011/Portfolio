import React from "react";
import ProjectsStyles from "./styles/Projects.module.scss";
import Project from "./Project";

function Projects() {
  return (
    <section className={ProjectsStyles.container}>
      <Project
        title="SOCIAL NETWORK MOVIL APP"
        subtitle="React Native App"
        description="Aplicación es una red social en React Native que incluye un feed, chat, notificaciones y perfil de usuario. Se utiliza Firebase para la autenticación, gestión de usuarios, base de datos y notificaciones push en tiempo real."
        image="https://firebasestorage.googleapis.com/v0/b/porfolio-eb408.appspot.com/o/MacBook%20Air%20-%201.png?alt=media&token=2498aa25-5376-4014-b594-ea72eca41ab3"
        sourceBut="https://github.com/Dacosta011/SocialMediaApp"
        tegnologies={["React Native", "Firebase", "Redux", "Expo"]}
      />
      <Project
        title="SOCIAL NETWORK MOVIL APP"
        subtitle="React Native App"
        description="Aplicación es una red social en React Native que incluye un feed, chat, notificaciones y perfil de usuario. Se utiliza Firebase para la autenticación, gestión de usuarios, base de datos y notificaciones push en tiempo real."
        image="https://firebasestorage.googleapis.com/v0/b/porfolio-eb408.appspot.com/o/MacBook%20Air%20-%201.png?alt=media&token=2498aa25-5376-4014-b594-ea72eca41ab3"
        sourceBut="https://github.com/Dacosta011/SocialMediaApp"
        tegnologies={["React Native", "Firebase", "Redux", "Expo"]}
      />
      <Project
        title="SOCIAL NETWORK MOVIL APP"
        subtitle="React Native App"
        description="Aplicación es una red social en React Native que incluye un feed, chat, notificaciones y perfil de usuario. Se utiliza Firebase para la autenticación, gestión de usuarios, base de datos y notificaciones push en tiempo real."
        image="https://firebasestorage.googleapis.com/v0/b/porfolio-eb408.appspot.com/o/MacBook%20Air%20-%201.png?alt=media&token=2498aa25-5376-4014-b594-ea72eca41ab3"
        sourceBut="https://github.com/Dacosta011/SocialMediaApp"
        tegnologies={["React Native", "Firebase", "Redux", "Expo"]}
      />
    </section>
  );
}

export default Projects;
