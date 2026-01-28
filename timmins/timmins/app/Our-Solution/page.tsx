import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

const page = () => {
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
                                                    1. What is Scaled Agile Certification (SAFe)?
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
                                                        Scaled Agile Certification (SAFe) is a globally recognized framework for implementing agile at enterprise scale. Companies search for it to improve program delivery, cross-team collaboration, and organizational agility.
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
                                                    2. Is SAFe Scrum Master Certification worth it?
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
                                                        Yes. SAFe Scrum Master Certification is valuable for professionals working in enterprises with complex, multi-team environments. It enhances career opportunities and qualifies you for roles in large-scale agile transformations.
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
                                                    3. What is Embedded Linux used for?
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
                                                        Embedded Linux is widely used in IoT devices, industrial automation, automotive systems, consumer electronics, and medical devices. Companies search this when looking for engineers who understand kernel, drivers, and system-level programming.
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
                                                    4. What skills are required for Embedded Linux development?

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
                                                        Common prerequisites include C programming, Linux basics, shell scripting, cross-compiling, kernel concepts, and Yocto/Buildroot exposure.
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
                                                    5. What is a Skill Matrix in training?
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
                                                        A skill matrix is a structured tool that maps team competencies, identifies skill gaps, and guides training planning. It’s often searched by L&D leaders planning technical upskilling.
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
                                                    6. How do I build a fresh graduate onboarding program for engineers?
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
                                                        Graduate onboarding programs should combine technical fundamentals, hands-on labs, SCORM modules, assessments, and supervised projects. Many engineering and banking companies search for this to accelerate talent readiness.
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
                                                    7. What is HRDC Claimable Training?
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
                                                        HRDC Claimable Training allows Malaysian employers to claim training costs under HRD Corp. (This applies only to Malaysian organizations.)
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
                                                    8. Does Timmins offer Customized Training?
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
                                                        Yes. We specialize in custom-designed capability programs based on technology stack, workflow, and team goals.
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
                                                    9. Does Timmins provide consulting, not just training?

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
                                                        Yes. We offer Embedded Linux Consulting, AI Consulting, and Mobile Development Consulting for organizations needing technical implementation support.
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
                                                    10. What is the difference between corporate training and customized training?
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
                                                        Corporate training usually refers to standardized programs delivered to many companies, while customized training is tailored specifically to your organization’s technology stack, workflows, skill gaps, and business goals. Customized programs deliver higher relevance and better capability outcomes for engineering-driven teams.
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

            <Footer />






        </>
    )
}

export default page