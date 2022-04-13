import React from "react";
import {Link} from "react-router-dom";
import ProductAside from "./ProductAside";


export default class AdvantageArrest5mLBottle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    
      <section >
        <ProductAside/>
        <div className="AA-5-ml-cont">
        <h1>Advantage Arrest Silver Diamine Fluoride 38% - 5 mL Bottle</h1>
        <img
          src="../imgs/products/SilverDiamineFluoride5ml.png"
          alt="Advantage Arrest Silver Diamine Fluoride 38% - 5 mL Bottle Image"
        />
        <h3>
          Advantage Arrest® made in the USA, helping patients around the world.
        </h3>
        <br></br>
        <p>
          Silver Diamine Fluoride has been used extensively around the globe for
          decades. Advantage Arrest silver diamine fluoride 38% will change how
          you offer your patients the protection they deserve. 
          </p>
          <p>
            <br></br>
          Advantage Arrest:
        </p>
        <br></br>
        <ul>
          <li>Provides immediate relief from dentinal hypersensitivity</li>
          <li> Kills pathogenic organisms</li>
          <li>
            Hardens softened dentin making it more acid and abrasion resistant
          </li>
          <li>Does not stain sound dentin or enamel</li>
          <li>
            Can provide important clinical feedback due to its potential to
            stain visible or hidden lesions
          </li>
        </ul>
        <br></br>
        <p>
          Silver diamine fluoride 38% is indicated for the treatment of dentinal
          hypersensitivity. Advantage Arrest is made in the USA and an FDA
          regulated prescription medical device.
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
