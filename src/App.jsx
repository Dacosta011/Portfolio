import React from "react";
import Hero from "./Hero";
import "./styles/App.scss";
import Feature from "./Feature";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

import headerEs from "../i18n/es/header.json";
import headerEn from "../i18n/en/header.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: navigator.language,
  resources: {
    en: {
      header: headerEn,
    },
    es: {
      header: headerEs,
    },
  },
});

function App() {
  console.log(navigator.language);
  return (
    <I18nextProvider i18n={i18next}>
      <Hero />
      <Feature />
    </I18nextProvider>
  );
}

export default App;
