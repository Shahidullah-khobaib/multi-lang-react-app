// د MainSection component د بشپړ لارښود سره
import React from "react";
import { useTranslation } from "react-i18next";

const MainSection = () => {
  const { t } = useTranslation(); // د ژباړې لپاره

  return (
    <main className="main-section">
      <div className="hero-container">
        {/* د اصلي سرلیک برخه */}
        <div className="hero-content">
          <h1 className="hero-title">{t("hero.title")}</h1>
          <p className="hero-subtitle">{t("hero.subtitle")}</p>
        </div>

        {/* د پراختیا لارښود */}
        <div className="guide-section">
          <h2 className="guide-title">{t("guide.title")}</h2>

          {/* د ګامونو برخه */}
          <div className="steps-container">
            <div className="step-card">
              <h3>{t("guide.step1")}</h3>
              <p>{t("guide.step1Desc")}</p>
            </div>

            <div className="step-card">
              <h3>{t("guide.step2")}</h3>
              <p>{t("guide.step2Desc")}</p>
            </div>

            <div className="step-card">
              <h3>{t("guide.step3")}</h3>
              <p>{t("guide.step3Desc")}</p>
            </div>

            {/* <div className="step-card">
              <h3>{t('guide.step4')}</h3>
              <p>{t('guide.step4Desc')}</p>
            </div> */}
          </div>

          {/* د کتابتونونو برخه */}
          <div className="tech-section">
            <div className="tech-card">
              <h3>{t("guide.libraries")}</h3>
              <ul>
                <li>{t("guide.lib1")}</li>
                <li>{t("guide.lib2")}</li>
                <li>{t("guide.lib3")}</li>
                <li>{t("guide.lib4")}</li>
              </ul>
            </div>

            <div className="tech-card">
              <h3>{t("guide.functions")}</h3>
              <ul>
                <li>{t("guide.func1")}</li>
                <li>{t("guide.func2")}</li>
                <li>{t("guide.func3")}</li>
                <li>{t("guide.func4")}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainSection;
