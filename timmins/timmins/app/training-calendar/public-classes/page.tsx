"use client";

import "../../section-css/public.css";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import type { PublicClassSession } from "@/lib/supabase";
import { MONTHS, getCourseUrl, type Month } from "./public-classes-data";

function parseMonthFromDate(dateStr: string): Month | null {
    const s = dateStr.toLowerCase();
    const idx = MONTHS.findIndex((mo) => s.includes(mo.toLowerCase().slice(0, 3)));
    return idx >= 0 ? MONTHS[idx] : null;
}

function parseDaysFromDate(dateStr: string, month: Month, year: number): number[] {
    const mIdx = MONTHS.indexOf(month);
    const s = dateStr.toLowerCase();
    const hasMonth = MONTHS.some((mo) => s.includes(mo.toLowerCase().slice(0, 3)));
    const hasYear = new RegExp(year.toString()).test(dateStr);
    if (!hasMonth || !hasYear) return [];

    const rangeMatch = dateStr.match(/(\d+)\s*-\s*(\d+)/);
    const singleMatch = dateStr.match(/(\d+)\s+(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i);
    if (rangeMatch) {
        const start = parseInt(rangeMatch[1], 10);
        const end = parseInt(rangeMatch[2], 10);
        const days: number[] = [];
        for (let d = start; d <= end; d++) days.push(d);
        return days;
    }
    if (singleMatch) return [parseInt(singleMatch[1], 10)];
    return [];
}

function buildEventsByDay(sessions: PublicClassSession[], month: Month, year: number): Record<number, string[]> {
    const map: Record<number, string[]> = {};
    sessions.forEach((s) => {
        const monthFromSession = parseMonthFromDate(s.date);
        if (monthFromSession !== month) return;
        if (!s.date.includes(year.toString())) return;
        const days = parseDaysFromDate(s.date, month, year);
        const code = s.course_code || "";
        days.forEach((d) => {
            if (!map[d]) map[d] = [];
            if (code && !map[d].includes(code)) map[d].push(code);
        });
    });
    return map;
}

function getDateSortKey(dateStr: string): number {
    const rangeMatch = dateStr.match(/(\d+)\s*-\s*\d+\s*(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s*(\d{4})/i);
    const singleMatch = dateStr.match(/(\d+)\s+(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s*(\d{4})/i);
    const m = rangeMatch || singleMatch;
    if (!m) return 0;
    const day = parseInt(m[1], 10);
    const monthStr = (m[2] || "").toLowerCase();
    const year = parseInt(m[3] || "0", 10);
    const monthIdx = MONTHS.findIndex((mo) => mo.toLowerCase().startsWith(monthStr.slice(0, 3)));
    if (monthIdx < 0) return 0;
    return new Date(year, monthIdx, day).getTime();
}

export default function PublicClassesPage() {
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonthIndex = now.getMonth();
    const todayDate = now.getDate();

    const [selectedMonth, setSelectedMonth] = useState<Month>(MONTHS[currentMonthIndex]);
    const [selectedDate, setSelectedDate] = useState<number | null>(todayDate);
    const [selectedDomain, setSelectedDomain] = useState<string>("");
    const [searchQuery, setSearchQuery] = useState("");
    const scrollRef = useRef<HTMLDivElement>(null);
    const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

    const [sessions, setSessions] = useState<PublicClassSession[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        supabase
            .from("public_class_sessions")
            .select("*")
            .order("date", { ascending: true })
            .then(({ data }) => {
                setSessions(data || []);
                setLoading(false);
            });
    }, []);

    const filteredClasses = sessions.filter((s) => {
        const matchesDomain = !selectedDomain || s.domain === selectedDomain;
        const matchesSearch = !searchQuery || s.course_name.toLowerCase().includes(searchQuery.toLowerCase());
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
                            <h1 className="pc-modern-title">Public Classes</h1>
                            <p className="pc-modern-desc">
                                List of all Timmins public classes open for registration. Each class is practitioner-led and focused on developing practical, real-world technical capability.
                            </p>
                            {/* <Link
                                href="/contact-us"
                                className="pc-pill-btn"
                                style={{
                                    display: "inline-block",
                                    marginTop: "1rem",
                                    padding: "0.75rem 1.5rem",
                                    background: "#15314e",
                                    color: "#fff",
                                    borderRadius: "50px",
                                    textDecoration: "none",
                                    fontWeight: 600,
                                }}
                            >
                                <span style={{ color: "#fff" }}>Talk to Timmins</span>
                            </Link> */}
                        </div>
                        <div className="col-12 col-lg-6 text-center mt-4 mt-lg-0">
                            <div className="pc-image-frame">
                                <img src="/assets/New_images/public classes - hero.png" alt="Public Classes" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= CALENDAR SECTION ================= */}
            <section className="pc-calendar-section ih-calendar-section">
                <div className="container">
                    

                    <div className="ih-filter-bar">
                        <input
                            type="text"
                            placeholder="Search class..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <select value={selectedDomain} onChange={(e) => setSelectedDomain(e.target.value)}>
                            <option value="">All Domains</option>
                            {[...new Set(sessions.map((s) => s.domain).filter(Boolean))].sort().map((d) => (
                                <option key={d} value={d}>
                                    {d}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="row pc-calendar-wrapper g-4">
                        <div className="col-12 col-lg-7">
                            <div className="pc-calendar-box">
                                <div className="ih-calendar-nav">
                                    <button type="button" onClick={goPrevMonth} aria-label="Previous month">
                                        <i className="bi bi-chevron-left" style={{ fontSize: "1.1rem" }} />
                                    </button>
                                    <span className="pc-calendar-month">
                                        {selectedMonth} {currentYear}
                                    </span>
                                    <button type="button" onClick={goNextMonth} aria-label="Next month">
                                        <i className="bi bi-chevron-right" style={{ fontSize: "1.1rem" }} />
                                    </button>
                                </div>
                                <div className="pc-calendar-weekdays">
                                    {["MO", "TU", "WE", "TH", "FR", "SA", "SU"].map((d) => (
                                        <div key={d} className="pc-weekday-label">
                                            {d}
                                        </div>
                                    ))}
                                </div>
                                <div className="pc-calendar-grid" style={{ gridTemplateColumns: "repeat(7, 1fr)" }}>
                                    {Array.from({ length: adjustedFirstDay }).map((_, i) => (
                                        <div key={`pad-${i}`} className="ih-day-pad" />
                                    ))}
                                    {Array.from({ length: daysInMonth }).map((_, i) => {
                                        const day = i + 1;
                                        const eventCodes = buildEventsByDay(sessions, selectedMonth, currentYear)[day] || [];
                                        const isToday = isViewingCurrentMonth && day === todayDate;
                                        const isSelected = selectedDate === day;
                                        return (
                                            <div
                                                key={day}
                                                className={`ih-day ${isToday ? "ih-today" : ""} ${isSelected ? "ih-selected" : ""} ${eventCodes.length ? "ih-has-event" : ""}`}
                                                onClick={() => setSelectedDate(day)}
                                                role="button"
                                                tabIndex={0}
                                                onKeyDown={(e) => e.key === "Enter" && setSelectedDate(day)}
                                            >
                                                <span className="ih-day-num">{day}</span>
                                                {eventCodes.length > 0 && <span className="ih-day-event">{eventCodes[0]}</span>}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-5 mt-4 mt-lg-0">
                            <div className="ih-events-panel">
                                <div className="ih-events-header">Upcoming Training {filteredClasses.length > 0 ? `(${filteredClasses.length})` : ""}</div>
                                <div className="ih-events-list">
                                    {loading ? (
                                        <p style={{ color: "#64748b", padding: "1rem 0" }}>Loading…</p>
                                    ) : filteredClasses.length > 0 ? (
                                        [...filteredClasses]
                                            .sort((a, b) => getDateSortKey(a.date) - getDateSortKey(b.date))
                                            .slice(0, 5)
                                            .map((cls) => (
                                            <Link
                                                href={getCourseUrl(cls.slug)}
                                                className="ih-class-card"
                                                key={cls.id}
                                                style={{ textDecoration: "none", color: "inherit" }}
                                            >
                                                <img src="/assets/New_images/Thome.png" alt={cls.course_name} />
                                                <div className="ih-class-card-body">
                                                    <span className="ih-class-domain">{cls.domain}</span>
                                                    <h6>{cls.course_name}</h6>
                                                    <p className="ih-class-detail"><strong>Location:</strong> {cls.location}</p>
                                                    <p className="ih-class-detail"><strong>Duration:</strong> {cls.duration}</p>
                                                    <p className="ih-class-detail"><strong>Date:</strong> {cls.date}</p>
                                                </div>
                                            </Link>
                                        ))
                                    ) : (
                                        <p style={{ color: "#64748b", padding: "1rem 0" }}>
                                            No classes found. Try a different search or domain.
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="text-center mt-4">
                        <Link
                            href="/contact-us"
                            className="pc-pill-btn"
                            style={{
                                display: "inline-block",
                                padding: "0.75rem 1.5rem",
                                background: "#15314e",
                                color: "#fff",
                                borderRadius: "50px",
                                textDecoration: "none",
                                fontWeight: 600,
                            }}
                        >
                            <span style={{ color: "#fff" }}>Talk to Timmins</span>
                        </Link>
                    </div> */}
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
                                    <img src="/assets/New_images/pwhy1.png" alt="Expert-led" />
                                </div>
                                <div>
                                    <h5>Expert-led training</h5>
                                    <p>Led by instructors with real-world industry experience.</p>
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
                                    <p>Build practical skills, not just credentials.</p>
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
                                    <p>Practical exercises grounded in real-world scenarios.</p>
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
                                    <p>Designed around real project and business constraints.</p>
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
                        <button className="scroll-btn left" onClick={() => scroll("left")}>
                            ❮
                        </button>
                        <div className="testimonial-scroll" ref={scrollRef}>
                            <div className="testimonial-card">
                                <div className="user-info">
                                    <div>
                                        <h6>Rahul</h6>
                                        <span>⭐⭐⭐⭐⭐</span>
                                    </div>
                                </div>
                                <p>
                                    Excellent structured training with real-world debugging examples. Highly recommended
                                    for embedded professionals.
                                </p>
                                <small>Google Review</small>
                            </div>
                            <div className="testimonial-card">
                                <div className="user-info">
                                    <div>
                                        <h6>Mario Hughes</h6>
                                        <span>⭐⭐⭐⭐⭐</span>
                                    </div>
                                </div>
                                <p>
                                    The hands-on labs were very practical and industry aligned. Kernel concepts became
                                    clear after this session.
                                </p>
                                <small>Google Review</small>
                            </div>
                            <div className="testimonial-card">
                                <div className="user-info">
                                    <div>
                                        <h6>Ethan Wright</h6>
                                        <span>⭐⭐⭐⭐⭐</span>
                                    </div>
                                </div>
                                <p>
                                    One of the best embedded Linux workshops. Very detailed explanation and practical.
                                </p>
                                <small>Google Review</small>
                            </div>
                        </div>
                        <button className="scroll-btn right" onClick={() => scroll("right")}>
                            ❯
                        </button>
                    </div>
                    {/* <div className="text-center mt-4">
                        <Link
                            href="/contact-us"
                            className="pc-pill-btn"
                            style={{
                                display: "inline-block",
                                padding: "0.75rem 1.5rem",
                                background: "#15314e",
                                color: "#fff",
                                borderRadius: "50px",
                                textDecoration: "none",
                                fontWeight: 600,
                            }}
                        >
                            <span style={{ color: "#fff" }}>Talk to Timmins</span>
                        </Link>
                    </div> */}
                </div>
            </section>

            <section className="ed-faq section-gap position-relative overflow-hidden">
                <div className="container">
                    <div className="section-heading-center">
                        <h2>Frequently Asked Questions</h2>
                    </div>
                    <div className="faq-grid">
                        {[
                            {
                                question: "1. What are Public Classes at Timmins?",
                                answer:
                                    "Public classes are scheduled, instructor-led programs open to individual professionals as well as organizations sending small groups to upskill their teams in specific technology areas.",
                            },
                            {
                                question: "2. Who can join these public classes?",
                                answer: "Engineers, developers, technical professionals, and anyone meeting the prerequisites.",
                            },
                            {
                                question: "3. Are these classes suitable for beginners?",
                                answer: "Some courses are beginner-friendly; others require prior technical experience.",
                            },
                            {
                                question: "4. How are public classes delivered?",
                                answer: "Available in online or on-site formats, depending on the scheduled class.",
                            },
                            {
                                question: "5. Do public classes include hands-on practice?",
                                answer:
                                    "Most public classes include hands-on labs and practical exercises. For courses focused on emerging technologies or specialized topics, the format may be more concept-driven, with real-world examples and engineering insights.",
                            },
                            {
                                question: "6. Will I receive a certificate after completion?",
                                answer: "Yes, participants receive a Timmins certificate upon successful completion.",
                            },
                            {
                                question: "7. Are these classes HRDC claimable?",
                                answer:
                                    "Yes. All Timmins public classes are HRDC claimable for Malaysian employers. As an HRDC-registered training provider, we provide the necessary registration details to support your claim.",
                            },
                            {
                                question: "8. Which countries can participants join from?",
                                answer:
                                    "Participants from the same or nearby time zones (UTC+7 to UTC+9), including Malaysia, Indonesia, and Singapore, can join our scheduled public classes. For other regions such as North America, separate schedules may be arranged.",
                            },
                            {
                                question: "9. What happens after I register?",
                                answer:
                                    "Our team will contact you to guide you through the next steps. This includes payment arrangements and, for Malaysian employers, support with the HRDC grant application process. Once the grant and registration are confirmed, we will provide the official confirmation, joining details, and pre-class information.",
                            },
                            {
                                question: "10. Can I switch to in-house training instead?",
                                answer:
                                    "Yes. If you require customized content or team-based training, we can arrange an in-house program tailored to your organization. Please contact us to discuss your requirements.",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className={`faq-card ${activeAccordion === index ? "active" : ""}`}
                            >
                                <div
                                    className="faq-question"
                                    onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                                >
                                    <span>{item.question}</span>
                                    <span className="arrow">{activeAccordion === index ? "⌃" : "⌄"}</span>
                                </div>
                                <div className={`faq-answer ${activeAccordion === index ? "show" : ""}`}>
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
