import "../section-css/training.css"
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Image from "next/image";

export default function TrainingCalendarPage() {
    return (
        <>
            <Header />

            {/* HERO SECTION */}
            <section className="tc-hero-modern">
                <div className="container">
                    <div className="row align-items-center">

                        {/* LEFT CONTENT */}
                        <div className="col-lg-6">
                            <h1 className="tc-big-title">
                                Transform Capability Through
                                <br />
                                Structured Learning
                            </h1>

                            <p className="tc-modern-desc">
                                Discover our public classes and customised in-house
                                training programs designed to build practical,
                                real-world expertise.
                            </p>
                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="col-lg-6 position-relative text-center">
                            <div className="tc-image-wrapper">
                                <img
                                    src="/assets/New_images/Thome.png"
                                    alt="Training Calendar"
                                    className="img-fluid"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* TRAINING TYPES SECTION */}
            <section className="tc-types">
                <div className="container">

                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="row g-4">

                                {/* PUBLIC CLASSES */}
                                <div className="col-md-6">
                                    <div className="tc-card">
                                        <div className="tc-icon blue">
                                            <i className="bi bi-calendar3"></i>
                                        </div>

                                        <h4>Public Classes</h4>
                                        <p>
                                            Scheduled, instructor-led training open to individual professionals.
                                        </p>

                                        <ul>
                                            <li>Fixed dates</li>
                                            <li>Open registration</li>
                                            <li>Hands-on practice</li>
                                        </ul>

                                        <a href="/training-calendar/public" className="tc-pill-btn">
                                            Browse Public Classes →
                                        </a>
                                    </div>
                                </div>

                                {/* IN-HOUSE TRAINING */}
                                <div className="col-md-6">
                                    <div className="tc-card">
                                        <div className="tc-icon green">
                                            <i className="bi bi-building"></i>
                                        </div>

                                        <h4>In-House Training</h4>
                                        <p>
                                            Private, customized training delivered exclusively for your team.
                                        </p>

                                        <ul>
                                            <li>Custom scope</li>
                                            <li>Team-focused</li>
                                            <li>Delivered on-site or online</li>
                                        </ul>

                                        <a href="/training-calendar/in-house" className="tc-pill-btn">
                                            In-House Programs →
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </section>


            <Footer />
        </>
    );
}