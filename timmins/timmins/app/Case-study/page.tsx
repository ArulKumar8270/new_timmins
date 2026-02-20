import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Script from 'next/script'

export const metadata = {
    title: "Case Studies – Engineering, Telecom, Semiconductor & Banking Capability Programs",
    description: "Explore real case studies of how Timmins builds engineering capability across semiconductor, telecom, manufacturing, and banking organizations. Practitioner-led programs in embedded systems, 5G, AI/ML, cloud, and engineering onboarding delivered across ASEAN and North America.",
    keywords: "AI Consulting, AI Consultants, AI Consultation, Artificial Intelligence Transformation, 5G Training Certification, 5g Training Courses Online, 5G Technician Training, Embedded Systems Training, Embedded Linux Consulting, Corporate Training Malaysia, Corporate Training Provider, HRDC Claimable Training, Technical Upskilling, Onboarding Academy",
    openGraph: {
        title: "Case Studies – Engineering, Telecom, Semiconductor & Banking Capability Programs",
        description: "Explore real case studies of how Timmins builds engineering capability across semiconductor, telecom, manufacturing, and banking organizations. Practitioner-led programs in embedded systems, 5G, AI/ML, cloud, and engineering onboarding delivered across ASEAN and North America.",
        url: "https://timmins-consulting.com/case-studies",
        siteName: "Timmins Training Consulting",
        type: "website",
    },
}

const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Case Studies – Engineering, Telecom, Semiconductor & Banking Capability Programs",
    "url": "https://timmins-consulting.com/case-studies",
    "description": "Real case studies of how Timmins builds engineering capability across semiconductor, telecom, manufacturing, and banking organizations through practitioner-led programs in embedded systems, 5G, AI/ML, cloud, and onboarding.",
    "mainEntity": {
        "@type": "ItemList",
        "itemListElement": [
            {
                "@type": "CaseStudy",
                "name": "Semiconductor Engineering Capability Program",
                "description": "Capability building in embedded systems, firmware, SoC bring-up, and Android OS development for a semiconductor engineering organization."
            },
            {
                "@type": "CaseStudy",
                "name": "Telecom & 5G Engineering Development",
                "description": "5G protocol engineering, RAN fundamentals, and telecom capability development for a regional telecom operator."
            },
            {
                "@type": "CaseStudy",
                "name": "Banking AI/ML Transformation Program",
                "description": "AI/ML capability building for a banking enterprise, including data pipelines, model governance, and analytics workflow design."
            },
            {
                "@type": "CaseStudy",
                "name": "Engineering Graduate Onboarding Program",
                "description": "End-to-end pipeline for onboarding fresh engineering graduates into production-ready contributors across embedded systems and software roles."
            }
        ]
    },
    "publisher": {
        "@type": "Organization",
        "name": "Timmins Training Consulting",
        "url": "https://timmins-consulting.com",
        "logo": "https://timmins-consulting.com/assets/logo.png"
    }
}

