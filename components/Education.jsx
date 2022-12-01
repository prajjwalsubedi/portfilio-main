import eduaction_image from '../assets/images/service-icon-01.png';
import eduaction_image_left from "../assets/images/about-left-image.png";
import React from 'react';

export default function Education() {
    return (
        <div id="education" className="education-us section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="left-image wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
                            <img src={eduaction_image_left} alt="person graphic"/>
                        </div>
                    </div>
                    <div className="col-lg-8 align-self-center">
                        <div className="services">
                            <div className="row">
                            {/* {% for education in educations %} */}
                            <div className="col-lg-6">
                                <div className="item wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
                                <div className="icon">
                                    <img src={eduaction_image} alt="reporting"/>
                                </div>
                                <div className="right-text">
                                    <h4>100 days of Python (2022)</h4>
                                    <p>Udemy</p>
                                </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="item wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
                                <div className="icon">
                                    <img src={eduaction_image} alt="reporting"/>
                                </div>
                                <div className="right-text">
                                    <h4>Full Stack Web Developer Bootcamp (2021)</h4>
                                    <p>Udemy</p>
                                </div>
                                </div>
                            </div>


                            <div className="col-lg-6">
                                <div className="item wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
                                <div className="icon">
                                    <img src={eduaction_image} alt="reporting"/>
                                </div>
                                <div className="right-text">
                                    <h4>Bachelor of Business (2020)</h4>
                                    <p>King's Own Institute</p>
                                </div>
                                </div>
                            </div>


                            <div className="col-lg-6">
                                <div className="item wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
                                <div className="icon">
                                    <img src={eduaction_image} alt="reporting"/>
                                </div>
                                <div className="right-text">
                                    <h4>Diploma of Accounting (2018)</h4>
                                    <p>Crown Institute (CIBT)</p>
                                </div>
                                </div>
                            </div>
                            
                                {/* {% endfor %} */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}