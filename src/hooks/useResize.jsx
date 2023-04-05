import { useState, useEffect } from "react";

export const useResize = () => {
  const [isMovil, setIsMovil] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    getDevice();
    const handleWindowResize = () => {
      getDevice();
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const getDevice = () => {
    const { innerWidth, innerHeight } = window;
    if (innerWidth < 480) {
      setIsMovil(true);
      setIsTablet(false);
      setIsDesktop(false);
    } else if (innerWidth >= 480 && innerWidth < 1482) {
      setIsMovil(false);
      setIsTablet(true);
      setIsDesktop(false);
    } else if (innerWidth >= 1482 && innerHeight < 1280) {
      setIsMovil(false);
      setIsTablet(false);
      setIsDesktop(true);
    }
  };

  return { isMovil, isTablet, isDesktop };
};
