import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  const [language, setLanguage] = useState("sk"); // Default to Slovak

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div style={{ backgroundColor: "#1a1a1a", minHeight: "100vh" }}>
      <Navigation language={language} setLanguage={setLanguage} />
      <Header language={language} data={landingPageData.Header} />
      <About language={language} data={landingPageData.About} />
      <Contact language={language} data={landingPageData.Contact} />
    </div>
  );
};

export default App;
