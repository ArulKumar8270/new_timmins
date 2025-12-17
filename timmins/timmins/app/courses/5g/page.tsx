import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'

export const metadata = {
    title: "5G Engineering Training & Private 5G Deployment | Practitioner-Led | Timmins",
    description: "Build real 5G deployment capability: RAN, Core, slicing, MEC, private 5G, and latency engineering. Practitioner-led, engineering-grade. HRDC claimable for Malaysia-based employers; global delivery available (ID, CA, US).",
    keywords: "5G training certification, 5g training courses online, 5g technician training, HRDC claimable training, HRD Corp training provider, Corporate training Malaysia, Embedded systems training",
    openGraph: {
        title: "5G Engineering Training & Private 5G Deployment | Practitioner-Led | Timmins",
        description: "Build real 5G deployment capability: RAN, Core, slicing, MEC, private 5G, and latency engineering. Practitioner-led, engineering-grade. HRDC claimable for Malaysia-based employers; global delivery available (ID, CA, US).",
        url: "https://timmins-consulting.com/courses/5g",
        siteName: "Timmins Training Consulting",
        type: "website",
    },
}

const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "EducationalService",
            "name": "5G Engineering Capability",
            "url": "https://timmins-consulting.com/courses/5g",
            "description": "Practitioner-led 5G capability covering NR, RAN, Core, network slicing, O-RAN, NSA to SA migration, and live simulation labs. HRDC claimable for Malaysia-based employers only.",
            "provider": {
                "@type": "Organization",
                "name": "Timmins",
                "url": "https://timmins-consulting.com",
                "logo": "https://timmins-consulting.com/logo.png"
            },
            "areaServed": [
                { "@type": "Country", "name": "Malaysia" },
                { "@type": "Country", "name": "Indonesia" },
                { "@type": "Country", "name": "Canada" },
                { "@type": "Country", "name": "United States" }
            ],
            "audience": {
                "@type": "EducationalAudience",
                "audienceType": "Telecom Engineers, RF/RAN Specialists, Core Engineers, Network Architects, O&M Teams"
            },
            "offers": {
                "@type": "Offer",
                "eligibleRegion": [
                    {
                        "@type": "Country",
                        "name": "Malaysia",
                        "disambiguatingDescription": "HRDC claimable for Malaysia-based employers only"
                    },
                    { "@type": "Country", "name": "Indonesia" },
                    { "@type": "Country", "name": "Canada" },
                    { "@type": "Country", "name": "United States" }
                ]
            }
        },
        {
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Courses",
                    "item": "https://timmins-consulting.com/courses"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "5G Engineering Capability",
                    "item": "https://timmins-consulting.com/courses/5g"
                }
            ]
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What is the real performance difference between 5G and LTE?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "5G delivers significantly lower latency and higher bandwidth due to NR and 5G Core architecture, while LTE relies on EPC and does not support slicing or ultra-low latency."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Does 5G work without Standalone (SA)?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, via NSA. However, full 5G capabilities like slicing and URLLC require SA with 5G Core."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is network slicing deployable or mostly theoretical?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "It is deployable but depends on SA readiness, orchestration maturity, and operator capability."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is 5G reliable enough for industrial IoT?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes in SA environments with QoS slicing and URLLC. Reliability depends on rollout maturity and spectrum configuration."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How does 5G NR improve coverage versus mmWave?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "NR enables flexible spectrum use, while mmWave provides high throughput but needs dense cell planning due to limited range."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do I need LTE or RF background before 5G training?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Not required for fundamentals. RF/LTE experience helps for advanced RAN optimization tracks."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is 5G training hands-on or slide-based?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Training includes live 5G simulation covering NR, RAN, Core, slicing, and O-RAN, ensuring operational capability beyond theory."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Does 5G training include NSA to SA migration topics?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Topics include coexistence, EPC versus 5G Core transition, and operational migration paths."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Does Timmins provide live 5G RAN, Core, and slicing simulations?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Labs include NR simulation, Core emulation, slicing orchestration, O-RAN components, and KPI fault scenarios."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is HRDC funding available for Timmins 5G training, and who is eligible?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "HRDC applies only to Malaysia-based employers. Global participants may attend under standard billing without HRDC coverage."
                    }
                }
            ]
        }
    ]
}

