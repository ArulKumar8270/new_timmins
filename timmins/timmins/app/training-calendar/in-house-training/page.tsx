"use client";

import "../../section-css/public.css";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Link from "next/link";
import { useState } from "react";
import { useRef } from "react";

const DOMAINS = [
    "5G, SDN, NFV & IoT",
    "Android Mobile App Development",
    "AI, Machine Learning, Deep Learning",
    "Automotive / Electric Vehicle Technology",
    "Blockchain",
    "Business Intelligence",
    "CAD & Product Design Engineering",
    "Cloud Computing",
    "Cybersecurity",
    "DevOps",
    "Embedded Android Development",
    "Embedded Linux Development",
    "Fullstack",
    "Generative AI",
    "Hardware Test & Measurement",
    "Linux",
    "Microservices",
    "Programming Languages",
    "SAFe Courses and Certifications",
    "Software Testing",
    "Soft Skills",
];

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const IN_HOUSE_PROGRAMS = [
    { title: "Artificial Intelligence, Machine Learning, and Deep Learning", location: "TBA", domain: "AI, Machine Learning, Deep Learning" },
    { title: "Business Intelligence", location: "TBA", domain: "Business Intelligence" },
    { title: "DevOps", location: "TBA", domain: "DevOps" },
    { title: "Embedded Linux Development", location: "TBA", domain: "Embedded Linux Development" },
    { title: "Android Mobile App Development", location: "TBA", domain: "Android Mobile App Development" },
    { title: "Fullstack", location: "TBA", domain: "Fullstack" },
    { title: "Programming Languages", location: "TBA", domain: "Programming Languages" },
    { title: "Software Testing", location: "TBA", domain: "Software Testing" },
    { title: "Linux", location: "TBA", domain: "Linux" },
    { title: "Soft Skills", location: "TBA", domain: "Soft Skills" },
];

