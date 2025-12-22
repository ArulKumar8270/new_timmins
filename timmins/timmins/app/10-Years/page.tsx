import Footer from "../Components/Footer";
import Header from "../Components/Header";

export default function TenYearsPage() {
    return (
        <>
            <Header />
            <main className="tenyears">

                {/* HERO */}
                <section className="journey-hero">
                    <div className="journey-hero-inner">
                        <h1>10 Years of Timmins</h1>
                        <h2>A Decade of Learning and Impact</h2>
                        <p className="journey-hero-year">2015 – 2025</p>
                    </div>
                </section>

                {/* JOURNEY */}
                <section className="tenyears-section">
                    <div className="tenyears-container">
                        <h2>Where It All Began (2015–2017)</h2>
                        <p>
                            Timmins was officially registered in Malaysia with a clear belief:
                            corporate training must be relevant, hands-on, and driven by real industry practitioners.
                        </p>
                        <p>
                            In 2017, Timmins expanded to Indonesia, delivering engineering and banking-focused
                            capability programs.
                        </p>
                    </div>
                </section>

                {/* EXPANSION */}
                <section className="tenyears-section light">
                    <div className="tenyears-container">
                        <h2>Specialization & Expansion (2018–2019)</h2>
                        <ul>
                            <li>Telecom & 5G capability</li>
                            <li>Semiconductor & Embedded Engineering</li>
                            <li>AI & Data Foundations</li>
                            <li>Enterprise Software Engineering</li>
                        </ul>
                        <p>
                            In 2019, Timmins expanded to Canada, enabling global SME access and cross-region delivery.
                        </p>
                    </div>
                </section>

                {/* DISRUPTION */}
                <section className="tenyears-section">
                    <div className="tenyears-container">
                        <h2>Reinvention Through Disruption (2020–2022)</h2>
                        <ul>
                            <li>Hybrid & virtual learning</li>
                            <li>SCORM-based modules</li>
                            <li>Remote labs</li>
                            <li>Multi-timezone delivery</li>
                            <li>Learning analytics</li>
                        </ul>
                    </div>
                </section>

                {/* GLOBAL */}
                <section className="tenyears-section light">
                    <div className="tenyears-container">
                        <h2>Global Reach & HRDC Recognition (2023–2025)</h2>
                        <p>
                            Today, Timmins delivers programs in 10+ countries across Asia-Pacific and North America,
                            in English and Mandarin.
                        </p>
                        <p>
                            Timmins is recognized as an HRD Corp Training Provider for HRDC-Claimable Training
                            (Malaysia only).
                        </p>
                    </div>
                </section>

                {/* IMPACT COUNTERS */}
                <section className="tenyears-impact">
                    <div className="tenyears-container impact-grid">

                        <div className="impact-item">
                            <h3>5,000+</h3>
                            <p>Professionals Trained</p>
                        </div>

                        <div className="impact-item">
                            <h3>200+</h3>
                            <p>Customized Programs</p>
                        </div>

                        <div className="impact-item">
                            <h3>100+</h3>
                            <p>Corporate Clients</p>
                        </div>

                        <div className="impact-item">
                            <h3>10+</h3>
                            <p>Countries Served</p>
                        </div>

                        <div className="impact-item">
                            <h3>2</h3>
                            <p>Delivery Languages</p>
                        </div>

                        <div className="impact-item">
                            <h3>1</h3>
                            <p>Mission</p>
                        </div>

                    </div>
                </section>

                {/* QUOTES */}
                <section className="tenyears-section">
                    <div className="tenyears-container quotes">
                        <blockquote>
                            “Timmins has always been about people and engineers who turn training into real capability.”
                            <span>— Raj Rajaratnam, Managing Director</span>
                        </blockquote>

                        <blockquote>
                            “Organizations trust us because we stay close to technology and people.”
                            <span>— Muna, Director of Learning Delivery</span>
                        </blockquote>
                    </div>
                </section>

                <Footer />

            </main>

        </>
    );
}
