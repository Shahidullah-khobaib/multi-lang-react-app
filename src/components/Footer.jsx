// د Footer component د سوشل میډیا لینکونو سره
import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation(); // د ژباړې لپاره

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* د سوشل میډیا برخه */}
        <div className="social-section">
          <h3>{t("footer.followUs")}</h3>
          <div className="social-links">
            {/* فیسبوک لینک */}
            <a
              href="facebook.com/shahidullah.khobaib"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              Facebook
            </a>

            {/* لینکډین لینک */}
            <a
              href="linkedin.com/in/shahidullah-khobaib"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              LinkedIn
            </a>
            {/* انسټاګرام لینک */}
            <a
              href="https://www.tiktok.com/@shahidullahkhobaib?_t=ZS-9000v9b3Lp2&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              TikTok
            </a>

            {/* ټویټر لینک */}
            <a
              href="x.com/ShahidKhobaib"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              Twitter
            </a>

            {/* لینکډین لینک */}
            <a
              href="https://www.instagram.com/shahidullahkhobaib?igsh=MWg3ZTd5bTg0aWgzZQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              Instagram
            </a>

            {/* GitHub لینک */}
            <a
              href="https://github.com/Shahidullah-khobaib"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* د copyright او star message برخه */}
        <div className="footer-bottom">
          <div className="star-message">
            <p>{t("footer.starRepo")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
