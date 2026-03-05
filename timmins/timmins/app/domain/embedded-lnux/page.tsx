"use client";

import React, { useState, useRef } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

export default function EmbeddedLinuxDomain() {

    /* ================= ACCORDION STATE ================= */
    const [activeAccordion, setActiveAccordion] = useState<number | null>(0);
    const [activeCoreCompetency, setActiveCoreCompetency] = useState<number | null>(0);
    const [activeLearningPath, setActiveLearningPath] = useState<number | null>(0);
    const [activeFormat, setActiveFormat] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };

    const coursesScrollRef = useRef<HTMLDivElement>(null);
    const scrollCourses = (direction: "left" | "right") => {
        if (!coursesScrollRef.current) return;
        const scrollAmount = 320;
        coursesScrollRef.current.scrollLeft += direction === "left" ? -scrollAmount : scrollAmount;
    };


    return (
        <>
            <Header />

            {/* HERO */}
            <section className="domain-hero">
                <div className="container hero-wrapper">
                    <div className="hero-text">
                        <p className="domain-label">ENGINEERING CAPABILITY DOMAIN</p>

                        <h1>Embedded Linux Development</h1>

                        <p className="hero-desc">
                            At Timmins, Embedded Linux is treated as a deep technical capability domain, covering operating system fundamentals, kernel internals, device drivers, debugging, security, and system integration.
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
                                <li><a href="#approach">Timmins Approach</a></li>
                                <li><a href="#industries">Industries & Use Cases</a></li>
                                <li><a href="#who">Who This Domain Is For</a></li>
                                <li><a href="#job-families">Job Families</a></li>
                                <li><a href="#outcomes">Outcomes</a></li>
                                <li><a href="#core-competencies">Core Competencies</a></li>
                                <li><a href="#alignment">Competency Alignment</a></li>
                                <li><a href="#learning-paths">Learning Paths</a></li>
                                <li><a href="#formats">Training Formats</a></li>
                                <li><a href="#courses">Courses</a></li>
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
                        {/* <section id="overview" className="domain-section overview-modern">
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
                        </section> */}

                        {/* APPROACH */}
                        <section className="domain-section">
                            <div className="section-heading-center">
                                <div className="approach-title">
                                    <h2 id="approach">How Timmins Approaches This Domain</h2>
                                </div>

                                <div className="approach-grid">

                                    <div className="approach-card">
                                        <div className="approach-icon">
                                            <img src="/assets/New_images/ov1.png" alt="Competency-driven" />
                                        </div>
                                        <h4>Competency-driven</h4>
                                        <p>Focus on real skills, not just a syllabus.</p>
                                    </div>

                                    <div className="approach-card">
                                        <div className="approach-icon">
                                            <img src="/assets/New_images/ov2.png" alt="Role-Aligned" />
                                        </div>
                                        <h4>Role-Aligned</h4>
                                        <p>Aligned to real embedded engineering roles</p>
                                    </div>

                                    <div className="approach-card">
                                        <div className="approach-icon">
                                            <img src="/assets/New_images/ov3.png" alt="Kernel, Drivers, Debugging" />
                                        </div>
                                        <h4>Kernel, Drivers, Debugging</h4>
                                        <p>Deep dive into core technical areas</p>
                                    </div>

                                    <div className="approach-card">
                                        <div className="approach-icon">
                                            <img src="/assets/New_images/ov4.png" alt="Hands-on Focused" />
                                        </div>
                                        <h4>Hands-on Focused</h4>
                                        <p>Emphasis on practical, hands-on learning.</p>
                                    </div>

                                    <div className="approach-card">
                                        <div className="approach-icon">
                                            <img src="/assets/New_images/ov5.png" alt="All Seniority Levels" />
                                        </div>
                                        <h4>All Seniority Levels</h4>
                                        <p>Suitable for fresh graduates through senior engineers</p>
                                    </div>

                                </div>

                            </div>

                        </section>



                        {/* INDUSTRIES SECTION */}
                        <section className="domain-section industries-modern">
                            <div className="section-heading-center">
                                <h2 id="industries">Industries & Use Cases</h2>
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
                                These systems typically operate under resource constraints, require hardware awareness, and demand high reliability.
                            </p>

                        </section>

                        {/* WHO THIS DOMAIN IS FOR */}
                        <section className="domain-section who-modern">
                            <div className="section-heading-center">
                                <h2 id="who">Who This Domain Is For</h2>
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
                                        <img src="/assets/New_images/who4.png" alt="Organizations" />
                                    </div>
                                    <p>Organizations developing or maintaining embedded products</p>
                                </div>

                            </div>

                        </section>




                        {/* JOB FAMILIES */}
                        <section className="domain-section job-modern">
                            <div className="section-heading-center">
                                <h2 id="job-families">Job Families We Support</h2>
                            </div>

                            <div className="job-families-grid">
                                <div className="job-family-card">
                                    <div className="job-family-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                                    </div>
                                    <span>Embedded Linux Application Engineers</span>
                                </div>
                                <div className="job-family-card">
                                    <div className="job-family-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                                    </div>
                                    <span>Linux Kernel Engineers</span>
                                </div>
                                <div className="job-family-card">
                                    <div className="job-family-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                                    </div>
                                    <span>Linux Device Driver Engineers</span>
                                </div>
                                <div className="job-family-card">
                                    <div className="job-family-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                                    </div>
                                    <span>Embedded Linux Platform / BSP Engineers</span>
                                </div>
                                <div className="job-family-card">
                                    <div className="job-family-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/></svg>
                                    </div>
                                    <span>System Integration Engineers</span>
                                </div>
                                <div className="job-family-card">
                                    <div className="job-family-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                                    </div>
                                    <span>Embedded Linux Security Engineers</span>
                                </div>
                                <div className="job-family-card">
                                    <div className="job-family-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                                    </div>
                                    <span>Test, Validation & Automation Engineers</span>
                                </div>
                                <div className="job-family-card">
                                    <div className="job-family-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                                    </div>
                                    <span>Senior & Lead Embedded Linux Engineers</span>
                                </div>
                                <div className="job-family-card">
                                    <div className="job-family-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                                    </div>
                                    <span>Linux Application Developers</span>
                                </div>
                                <div className="job-family-card">
                                    <div className="job-family-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                                    </div>
                                    <span>User Space engineers</span>
                                </div>
                            </div>

                        </section>




                        {/* OUTCOMES */}
                        <section className="domain-section outcomes-modern">
                            <div className="section-heading-center">
                                <h2 id="outcomes">Outcomes & Value Delivered</h2>
                            </div>

                            <div className="outcomes-grid">
                                <div className="outcome-card">
                                    <div className="outcome-card__icon">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                    </div>
                                    <p>Hands-on practice using embedded hardware</p>
                                </div>
                                <div className="outcome-card">
                                    <div className="outcome-card__icon">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                    </div>
                                    <p>Strong foundational and advanced embedded Linux skills</p>
                                </div>
                                <div className="outcome-card">
                                    <div className="outcome-card__icon">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                    </div>
                                    <p>Faster onboarding of embedded engineers</p>
                                </div>
                                <div className="outcome-card">
                                    <div className="outcome-card__icon">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                    </div>
                                    <p>Improved system stability and debuggability</p>
                                </div>
                                <div className="outcome-card">
                                    <div className="outcome-card__icon">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                    </div>
                                    <p>Reduced dependency on ad-hoc troubleshooting</p>
                                </div>
                                <div className="outcome-card">
                                    <div className="outcome-card__icon">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                    </div>
                                    <p>Clear progression from application-level to kernel-level expertise</p>
                                </div>
                            </div>

                        </section>



                        {/* CORE COMPETENCIES ACCORDION */}
                        <section className="domain-section modern-accordion">
                            <div className="accordion-wrapper">
                                <div className="section-heading-center">
                                    <h2 id="core-competencies">Core Competencies</h2>
                                </div>
                                {[
                                    { title: "Linux & Operating System Fundamentals", content: "Linux operating system architecture, User space and kernel space concepts, Processes, threads, scheduling, and memory, Filesystems and IPC fundamentals" },
                                    { title: "Embedded C & Systems Programming", content: "Embedded C programming for Linux, Memory management and pointer usage, Low-level programming concepts, Debugging using GDB" },
                                    { title: "Linux User-Space Internals", content: "POSIX APIs and Linux programming interfaces, Multithreading and synchronization, Inter-process communication mechanisms, User-space debugging and diagnostics" },
                                    { title: "Linux Kernel Internals", content: "Linux kernel architecture and subsystems, Kernel programming fundamentals, Kernel–user space interaction, Scheduling and memory management concepts" },
                                    { title: "Device Driver Development", content: "Linux device driver architecture, Character device driver development, Hardware interaction using kernel frameworks, Interrupt handling fundamentals" },
                                    { title: "Peripheral & Bus Driver Development", content: "I2C driver development, SPI driver development, UART driver development, Linux audio subsystem and audio drivers" },
                                    { title: "Kernel Debugging & Diagnostics", content: "Linux kernel debugging techniques, Root cause analysis of crashes and hangs, Debugging kernel performance issues" },
                                    { title: "Embedded Linux Porting & Bring-Up", content: "Linux porting concepts, Platform adaptation and kernel configuration, Board bring-up strategies and troubleshooting" },
                                    { title: "Embedded Linux Security", content: "Embedded Linux security fundamentals, Secure system design concepts, SELinux fundamentals" },
                                    { title: "Automation & Scripting", content: "Python for device and test automation, Scripting for embedded Linux environments" },
                                ].map((item, index) => (
                                    <div key={index} className={`accordion-item ${activeCoreCompetency === index ? "active" : ""}`}>
                                        <div className="accordion-header" onClick={() => setActiveCoreCompetency(activeCoreCompetency === index ? null : index)} style={{ cursor: "pointer" }}>
                                            <span>{item.title}</span>
                                            <span>{activeCoreCompetency === index ? "⌃" : "⌄"}</span>
                                        </div>
                                        {activeCoreCompetency === index && (
                                            <div className="accordion-body"><p>{item.content}</p></div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* COMPETENCY → JOB FAMILY ALIGNMENT */}
                        <section className="domain-section alignment-section">
                            <div className="section-heading-center">
                                <h2 id="alignment">Competency → Job Family Alignment</h2>
                            </div>
                            <div className="alignment-cards">
                                {[
                                    { role: "Embedded Linux Application Engineer", competencies: ["Linux fundamentals", "POSIX APIs", "IPC", "Embedded C"] },
                                    { role: "Linux Kernel Engineer", competencies: ["Kernel internals", "Scheduling", "Memory management"] },
                                    { role: "Device Driver Engineer", competencies: ["Driver architecture", "I2C, SPI, UART", "Interrupts"] },
                                    { role: "Platform / BSP Engineer", competencies: ["Kernel configuration", "Porting concepts", "Bring-up"] },
                                    { role: "Integration Engineer", competencies: ["Cross-layer debugging", "Stability", "Performance"] },
                                    { role: "Security Engineer", competencies: ["Embedded Linux security", "SELinux"] },
                                    { role: "Test / Validation Engineer", competencies: ["Debugging", "Automation", "System analysis"] },
                                    { role: "Senior / Lead Engineer", competencies: ["Kernel debugging", "Architecture understanding"] },
                                ].map((item, index) => (
                                    <div key={index} className="alignment-card">
                                        <div className="alignment-card__role">{item.role}</div>
                                        <div className="alignment-card__arrow" aria-hidden="true">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                                        </div>
                                        <div className="alignment-card__competencies">
                                            {item.competencies.map((c, i) => (
                                                <span key={i} className="competency-tag">{c}</span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* LEARNING PATHS ACCORDION */}
                        <section className="domain-section modern-accordion">
                            <div className="accordion-wrapper">
                                <div className="section-heading-center">
                                    <h2 id="learning-paths">Learning Paths & Career Progression</h2>
                                </div>
                                {[
                                    { title: "Entry Level", content: "Linux fundamentals, Embedded C, user-space programming" },
                                    { title: "Mid-Level Engineers", content: "Kernel internals, device drivers, debugging" },
                                    { title: "Senior Engineers", content: "Kernel debugging, platform bring-up, system integration" },
                                    { title: "Technical Leads", content: "Architecture, performance, security, mentoring" },
                                ].map((item, index) => (
                                    <div key={index} className={`accordion-item ${activeLearningPath === index ? "active" : ""}`}>
                                        <div className="accordion-header" onClick={() => setActiveLearningPath(activeLearningPath === index ? null : index)} style={{ cursor: "pointer" }}>
                                            <span>{item.title}</span>
                                            <span>{activeLearningPath === index ? "⌃" : "⌄"}</span>
                                        </div>
                                        {activeLearningPath === index && (
                                            <div className="accordion-body"><p>{item.content}</p></div>
                                        )}
                                    </div>
                                ))}
                                <p className="learning-path-note">Learning paths can be aligned to individual career growth or team onboarding programs.</p>
                            </div>
                        </section>

                        {/* TRAINING FORMATS ACCORDION */}
                        <section className="domain-section modern-accordion">
                            <div className="accordion-wrapper">
                                <div className="section-heading-center">
                                    <h2 id="formats">Training Formats & Engagement Models</h2>
                                </div>
                                {["Public instructor-led programs", "In-house corporate training", "Role-based onboarding programs", "Modular learning paths", "Customized programs for product teams"].map((item, index) => (
                                    <div key={index} className={`accordion-item ${activeFormat === index ? "active" : ""}`}>
                                        <div className="accordion-header" onClick={() => setActiveFormat(activeFormat === index ? null : index)} style={{ cursor: "pointer" }}>
                                            <span>{item}</span>
                                            <span>{activeFormat === index ? "⌃" : "⌄"}</span>
                                        </div>
                                        {activeFormat === index && (
                                            <div className="accordion-body"><p>{item}</p></div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>
                        {/* COURSES AS BUILDING BLOCKS */}
                        <section className="domain-section courses-carousel-section">
                            <div className="section-heading-center">
                                <h2 id="courses">Courses as Building Blocks</h2>
                            </div>
                            <div className="courses-carousel-wrapper">
                                {/* <button
                                    type="button"
                                    className="courses-carousel-btn courses-carousel-btn--prev"
                                    onClick={() => scrollCourses("left")}
                                    aria-label="Previous courses"
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
                                </button> */}
                                <div className="courses-carousel-track" ref={coursesScrollRef}>
                                    {[
                                        "Embedded Systems Development: C, C++, Linux, and Device Driver Programming",
                                        "Embedded Linux Security",
                                        "Operating System Essentials",
                                        "Linux Driver Development",
                                        "Embedded C Programming and GDB Debugging",
                                        "Embedded Linux Kernel Programming",
                                        "Embedded Linux Porting Hacks",
                                        "Embedded Linux System Internals",
                                        "Linux Audio Drivers",
                                        "Linux Inter-Integrated Circuit (I2C) Drivers",
                                        "Linux Kernel Debugging",
                                        "Linux SPI & UART Drivers",
                                        "Linux System Programming",
                                        "Linux User Space Internals",
                                        "SELinux",
                                    ].map((title, index) => (
                                        <div key={index} className="course-card">
                                            <div className="course-card__header">
                                                <div className="course-card__icon">
                                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                                                </div>
                                            </div>
                                            <div className="course-card__body">
                                                <h4 className="course-card__title">{title}</h4>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {/* <button
                                    type="button"
                                    className="courses-carousel-btn courses-carousel-btn--next"
                                    onClick={() => scrollCourses("right")}
                                    aria-label="Next courses"
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
                                </button> */}
                            </div>
                            <div className="courses-carousel-nav">
                                <div className="courses-carousel-progress" aria-hidden="true" />
                                <div className="courses-carousel-buttons">
                                    <button type="button" className="courses-nav-btn" onClick={() => scrollCourses("left")} aria-label="Previous">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
                                    </button>
                                    <button type="button" className="courses-nav-btn" onClick={() => scrollCourses("right")} aria-label="Next">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
                                    </button>
                                </div>
                            </div>
                        </section>

                        <section className="ed-faq section-gap position-relative overflow-hidden">
                            <div className="container ">
                                <div className="section-heading-center">
                                    <h2 id="faq">Frequently Asked Questions</h2>
                                </div>


                                <div className="faq-grid">

                                    {[
                                        { question: "1. Is this training hands-on, and will participants work with real hardware?", answer: "Yes. The training is highly hands-on. Participants work directly on real embedded platforms such as BeagleBoard.org BeagleBone Black and Raspberry Pi Foundation Raspberry Pi, performing board bring-up, kernel builds, driver development (GPIO/I2C/SPI/UART), root filesystem setup, and live debugging. Every concept is reinforced through practical labs to ensure real-world, job-ready skills." },
                                        { question: "2. What does Timmins cover in the Embedded Linux domain?", answer: "This domain covers building Linux-based software platforms for embedded systems, including operating system fundamentals, user space, kernel internals, device drivers, debugging, security, and system integration." },
                                        { question: "3. How is Embedded Linux different from general Linux or application development?", answer: "Embedded Linux involves close interaction between software and hardware. It requires understanding resource constraints, kernel behavior, device drivers, board bring-up, and system-level debugging, not just application logic." },
                                        { question: "4. Does this domain include kernel and device driver development?", answer: "Yes. Kernel internals and device driver development are core components of the domain, including character drivers, peripheral drivers (I2C, SPI, UART), interrupt handling, and kernel–user space interaction." },
                                        { question: "5. How deep does the training go into debugging and system analysis?", answer: "Debugging is a major focus. The domain covers user-space debugging, kernel debugging, root cause analysis of crashes and hangs, performance diagnostics, and cross-layer troubleshooting." },
                                        { question: "6. Is Embedded Linux security covered in this domain?", answer: "Yes. The domain includes embedded Linux security fundamentals, secure system design awareness, and SELinux concepts relevant to embedded and long-lived systems." },
                                        { question: "7. How does Timmins Training Consulting approach Embedded Linux training?", answer: "Timmins treats Embedded Linux as a deep technical capability domain. Training is competency-driven, aligned to real embedded engineering roles, and emphasizes hands-on understanding of kernels, drivers, and debugging." },
                                        { question: "8. Who is this Embedded Linux domain suitable for?", answer: "The domain is suitable for fresh graduates, junior engineers, experienced embedded developers, senior engineers, and technical leads working on Linux-based embedded systems." },
                                        { question: "9. Can organizations customize learning paths for different embedded roles?", answer: "Yes. Learning paths can be customized for application engineers, kernel or driver engineers, BSP and platform teams, integration engineers, or full product teams." },
                                        { question: "10. What training formats are available for Embedded Linux?", answer: "Timmins delivers Embedded Linux training through public instructor-led programs, in-house corporate training, role-based onboarding, modular learning paths, and customized programs for product teams." },
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
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
