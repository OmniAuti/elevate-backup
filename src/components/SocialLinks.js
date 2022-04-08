import React from 'react';

export default class SocialLinks extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="social-links-container">
                <a href="https://www.facebook.com/elevateoralcare/" target="_blank"><div className="facebook-link"></div></a>
                <a href="https://www.instagram.com/elevateoralcare/" target="_blank"><div className="instagram-link"></div></a>
                <a href="https://twitter.com/elevateoralcare/" target="_blank"><div className="twitter-link"></div></a>
                <a href="https://www.youtube.com/user/elevateoralcare" target="_blank"><div className="youtube-link"></div></a>
                <a href="https://www.linkedin.com/company/elevateoralcare/" target="_blank"><div className="linkedin-link"></div></a>
            </div> 
        )
    }
}