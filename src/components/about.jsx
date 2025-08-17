import React from "react";
import { translations } from "../translations";

export const About = (props) => {
  const { language = "sk" } = props;
  const t = translations[language] || translations.sk;
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="about-text">
              <h2>{t.aboutTitle}</h2>
              <div style={{ textAlign: "justify", lineHeight: "1.6" }}>
                <p>
                  <strong>Q TRUCKING SLOVENSKO, s.r.o.</strong> -{" "}
                  {t.companyDescription}
                </p>

                <p>{t.internationalPermit}</p>

                <p>{t.vehicleIncrease}</p>

                <p>{t.euPermit}</p>

                <p>{t.professionalQualification}</p>

                <p>{t.transportConditions}</p>

                <p>{t.carrierObligations}</p>

                <h3>{t.carrierServicesTitle}</h3>
                <ul>
                  {t.carrierServices.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
