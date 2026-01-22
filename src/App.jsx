// د اصلي App component د ټولو components سره
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";
import "./App.css";
import "./i18n"; // د i18n configuration import

function App() {
  const { i18n } = useTranslation(); // د ژبې د معلوماتو لپاره

  //  د ویب سایټ د ډایریکشنونو لپاره دا مونګ استفاده کوو RTL LTR
  useEffect(() => {
    const rtlLanguages = ["ps", "fa"];

    // د اوسنۍ ژبې پر بنسټ د direction تنظیم
    if (rtlLanguages.includes(i18n.language)) {
      document.documentElement.setAttribute("dir", "rtl");
      document.body.style.fontFamily = "Tahoma, Arial, sans-serif";
    } else {
      document.documentElement.setAttribute("dir", "ltr");
      document.body.style.fontFamily = "Arial, sans-serif";
    }
  }, [i18n.language]); // کله چې ژبه بدله شي نو دا effect بیا چل شي

  return (
    <div className="App">
      {/* نوبار  */}
      <Navbar />

      {/* ماین سیکشن  */}
      <MainSection />

      {/* د فوټر برخه */}
      <Footer />
    </div>
  );
}

export default App;
