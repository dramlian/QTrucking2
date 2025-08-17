import React from "react";
import MyMap from "./MyMap";
import { translations } from "../translations";

export const Contact = (props) => {
  const { language = "sk" } = props;
  const t = translations[language] || translations.sk;
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-6">
            <div className="row">
              <div className="section-title">
                <h2>{t.findUsOnMap}</h2>
                <p>{t.clickMarkerForMaps}</p>
              </div>
              <MyMap />
            </div>
          </div>
          <div className="col-md-5 col-md-offset-1 contact-info">
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> {t.address}
                </span>
                Rastislavova 106 Košice Slovenská republika 042 04
              </p>
            </div>
            <div className="contact-item">
              <p>
                <strong>IČO:</strong> 36249602
                <strong>DIČ:</strong> 2021673962
                <strong>IČ DPH:</strong> SK202167396
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> {t.tel}
                </span>
                00421 55 7291240
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> {t.email}
                </span>
                info@q-trucking.sk
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-globe"></i> {t.web}
                </span>
                www.q-trucking.sk
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>{t.copyright}</p>
        </div>
      </div>
    </div>
  );
};