const page = () => {
    return (
        <>
            <Script
                id="case-studies-page-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <Header />



            <section className="case-hero">
                <div className="case-container">

                    <div className="case-left">
                        <h1>
                            Tingkatkan Bisnis dan Kinerja Tim
                            <br /> dengan Corporate Training
                            Belajarlagi
                        </h1>

                        <p>
                            Tingkatkan performa bisnis melalui program pengembangan
                            karyawan yang inovatif dan menyenangkan bersama Belajarlagi.
                        </p>

                        <button className="case-btn">Konsultasi Gratis</button>
                    </div>

                    <div className="case-right">
                        <img src="/assets/New_images/case1.png" alt="Corporate Training" />
                    </div>

                </div>
            </section>





            <section className="case-impact-section py-4">
                <div className="container">
                    <div className="row text-center">

                        <div className="col-md-4 mb-3 mb-md-0">
                            <div className="impact-item card-3d">
                                <span className="impact-icon">🤝</span>
                                <h3>10+</h3>
                                <p>Years of Partnerships</p>
                            </div>
                        </div>

                        <div className="col-md-4 mb-3 mb-md-0">
                            <div className="impact-item card-3d">
                                <span className="impact-icon">👥</span>
                                <h3>5,000+</h3>
                                <p>Professionals Trained</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="impact-item card-3d">
                                <span className="impact-icon">⚙️</span>
                                <h3>200+</h3>
                                <p>Programs Delivered</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>










            <section className="case-study-section section-gap">
                <div className="container">
                    <div className="row align-items-start g-4">

                        {/* Left Content */}
                        <div className="col-lg-8">

                            <h2 className="fw-bold mt-2">Fresh Graduate Onboarding</h2>


                            <p className="text-muted font-extrabold" >
                                <b>(Confidential US-Based Semiconductor Company)</b>
                            </p>

                            <h6 className="fw-semibold mt-4">The Challenge</h6>
                            <p className="mt-3">
                                A semiconductor company needed to bridge the gap between academic learning
                                and industry-ready engineering skills by onboarding fresh graduates into
                                complex technical roles and enabling contribution in real-world environments.
                            </p>

                            <h6 className="fw-semibold mt-4">Our Solution</h6>
                            <p className="mt-3">
                                Timmins enabled 350+ fresh graduates to become industry-ready engineers through
                                customized onboarding. The program covered core engineering domains including
                                Embedded Linux, Android, 5G, VLSI chip design, and AI fundamentals, supported by:
                            </p>
                            <br />

                            <ul className="list-unstyled role-list">
                                <li>✔ Skill gap assessment</li>
                                <li>✔ Customized course design</li>
                                <li>✔ Hands-on, structured delivery</li>
                                <li>✔ Ongoing assessment and engagement</li>
                            </ul>

                            {/* Quote kept (not Key Results section) */}
                            <div className="quote-box mt-4">
                                <p>
                                    “Significant skill development, high engagement, and positive feedback —
                                    graduates demonstrated strong gains across AI and Android courses.”
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
                                        <strong>350+</strong>
                                        <br />
                                        fresh graduates enabled
                                    </li>
                                    <li>
                                        <strong>~50%</strong>
                                        <br />
                                        Skill improvement
                                    </li>
                                    <li>
                                        <strong>4.33 – 4.82 / 5</strong>
                                        <br />
                                        High feedback scores
                                    </li>
                                    <li>
                                        <strong>AI & Android</strong>
                                        <br />
                                        Strong capability gains
                                    </li>
                                </ul>

                                <a
                                    href="/assets/New_images/pdf1.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="case-download-link mt-3 d-inline-block"
                                >
                                    Download Full Case Study
                                </a>


                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* <div className="modal fade" id="caseStudyModal" tabindex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h5 className="modal-title">Download Full Case Study</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div className="modal-body">
                            <form id="caseStudyForm">
                                <div className="mb-3">
                                    <label className="form-label">Full Name</label>
                                    <input type="text" className="form-control" required />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Organization</label>
                                    <input type="text" className="form-control" required />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input type="email" className="form-control" required />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Contact Number</label>
                                    <input type="tel" className="form-control" required />
                                </div>

                                <button type="submit" className="btn btn-primary w-100">
                                    Submit & Download
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </div> */}



            <section className="case-study-section-1 py-5">
                <div className="container">
                    <div className="row align-items-start g-4">

                        {/* Left Content */}
                        <div className="col-lg-8">

                            <h2 className="fw-bold mt-2">
                                Machine Learning Program for Data Analytics
                            </h2>

                            <p className="text-muted font-extrabold" >
                                <b>(DBS Bank)</b>
                            </p>

                            <h6 className="fw-semibold mt-4">The Challenge</h6>
                            <p className="mt-3">
                                The bank needed to strengthen in-house data analytics and machine learning
                                capability to address real banking use cases such as customer insights,
                                risk analysis, and operational decision-making.
                            </p>

                            <h6 className="fw-semibold mt-4">Our Solutions</h6>
                            <p className="mt-3">
                                Timmins designed and delivered a customized Machine Learning program for
                                the bank’s internal data analytics engineers. The engagement combined
                                structured training with applied consulting, focused on real banking
                                datasets and use cases.
                            </p>
                            <br />

                            <ul className="list-unstyled role-list">
                                <li>✔ Data analytics and machine learning foundations for banking</li>
                                <li>✔ Applied analytics for customer insights and decision support</li>
                                <li>✔ Customer sentiment analysis and service improvement</li>
                                <li>✔ Analytics-enabled security and risk use cases</li>
                                <li>✔ Hands-on implementation using Python and enterprise data systems</li>
                            </ul>

                            {/* Key Results – corrected */}


                        </div>

                        {/* Right Highlights Card */}
                        <div className="col-lg-4">
                            <div className="highlight-card">

                                <h5 className="fw-bold mb-3">Key Highlights</h5>

                                <ul className="list-unstyled highlight-list">
                                    <li >

                                        ✔ In-house analytics capability strengthened
                                    </li>
                                    <li >

                                        ✔ Continued engagement through repeat program adoption
                                    </li>

                                </ul>

                                <a
                                    href="/assets/New_images/pdf2.pdf"
                                    target="_blank"
                                    className="case-download-link underline mt-3 d-inline-block "
                                >
                                    Download Full Case Study(via Form)
                                </a>

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
                                AI Foundation for Banking Sector
                            </h2>
                            <p className="text-muted font-extrabold" >
                                <b>(Citigroup)</b>
                            </p>
                            <h6 className="fw-semibold mt-4">The Challenge</h6>
                            <p className="mt-3">
                                Data science and analytics teams (DSSM, model development, risk analytics, and validation) required practical Python-based data analytics and machine learning to address real banking use cases, moving beyond theory to support fraud analytics, model development, validation, and data-driven decisions.
                            </p>
                            <h6 className="fw-semibold mt-4">Our Solutions</h6>
                            <p>
                                Timmins delivered a structured, hands-on analytics and machine learning enablement program across six batches, with a focus on:
                            </p>

                            <br />

                            <ul className="list-unstyled role-list">
                                <li>✔ Assessment-first, skill-based segmentation</li>
                                <li>✔ Customized banking-context curriculum</li>
                                <li>✔ Hands-on, code-heavy delivery
                                </li>
                            </ul>


                        </div>
                        {/* Right Highlights Card */}
                        <div className="col-lg-4">
                            <div className="highlight-card">
                                <h5 className="fw-bold mb-3">Key Highlights</h5>
                                <ul className="list-unstyled highlight-list">
                                    <li>
                                        <strong>118</strong>
                                        <br />
                                        Participants trained
                                    </li>
                                    <li>
                                        <strong> 88%</strong>
                                        <br />
                                        improvement
                                    </li>
                                    <li>
                                        <strong>4.5+/5</strong>
                                        <br />
                                        Satisfaction score
                                    </li>
                                </ul>


                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="case-study-section-1 py-5">
                <div className="container">
                    <div className="row g-4 align-items-center">
                        {/* Left Content */}
                        <div className="col-lg-8">

                            <h2 className="fw-bold mb-3">
                                Mobile Development Enablement
                            </h2>
                            <p className="text-muted">
                                <b>(CMotorola)</b>
                            </p>
                            <h6 className="fw-semibold mt-4">The Challenge</h6>
                            <p className=" text-muted">
                                Engineering teams needed to strengthen in-house Android development capability to independently develop, optimize, and maintain Qualcomm chipset–based Android smartphones across evolving Android versions.
                            </p>
                            <h6 className="fw-semibold mt-4">Our Solutions</h6>
                            <p>
                                Timmins delivered an ongoing staffing, training, and consulting enablement program to support end-to-end Android smartphone development. Training areas included:
                            </p>
                            <br />
                            <ul className="list-unstyled role-list">
                                <li>✔ Embedded Linux and device drivers</li>
                                <li>✔ Linux kernel programming for Android</li>
                                <li>✔ Android framework, multimedia, and connectivity
                                </li>
                                <li>✔ Qualcomm chipset and board-level integration</li>
                            </ul>
                            <br />

                        </div>
                        {/* Right Card */}
                        <div className="col-lg-4">
                            <div className="case-metrics-card">
                                <h5 className="fw-bold mb-4">Key Highlights</h5>
                                <div className="metric">

                                    <p>✔ In-house Android handset development capability established</p>
                                </div>
                                <div className="metric">

                                    <p>✔ Successful delivery of Android devices across versions 10 to 14</p>

                                </div>

                                <button className="case-btn"><a href="/assets/New_images/pdf4.pdf" target='_blank' className=" underline d-inline-block">
                                    Download Full Case Study (via Form)
                                </a></button>



                            </div>
                        </div>
                    </div>
                </div>
            </section >





            <section className="case-study-section py-5">
                <div className="container">
                    <div className="row g-4 align-items-center">
                        {/* Left Content */}
                        <div className="col-lg-8">

                            <h2 className="fw-bold mb-3">
                                5G SoC R&D Enablement

                            </h2>
                            <p className="text-muted">
                                <b>(US-based Semiconductor Company)</b>
                            </p>
                            <h6 className="fw-semibold mt-4">The Challenge</h6>
                            <p className="mt-3">
                                A global semiconductor company needed to continuously strengthen 5G Mobile SoC capabilities as technologies evolved rapidly across hardware, software, and system architecture. Engineering teams required practical, applied expertise to design, optimize, and deploy complex 5G solutions at scale.
                            </p>

                            <h6 className="fw-semibold mt-4">Our Solutions</h6>
                            <p className="mt-3">

                                Timmins delivered a highly customized 5G Mobile SoC enablement program for cross-functional R&D teams, covering critical capability areas including:

                            </p>
                            <br />
                            <ul className="list-unstyled role-list">
                                <li>✔5G Mobile SoC architecture for next-generation mobile chip development</li>
                                <li>✔ Low-power chip design and HW–SW optimization</li>
                                <li>✔ Advanced memory technologies (LPDDR2, LPDDR4, LPDDR5)
                                </li>
                                <li>✔ Video codecs and multimedia systems (AV1, VVC, Camera ISP)
                                </li>
                                <li>✔ Embedded software and platform security for mobile systems</li>
                            </ul>

                            <br />

                        </div>
                        {/* Right Card */}
                        <div className="col-lg-4">
                            <div className="case-metrics-card">
                                <h5 className="fw-bold mb-4">Key Highlights</h5>
                                <div className="metric">

                                    <p>✔ End-to-end 5G SoC capability strengthened
                                    </p>
                                </div>
                                <div className="metric">

                                    <p>✔ Higher cross-domain engineering readiness
                                    </p>
                                </div>
                                <div className="metric">

                                    <p>✔ Global, multi-site scalability
                                    </p>
                                </div>
                                <button className="case-btn"><a href="/assets/New_images/pdf4.pdf" target='_blank' className=" underline d-inline-block">
                                    Download Full Case Study (via Form)
                                </a></button>
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
                                        We Don’t Just Train. We Transform.
                                    </h4>

                                    <p className="ed-section-head__text mb-4">
                                        Every story above shares the same DNA:

                                        <ul>
                                            <li>✔ Co-creation with client teams and SMEs</li>
                                            <li>✔ Hands-on, real-world learning</li>
                                            <li>✔ Feedback and improvement between batches</li>
                                            <li>✔  Measurable outcomes that align with business goals</li>
                                        </ul>
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
            <Footer />
















        </>
    )
}

export default page
