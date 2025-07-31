import React, { useEffect, useState } from "react";

const Nav = () => {
  const [activeSection, setActiveSection] = useState("");
  const [mobileNavActive, setMobileNavActive] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
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

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const toggleMobileNav = () => {
    const newState = !mobileNavActive;
    setMobileNavActive(newState);
    document.body.classList.toggle("mobile-nav-active", newState);
  };

  const closeMobileNav = () => {
    setMobileNavActive(false);
    document.body.classList.remove("mobile-nav-active");
  };

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "faq", label: "Faq" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <a href="#hero" className="logo d-flex align-items-center">
          <img src="assets/img/sang-logo.jpeg" alt="Sangraj Logo" />
          <h1 className="sitename">SANGRAJ</h1>
        </a>

        {/* Hamburger Icon - visible on mobile only */}
        <i
          className={`mobile-nav-toggle d-xl-none bi ${
            mobileNavActive ? "bi-x" : "bi-list"
          }`}
          onClick={toggleMobileNav}
        ></i>

        {/* Navigation Menu */}
        <nav
          id="navmenu"
          className={`navmenu ${mobileNavActive ? "navmenu-active" : ""}`}
        >
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={activeSection === item.id ? "active" : ""}
                  onClick={closeMobileNav}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
