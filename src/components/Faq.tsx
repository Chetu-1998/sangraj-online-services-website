import React, { useState } from "react";

interface FaqItem {
  icon?: string;
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    icon: "bi bi-question-circle",
    question: "What is a CSC (Common Service Center)?",
    answer:
      "CSC is a government initiative to provide digital access to public services, including certificates, bill payments, insurance, banking, and more, especially in rural areas.",
  },
  {
    question: "What services are offered at a Grahak Seva Kendra?",
    answer:
      "Grahak Seva Kendra provides banking services like account opening, cash withdrawal, deposit, fund transfer, balance inquiry, and bill payments under the Business Correspondent model.",
  },
  {
    question: "Can I apply for PAN Card or Aadhar updates through CSC?",
    answer:
      "Yes, you can apply for new PAN cards, PAN corrections, and Aadhar-related services at your nearest CSC.",
  },
  {
    question: "What bill payments can I make through CSC?",
    answer:
      "You can pay electricity bills, water bills, gas bills, mobile/DTH recharges, and even school fees at CSC centers.",
  },
  {
    question: "Is money withdrawal safe at Grahak Seva Kendra?",
    answer:
      "Yes, it is safe. Transactions are authenticated via biometric (fingerprint) or OTP verification. Receipts are provided instantly.",
  },
];

const Faq: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0); // first item open

  const toggleFAQ = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section id="faq" className="faq section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Frequently Asked Questions</h2>
        <p>
          <span>Check Our</span> <span className="description-title">Faqs</span>
        </p>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10" data-aos="fade-up" data-aos-delay="100">
            <div className="faq-container">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className={`faq-item ${
                    activeIndex === index ? "faq-active" : ""
                  }`}
                  onClick={() => toggleFAQ(index)}
                  style={{ cursor: "pointer" }}
                >
                  <h3>
                    <i
                      className={`${faq.icon || "bi bi-question-circle"} me-2`}
                    ></i>
                    {faq.question}
                  </h3>
                  <div
                    className="faq-content"
                    style={{
                      display: activeIndex === index ? "block" : "none",
                      transition: "all 0.3s ease-in-out",
                      paddingTop: "10px",
                    }}
                  >
                    <p>{faq.answer}</p>
                  </div>
                  <i
                    className={`faq-toggle bi ${
                      activeIndex === index
                        ? "bi-chevron-right"
                        : "bi-chevron-right"
                    }`}
                  ></i>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
