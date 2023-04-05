import React, { useState } from "react";
import navBarStyles from "./styles/NavBar.module.scss";
import { useIsScrolling } from "./hooks/useIsScrolling";
import { useResize } from "./hooks/useResize";
import { AiOutlineClose } from "react-icons/ai";

function NavBar() {
  const isscrolling = useIsScrolling();
  const { isMovil, isDesktop, isTablet } = useResize();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      className={
        isscrolling
          ? [navBarStyles.navbar, navBarStyles.navbarScroll].join(" ")
          : [navBarStyles.navbar].join(" ")
      }
      style={{
        backgroundColor: isscrolling ? "var(--primary-color)" : "transparent",
      }}
    >
      {isMovil || isTablet || isscrolling ? (
        <img
          src="../public/logoMobil.svg"
          alt="This is the logo of the web for the desktop devices"
          className={navBarStyles.navbarLogoMobil}
        />
      ) : (
        <img
          src="../public/logoWeb.svg"
          alt="This is the logo of the web for the desktop devices"
          className={navBarStyles.navbarLogoWeb}
        />
      )}
      <nav
        className={navBarStyles.navbarOpen}
        style={{
          opacity: isMenuOpen ? "1" : "0",
        }}
      >
        <AiOutlineClose
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={navBarStyles.closeLogo}
        />
        <ul
          className={
            isMenuOpen ? navBarStyles.navbarListOpen : navBarStyles.navbarList
          }
        >
          <li>
            <a href="">My Skills</a>
          </li>
          <li>
            <a href="">My Work</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
      <img
        src="../public/menuMobil.svg"
        alt="This is the hamburguer logo for the menu in movil devices"
        className={
          isMovil ? navBarStyles.navbarMenu : navBarStyles.navbarMenuHidden
        }
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />
    </div>
  );
}

export default NavBar;
