import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Script from 'next/script'

export const metadata = {
    title: "About Timmins – Advanced Tech Capability Partner Led by Real Engineers (HRDC Registered)",
    description: "Timmins is a boutique, practitioner-led advanced tech training and capability partner for engineering, manufacturing, and financial services teams globally. We deliver industry-grade programs in Embedded Systems, AI/ML, 5G, Cloud, and DevOps. All HRDC-claimable for Malaysian companies and trusted by 5,000+ professionals.",
    keywords: "Corporate training provider, Corporate training Malaysia, Customized training, AI training Malaysia, Embedded systems training",
    openGraph: {
        title: "About Timmins – Advanced Tech Capability Partner Led by Real Engineers",
        description: "Timmins is a boutique, practitioner-led advanced tech training and capability partner for engineering, manufacturing, and financial services teams globally.",
        url: "https://timmins-consulting.com/about",
        siteName: "Timmins Training Consulting",
        type: "website",
    },
}

const schemaData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Timmins – Advanced Tech Capability Partner",
    "description": "Timmins is a boutique, practitioner-led advanced tech capability partner serving engineering, manufacturing, and financial services organizations across ASEAN and North America. We deliver industry-grade programs in Embedded Systems, AI/ML, Cloud, 5G, and DevOps.",
    "url": "https://timmins-consulting.com/about",
    "mainEntity": {
        "@type": ["Organization", "EducationalOrganization"],
        "name": "Timmins Training Consulting",
        "alternateName": "Timmins",
        "url": "https://timmins-consulting.com",
        "logo": "https://timmins-consulting.com/assets/logo.png",
        "foundingDate": "2015",
        "foundingLocation": "Malaysia",
        "description": "A boutique advanced tech capability partner delivering practitioner-led engineering training in Embedded Systems, AI/ML, Cloud, 5G, and Telecom for organizations across ASEAN and North America.",
        "areaServed": [
            "Malaysia",
            "Indonesia",
            "Singapore",
            "Vietnam",
            "Thailand",
            "Philippines",
            "United States",
            "Canada"
        ],
        "sameAs": [
            "https://www.linkedin.com/company/timmins-training-consulting/"
        ],
        "award": [
            {
                "@type": "Award",
                "name": "HRDC Registered Training Provider",
                "description": "Certified by Malaysia's Human Resource Development Corporation (HRD Corp). HRDC No: 1166573-D."
            }
        ]
    },
    "hasPart": [
        {
            "@type": "Event",
            "name": "Timmins 10-Year Anniversary",
            "startDate": "2025-01-01",
            "eventStatus": "https://schema.org/EventScheduled",
            "description": "Celebrating a decade of practitioner-led engineering capability building across ASEAN and North America.",
            "location": {
                "@type": "Place",
                "name": "ASEAN & North America",
                "address": "Virtual and onsite delivery across multiple regions"
            }
        }
    ]
}

