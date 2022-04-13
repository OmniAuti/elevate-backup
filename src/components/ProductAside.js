import React from 'react'
import {Link} from 'react-router-dom'

export default class ProductAside extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <aside className="product-aside">
                <div>
                <h2><u>All Products</u></h2>
                <h4>Advantage Arrest Silver Diamine Fluoride 38%</h4>
                <Link to="/AdvantageArrest/5mLBottle"><p>5 mL Bottle</p></Link>
                <Link to="/AdvantageArrest/Ampule"><p>50 Unit-Dose Ampules</p></Link>
                <h4>FluoriMax™ Varnish</h4>
                <Link to="/FluoriMax/Bottle"><p>1 Bottle - Bubble Gum</p></Link>
                <Link to="/FluoriMax/Ampule"><p>Flow-Through Unit-Dose Ampule - Bubble Gum</p></Link>
                </div>
            </aside>
        )
    }
}