const page = () => {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <Header />

            <section className="ed-hero ed-hero--style4">
                {/* Hero Image One  */}
                <div className="ed-hero__image--style-4 left-img">
                    <img src="/assets/images/hero/home-4/hero-img-1.png" alt="hero-img-1" />
                </div>
                {/* Hero Elements Move  */}
                <div className="ed-hero__elements--style-2">
                    <img
                        className="shape-1 element-move"
                        src="/assets/images/hero/home-4/elements-move/shape-1.svg"
                        alt="shape-1"
                    />
                    <img
                        className="shape-2 element-move"
                        src="/assets/images/hero/home-4/elements-move/shape-2.svg"
                        alt="shape-2"
                    />
                    <img
                        className="shape-3 element-move"
                        src="/assets/images/hero/home-4/elements-move/shape-3.svg"
                        alt="shape-3"
                    />
                    <img
                        className="shape-4 element-move"
                        src="/assets/images/hero/home-4/elements-move/shape-4.svg"
                        alt="shape-4"
                    />
                </div>
                <div className="ed-hero__fixed-shape">
                    <img
                        className="shape-1"
                        src="/assets/images/hero/home-4/shape-1.svg"
                        alt="shape-1"
                    />
                    <img
                        className="shape-2"
                        src="/assets/images/hero/home-4/vector-1.svg"
                        alt="vector-1"
                    />
                    <img
                        className="shape-3"
                        src="/assets/images/hero/home-4/shape-3.svg"
                        alt="shape-3"
                    />
                </div>
                <div className="container ed-container-expand">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-6 col-12">
                            {/* Hero Content */}
                            <div className="ed-hero__content text-center">
                                <h1 className="ed-hero__content-title ed-split-text left">
                                    5G Engineering Capability
                                </h1>

                                <span className="ed-hero__content-sm-title">Build 5G Networks with Real Deployment Intelligence</span>

                                <p className="ed-hero__content-text p-0">
                                    From RAN to Core, slicing to latency engineering, device-to-edge performance, and enterprise-grade private 5G. Timmins builds operational 5G capability for real-world networks.
                                </p>

                                <span className="ed-hero__content-sm-title mt-3">Book Capability Consultation (button to /contact)</span>

                                <p className="ed-hero__content-text p-0">
                                    HRDC Claimable, Malaysia-Based Employers Only
                                    Global Delivery Available: Malaysia • Indonesia • Canada • United States
                                </p>


                            </div>
                        </div>
                    </div>
                </div>
                {/* Hero Image Two  */}
                <div className="ed-hero__image--style-4 right-img">
                    <div className="ed-hero__image-shape">
                        <img
                            className="rotate-ani"
                            src="/assets/images/hero/home-4/shape-2.svg"
                            alt="shape-2"
                        />
                    </div>
                    <div className="ed-hero__image-main">
                        <img src="/assets/images/hero/home-4/hero-img-2.png" alt="hero-img-2" />
                    </div>
                </div>
            </section>


            <section className="ed-about ed-about__page section-gap position-relative ">
                <div className="container ed-container">
                    <div className="row">

                        <div className="col-lg-6 col-12 about-sectionstyle">
                            {/* About Content  */}
                            <div className="">
                                <div className="ed-section-head">
                                    <h3 className="ed-section-head__title ed-split-text right">
                                        Why 5G Capability Matters for Modern Engineering Teams
                                    </h3>
                                    <p className="ed-section-head__text">
                                        5G is not “faster cellular.” It is:
                                    </p>
                                </div>
                                <div className="ed-about__feature">
                                    <ul className="ed-about__features-list">
                                        <li>
                                            <img
                                                src="/assets/images/icons/icon-check-blue.svg"
                                                alt="icon-check-blue"
                                            />
                                            ultra-low latency for robotics & automation
                                        </li>
                                        <li>
                                            <img
                                                src="/assets/images/icons/icon-check-blue.svg"
                                                alt="icon-check-blue"
                                            />
                                            deterministic networking for manufacturing lines
                                        </li>
                                        <li>
                                            <img
                                                src="/assets/images/icons/icon-check-blue.svg"
                                                alt="icon-check-blue"
                                            />
                                            high-density IoT orchestration
                                        </li>
                                        <li>
                                            <img
                                                src="/assets/images/icons/icon-check-blue.svg"
                                                alt="icon-check-blue"
                                            />
                                            edge-based compute reliability
                                        </li>
                                        <li>
                                            <img
                                                src="/assets/images/icons/icon-check-blue.svg"
                                                alt="icon-check-blue"
                                            />
                                            enterprise private networks for OT security
                                        </li>
                                    </ul>

                                </div>
                                <p className="ed-section-head__text pt-4">Teams that see 5G as speed will deploy wrong. Teams that see 5G as a network + compute + orchestration layer will deliver transformation in banking, smart factories, transport, medical instrumentation, and defense.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12 about-sectionstyle1">
                            {/* About Images  */}
                            <div className="">
                                <div className="ed-section-head">

                                    <h3 className="ed-section-head__title ed-split-text right">
                                        How Timmins Delivers Practitioner-Led 5G Engineering Capability
                                    </h3>

                                    <span className="ed-section-head__sm-title">
                                        Timmins is a boutique, engineering-grade capability partner:

                                    </span>
                                </div>
                                <div className="ed-about__feature">
                                    <ul className="ed-about__features-list">
                                        <li>
                                            <img
                                                src="/assets/images/icons/icon-check-blue.svg"
                                                alt="icon-check-blue"
                                            />
                                            led by practitioners who deploy 5G, not talk about it
                                        </li>
                                        <li>
                                            <img
                                                src="/assets/images/icons/icon-check-blue.svg"
                                                alt="icon-check-blue"
                                            />
                                            covers RAN → Core → MEC → devices → ops
                                        </li>
                                        <li>
                                            <img
                                                src="/assets/images/icons/icon-check-blue.svg"
                                                alt="icon-check-blue"
                                            />
                                            embeds telco + manufacturing + banking use cases
                                        </li>
                                        <li>
                                            <img
                                                src="/assets/images/icons/icon-check-blue.svg"
                                                alt="icon-check-blue"
                                            />
                                            goes beyond certification to live network behavior, load, jitter, QoS & slicing
                                        </li>
                                    </ul>
                                    <p className="ed-section-head__text pt-4">
                                        This is not a 5G classroom. This is 5G as multi-industry infrastructure maturity.

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ed-course  section-gap position-relative pt-0">
                <div className="container ed-container">
                    <div className="row justify-content-center mb-4">
                        <div className="col-lg-8 col-12">
                            <div className="ed-section-head text-center">
                                <h3 className="ed-section-head__title ed-split-text left">
                                    How Teams Grow in 5G
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12">

                            <div className="table-responsive" style={{ marginBottom: '2rem' }}>
                                <table className="ed-growth-table">
                                    <thead>
                                        <tr>
                                            <th>Stage</th>
                                            <th>Capability Lift</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <h5>RF & RAN foundations</h5>
                                            </td>
                                            <td>
                                                <p>Spectrum, throughput shaping, interference</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h5>5G NR architecture</h5>
                                            </td>
                                            <td>
                                                <p>RAN split, QoS, scheduling, massive MIMO</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h5>5G Core</h5>
                                            </td>
                                            <td>
                                                <p>AMF, SMF, UPF, slices, SA/NSA modes</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h5>MEC & Edge</h5>
                                            </td>
                                            <td>
                                                <p>compute gating, real-time workloads</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h5>Private 5G</h5>
                                            </td>
                                            <td>
                                                <p>enterprise network hardening & multi-slice ops</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h5>Ops & telemetry</h5>
                                            </td>
                                            <td>
                                                <p>jitter, outage triage, QoS enforcement</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="ed-section-head__text pt-4 text-center">Teams graduate not with certificates, but deployment fluency.</p>
                        </div>
                    </div>
                </div>
            </section >



            <section className="ed-about ed-about__page section-gap position-relative py-0">
                <div className="container ed-container">
                    <div className="row justify-content-center mb-4">
                        <div className="col-lg-8 col-12">
                            <div className="ed-section-head text-center">
                                <h3 className="ed-section-head__title ed-split-text left">
                                    5G Technical Scope & Stack Coverage
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-12">

                            {/* About Content  */}
                            <div className="detailsSection">
                                <div className="ed-section-head">
                                    <h6 className="ed-section-head__sm-title">
                                        Android Mobile App Development
                                    </h6>
                                </div>
                                <div className="ed-about__feature">
                                    <ul className="ed-about__features-list">
                                        <li>
                                            <img
                                                src="/assets/images/icons/icon-check-blue.svg"
                                                alt="icon-check-blue"
                                            />
                                            5G NR (New Radio) Architecture
                                        </li>
                                        <li>
                                            <img
                                                src="/assets/images/icons/icon-check-blue.svg"
                                                alt="icon-check-blue"
                                            />
                                            5G Network Planning & Optimization
                                        </li>
                                        <li>
                                            <img
                                                src="/assets/images/icons/icon-check-blue.svg"
                                                alt="icon-check-blue"
                                            />
                                            5G RAN Engineering
                                        </li>
                                        <li>
                                            <img
                                                src="/assets/images/icons/icon-check-blue.svg"
                                                alt="icon-check-blue"
                                            />
                                            Telco-grade RF Optimization & Interference Management
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="detailsSection">
                                <div className="ed-section-head">
                                    <h6 className="ed-section-head__sm-title">
                                        Domain
                                    </h6>
                                </div>
                                <div className="ed-about__feature">
                                    <ul className="ed-about__features-list">
                                        <li>
                                            <img
                                                src="/assets/images/icons/icon-check-blue.svg"
                                                alt="icon-check-blue"
                                            />
                                            RAN optimization, RF propagation, MIMO, beamforming

                                        </li>
                                        <li>
                                            <img
                                                src="/assets/images/icons/icon-check-blue.svg"
                                                alt="icon-check-blue"
                                            />
                                            Core slicing, QoS tiers, traffic segmentation
                                        </li>
                                        <li>
                                            <img
                                                src="/assets/images/icons/icon-check-blue.svg"
                                                alt="icon-check-blue"
                                            />
                                            MEC workload orchestration & edge compute
                                        </li>
                                        <li>
                                            <img
                                                src="/assets/images/icons/icon-check-blue.svg"
                                                alt="icon-check-blue"
                                            />
                                            SA/NSA deployment models
                                        </li>
                                        <li>
                                            <img
                                                src="/assets/images/icons/icon-check-blue.svg"
                                                alt="icon-check-blue"
                                            />
                                            Latency engineering for automation & robotics
                                        </li>
                                        <li>
                                            <img
                                                src="/assets/images/icons/icon-check-blue.svg"
                                                alt="icon-check-blue"
                                            />
                                            Interference & spectrum governance
                                        </li>
                                        <li>
                                            <img
                                                src="/assets/images/icons/icon-check-blue.svg"
                                                alt="icon-check-blue"
                                            />
                                            Load calculations for 10k–1M device densities
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ed-about ed-about__page section-gap position-relative">
                <div className="container ed-container">
                    <div className="row align-items-center">

                        <div className="col-lg-6 col-12 about-sectionstyle">
                            {/* About Content  */}
                            <div className="">
                                <div className="ed-section-head">
                                    <h3 className="ed-section-head__title ed-split-text right">
                                        5G Competencies:
                                    </h3>
                                    <h6 className="ed-section-head__sm-title">
                                        You will build:
                                    </h6>
                                </div>
                                <div className="ed-about__feature">
                                    <ul className="ed-about__features-list">
                                        <li>
                                            <img
                                                src="/assets/images/icons/icon-check-blue.svg"
                                                alt="icon-check-blue"
                                            />
                                            network slicing design & enforcement
                                        </li>
                                        <li>
                                            <img
                                                src="/assets/images/icons/icon-check-blue.svg"
                                                alt="icon-check-blue"
                                            />
                                            deterministic latency & jitter shaping
                                        </li>
                                        <li>
                                            <img
                                                src="/assets/images/icons/icon-check-blue.svg"
                                                alt="icon-check-blue"
                                            />
                                            private 5G fleet deployment frameworks
                                        </li>
                                        <li>
                                            <img
                                                src="/assets/images/icons/icon-check-blue.svg"
                                                alt="icon-check-blue"
                                            />
                                            RF interference modeling & optimization
                                        </li>
                                        <li>
                                            <img
                                                src="/assets/images/icons/icon-check-blue.svg"
                                                alt="icon-check-blue"
                                            />
                                            telemetry & outage triage standards
                                        </li>
                                        <li>
                                            <img
                                                src="/assets/images/icons/icon-check-blue.svg"
                                                alt="icon-check-blue"
                                            />
                                            secure industrial IoT 5G backbone
                                        </li>
                                        <li>
                                            <img
                                                src="/assets/images/icons/icon-check-blue.svg"
                                                alt="icon-check-blue"
                                            />
                                            enterprise 5G release governance
                                        </li>
                                    </ul>
                                </div>
                                <div className="ed-section-head">
                                    <h6 className="ed-section-head__sm-title mt-4">
                                        This is network systems engineering, not radio overview.
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12 about-sectionstyle1">
                            <div className="">
                                <div className="ed-section-head">
                                    <h3 className="ed-section-head__title ed-split-text right">
                                        Tools & Engineering Environment for 5G
                                    </h3>

                                </div>
                                <div className="ed-about__feature">
                                    <ul className="ed-about__features-list">
                                        <li>
                                            <img
                                                src="/assets/images/icons/icon-check-blue.svg"
                                                alt="icon-check-blue"
                                            />
                                            RF simulation suites
                                        </li>
                                        <li>
                                            <img
                                                src="/assets/images/icons/icon-check-blue.svg"
                                                alt="icon-check-blue"
                                            />
                                            5G NR network planners
                                        </li>
                                        <li>
                                            <img
                                                src="/assets/images/icons/icon-check-blue.svg"
                                                alt="icon-check-blue"
                                            />
                                            Core slice orchestration dashboards
                                        </li>
                                        <li>
                                            <img
                                                src="/assets/images/icons/icon-check-blue.svg"
                                                alt="icon-check-blue"
                                            />
                                            Edge compute QoS profilers
                                        </li>
                                        <li>
                                            <img
                                                src="/assets/images/icons/icon-check-blue.svg"
                                                alt="icon-check-blue"
                                            />
                                            MEC traffic shaping tools
                                        </li>
                                        <li>
                                            <img
                                                src="/assets/images/icons/icon-check-blue.svg"
                                                alt="icon-check-blue"
                                            />
                                            Live telemetry triage environment
                                        </li>
                                        <li>
                                            <img
                                                src="/assets/images/icons/icon-check-blue.svg"
                                                alt="icon-check-blue"
                                            />
                                            Private 5G sandbox (enterprise config)
                                        </li>
                                    </ul>
                                </div>
                                <div className="ed-section-head">
                                    <h6 className="ed-section-head__sm-title mt-4">
                                        Everything is deploy-analyze-correct, not watch-slide-repeat.
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="ed-about ed-about__page position-relative pb-5">
                <div className="container ed-container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-12">
                            {/* About Images  */}
                            <div className="ed-about__images">
                                <div className="ed-about__main-img">
                                    <img
                                        src="/assets/images/about/about-1/about-img.png"
                                        alt="about-img"
                                    />
                                </div>
                                <div className="ed-about__shapes">
                                    <img
                                        className="ed-about__shape-1"
                                        src="/assets/images/about/about-1/shape-1.svg"
                                        alt="shape-1"
                                    />
                                    <img
                                        className="ed-about__shape-2"
                                        src="/assets/images/about/about-1/shape-2.svg"
                                        alt="shape-2"
                                    />
                                    <img
                                        className="ed-about__shape-3 rotate-ani"
                                        src="/assets/images/about/about-1/shape-3.svg"
                                        alt="shape-3"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            {/* About Content  */}
                            <div className="ed-about__content">
                                <div className="ed-section-head">
                                    <h3 className="ed-section-head__title ed-split-text right">
                                        Tools & Engineering Environment for 5G
                                    </h3>

                                </div>
                                <div className="ed-about__feature">
                                    <ul className="ed-about__features-list">
                                        <li>
                                            <img
                                                src="/assets/images/icons/icon-check-blue.svg"
                                                alt="icon-check-blue"
                                            />
                                            RF simulation suites
                                        </li>
                                        <li>
                                            <img
                                                src="/assets/images/icons/icon-check-blue.svg"
                                                alt="icon-check-blue"
                                            />
                                            5G NR network planners
                                        </li>
                                        <li>
                                            <img
                                                src="/assets/images/icons/icon-check-blue.svg"
                                                alt="icon-check-blue"
                                            />
                                            Core slice orchestration dashboards
                                        </li>
                                        <li>
                                            <img
                                                src="/assets/images/icons/icon-check-blue.svg"
                                                alt="icon-check-blue"
                                            />
                                            Edge compute QoS profilers
                                        </li>
                                        <li>
                                            <img
                                                src="/assets/images/icons/icon-check-blue.svg"
                                                alt="icon-check-blue"
                                            />
                                            MEC traffic shaping tools
                                        </li>
                                        <li>
                                            <img
                                                src="/assets/images/icons/icon-check-blue.svg"
                                                alt="icon-check-blue"
                                            />
                                            Live telemetry triage environment
                                        </li>
                                        <li>
                                            <img
                                                src="/assets/images/icons/icon-check-blue.svg"
                                                alt="icon-check-blue"
                                            />
                                            Private 5G sandbox (enterprise config)
                                        </li>
                                    </ul>
                                </div>
                                <div className="ed-section-head">

                                    <h6 className="ed-section-head__sm-title mt-4">
                                        Everything is deploy-analyze-correct, not watch-slide-repeat.
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img
                    className="ed-about__shape-4"
                    src="/assets/images/abstracts/abstract-element-regular.svg"
                    alt="shape-4"
                />
            </section>


            <section
                className="ed-course ed-course--style2 section-gap position-relative background-image"
            // style={{ backgroundImage: 'url("assets/images/section-bg-7.png")' }}
            >
                <div className="container ed-container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-8 col-12">
                            <div className="ed-section-head text-center">

                                <h3 className="ed-section-head__title">Funding Eligibility — HRDC Malaysia Only (Global Delivery Available)</h3>
                                <span className="ed-section-head__sm-title">HRDC claimable for Malaysia-based employers only. Global delivery remains available for Indonesia, Canada, and the United States</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="section-bg position-relative">
                {/* <div className="section-bg__img style-2">
                <img src="/assets/images/section-bg-6.png" alt="bg-img" />
              </div> */}
                {/* Start Testimonial Area */}
                <section className="ed-testimonial ed-testimonial--style2 ed-course section-gap position-relative pt-0">
                    <div className="container ed-container">
                        <div className="row justify-content-center mb-4">
                            <div className="col-lg-12 col-12">
                                <div className="ed-section-head text-center">
                                    <h3 className="ed-section-head__title ed-split-text left">
                                        Who Already Builds 5G Capability with Timmins
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-12">
                                {/* Testimonial Content  */}
                                <div className="ed-testimonial__content ed-testimonial__content--style2">
                                    <div className="owl-carousel ed-testimonial__slider">
                                        {/* Single Testimonial  */}
                                        <div className="ed-testimonial__slider-item">
                                            <ul className="ed-testimonial__rattings">
                                                <li>
                                                    <i className="icofont-star" />
                                                </li>
                                                <li>
                                                    <i className="icofont-star" />
                                                </li>
                                                <li>
                                                    <i className="icofont-star" />
                                                </li>
                                                <li>
                                                    <i className="icofont-star" />
                                                </li>
                                                <li>
                                                    <i className="icofont-star" />
                                                </li>
                                            </ul>
                                            <p className="ed-testimonial__text">
                                                “At Linux Driver Development session, there were many hands-on training sessions that can help to easily relate to info shared from the trainer. The trainer is passionately guiding us to resolve blockers we met along the exercises."
                                            </p>
                                            <div className="ed-testimonial__author">

                                                <div className="ed-testimonial__author-info">
                                                    <h5>Engineer at Motorola</h5>

                                                </div>
                                            </div>
                                        </div>
                                        {/* Single Testimonial  */}
                                        <div className="ed-testimonial__slider-item">
                                            <ul className="ed-testimonial__rattings">
                                                <li>
                                                    <i className="icofont-star" />
                                                </li>
                                                <li>
                                                    <i className="icofont-star" />
                                                </li>
                                                <li>
                                                    <i className="icofont-star" />
                                                </li>
                                                <li>
                                                    <i className="icofont-star" />
                                                </li>
                                                <li>
                                                    <i className="icofont-star" />
                                                </li>
                                            </ul>
                                            <p className="ed-testimonial__text">
                                                “There were multiple key takeaways that I had from the Embedded Linux session. It was detailed and well presented.  Really happy with the trainer who could very smoothly and gently explain the entire subject matter with much clarity.”
                                            </p>
                                            <div className="ed-testimonial__author">

                                                <div className="ed-testimonial__author-info">
                                                    <h5>L&D at Qualcomm</h5>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Single Testimonial  */}
                                        <div className="ed-testimonial__slider-item">
                                            <ul className="ed-testimonial__rattings">
                                                <li>
                                                    <i className="icofont-star" />
                                                </li>
                                                <li>
                                                    <i className="icofont-star" />
                                                </li>
                                                <li>
                                                    <i className="icofont-star" />
                                                </li>
                                                <li>
                                                    <i className="icofont-star" />
                                                </li>
                                                <li>
                                                    <i className="icofont-star" />
                                                </li>
                                            </ul>
                                            <p className="ed-testimonial__text">
                                                At SAFe certifications training, the trainer and the activities done during the training. The PI planning activity really helped in understanding it better. The trainer was doing a recap of the modules discussed after a few lessons which helped to remember the points learnt.
                                            </p>
                                            <div className="ed-testimonial__author">

                                                <div className="ed-testimonial__author-info">
                                                    <h5>Engineer at Citibank</h5>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Single Testimonial  */}
                                        <div className="ed-testimonial__slider-item">
                                            <ul className="ed-testimonial__rattings">
                                                <li>
                                                    <i className="icofont-star" />
                                                </li>
                                                <li>
                                                    <i className="icofont-star" />
                                                </li>
                                                <li>
                                                    <i className="icofont-star" />
                                                </li>
                                                <li>
                                                    <i className="icofont-star" />
                                                </li>
                                                <li>
                                                    <i className="icofont-star" />
                                                </li>
                                            </ul>
                                            <p className="ed-testimonial__text">
                                                “The session gave a very deep knowledge of RUST. With this knowledge, we can effectively understand our application's existing code and make meaningful changes in it, knowing what we are actually doing instead of just going around compiler issues and making the code to run. The SerDes part was very helpful.”
                                            </p>
                                            <div className="ed-testimonial__author">
                                                <div className="ed-testimonial__author-info">
                                                    <h5>Engineer at Motorola</h5>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Single Testimonial  */}
                                        <div className="ed-testimonial__slider-item">
                                            <ul className="ed-testimonial__rattings">
                                                <li>
                                                    <i className="icofont-star" />
                                                </li>
                                                <li>
                                                    <i className="icofont-star" />
                                                </li>
                                                <li>
                                                    <i className="icofont-star" />
                                                </li>
                                                <li>
                                                    <i className="icofont-star" />
                                                </li>
                                                <li>
                                                    <i className="icofont-star" />
                                                </li>
                                            </ul>
                                            <p className="ed-testimonial__text">
                                                “One of my main takeaways from the Python training was learning how to write more simplified and efficient functions compared to my current approach. The examples and explanations helped me understand how to streamline logic and improve code readability, which I can apply to my day-to-day tasks.”
                                            </p>
                                            <div className="ed-testimonial__author">
                                                <div className="ed-testimonial__author-info">
                                                    <h5>Engineer at Citibank</h5>
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

            <section className="ed-call-action position-relative section-gap p-0">
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
                            <div className="col-lg-6 col-12">
                                <div className="ed-call-action__img">
                                    <img
                                        src="/assets/New_images/final cta section.jpg"
                                        alt="call-action-img"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6 col-12 order-class">
                                <div className="">
                                    <div className="ed-section-head">

                                        <h3 className="ed-section-head__title">
                                            Build Real 5G Capability, Not 5G Terminology
                                        </h3>
                                    </div>
                                    <div className="ed-call-action__content-btn ed-btn" style={{ backgroundColor: 'var(--ed-secondary-color)' }}>
                                        <a href="#" >
                                            {" "}
                                            Book Capability Consultation
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="ed-faq section-gap position-relative">
                <div className="container ed-container">
                    <div className="ed-section-head text-center">
                        <h3 className="ed-section-head__title text-center">
                            FREQUENTLY ASKED QUESTIONS
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
                                                    1. What is 5G beyond “faster 4G”?
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
                                                        5G is deterministic latency + slicing + density orchestration, not merely bandwidth.
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
                                                    2. Which industries benefit most from 5G?
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
                                                        Manufacturing, robotics, fintech, transport, medtech, and high-density IoT environments.

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
                                                    3. Is 5G critical even if networks already run well?
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
                                                        Yes. For next-gen automation, RF predictability, secure private lines, and MEC workloads.
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
                                                    4. What makes 5G engineering different from RF planning?
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
                                                        It merges RF + compute + core + ops, not just propagation math.
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
                                                    5. Do teams learn network slicing hands-on in this training?
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
                                                        Yes, slicing, QoS design, enforcement & telemetry are core to capability uplift., QoS design, enforcement & telemetry are core to capability uplift.

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
                                                    6. Is HRDC funding available globally?
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
                                                        No. HRDC is Malaysia-only. Global delivery runs standard billing.
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
                                                    7. What stack & layers are covered?
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
                                                        RAN, Core, MEC, private 5G, latency shaping, QoS, RF optimization, high-density load.

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
                                                    8. Does Timmins operate like a certification center?
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
                                                        No. Timmins is a practitioner-led capability partner, not a generic exam provider.
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
                                                    9. Will training include real telco deployment cases?
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
                                                        Yes,  telco, enterprise private 5G, and IoT fleet-scale cases.
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
                                                    10. Why Timmins for 5G training?
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
                                                        Because Timmins teaches deployment fluency, not theory. Real slices, real latency, real networks.
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
