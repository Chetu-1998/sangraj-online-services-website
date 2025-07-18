import React from 'react'

const About = () => {
    return (
        <section id="about" className="about section">
            <div className="container section-title" data-aos="fade-up">
                <h2>About</h2>
                <p><span>Learn More</span> <span className="description-title">About Us<br /></span></p>
            </div>
            <div className="container">
                <div className="row gy-5">
                    <div className="content col-xl-5 d-flex flex-column" data-aos="fade-up" data-aos-delay="100">
                        <h3>Empowering Rural India Through Digital Services</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                        </p>
                    </div>
                    <div className="col-xl-7" data-aos="fade-up" data-aos-delay="200">
                        <div className="row gy-4">
                            <div className="col-md-6 icon-box position-relative">
                                <i className="bi bi-briefcase"></i>
                                <h4><a className="stretched-link">Government Services</a></h4>
                                <p>Aadhaar Address Update, PAN Card, Voter ID, Caste, Income Certificates, Age Nationality and Domocile, Noncreamlayer, Central Caste, Caste Validity.</p>
                            </div>
                            <div className="col-md-6 icon-box position-relative">
                                <i className="bi bi-gem"></i>
                                <h4><a className="stretched-link">Financial Services</a></h4>
                                <p>Digital banking through DigiPay, PM Jan Dhan Yojana, PM Kisan Samman Nidhi registration, PMSBY & PMJJBY insurance schemes, Pradhan Mantri Fasal Bima Yojana.
                                </p>
                            </div>
                            <div className="col-md-6 icon-box position-relative">
                                <i className="bi bi-broadcast"></i>
                                <h4><a className="stretched-link">Health Services</a></h4>
                                <p>Ayushman Bharat (PM-JAY) registration, Telemedicine, Health ID generation, Eshram Card, Abha Card.</p>
                            </div>
                            <div className="col-md-6 icon-box position-relative">
                                <i className="bi bi-easel"></i>
                                <h4><a className="stretched-link">Education & Exams</a></h4>
                                <p>Scholarship Form, Online Exam Registration, School/College Admission Form Filling.</p>
                            </div>
                            <div className="col-md-6 icon-box position-relative">
                                <i className="bi bi-easel"></i>
                                <h4><a className="stretched-link">Utility Services</a></h4>
                                <p>Mobile and DTH recharge, electricity bill payments, Digital Wallet Services, Gas Booking.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default About
