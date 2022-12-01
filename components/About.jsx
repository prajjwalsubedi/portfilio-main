import React from 'react';

export default function About() {
    return (
        <div id="about" className="about-me section">
            <div className="container">
            <div className="row">
                <div className="col-lg-6 align-self-center  wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.2s">
                    <div className="left-image">
                        <img src={require('../assets/images/services-left-image.png').default} alt=""/>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.2s">
                    <div className="section-heading">
                        <h2><em>About Me</em> and<span> My Skills</span> :</h2>
                        <p>Hi, I am Prajjwal Subedi from Sydney, Australia. As a profession I am an Tax accountant. Still I was always fascinated by how websites & softwares works and how could I also build something like that so I decided to learn to code back in 2021. I mainly love building scalable & maintainable Backend system using Python Django. However I have basic working knowledge of Frontend Web Development.</p>
                        <p>Currently, I am working as a Tax accountant and work on web development as a freelancer where I provide development services for clients plus build products that supports and empowers small & medium businesses. In coming days, I have an idea to build products & services that will help empower small businesses.</p>
                    </div>
                    <div className="row">
                        {/* {% for skill in skills %} */}
                        <div className="col-lg-6">
                            <div className="first-bar progress-skill-bar">
                                <h4>HTML</h4>
                                <span>90%</span>
                                <div className="filled-bar" style={{width:"90%"}}></div>
                                <div className="full-bar"></div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="first-bar progress-skill-bar">
                                <h4>CSS</h4>
                                <span>70%</span>
                                <div className="filled-bar" style={{width:"90%"}}></div>
                                <div className="full-bar"></div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="first-bar progress-skill-bar">
                                <h4>Java Script</h4>
                                <span>70%</span>
                                <div className="filled-bar" style={{width:"90%"}}></div>
                                <div className="full-bar"></div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="first-bar progress-skill-bar">
                                <h4>React</h4>
                                <span>60%</span>
                                <div className="filled-bar" style={{width:"90%"}}></div>
                                <div className="full-bar"></div>
                            </div>
                        </div>
                        
                        <div className="col-lg-6">
                            <div className="first-bar progress-skill-bar">
                                <h4>Python</h4>
                                <span>90%</span>
                                <div className="filled-bar" style={{width:"90%"}}></div>
                                <div className="full-bar"></div>
                            </div>
                        </div>
                        
                        <div className="col-lg-6">
                            <div className="first-bar progress-skill-bar">
                                <h4>Django</h4>
                                <span>80%</span>
                                <div className="filled-bar" style={{width:"90%"}}></div>
                                <div className="full-bar"></div>
                            </div>
                        </div>
                        
                        {/* {% endfor %} */}
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}