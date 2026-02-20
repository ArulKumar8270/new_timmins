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





            <>

                <section className="about-hero py-5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 text-center">

                                <h1 className="about-hero-title mb-3">
                                    About Timmins Training Consulting
                                </h1>

                                <p className="about-hero-desc">
                                    A boutique advanced tech capability partner helping teams turn technology
                                    into real-world delivery capability.
                                </p>

                            </div>
                        </div>
                    </div>
                </section>
                {/* Start About Area */}
                <>
                    {/* About Timmins Training */}
                    <section className="approach-section section-gap">
                        <div className="container">

                            <div className="about-card">
                                <div className="row align-items-center g-4">

                                    {/* LEFT IMAGE */}
                                    <div className="col-lg-4 col-md-12 text-center">
                                        <img
                                            src="/assets/New_images/About-us.jpg"
                                            alt="Timmins Consulting"
                                            className="img-fluid"
                                            style={{
                                                width: "100%",
                                                maxWidth: "320px",
                                                height: "auto"
                                            }}
                                        />
                                    </div>


                                    {/* RIGHT CONTENT */}
                                    <div className="col-lg-8 col-md-12">
                                        <div className="mb-4">
                                            <h3 className="fw-bold">Our Purpose & Mission</h3>
                                        </div>
                                        <div className="align-items-baseline d-flex flex gap-3 mb-4 pb-3 px-4 rounded-2 bg-gray-100">
                                            <div>
                                                <h6>Our Purpose</h6>
                                                <p>
                                                    Timmins exists to deliver practitioner-led, engineering-grade training
                                                    that keeps pace with modern technology and translates directly into
                                                    real-world impact.
                                                </p>
                                            </div>
                                            <div>
                                                <h6 className="mt-3">Our Mission</h6>
                                                <p>
                                                    Our mission is to enable organizations to stay competitive in a rapidly
                                                    evolving tech landscape through practitioner-led training and
                                                    engineering-grade capability building.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </section>

                </>





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







                {/* Start Why Choose Area */}
                <section className="approach-section section-gap">
                    <div className="container">
                        {/* Header */}
                        <div className="text-center mb-5">
                            <h1 className="mission-title">Our Approach</h1>

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
                                    <h4>Custom Training Programs</h4>
                                    <p>
                                        Tailored content to match your business needs, team readiness, and required skill depth.
                                    </p>
                                </div>
                            </div>
                            {/* Step 2 */}
                            <div className="approach-step">
                                <div className="step-dot">2</div>
                                <div className="step-content">
                                    <h4>Practitioner-Led Live Sessions</h4>
                                    <p>
                                        Contextual, real-world examples delivered by subject matter experts with real-world delivery experience

                                    </p>
                                </div>
                            </div>
                            {/* Step 3 */}
                            <div className="approach-step">
                                <div className="step-dot">3</div>
                                <div className="step-content">
                                    <h4>Project-Based Assessments</h4>
                                    <p>
                                        Hands-on labs, mini-projects, or applied challenges integrated into every course
                                    </p>
                                </div>
                            </div>
                            {/* Step 4 */}
                            <div className="approach-step">
                                <div className="step-dot">4</div>
                                <div className="step-content">
                                    <h4>Structured Reporting</h4>
                                    <p>
                                        Every program includes post-training reports with analytics and insights, including pre- and post-assessment comparisons, engagement data, manager feedback, and suggested follow-up actions
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Footer Note */}
                        {/* <div className="approach-footer">
                            This systematic approach ensures your organization builds capability with
                            clarity, confidence, and sustained momentum.
                        </div> */}
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
                                        10 Years of Building Engineering Capability
                                    </h2>
                                    <p className="text-muted">
                                        From a small consulting practice in Malaysia to a capability partner, Timmins has trained professionals across engineering, manufacturing, financial services, and universities. We support teams across the full lifecycle of modern systems, from design and implementation to real-world delivery and operations.
                                    </p>
                                    <p className="text-muted">
                                        Ten years later, our belief remains the same: the right training builds real capability and drives lasting organizational impact.

                                        .
                                    </p>
                                    <br />

                                    <div className="ed-hero__btn ed-btn">
                                        <a href="#">
                                            Explore Our Journey →
                                        </a>
                                    </div>

                                </div>

                                {/* Right Highlight Box */}
                                <div className="col-lg-4 col-md-12 mt-4 mt-lg-0">
                                    <div className="stats-box text-center">
                                        <h1>12</h1>
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
                    <section className="about-hrdc py-5">
                        <div className="container">
                            <div className="row justify-content-center text-center">
                                <div className="col-lg-8">

                                    <h2 className="mb-2">HRDC-Claimable</h2>
                                    <p className="fw-medium">(For Malaysian Clients)</p>

                                    <p className="mt-3">
                                        Many of our programs are HRDC-funded. We also help clients structure
                                        partial or company-funded options when full coverage isn’t available.
                                    </p>

                                    {/* HRDC BADGES */}
                                    <div className="badge-container hrdc-badges d-flex justify-content-center gap-3 mt-4">
                                        <img
                                            src="/assets/New_images/badge.png"
                                            alt="HRDC Claimable"
                                        />
                                        <img
                                            src="/assets/New_images/HRDC.png"
                                            alt="HRDC Registered Training Provider"
                                        />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>






                    <section className="ed-call-action position-relative section-gap pb-5 about-cta">
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

                                <div className="row align-items-center">

                                    {/* IMAGE */}
                                    <div className="col-lg-6 col-12">
                                        <div className="ed-call-action__img">
                                            <img
                                                src="/assets/New_images/final cta horizontal.png"
                                                alt="call-action-img"
                                            />
                                        </div>
                                    </div>

                                    {/* CONTENT */}
                                    <div className="col-lg-6 col-12 order-class pb-5">
                                        <div className="ed-call-action__content">


                                            <h4 className="cta-heading ">
                                                Build Engineering Capability That Lasts
                                            </h4>

                                            <p className="ed-section-head__text mb-4">
                                                We’re more than a generic corporate training provider, we’re your
                                                capability partner. We help your teams build real skills for the
                                                technologies shaping tomorrow.
                                            </p>
                                            <p className="ed-section-head__text mt-2 mb-2">
                                                Ready to build engineering capability that lasts?
                                            </p>

                                            <div
                                                className="ed-call-action__content-btn ed-btn mb-7"
                                                style={{ backgroundColor: 'var(--ed-secondary-color)' }}
                                            >
                                                <a href="/contact-us">
                                                    Book a Consultation
                                                </a>
                                            </div>

                                        </div>
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
