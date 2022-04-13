import React from "react";
import { Link } from 'react-router-dom';

export default class Footer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <footer className="footer">
                <div className="footer__logo-col">
                <img className="footer--logo" src="../imgs/footerLogo.png" alt="Elevate Oral Care Logo"/>
                <address>
                346 PIKE ROAD, SUITE 5<br></br>
                WEST PALM BEACH, FL 33411<br></br>
                UNITED STATES OF AMERICA<br></br>
                </address>
                </div>

                <div className="footer__resources-col">
                <h3>Resources</h3>
                     <ul className="footer--links"><li><Link to="/about-us">About Us</Link></li>
                     <li><Link to="/contact-us">Contact Us</Link></li>
                     <li><Link to="/where-we-are">Where We Are</Link></li>
                     </ul>
                </div>

                <div className="footer__products-col">
                <h3>Products</h3>
                     <ul className="footer--links">
                        <li><Link to="/AdvantageArrest">Advantage Arrest®</Link></li>
                     <li><Link to="/FluoriMax">FluoriMax® NaF Varnish</Link></li>
                     </ul>
                </div>

                <div className="footer__downloads-col">
                <h3>Downloads</h3>
                     <ul className="footer--links"><li><Link to="/downloads-catalog">Virtual Catalog</Link></li>
                     <li><Link to="/downloads-AdvantageArrest">AA (Advantage Arrest® Silver Diamine Fluoride 38%)</Link></li>
                     <li><Link to="/downloads-FluoriMax">FMV (FluoriMax® 2.5% NaF Varnish)</Link></li>
                     </ul>
                </div>

                <div className="footer__education-col">
                    <h3>Education</h3>
                     <ul className="footer--links"><li><Link to="/">Studies</Link></li>
                     <li><Link to="/">Articles</Link></li>
                     <li><Link to="/">Continuing Education Library</Link></li>
                     </ul>
                </div>

                <div className="social-links-container__footer">
                <a href="https://www.facebook.com/elevateoralcare/" target="_blank"><div className="facebook-link"></div></a>
                <a href="https://www.instagram.com/elevateoralcare/" target="_blank"><div className="instagram-link"></div></a>
                <a href="https://twitter.com/elevateoralcare/" target="_blank"><div className="twitter-link"></div></a>
                <a href="https://www.youtube.com/user/elevateoralcare" target="_blank"><div className="youtube-link"></div></a>
                <a href="https://www.linkedin.com/company/elevateoralcare/" target="_blank"><div className="linkedin-link"></div></a>
             </div> 
                <div className="footer__lower-copyright-container">
                    <p>© COPYRIGHT 2022</p><p>ELEVATE ORAL CARE, LLC</p><p>ISO 13485:2016</p><p><Link to="/privacy">PRIVACY POLICY</Link></p><p><Link to="/terms-of-use">TERMS OF USE</Link></p>
                </div>
            </footer>
        )
    }
}