import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function contactUspage() {
    return (
        <>
            <Header />

            {/* HERO */}
            <section className="contact-hero py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">

                            <h1 className="contact-hero-title mb-3">
                                Contact Us
                            </h1>

                            <p className="contact-hero-desc">
                                We work with you to understand your objectives, your people, and the technical capabilities required to move from intent to real-world execution


                            </p>

                        </div>
                    </div>
                </div>
            </section>


            <section className="contact-section py-5">
                <div className="container">

                    {/* SECTION TITLE */}
                    <div className="text-center mb-5">
                        <h2 className="get-in-touch-title">
                            📞 Get in Touch
                        </h2>
                    </div>

                    {/* CARDS */}
                    <div className="row g-4">

                        {/* MALAYSIA – HEAD OFFICE */}
                        <div className="col-lg-3 col-md-6 d-flex">
                            <div className="contact-card primary w-100">

                                <h4 className="mb-3">Malaysia (Head Office)</h4>

                                <p className="location-text">
                                    <strong>Timmins Training Consulting Sdn. Bhd.</strong><br />
                                    Suite 3A–05, Level 3A, Wisma Fiamma<br />
                                    No. 20, Jalan 7A/62A, Bandar Manjalara<br />
                                    52200 Kuala Lumpur, Malaysia
                                </p>

                                <p className="location-text">
                                    📱 +60 3-2785 0737 <br />
                                    WhatsApp: +60 11-1667 4727
                                </p>

                                <p className="location-text">
                                    ✉️ <a href="mailto:info@timmins-consulting.com">
                                        info@timmins-consulting.com
                                    </a>
                                </p>

                                <a
                                    href="https://maps.app.goo.gl/36Z867fj5VgwrJU29?g_st=ic"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="map-link"
                                >
                                    View on Google Maps →
                                </a>

                            </div>
                        </div>

                        {/* PENANG TRAINING CENTER */}
                        <div className="col-lg-3 col-md-6 d-flex">
                            <div className="contact-card w-100">

                                <h4 className="mb-3">Penang Training Center</h4>

                                <p className="location-text">
                                    Bayan Lepas Industrial Park<br />
                                    Penang
                                </p>

                                <p className="location-text">
                                    🕘 9:00 AM – 5:30 PM (Mon–Fri)
                                </p>

                                <a
                                    href="https://maps.app.goo.gl/xTg4GoZFLobRJ11J8?g_st=ic"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="map-link"
                                >
                                    View on Google Maps →
                                </a>

                            </div>
                        </div>

                        {/* CANADA – REPRESENTATIVE OFFICE */}
                        <div className="col-lg-3 col-md-6 d-flex">
                            <div className="contact-card w-100">

                                <h4 className="mb-3">Canada (Representative Office)</h4>

                                <p className="location-text">
                                    Toronto, Ontario<br />
                                    Canada
                                </p>

                            </div>
                        </div>

                        {/* INDONESIA */}
                        <div className="col-lg-3 col-md-6 d-flex">
                            <div className="contact-card w-100">

                                <h4 className="mb-3">Indonesia</h4>

                                <p className="location-text">
                                    South Jakarta
                                </p>

                                <a
                                    href="https://maps.app.goo.gl/7fLGt4idozEcdLwz8?g_st=ic"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="map-link"
                                >
                                    View on Google Maps →
                                </a>

                            </div>
                        </div>

                    </div>
                </div>
            </section>



            {/* APPOINTMENT */}


            {/* CONTACT FORM */}
            <section className="contact-message-section py-5">
                <div className="container">

                    <div className="row justify-content-center">
                        <div className="col-lg-7">

                            {/* SECTION HEADING */}
                            <div className="text-center mb-4">
                                <h2 className="message-title">
                                    Plan Your Next Capability Move
                                </h2>

                                <p className="message-desc">
                                    Tell us what capability you’re looking to build, whether it’s AI consulting,
                                    embedded systems, 5G training, data analytics, or a broader learning strategy.
                                    We’ll connect you with the right specialist to explore the best next step.
                                </p>
                            </div>

                            {/* FORM */}
                            <form className="contact-form">

                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Full Name"
                                    />
                                </div>

                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Organization Name"
                                    />
                                </div>

                                <div className="mb-3">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Email Address"
                                    />
                                </div>

                                <div className="mb-3">
                                    <input
                                        type="tel"
                                        className="form-control"
                                        placeholder="Contact Number"
                                    />
                                </div>

                                <div className="mb-4">
                                    <select className="form-control">
                                        <option>Area of Interest</option>
                                        <option>AI</option>
                                        <option>Embedded Linux</option>
                                        <option>5G</option>
                                        <option>Data Analytics</option>
                                        <option>Others</option>
                                    </select>
                                </div>

                                <div className="text-center">
                                    <button type="submit" className="btn btn-message-submit">
                                        Connect with Our Team →
                                    </button>
                                </div>

                            </form>

                        </div>
                    </div>

                </div>
            </section>


            {/* SOFT CTA */}


            <Footer />
        </>
    );
}
