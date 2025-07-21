import React from 'react';

const Certifications = () => {
  const certificates = [
    {
      img: 'assets/img/cert-1.jpg',
      alt: 'ISO 9001 Certificate',
    },
    {
      img: 'assets/img/cert-2.jpg',
      alt: 'ISO 27001 Certificate',
    },
  ];

  return (
    <section id="contact" className="contact section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Certifications</h2>
        <p><span>Check Our</span> <span className="description-title">Certifications<br /></span></p>
      </div>

      <div className='d-flex '></div>
    </section>
  );
};

export default Certifications;
