import React from 'react';

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
                        <p className='description-about'>
                            Established in 2023, Online Services Shop was started by Rajesh Laxman Patil with the vision of bringing essential digital services closer to the people, especially in rural and underserved areas. As a Village Level Entrepreneur (VLE), Rajesh Laxman Patil has always believed in empowering the community by leveraging technology to simplify everyday tasks.<br /><br />
                            shop acts as a one-stop destination for a wide range of online and government services. Whether it's applying for a PAN card, updating Aadhaar details, paying electricity or water bills, submitting government forms, or accessing banking and insurance services — we make it easier, faster, and more reliable for everyone.<br /><br />
                            We are constantly updating our offerings to include the latest services required by our customers, making us a trusted name in the community for all digital needs.
                        </p>
                    </div>
                    <div className="col-xl-7" data-aos="fade-up" data-aos-delay="200">
                        <div className="row gy-4">
                            <div className="col-md-6 icon-box position-relative">
                                <i className="bi bi-building"></i>
                                <h4>Government Services</h4>
                                <p>Aadhaar Address Update, PAN Card, Voter ID, Caste, Income Certificates, Age Nationality and Domocile, Noncreamlayer, Central Caste, Caste Validity.</p>
                            </div>
                            <div className="col-md-6 icon-box position-relative">
                                <i className="bi bi-bank"></i>
                                <h4>Financial Services</h4>
                                <p>Digital banking through DigiPay, PM Jan Dhan Yojana, PM Kisan Samman Nidhi registration, PMSBY & PMJJBY insurance schemes, Pradhan Mantri Fasal Bima Yojana.</p>
                            </div>
                            <div className="col-md-6 icon-box position-relative">
                                <i className="bi bi-heart-pulse"></i>
                                <h4>Health Services</h4>
                                <p>Ayushman Bharat (PM-JAY) registration, Telemedicine, Health ID generation, Eshram Card, Abha Card.</p>
                            </div>
                            <div className="col-md-6 icon-box position-relative">
                                <i className="bi bi-journal-bookmark"></i>
                                <h4>Education & Exams</h4>
                                <p>Scholarship Form, Online Exam Registration, School/College Admission Form Filling.</p>
                            </div>
                            <div className="col-md-6 icon-box position-relative">
                                <i className="bi bi-lightning-charge"></i>
                                <h4>Utility Services</h4>
                                <p>Mobile and DTH recharge, electricity bill payments, Digital Wallet Services, Gas Booking.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
