import Footer from "../Components/Footer";
import Header from "../Components/Header";

export default function TenYearsPage() {
    return (
        <>
            <Header />

            <main className="tenyears">

                {/* HERO */}
                <section className="ten-years-page">
                    <div className="journey-hero-inner">
                        <h1>10 Years of Timmins</h1>
                        <h2>A Decade of Learning and Impact</h2>
                        <p className="journey-hero-year">2015 – 2025</p>

                        <p>
                            In 2025, Timmins Training Consulting celebrates 10 years of
                            transforming how organizations learn, build capability, and
                            navigate emerging technologies.
                        </p>

                        <p>
                            What began in Malaysia with a simple vision—making corporate
                            learning meaningful, practical, and engineering-grade—has grown
                            into a multi-country capability partner trusted across Asia and
                            North America.
                        </p>

                        <p>
                            A decade later, that vision has powered advanced tech training
                            supporting engineers, developers, analysts, and leaders worldwide.
                        </p>
                    </div>
                </section>

                <div className="journey-arrow">↓</div>

                {/* 2015–2017 */}
                <section className="ten-years-page">
                    <div className="journey-hero-inner">
                        <h2>Where It All Began (2015–2017)</h2>

                        <p className="journey-hero-year">2015</p>
                        <p>
                            Timmins Training Consulting was officially registered as a corporate
                            training provider in Malaysia. The founding purpose was clear:
                        </p>

                        <p>
                            <i>
                                <u>
                                    Corporate training must be relevant, hands-on, and driven by
                                    real industry practitioners—not generic slides.
                                </u>
                            </i>
                        </p>

                        <p>
                            Early years were spent building deep expertise in
                            engineering-focused learning.
                        </p>

                        <p className="journey-hero-year">2017</p>
                        <p>
                            Timmins expanded to Indonesia, marking its first international
                            growth milestone, introducing embedded systems and banking
                            capability programs.
                        </p>
                    </div>
                </section>

                <div className="journey-arrow">↓</div>

                {/* 2018–2019 */}
                <section className="ten-years-page">
                    <div className="journey-block">
                        <h2>Specialization & North America Expansion
                            2018–2019</h2>



                        <p>
                            During these years, Timmins shifted strongly into advanced technical domains:
                        </p>

                        <ul>
                            <li>telecom & 5G capability</li>
                            <li>semiconductor & embedded engineering</li>
                            <li>AI & data foundations</li>

                            <li>enterprise software engineering</li>
                        </ul>

                        <p className="journey-hero-year">2019</p>

                        <p className="journey-note">
                            Timmins expanded operations to Canada, strengthening access to global subject matter experts and enabling cross-regional knowledge exchange. This step connected Timmins with new engineering partners and broadened the delivery of practitioner-led technical upskilling programs.

                        </p>
                    </div>
                </section>

                <div className="journey-arrow">↓</div>

                {/* 2020–2022 */}
                <section className="ten-years-page">
                    <div className="journey-block">
                        <h2>Reinvention Through Disruption (2020–2022)</h2>

                        <p>
                            When the pandemic reshaped the world, Timmins rebuilt its delivery model from the ground up. We launched:
                        </p>

                        <ul>
                            <li>hybrid and fully-virtual learning</li>
                            <li>SCORM-based technical modules</li>
                            <li>remote labs</li>
                            <li>multi-timezone virtual classrooms</li>
                            <li>digital learning analytics for capability tracking</li>
                        </ul>

                        <p className="journey-note">
                            Despite global disruption, our programs reached more learners than ever, keeping engineers, leaders, and teams progressing.
                        </p>
                    </div>
                </section>

                <div className="journey-arrow">↓</div>

                {/* 2023–2025 */}
                <section className="ten-years-page">
                    <div className="journey-block">
                        <h2>
                            Global Reach, Engineering Depth & HRDC Recognition (2023–2025)
                        </h2>

                        <p>
                            Today, Timmins delivers programs in <strong>10+ countries</strong> across Asia-Pacific and North America, in both English and Mandarin. Our clients include global technology companies,
                        </p>

                        <ul>
                            <li>Embedded Systems</li>
                            <li>AI & Machine Learning</li>
                            <li>Telecom & 5G</li>
                            <li>Cloud & DevOps</li>
                            <li>Engineering Upskilling</li>
                        </ul>

                        <p className="journey-note">
                            Recognized as an HRD Corp Training Provider in Malaysia.
                        </p>
                    </div>
                </section>

                {/* IMPACT */}
                <section className="ten-years-page">
                    <div className="tenyears-container impact-grid">
                        <div className="impact-item"><h3>5,000+</h3><p>Professionals Trained</p></div>
                        <div className="impact-item"><h3>200+</h3><p>Customized Programs</p></div>
                        <div className="impact-item"><h3>100+</h3><p>Corporate Clients</p></div>
                        <div className="impact-item"><h3>10+</h3><p>Countries Served</p></div>
                        <div className="impact-item"><h3>2</h3><p>Delivery Languages</p></div>
                        <div className="impact-item"><h3>1</h3><p>Mission</p></div>
                    </div>
                </section>

                {/* QUOTES */}
                <section className="ten-years-page section gap">
                    <div className="quote-card">
                        <p>
                            “Timmins has always been about people and engineers who turn
                            training into real capability.”
                        </p>
                        <span>— Raj Rajaratnam, Managing Director</span>
                    </div>

                    <div className="quote-card">
                        <p>
                            “Organizations trust us because we stay close to technology and
                            people.”
                        </p>
                        <span>— Muna, Director of Learning Delivery</span>
                    </div>
                </section>

                <Footer />
            </main>
        </>
    );
}
