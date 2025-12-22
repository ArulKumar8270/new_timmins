import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

const page = () => {
    return (
        <>
            <Header />

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

            <section className="contact-info">
                <div className="contact-info-wrapper">
                    <h2>📞 Get in Touch</h2>
                    <div className="contact-cards">
                        {/* Malaysia */}
                        <div className="contact-card">
                            <h3>Malaysia (Head Office)</h3>
                            <p className="company">Timmins Training Consulting Sdn. Bhd.</p>
                            <p>
                                Suite 3A–05, Level 3A, Wisma Fiamma
                                <br />
                                No. 20, Jalan 7A/62A, Bandar Manjalara,
                                <br />
                                52200 Kuala Lumpur, Malaysia
                            </p>
                            <p>
                                📱 +60 3-2785 0737
                                <br />
                                WhatsApp: +60 11-1667 4727
                            </p>
                            <p>✉️ hello@consult-timmins.com</p>
                        </div>
                        {/* Penang */}
                        <div className="contact-card">
                            <h3>Penang Training Center</h3>
                            <p>
                                Bayan Lepas Industrial Park,
                                <br />
                                Penang
                            </p>
                            <p>
                                📅 Training Hours
                                <br />
                                9:00 AM – 5:30 PM (Mon–Fri)
                            </p>
                        </div>
                        {/* Canada */}
                        <div className="contact-card">
                            <h3>Canada (Representative Office)</h3>
                            <p>
                                Toronto, Ontario,
                                <br />
                                Canada
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            <section className="appointment-section" id="calendly">
                <div className="appointment-wrapper">
                    <h2>Book an Appointment</h2>
                    <p className="appointment-intro">
                        Not sure where to begin?
                        <br />
                        Schedule a short consultation with our practitioners, whether you need:
                    </p>
                    <ul className="appointment-list">
                        <li>AI Consultants for an Artificial Intelligence transformation</li>
                        <li>Advice on HRDC Claimable Training</li>
                        <li>Recommendations for Technical Upskilling programs</li>
                        <li>Embedded Systems or Embedded Linux training plan</li>
                        <li>Corporate Training Provider partnership</li>
                    </ul>
                    <p className="appointment-note">Use the calendar below to choose a time.</p>
                    {/* Calendly Embed */}
                    <div className="calendly-embed">
                        {/* Replace URL with your real Calendly link */}
                        <iframe
                            src="https://calendly.com/your-calendly-link"
                            width="100%"
                            height={650}
                            frameBorder={0}
                        ></iframe>
                    </div>
                    <p className="response-note">We respond within one business day.</p>
                </div>
            </section>

            <section className="contact-form-section" id="contact-form">
                <div className="contact-form-wrapper">
                    <h2>Send Us a Message</h2>
                    <p className="form-intro">
                        Tell us a bit about what you’re looking for: AI Consulting, Embedded
                        Systems Course, 5G Training Certification, Learning Strategy, or any
                        Training Needs Assessment. We’ll route your needs to the right expert.
                    </p>
                    <form className="contact-form">
                        <div className="form-group">
                            <label>Full Name</label>
                            <input type="text" placeholder="Your full name" />
                        </div>
                        <div className="form-group">
                            <label>Organization Name</label>
                            <input type="text" placeholder="Company / Organization" />
                        </div>
                        <div className="form-group">
                            <label>Email Address</label>
                            <input type="email" placeholder="you@example.com" />
                        </div>
                        <div className="form-group">
                            <label>Contact Number</label>
                            <input type="tel" placeholder="+60..." />
                        </div>
                        <div className="form-group">
                            <label>Area of Interest</label>
                            <select>
                                <option>Select an option</option>
                                <option>AI Consulting</option>
                                <option>Embedded Systems</option>
                                <option>5G Training</option>
                            </select>
                        </div>
                    </form>
                </div>
            </section>


            <section className="map-section">
                <div className="map-wrapper">
                    <h2>📍 Find Us</h2>
                    <p className="map-title">Timmins Training Center – Penang</p>
                    <div className="map-embed">
                        {/* Replace src with your actual Google Maps embed */}
                        <iframe
                            src="https://www.google.com/maps?q=Bayan%20Lepas%20Industrial%20Park%20Penang&output=embed"
                            width="100%"
                            height={420}
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </section>


            <section className="soft-cta">
                <div className="soft-cta-wrapper">
                    <h2>💬 Still Deciding?</h2>
                    <p className="soft-cta-text">
                        That’s okay. Capability building takes thought, not pressure.
                    </p>
                    <p className="soft-cta-subtext">
                        If you’re still exploring AI Consulting or AI Consultation services, HRDC
                        Claimable Training options, Technical Upskilling pathways, Embedded
                        Systems or Embedded Linux capabilities, or Corporate Training Provider
                        partnerships — we’re here to help you think it through.
                    </p>
                    <p className="soft-cta-brand">
                        <strong>Timmins Training Consulting</strong> — Together, We Grow.
                    </p>
                </div>
            </section>

            <Footer />
















        </>
    )
}

export default page
