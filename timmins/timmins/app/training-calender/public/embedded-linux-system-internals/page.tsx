"use client";
import { useState } from "react";
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";

export default function EmbeddedLinuxPage() {


    const [open1, setOpen1] = useState(true);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    return (
        <>
            <Header />

            <section className="revou-hero">
                <div className="container">
                    <div className="row align-items-center">

                        {/* LEFT CARD */}
                        <div className="col-lg-5 mb-4 mb-lg-0">
                            <div className="skill-card">
                                <h4>Skills You Will Gain</h4>
                                <ul>
                                    <li>Linux Boot Process</li>
                                    <li>Kernel Architecture</li>
                                    <li>Driver Development Basics</li>
                                    <li>Debugging Techniques</li>
                                    <li>Performance Optimization</li>
                                </ul>
                            </div>
                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="col-lg-7">
                            <div className="hero-content">
                                <span className="badge-tag">Public Class</span>
                                <h1>Embedded Linux System Internals</h1>
                                <p>
                                    Deep dive into Linux system architecture, boot process,
                                    device drivers and kernel internals.
                                </p>

                                <div className="meta">
                                    <span>📍 Penang / KL</span>
                                    <span>⏳ 5 Days</span>
                                    <span>🎓 Certificate Included</span>
                                </div>

                                <div className="cta-area">
                                    <button className="btn-register">
                                        Register Now
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <section className="ed-partner mt-5 section-gap">
                <div className="container ed-container">
                    <div className="row">
                        <h3 className="ed-section-head__title  text-center pb-5   ">
                            Trusted by Teams Across Industries & Regions
                        </h3>

                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="owl-carousel ed-partner__slider">
                                {/* Single Slider  */}
                                <a href="#" target="_blank" className="ed-parnet__brand-logo">
                                    <img
                                        src="/assets/New_images/clients/Cisco_logo_blue_2016.svg.png"
                                        alt="Cisco"
                                        className="clients-logo"
                                    />
                                </a>
                                {/* Single Slider  */}
                                <a href="#" target="_blank" className="ed-parnet__brand-logo">
                                    <img
                                        src="/assets/New_images/clients/citigroup.png"
                                        alt="Citigroup"
                                    />
                                </a>
                                {/* Single Slider  */}
                                <a href="#" target="_blank" className="ed-parnet__brand-logo">
                                    <img
                                        src="/assets/New_images/clients/dbs.png"
                                        alt="DBS"
                                    />
                                </a>
                                {/* Single Slider  */}
                                <a href="#" target="_blank" className="ed-parnet__brand-logo">
                                    <img
                                        src="/assets/New_images/clients/digi company.jpeg"
                                        alt="Digi"
                                        style={{ height: '60px', width: 'auto' }}
                                    />
                                </a>
                                {/* Single Slider  */}
                                <a href="#" target="_blank" className="ed-parnet__brand-logo">
                                    <img
                                        src="/assets/New_images/clients/dxc tech.jpeg"
                                        alt="DXC Technology"
                                    />
                                </a>
                                {/* Single Slider  */}
                                <a href="#" target="_blank" className="ed-parnet__brand-logo">
                                    <img
                                        src="/assets/New_images/clients/elnusa.png"
                                        alt="Elnusa"
                                    />
                                </a>
                                {/* Single Slider  */}
                                <a href="#" target="_blank" className="ed-parnet__brand-logo">
                                    <img
                                        src="/assets/New_images/clients/enquest.jpeg"
                                        alt="Enquest"
                                    />
                                </a>
                                {/* Single Slider  */}
                                <a href="#" target="_blank" className="ed-parnet__brand-logo">
                                    <img
                                        src="/assets/New_images/clients/epsilon.jpeg"
                                        alt="Epsilon"
                                    />
                                </a>
                                {/* Single Slider  */}
                                <a href="#" target="_blank" className="ed-parnet__brand-logo">
                                    <img
                                        src="/assets/New_images/clients/german_malaysian_institute_logo.jpeg"
                                        alt="German Malaysian Institute"
                                    />
                                </a>
                                {/* Single Slider  */}
                                <a href="#" target="_blank" className="ed-parnet__brand-logo">
                                    <img
                                        src="/assets/New_images/clients/GKL1_Telkomsel - Koleksilogo.com.jpg"
                                        alt="Telkomsel"
                                    />
                                </a>
                                {/* Single Slider  */}
                                <a href="#" target="_blank" className="ed-parnet__brand-logo">
                                    <img
                                        src="/assets/New_images/clients/hongleong bank.jpg"
                                        alt="Hong Leong Bank"
                                    />
                                </a>
                                {/* Single Slider  */}
                                <a href="#" target="_blank" className="ed-parnet__brand-logo">
                                    <img
                                        src="/assets/New_images/clients/indosar-ooredoo-l-min.jpg"
                                        alt="Indosat Ooredoo"
                                    />
                                </a>
                                {/* Single Slider  */}
                                <a href="#" target="_blank" className="ed-parnet__brand-logo">
                                    <img
                                        src="/assets/New_images/clients/infineon.png"
                                        alt="Infineon"
                                    />
                                </a>
                                {/* Single Slider  */}
                                <a href="#" target="_blank" className="ed-parnet__brand-logo">
                                    <img
                                        src="/assets/New_images/clients/maxis-logo.jpg"
                                        alt="Maxis"
                                    />
                                </a>
                                {/* Single Slider  */}
                                <a href="#" target="_blank" className="ed-parnet__brand-logo">
                                    <img
                                        src="/assets/New_images/clients/micost.png"
                                        alt="Micost"
                                    />
                                </a>
                                {/* Single Slider  */}
                                <a href="#" target="_blank" className="ed-parnet__brand-logo">
                                    <img
                                        src="/assets/New_images/clients/mof khazanah treasury.png"
                                        alt="MOF Khazanah Treasury"
                                    />
                                </a>
                                {/* Single Slider  */}
                                <a href="#" target="_blank" className="ed-parnet__brand-logo">
                                    <img
                                        src="/assets/New_images/clients/motorola-logo-png_seeklogo-95176.png"
                                        alt="Motorola"
                                        className="clients-logo"
                                    />
                                </a>
                                {/* Single Slider  */}
                                <a href="#" target="_blank" className="ed-parnet__brand-logo">
                                    <img
                                        src="/assets/New_images/clients/olx.png"
                                        alt="OLX"
                                    />
                                </a>
                                {/* Single Slider  */}
                                <a href="#" target="_blank" className="ed-parnet__brand-logo">
                                    <img
                                        src="/assets/New_images/clients/qualcomm.png"
                                        alt="Qualcomm"
                                    />
                                </a>
                                {/* Single Slider  */}
                                <a href="#" target="_blank" className="ed-parnet__brand-logo">
                                    <img
                                        src="/assets/New_images/clients/telecom malaysia.png"
                                        alt="Telekom Malaysia"
                                    />
                                </a>
                                {/* Single Slider  */}
                                <a href="#" target="_blank" className="ed-parnet__brand-logo">
                                    <img
                                        src="/assets/New_images/clients/telkom metra.png"
                                        alt="Telkom Metra"
                                    />
                                </a>
                                {/* Single Slider  */}
                                <a href="#" target="_blank" className="ed-parnet__brand-logo">
                                    <img
                                        src="/assets/New_images/clients/telkomsat.png"
                                        alt="Telkomsat"
                                    />
                                </a>
                                {/* Single Slider  */}
                                <a href="#" target="_blank" className="ed-parnet__brand-logo">
                                    <img
                                        src="/assets/New_images/clients/umobile.png"
                                        alt="U Mobile"
                                    />
                                </a>
                                {/* Single Slider  */}
                                <a href="#" target="_blank" className="ed-parnet__brand-logo">
                                    <img
                                        src="/assets/New_images/clients/uniKL.jpeg"
                                        alt="UniKL"
                                    />
                                </a>
                                {/* Single Slider  */}
                                <a href="#" target="_blank" className="ed-parnet__brand-logo">
                                    <img
                                        src="/assets/New_images/clients/Webe-with-TM-Group_01.png"
                                        alt="Webe TM Group"
                                    />
                                </a>
                                {/* Single Slider  */}
                                <a href="#" target="_blank" className="ed-parnet__brand-logo">
                                    <img
                                        src="/assets/New_images/clients/YTL_Corporation_Berhad_Logo_(former).svg.png"
                                        alt="YTL Corporation"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* WHY THIS TRAINING MATTERS */}
            <section className="why-matters">
                <div className="container">

                    <h2 className="text-center mb-5">
                        Why Embedded Linux Skills Matter?
                    </h2>

                    <div className="row">

                        <div className="col-md-4 mb-4">
                            <div className="why-card">
                                <span className="why-number">1</span>
                                <h5>High Industry Demand</h5>
                                <div className="highlight-box">
                                    Growing demand in Semiconductor & Automotive
                                </div>
                                <p>
                                    Embedded Linux engineers are highly sought after in global tech industries.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-4 mb-4">
                            <div className="why-card">
                                <span className="why-number">2</span>
                                <h5>Strong Career Growth</h5>
                                <div className="highlight-box">
                                    System Engineer → Kernel Specialist
                                </div>
                                <p>
                                    Opens pathways to advanced system-level engineering roles.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-4 mb-4">
                            <div className="why-card">
                                <span className="why-number">3</span>
                                <h5>Competitive Salaries</h5>
                                <div className="highlight-box">
                                    High-value technical expertise
                                </div>
                                <p>
                                    Specialized Linux skills command premium compensation globally.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* WHO SHOULD ATTEND */}
            <section className="who-attend">
                <div className="container text-center">

                    <h2 className="mb-3">Who Should Attend?</h2>
                    <p className="sub-text mb-5">
                        Career opportunities for Embedded Linux professionals
                    </p>

                    <div className="row justify-content-center">

                        <div className="col-md-3 col-6 mb-4">
                            <div className="role-card">
                                <h6>Embedded Engineer</h6>
                                <p className="salary">High Industry Demand</p>
                            </div>
                        </div>

                        <div className="col-md-3 col-6 mb-4">
                            <div className="role-card">
                                <h6>Linux System Developer</h6>
                                <p className="salary">Advanced Technical Role</p>
                            </div>
                        </div>

                        <div className="col-md-3 col-6 mb-4">
                            <div className="role-card">
                                <h6>Kernel Engineer</h6>
                                <p className="salary">Specialised Expertise</p>
                            </div>
                        </div>

                        <div className="col-md-3 col-6 mb-4">
                            <div className="role-card">
                                <h6>Firmware Developer</h6>
                                <p className="salary">System-Level Growth</p>
                            </div>
                        </div>

                    </div>

                    <p className="mt-4">
                        Build a strong system-level engineering career with embedded Linux skills.
                    </p>

                    <button className="btn-primary-cta">
                        Register Now
                    </button>

                </div>
            </section>


            {/* COURSE BENEFITS SECTION */}
            <section className="course-highlight">
                <div className="container">
                    <div className="row align-items-center">

                        {/* LEFT SIDE */}
                        <div className="col-lg-5 mb-5 mb-lg-0">
                            <h2 className="highlight-title">
                                Free 1 Week<br />
                                Embedded Linux<br />
                                Masterclass
                            </h2>

                            <p className="highlight-sub">
                                Join hundreds of engineers upgrading their Linux system skills.
                            </p>
                        </div>

                        {/* RIGHT SIDE */}
                        <div className="col-lg-7">
                            <div className="row g-4">

                                <div className="col-md-6">
                                    <div className="highlight-card">
                                        <div className="icon-circle">🎓</div>
                                        <p>Live session with industry expert</p>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="highlight-card">
                                        <div className="icon-circle">💻</div>
                                        <p>Hands-on debugging practice</p>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="highlight-card">
                                        <div className="icon-circle">📘</div>
                                        <p>Real embedded Linux case studies</p>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="highlight-card">
                                        <div className="icon-circle">🏆</div>
                                        <p>Certificate of completion</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* AGENDA SECTION */}

            <section className="agenda-section">
                <div className="container">

                    <div className="text-center mb-5">
                        <h2 className="fw-bold">Agenda & Course Outline</h2>
                        <p className="text-muted">
                            Learn deeply structured Embedded Linux concepts across modules.
                        </p>
                    </div>

                    {/* DAY 1 */}
                    <div className="custom-accordion-item">
                        <div
                            className="accordion-header-custom"
                            onClick={() => setOpen1(!open1)}
                        >
                            Day 1 – Linux Architecture & Boot Process
                            <span>{open1 ? "▲" : "▼"}</span>
                        </div>

                        {open1 && (
                            <div className="accordion-body-custom">
                                <ul>
                                    <li>Linux system overview</li>
                                    <li>Bootloaders & kernel startup</li>
                                    <li>File system structure</li>
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* DAY 2 */}
                    <div className="custom-accordion-item">
                        <div
                            className="accordion-header-custom"
                            onClick={() => setOpen2(!open2)}
                        >
                            Day 2 – Process & Memory Management
                            <span>{open2 ? "▲" : "▼"}</span>
                        </div>

                        {open2 && (
                            <div className="accordion-body-custom">
                                <ul>
                                    <li>Process lifecycle</li>
                                    <li>Scheduling basics</li>
                                    <li>Memory allocation</li>
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* DAY 3 */}
                    <div className="custom-accordion-item">
                        <div
                            className="accordion-header-custom"
                            onClick={() => setOpen3(!open3)}
                        >
                            Day 3 – Device Drivers & Debugging
                            <span>{open3 ? "▲" : "▼"}</span>
                        </div>

                        {open3 && (
                            <div className="accordion-body-custom">
                                <ul>
                                    <li>Driver fundamentals</li>
                                    <li>Kernel modules</li>
                                    <li>Debugging tools</li>
                                </ul>
                            </div>
                        )}
                    </div>

                    <div className="text-center mt-5">
                        <button className="btn-timmins-primary">
                            Register Now
                        </button>
                    </div>

                </div>
            </section>


            {/* LEARN FROM EXPERT SECTION */}
            <section
                className="expert-section"
                style={{
                    backgroundImage: "url('/assets/New_images/pcl.png')"
                }}
            >
                <div className="expert-overlay">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">

                                <h2 className="expert-title">
                                    Learn From The Expert
                                </h2>

                                <p className="expert-desc">
                                    Delivered by an embedded Linux consultant with 18+ years of hands-on
                                    experience training teams at Qualcomm, Motorola, Robert Bosch,
                                    Philips, LG Soft, John Deere, Capgemini, Intel, and Sierra Wireless.
                                </p>

                                <h6 className="mt-4 fw-bold">Expertise includes:</h6>

                                <ul className="expert-list">
                                    <li>Board bring-up & Linux porting</li>
                                    <li>Kernel & device driver development</li>
                                    <li>Yocto system customization</li>
                                    <li>ARM-based embedded platforms</li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* TESTIMONIAL SECTION */}
            <section className="testimonial-section">
                <div className="container">

                    <div className="text-center mb-5">
                        <h2 className="fw-bold">What Participants Say</h2>
                    </div>

                    <div className="row">

                        {/* CARD 1 */}
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="testimonial-card">
                                <div className="testimonial-header">
                                    <img
                                        src="/assets/New_images/user1.png"
                                        alt="User"
                                        className="testimonial-avatar"
                                    />
                                    <div>
                                        <h6 className="mb-0">Rahul</h6>
                                        <small>Embedded Engineer</small>
                                    </div>
                                </div>

                                <p className="testimonial-text">
                                    Excellent structured training with real-world debugging examples.
                                    Highly recommended for embedded professionals.
                                </p>

                                <div className="testimonial-source">
                                    ⭐⭐⭐⭐⭐ Google Review
                                </div>
                            </div>
                        </div>

                        {/* CARD 2 */}
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="testimonial-card">
                                <div className="testimonial-header">
                                    <img
                                        src="/assets/New_images/user2.png"
                                        alt="User"
                                        className="testimonial-avatar"
                                    />
                                    <div>
                                        <h6 className="mb-0">Mario Hughes</h6>
                                        <small>Senior Developer</small>
                                    </div>
                                </div>

                                <p className="testimonial-text">
                                    The hands-on labs were very practical. Kernel concepts became very
                                    clear after attending this session.
                                </p>

                                <div className="testimonial-source">
                                    ⭐⭐⭐⭐⭐ Google Review
                                </div>
                            </div>
                        </div>

                        {/* CARD 3 */}
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="testimonial-card">
                                <div className="testimonial-header">
                                    <img
                                        src="/assets/New_images/user3.png"
                                        alt="User"
                                        className="testimonial-avatar"
                                    />
                                    <div>
                                        <h6 className="mb-0">Ethan Wright</h6>
                                        <small>System Architect</small>
                                    </div>
                                </div>

                                <p className="testimonial-text">
                                    Very detailed explanation of Linux internals and driver
                                    development. One of the best technical workshops.
                                </p>

                                <div className="testimonial-source">
                                    ⭐⭐⭐⭐⭐ Google Review
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* CERTIFICATE SECTION */}
            <section className="certificate-section">
                <div className="container">
                    <div className="row align-items-center">

                        {/* LEFT IMAGE */}
                        <div className="col-lg-5 mb-4 mb-lg-0 text-center">
                            <img
                                src="/assets/New_images/coc.png"
                                alt="Certificate"
                                className="certificate-img"
                            />
                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="col-lg-7">
                            <h3 className="certificate-title">
                                Earn A Certificate of Completion
                            </h3>

                            <p className="certificate-desc">
                                Upon completing the Embedded Linux System Internals program,
                                participants receive an official Timmins Certificate of Completion.
                            </p>

                            <p className="certificate-desc">
                                This certificate validates your hands-on capability in Linux system
                                architecture, kernel fundamentals, and device driver development.
                            </p>

                        </div>

                    </div>
                </div>
            </section>


            {/* LIMITED SEATS SECTION */}
            <section className="limited-section">
                <div className="container d-flex justify-content-center">

                    <div className="limited-box text-center">

                        <h3 className="limited-title">
                            Limited Seats – Register Now!
                        </h3>

                        <div className="progress-wrapper">
                            <span className="progress-text">
                                84% seats already filled
                            </span>
                            <div className="custom-progress">
                                <div className="custom-progress-bar"></div>
                            </div>
                        </div>

                        <button className="limited-btn">
                            Secure Your Seat
                        </button>

                    </div>

                </div>
            </section>


            <Footer />
        </>
    );
}