import "../section-css/training.css"
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Training Calendar | Expert-Led Training for Advanced Tech | Timmins",
    description: "Explore Timmins' Training Calendar featuring a wide range of expert-led public training across engineering, technology, and business domains. Learn hands-on with industry practitioners.",
    keywords: "training calendar, public training, public classes, professional training courses, expert-led training, public training calendar Malaysia, HRDC claimable training, 5G training, android training, AI training, Machine Learning training, Deep Learning training, Electric Vehicle Technology training, Blockchain training, Business Intelligence training, CAD training, Cloud Computing training, Cybersecurity training, DevOps training, Embedded Android training, Embedded Linux training, Fullstack training, Generative AI training, Hardware Test training, Linux training, Microservices training, Programming Languages training, scaled agile training, SAFe Certifications training, Software Testing training, Soft Skills training",
    alternates: { canonical: "https://www.timmins-consulting.com/training-calendar" },
};

const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            "@id": "https://www.timmins-consulting.com/#organization",
            name: "Timmins Training Consulting",
            url: "https://www.timmins-consulting.com",
        },
        {
            "@type": "WebPage",
            "@id": "https://www.timmins-consulting.com/training-calendar#webpage",
            name: "Training Calendar",
            description: "Choose how you want to train with Timmins—join a scheduled public class or request a customized in-house training program.",
            url: "https://www.timmins-consulting.com/training-calendar",
            about: [
                { "@type": "Service", "@id": "https://www.timmins-consulting.com/public-classes#service" },
                { "@type": "Service", "@id": "https://www.timmins-consulting.com/inhouse-training#service" },
            ],
            isPartOf: {
                "@type": "WebSite",
                name: "Timmins Training Consulting",
                url: "https://www.timmins-consulting.com",
            },
        },
        {
            "@type": "Service",
            "@id": "https://www.timmins-consulting.com/public-classes#service",
            name: "Public Training Classes",
            description: "Scheduled, instructor-led public training classes open to individual professionals across technical and engineering domains.",
            provider: { "@type": "Organization", "@id": "https://www.timmins-consulting.com/#organization" },
            areaServed: { "@type": "Place", name: "Global" },
            availableChannel: {
                "@type": "ServiceChannel",
                serviceLocation: { "@type": "Place", name: "Online and On-site" },
            },
        },
        {
            "@type": "Service",
            "@id": "https://www.timmins-consulting.com/inhouse-training#service",
            name: "Corporate & In-House Training Programs",
            description: "Private, customized training programs delivered exclusively for organizations and engineering teams.",
            provider: { "@type": "Organization", "@id": "https://www.timmins-consulting.com/#organization" },
            areaServed: { "@type": "Place", name: "Global" },
            availableChannel: {
                "@type": "ServiceChannel",
                serviceLocation: { "@type": "Place", name: "On-site and Online" },
            },
        },
    ],
};

export default function TrainingCalendarPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <Header />

            {/* HERO SECTION */}
            <section className="tc-hero-modern">
                <div className="container">
                    <div className="row align-items-center">

                        {/* LEFT CONTENT */}
                        <div className="col-lg-6">
                            <h1 className="tc-big-title">
                                Training Calendar
                            </h1>

                            <p className="tc-modern-desc">
                                Choose how you want to train with Timmins. Join a scheduled public class or request a customized in-house program for your team.
                            </p>
                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="col-lg-6 position-relative text-center">
                            <div className="tc-image-wrapper">
                                <img
                                    src="/assets/New_images/Thome.png"
                                    alt="Training Calendar"
                                    className="img-fluid"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* TRAINING TYPES SECTION */}
            <section className="tc-types">
                <div className="container">

                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="row g-4">
                                {/* PUBLIC CLASSES */}
                                <div className="col-md-6">
                                    <div className="tc-card">
                                        <div className="tc-icon blue">
                                            <i className="bi bi-calendar3"></i>
                                        </div>

                                        <h4>Public Classes</h4>
                                        <p>
                                            Scheduled training open to individual professionals across industries.
                                        </p>

                                        <ul>
                                            <li>Fixed dates and locations</li>
                                            <li>Hands-on, practitioner-led</li>
                                            <li>Open registration</li>
                                        </ul>

                                        <a href="/training-calendar/public-classes" className="tc-pill-btn">
                                            Browse Public Classes →
                                        </a>
                                    </div>
                                </div>

                                {/* IN-HOUSE TRAINING */}
                                <div className="col-md-6">
                                    <div className="tc-card">
                                        <div className="tc-icon green">
                                            <i className="bi bi-building"></i>
                                        </div>

                                        <h4>In-House Training</h4>
                                        <p>
                                            Private, customized training delivered exclusively for your team, aligned to your systems and goals.
                                        </p>

                                        <ul>
                                            <li>Custom scope and depth</li>
                                            <li>Delivered on-site or online</li>
                                            <li>For teams and organizations</li>
                                        </ul>

                                        <a href="/contact-us" className="tc-pill-btn">
                                        Customize In-house Program →
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
    );
}