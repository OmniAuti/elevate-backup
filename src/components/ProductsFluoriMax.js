import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default class FluoriMax extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="products-FMV">
        <h1>FluoriMax™ Varnish</h1>
        <div>
          <Link to="/FluoriMax/Bottle">
            <div className="">
              <img
                src="../imgs/products/FlouriMax-BubbleGum-Bottle.png"
                alt="FluoriMax™ Varnish - 1 Bottle - Bubble Gum"
              />

              <h3>FluoriMax™ Varnish - 1 Bottle - Bubble Gum</h3>
            </div>
          </Link>
          <Link to="/FluoriMax/Ampule">
            <div className="">
              <img
                src="../imgs/products/FluoriMax-Varnish-Flow-Through.jpg"
                alt="FluoriMax™ Varnish - Flow-Through Unit-Dose Ampule - Bubble Gum "
              />

              <h3>
                FluoriMax™ Varnish - Flow-Through Unit-Dose Ampule - Bubble Gum
              </h3>
            </div>
          </Link>
        </div>
      </section>
    );
  }
}
