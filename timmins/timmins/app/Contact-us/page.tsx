import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ContactForm from "./ContactForm";

export default function ContactUsPage() {
  return (
    <>
      <Header />

      <div className="cu-page">
        {/* Hero */}
        <section className="cu-hero">
          <div className="cu-hero__inner">
            <h1 className="cu-hero__title">Contact Us</h1>
            <p className="cu-hero__desc">
              We work with you to understand your objectives, your people, and the technical capabilities required to move from intent to real-world execution.
            </p>
          </div>
        </section>

        {/* Quick contact strip */}
        <section className="cu-quick">
          <div className="cu-container">
            <a href="tel:+60327850737" className="cu-quick__item">
              <span className="cu-quick__icon" aria-hidden="true">📞</span>
              <span>+60 3-2785 0737</span>
            </a>
            <a href="https://wa.me/601116674727" className="cu-quick__item" target="_blank" rel="noopener noreferrer">
              <span className="cu-quick__icon" aria-hidden="true">💬</span>
              <span>WhatsApp</span>
            </a>
            <a href="mailto:info@timmins-consulting.com" className="cu-quick__item">
              <span className="cu-quick__icon" aria-hidden="true">✉️</span>
              <span>info@timmins-consulting.com</span>
            </a>
          </div>
        </section>

        {/* Main: offices + form */}
        <section className="cu-main">
          <div className="cu-container">
            <div className="cu-grid">
              {/* Offices */}
              <div className="cu-offices">
                <h2 className="cu-offices__title">Get in Touch</h2>
                <p className="cu-offices__intro">
                  Reach out to our regional teams for partnerships, training, or consultations.
                </p>

                <div className="cu-office">
                  <div className="cu-office__header">
                    <h3>Malaysia <span className="cu-office__badge">Head Office</span></h3>
                    <p className="cu-office__company">Timmins Training Consulting Sdn. Bhd.</p>
                  </div>
                  <p className="cu-office__address">
                    Taman Zeta@Zetapark, C-11-01 Kompleks Danau Kota, 67, Jln Taman Ibu Kota, Setapak, 53300 Kuala Lumpur, Malaysia
                  </p>
                  <ul className="cu-office__contact">
                    <li><strong>Phone:</strong> +60 3-2785 0737</li>
                    <li><strong>WhatsApp:</strong> +60 11-1667 4727</li>
                    <li><strong>Email:</strong> info@timmins-consulting.com</li>
                  </ul>
                  <a href="#" className="cu-office__link">View on map →</a>
                </div>

                <div className="cu-office">
                  <div className="cu-office__header">
                    <h3>Penang</h3>
                  </div>
                  <p className="cu-office__address">
                    1-3-6, Lintang Mayang Pasir 3, Elite Avenue, 11950 Bayan Lepas, Pulau Pinang, Malaysia
                  </p>
                  <p className="cu-office__hours">9:00 AM – 5:30 PM (Mon–Fri)</p>
                  <ul className="cu-office__contact">
                    <li><strong>WhatsApp:</strong> +60 11-1667 4727</li>
                    <li><strong>Email:</strong> info@timmins-consulting.com</li>
                  </ul>
                  <a href="#" className="cu-office__link">View on map →</a>
                </div>

                <div className="cu-office">
                  <div className="cu-office__header">
                    <h3>Canada</h3>
                  </div>
                  <p className="cu-office__address">Toronto, Ontario</p>
                  <ul className="cu-office__contact">
                    <li><strong>Email:</strong> info@timmins-consulting.com</li>
                  </ul>
                </div>

                <div className="cu-office">
                  <div className="cu-office__header">
                    <h3>Indonesia</h3>
                  </div>
                  <p className="cu-office__address">South Jakarta</p>
                  <ul className="cu-office__contact">
                    <li><strong>WhatsApp:</strong> +60 11-1667 4727</li>
                    <li><strong>Email:</strong> info@timmins-consulting.com</li>
                  </ul>
                  <a href="#" className="cu-office__link">View on map →</a>
                </div>
              </div>

              {/* Form (client component) */}
              <div className="cu-form-wrap">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
