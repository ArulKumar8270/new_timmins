import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

const page = () => {
    return (
        <>

            <Header />

            <div className="section-bg hero-bg">
                {/* Start Bredcrumbs Area */}
                <section
                    className="ed-breadcrumbs background-image-2"
                    style={{ backgroundImage: 'url("assets/images/breadcrumbs-bg.png")' }}
                >
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="ed-breadcrumbs__content">
                                    <h3 className="ed-breadcrumbs__title-2">About Us</h3>
                                    <ul className="ed-breadcrumbs__menu">
                                        <li className="active">
                                            <a href="index.html">Home</a>
                                        </li>
                                        <li>/</li>
                                        <li>ABOUT US</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Bredcrumbs Area */}
            </div>


            {/* Start Why Choose Area */}
            <section className="case-impact">
                <div className="container">
                    {/* Header */}
                    <div className="text-center mb-5">
                        <h2 className="impact-title">Real Results. Proven Impact.</h2>
                        <p className="impact-subtitle">
                            From semiconductors to digital banking, Timmins Training Consulting
                            helps organizations across Asia and North America build advanced tech
                            capability — through engineered learning solutions, AI consulting, 5G
                            certification programs, embedded systems training, and technical
                            upskilling designed for real-world outcomes.
                        </p>
                    </div>
                    {/* Stats */}
                    <div className="row text-center impact-stats">
                        <div className="col-md-4">
                            <div className="stat-card">
                                <h3>10+</h3>
                                <p>Years of Partnerships</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="stat-card">
                                <h3>5,000+</h3>
                                <p>Professionals Trained</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="stat-card">
                                <h3>200+</h3>
                                <p>Programs Delivered</p>
                            </div>
                        </div>
                    </div>
                    {/* Content Box */}
                    <div className="impact-card mt-5">
                        <p className="impact-quote">
                            Every transformation story begins with a simple principle:
                            <strong>real capabilities are built through real practice.</strong>
                        </p>
                        <p>
                            We partner deeply with engineering and business teams to understand
                            their systems, challenges, and goals. Then, we co-create learning and
                            consulting programs that deliver measurable, long-term impact.
                        </p>
                        <p>
                            Whether it’s AI consultation for banking, embedded Linux consulting, 5G
                            R&amp;D enablement, or a fully customized onboarding academy, our
                            approach blends <strong>practitioner-led expertise</strong> with
                            <strong>outcome-driven design</strong>.
                        </p>
                        {/* Services */}
                        <div className="impact-tags">
                            <span>AI Consulting</span>
                            <span>Embedded Systems Training</span>
                            <span>5G Technician Training</span>
                            <span>Onboarding Academy</span>
                        </div>
                    </div>
                </div>
            </section>


            <section className="case-study-section section-gap
            ">
                <div className="container">
                    <div className="row align-items-start g-4">
                        {/* Left Content */}
                        <div className="col-lg-8">

                            <h2 className="fw-bold mt-2">Fresh Graduate Onboarding</h2>
                            <p className="text-muted">
                                <em>(Confidential US-Based Semiconductor Company)</em>
                            </p>
                            <p className="mt-3">
                                For over a decade, Timmins has partnered with a leading US-based
                                semiconductor company to build a global onboarding academy for fresh
                                graduates entering complex engineering roles.
                            </p>
                            <p>
                                Hundreds of engineers each year are trained in Embedded Linux,
                                Android, 5G, RF, AI fundamentals, and chipset engineering through a
                                rigorous, multi-phase curriculum.
                            </p>
                            <h6 className="fw-semibold mt-4">Our role covers:</h6>
                            <ul className="list-unstyled role-list">
                                <li>✔ Skill matrix mapping &amp; technical readiness assessments</li>
                                <li>
                                    ✔ Customized bootcamps for embedded, mobile, and connectivity
                                    engineering
                                </li>
                                <li>✔ Post-assessment analytics &amp; performance dashboards</li>
                                <li>✔ Outcome validation and team-level reporting</li>
                            </ul>
                            <div className="quote-box mt-4">
                                <p>
                                    “Significant skill development, high engagement, and positive
                                    feedback — graduates demonstrated a 50% improvement in key technical
                                    areas, becoming industry-ready professionals.”
                                </p>
                                <span>— Timmins Training Report</span>
                            </div>
                        </div>
                        {/* Right Highlights Card */}
                        <div className="col-lg-4">
                            <div className="highlight-card">
                                <h5 className="fw-bold mb-3">Key Highlights</h5>
                                <ul className="list-unstyled highlight-list">
                                    <li>
                                        <strong>10 Years</strong>
                                        <br />
                                        Partnership across Malaysia, India, USA
                                    </li>
                                    <li>
                                        <strong>3,000+</strong>
                                        <br />
                                        Engineers trained
                                    </li>
                                    <li>
                                        <strong>50%</strong>
                                        <br />
                                        Average capability improvement
                                    </li>
                                    <li>
                                        <strong>4.5 – 5.0</strong>
                                        <br />
                                        Participant rating
                                    </li>
                                </ul>
                                <div className="ed-hero__btn ed-btn">
                                    <a href="#">
                                        Discuss Similar Onboarding Program
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="case-study-section py-5">
                <div className="container">
                    <div className="row align-items-start g-4">
                        {/* Left Content */}
                        <div className="col-lg-8">

                            <h2 className="fw-bold mt-2">DBS Bank – AI Transformation Journey</h2>
                            <p className="mt-3">
                                A seven-year partnership supporting one of Asia’s most innovative
                                banks in adopting Artificial Intelligence at scale.
                            </p>
                            <p>
                                Timmins designed and delivered a multi-phase transformation covering
                                advanced analytics, applied AI, and generative AI adoption across both
                                technical and business teams.
                            </p>
                            <h6 className="fw-semibold mt-4">Transformation Focus Areas:</h6>
                            <ul className="list-unstyled role-list">
                                <li>✔ Data analytics &amp; machine learning</li>
                                <li>✔ Applied AI for risk, compliance, and fraud detection</li>
                                <li>✔ Generative AI workflow integration</li>
                                <li>✔ Capability building for technical &amp; business roles</li>
                            </ul>
                            <p className="mt-4">
                                This long-term AI transformation helped thousands of employees embed
                                data-driven decision-making into their daily operations.
                            </p>
                        </div>
                        {/* Right Highlights Card */}
                        <div className="col-lg-4">
                            <div className="highlight-card">
                                <h5 className="fw-bold mb-3">Highlights</h5>
                                <ul className="list-unstyled highlight-list">
                                    <li>
                                        <strong>7 Years</strong>
                                        <br />
                                        Long-term AI partnership
                                    </li>
                                    <li>
                                        <strong>1,200+</strong>
                                        <br />
                                        Participants trained
                                    </li>
                                    <li>
                                        <strong>80%</strong>
                                        <br />
                                        Skill improvement
                                    </li>
                                </ul>
                                <div className="ed-hero__btn ed-btn">
                                    <a href="#">
                                        Discuss Similar Onboarding Program
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="case-study-section py-5">
                <div className="container">
                    <div className="row align-items-start g-4">
                        {/* Left Content */}
                        <div className="col-lg-8">

                            <h2 className="fw-bold mt-2">
                                Citigroup – AI for Innovation &amp; Compliance
                            </h2>
                            <p className="mt-3">
                                Citi partnered with Timmins to strengthen analytics, automation, and
                                AI capability across compliance and operations teams.
                            </p>
                            <p>
                                Across six batches, participants improved from
                                <strong>54%</strong> to <strong>88%</strong> in analytics performance
                                and reported high readiness to deploy AI-driven solutions for real
                                banking use cases.
                            </p>
                        </div>
                        {/* Right Highlights Card */}
                        <div className="col-lg-4">
                            <div className="highlight-card">
                                <h5 className="fw-bold mb-3">Highlights</h5>
                                <ul className="list-unstyled highlight-list">
                                    <li>
                                        <strong>118</strong>
                                        <br />
                                        Participants trained
                                    </li>
                                    <li>
                                        <strong>54% → 88%</strong>
                                        <br />
                                        Performance improvement
                                    </li>
                                    <li>
                                        <strong>4.7 / 5</strong>
                                        <br />
                                        Participant satisfaction
                                    </li>
                                </ul>
                                <div className="ed-hero__btn ed-btn">
                                    <a href="#">
                                        Discuss Similar Onboarding Program
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="case-study-premium py-5">
                <div className="container">
                    <div className="row g-4 align-items-center">
                        {/* Left Content */}
                        <div className="col-lg-7">

                            <h2 className="fw-bold mb-3">
                                Motorola – Mobile Development Enablement
                            </h2>
                            <p className="lead text-muted">
                                Since 2018, Timmins has helped a global device manufacturer accelerate
                                internal Android mobile development capability.
                            </p>
                            <p>
                                This engagement enabled engineering teams to independently build and
                                optimize Android handsets (<strong>Android 10 to 14</strong>) without
                                reliance on external vendors.
                            </p>
                            <h6 className="fw-semibold mt-4">Training Areas:</h6>
                            <div className="tech-tags">
                                <span>Linux &amp; SELinux</span>
                                <span>Kotlin</span>
                                <span>Jetpack Compose</span>
                                <span>Mobile Architecture</span>
                                <span>Performance Optimization</span>
                                <span>System Integration</span>
                            </div>
                        </div>
                        {/* Right Card */}
                        <div className="col-lg-5">
                            <div className="case-metrics-card">
                                <h5 className="fw-bold mb-4">Key Highlights</h5>
                                <div className="metric">
                                    <h3>600+</h3>
                                    <p>Engineers trained</p>
                                </div>
                                <div className="metric">
                                    <h3>60%</h3>
                                    <p>Faster project readiness</p>
                                </div>
                                <div className="metric">
                                    <h3>8 Years</h3>
                                    <p>Long-term partnership</p>
                                </div>
                                <div className="ed-hero__btn ed-btn">
                                    <a href="#">
                                        📘 [Request Case Study Copy]
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>





            <section className="case-study-rd">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        {/* Left Content */}
                        <div className="col-lg-7">

                            <h1 className="rd-title">5G SoC R&amp;D Enablement</h1>
                            <p className="rd-subtitle">(Confidential Semiconductor Client)</p>
                            <p className="rd-intro">
                                Timmins supported global R&amp;D teams in strengthening
                                <strong>5G SoC architecture and testing capability</strong>, enabling
                                faster, higher-quality development of next-generation 5G devices.
                            </p>
                            <h6 className="fw-semibold mt-4">Training &amp; Consulting Scope</h6>
                            <div className="rd-scope">
                                <div>5G Modem Design Fundamentals</div>
                                <div>Power Optimization Strategies</div>
                                <div>mmWave Integration</div>
                                <div>RF Testing Workflows</div>
                            </div>
                            <div className="ed-hero__btn ed-btn">
                                <a href="#">
                                    📘 Download Full Case Study
                                </a>
                            </div>
                        </div>
                        {/* Right Impact Card */}
                        <div className="col-lg-5">
                            <div className="rd-impact">
                                <h4 className="fw-bold mb-4">Key Outcomes</h4>
                                <div className="rd-outcome">
                                    <h3>Faster</h3>
                                    <p>Release Cycles</p>
                                </div>
                                <div className="rd-outcome">
                                    <h3>Higher</h3>
                                    <p>Engineering Quality</p>
                                </div>
                                <div className="rd-outcome">
                                    <h3>Global</h3>
                                    <p>Multi-site Implementation</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            <section className="ed-call-action position-relative section-gap pb-0">
                <div className="container ed-container">
                    <div className="ed-call-action__inner position-relative">
                        <div className="ed-call-action__shapes">
                            <img
                                className="ed-call-action__shape-1 rotate-ani"
                                src="/assets/images/call-action/call-action-1/shape-1.svg"
                                alt="shape-1"
                            />
                            <img
                                className="ed-call-action__shape-2"
                                src="/assets/images/call-action/call-action-1/shape-2.svg"
                                alt="shape-2"
                            />
                            <img
                                className="ed-call-action__shape-3 updown-ani"
                                src="/assets/images/call-action/call-action-1/shape-3.svg"
                                alt="shape-3"
                            />
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-12">
                                <div className="ed-call-action__img">
                                    <img
                                        src="/assets/New_images/final cta section.jpg"
                                        alt="call-action-img"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6 col-12 order-class">
                                <div className="ed-call-action__content">
                                    <div className="ed-section-head">
                                        <h3 className="ed-section-head__title">
                                            We Don’t Just Train. We Transform.
                                        </h3>
                                        <p className="ed-section-head__text">
                                            Every story above shares the same DNA:
                                        </p>
                                    </div>
                                    <div className="ed-about__feature">
                                        <ul className="ed-about__features-list">
                                            <li>
                                                <img
                                                    src="assets/images/icons/icon-check-blue.svg"
                                                    alt="icon-check-blue"
                                                />
                                                Co-creation with client teams and SMEs
                                            </li>
                                            <li>
                                                <img
                                                    src="assets/images/icons/icon-check-blue.svg"
                                                    alt="icon-check-blue"
                                                />
                                                Hands-on, real-world learning
                                            </li>
                                            <li>
                                                <img
                                                    src="assets/images/icons/icon-check-blue.svg"
                                                    alt="icon-check-blue"
                                                />
                                                Continuous measurement and engagement analytics
                                            </li>
                                            <li>
                                                <img
                                                    src="assets/images/icons/icon-check-blue.svg"
                                                    alt="icon-check-blue"
                                                />
                                                Measurable outcomes that align with business goals
                                            </li>


                                        </ul>

                                    </div>
                                    <div className="text-decoration-underline">
                                        <a href="#"> [Book a Consultation]</a>
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
