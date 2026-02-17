"use client";

import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function EmbeddedLinuxDomain() {

    /* ================= ACCORDION STATE ================= */
    const [activeAccordion, setActiveAccordion] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };

    /* ================= INSTRUCTOR SLIDER ================= */


    useEffect(() => {
        const track = document.querySelector(".instructor-track") as HTMLElement;
        const nextBtn = document.querySelector(".next-btn");
        const prevBtn = document.querySelector(".prev-btn");

        if (!track || !nextBtn || !prevBtn) return;

        const scrollAmount = 300;

        nextBtn.addEventListener("click", () => {
            track.scrollLeft += scrollAmount;
        });

        prevBtn.addEventListener("click", () => {
            track.scrollLeft -= scrollAmount;
        });
    }, []);



    return (
        <>
            <Header />

            {/* HERO */}
            <section className="domain-hero">
                <div className="container hero-wrapper">
                    <div className="hero-text">
                        <p className="domain-label">ENGINEERING CAPABILITY DOMAIN</p>

                        <h1>
                            Embedded Linux
                            <span> Engineering Capability</span>
                        </h1>

                        <p className="hero-desc">
                            Practitioner-led capability development across kernel engineering,
                            BSP bring-up, driver development, system integration,
                            and production deployment.
                        </p>

                        <a href="/contact-us" className="hero-btn">
                            Talk to Timmins
                        </a>
                    </div>

                    <div className="hero-image">
                        <img src="/assets/New_images/linux.png" alt="Embedded Linux" />
                    </div>
                </div>
            </section>


            {/* MAIN LAYOUT */}
            <section className="domain-main">
                <div className="container domain-layout">

                    {/* SIDEBAR */}
                    <aside className="domain-sidebar">
                        <div className="sidebar-card">

                            <ul className="sidebar-menu">
                                <li><a href="#overview">Overview</a></li>
                                <li><a href="#approach">Timmins Approach</a></li>
                                <li><a href="#industries">Industries & Use Cases</a></li>
                                <li><a href="#who">Who This Domain Is For</a></li>
                                <li><a href="#job-families">Job Families</a></li>
                                <li><a href="#outcomes">Outcomes</a></li>
                                <li><a href="#formats">Training Formats</a></li>
                                <li><a href="#instructors">Instructor</a></li>
                                <li><a href="#faq">FAQ</a></li>
                            </ul>

                            <a href="/contact-us" className="sidebar-btn">
                                Talk to Timmins
                            </a>

                        </div>
                    </aside>


                    {/* RIGHT CONTENT */}
                    <div className="domain-content">

                        {/* OVERVIEW */}
                        <section id="overview" className="domain-section overview-modern">
                            <div className="overview-head">
                                <h2>Overview</h2>
                                <p>
                                    Embedded Linux Engineering is at the core of modern device development.
                                    From automotive control systems to IoT gateways and telecom infrastructure,
                                    Linux powers mission-critical embedded systems worldwide.
                                </p>
                            </div>

                            <div className="capability-grid">
                                <div className="capability-card">
                                    <h4>Kernel Engineering</h4>
                                    <p>Linux kernel customization & optimization.</p>
                                </div>

                                <div className="capability-card">
                                    <h4>BSP & Bring-Up</h4>
                                    <p>Hardware enablement & board support packages.</p>
                                </div>

                                <div className="capability-card">
                                    <h4>Driver Development</h4>
                                    <p>Custom peripheral & SoC driver development.</p>
                                </div>

                                <div className="capability-card">
                                    <h4>System Integration</h4>
                                    <p>Embedded Linux validation & deployment.</p>
                                </div>
                            </div>
                        </section>

                        {/* APPROACH */}
                        <section id="approach" className="domain-section">

                            <div className="section-heading-center">

                                <div className="approach-title">
                                    <h2>How Timmins Approaches This Domain</h2>
                                </div>

                                <div className="approach-grid">

                                    <div className="approach-card">
                                        <h4>Competency-Driven</h4>
                                        <p>Not just framework-driven</p>
                                    </div>

                                    <div className="approach-card">
                                        <h4>Role-Aligned</h4>
                                        <p>Aligned to real engineering roles</p>
                                    </div>

                                    <div className="approach-card">
                                        <h4>Production-Ready Skills</h4>
                                        <p>Hands-on deployment-focused learning</p>
                                    </div>

                                    <div className="approach-card">
                                        <h4>All Seniority Levels</h4>
                                        <p>Fresh grads to senior engineers</p>
                                    </div>

                                    <div className="approach-card">
                                        <h4>Enterprise Customizable</h4>
                                        <p>Adaptable for product teams</p>
                                    </div>

                                </div>

                            </div>

                        </section>




                        {/* INDUSTRIES SECTION */}
                        <section id="industries" className="domain-section industries-modern">

                            <div className="section-heading-center">
                                <h2>Industries & Use Cases</h2>
                            </div>

                            <div className="industries-circle-grid">

                                <div className="industry-circle-card">
                                    <div className="industry-img">
                                        <img src="/assets/New_images/electro.png" alt="Consumer Electronics" />
                                    </div>
                                    <h5>Consumer Electronics</h5>
                                </div>

                                <div className="industry-circle-card">
                                    <div className="industry-img">
                                        <img src="/assets/New_images/auto.png" alt="Automotive & Infotainment" />
                                    </div>
                                    <h5>Automotive & Infotainment</h5>
                                </div>

                                <div className="industry-circle-card">
                                    <div className="industry-img">
                                        <img src="/assets/New_images/ia.png" alt="Industrial Automation" />
                                    </div>
                                    <h5>Industrial Automation</h5>
                                </div>

                                <div className="industry-circle-card">
                                    <div className="industry-img">
                                        <img src="/assets/New_images/networking.png" alt="Networking & Telecom" />
                                    </div>
                                    <h5>Networking & Telecom</h5>
                                </div>

                                <div className="industry-circle-card">
                                    <div className="industry-img">
                                        <img src="/assets/New_images/medical.png" alt="Medical Devices" />
                                    </div>
                                    <h5>Medical Devices</h5>
                                </div>

                                <div className="industry-circle-card">
                                    <div className="industry-img">
                                        <img src="/assets/New_images/iot.png" alt="IoT & Edge Devices" />
                                    </div>
                                    <h5>IoT & Edge Devices</h5>
                                </div>

                            </div>

                            <p className="industry-bottom-text">
                                These systems typically operate under resource constraints, require
                                hardware awareness, and demand high reliability — making embedded
                                Linux a critical engineering capability.
                            </p>

                        </section>

                        {/* WHO THIS DOMAIN IS FOR */}
                        <section id="who" className="domain-section who-modern">

                            <div className="section-heading-center">
                                <h2>Who This Domain Is For</h2>
                            </div>

                            <div className="who-card">

                                <div className="who-item">
                                    <div className="who-icon">
                                        <img src="/assets/New_images/who1.png" alt="Engineers" />
                                    </div>
                                    <p>Engineers building embedded Linux-based systems</p>
                                </div>

                                <div className="who-item">
                                    <div className="who-icon">
                                        <img src="/assets/New_images/who2.png" alt="Managers" />
                                    </div>
                                    <p>Engineering managers planning embedded skill development</p>
                                </div>

                                <div className="who-item">
                                    <div className="who-icon">
                                        <img src="/assets/New_images/who3.png" alt="HR & L&D" />
                                    </div>
                                    <p>HR & L&D teams designing technical onboarding programs</p>
                                </div>

                                <div className="who-item">
                                    <div className="who-icon">
                                        <img src="/assets/New_images/who4.png" alt="Organizations" />
                                    </div>
                                    <p>Organizations developing or maintaining embedded products</p>
                                </div>

                            </div>

                        </section>




                        {/* JOB FAMILIES */}
                        {/* JOB FAMILIES */}
                        <section id="job-families" className="domain-section job-modern">

                            <div className="section-heading-center">
                                <h2>Job Families We Support</h2>
                            </div>

                            <div className="job-card">

                                <div className="job-row">
                                    <div className="job-layer">Application Layer</div>
                                    <div className="job-roles">
                                        <ul>
                                            <li>Embedded Linux Application Engineers</li>
                                            <li>Test, Validation & Automation Engineers</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="job-row">
                                    <div className="job-layer">System Layer</div>
                                    <div className="job-roles">
                                        <ul>
                                            <li>Linux Kernel Engineers</li>
                                            <li>Linux Device Driver Engineers</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="job-row">
                                    <div className="job-layer">Platform Layer</div>
                                    <div className="job-roles">
                                        <ul>
                                            <li>Embedded Linux Platform / BSP Engineers</li>
                                            <li>System Integration Engineers</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="job-row">
                                    <div className="job-layer">Advanced & Leadership</div>
                                    <div className="job-roles">
                                        <ul>
                                            <li>Embedded Linux Security Engineers</li>
                                            <li>Senior & Lead Embedded Linux Engineers</li>
                                        </ul>
                                    </div>
                                </div>

                            </div>

                        </section>




                        {/* OUTCOMES */}
                        {/* OUTCOMES SECTION */}
                        <section id="outcomes" className="domain-section outcomes-modern">

                            <div className="section-heading-center">
                                <h2>Outcomes & Value Delivered</h2>
                            </div>

                            <div className="outcomes-card">

                                <div className="outcome-item">
                                    <div className="check-icon">✓</div>
                                    <p>Strong foundational and advanced embedded Linux skills</p>
                                </div>

                                <div className="outcome-item">
                                    <div className="check-icon">✓</div>
                                    <p>Faster onboarding of embedded engineers</p>
                                </div>

                                <div className="outcome-item">
                                    <div className="check-icon">✓</div>
                                    <p>Improved system stability and debuggability</p>
                                </div>

                                <div className="outcome-item">
                                    <div className="check-icon">✓</div>
                                    <p>Reduced dependency on ad-hoc troubleshooting</p>
                                </div>

                                <div className="outcome-item">
                                    <div className="check-icon">✓</div>
                                    <p>Clear progression from application-level to kernel-level expertise</p>
                                </div>

                            </div>

                        </section>



                        {/* TRAINING FORMATS SECTION */}
                        <section className="modern-accordion">
                            <div className="accordion-wrapper">
                                <div className="section-heading-center">
                                    <h2>Training Formats</h2>
                                </div>


                                {[
                                    {
                                        title: "📘 Fundamentals of Digital Marketing",
                                        content: (
                                            <>
                                                <p>You can start and learn from the basic that contains:</p>
                                                <ul>
                                                    <li>Digital Marketing Landscape & Strategy #1 & 2</li>
                                                    <li>Pitching Digital Marketing’s Study Case</li>
                                                    <li>Marketing & Consumer Psychology (RVL)</li>
                                                    <li>Brand Building</li>
                                                    <li>Marketing Copywriting</li>
                                                </ul>
                                            </>
                                        )
                                    },
                                    {
                                        title: "📱 Social Media Organic",
                                        content: <p>Content strategy, growth systems and engagement framework.</p>
                                    },
                                    {
                                        title: "🛠 Landing Page Building",
                                        content: <p>High converting landing pages and funnel strategy.</p>
                                    },
                                    {
                                        title: "📊 Marketing Data Analytics",
                                        content: <p>Performance tracking and reporting frameworks.</p>
                                    }
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className={`accordion-item ${activeAccordion === index ? "active" : ""}`}
                                    >
                                        <div
                                            className="accordion-header"
                                            onClick={() => toggleAccordion(index)}
                                            style={{ cursor: "pointer" }}
                                        >
                                            <span>{item.title}</span>
                                            <span>{activeAccordion === index ? "⌃" : "⌄"}</span>
                                        </div>

                                        {activeAccordion === index && (
                                            <div className="accordion-body">
                                                {item.content}
                                            </div>
                                        )}
                                    </div>
                                ))}

                            </div>
                        </section>

                        {/* ================= INSTRUCTORS ================= */}
                        {/* ================= INSTRUCTORS ================= */}
                        {/* ================= INSTRUCTORS ================= */}
                        <section id="instructors" className="instructor-modern">
                            <div className="container">

                                <div className="section-heading-center">
                                    <h2>Training Formats</h2>
                                </div>

                                <div className="instructor-slider">

                                    <button className="nav-btn prev-btn">&#10094;</button>

                                    <div className="instructor-track">

                                        <div className="instructor-card">
                                            <div className="instructor-img">
                                                <img src="/assets/New_images/course.png" alt="Instructor" />
                                            </div>
                                            <div className="instructor-info">
                                                <h4>Metha Dwi Karina</h4>
                                                <p>Ex Digital Strategist at Gojek</p>
                                            </div>
                                        </div>

                                        <div className="instructor-card">
                                            <div className="instructor-img">
                                                <img src="/assets/New_images/course.png" alt="Instructor" />
                                            </div>
                                            <div className="instructor-info">
                                                <h4>Kareem Reza</h4>
                                                <p>Social Media Specialist</p>
                                            </div>
                                        </div>

                                        <div className="instructor-card">
                                            <div className="instructor-img">
                                                <img src="/assets/New_images/course.png" alt="Instructor" />
                                            </div>
                                            <div className="instructor-info">
                                                <h4>Balebat Buana Puspa</h4>
                                                <p>Digital Marketing Manager</p>
                                            </div>
                                        </div>

                                        <div className="instructor-card">
                                            <div className="instructor-img">
                                                <img src="/assets/New_images/course.png" alt="Instructor" />
                                            </div>
                                            <div className="instructor-info">
                                                <h4>Roro Ajeng Sekar Arum</h4>
                                                <p>Social Media & Optimization</p>
                                            </div>
                                        </div>

                                    </div>

                                    <button className="nav-btn next-btn">&#10095;</button>

                                </div>
                            </div>
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
                                            answer: "The recommended beginner courses are OS Essentials, Embedded C & GDB, and Embedded Linux System Internals."
                                        },
                                        {
                                            question: "2. Does Timmins offer AI consulting or only training?",
                                            answer: "Timmins offers both AI consulting and AI training including structured enterprise upskilling programs."
                                        },
                                        {
                                            question: "3. Are your programs HRDC Claimable?",
                                            answer: "Yes. For Malaysian employers, many programs are HRDC claimable subject to eligibility and approval."
                                        },
                                        {
                                            question: "4. Do you provide customized training for engineering teams?",
                                            answer: "Yes. Timmins designs customized, role-based training pathways for engineering teams."
                                        },
                                        {
                                            question: "5. Are Timmins training courses available online?",
                                            answer: "Yes. Timmins offers online, on-site, and hybrid delivery formats."
                                        },
                                        {
                                            question: "6. What industries does Timmins work with?",
                                            answer: "Timmins works with semiconductor, telecom, manufacturing, banking and technology enterprises."
                                        },
                                        {
                                            question: "7. Do you provide corporate training outside Malaysia?",
                                            answer: "Yes. Timmins delivers corporate training across Malaysia, Singapore, India, US and Canada."
                                        },
                                        {
                                            question: "8. How is Timmins different from other corporate training providers?",
                                            answer: "Timmins is practitioner-led, engineering-grade and focused on real capability building."
                                        },
                                        {
                                            question: "9. Do you offer end-to-end Embedded Linux training?",
                                            answer: "Yes. We cover OS, drivers, kernel debugging and full system integration."
                                        },
                                        {
                                            question: "10. Can Timmins design onboarding programs for fresh graduates?",
                                            answer: "Yes. Timmins has delivered large-scale onboarding academies for semiconductor and telecom organizations."
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
                                                    {activeAccordion === index ? "−" : "›"}
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






                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
