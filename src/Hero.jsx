import React from "react";
import heroStyles from "./styles/Hero.module.scss";
import { useTranslation } from "react-i18next";
import { FaArrowDown } from "react-icons/fa";
import { useIsScrolling } from "./hooks/useIsScrolling";
import { useResize } from "./hooks/useResize";

import NavBar from "./NavBar";

function Hero() {
  const [t, i18n] = useTranslation("header");
  const isscrolling = useIsScrolling();
  const { isMovil, isDesktop, isTablet } = useResize();

  return (
    <div
      className={heroStyles.background}
      style={{
        backgroundColor:
          isMovil || isTablet ? "var(--primary-color)" : "transparent",
      }}
    >
      <NavBar />
      <header className={heroStyles.heroContainer}>
        <div className={heroStyles.titleImageConatiner}>
          <div className={heroStyles.titleContainer}>
            <h1>{t("h1")}</h1>
            <p>{t("meet")}</p>
            <FaArrowDown className={heroStyles.arrowLogo} />
          </div>
          <div className={heroStyles.heroImageContainer}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/porfolio-eb408.appspot.com/o/presentation.webp?alt=media&token=84b19171-9928-4fcd-9859-06e2e95e59d1"
              alt="Image that describe in a creative way the developer David Acosta"
            />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Hero;
