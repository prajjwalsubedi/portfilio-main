import React from 'react';

export default function Hero() {
    return (
        <div className="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-6 align-self-center">
                                <div className="left-content header-text wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">
                                    <h6>Python Developer & Tax Accountnat</h6>
                                    <h2>I am <em>Prajjwal</em><span> Subedi</span></h2>
                                    <p>Well, I’ve been learning Python and Django, while working as a Tax Accountant. Had my own projects, coded mostly in Python. I learned a lot of Python from Udemy from Dr. Angela Yu. Now I am looking to get a job with an innovative company. Apart from coding, I am a good Tax Accountant.   <a rel="nofollow" href="https://github.com/prajjwalsubedi" target="_parent">Prajjwal's Github.</a></p>
                                    <div className="social_icons my-2">
                                    <a href="https://www.facebook.com/prajjwalsubedi95"><i className="fa-brands fa-square-facebook"></i></a>
                                        <a href="https://twitter.com/prazwolsubedi"><i className="fa-brands fa-square-twitter"></i></a>
                                        <a href="https://www.instagram.com/prazwolsubedi/"><i className="fa-brands fa-square-instagram"></i></a>
                                        <a href="https://www.linkedin.com/in/prajjwalsubedi/"><i className="fa-brands fa-linkedin"></i></a>
                                        <a href="https://github.com/prajjwalsubedi"><i className="fa-brands fa-square-github"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="right-image wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                                    <img src='../assets/images/banner-right-image.png' alt="team meeting" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}