export default function InHouseTrainingPage() {
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonthIndex = now.getMonth();
    const todayDate = now.getDate();

    const [selectedMonth, setSelectedMonth] = useState(MONTHS[currentMonthIndex]);
    const [selectedDate, setSelectedDate] = useState<number | null>(todayDate);
    const [selectedDomain, setSelectedDomain] = useState<string>("");
    const [searchQuery, setSearchQuery] = useState("");
    const scrollRef = useRef<HTMLDivElement>(null);
    const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

    const filteredClasses = IN_HOUSE_PROGRAMS.filter((cls) => {
        const matchesDomain = !selectedDomain || cls.domain === selectedDomain;
        const matchesSearch = !searchQuery || cls.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesDomain && matchesSearch;
    });

    const scroll = (direction: string) => {
        if (!scrollRef.current) return;
        const scrollAmount = 320;
        scrollRef.current.scrollLeft += direction === "left" ? -scrollAmount : scrollAmount;
    };

    const daysInMonth = new Date(currentYear, MONTHS.indexOf(selectedMonth), 0).getDate();
    const firstDay = new Date(currentYear, MONTHS.indexOf(selectedMonth), 1).getDay();
    const adjustedFirstDay = firstDay === 0 ? 6 : firstDay - 1;
    const isViewingCurrentMonth = MONTHS.indexOf(selectedMonth) === currentMonthIndex;

    const goPrevMonth = () => {
        const idx = MONTHS.indexOf(selectedMonth);
        setSelectedMonth(idx > 0 ? MONTHS[idx - 1] : MONTHS[11]);
        setSelectedDate(null);
    };
    const goNextMonth = () => {
        const idx = MONTHS.indexOf(selectedMonth);
        setSelectedMonth(idx < 11 ? MONTHS[idx + 1] : MONTHS[0]);
        setSelectedDate(null);
    };

    return (
        <>
            <Header />

            {/* ================= HERO ================= */}
            <section className="pc-hero-modern">
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-12 col-lg-6">
                            <h1 className="pc-modern-title">
                                In-House Trainings
                            </h1>

                            <p className="pc-modern-desc">
                                Private, corporate programs tailored to your systems, challenges, and depth requirements. Delivered on-site or online by industry practitioners.
                            </p>

                            <Link href="/contact-us" className="pc-pill-btn " style={{ display: "inline-block", marginTop: "1rem", padding: "0.75rem 1.5rem", background: "#15314e", color: "#fff", borderRadius: "50px", textDecoration: "none", fontWeight: 600 }}>
                                <span style={{ color: "#fff" }}>Talk to Timmins</span>
                            </Link>
                        </div>

                        <div className="col-12 col-lg-6 text-center mt-4 mt-lg-0">
                            <div className="pc-image-frame">
                                <img
                                    src="/assets/New_images/Thome.png"
                                    alt="In-House Training"
                                    className="img-fluid"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ================= CALENDAR SECTION ================= */}

            <section className="pc-calendar-section ih-calendar-section">
                <div className="container">
                    <p className="pc-section-desc mb-4 text-center">
                        Classes are displayed in a calendar view and can be filtered by month and capability domain.
                    </p>

                    {/* Filter Bar */}
                    <div className="ih-filter-bar">
                        <input
                            type="text"
                            placeholder="Search class..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <select
                            value={selectedMonth}
                            onChange={(e) => setSelectedMonth(e.target.value)}
                        >
                            {MONTHS.map((m) => (
                                <option key={m} value={m}>{m}</option>
                            ))}
                        </select>
                        <select
                            value={selectedDomain}
                            onChange={(e) => setSelectedDomain(e.target.value)}
                        >
                            <option value="">All Domains</option>
                            {DOMAINS.map((d) => (
                                <option key={d} value={d}>{d}</option>
                            ))}
                        </select>
                    </div>

                    <div className="row pc-calendar-wrapper g-4">

                        {/* LEFT CALENDAR */}
                        <div className="col-12 col-lg-7">
                            <div className="pc-calendar-box">
                                <div className="ih-calendar-nav">
                                    <button type="button" onClick={goPrevMonth} aria-label="Previous month">
                                        <i className="bi bi-chevron-left" style={{ fontSize: "1.1rem" }} />
                                    </button>
                                    <span className="pc-calendar-month">{selectedMonth} {currentYear}</span>
                                    <button type="button" onClick={goNextMonth} aria-label="Next month">
                                        <i className="bi bi-chevron-right" style={{ fontSize: "1.1rem" }} />
                                    </button>
                                </div>
                                <div className="pc-calendar-weekdays">
                                    {["MO", "TU", "WE", "TH", "FR", "SA", "SU"].map((d) => (
                                        <div key={d} className="pc-weekday-label">{d}</div>
                                    ))}
                                </div>
                                <div className="pc-calendar-grid" style={{ gridTemplateColumns: "repeat(7, 1fr)" }}>
                                    {Array.from({ length: adjustedFirstDay }).map((_, i) => (
                                        <div key={`pad-${i}`} className="ih-day-pad" />
                                    ))}
                                    {Array.from({ length: daysInMonth }).map((_, i) => {
                                        const day = i + 1;
                                        const isToday = isViewingCurrentMonth && day === todayDate;
                                        const isSelected = selectedDate === day;
                                        return (
                                            <div
                                                key={day}
                                                className={`ih-day ${isToday ? "ih-today" : ""} ${isSelected ? "ih-selected" : ""}`}
                                                onClick={() => setSelectedDate(day)}
                                                role="button"
                                                tabIndex={0}
                                                onKeyDown={(e) => e.key === "Enter" && setSelectedDate(day)}
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
                            <div className="ih-events-panel">
                                <div className="ih-events-header">
                                    EVENTS FOR {selectedMonth.toUpperCase()}
                                </div>
                                <div className="ih-events-list">
                                    {filteredClasses.length > 0 ? (
                                        filteredClasses.map((cls, index) => (
                                            <div className="ih-class-card" key={index}>
                                                <img src="/assets/New_images/Thome.png" alt={cls.title} />
                                                <div>
                                                    <h6>{cls.title}</h6>
                                                    <p>{cls.location}</p>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <p style={{ color: "#64748b", padding: "1rem 0" }}>No classes match your filters.</p>
                                    )}
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="text-center mt-4">
                        <Link href="/contact-us" className="pc-pill-btn" style={{ display: "inline-block", padding: "0.75rem 1.5rem", background: "#15314e", color: "#fff", borderRadius: "50px", textDecoration: "none", fontWeight: 600 }}>
                            <span style={{ color: "#fff" }}>Talk to Timmins</span>
                        </Link>
                    </div>

                </div>
            </section>


            {/* WHY TRAINING WITH TIMMINS */}
            <section className="why-timmins-section">
                <div className="container">

                    <div className="text-center mb-5">
                        <h2 className="why-title">Why Training with Timmins</h2>
                        <div className="title-underline"></div>
                    </div>

                    <div className="row g-4">

                        <div className="col-lg-6">
                            <div className="why-card">
                                <div className="why-icon">
                                    <img src="/assets/New_images/pwhy1.png" alt="Practitioner-led" />
                                </div>
                                <div>
                                    <h5>Practitioner-led training</h5>
                                    <p>
                                        Led by instructors with real-world industry experience.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="why-card">
                                <div className="why-icon">
                                    <img src="/assets/New_images/pwhy2.png" alt="Capability" />
                                </div>
                                <div>
                                    <h5>Capability over certification</h5>
                                    <p>
                                        Build practical skills, not just credentials.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="why-card">
                                <div className="why-icon">
                                    <img src="/assets/New_images/pwhy3.png" alt="Hands-on" />
                                </div>
                                <div>
                                    <h5>Hands-on practice</h5>
                                    <p>
                                        Practical exercises grounded in real-world scenarios.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="why-card">
                                <div className="why-icon">
                                    <img src="/assets/New_images/pwhy4.png" alt="Professional" />
                                </div>
                                <div>
                                    <h5>Built for working professionals</h5>
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
                        <p className="mt-2" style={{ color: "#64748b" }}>
                            Extract reviews from <a href="https://share.google/ncn3sf8LcQuoBbhaB" target="_blank" rel="noopener noreferrer" style={{ color: "#4198c8" }}>Google Business Review</a>
                        </p>
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
                                    {/* <img src="/assets/icons/user1.png" alt="Rahul" /> */}
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
                                    {/* <img src="/assets/icons/user2.png" alt="Mario Hughes" /> */}
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
                                    {/* <img src="/assets/icons/user3.png" alt="Ethan Wright" /> */}
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

                    <div className="text-center mt-4">
                        <Link href="/contact-us" className="pc-pill-btn" style={{ display: "inline-block", padding: "0.75rem 1.5rem", background: "#15314e", color: "#fff", borderRadius: "50px", textDecoration: "none", fontWeight: 600 }}>
                        <span style={{ color: "#fff" }}>Talk to Timmins</span>
                        </Link>
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
                                question: "1. What is in-house training at Timmins?",
                                answer: "Private, instructor-led training programs customized and delivered exclusively for your organization."
                            },
                            {
                                question: "2. How is in-house training different from public classes?",
                                answer: "In-house training is tailored to your team's systems, skill gaps, and business objectives."
                            },
                            {
                                question: "3. What corporate training programs does Timmins offer?",
                                answer: "Timmins delivers corporate programs across engineering, technology, and business domains, designed for team-wide capability development."
                            },
                            {
                                question: "4. Who should consider in-house training?",
                                answer: "Organizations seeking deeper, role-specific, or system-focused capability building for their teams."
                            },
                            {
                                question: "5. Can the course content be customized?",
                                answer: "Yes. Scope, depth, and examples are adapted based on your technical and business context."
                            },
                            {
                                question: "6. Where can in-house training be delivered?",
                                answer: "On-site at your location or online, depending on your preference and team setup."
                            },
                            {
                                question: "7. How long do in-house training programs usually run?",
                                answer: "Typically 2–5 days, depending on program scope and customization."
                            },
                            {
                                question: "8. Do you provide training for international teams?",
                                answer: "Yes. Timmins delivers in-house training globally for distributed teams."
                            },
                            {
                                question: "9. Is in-house training HRDC claimable?",
                                answer: "Selected in-house programs may be HRDC claimable, subject to eligibility and requirements."
                            },
                            {
                                question: "10. What happens after we submit an inquiry?",
                                answer: "A Timmins consultant will contact you to assess needs and propose a tailored training plan."
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
    );
}