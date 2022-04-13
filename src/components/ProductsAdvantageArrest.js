import React from 'react'
import {Link} from 'react-router-dom'

export default class AdvantageArrest extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <section className="products-AA">
                <h1>Advantage Arrest</h1>
                <div>
                <Link to="/AdvantageArrest/5mLBottle">
                <div className="">
                    <img src="../imgs/products/SilverDiamineFluoride5ml.png" alt="Advantage Arrest Silver Diamine Fluoride 38% - 5 mL Bottle Image" />
                     <h3>Advantage Arrest Silver Diamine Fluoride 38% - 5 mL Bottle</h3>
                </div>
                </Link>
                <Link to="/AdvantageArrest/Ampule">
                <div className="">
                    <img src="../imgs/products/SilverDiamineFluorideCap.png" alt="Advantage Arrest Silver Diamine Fluoride 38% - 50 Unit-Dose Ampules Image" />
                    <h3>Advantage Arrest Silver Diamine Fluoride 38% - 50 Unit-Dose Ampules</h3>
                </div>
                </Link>
                </div>
            </section>
        )
    }
}