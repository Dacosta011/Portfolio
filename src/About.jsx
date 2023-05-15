import React from "react";
import AboutStyles from "./styles/About.module.scss";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";

function About() {
  return (
    <section className={AboutStyles.aboutContainer} id="aboutSection">
      <div className={AboutStyles.image}>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/porfolio-eb408.appspot.com/o/1646760462399-removebg-preview.webp?alt=media&token=71a544b2-9532-4b31-9730-1f4d6ce1a1e4"
          alt="Image of David Acosta"
        />
      </div>
      <div className={AboutStyles.aboutInfo}>
        <p className={AboutStyles.name}>Hi! I am David Acosta</p>
        <p className={AboutStyles.profesion}>
          I'm Passionate <span>Software Engineer</span>
        </p>
        <p className={AboutStyles.description}>
          Computer engineer with 1 year of experience in React and React Native
          development for international projects. Skilled front-end developer
          with a passion for delivering innovative solutions. Adept at utilizing
          contemporary web technologies and dedicated to growth and effective
          communication within interdisciplinary project teams.
        </p>

        <div className={AboutStyles.links}>
          <a href="https://www.linkedin.com/in/davidacostag/" target={"_blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/dacosta011" target={"_blank"}>
            <AiFillGithub />
          </a>
          <a href="mailto:davidacostag01@gmail.com">
            <AiFillMail />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=573196034036"
            target={"_blank"}
          >
            <AiOutlineWhatsApp />
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