const page = () => {
    return (
        <>
            <Script
                id="about-page-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <Header />



            <div className="section-bg hero-bg">
                {/* Start Bredcrumbs Area */}
                <section
                    className="ed-breadcrumbs background-image"
                    style={{ background: '#eaf4fa' }}
                >
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="ed-breadcrumbs__content">
                                    <h3 className="ed-breadcrumbs__title">About Us</h3>
                                    <ul className="ed-breadcrumbs__menu">
                                        <li className="active">
                                            <a href="#">Home</a>
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

            <>
                {/* Start About Area */}
                <>
                    {/* About Timmins Training */}
                    <section className="about-timmins py-5">
                        <div className="container">
                            <div className="text-center mb-5">
                                <h1 className="fw-bold">About Timmins Training Consulting</h1>
                            </div>
                            <div className="about-card">
                                <div className="row align-items-center g-4">
                                    {/* Left Image */}
                                    <div className="col-lg-4 col-md-12 text-center">

                                        <img
                                            src="/assets/images/about/about-3/about-img.png"
                                            alt="Timmins Consulting"
                                            className="img-fluid about-img"
                                        />
                                    </div>
                                    {/* Right Content */}
                                    <div className="col-lg-7 col-md-12">
                                        <p>
                                            <strong>Timmins</strong> is a boutique advanced tech capability
                                            partner that helps engineering, manufacturing, and banking
                                            organizations build future-ready teams through
                                            <strong> practitioner-led, industry-grade training </strong>
                                            and advisory.
                                        </p>
                                        <p>
                                            We specialize in closing the gap between
                                            <strong> emerging technologies </strong> and real-world capability,
                                            from AI, Embedded Systems, Cloud, 5G, to modern software{" "}
                                            <strong> engineering</strong>.
                                        </p>
                                        <p>
                                            Our programs are <strong>hands-on</strong>,{" "}
                                            <strong>customized</strong>, and designed to create{" "}
                                            <strong>measurable improvement </strong>
                                            in how teams think, build, and deliver.
                                        </p>
                                        <p>
                                            For the <strong>past decade</strong>, we’ve supported thousands of
                                            engineers, developers, analysts, and
                                            <strong> technical leaders</strong> across Asia.
                                        </p>
                                        <p className="fw-semibold">
                                            All with one commitment: training that actually
                                            <span className="highlight"> transforms capability</span>, not just
                                            fulfills hours.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </>



                {/* Start Why Choose Area */}
                <section className="purpose-section">
                    <div className="purpose-container">

                        {/* Right Content */}
                        <div className="purpose-content">

                            <h2>
                                Our Purpose
                            </h2>
                            <p>
                                Timmins was founded to tackle a clear problem, which was that most
                                corporate training was generic, outdated, and disconnected from the pace
                                of modern technology.
                            </p>
                            <p>
                                We set out to create learning that is current, engineering-grade, and
                                designed with industry practitioners. We ensure every participant walks
                                away with skills they can apply on the job immediately, not someday.
                            </p>

                        </div>
                    </div>
                </section>


                <>
                    {/* Our Values Section */}
                    <section className="our-values-2 section-gap">
                        <div className="container">
                            <div className="text-center mb-5">
                                <h2 className="fw-bold">Our Values</h2>
                                <p className="text-muted">
                                    What drives the way we work and deliver impact
                                </p>
                            </div>
                            <div className="row g-4">
                                {/* Growth */}
                                <div className="col-lg-6 col-md-6 col-12">
                                    <div className="value-card h-100">
                                        <div className="icon growth">
                                            <i className="bi bi-graph-up-arrow" />
                                        </div>
                                        <h5>Growth</h5>
                                        <p>
                                            We measure success by tangible uplift in skill, capability, and
                                            performance — not attendance.
                                        </p>
                                    </div>
                                </div>
                                {/* Co-Creation */}
                                <div className="col-lg-6 col-md-6 col-12">
                                    <div className="value-card h-100">
                                        <div className="icon cocreation">
                                            <i className="bi bi-lightbulb" />
                                        </div>
                                        <h5>Co-Creation</h5>
                                        <p>
                                            Every solution is crafted together with clients so it aligns with
                                            real engineering and business needs.
                                        </p>
                                    </div>
                                </div>
                                {/* Collaboration */}
                                <div className="col-lg-6 col-md-6 col-12">
                                    <div className="value-card h-100">
                                        <div className="icon collaboration">
                                            <i className="bi bi-people" />
                                        </div>
                                        <h5>Collaboration</h5>
                                        <p>
                                            We work side-by-side with L&amp;D leaders, SMEs, and teams to
                                            build long-lasting learning ecosystems.
                                        </p>
                                    </div>
                                </div>
                                {/* Excellence */}
                                <div className="col-lg-6 col-md-6 col-12">
                                    <div className="value-card h-100">
                                        <div className="icon excellence">
                                            <i className="bi bi-award" />
                                        </div>
                                        <h5>Excellence</h5>
                                        <p>
                                            All trainers are practitioners with deep field expertise.
                                            Engineers first, facilitators second.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </>




                <section className="mission-only">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-9 text-center">

                                <h2 className="mission-title">
                                    OUR MISSION
                                </h2>
                                <span className="mission-tag">OUR MISSION IS SIMPLE:</span>
                                <p className="mission-text">

                                    <strong>
                                        To enable organizations to adopt and excel in emerging technologies
                                    </strong>
                                    so they remain competitive in the global tech landscape.
                                </p>
                                <p className="mission-text">
                                    We do this by delivering advanced, practitioner-led training,
                                    supported by advisory and capability-building frameworks tailored for
                                    engineering-intensive industries.
                                </p>

                            </div>
                        </div>
                    </div>
                </section>




                {/* Start Why Choose Area */}
                <section className="approach-section section-gap">
                    <div className="container">
                        {/* Header */}
                        <div className="text-center mb-5">
                            <span className="approach-tag">OUR APPROACH</span>
                            <h2 className="approach-title">
                                Capability Building as a System,
                                <br />
                                Not a One-Off Event
                            </h2>
                            <p className="approach-intro">
                                We treat capability building as a system, not a one-off event.
                            </p>
                        </div>
                        {/* Vertical Process */}
                        <div className="approach-timeline">
                            {/* Step 1 */}
                            <div className="approach-step">
                                <div className="step-dot">1</div>
                                <div className="step-content">
                                    <h4>Context First</h4>
                                    <p>
                                        We begin with an assessment of your business needs, team readiness,
                                        and required skill depth.
                                    </p>
                                </div>
                            </div>
                            {/* Step 2 */}
                            <div className="approach-step">
                                <div className="step-dot">2</div>
                                <div className="step-content">
                                    <h4>Customized, Engineering-Grade Design</h4>
                                    <p>
                                        Programs are tailored with hands-on labs, real-world cases, and
                                        tools used by actual practitioners. Teams learn by doing, not by
                                        listening.
                                    </p>
                                </div>
                            </div>
                            {/* Step 3 */}
                            <div className="approach-step">
                                <div className="step-dot">3</div>
                                <div className="step-content">
                                    <h4>Guided by Practitioners</h4>
                                    <p>
                                        Every course is led by engineers with real field experience in AI,
                                        embedded systems, telecom, software, and cloud infrastructure.
                                    </p>
                                </div>
                            </div>
                            {/* Step 4 */}
                            <div className="approach-step">
                                <div className="step-dot">4</div>
                                <div className="step-content">
                                    <h4>Impact, Not Guesswork</h4>
                                    <p>
                                        Post-training, we deliver measurable insights: capability uplift,
                                        learning gaps, and recommendations for next-step development.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Footer Note */}
                        <div className="approach-footer">
                            This systematic approach ensures your organization builds capability with
                            clarity, confidence, and sustained momentum.
                        </div>
                    </div>
                </section>

                <>
                    {/* 10 Years of Timmins Section */}
                    <section className="timmins-journey section-gap">
                        <div className="container">
                            <div className="row align-items-center">
                                {/* Left Content */}
                                <div className="col-lg-8 col-md-12">
                                    <h2 className="fw-bold mb-3">
                                        10 Years of Timmins: Engineering Capability, Built Over a Decade
                                    </h2>
                                    <p className="text-muted">
                                        From a small consulting practice in Malaysia to a capability partner
                                        trusted in 10+ countries, Timmins has trained over
                                        <strong>5,000 professionals</strong> across engineering,
                                        manufacturing, and financial services.
                                    </p>
                                    <p className="text-muted">
                                        Our work spans advanced domains including
                                        <strong>
                                            AI, 5G, Embedded Systems, Cloud, Data Analytics, and enterprise
                                            software engineering
                                        </strong>
                                        .
                                    </p>
                                    <p className="fw-semibold">
                                        Ten years later, our belief remains the same: the right training can
                                        transform an entire organization.
                                    </p>
                                    <div className="ed-hero__btn ed-btn">
                                        <a href="#">
                                            For Companies – Explore Solutions
                                        </a>
                                    </div>

                                </div>

                                {/* Right Highlight Box */}
                                <div className="col-lg-4 col-md-12 mt-4 mt-lg-0">
                                    <div className="stats-box text-center">
                                        <h1>10+</h1>
                                        <p>Countries</p>
                                        <h1>5000+</h1>
                                        <p>Professionals Trained</p>
                                        <h1>10</h1>
                                        <p>Years of Impact</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </>


                <>
                    {/* HRDC Claimable Section */}
                    <section className="hrdc-section-2 section-gap">
                        <div className="container">
                            <div className="row align-items-center g-4">
                                {/* Left Content */}
                                <div className="col-lg-8 col-md-12">
                                    <div className="d-flex align-items-start gap-3 mb-3">
                                        <div className="hrdc-icon">
                                            <i className="bi bi-award" />
                                        </div>
                                        <h2 className="fw-bold mb-0">
                                            HRDC-Claimable
                                            <p className="text-muted fs-5"><b>(For Malaysian Clients)</b></p>
                                        </h2>
                                    </div>
                                    <p className="text-muted">
                                        All Timmins programs are fully <strong>HRDC-claimable</strong> for
                                        Malaysian organizations. We support your team with end-to-end
                                        documentation, attendance tracking, and reporting, so you can stay
                                        focused on capability building while compliance stays effortless.
                                    </p>
                                    <p className="small text-muted fst-italic">
                                        (Note: HRDC eligibility applies to Malaysian employers only.)
                                    </p>
                                    <hr />
                                    <h5 className="fw-semibold mt-4">
                                        We’re more than a corporate training provider, we’re your capability
                                        partner.
                                    </h5>
                                    <p className="text-muted">
                                        Whether you need <strong>AI training</strong>,{" "}
                                        <strong>embedded systems training</strong>, or fully customized
                                        corporate training; we help your teams build real skills for the
                                        technologies shaping tomorrow.
                                    </p>
                                    <div className="ed-hero__btn ed-btn">
                                        <a href="#">
                                            For Companies – Explore Solutions
                                        </a>
                                    </div>
                                </div>
                                {/* Right Logo / Badge */}
                                <div className="col-lg-4 col-md-12 text-center">
                                    <div>
                                        <img
                                            src="/assets/New_images/badge.png"
                                            alt="HRDC Claimable"
                                            className="img-fluid"
                                        />
                                    </div>
                                </div>


                            </div>
                        </div>
                    </section>
                </>


                <Footer />









            </>





















        </>
    )
}

export default page
