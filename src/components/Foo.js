import React from 'react'

const Foo = () => {
    return (
        <>
            <footer id="footer" className="footer dark-background">
                <div className="container footer-top">
                    <div className="row gy-4">
                        <div className="col-lg-5 col-md-12 footer-about">
                            <a href="index.html" className="logo d-flex align-items-center">
                                <span className="sitename">Sangraj </span>
                            </a>
                            <p>Delivering essential digital and government services with ease and efficiency. From Aadhaar updates, PAN cards, bill payments, and banking to public welfare schemes — Sangraj is committed to serving your community with trust and transparency.</p>
                            <div className="social-links d-flex mt-4">
                                <a href="#"><i className="bi bi-twitter-x"></i></a>
                                <a href="#"><i className="bi bi-facebook"></i></a>
                                <a href="#"><i className="bi bi-instagram"></i></a>
                                <a href="#"><i className="bi bi-linkedin"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-6 footer-links">
                            <h4>Quick Links</h4>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Certifications</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-6 footer-links">
                            <h4>Timing</h4>
                            <ul>
                                <li><p>Mon - Sat: 9:00AM - 6:00PM</p></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                            <h4>Contact Us</h4>
                            <p>Near Savata Mali Mandir</p>
                            <p>Varchi Aali Nashirabad</p>
                            <p>Jalgaon 425309</p>
                            <p className="mt-4"><strong>Phone:</strong> <span>+91 9834013659</span></p>
                            <p><strong>Email:</strong> <span>chetan.patil6198@gmail.com</span></p>
                        </div>
                    </div>
                </div>
                <div className="container copyright text-center mt-4">
                    <p>Copyright © <span>2025</span> <strong className="">Sangraj</strong> <span>. All Rights Reserved</span></p>
                    <div className="credits">
                        <p>Made With ❤️ By <span>Chetan Patil.</span></p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Foo;
