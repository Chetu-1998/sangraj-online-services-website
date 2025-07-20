import React from 'react'

const CallToAction = () => {
  return (
    <section id="call-to-action" className="call-to-action section dark-background">
      <img src="assets/img/cta-bg.jpg" alt="" />
      <div className="container">
        <div className="row justify-content-center" data-aos="zoom-in" data-aos-delay="100">
          <div className="col-xl-10">
            <div className="text-center">
              <h3>Call To Action</h3>
              <p>Empowering citizens with reliable CSC services — from government schemes to digital support, we’re here to assist every step of the way.</p>
              <a className="cta-btn" href="#contact">Call To Action</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
