import React, { useState } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const response = await fetch("http://localhost:5000/api/send-email", {
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
        const errorData = await response.json();
        setErrorMessage(errorData.message || "Something went wrong");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage("Failed to send message. Please try again later.");
    }
  };

  return (
    <section id="contact" className="contact section">
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
            <div
              className="info-item d-flex"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <i className="bi bi-geo-alt flex-shrink-0"></i>
              <div>
                <h3>Address</h3>
                <p>
                  Near Savata Mandir, Varchi Aali Nashirabad, Jalgaon 425309
                </p>
              </div>
            </div>
            <div
              className="info-item d-flex"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <i className="bi bi-telephone flex-shrink-0"></i>
              <div>
                <h3>Call Us</h3>
                <p>+91 9834013659</p>
              </div>
            </div>
            <div
              className="info-item d-flex"
              data-aos="fade-up"
              data-aos-delay="500"
            >
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
                    rows={6}
                    className="form-control"
                    placeholder="Message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="col-md-12 text-center">
                  {status === "loading" && (
                    <div className="loading">Loading...</div>
                  )}
                  {status === "error" && (
                    <div className="error-message">{errorMessage}</div>
                  )}
                  {status === "success" && (
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                  )}
                  <button type="submit">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
