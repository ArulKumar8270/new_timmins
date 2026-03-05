"use client";
import { useState } from "react";

import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

const page = () => {
    const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
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



            <section className="ed-faq section-gap position-relative overflow-hidden">

                <div className="container ">

                    <div className="section-heading-center">
                        <h2>Frequently Asked Questions</h2>
                    </div>


                    <div className="faq-grid">

                        {[
                            {
                                question: "1. What is the best embedded systems training for beginners?",
                                answer: "The recommended beginner courses are OS Essentials, Embedded C & GDB, and Embedded Linux System Internals. These courses provide a strong foundation in operating systems, embedded programming, debugging, and Linux internals."

                            },
                            {
                                question: "2. Does Timmins offer AI consulting or only training?",
                                answer: "Timmins offers both AI consulting and AI training, including capability assessment, use-case identification, and structured enterprise AI upskilling programs."
                            },
                            {
                                question: "3. Are your programs HRDC Claimable?",
                                answer: "Yes. For Malaysian employers only, many AI, Embedded Systems, 5G, and corporate training programs are HRDC claimable, subject to eligibility and approval."
                            },
                            {
                                question: "4. Do you provide customized training for engineering teams?",
                                answer: "Yes. Timmins specializes in customized, role-based training pathways for embedded systems, AI, 5G, and software engineering teams."
                            },
                            {
                                question: "5.Are Timmins training courses available online?",
                                answer: "Yes. Timmins offers online, on-site, and hybrid training programs for engineering and technical teams."
                            },
                            {
                                question: "6. What industries does Timmins work with?",
                                answer: "Timmins works with semiconductors, telecom, manufacturing, banking, digital platforms, and technology-driven enterprises."
                            },
                            {
                                question: "7. Do you provide corporate training outside Malaysia?",
                                answer: "Yes. Timmins delivers corporate training across Malaysia, Singapore, Indonesia, China, India, Vietnam, the United States, and Canada."
                            },
                            {
                                question: "8. How is Timmins different from other corporate training providers?",
                                answer: "Timmins is practitioner-led, engineering-grade, and deeply specialized, focusing on real capability building rather than generic or tool-centric training."
                            },
                            {
                                question: "9. Do you offer end-to-end Embedded Linux training?",
                                answer: "Yes. Timmins covers Embedded Linux end-to-end, including OS Essentials, Embedded C & GDB, Embedded Linux System Internals, device drivers (audio, I2C), kernel debugging, user-space and kernel internals, and SELinux, security."
                            },
                            {
                                question: "10. Can Timmins design onboarding programs for fresh graduates?",
                                answer: "Yes. Timmins has designed and delivered large-scale onboarding and engineering academy programs for semiconductor and telecom organizations."
                            }
                        ].map((item, index) => (
                            <div
                                key={index}
                                className={`faq-card ${activeAccordion === index ? "active" : ""}`}
                            >
                                <div
                                    className="faq-question"
                                    onClick={() =>
                                        setActiveAccordion(activeAccordion === index ? null : index)
                                    }
                                >
                                    <span>{item.question}</span>
                                    <span className="arrow">
                                        {activeAccordion === index ? "⌃" : "⌄"}
                                    </span>
                                </div>

                                <div
                                    className={`faq-answer ${activeAccordion === index ? "show" : ""
                                        }`}
                                >
                                    {item.answer}
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>




            <Footer />











        </>
    )
}

export default page