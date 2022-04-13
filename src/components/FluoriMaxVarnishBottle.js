import React from "react";
import {Link } from "react-router-dom";
import ProductAside from "./ProductAside";

export default class FluoriMaxVarnishBottle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <ProductAside/>
        <div  className="FMV-bottle-cont">
        <h1>FluoriMax Varnish - 1 Bottle - Bubble Gum</h1>
        <img
          src="../imgs/products/FlouriMax-BubbleGum-Bottle.png"
          alt="FluoriMax™ Varnish - 1 Bottle - Bubble Gum"
        />

        <h3>For better fluoride uptake than traditional varnishes. </h3>
        <br></br>
        <p>
          Dentists, hygienists and patients all over the country have been
          choosing FluoriMax 2.5% Sodium Fluoride Varnish since it was
          introduced in 2014. But why does FluoriMax contain just 2.5% fluoride?
          <br></br>
          <br></br>
          During the development of FluoriMax varnish our research showed
          fluoride uptake into enamel was statistically the same at 2.5% and 5%
          concentrations, better than traditional 5% varnishes. Research
          published by the University of Colorado determined that fluoride
          “saturation” from varnishes occurs at 2.5% NaF to available tight and
          loosely binding sites in a HAp disc in vitro model, further providing
          proof of the efficacy and efficiency of our patented formulation.
        </p>
        <br></br>
        <p>FluoriMax varnish:</p>
        <br></br>
        <ul>
          <li>
            Uses the fluoride in its patented formula more efficiently,
            delivering better fluoride uptake with half the fluoride
            concentration.
          </li>
          <li>
            Dries to a non tacky coating that is seven to forty times thinner
            than traditional varnishes
          </li>
          <li>
            Contains hypoallergenic, food-grade shellac vs. traditional
            varnishes that contain other resins{" "}
          </li>
          <li>
            Is hydrophilic, so it flows further across and between the teeth
            than traditional varnishes
          </li>
        </ul>
        <br></br>
        <p>
          FluoriMax 2.5% NaF Varnish comes in packs of 70 units, each containing
          0.3ml
        </p>
        <br></br>
        <h3>
          Please <Link to="/contact-us">Contact Us</Link> for pricing and
          purchase inquiries.
        </h3>
        </div>
      </section>
    );
  }
}
