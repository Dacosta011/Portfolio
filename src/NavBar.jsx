import React, { useState } from "react";
import navBarStyles from "./styles/NavBar.module.scss";
import { useIsScrolling } from "./hooks/useIsScrolling";
import { useResize } from "./hooks/useResize";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

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
    >
      {isMovil || isTablet || isscrolling ? (
        <img
          src="https://firebasestorage.googleapis.com/v0/b/porfolio-eb408.appspot.com/o/logoMobil.svg?alt=media&token=87b85612-3991-4f2a-adfe-56070571d0d1"
          alt="This is the logo of the web for the desktop devices"
          className={navBarStyles.navbarLogoMobil}
        />
      ) : (
        <img
          src="https://firebasestorage.googleapis.com/v0/b/porfolio-eb408.appspot.com/o/logoWeb.svg?alt=media&token=bfaed52e-9eb8-43a3-a416-e18c9b44ec43"
          alt="This is the logo of the web for the desktop devices"
          className={navBarStyles.navbarLogoWeb}
        />
      )}
      <nav
        className={navBarStyles.navbarOpen}
        style={{
          opacity: isMenuOpen ? "1" : "0",
          height: isMenuOpen ? "100vh" : "0",
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
      <AiOutlineMenu
        className={
          isMovil ? navBarStyles.navbarMenu : navBarStyles.navbarMenuHidden
        }
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />
    </div>
  );
}

export default NavBar;
