import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

const page = () => {
    return (
        <>

            <Header />
            <section className="safe-hero">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-9">

                            <h1 className="safe-title">
                                Scaled Agile (SAFe®) Certification
                            </h1>

                            <p className="safe-subtitle">
                                Enterprise agility for engineering, telecom, manufacturing, and banking organizations.
                            </p>

                            <p className="safe-desc">
                                Timmins is not a generic Agile training vendor. As a <strong>Bronze Scaled Agile Partner</strong>,
                                we deliver SAFe® Agile Certification programs that help engineering-driven organizations
                                scale with confidence, combining enterprise agility with technical excellence.
                            </p>

                            <div className="button-row">
                                <a href="/solutions/consulting" className="btn-primary text-white">
                                    Book Capability Consultation
                                </a>
                            </div>

                            <div className="safe-meta">
                                <p className="safe-note">
                                    HRDC Claimable, Malaysia-Based Employers Only
                                </p>
                                <p className="safe-geo">
                                    Global Delivery Available: Malaysia • Indonesia • Canada • United States
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


            <section className="onboarding-section listStyle bgBlue">
                <h2>Why Scaled Agile (SAFe®)?</h2>
                <p><strong>Agile is no longer a team-level framework, it’s an enterprise strategy.</strong></p>
                <br />
                <p>The Scaled Agile Framework (SAFe®) brings agility to complex, multi-team environments such as engineering, IT, operations, and product development. SAFe® helps organizations:</p>
                <ul className="outcomes-list">
                    <li>align teams around shared objectives</li>
                    <li>improve delivery predictability and speed</li>
                    <li>remove organizational silos</li>
                    <li>empower leaders with data-driven insights</li>
                    <li>scale Agile across portfolios, programs, and engineering teams
                    </li>
                </ul>

                <p>
                    This is why SAFe® has become the global standard for large-scale transformation across industries.
                </p>
            </section>


            <section className="safe-programs-section text-center">
                <div className="container">
                    <h2 className="fw-bold mb-3">SAFe® Certification Programs We Offer</h2>
                    <p className="mb-4">
                        All programs are delivered by <strong>certified SAFe® trainers</strong> with real
                        enterprise transformation experience in engineering, manufacturing,
                        telecom, and digital banking.
                    </p>
                    <div className="table-responsive">
                        <table className="table table-bordered align-middle safe-table">
                            <thead>
                                <tr>
                                    <th>Category</th>
                                    <th>Course</th>
                                    <th>Duration</th>
                                    <th>Format</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Leadership</td>
                                    <td>Leading SAFe®</td>
                                    <td>2 Days</td>
                                    <td>Online / Face-to-Face</td>
                                </tr>
                                <tr>
                                    <td>Implementation</td>
                                    <td>Implementing SAFe®</td>
                                    <td>4 Days</td>
                                    <td>Online / Face-to-Face</td>
                                </tr>
                                <tr>
                                    <td>Team Agility</td>
                                    <td>SAFe® Scrum Master (SSM)</td>
                                    <td>2 Days</td>
                                    <td>Online / Face-to-Face</td>
                                </tr>
                                <tr>
                                    <td>Product Management</td>
                                    <td>SAFe® Agile Product Management (APM)</td>
                                    <td>3 Days</td>
                                    <td>Online / Face-to-Face</td>
                                </tr>
                                <tr>
                                    <td>Architecture</td>
                                    <td>SAFe® for Architects</td>
                                    <td>3 Days</td>
                                    <td>Online / Face-to-Face</td>
                                </tr>
                                <tr>
                                    <td>DevOps</td>
                                    <td>SAFe® DevOps Practitioner</td>
                                    <td>2 Days</td>
                                    <td>Online / Face-to-Face</td>
                                </tr>
                                <tr>
                                    <td>Advanced</td>
                                    <td>SAFe® Release Train Engineer</td>
                                    <td>3 Days</td>
                                    <td>Online / Face-to-Face</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>


            <section className="onboarding-section  listStyle bgBlue">
                <h2>Why Choose Timmins for SAFe®?</h2>
                <p>We don’t just teach Agile, we build the capability to scale it.</p>
                <ul className="outcomes-list">
                    <li><strong>Bronze Scaled Agile Partner</strong></li>
                    <li> <strong>Practitioner-led trainers</strong> with deep transformation experience</li>
                    <li> <strong>Multi-industry applicability</strong> (engineering, telecom, manufacturing, banking)</li>
                    <li><strong>
                        Customizable in-house and public batches
                    </strong></li>
                    <li>Delivered in <strong>10+ countries</strong> </li>
                    <li>Tailored coaching for engineering teams</li>
                    <li>Real case studies and enterprise simulations</li>
                </ul>

                <p>
                    When enterprises need <strong>engineering-aware agility</strong> , they come to Timmins.
                </p>
            </section>

            <section className="upcoming-batches py-5">
                <div className="container text-center">
                    <h2 className="fw-bold mb-3">Upcoming Public Batches (2026)</h2>
                    <p className="mb-2">
                        Our next SAFe® certification batches will be available in:
                    </p>
                    <p className="fw-semibold mb-1">Kuala Lumpur • Penang</p>
                    <p className="mb-4">
                        📅 <strong>Schedule Release:</strong> Q1 2026
                    </p>
                    <a href="#" className="btn btn-primary text-white rounded-pill px-4 py-2">
                        Pre-Register for a SAFe® Class
                    </a>
                </div>
            </section>


            <section className="safe-section text-center section gap">
                <h2>HRDC-Claimable Training (Malaysia Only)</h2>
                <p>
                    All Timmins SAFe® certification programs delivered in Malaysia are HRDC
                    Claimable Training. We provide full documentation, attendance tracking, and
                    claim support.
                </p>
                <p className="fw-bold">
                    (This benefit applies exclusively to Malaysian employers.)
                </p>
            </section>



            <section className="onboarding-section-1 section gap listStyle">
                <h2>Engineering-Focused SAFe® Delivery</h2>

                <p className="intro">
                    Most SAFe® classes teach frameworks. We teach implementation, especially for engineering-driven systems. Our approach integrates::

                </p>
                <ul className="outcomes-list witthautoStyle">
                    <li>engineering workflows</li>
                    <li>DevOps and automation pipelines</li>
                    <li>software & hardware delivery cycles</li>
                    <li>telecom & manufacturing constraints</li>
                    <li>cross-functional dependencies</li>
                    <li>system-level architecture thinking</li>

                </ul>

                <p className="highlight">
                    This is SAFe® for real-world engineering environments, not theory.
                </p>

                <a href="/solutions/tna" className="primary-btn text-white">
                    Build Your Skill Matrix
                </a>
            </section>


            <section className="safe-section text-center section gap">
                <h2>Ready to Scale?</h2>
                <p>
                    Let’s design the right Agile transformation pathway for your organization.
                </p>
                <a href="/solutions/tna" className="primary-btn text-white">
                    Speak to Our Agile Team
                </a>
            </section>


            <section className="ed-faq section-gap position-relative">
                <div className="container ed-container">
                    <div className="ed-section-head text-center">

                        <h3 className="ed-section-head__title text-center">
                            Frequently Asked Questions
                        </h3>
                    </div>
                    <div className="ed-faq__inner position-relative">

                        <div className="row align-items-center">
                            <div className="col-lg-12 col-xl-6 col-12">
                                {/* Faq Images  */}
                                <div className="ed-faq__content">

                                    <div
                                        className="ed-faq__accordion faq-inner accordion"
                                        id="accordionExample"
                                    >
                                        {/* Single Faq */}
                                        <div className="ed-faq__accordion-item">
                                            <h2 className="accordion-header" id="headingOne">
                                                <button
                                                    className="accordion-button"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapseOne"
                                                    aria-expanded="true"
                                                    aria-controls="collapseOne"
                                                >
                                                    1. What is SAFe Agile Certification?
                                                </button>
                                            </h2>
                                            <div
                                                id="collapseOne"
                                                className="accordion-collapse collapse show"
                                                aria-labelledby="headingOne"
                                                data-bs-parent="#accordionExample"
                                            >
                                                <div className="ed-faq__accordion-body">
                                                    <p className="ed-faq__accordion-text">
                                                        SAFe Agile Certification is a globally recognized credential for professionals working in large-scale Agile environments. It helps validate your knowledge in enterprise agility, Lean principles, and SAFe® practices.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Single Faq */}
                                        <div className="ed-faq__accordion-item">
                                            <h2 className="accordion-header" id="headingThree">
                                                <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapseThree"
                                                    aria-expanded="false"
                                                    aria-controls="collapseThree"
                                                >
                                                    2. Is SAFe Scrum Master Certification worth it?
                                                </button>
                                            </h2>
                                            <div
                                                id="collapseThree"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="headingThree"
                                                data-bs-parent="#accordionExample"
                                            >
                                                <div className="ed-faq__accordion-body">
                                                    <p className="ed-faq__accordion-text">
                                                        Yes. SAFe Scrum Master Certification is one of the most in-demand Scrum Master pathways for organizations using the Scaled Agile Framework. It increases career opportunities in enterprise-level Agile teams
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Single Faq */}
                                        <div className="ed-faq__accordion-item">
                                            <h2 className="accordion-header" id="headingTwo">
                                                <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapseTwo"
                                                    aria-expanded="false"
                                                    aria-controls="collapseTwo"
                                                >
                                                    3. What is the difference between Scrum Master Certification and SAFe Scrum Master?
                                                </button>
                                            </h2>
                                            <div
                                                id="collapseTwo"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="headingTwo"
                                                data-bs-parent="#accordionExample"
                                            >
                                                <div className="ed-faq__accordion-body">
                                                    <p className="ed-faq__accordion-text">
                                                        Scrum Master Certification focuses on team-level Scrum. SAFe Scrum Master Certification expands this into multi-team, multi-ART environments with cross-functional coordination.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Single Faq */}
                                        <div className="ed-faq__accordion-item">
                                            <h2 className="accordion-header" id="headingThree">
                                                <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapseThree"
                                                    aria-expanded="false"
                                                    aria-controls="collapseThree"
                                                >
                                                    4. Which SAFe Certification is best for beginners?
                                                </button>
                                            </h2>
                                            <div
                                                id="collapseThree"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="headingThree"
                                                data-bs-parent="#accordionExample"
                                            >
                                                <div className="ed-faq__accordion-body">
                                                    <p className="ed-faq__accordion-text">
                                                        Leading SAFe® and SAFe® Scrum Master (SSM) are the most beginner-friendly certifications, suitable for new Agile leaders, Scrum Masters, and engineers.   Yes. We specialize in custom training pathways for embedded systems, 5G, AI, and software engineering
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Single Faq */}
                                        <div className="ed-faq__accordion-item">
                                            <h2 className="accordion-header" id="headingFour">
                                                <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapseFour"
                                                    aria-expanded="false"
                                                    aria-controls="collapseFour"
                                                >
                                                    5. How long does it take to get SAFe certified?
                                                </button>
                                            </h2>
                                            <div
                                                id="collapseFour"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="headingFour"
                                                data-bs-parent="#accordionExample"
                                            >
                                                <div className="ed-faq__accordion-body">
                                                    <p className="ed-faq__accordion-text">
                                                        Most SAFe® certifications take 2–3 days of training, followed by an online exam hosted by Scaled Agile Inc.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-12 col-xl-6 col-12">
                                {/* Faq Content  */}
                                <div className="ed-faq__content">

                                    <div
                                        className="ed-faq__accordion faq-inner accordion"
                                        id="accordionExample"
                                    >
                                        {/* Single Faq */}
                                        <div className="ed-faq__accordion-item">
                                            <h2 className="accordion-header" id="headingOne">
                                                <button
                                                    className="accordion-button"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapseOne"
                                                    aria-expanded="true"
                                                    aria-controls="collapseOne"
                                                >
                                                    6. Is SAFe 6.0 Training still relevant?
                                                </button>
                                            </h2>
                                            <div
                                                id="collapseOne"
                                                className="accordion-collapse collapse show"
                                                aria-labelledby="headingOne"
                                                data-bs-parent="#accordionExample"
                                            >
                                                <div className="ed-faq__accordion-body">
                                                    <p className="ed-faq__accordion-text">
                                                        Yes. SAFe 6.0 is the latest version of the Scaled Agile Framework, fully aligned with Lean-Agile principles, organizational flow, and continuous learning culture.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Single Faq */}
                                        <div className="ed-faq__accordion-item">
                                            <h2 className="accordion-header" id="headingTwo">
                                                <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapseTwo"
                                                    aria-expanded="false"
                                                    aria-controls="collapseTwo"
                                                >
                                                    7. What industries use SAFe?
                                                </button>
                                            </h2>
                                            <div
                                                id="collapseTwo"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="headingTwo"
                                                data-bs-parent="#accordionExample"
                                            >
                                                <div className="ed-faq__accordion-body">
                                                    <p className="ed-faq__accordion-text">
                                                        SAFe is widely used in engineering, telecom, manufacturing, finance, and software companies to manage large-scale programs and cross-team dependencies.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Single Faq */}
                                        <div className="ed-faq__accordion-item">
                                            <h2 className="accordion-header" id="headingThree">
                                                <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapseThree"
                                                    aria-expanded="false"
                                                    aria-controls="collapseThree"
                                                >
                                                    8. Is HRDC Claimable Training available for SAFe?
                                                </button>
                                            </h2>
                                            <div
                                                id="collapseThree"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="headingThree"
                                                data-bs-parent="#accordionExample"
                                            >
                                                <div className="ed-faq__accordion-body">
                                                    <p className="ed-faq__accordion-text">
                                                        Yes, but only for Malaysian employers. All Timmins SAFe® programs delivered in Malaysia are HRDC-claimable.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Single Faq */}
                                        <div className="ed-faq__accordion-item">
                                            <h2 className="accordion-header" id="headingThree">
                                                <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapseThree"
                                                    aria-expanded="false"
                                                    aria-controls="collapseThree"
                                                >
                                                    9. Can SAFe be applied in engineering and hardware teams?
                                                </button>
                                            </h2>
                                            <div
                                                id="collapseThree"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="headingThree"
                                                data-bs-parent="#accordionExample"
                                            >
                                                <div className="ed-faq__accordion-body">
                                                    <p className="ed-faq__accordion-text">
                                                        Absolutely. SAFe is designed for complex systems, including hardware, firmware, embedded, telecom, and manufacturing workflows.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Single Faq */}
                                        <div className="ed-faq__accordion-item">
                                            <h2 className="accordion-header" id="headingFour">
                                                <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapseFour"
                                                    aria-expanded="false"
                                                    aria-controls="collapseFour"
                                                >
                                                    10. Does Timmins offer in-house SAFe classes for companies?
                                                </button>
                                            </h2>
                                            <div
                                                id="collapseFour"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="headingFour"
                                                data-bs-parent="#accordionExample"
                                            >
                                                <div className="ed-faq__accordion-body">
                                                    <p className="ed-faq__accordion-text">
                                                        Yes. Timmins provides private corporate classes tailored to your teams, roles, and transformation goals.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />











        </>
    )
}

export default page