import React from 'react';
import { Link } from 'react-router-dom';


export default class Header extends React.Component {
    constructor(props) {
        super(props)

        this.state = {activeNav: false}

        this.handleActiveNav = this.handleActiveNav.bind(this)
    }

 handleActiveNav() {
    this.setState({activeNav: !this.state.activeNav})
}
    render() {
        return(
            <header className="header">
            <Link to="/"><img src="./imgs/headerLogo.svg" alt="Elevate Care Logo" className="header--logo"/></Link>
            <button onClick={this.handleActiveNav} className={this.state.activeNav ? "hamburger active-nav" : "hamburger"}> <div></div></button>
                <nav className={this.state.activeNav ? "active-nav nav" : "nav"}>
                 <ul className="nav--links">
                     <li>Resources <ul className="nav--links__resources-links">
                        <li><Link to="/about-us">About Us</Link></li>
                        <li><Link to="/contact-us">Contact Us</Link></li>
                        <li><Link to="/where-we-are">Where We Are</Link></li>
                     </ul></li>
                     <li>Products
                     <ul className="nav--links__products-links">
                         <li><Link to="/">Advantage Arrest®</Link></li>
                         <li><Link to="/">FluoriMax® NaF Varnish</Link></li>
                     </ul>
                     </li>
                     <li>Downloads
                     <ul className="nav--links__downloads-links">
                         <li><Link to="/">Virtual Catalog</Link></li>
                         <li><Link to="/">FMV (FluoriMax® 2.5% NaF Varnish)</Link></li>
                         <li><Link to="/">AA (Advantage Arrest® Silver Diamine Fluoride 38%)</Link></li>
                     </ul>
                     </li>
                     <li>Education
                     <ul className="nav--links__education-links">
                         <li><Link to="/">Studies</Link></li>
                         <li><Link to="/">Articles</Link></li>
                         <li><Link to="/">Continuing Education Library</Link></li>
                     </ul>
                     </li>
                 </ul>
                </nav>
            </header>
        )
    }
}