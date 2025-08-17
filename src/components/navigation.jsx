import Flag from "react-world-flags";
import { translations } from "../translations";

export const Navigation = (props) => {
  const { language = "sk", setLanguage } = props;
  const t = translations[language] || translations.sk;

  // Handle case where setLanguage is not provided
  const handleLanguageChange = (newLanguage) => {
    if (setLanguage && typeof setLanguage === "function") {
      setLanguage(newLanguage);
    } else {
      console.warn("setLanguage function not provided to Navigation component");
    }
  };
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            {t.brandName}
          </a>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#about" className="page-scroll">
                {t.aboutCompany}
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                {t.contact}
              </a>
            </li>
            <li className="navbar-text">
              <div className="language-switcher">
                <button
                  className={`btn ${language === "sk" ? "active" : ""}`}
                  onClick={() => handleLanguageChange("sk")}
                >
                  <Flag code="SK" style={{ width: 20 }} />
                </button>
                <button
                  className={`btn ${language === "en" ? "active" : ""}`}
                  onClick={() => handleLanguageChange("en")}
                >
                  <Flag code="GB" style={{ width: 20 }} />
                </button>
                <button
                  className={`btn ${language === "nl" ? "active" : ""}`}
                  onClick={() => handleLanguageChange("nl")}
                >
                  <Flag code="NL" style={{ width: 20 }} />
                </button>
                <button
                  className={`btn ${language === "fr" ? "active" : ""}`}
                  onClick={() => handleLanguageChange("fr")}
                >
                  <Flag code="FR" style={{ width: 20 }} />
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
