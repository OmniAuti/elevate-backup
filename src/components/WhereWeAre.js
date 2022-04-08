import React from 'react'
import {Link} from 'react-router-dom'

export default class WhereWeAre extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <section className="where-we-are">
                 <img src="../imgs/about-us.jpg" alt="Jupiter, Florida Skyline"/>

                 <h1>Elevate Oral Care<sup>®</sup> is growing around the globe.</h1>
                 <br></br>
                <h3>Markets our products are currently available in:</h3>
                <br></br>
<div className='country-container'>
 <p>
 Canada
 </p> 
 <p>
 Chile
 </p> 
 <p>
 Egypt
 </p> 
 <p>
 Jordan
 </p> 
 <p>
 Mexico
 </p> 
 <p>
 Myanmar
 </p> 
 <p>
 <a href="https://www.elevateoralcare.com/" target="_blank">United States</a>
 </p> 
 <p>
 Saudi Arabia
 </p> 
 <p>
 Singapore
 </p> 
 </div>
  <br></br>
<h3><u className="contact-us"><Link to="/contact-us">Contact Us</Link></u> if you live in one of these countries and want to purchase our products, or if your country is not listed and you would like to bring our products to your country.</h3>
  


            </section>
        )
    }
}