import React from "react";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation(); // د ژباړې او ژبې د بدلولو لپاره

  // د ژبې بدلولو فنکشن
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* د لوګو برخه */}
        <div className="nav-logo">
          <h2>{t("navbar.appName")}</h2>
        </div>

        {/* د ژبو dropdown */}
        <div className="nav-right">
          <div className="dropdown">
            <button className="nav-link dropdown-btn">
              {t("navbar.language")} ▼
            </button>
            <div className="dropdown-content">
              <button onClick={() => changeLanguage("en")}>English</button>
              <button onClick={() => changeLanguage("ps")}>پشتو</button>
              <button onClick={() => changeLanguage("fa")}>فارسی</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
