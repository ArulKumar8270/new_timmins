"use client";
import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useEffect } from "react";


export default function EmbeddedLinuxDomain() {

    useEffect(() => {

        const items = document.querySelectorAll(".accordion-item");

        items.forEach((item) => {
            const header = item.querySelector(".accordion-header");
            const content = item.querySelector(".accordion-content");

            header.addEventListener("click", () => {
                item.classList.toggle("active");

                if (item.classList.contains("active")) {
                    content.style.maxHeight = content.scrollHeight + "px";
                } else {
                    content.style.maxHeight = 0;
                }
            });
        });
    }, []);

    useEffect(() => {
        const track = document.querySelector(".instructor-track");
        const nextBtn = document.querySelector(".next-btn");
        const prevBtn = document.querySelector(".prev-btn");

        if (!track || !nextBtn || !prevBtn) return;

        let position = 0;

        const handleNext = () => {
            position -= 300;
            track.style.transform = `translateX(${position}px)`;
        };

        const handlePrev = () => {
            position += 300;
            track.style.transform = `translateX(${position}px)`;
        };

        nextBtn.addEventListener("click", handleNext);
        prevBtn.addEventListener("click", handlePrev);

        return () => {
            nextBtn.removeEventListener("click", handleNext);
            prevBtn.removeEventListener("click", handlePrev);
        };
    }, []);


    return (
        <>
            <Header />

            {/* HERO */}
            <section className="domain-hero">
                <div className="container hero-wrapper">
                    <div className="hero-content">
                        <p className="domain-label">ENGINEERING CAPABILITY DOMAIN</p>
                        <h1>
                            Embedded Linux <br />
                            Engineering Capability
                        </h1>
                        <p className="hero-desc">
                            Practitioner-led capability development across kernel engineering,
                            BSP bring-up, driver development, system integration, and
                            production deployment.
                        </p>
                    </div>

                    <div className="hero-image">
                        <img src="/assets/New_images/linux.jpg" alt="Embedded Linux" />
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
                                <li><a href="#industries">Who This Domain is For</a></li>
                                <li><a href="#industries">Job Families</a></li>
                                <li><a href="#industries">Outcomes</a></li>
                                <li><a href="#industries">Core Competencies</a></li>
                                <li><a href="#industries">Competency x Job Family</a></li>
                                <li><a href="#industries">Learning Paths</a></li>
                                <li><a href="#industries">Formats</a></li>
                                <li><a href="#industries">Courses</a></li>
                                <li><a href="#industries">FAQ</a></li>
                            </ul>

                            <div className="text-center">
                                <a href="/contact-us" className="contact-link"
                                    type="submit"
                                    style={{
                                        background: "#f5a623",
                                        color: "#fff",
                                        fontWeight: "600",
                                        padding: "18px 34px",
                                        borderRadius: "30px",
                                        border: "none",
                                        marginTop: "12px",
                                    }}
                                >

                                    Talk to Timmins
                                </a>

                            </div>
                        </div>
                    </aside>

                    {/* RIGHT CONTENT */}
                    <div className="domain-content">

                        {/* OVERVIEW */}
                        <section id="overview" className="domain-section">
                            <h2>Overview</h2>
                            <p>
                                Embedded Linux Engineering is at the core of modern device
                                development. From automotive control systems to IoT gateways
                                and telecom infrastructure, Linux powers mission-critical
                                embedded systems worldwide.
                            </p>

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
                        <section id="who" className="domain-section who-section">

                            <div className="section-heading-center">
                                <h2>Who This Domain Is For</h2>
                            </div>

                            <div className="who-card">

                                <div className="who-item">
                                    <div className="who-icon">
                                        <img src="/assets/icons/engineer.png" alt="Engineers" />
                                    </div>
                                    <p>Engineers building embedded Linux-based systems</p>
                                </div>

                                <div className="who-item">
                                    <div className="who-icon">
                                        <img src="/assets/icons/manager.png" alt="Managers" />
                                    </div>
                                    <p>Engineering managers planning embedded skill development</p>
                                </div>

                                <div className="who-item">
                                    <div className="who-icon">
                                        <img src="/assets/icons/hr.png" alt="HR & L&D" />
                                    </div>
                                    <p>HR & L&D teams designing technical onboarding programs</p>
                                </div>

                                <div className="who-item">
                                    <div className="who-icon">
                                        <img src="/assets/icons/organization.png" alt="Organizations" />
                                    </div>
                                    <p>Organizations developing or maintaining embedded products</p>
                                </div>

                            </div>

                        </section>



                        {/* JOB FAMILIES */}
                        {/* JOB FAMILIES */}
                        <section id="job-families" className="domain-section job-section">

                            <div className="section-heading-center">
                                <h2>Job Families We Support</h2>
                            </div>

                            <div className="job-card">

                                {/* Application Layer */}
                                <div className="job-row">
                                    <div className="job-layer">Application Layer</div>
                                    <div className="job-roles">
                                        <ul>
                                            <li>Embedded Linux Application Engineers</li>
                                            <li>Test, Validation & Automation Engineers</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* System Layer */}
                                <div className="job-row">
                                    <div className="job-layer">System Layer</div>
                                    <div className="job-roles">
                                        <ul>
                                            <li>Linux Kernel Engineers</li>
                                            <li>Linux Device Driver Engineers</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Platform Layer */}
                                <div className="job-row">
                                    <div className="job-layer">Platform Layer</div>
                                    <div className="job-roles">
                                        <ul>
                                            <li>Embedded Linux Platform / BSP Engineers</li>
                                            <li>System Integration Engineers</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Advanced & Leadership */}
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
                        <section id="outcomes" className="domain-section outcomes-section">

                            <div className="section-heading-center">
                                <h2>Outcomes & Value Delivered</h2>
                            </div>

                            <div className="outcomes-card">

                                <div className="outcome-item">
                                    <span className="check-icon">✓</span>
                                    <p>Strong foundational and advanced embedded Linux skills</p>
                                </div>

                                <div className="outcome-item">
                                    <span className="check-icon">✓</span>
                                    <p>Faster onboarding of embedded engineers</p>
                                </div>

                                <div className="outcome-item">
                                    <span className="check-icon">✓</span>
                                    <p>Improved system stability and debuggability</p>
                                </div>

                                <div className="outcome-item">
                                    <span className="check-icon">✓</span>
                                    <p>Reduced dependency on ad-hoc troubleshooting</p>
                                </div>

                                <div className="outcome-item">
                                    <span className="check-icon">✓</span>
                                    <p>Clear progression from application-level to kernel-level expertise</p>
                                </div>

                            </div>

                        </section>


                        {/* TRAINING FORMATS SECTION */}
                        <section id="formats" className="domain-section training-section">

                            <div className="section-heading-center">
                                <h2>Competencies – Training Formats</h2>
                            </div>

                            <div className="accordion">

                                {/* ITEM 1 */}
                                <div className="accordion-item active">
                                    <button className="accordion-header">
                                        <span>🛠 Fundamentals of Embedded Linux</span>
                                        <span className="arrow">−</span>
                                    </button>
                                    <div className="accordion-content">
                                        <ul>
                                            <li>Linux architecture & boot process</li>
                                            <li>Kernel basics & configuration</li>
                                            <li>BSP fundamentals</li>
                                            <li>Driver development introduction</li>
                                            <li>Build systems (Yocto / Buildroot)</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* ITEM 2 */}
                                <div className="accordion-item">
                                    <button className="accordion-header">
                                        <span>⚙ Kernel & Driver Engineering</span>
                                        <span className="arrow">+</span>
                                    </button>
                                    <div className="accordion-content">
                                        <ul>
                                            <li>Advanced kernel debugging</li>
                                            <li>Device driver design patterns</li>
                                            <li>Memory management & performance tuning</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* ITEM 3 */}
                                <div className="accordion-item">
                                    <button className="accordion-header">
                                        <span>🚀 Production Deployment</span>
                                        <span className="arrow">+</span>
                                    </button>
                                    <div className="accordion-content">
                                        <ul>
                                            <li>Secure boot & hardening</li>
                                            <li>System validation</li>
                                            <li>Deployment workflows</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* ITEM 4 */}
                                <div className="accordion-item">
                                    <button className="accordion-header">
                                        <span>📊 System Integration & Validation</span>
                                        <span className="arrow">+</span>
                                    </button>
                                    <div className="accordion-content">
                                        <ul>
                                            <li>Hardware bring-up</li>
                                            <li>Debugging techniques</li>
                                            <li>Automation & testing strategies</li>
                                        </ul>
                                    </div>
                                </div>

                            </div>

                        </section>

                        {/* ================= INSTRUCTORS ================= */}
                        {/* ================= INSTRUCTORS ================= */}
                        <section id="instructors" className="instructor-section">
                            <div className="section-heading">
                                <h2>Instructor</h2>
                            </div>

                            <div className="instructor-wrapper">
                                <button className="nav-btn prev-btn">&#10094;</button>

                                <div className="instructor-track">
                                    <div className="instructor-card">
                                        <img src="/assets/New_images/course.png" alt="Instructor" />
                                        <div className="card-content">
                                            <h4>Metha Dwi Karina</h4>
                                            <p>Ex Digital Strategist at Gojek</p>
                                        </div>
                                    </div>

                                    <div className="instructor-card">
                                        <img src="/assets/New_images/course.png" alt="Instructor" />
                                        <div className="card-content">
                                            <h4>Kareem Reza</h4>
                                            <p>Social Media Specialist</p>
                                        </div>
                                    </div>

                                    <div className="instructor-card">
                                        <img src="/assets/New_images/course.png" alt="Instructor" />
                                        <div className="card-content">
                                            <h4>Ralehat Buana Puspa</h4>
                                            <p>Digital Marketing Manager</p>
                                        </div>
                                    </div>

                                    <div className="instructor-card">
                                        <img src="/assets/New_images/course.png" alt="Instructor" />
                                        <div className="card-content">
                                            <h4>Roro Ajeng Sekar</h4>
                                            <p>Social Media & Optimization</p>
                                        </div>
                                    </div>
                                </div>

                                <button className="nav-btn next-btn">&#10095;</button>
                            </div>
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
                                                                1. What is the best embedded systems training for beginners?
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
                                                                    The recommended beginner courses are OS Essentials, Embedded C & GDB, and Embedded Linux System Internals. These courses provide a strong foundation in operating systems, embedded programming, debugging, and Linux internals.
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
                                                                2. Does Timmins offer AI consulting or only training?
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
                                                                    Timmins offers both AI consulting and AI training, including capability assessment, use-case identification, and structured enterprise AI upskilling programs.
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
                                                                3. Are your programs HRDC Claimable?

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
                                                                    Yes. For Malaysian employers only, many AI, Embedded Systems, 5G, and corporate training programs are HRDC claimable, subject to eligibility and approval.
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
                                                                4. Do you provide customized training for engineering teams?
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
                                                                    Yes. Timmins specializes in customized, role-based training pathways for embedded systems, AI, 5G, and software engineering teams.
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
                                                                5.Are Timmins training courses available online?
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
                                                                    Yes. Timmins offers online, on-site, and hybrid training programs for engineering and technical teams.
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
                                                                6. What industries does Timmins work with?
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
                                                                    Timmins works with semiconductors, telecom, manufacturing, banking, digital platforms, and technology-driven enterprises.
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
                                                                7. Do you provide corporate training outside Malaysia?
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
                                                                    Yes. Timmins delivers corporate training across Malaysia, Singapore, Indonesia, China, India, Vietnam, the United States, and Canada.
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
                                                                8. How is Timmins different from other corporate training providers?
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
                                                                    Timmins is practitioner-led, engineering-grade, and deeply specialized, focusing on real capability building rather than generic or tool-centric training.
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
                                                                9. Do you offer end-to-end Embedded Linux training?
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
                                                                    Yes. Timmins covers Embedded Linux end-to-end, including OS Essentials, Embedded C & GDB, Embedded Linux System Internals, device drivers (audio, I2C), kernel debugging, user-space and kernel internals, and SELinux, security.
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
                                                                10. Can Timmins design onboarding programs for fresh graduates?

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
                                                                    Yes. Timmins has designed and delivered large-scale onboarding and engineering academy programs for semiconductor and telecom organizations.
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





                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
