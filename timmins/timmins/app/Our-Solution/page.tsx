import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

const page = () => {
    return (
        <>
            <Header />

            <section className="solutions-hero">
                <div className="solutions-hero-overlay" />
                <div className="solutions-hero-content">
                    <h1>Our Solutions</h1>
                    <p className="hero-subtitle">
                        Building engineers, empowering teams, and enabling technology
                        transformation across industries.
                    </p>
                    <p className="hero-description">
                        Timmins is a practitioner-led advanced tech capability partner serving
                        engineering-driven organizations across manufacturing, semiconductor,
                        telecom, software, and banking.
                        <br />
                        <br />
                        We don’t deliver one-size-fits-all training. We build capability
                        (technical, human, and organizational) through structured learning,
                        domain-specific consulting, and industry-grade certification programs.
                    </p>
                    <a href="#solutions" className="hero-cta">
                        Explore Solutions
                    </a>
                </div>
            </section>

            <section className="solution-section onboarding">
                <div className="solution-container">
                    <div className="solution-content">
                        <h2>Fresh Graduate Onboarding Programs</h2>
                        <p className="solution-tagline">
                            From fresh talent to project-ready engineers.
                        </p>
                        <p>
                            We design onboarding programs that accelerate readiness for engineering,
                            tech, and operations roles across industries. Our multi-industry
                            curricula cover:
                        </p>
                        <ul className="solution-list">
                            <li>AI &amp; Machine Learning fundamentals</li>
                            <li>Embedded Linux &amp; Embedded Programming</li>
                            <li>Mobile Development (Kotlin, Jetpack)</li>
                            <li>Cloud, DevOps &amp; automation</li>
                            <li>Software engineering foundations</li>
                        </ul>
                        <h4 className="feature-title">Program Features</h4>
                        <ul className="solution-list">
                            <li>Blended learning (SCORM + ILT)</li>
                            <li>Hands-on labs and real-case simulations</li>
                            <li>Pre-/post-assessment with skill progression</li>
                            <li>Engagement analytics</li>
                            <li>HRDC Claimable Training (Malaysia only)</li>
                        </ul>
                        <p className="solution-highlight">
                            📌 Over a decade of onboarding success for manufacturing, telecom, and
                            banking enterprises.
                        </p>
                        <a href="/courses" className="solution-cta">
                            Explore Technology Programs
                        </a>
                    </div>
                </div>
            </section>

            <section className="solution-section tech-stack">
                <div className="solution-container">
                    <div className="solution-content">
                        <h2>Technology Stack Programs</h2>
                        <p className="solution-tagline">
                            End-to-end skill mastery for technical teams.
                        </p>
                        <p>
                            Our Technology Stack Programs help engineers build mastery across
                            complete domains — not isolated modules. Sample stacks include:
                        </p>
                        {/* STACK LIST */}
                        <div className="stack-list">
                            <div className="stack-card">
                                <h4>Embedded Linux Stack</h4>
                                <p>Boot → Kernel → Drivers → Yocto → Debugging</p>
                            </div>
                            <div className="stack-card">
                                <h4>AI Stack</h4>
                                <p>Python → ML → DL → GenAI → LangChain → Autogen</p>
                            </div>
                            <div className="stack-card">
                                <h4>Mobile Stack</h4>
                                <p>Kotlin → Jetpack → Compose → Optimization → CI/CD</p>
                            </div>
                        </div>
                        <h4 className="feature-title">Outcomes</h4>
                        <ul className="solution-list">
                            <li>Deeper engineering autonomy</li>
                            <li>Reduced dependency on external vendors</li>
                            <li>Consistent skill standards across teams</li>
                        </ul>
                        <a href="/solutions/technology-stacks" className="solution-cta">
                            See Technical Stacks
                        </a>
                    </div>
                </div>
            </section>

            <section className="solution-section professional-stack">
                <div className="solution-container">
                    <div className="solution-content">
                        <h2>Professional Development Stack</h2>
                        <p className="solution-tagline">
                            Human capability for engineering-driven organizations.
                        </p>
                        <p>
                            Technical success requires strong human capability. Our Professional
                            Development Stack strengthens:
                        </p>
                        <ul className="solution-list">
                            <li>Mindset &amp; adaptability</li>
                            <li>Communication &amp; influence</li>
                            <li>Collaboration &amp; emotional intelligence</li>
                            <li>Productivity &amp; self-management</li>
                            <li>Team enablement &amp; leadership</li>
                        </ul>
                        <p>
                            This stack is designed for engineers, analysts, managers, and
                            cross-functional teams across industries.
                        </p>
                        <a href="/courses" className="solution-cta">
                            Explore Professional Development
                        </a>
                    </div>
                </div>
            </section>

            <section className="solution-section skill-matrix">
                <div className="solution-container">
                    <div className="solution-content">
                        <h2>Training Needs Assessment &amp; Skill Matrix</h2>
                        <p className="solution-tagline">Measure. Benchmark. Transform.</p>
                        <p>We help organizations evaluate capability objectively through:</p>
                        <ul className="solution-list">
                            <li>Role-based skills mapping</li>
                            <li>Engineering vs non-engineering segmentation</li>
                            <li>Prerequisite tracking</li>
                            <li>Gap analysis</li>
                            <li>Custom development roadmap</li>
                            <li>Data-driven reporting</li>
                        </ul>
                        <p>
                            This brings clarity to your training needs assessment, customized
                            training plans, and professional development training roadmap.
                        </p>
                        <a href="/solutions/tna" className="solution-cta">
                            Build Your Skill Matrix
                        </a>
                    </div>
                </div>
            </section>

            <section className="solution-section consulting-services">
                <div className="solution-container">
                    <div className="solution-content">
                        <h2>Consulting Services</h2>
                        <p className="solution-tagline">
                            From learning to implementation, led by practitioners.
                        </p>
                        <p>
                            We extend our learning impact into execution through domain-specific
                            consulting:
                        </p>
                        {/* CONSULTING CARDS */}
                        <div className="consulting-list">
                            <div className="consulting-card">
                                <h4>Embedded Linux Consulting</h4>
                                <p>
                                    Kernel, BSP, drivers, Yocto, debugging
                                    <br />
                                    <span>
                                        Ideal for manufacturing, embedded, IoT, and device companies.
                                    </span>
                                </p>
                            </div>
                            <div className="consulting-card">
                                <h4>AI Consulting</h4>
                                <p>
                                    GenAI workflows, LLM integration, LangChain, automation
                                    <br />
                                    <span>Ideal for telco, software, and digital banking.</span>
                                </p>
                            </div>
                            <div className="consulting-card">
                                <h4>Mobile Development Consulting</h4>
                                <p>
                                    Android framework, Kotlin, Jetpack, performance optimization
                                    <br />
                                    <span>Ideal for fintech, telco, and mobile-first enterprises.</span>
                                </p>
                            </div>
                        </div>
                        <p className="solution-highlight">
                            All consulting engagements use our engineering-first approach:
                            practitioner-led, system-aware, and designed for measurable capability
                            uplift.
                        </p>
                        <a href="/solutions/consulting" className="solution-cta">
                            View Consulting Services
                        </a>
                    </div>
                </div>
            </section>

            <section className="solution-section scaled-agile">
                <div className="solution-container">
                    <div className="solution-content">
                        <h2>Scaled Agile Certification (SAFe®) – Bronze Partner</h2>
                        <p className="solution-tagline">
                            Enterprise agility for multi-industry transformation.
                        </p>
                        <p>
                            As an Official Scaled Agile Bronze Partner, we deliver SAFe®
                            certification programs for manufacturing, telecom, banking, and
                            large-scale engineering organizations. Popular certifications include:
                        </p>
                        {/* CERTIFICATION LIST */}
                        <ul className="solution-list">
                            <li>SAFe® 6.0 Training</li>
                            <li>Leading SAFe (SAFe Agilist)</li>
                            <li>SAFe Scrum Master (SSM)</li>
                            <li>SAFe Advanced Scrum Master (SASM)</li>
                            <li>SAFe DevOps Practitioner</li>
                            <li>SAFe for Teams</li>
                            <li>SAFe Release Train Engineer</li>
                            <li>SAFe Agile Product Management</li>
                        </ul>
                        <h4 className="feature-title">Program Features</h4>
                        <ul className="solution-list">
                            <li>Delivered by certified SAFe® trainers</li>
                            <li>Private corporate batches</li>
                            <li>HRDC Claimable Training (Malaysia only)</li>
                        </ul>
                        <a href="/solutions/agile" className="solution-cta">
                            Explore SAFe® Certifications
                        </a>
                    </div>
                </div>
            </section>

            <section className="solution-section why-timmins">
                <div className="solution-container">
                    <div className="solution-content">
                        <h2>Why Organizations Choose Timmins</h2>
                        {/* TRUST POINTS */}
                        <ul className="solution-list trust-list">
                            <li>Practitioner-led, engineering-grade programs</li>
                            <li>
                                Relevant across industries (manufacturing, telecom, banking,
                                engineering)
                            </li>
                            <li>5,000+ professionals trained</li>
                            <li>200+ customized programs</li>
                            <li>100+ global clients</li>
                            <li>HRDC-Claimable in Malaysia</li>
                            <li>Measurable impact and capability uplift</li>
                        </ul>
                        {/* QUOTE */}
                        <blockquote className="trust-quote">
                            “We don’t just teach skills. We build engineers, teams, and systems.”
                        </blockquote>
                        {/* CTA BLOCK */}
                        <div className="trust-cta">
                            <h3>Build Capability With Us</h3>
                            <p>
                                Let’s design a capability roadmap that fits your teams and industry.
                            </p>
                            <div className="trust-buttons">
                                <a href="/contact" className="solution-cta">
                                    Speak to Our Team
                                </a>
                                <a href="/courses" className="solution-cta secondary">
                                    Explore Courses
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="faq-section">
                <div className="solution-container">
                    <div className="faq-content">
                        <h2>Frequently Asked Questions</h2>
                        <div className="faq-item">
                            <h4>1. What is Scaled Agile Certification (SAFe)?</h4>
                            <p>
                                Scaled Agile Certification (SAFe) is a globally recognized framework
                                for implementing agile at enterprise scale. Organizations adopt SAFe
                                to improve program delivery, cross-team collaboration, and
                                organizational agility.
                            </p>
                        </div>
                        <div className="faq-item">
                            <h4>2. Is SAFe Scrum Master Certification worth it?</h4>
                            <p>
                                Yes. SAFe Scrum Master Certification is valuable for professionals
                                working in complex, multi-team enterprise environments. It enhances
                                career opportunities and prepares individuals for large-scale agile
                                transformations.
                            </p>
                        </div>
                        <div className="faq-item">
                            <h4>3. What is Embedded Linux used for?</h4>
                            <p>
                                Embedded Linux is widely used in IoT devices, industrial automation,
                                automotive systems, consumer electronics, and medical devices. It is
                                essential for engineers working with kernel, drivers, and system-level
                                programming.
                            </p>
                        </div>
                        <div className="faq-item">
                            <h4>4. What skills are required for Embedded Linux development?</h4>
                            <p>
                                Common prerequisites include C programming, Linux fundamentals, shell
                                scripting, cross-compiling, kernel concepts, and Yocto or Buildroot
                                exposure.
                            </p>
                        </div>
                        <div className="faq-item">
                            <h4>5. What is a Skill Matrix in training?</h4>
                            <p>
                                A skill matrix is a structured tool that maps team competencies,
                                identifies skill gaps, and supports data-driven training planning. It
                                is widely used by L&amp;D leaders for technical upskilling.
                            </p>
                        </div>
                        <div className="faq-item">
                            <h4>
                                6. How do I build a fresh graduate onboarding program for engineers?
                            </h4>
                            <p>
                                Graduate onboarding programs should combine technical fundamentals,
                                hands-on labs, SCORM modules, assessments, and supervised projects to
                                accelerate job readiness.
                            </p>
                        </div>
                        <div className="faq-item">
                            <h4>7. What is HRDC Claimable Training?</h4>
                            <p>
                                HRDC Claimable Training allows Malaysian employers to claim training
                                costs under HRD Corp. This applies only to Malaysian organizations.
                            </p>
                        </div>
                        <div className="faq-item">
                            <h4>8. Does Timmins offer Customized Training?</h4>
                            <p>
                                Yes. We specialize in custom-designed capability programs aligned to
                                your technology stack, workflows, and team objectives.
                            </p>
                        </div>
                        <div className="faq-item">
                            <h4>9. Does Timmins provide consulting, not just training?</h4>
                            <p>
                                Yes. We offer Embedded Linux Consulting, AI Consulting, and Mobile
                                Development Consulting for organizations requiring implementation
                                support.
                            </p>
                        </div>
                        <div className="faq-item">
                            <h4>
                                10. What is the difference between corporate training and customized
                                training?
                            </h4>
                            <p>
                                Corporate training is standardized and broad, while customized
                                training is tailored to your specific systems, roles, and business
                                outcomes—resulting in higher capability impact.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />










        </>
    )
}

export default page
