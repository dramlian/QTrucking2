import React from "react";
import { translations } from "../translations";

export const Header = (props) => {
  const { language = "sk" } = props;
  const t = translations[language] || translations.sk;
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {t.heroTitle}
                  <span></span>
                </h1>
                <a
                  href="/prepravny-poriadok-q-trucking.pdf"
                  className="btn btn-custom btn-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.transportRegulations}
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
