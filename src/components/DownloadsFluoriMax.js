import React from "react";

export default class DownloadsFluoriMax extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="downloads">
        <h1>Product & Company Downloads</h1>
        <div className="downloads-container">

        <h2><u>FluoriMax Varnish</u></h2>
          <div>
            <div>
              <p>FluoriMax Varnish Safety Data Sheet</p>
              <a
                href="../downloads/FluoriMaxVarnishSafteyDataSheet.pdf"
                download
              >
                DOWNLOAD
              </a>
            </div>
            <div>
              <p>FluoriMax Varnish Allergen Letter</p>
              <a href="../downloads/FluoriMaxVarnishAllergenLetter.pdf" download>
                DOWNLOAD
              </a>
            </div>
            <div>
              <p>FluoriMax Varnish Directions For Use</p>
              <a
                href="../downloads/FluoriMaxVarnishDirectionsForUse.pdf"
                download
              >
                DOWNLOAD
              </a>
            </div>
            <div>
              <p>FluoriMax Varnish Directions For Use (Espanol)</p>
              <a
                href="../downloads/FluoriMaxVarnishDirectionsForUse(Espanol).pdf"
                download
              >
                DOWNLOAD
              </a>
            </div>
          </div>
       
              <h2><u>Advantage Arrest</u></h2>
              <div>
                <div>
                  <p>Advantage Arrest Safety Data Sheet</p>
                  <a
                    href="../downloads/AdvantageArrestSafetyDataSheet.pdf"
                    download
                  >
                    DOWNLOAD
                  </a>
                </div>
                <div>
                  <p>Advantage Arrest Allergen Letter</p>
                  <a href="../downloads/AdvantageArrestAllergenLetter.pdf" download>
                    DOWNLOAD
                  </a>
                </div>
                <div>
                  <p>Advantage Arrest Directions For Use</p>
                  <a
                    href="../downloads/AdvantageArrestDirectionsForUse.pdf"
                    download
                  >
                    DOWNLOAD
                  </a>
                </div>
                <div>
                  <p>Advantage Arrest Image Sheet</p>
                  <a href="../downloads/AdvantageArrestImageSheet.pdf" download>
                    DOWNLOAD
                  </a>
                </div>
                <div>
                  <p>Advantage Arrest Directions For Use (Espanol)</p>
                  <a
                    href="../downloads/AdvantageArrestDirectionsForUse(Espanol).pdf"
                    download
                  >
                    DOWNLOAD
                  </a>
                </div>
                <div>
                  <p>Advantage Arrest Image Sheet (Espanol)</p>
                  <a
                    href="../downloads/AdvantageArrestImageSheet(Espanol).pdf"
                    download
                  >
                    DOWNLOAD
                  </a>
                </div>
              </div>
          
              <div>
          <h2><u>Virtual Catalog</u></h2>
              <div>
            <p>Virtual Catalog</p>
            <a
                href="#"
                disabled="true"
              >
                COMING SOON
              </a>
              </div>
          </div>
        </div>
      </section>
    );
  }
}
