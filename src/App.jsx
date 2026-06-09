import { useState } from "react";

import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ProjectsPage from "./pages/ProjectPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatActions from "./components/FloatActions";
import InjectGlobalCSS from "./components/InjectGlobalCSS";

import "./App.css";

export default function App() {
  const [page, setPage] = useState("Home");

  const changePage = (p) => {
    setPage(p);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const renderPage = () => {
    switch (page) {
      case "Home":
        return <HomePage setPage={changePage} />;

      case "About":
        return <AboutPage setPage={changePage} />;

      case "Projects":
        return <ProjectsPage setPage={changePage} />;

      case "Contact":
        return <ContactPage />;

      default:
        return <HomePage setPage={changePage} />;
    }
  };

  return (
    <>
      <InjectGlobalCSS />

      <div className="app-container">

        <Navbar
          page={page}
          setPage={changePage}
        />

        <main className="app-main">
          {renderPage()}
        </main>

        <Footer setPage={changePage} />

        <FloatActions setPage={changePage} />

      </div>
    </>
  );
}