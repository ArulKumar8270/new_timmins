"use client";

import "../../section-css/public.css";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { useState } from "react";

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

            <Footer />
        </>
    );
}