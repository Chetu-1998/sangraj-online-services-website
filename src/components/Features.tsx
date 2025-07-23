import React from 'react'

const Features = () => {
    return (
        <section id="features" className="features section">
            <div className="container section-title" data-aos="fade-up">
                <h2>Features</h2>
                <p>Check Our <span className="description-title">Features</span></p>
            </div>
            <div className="container">
                <div className="row gy-4">
                    <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="100">
                        <div className="features-item">
                            <i className="bi bi-building" style={{ color: "#ffbb2c" }}></i>
                            <h3>Multiple Government Services</h3>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="200">
                        <div className="features-item">
                            <i className="bi bi-file-earmark-text" style={{color: "#5578ff"}}></i>
                            <h3>Online Form Filling</h3>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="300">
                        <div className="features-item">
                            <i className="bi bi-shield-lock" style={{color: "#e80368"}}></i>
                            <h3>Data Privacy</h3>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="400">
                        <div className="features-item">
                            <i className="bi bi-credit-card-2-front" style={{color: "#e361ff"}}></i>
                            <h3>Digital Payments</h3>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="500">
                        <div className="features-item">
                            <i className="bi bi-geo-alt" style={{color: "#47aeff"}}></i>
                            <h3>Easy Accessibility</h3>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="600">
                        <div className="features-item">
                            <i className="bi bi-lightning" style={{color: "#ffa76e"}}></i>
                            <h3>Quick Service</h3>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="700">
                        <div className="features-item">
                            <i className="bi bi-emoji-smile" style={{color: "#11dbcf"}}></i>
                            <h3>Friendly Support</h3>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="800">
                        <div className="features-item">
                            <i className="bi bi-printer" style={{color: "#4233ff"}}></i>
                            <h3>On-the-Spot Printouts</h3>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="900">
                        <div className="features-item">
                            <i className="bi bi-globe" style={{color: "#b2904f"}}></i>
                            <h3>Online Verification Help</h3>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="1000">
                        <div className="features-item">
                            <i className="bi bi-person-vcard" style={{color: "#b20969"}}></i>
                            <h3>ID Card Expertise</h3>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="1100">
                        <div className="features-item">
                            <i className="bi bi-receipt" style={{color: "#ff5828"}}></i>
                            <h3>Transparent Pricing</h3>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="1200">
                        <div className="features-item">
                            <i className="bi bi-chat-dots" style={{color: "#29cc61"}}></i>
                            <h3>SMS Updates</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features
