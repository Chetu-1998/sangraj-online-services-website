import React, { useState, useEffect } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  useEffect(() => {
    if (status === "success") {
      const timer = setTimeout(() => {
        setStatus("idle");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    try {
      const response = await fetch("https://sangraj-online-services-website.onrender.com/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact section">
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>

      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>
          <span>Need Help?</span>{" "}
          <span className="description-title">
            Contact us
            <br />
          </span>
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="mb-4" data-aos="fade-up" data-aos-delay="200">
          <iframe
            style={{ border: 0, width: "100%", height: "270px" }}
            src="https://www.google.com/maps/embed?pb=..."
            title="Google Maps location of our office"
            frameBorder={0}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="row gy-4">
          <div className="col-lg-4">
            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
              <i className="bi bi-geo-alt flex-shrink-0"></i>
              <div>
                <h3>Address</h3>
                <p>Near Savata Mandir, Varchi Aali Nashirabad, Jalgaon 425309</p>
              </div>
            </div>

            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
              <i className="bi bi-telephone flex-shrink-0"></i>
              <div>
                <h3>Call Us</h3>
                <p>+91 9834013659</p>
              </div>
            </div>

            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="500">
              <i className="bi bi-envelope flex-shrink-0"></i>
              <div>
                <h3>Email Us</h3>
                <p>chetan.patil6198@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <form
              onSubmit={handleSubmit}
              className="php-email-form"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="row gy-4">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Your Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6">
                  <input
                    type="text"
                    name="phone"
                    className="form-control"
                    placeholder="Phone Number"
                    required
                    inputMode="numeric"
                    maxLength={10}
                    pattern="\d{10}"
                    title="Phone number must be exactly 10 digits"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6">
                  <input
                    type="text"
                    name="subject"
                    className="form-control"
                    placeholder="Subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-12">
                  <textarea
                    name="message"
                    className="form-control"
                    rows={6}
                    placeholder="Message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="col-md-12 text-center">
                  {status === "success" && (
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                  )}
                  {status === "error" && (
                    <div className="error-message">
                      Failed to send message. Please try again.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    style={{
                      minHeight: "48px",
                      padding: "12px 24px",
                      position: "relative",
                      zIndex: 10,
                      width: "100%",
                      touchAction: "manipulation",
                    }}
                  >
                    {loading ? (
                      <span
                        className="spinner"
                        style={{
                          display: "inline-block",
                          width: "20px",
                          height: "20px",
                          border: "2px solid white",
                          borderTop: "2px solid transparent",
                          borderRadius: "50%",
                          animation: "spin 1s linear infinite",
                        }}
                      ></span>
                    ) : (
                      "REACH NOW"
                    )}
                  </button>
                </div>
              </div>
            </form>

            {status === "success" && (
              <div className="mt-4 text-success text-center fw-semibold">
                <strong>
                  Thank you for reaching out! We’ve received your message and
                  will get back to you shortly.
                </strong>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
