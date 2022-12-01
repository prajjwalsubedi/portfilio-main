import React from 'react';

export default function Contact() {
    return (
        <div id="contact" className="contact-us section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 align-self-center wow fadeInLeft" data-wow-duration="0.5s" data-wow-delay="0.25s">
                        <div className="section-heading">
                            <h2>Feel Free To Send Me a Message About Your Website Needs</h2>
                            <p>I am new but an dedicated person to work on the project. I am truthful and trustable also a good researcher.</p>
                            <div className="phone-info">
                                <h4>For any enquiry, Call Me: <br></br>
                                <span><i className="fa fa-phone"></i> <a href="tel:+610405993935">+61 405 993 935</a></span> 
                                <br></br> 
                                <span><i className="fa-solid fa-envelope-open"></i><a href="mailto:prajjwalsubedi95@gmail.com">Prajjwalsubedi95@gmail.com</a></span></h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInRight" data-wow-duration="0.5s" data-wow-delay="0.25s">
                        <form id="contact" action="" method="post">
                            <div className="row">
                                <div className="col-lg-6">
                                    <fieldset>
                                        <input type="text" placeholder="Name" className="form-control" />
                                    </fieldset>
                                </div>
                            <div className="col-lg-6">
                                <fieldset>
                                    <input type="text" placeholder="Surnamme" className="form-control" />
                                </fieldset>
                            </div>
                            <div className="col-lg-12">
                                <fieldset>
                                    <input type="email" className="form-control" placeholder="Your Email" aria-describedby="emailHelp" />
                                </fieldset>
                            </div>
                            <div className="col-lg-12">
                                <fieldset>
                                    <textarea name="message" type="text" className="form-control" id="message" placeholder="Message" required=""></textarea>
                                </fieldset>
                            </div>
                            <div className="col-lg-12">
                                <fieldset>
                                    <button type="submit" id="form-submit" className="main-button ">Send Message</button>
                                </fieldset>
                            </div>
                            </div>
                            <div className="contact-dec">
                                <img src={'../assets/images/contact-decoration.png'} alt="" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}