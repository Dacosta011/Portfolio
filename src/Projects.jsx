import React from "react";
import ProjectsStyles from "./styles/Projects.module.scss";
import Project from "./Project";

function Projects() {
  return (
    <section className={ProjectsStyles.container} id="projectsScection">
      <Project
        title="SOCIAL NETWORK MOVIL APP"
        subtitle="React Native App"
        description="Aplicación es una red social en React Native que incluye un feed, chat, notificaciones y perfil de usuario. Se utiliza Firebase para la autenticación, gestión de usuarios, base de datos y notificaciones push en tiempo real."
        image="https://firebasestorage.googleapis.com/v0/b/porfolio-eb408.appspot.com/o/MacBook-Air.webp?alt=media&token=f29efb10-6224-485c-b00d-13628395fd24"
        sourceBut="https://github.com/Dacosta011/SocialMediaApp"
        tegnologies={["React Native", "Firebase", "Redux", "Expo"]}
        left={true}
      />
      <Project
        title="SOCIAL NETWORK MOVIL APP"
        subtitle="React Native App"
        description="Aplicación es una red social en React Native que incluye un feed, chat, notificaciones y perfil de usuario. Se utiliza Firebase para la autenticación, gestión de usuarios, base de datos y notificaciones push en tiempo real."
        image="https://firebasestorage.googleapis.com/v0/b/porfolio-eb408.appspot.com/o/MacBook-Air.webp?alt=media&token=f29efb10-6224-485c-b00d-13628395fd24"
        sourceBut="https://github.com/Dacosta011/SocialMediaApp"
        tegnologies={["React Native", "Firebase", "Redux", "Expo"]}
        left={false}
      />
      <Project
        title="SOCIAL NETWORK MOVIL APP"
        subtitle="React Native App"
        description="Aplicación es una red social en React Native que incluye un feed, chat, notificaciones y perfil de usuario. Se utiliza Firebase para la autenticación, gestión de usuarios, base de datos y notificaciones push en tiempo real."
        image="https://firebasestorage.googleapis.com/v0/b/porfolio-eb408.appspot.com/o/MacBook-Air.webp?alt=media&token=f29efb10-6224-485c-b00d-13628395fd24"
        sourceBut="https://github.com/Dacosta011/SocialMediaApp"
        tegnologies={["React Native", "Firebase", "Redux", "Expo"]}
        left={true}
      />
    </section>
  );
}

export default Projects;
