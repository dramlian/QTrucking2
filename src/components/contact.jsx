import React from "react";
import MyMap from "./MyMap";

export const Contact = (props) => {
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-6">
            <div className="row">
              <div className="section-title">
                <h2>Nájdite nás na mape</h2>
                <p>Kliknite na značku pre otvorenie v Google Maps.</p>
              </div>
              <MyMap />
            </div>
          </div>
          <div className="col-md-5 col-md-offset-1 contact-info">
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Adresa
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
                  <i className="fa fa-phone"></i> Tel
                </span>
                00421 55 7291240
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>
                info@q-trucking.sk
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-globe"></i> Web
                </span>
                www.q-trucking.sk
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>&copy; 2025 Q-Trucking Slovensko</p>
        </div>
      </div>
    </div>
  );
};
