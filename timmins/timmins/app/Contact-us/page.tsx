import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function contactUspage() {
    return (
        <>
            <Header />

            {/* HERO */}
            <section className="contact-hero contact-hero--compact">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-10 col-12 text-center">

                            <h1 className="contact-hero-title mb-3">
                                Contact Us
                            </h1>

                            <p className="contact-hero-desc mb-0">
                                We work with you to understand your objectives, your people,
                                and the technical capabilities required to move from intent
                                to real-world execution.
                            </p>

                        </div>
                    </div>
                </div>
            </section>



            <section className="contact-section py-5">
                <div className="container">

                    {/* TITLE */}
                    <div className="text-center mb-5">
                        <h2 className="fw-bold">Get in Touch</h2>
                        <p className="text-muted mt-2">
                            Reach out to our regional teams for partnerships, training, or consultations.
                        </p>
                    </div>

                    <div className="row g-4">

                        {/* CARD */}
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="contact-card-alt h-100">
                                <span className="accent"></span>

                                <h5>Malaysia</h5>
                                <small className="text-muted">(Head Office)</small>

                                <p className="mt-3">
                                    <strong>Timmins Training Consulting Sdn. Bhd.</strong><br />
                                    Suite 3A–05, Level 3A, Wisma Fiamma<br />
                                    Kuala Lumpur, Malaysia
                                </p>

                                <p>
                                    📞 +60 3-2785 0737<br />
                                    💬 +60 11-1667 4727<br />
                                    ✉️ info@timmins-consulting.com
                                </p>

                                <a
                                    href="https://maps.app.goo.gl/36Z867fj5VgwrJU29"
                                    target="_blank"
                                    className="contact-link"
                                >
                                    View on Google Maps →
                                </a>
                            </div>
                        </div>

                        {/* CARD */}
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="contact-card-alt h-100">
                                <span className="accent"></span>

                                <h5>Penang</h5>
                                <small className="text-muted">Training Center</small>

                                <p className="mt-3">
                                    Bayan Lepas Industrial Park<br />
                                    Penang
                                </p>

                                <p>🕘 9:00 AM – 5:30 PM (Mon–Fri)</p>

                                <a
                                    href="https://maps.app.goo.gl/xTg4GoZFLobRJ11J8"
                                    target="_blank"
                                    className="contact-link"
                                >
                                    View on Google Maps →
                                </a>
                            </div>
                        </div>

                        {/* CARD */}
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="contact-card-alt h-100">
                                <span className="accent"></span>

                                <h5>Canada</h5>
                                <small className="text-muted">Representative Office</small>

                                <p className="mt-3">
                                    Toronto, Ontario<br />
                                    Canada
                                </p>
                            </div>
                        </div>

                        {/* CARD */}
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="contact-card-alt h-100">
                                <span className="accent"></span>

                                <h5>Indonesia</h5>

                                <p className="mt-3">
                                    South Jakarta
                                </p>

                                <a
                                    href="https://maps.app.goo.gl/7fLGt4idozEcdLwz8"
                                    target="_blank"
                                    className="contact-link"
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
            <section
                className="contact-message-section"
                style={{
                    paddingTop: "40px",
                    paddingBottom: "40px",
                    background: "#ffffff"
                }}
            >
                <div className="container">

                    <div className="row justify-content-center">
                        <div className="col-lg-7">

                            <div className="text-center mb-4">
                                <h2
                                    style={{
                                        fontWeight: "700",
                                        marginBottom: "12px"
                                    }}
                                >
                                    Plan Your Next Capability Move
                                </h2>

                                <p
                                    style={{
                                        fontSize: "15px",
                                        color: "#555",
                                        maxWidth: "620px",
                                        margin: "0 auto"
                                    }}
                                >
                                    Tell us what capability you’re looking to build.
                                    We’ll connect you with the right specialist.
                                </p>
                            </div>

                            <form
                                className="contact-form"
                                style={{
                                    background: "#fff",
                                    padding: "28px",
                                    borderRadius: "16px",
                                    boxShadow: "0 12px 30px rgba(0,0,0,0.06)"
                                }}
                            >

                                <div className="mb-3">
                                    <label className="form-label fw-semibold">Full Name</label>
                                    <input type="text" className="form-control" required />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-semibold">Organization</label>
                                    <input type="text" className="form-control" />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-semibold">Email</label>
                                    <input type="email" className="form-control" required />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-semibold">Contact Number</label>
                                    <input type="tel" className="form-control" />
                                </div>

                                <div className="mb-4">
                                    <label className="form-label fw-semibold">Area of Interest</label>
                                    <select className="form-control">
                                        <option>Select an option</option>
                                        <option>AI</option>
                                        <option>Embedded Linux</option>
                                        <option>5G</option>
                                        <option>Data Analytics</option>
                                        <option>Others</option>
                                    </select>
                                </div>

                                <div className="text-center">
                                    <button
                                        type="submit"
                                        style={{
                                            background: "#f5a623",
                                            color: "#fff",
                                            fontWeight: "600",
                                            padding: "18px 34px",
                                            borderRadius: "30px",
                                            border: "none",
                                            marginTop: "12px",
                                        }}
                                    >
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
