import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function contactUspage() {
    return (
        <>
            <Header />

            {/* HERO */}
            <section className="contact-hero">
                <div className="contact-hero-content">
                    <h1>Let’s Start a Conversation</h1>
                    <p>
                        Every partnership at Timmins starts with understanding your goals, your
                        people, and the technical capabilities you want to build.
                    </p>
                    <p className="hero-subtext">
                        Whether you're exploring AI consulting, embedded systems training, 5G
                        technician training, corporate training in Malaysia, HRDC Claimable
                        Courses, or a fully customized onboarding solution, our specialists are
                        ready to help you plan the next step.
                    </p>

                    <div className="hero-cta">
                        <a href="#calendly" className="btn-primary">
                            Book a Consultation
                        </a>
                        <a href="#contact-form" className="btn-secondary">
                            Send a Message
                        </a>
                    </div>
                </div>
            </section>

            {/* CONTACT CARDS */}
            <section className="container py-5">
                <h2 className="text-center fw-bold mb-5">📞 Get in Touch</h2>

                <div className="row justify-content-center g-4">

                    {/* Malaysia */}
                    <div className="col-md-4">
                        <div className="contact-card h-100 text-center">
                            <h4>Malaysia (Head Office)</h4>

                            <p>Timmins Training Consulting Sdn. Bhd.</p>
                            <p>
                                Suite 3A–05, Level 3A, Wisma Fiamma <br />
                                No. 20, Jalan 7A/62A, Bandar Manjalara <br />
                                52200 Kuala Lumpur, Malaysia
                            </p>
                            <p>
                                📞 +60 3-2785 0737 <br />
                                WhatsApp: +60 11-1667 4727
                            </p>
                            <p className="contact-email">
                                ✉️ hello@consult-timmins.com
                            </p>
                        </div>
                    </div>

                    {/* Penang */}
                    <div className="col-md-4">
                        <div className="contact-card h-100 text-center d-flex flex-column justify-content-center">
                            <h4>Penang Training Center</h4>
                            <p>
                                Bayan Lepas Industrial Park <br />
                                Penang
                            </p>
                            <p>🕘 9:00 AM – 5:30 PM (Mon–Fri)</p>
                        </div>
                    </div>

                    {/* Canada */}
                    <div className="col-md-4">
                        <div className="contact-card h-100 text-center d-flex flex-column justify-content-center">
                            <h4>Canada (Representative Office)</h4>
                            <p>
                                Toronto, Ontario <br />
                                Canada
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* APPOINTMENT */}
            <section className="appointment-section" id="calendly">
                <div className="appointment-wrapper listStyle">
                    <h2>Book an Appointment</h2>
                    <p className="appointment-intro">
                        Schedule a short consultation with our practitioners.
                    </p>

                    <ul>
                        <li>AI Consulting</li>
                        <li>HRDC Claimable Training</li>
                        <li>Technical Upskilling</li>
                        <li>Embedded Systems Training</li>
                    </ul>

                    <p className="response-note">We respond within one business day.</p>
                </div>
            </section>

            {/* CONTACT FORM */}
            <section className="contact-form-section" id="contact-form">
                <div className="contact-form-wrapper">
                    <h2>Send Us a Message</h2>
                    <p className="form-intro">
                        Tell us a bit about what you’re looking for.
                    </p>

                    <form className="contact-form">
                        <input type="text" placeholder="Full Name" />
                        <input type="text" placeholder="Organization Name" />
                        <input type="email" placeholder="Email Address" />
                        <input type="tel" placeholder="Contact Number" />

                        <select>
                            <option>Select an option</option>
                            <option>AI Consulting</option>
                            <option>Embedded Systems</option>
                            <option>5G Training</option>
                        </select>

                        <button type="submit" className="primary-btn">
                            Send Message
                        </button>
                    </form>
                </div>
            </section>

            {/* SOFT CTA */}
            <section className="soft-cta">
                <div className="soft-cta-wrapper">
                    <h2>Still Deciding?</h2>
                    <p>
                        Capability building takes thought, not pressure.
                    </p>
                    <strong>Timmins Training Consulting — Together, We Grow.</strong>
                </div>
            </section>

            <Footer />
        </>
    );
}
