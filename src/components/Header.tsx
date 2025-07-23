const Header = () => {
    return (
        <section id="hero" className="hero section dark-background">
            <img src="assets/img/back-image.webp" alt="" data-aos="fade-in" />
            <div className="container text-center" data-aos="fade-up" data-aos-delay="100">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <h2>Welcome to Sangraj Grahak Seva Kendra</h2>
                        <p>We provide a variety of government and digital services including Aaple Sarkar applications.</p>
                        <a href="#about" className="btn-get-started">Get Started</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Header;
