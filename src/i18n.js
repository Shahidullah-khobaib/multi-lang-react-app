// د i18next کتابتون د ژبو د بدلولو لپاره
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

// د ژبو د متنونو تعریف
const resources = {
  // انګلیسي ژبه
  en: {
    translation: {
      navbar: {
        appName: "Multi Lang App",
        language: "Language",
      },
      hero: {
        title: "Multi Language React Application",
        subtitle: "Complete guide to build multilingual apps",
      },
      guide: {
        title: "Complete Development Guide",
        step1: "Step 1: Project Setup",
        step1Desc:
          "Create React app with Vite, install i18next and react-i18next libraries",
        step2: "Step 2: Language Configuration",
        step2Desc:
          "Setup translation files for Pashto, Farsi, and English languages",
        step3: "Step 3: RTL/LTR Support",
        step3Desc:
          "Configure automatic direction change based on selected language",
        step4: "Step 4: Components Creation",
        step4Desc:
          "Build Navbar, MainSection, and Footer components with translation support",
        libraries: "Required Libraries:",
        functions: "Key Functions:",
        lib1: "react - Core React library",
        lib2: "i18next - Internationalization framework",
        lib3: "react-i18next - React bindings for i18next",
        lib4: "i18next-browser-languagedetector - Browser language detection",
        func1: "useTranslation() - Hook for accessing translations",
        func2: "changeLanguage() - Function to switch languages",
        func3: "useEffect() - Hook for RTL/LTR direction management",
        func4: "Translation keys (t()) - Function to get translated text",
      },
      footer: {
        followUs: "Follow Me",
        allRightsReserved: "All rights reserved",
        starRepo:
          "If you found this application useful, please give the repository a ⭐ and follow me for more technical content.",
      },
    },
  },
  // پشتو ژبه
  ps: {
    translation: {
      navbar: {
        appName: "Multi Lang App",
        language: "ژبه",
      },
      hero: {
        title: "د ګڼ ژبو React غوښتنلیک",
        subtitle: "د ګڼ ژبو apps د جوړولو بشپړ لارښود",
      },
      guide: {
        title: "د پراختیا بشپړ لارښود",
        step1: "لومړی ګام: د پروژې جوړول",
        step1Desc:
          "د Vite سره React app جوړ کړئ. دا ډېر اسان دی. بیا i18next او react-i18next کتابتونونه نصب کړئ. دا کتابتونونه د ژبو د بدلولو لپاره دي.",
        step2: "دویم ګام: د ژبو فایلونه",
        step2Desc:
          "د پشتو، فارسی، او انګلیسي ژبو لپاره د ژباړې فایلونه جوړ کړئ. په دې فایلونو کې د هرې ژبې متنونه لیکل کیږي.",
        step3: "دریم ګام: د ښي او کیڼ لور",
        step3Desc:
          "د پشتو او فارسی لپاره د ښي څخه کیڼ ته (RTL) او د انګلیسي لپاره د کیڼ څخه ښي ته (LTR) د لیکلو لور تنظیم کړئ.",
        step4: "څلورم ګام: د ویب پاڼې برخې",
        step4Desc:
          "د ویب پاڼې درې برخې جوړ کړئ: پورتنۍ برخه (Navbar)، منځنۍ برخه (MainSection)، او لاندینۍ برخه (Footer). ټولې برخې باید د ژبو ملاتړ ولري.",
        libraries: "اړین کتابتونونه (Libraries):",
        functions: "مهم فنکشنونه (Functions):",
        lib1: "react - دا د React اصلي کتابتون دی چې موږ یې د ویب پاڼې جوړولو لپاره کاروو",
        lib2: "i18next - دا د ژبو د بدلولو اصلي کتابتون دی چې د نړۍ ټولو ژبو ملاتړ کوي",
        lib3: "react-i18next - دا د React او i18next د یوځای کولو لپاره دی",
        lib4: "i18next-browser-languagedetector - دا د کارونکي د براوزر ژبه پیژني او په اتوماتيک ډول یې ټاکي",
        func1:
          "useTranslation() - دا یو Hook دی چې موږ یې د ژباړو ته د لاسرسي لپاره کاروو",
        func2:
          "changeLanguage() - دا فنکشن د ژبو د بدلولو لپاره دی. کله چې کارونکی ژبه بدلوي نو دا فنکشن کار کوي",
        func3:
          "useEffect() - دا Hook د RTL او LTR د لور د مدیریت لپاره دی. دا د ژبې د بدلون سره د لیکلو لور بدلوي",
        func4:
          "t() فنکشن - دا د ژباړل شوي متن د ښکاره کولو لپاره دی. موږ یې هر ځای کاروو چې متن غواړو",
      },
      footer: {
        followUs: "ما تعقیب کړئ",
        allRightsReserved: "ټول حقونه خوندي دي",
        starRepo:
          "که دا اپلیکیشن درته ګټور تمام شوی وي، مهرباني وکړه ریپوزیټري ته ⭐ ورکړه او د نورو مهمو تخنیکي مطالبو لپاره ما فالو کړه.",
      },
    },
  },
  // فارسي ژبه
  fa: {
    translation: {
      navbar: {
        appName: "Multi Lang App",
        language: "زبان",
      },
      hero: {
        title: "اپلیکیشن React چند زبانه",
        subtitle: "راهنمای کامل ساخت اپلیکیشن های چند زبانه",
      },
      guide: {
        title: "راهنمای کامل توسعه",
        step1: "مرحله ۱: راه اندازی پروژه",
        step1Desc:
          "ایجاد اپ React با Vite، نصب کتابخانه های i18next و react-i18next",
        step2: "مرحله ۲: پیکربندی زبان",
        step2Desc: "تنظیم فایل های ترجمه برای زبان های پشتو، فارسی و انگلیسی",
        step3: "مرحله ۳: پشتیبانی RTL/LTR",
        step3Desc: "پیکربندی تغییر خودکار جهت بر اساس زبان انتخابی",
        step4: "مرحله ۴: ایجاد کامپوننت ها",
        step4Desc:
          "ساخت کامپوننت های Navbar، MainSection و Footer با پشتیبانی ترجمه",
        libraries: "کتابخانه های مورد نیاز:",
        functions: "توابع کلیدی:",
        lib1: "react - کتابخانه اصلی React",
        lib2: "i18next - چارچوب بین المللی سازی",
        lib3: "react-i18next - اتصالات React برای i18next",
        lib4: "i18next-browser-languagedetector - تشخیص زبان مرورگر",
        func1: "useTranslation() - Hook برای دسترسی به ترجمه ها",
        func2: "changeLanguage() - تابع تغییر زبان",
        func3: "useEffect() - Hook برای مدیریت جهت RTL/LTR",
        func4: "کلیدهای ترجمه (t()) - تابع دریافت متن ترجمه شده",
      },
      footer: {
        followUs: "ما را دنبال کنید",
        allRightsReserved: "تمام حقوق محفوظ است",
        starRepo:
          "اگر این اپلیکیشن برای شما مفید بوده است، لطفاً به ریپوزیتوری ⭐ بدهید و برای دریافت مطالب فنی بیشتر من را دنبال کنید.",
      },
    },
  },
};

// د i18next تنظیمات
i18n
  .use(LanguageDetector) // د ژبې د پیژندلو لپاره
  .use(initReactI18next) // د React سره د یوځای کولو لپاره
  .init({
    resources,
    fallbackLng: "en", // که ژبه ونه موندل شي نو انګلیسي وکاروه
    debug: true, // د debugging لپاره

    interpolation: {
      escapeValue: false, // React لا دمخه د XSS څخه خوندي دی
    },
  });

export default i18n;
