import React, { useEffect, useState } from "react";

const Nav = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px", // trigger when section is in the middle
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          if (id) {
            setActiveSection(id);
          }
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <a href="#hero" className="logo d-flex align-items-center">
          <img src="assets/img/sang-logo.jpeg" alt="Sangraj Logo" />
          <h1 className="sitename">SANGRAJ</h1>
        </a>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <a
                href="#hero"
                className={activeSection === "hero" ? "active" : ""}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={activeSection === "about" ? "active" : ""}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className={activeSection === "services" ? "active" : ""}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className={activeSection === "faq" ? "active" : ""}
              >
                Faq
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={activeSection === "contact" ? "active" : ""}
              >
                Contact
              </a>
            </li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
