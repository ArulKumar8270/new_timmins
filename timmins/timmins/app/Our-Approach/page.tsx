import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

const page = () => {
    return (
        <>

            <Header />


            <section className="approach-listen case-hero py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-9 text-center">

                            <h1 className="case-hero-title mb-3">
                                Our Approach
                            </h1>

                            <p className="case-hero-desc mb-4">
                                Practitioner-led, engineering-grade learning designed to build real technical and digital capability in environments that reflect real-world engineering.
                            </p>


                        </div>

                    </div>
                </div>
            </section>

            <section className=" approach-section-1  listen-first section gap">
                <div className="approach-container">
                    {/* LEFT CONTENT */}
                    <div className="approach-text">
                        <h2>We Listen First</h2>
                        <p>
                            Every partnership begins with understanding. We start by listening to your business goals, your team’s skill gaps, and your organization’s challenges. This includes:
                        </p>
                        <ul>
                            <li>Skill gap mapping</li>
                            <li>Engineering &amp; technical workflow review</li>
                            <li>Project-specific learning needs</li>
                            <li>Alignment to your competency framework</li>
                        </ul>
                        <p className="approach-outcome">
                            <strong>Outcome:</strong> a clear, precise understanding of the
                            capability you need to build — not a generic assumption.
                        </p>
                    </div>
                    {/* RIGHT IMAGE */}
                    <div className="approach-image">
                        <img src="/assets/New_images/Approach.jpg" alt="We listen first" />

                    </div>
                </div>
            </section>

            <section className="approach-section co-design">
                <div className="approach-container reverse">
                    {/* LEFT IMAGE */}
                    <div className="approach-image">
                        <img
                            src="/assets/New_images/Approach.jpg"
                            alt="Co-design tailored solutions"
                        />
                    </div>
                    {/* RIGHT CONTENT */}
                    <div className="approach-text">
                        <h2>We Co-Design Tailored Solutions</h2>
                        <p>
                            We create customized training programs that reflect your actual
                            engineering context. This involves:
                        </p>
                        <ul>
                            <li>Co-design with your L&amp;D and engineering leaders</li>
                            <li>Curated SMEs for each domain</li>
                            <li>Real-world labs and simulations</li>
                            <li>Custom cases, architectures, and workflows</li>
                        </ul>
                        <p className="approach-outcome">
                            <strong>Outcome:</strong> a tailored training blueprint engineered for
                            your organization — not a template reused across companies.
                        </p>
                    </div>
                </div>
            </section>

            <section className="approach-section-1 deliver-experts section gap">
                <div className="approach-container">
                    {/* LEFT CONTENT */}
                    <div className="approach-text">
                        <h2>We Deliver Through Experts and Experience</h2>
                        <p>
                            Every Timmins program is delivered by practitioners, not theoretical
                            trainers. Our SMEs have hands-on experience in:
                        </p>
                        <ul>
                            <li>Embedded systems &amp; embedded programming</li>
                            <li>AI &amp; machine learning implementation</li>
                            <li>Telecom &amp; 5G engineering</li>
                            <li>Cloud, DevOps &amp; automation</li>
                            <li>Software engineering &amp; architecture</li>
                        </ul>
                        <p>We bring real engineering practice into every session through:</p>
                        <ul>
                            <li>Hands-on labs</li>
                            <li>Guided technical projects</li>
                            <li>Real case studies</li>
                            <li>Live simulations</li>
                        </ul>
                        <p className="approach-outcome">
                            <strong>Outcome:</strong> learners gain job-ready capability — not just
                            knowledge.
                        </p>
                    </div>
                    {/* RIGHT IMAGE */}
                    <div className="approach-image">
                        <img
                            src="/assets/New_images/Approach.jpg"
                            alt="Experts delivering hands-on engineering training"
                        />
                    </div>
                </div>
            </section>

            <section className="measure-section">
                <h2>We Measure What Matters</h2>
                <p className="measure-sub">
                    We measure capability uplift, not attendance. Our measurement includes:
                </p>

                <div className="measure-grid">
                    <div className="measure-card">
                        <h4>Pre / Post Assessments</h4>
                        {/* <p>Clear benchmarking of skill levels before and after training.</p> */}
                    </div>

                    <div className="measure-card">
                        <h4>Individual Skill Progression</h4>
                        {/* <p>Track how each learner improves across defined competencies.</p> */}
                    </div>

                    <div className="measure-card">
                        <h4>Team Capability Uplift</h4>
                        {/* <p>Aggregate reporting showing capability growth at team level.</p> */}
                    </div>

                    <div className="measure-card">
                        <h4>Stakeholder Summaries</h4>
                        {/* <p>Clear executive-ready insights aligned to business goals.</p> */}
                    </div>

                    <div className="measure-card">
                        <h4>Recommended Next Steps</h4>
                        {/* <p>Actionable guidance for continued capability development.</p> */}
                    </div>
                </div>

                <div className="measure-outcome">
                    <strong>Outcome:</strong> evidence-based insight into what changed and why it matters.
                </div>
            </section>



            <section className="approach-section-1 stay-connected section gap">
                <div className="approach-container">
                    {/* LEFT CONTENT */}
                    <div className="approach-text">
                        <h2>We Stay Connected</h2>
                        <p>
                            Capability isn’t built in a day — and we stay with you beyond the
                            program. Our support continues through:
                        </p>
                        <ul>
                            <li>Reinforcement sessions</li>
                            <li>Technical mentoring</li>
                            <li>Micro-learning components</li>
                            <li>Periodic capability reviews</li>
                        </ul>
                        <p className="approach-outcome">
                            <strong>Outcome:</strong> sustained, long-term growth instead of one-off
                            training.
                        </p>
                    </div>
                    {/* RIGHT IMAGE */}
                    <div className="approach-image">
                        <img
                            src="/assets/New_images/Approach.jpg"
                            alt="Long-term partnership and continued learning support"
                        />
                    </div>
                </div>
            </section>

            <section className="approach-section final-promise">
                <div className="final-container">
                    <h2>Why Our Approach Works</h2>
                    <p className="final-intro">
                        Because it connects the three foundations of engineering capability:
                    </p>
                    <div className="final-pillars">
                        <div className="pillar">
                            <h4>Context</h4>
                            <p>Understand your real engineering environment</p>
                        </div>
                        <div className="pillar">
                            <h4>Design</h4>
                            <p>Build training that fits that environment</p>
                        </div>
                        <div className="pillar">
                            <h4>Delivery</h4>
                            <p>Execute through real practitioners</p>
                        </div>
                    </div>
                    <p className="final-outcome">
                        This is how learning becomes performance. And how training becomes
                        capability.
                    </p>
                    <br />

                </div>
            </section>

            <section className="approach-cta py-5">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-8">

                            <h2 className="mb-3 fw-bold">
                                Ready to Build Capability?
                            </h2>

                            <p className="mb-4 text-muted">
                                Let’s design a solution that fits your engineering and business needs.
                            </p>

                            <div className="d-flex justify-content-center gap-3 flex-wrap">

                                {/* PRIMARY */}
                                <a href="/solutions" className="btn btn-cta-primary">
                                    Explore Technical Solutions →
                                </a>

                                {/* SECONDARY */}
                                <a href="/courses" className="btn btn-cta-outline">
                                    View Courses →
                                </a>

                                {/* TERTIARY */}
                                <a href="/contact" className="btn btn-cta-soft">
                                    Speak to Our Team →
                                </a>

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
