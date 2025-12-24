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
                        <p>In 2025, Timmins Training Consulting celebrates 10 years of transforming how organizations learn, build capability, and navigate emerging technologies.</p>
                        <br />
                        <p>What began in Malaysia with a simple vision, making corporate learning meaningful, practical, and engineering-grade, has grown into a multi-country capability partner trusted across Asia and North America.</p>
                        <br />
                        <p>A decade later, that vision has powered advanced tech training that supports engineers, developers, analysts, and leaders worldwide.</p>

                    </div>
                </section>

                <div className="journey-arrow">↓</div>

                {/* JOURNEY */}

                <section className="ten-years-page-1">
                    <div className="journey-hero-inner">
                        <h1> Where It All Began - (2015 – 2017)</h1>

                        <p className="journey-hero-year">2015</p>
                        <p> Timmins Training Consulting was officially registered as a corporate training provider in Malaysia. The founding purpose was clear from day one:</p>
                        <p><i><u>Corporate training must be relevant, hands-on, and driven by real industry practitioners, not generic slides.</u></i></p>
                        <br />
                        <p>Early years were spent building deep expertise in engineering-focused learning, from technical fundamentals to applied industry skills.</p>
                        <br />
                        <p className="journey-hero-year">2017</p>
                        <p> Timmins expanded to Indonesia, marking the first international growth milestone. Here, we introduced specialized capability programs for the engineering and banking sectors, particularly in embedded systems, firmware fundamentals, and practical programming for hardware-software integration.
                        </p>

                    </div>
                </section>

                <div className="journey-arrow">↓</div>

                <section className="ten-years-page">

                    <div className="journey-block listStyle">
                        <h2>Reinvention Through Disruption (2018–2019)</h2>

                        <p>
                            When the pandemic reshaped the world, Timmins rebuilt its delivery model
                            from the ground up. We launched:
                        </p>

                        <ul>
                            <li>Hybrid and fully-virtual learning</li>
                            <li>SCORM-based technical modules</li>
                            <li>Remote labs</li>
                            <li>Multi-timezone virtual classrooms</li>
                            <li>Digital learning analytics for capability tracking</li>
                        </ul>

                        <p className="journey-note">
                            Despite global disruption, our programs reached more learners than ever,
                            keeping engineers, leaders, and teams progressing.
                        </p>
                    </div>


                </section>



                <div className="journey-arrow">↓</div>

                <section className="ten-years-page-1">

                    <div className="journey-block listStyle bgBlue">
                        <h2>Reinvention Through Disruption (2020–2022)
                        </h2>

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

                <section className="ten-years-page">

                    <div className="journey-block listStyle">
                        <h2>Global Reach, Engineering Depth, and HRDC Recognition (2023–2025)</h2>

                        <p>
                            Today, Timmins delivers programs in 10+ countries across Asia-Pacific and North America, in both English and Mandarin. Our clients include global technology companies, engineering-intensive manufacturers, banks & financial institutions, and universities & public organizations
                        </p>
                        <p>Timmins is recognized as an HRD Corp Training Provider, enabling Malaysian organizations to claim HRDC-Claimable Training for all Timmins programs.
                            (Note: HRDC benefits apply specifically to Malaysian employers.)</p>
                        <h6>Across markets, our capability areas include:</h6>

                        <ul>
                            <li>Embedded Systems Training</li>
                            <li>Embedded Programming Training</li>
                            <li>AI & Machine Learning Foundations</li>
                            <li>Telecom, 5G & network capability</li>
                            <li>Cloud, DevOps & automation</li>
                            <li>Technical Upskilling for engineering teams</li>
                        </ul>

                        <p className="journey-note">

                            As a Corporate Training Provider with engineering-grade depth, we continue to help organizations stay competitive through hands-on, practitioner-led learning.

                        </p>
                    </div>


                </section>



                {/* IMPACT COUNTERS */}
                <section className="ten-years-page-1">
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
                <section className="ten-years-page section gap">
                    <div className="quote-card">
                        <p>“Timmins has always been about people and engineers who turn training into real capability.”</p>
                        <span>— Raj Rajaratnam, Managing Director</span>
                    </div>

                    <div className="quote-card">
                        <p>“Organizations trust us because we stay close to technology and people.”</p>
                        <span>— Muna, Director of Learning Delivery</span>
                    </div>
                </section>


                <Footer />

            </main>

        </>
    );
}
