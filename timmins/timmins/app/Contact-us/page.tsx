import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function ContactUspage() {
    return (
        <>
            <Header />

            {/* HERO */}
            <section className="contact-hero text-center d-flex align-items-center">
                <div className="container">
                    <h1 className="hero-title">Contact Us</h1>
                    <p className="hero-desc">
                        We work with you to understand your objectives, your people,
                        and the technical capabilities required to move from intent
                        to real-world execution.
                    </p>
                </div>
            </section>

            {/* SPLIT SECTION */}
            <section className="contact-split py-5">
                <div className="container">
                    <div className="row align-items-start">

                        {/* LEFT SIDE */}
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <h2 className="split-title mb-3">Get in Touch</h2>
                            <p className="text-muted mb-5">
                                Reach out to our regional teams for partnerships, training,
                                or consultations.
                            </p>

                            <div className="office-modern">

                                {/* Malaysia */}
                                <div className="office-row">
                                    <div className="office-left">
                                        <h5>Malaysia <span>(Head Office)</span></h5>
                                        <p className="company">
                                            Timmins Training Consulting Sdn. Bhd.
                                        </p>
                                        <p>
                                            Taman Zeta@Zetapark, C-11-01 Kompleks Danau Kota, 67,<br />
                                            Jln Taman Ibu Kota, Setapak, 53300 Kuala Lumpur, Malaysia
                                        </p>
                                    </div>

                                    <div className="office-contact">
                                        <p><strong>Phone:</strong> +60 3-2785 0737</p>
                                        <p><strong>WhatsApp:</strong> +60 11-1667 4727</p>
                                        <p><strong>Email:</strong> info@timmins-consulting.com</p>
                                        <a href="#" className="map-link">View Map →</a>
                                    </div>
                                </div>

                                {/* Penang */}
                                <div className="office-row">
                                    <div className="office-left">
                                        <h5>Penang</h5>
                                        <p>
                                            1-3-6, Lintang Mayang Pasir 3, Elite Avenue,
                                            11950 Bayan Lepas, Pulau Pinang, Malaysia
                                        </p>
                                        <p>9:00 AM – 5:30 PM (Mon–Fri)</p>
                                    </div>

                                    <div className="office-contact">
                                        <p><strong>WhatsApp:</strong> +60 11-1667 4727</p>
                                        <p><strong>Email:</strong> info@timmins-consulting.com</p>
                                        <a href="#" className="map-link">View Map →</a>
                                    </div>
                                </div>

                                {/* Canada */}
                                <div className="office-row">
                                    <div className="office-left">
                                        <h5>Canada</h5>
                                        <p>Toronto, Ontario</p>
                                    </div>

                                    <div className="office-contact">
                                        <p><strong>Email:</strong> info@timmins-consulting.com</p>
                                    </div>
                                </div>

                                {/* Indonesia */}
                                <div className="office-row">
                                    <div className="office-left">
                                        <h5>Indonesia</h5>
                                        <p>South Jakarta</p>
                                    </div>

                                    <div className="office-contact">
                                        <p><strong>WhatsApp:</strong> +60 11-1667 4727</p>
                                        <p><strong>Email:</strong> info@timmins-consulting.com</p>
                                        <a href="#" className="map-link">View Map →</a>
                                    </div>
                                </div>

                            </div>
                        </div>



                        {/* RIGHT SIDE FORM */}
                        <div className="col-lg-6">
                            <div className="form-card">
                                <h3 className="mb-4">Plan Your Next Capability Move</h3>

                                <form>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <input type="text" className="form-control modern-input" placeholder="Full Name" />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="text" className="form-control modern-input" placeholder="Organization" />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="email" className="form-control modern-input" placeholder="Email" />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="text" className="form-control modern-input" placeholder="Contact Number" />
                                        </div>
                                        <div className="col-12">
                                            <select className="form-select modern-input">
                                                <option>Select an option</option>
                                                <option>Embedded Systems</option>
                                                <option>Business Intelligence</option>
                                                <option>Programming Languages</option>
                                            </select>
                                        </div>
                                        <div className="col-12">
                                            <button className="modern-btn w-100">
                                                Connect with Our Team →
                                            </button>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
