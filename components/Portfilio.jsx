import portfilio_image from "./assets/images/portfolio-image.png";
import React from 'react';

export default function Portfilio() {
    return (
        <div id="portfolio" className="our-portfolio section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="section-heading  wow bounceIn" data-wow-duration="1s" data-wow-delay="0.2s">
                            <h2><em>My</em><span> Portfilio</span> :</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {/* {% for portfilio in portfilios %} */}
                    
                    <div className="col-lg-3 col-sm-6">
                        <a href="#">
                            <div className="item wow bounceInUp animated prajjwal" data-wow-duration="1s" data-wow-delay="0.6s">
                                <div className="hidden-content">
                                    <h4>Portfilio</h4>
                                    <p>My own Portfilio Designed on React and Hosted in Netlify.</p>
                                </div>
                            <div className="showed-content">
                                <img src={portfilio_image} alt="" />
                            </div>
                            </div>
                        </a>
                    </div>
                   
                    {/* {% endfor %} */}
                </div>
            </div>
        </div>
    );    
}