import React from "react";
import NavBar from "./NavBar";
import heroStyles from "./styles/Hero.module.scss";
import { useTranslation } from "react-i18next";
import { FaArrowDown } from "react-icons/fa";

function Hero() {
  const [t, i18n] = useTranslation("header");
  return (
    <header className={heroStyles.heroContainer}>
      <NavBar />
      <div className={heroStyles.titleImageConatiner}>
        <div className={heroStyles.titleContainer}>
          <h1>{t("h1")}</h1>
          <p>{t("meet")}</p>
          <FaArrowDown className={heroStyles.arrowLogo} />
        </div>
        <div className={heroStyles.heroImageContainer}>
          <img src="../public/presentation.png" alt="" />
        </div>
      </div>
    </header>
  );
}

export default Hero;
