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

            <section className="solutions-hero">
                <div className="container text-center">
                    <h1 className="solutions-title">Our Solutions</h1>
                    <p className="solutions-subtitle">
                        Practitioner-led capability building for engineering-driven organizations,
                        combining hands-on learning, domain expertise, and real-world application
                        across industries.
                    </p>
                </div>
            </section>



            <section className="onboarding-section listStyle bgBlue">
                <h2>Fresh Graduate Onboarding Programs</h2>
                <h4>From fresh talent to project-ready engineers.</h4>
                <p className="intro">
                    We design onboarding programs that accelerate readiness for engineering,
                    tech, and operations roles across industries. Our multi-industry curricula
                    cover:
                </p>
                <ul className="outcomes-list">
                    <li>AI &amp; Machine Learning fundamentals</li>
                    <li>Embedded Linux &amp; Embedded Programming</li>
                    <li>Mobile Development (Kotlin, Jetpack)</li>
                    <li>Cloud, DevOps &amp; automation</li>
                    <li>Software engineering foundations</li>
                </ul>
                <h3 className="features-title">Features:</h3>
                <ul className="outcomes-list">
                    <li>Blended learning (SCORM + ILT)</li>
                    <li>Hands-on labs and real-case simulations</li>
                    <li>Pre-/post-assessment with skill progression</li>
                    <li>Engagement analytics</li>
                    <li>HRDC Claimable Training (Malaysia only)</li>
                </ul>
                <p className="highlight">
                    📌 Over a decade of onboarding success for manufacturing, telecom, and
                    banking enterprises.
                </p>
                <a href="/solutions/tna" className="primary-btn text-white">
                    Explore Technology Programs
                </a>
            </section>

            <section className="tech-stack-sectionb">
                <div className="container text-center">
                    <h2>Technology Stack Programs</h2>
                    <h4>End-to-end skill mastery for technical teams.</h4>
                    <p>
                        Our Technology Stack Programs help engineers build mastery across complete
                        domains, not isolated modules.
                    </p>
                    <p className="stack-line">
                        <strong>Embedded Linux Stack:</strong>
                        Boot → Kernel → Drivers → Yocto → Debugging
                    </p>
                    <p className="stack-line">
                        <strong>AI Stack:</strong>
                        Python → ML → DL → GenAI → LangChain → Autogen
                    </p>
                    <p className="stack-line">
                        <strong>Mobile Stack:</strong>
                        Kotlin → Jetpack → Compose → Optimization → CI/CD
                    </p>
                    <h4 className="mt-4">Outcomes</h4>
                    <ul className="outcomes-list">
                        <li>Deeper engineering autonomy</li>
                        <li>Reduced dependency on external vendors</li>
                        <li>Consistent skill standards across teams</li>
                    </ul>
                    <a href="/solutions/technology-stacks" className="tech-btn text-white">
                        See Technical Stacks
                    </a>
                </div>
            </section>

            <section className="onboarding-section listStyle bgBlue">
                <h2>Professional Development Stack</h2>
                <h4>Human capability for engineering-driven organizations.</h4>
                <p className="intro">
                    Technical success requires strong human capability. Our Professional Development Stack strengthens:
                </p>
                <ul className="outcomes-list">
                    <li>mindset & adaptability</li>
                    <li>communication & influence</li>
                    <li>collaboration & emotional intelligence</li>
                    <li>productivity & self-management</li>
                    <li>team enablement & leadership
                    </li>
                </ul>

                <p className="highlight">
                    This stack is designed for <strong>engineers, analysts, managers, and cross-functional teams</strong> across industries.
                </p>
                <a href="/solutions/tna" className="primary-btn text-white">
                    Explore Professional Development
                </a>
            </section>


            <section className="onboarding-section-1 listStyle">
                <h2>Training Needs Assessment & Skill Matrix</h2>
                <h4>Measure. Benchmark. Transform.</h4>
                <p className="intro">
                    We help organizations evaluate capability objectively through:

                </p>
                <ul className="outcomes-list witthautoStyle">
                    <li>role-based skills mapping</li>
                    <li>engineering vs non-engineering segmentation</li>
                    <li>prerequisite tracking</li>
                    <li>gap analysis</li>
                    <li>custom development roadmap</li>
                    <li>data-driven reporting</li>

                </ul>

                <p className="highlight">
                    This brings clarity to your training needs assessment, customized training plans, and professional development training roadmap
                </p>
                <a href="/solutions/tna" className="primary-btn text-white">
                    Build Your Skill Matrix
                </a>
            </section>


            <section className="consulting-section">
                <div className="consulting-container">
                    <h2>Consulting Services</h2>
                    <p className="consulting-subtitle">
                        From learning to implementation, led by practitioners.
                    </p>
                    <p className="consulting-intro">
                        We extend our learning impact into execution through domain-specific
                        consulting:
                    </p>
                    <div className="consulting-list">
                        <div className="consulting-item">
                            <h3>Embedded Linux Consulting</h3>
                            <p>Kernel, BSP, drivers, Yocto, debugging</p>
                            <span>
                                → Ideal for manufacturing, embedded, IoT, and device companies.
                            </span>
                        </div>
                        <div className="consulting-item">
                            <h3>AI Consulting</h3>
                            <p>GenAI workflows, LLM integration, LangChain, automation</p>
                            <span>→ Ideal for telco, software, and digital banking.</span>
                        </div>
                        <div className="consulting-item">
                            <h3>Mobile Development Consulting</h3>
                            <p>Android framework, Kotlin, Jetpack, performance optimization</p>
                            <span>→ Ideal for fintech, telco, and mobile-first enterprises.</span>
                        </div>
                    </div>
                    <p className="consulting-footer">
                        All consulting engagements use our engineering-first approach:
                        <br />
                        <strong>
                            practitioner-led, system-aware, and designed for measurable capability
                            uplift.
                        </strong>
                    </p>
                    <a href="/solutions/consulting" className="primary-btn text-white">
                        View Consulting Services
                    </a>
                </div>
            </section>


            <section className="onboarding-section-1 listStyle">
                <h2>Scaled Agile Certification (SAFe®) - Bronze Partner</h2>
                <h4>Enterprise agility for multi-industry transformation.</h4>
                <p className="intro">
                    As an Official <strong>Scaled Agile Bronze Partner</strong>, we deliver SAFe® certification programs for manufacturing, telecom, banking, and large-scale engineering organizations. Popular certifications:
                </p>
                <ul className="outcomes-list witthautoStyle">
                    <li>SAFe® 6.0 Training</li>
                    <li>Leading SAFe (SAFe Agilist)</li>
                    <li>SAFe Scrum Master (SSM)</li>
                    <li>SAFe Advanced Scrum Master (SASM)</li>
                    <li>SAFe DevOps Practitioner</li>
                    <li>SAFe for Teams</li>
                    <li>SAFe Release Train Engineer
                    </li>
                    <li>SAFe Agile Product Management</li>
                </ul>
                <h3 className="features-title">Features:</h3>
                <ul className="outcomes-list witthautoStyle">
                    <li>delivered by certified SAFe® trainers</li>
                    <li>private corporate batches</li>
                    <li><strong>HRDC Claimable Training</strong> (Malaysia only)</li>
                </ul>
                <a href="/solutions/tna" className="primary-btn text-white">
                    Explore SAFe® Certifications
                </a>
            </section>

            <section className="onboarding-section listStyle bgBlue">
                <h2>Why Organizations Choose Timmins</h2>
                <ul className="outcomes-list witthautoStyle">
                    <li>practitioner-led, engineering-grade programs</li>
                    <li>relevant across industries (manufacturing, telecom, banking, engineering)</li>
                    <li>5,000+ professionals trained</li>
                    <li>200+ customized programs</li>
                    <li>100+ global clients
                    </li>
                    <li>HRDC-Claimable in Malaysia</li>
                    <li>measurable impact and capability uplift</li>
                </ul>

                <p className="highlight">
                    <i>“We don’t just teach skills. We build engineers, teams, and systems.”</i>
                </p>
            </section>



            <section className="onboarding-section-1">
                <h2>Build Capability With Us</h2>
                <p>Let’s design a capability roadmap that fits your teams and industry.</p>
                <br />

                <div className="button-row">
                    <a href="/solutions/consulting" className="btn-primary text-white">
                        For Companies – Explore Solutions
                    </a>
                    <a href="/courses" className="btn-secondary">
                        For Individuals – Browse Public Classes
                    </a>
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
    )
}

export default page