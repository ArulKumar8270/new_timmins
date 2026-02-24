"use client";

import "../../section-css/public.css";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { useState } from "react";
import { useRef } from "react";

export default function PublicClassesPage() {

    /* =========================
       DATA (Can later connect DB)
    ========================== */

    const classesData = [
        { title: "Embedded Linux System Internals", month: "May", location: "Penang", domain: "Embedded Linux", date: 10 },
        { title: "Embedded Linux System Internals", month: "May", location: "KL", domain: "Embedded Linux", date: 18 },

        { title: "Analyzing Data with Microsoft Power BI", month: "June", location: "Malaysia", domain: "Business Intelligence", date: 12 },
        { title: "Generative AI using OpenAI & LangChain", month: "June", location: "Malaysia", domain: "AI", date: 22 },

        { title: "Linux Driver Development", month: "July", location: "Malaysia", domain: "Embedded Linux", date: 8 },
        { title: "Advanced Android using Kotlin", month: "July", location: "Malaysia", domain: "Android", date: 19 },

        { title: "Introduction to Python & Basic Statistics", month: "August", location: "Malaysia", domain: "Programming", date: 14 },
    ];

    /* =========================
       STATE
    ========================== */

    const [selectedMonth, setSelectedMonth] = useState("May");

    const filteredClasses = classesData.filter(
        (cls) => cls.month === selectedMonth
    );

    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: string) => {
        if (!scrollRef.current) return;

        const scrollAmount = 320;
        scrollRef.current.scrollLeft +=
            direction === "left" ? -scrollAmount : scrollAmount;

    }

    const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

    return (
        <>
            <Header />

            {/* ================= HERO ================= */}
            <section className="pc-hero-modern">
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-12 col-lg-6">
                            <h1 className="pc-modern-title">
                                Transform Capability
                                <br />
                                Through
                                <br />
                                Structured Learning
                            </h1>

                            <p className="pc-modern-desc">
                                Discover our public classes and customised in-house
                                training programs designed to build practical,
                                real-world expertise.
                            </p>
                        </div>

                        <div className="col-12 col-lg-6 text-center mt-4 mt-lg-0">
                            <div className="pc-image-frame">
                                <img
                                    src="/assets/New_images/Thome.png"
                                    alt="Training"
                                    className="img-fluid"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ================= CALENDAR SECTION ================= */}

            <section className="pc-calendar-section">
                <div className="container">

                    <h2 className="pc-section-title">Full Calendar</h2>

                    {/* Filter Bar */}
                    <div className="pc-filter-bar">

                        <input
                            type="text"
                            placeholder="Search class..."
                            className="pc-search-input"
                        />

                        <select
                            className="pc-filter-select"
                            value={selectedMonth}
                            onChange={(e) => setSelectedMonth(e.target.value)}
                        >
                            <option>May</option>
                            <option>June</option>
                            <option>July</option>
                            <option>August</option>
                        </select>

                    </div>

                    <div className="row pc-calendar-wrapper">

                        {/* LEFT CALENDAR */}
                        <div className="col-12 col-lg-7">
                            <div className="pc-calendar-box">
                                <div className="pc-calendar-grid">
                                    {Array.from({ length: 31 }).map((_, i) => {
                                        const day = i + 1;
                                        const hasClass = filteredClasses.some(cls => cls.date === day);

                                        return (
                                            <div
                                                key={i}
                                                className={`pc-calendar-day ${hasClass ? "active-day" : ""}`}
                                            >
                                                {day}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* RIGHT CLASS LIST */}
                        <div className="col-12 col-lg-5 mt-4 mt-lg-0">
                            <div className="pc-class-list">
                                {filteredClasses.map((cls, index) => (
                                    <div className="pc-class-item" key={index}>
                                        <img src="/assets/New_images/Thome.png" />
                                        <div>
                                            <h6>{cls.title}</h6>
                                            <p>{cls.location}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                </div>
            </section>


            {/* WHY TRAIN WITH TIMMINS */}
            <section className="why-timmins-section">
                <div className="container">

                    <div className="text-center mb-5">
                        <h2 className="why-title">Why Train with Timmins?</h2>
                        <div className="title-underline"></div>
                    </div>

                    <div className="row g-4">

                        {/* CARD 1 */}
                        <div className="col-lg-6">
                            <div className="why-card">
                                <div className="why-icon">
                                    <img src="/assets/New_images/pwhy1.png" alt="Expert" />
                                </div>
                                <div>
                                    <h5>Expert-Led Training</h5>
                                    <p>
                                        Led by instructors with real-world industry experience.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* CARD 2 */}
                        <div className="col-lg-6">
                            <div className="why-card">
                                <div className="why-icon">
                                    <img src="/assets/New_images/pwhy2.png" alt="Certification" />
                                </div>
                                <div>
                                    <h5>Capability Over Certification</h5>
                                    <p>
                                        Build practical skills, not just credentials.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* CARD 3 */}
                        <div className="col-lg-6">
                            <div className="why-card">
                                <div className="why-icon">
                                    <img src="/assets/New_images/pwhy3.png" alt="Practice" />
                                </div>
                                <div>
                                    <h5>Hands-On Practice</h5>
                                    <p>
                                        Practical exercises grounded in real-world scenarios.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* CARD 4 */}
                        <div className="col-lg-6">
                            <div className="why-card">
                                <div className="why-icon">
                                    <img src="/assets/New_images/pwhy4.png" alt="Professional" />
                                </div>
                                <div>
                                    <h5>Built for Working Professionals</h5>
                                    <p>
                                        Designed around real project and business constraints.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>


            <section className="testimonial-modern">
                <div className="container">

                    <div className="text-center mb-5">
                        <h2>What Participants Say</h2>
                    </div>

                    <div className="testimonial-wrapper">

                        <button
                            className="scroll-btn left"
                            onClick={() => scroll("left")}
                        >
                            ❮
                        </button>

                        <div className="testimonial-scroll" ref={scrollRef}>

                            <div className="testimonial-card">
                                <div className="user-info">
                                    <img src="/assets/icons/user1.png" />
                                    <div>
                                        <h6>Rahul</h6>
                                        <span>⭐⭐⭐⭐⭐</span>
                                    </div>
                                </div>
                                <p>
                                    Excellent structured training with real-world debugging examples.
                                    Highly recommended for embedded professionals.
                                </p>
                                <small>Google Review</small>
                            </div>

                            <div className="testimonial-card">
                                <div className="user-info">
                                    <img src="/assets/icons/user2.png" />
                                    <div>
                                        <h6>Mario Hughes</h6>
                                        <span>⭐⭐⭐⭐⭐</span>
                                    </div>
                                </div>
                                <p>
                                    The hands-on labs were very practical and industry aligned.
                                    Kernel concepts became clear after this session.
                                </p>
                                <small>Google Review</small>
                            </div>

                            <div className="testimonial-card">
                                <div className="user-info">
                                    <img src="/assets/icons/user3.png" />
                                    <div>
                                        <h6>Ethan Wright</h6>
                                        <span>⭐⭐⭐⭐⭐</span>
                                    </div>
                                </div>
                                <p>
                                    One of the best embedded Linux workshops.
                                    Very detailed explanation and practical.
                                </p>
                                <small>Google Review</small>
                            </div>

                        </div>

                        <button
                            className="scroll-btn right"
                            onClick={() => scroll("right")}
                        >
                            ❯
                        </button>

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

            <Footer />
        </>
    );
}