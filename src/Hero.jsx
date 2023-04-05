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
          <img
            src="https://firebasestorage.googleapis.com/v0/b/porfolio-eb408.appspot.com/o/presentation.png?alt=media&token=10ae0d94-c675-44b1-b0a1-90762c14ade2"
            alt=""
          />
        </div>
      </div>
    </header>
  );
}

export default Hero;
