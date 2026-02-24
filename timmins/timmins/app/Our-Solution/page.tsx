"use client";
import { useState } from "react";
import "../section-css/our-solution.css"
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function OurSolutionPage() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  return (
    <>
      <Header />


      {/* OUR SOLUTIONS – HERO INTRO */}
      <section className="solutions-hero">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="solutions-title">
                Our Solutions
              </h1>
              <p className="solutions-subtitle">
                Practitioner-led capability building for engineering-driven
                organizations, combining hands-on learning, domain expertise,
                and real-world application across industries.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* SOLUTION OFFERINGS SECTION */}
      <section className="solutions-offerings">
        <div className="container">

          <div className="section-header text-center">
            <h2>Our Capability Solutions</h2>
            <p>
              Structured, practitioner-led programs designed to build deep,
              scalable engineering capability across organizations.
            </p>
          </div>

          <div className="row g-4">

            {/* 1 */}
            <div className="col-lg-6">
              <div className="solution-card">
                <h4>Fresh Graduate Onboarding Programs</h4>
                <p className="highlight">From fresh talent to project-ready engineers.</p>

                <ul>
                  <li>AI & Machine Learning fundamentals</li>
                  <li>Embedded Linux & Embedded Programming</li>
                  <li>Mobile Development (Kotlin, Jetpack)</li>
                  <li>Cloud, DevOps & Automation</li>
                  <li>Software engineering foundations</li>
                </ul>

                <h6>Features</h6>
                <ul>
                  <li>Blended learning (SCORM + ILT)</li>
                  <li>Hands-on labs & simulations</li>
                  <li>Pre/post assessment</li>
                  <li>Engagement analytics</li>
                  <li><strong>HRDC Claimable Training (Malaysia only)</strong></li>
                </ul>

                <br />

                <a href="/courses" className="solution-link">
                  Explore Technology Programs →
                </a>
              </div>
            </div>

            {/* 2 */}
            <div className="col-lg-6">
              <div className="solution-card">
                <h4>Technology Stack Programs</h4>

                <ul>
                  <li><strong>Embedded Linux Stack:</strong> Boot → Kernel → Drivers → Yocto → Debugging</li>
                  <li><strong>AI Stack:</strong> Python → ML → DL → GenAI → LangChain → Autogen</li>
                  <li><strong>Mobile Dev Stack:</strong> Kotlin → Compose → CI/CD</li>
                </ul>

                <h6>Outcomes</h6>
                <ul>
                  <li>Deeper engineering autonomy</li>
                  <li>Reduced vendor dependency</li>
                  <li>Consistent skill standards</li>
                </ul>
                <br />

                <a href="/solutions/technology-stacks" className="solution-link">
                  See Technical Stacks →
                </a>
              </div>
            </div>

            {/* 3 */}
            <div className="col-lg-6">
              <div className="solution-card">
                <h4>Professional Development Stack</h4>

                <ul>
                  <li>Mindset & adaptability</li>
                  <li>Communication & influence</li>
                  <li>Collaboration & emotional intelligence</li>
                  <li>Productivity & self-management</li>
                  <li>Team enablement & leadership</li>
                </ul>

                <p>
                  Designed for engineers, analysts, managers,
                  and cross-functional teams.
                </p>

                <br />

                <a href="/courses" className="solution-link">
                  Explore Professional Development →
                </a>
              </div>
            </div>

            {/* 4 */}
            <div className="col-lg-6">
              <div className="solution-card">
                <h4>Training Needs Assessment & Skill Matrix</h4>

                <ul>
                  <li>Role-based skills mapping</li>
                  <li>Engineering vs non-engineering segmentation</li>
                  <li>Prerequisite tracking</li>
                  <li>Gap analysis</li>
                  <li>Custom development roadmap</li>
                  <li>Data-driven reporting</li>
                </ul>

                <p>
                  Brings clarity to your capability roadmap and customized training plans.
                </p>
                <br />

                <a href="/solutions/tna" className="solution-link">
                  Build Your Skill Matrix →
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CONSULTING SERVICES SECTION */}
      <section className="consulting-section">
        <div className="container">

          <div className="text-center mb-5">
            <h2>Consulting Services</h2>
            <p>
              We extend our learning impact into execution through
              domain-specific consulting.
            </p>
          </div>

          <div className="row g-4">

            {/* 1 */}
            <div className="col-lg-4">
              <div className="consult-card">
                <h5>Embedded Linux Consulting</h5>
                <p>
                  Kernel, BSP, drivers, Yocto, debugging
                </p>
                <span className="consult-desc">
                  Ideal for manufacturing, embedded, IoT, and device companies.
                </span>
              </div>
            </div>

            {/* 2 */}
            <div className="col-lg-4">
              <div className="consult-card">
                <h5>AI Consulting</h5>
                <p>
                  GenAI workflows, LLM integration, LangChain, automation
                </p>
                <span className="consult-desc">
                  Ideal for telco, software, and digital banking.
                </span>
              </div>
            </div>

            {/* 3 */}
            <div className="col-lg-4">
              <div className="consult-card">
                <h5>Mobile Development Consulting</h5>
                <p>
                  Android framework, Kotlin, Jetpack, performance optimization
                </p>
                <span className="consult-desc">
                  Ideal for fintech, telco, and mobile-first enterprises.
                </span>
              </div>
            </div>

          </div>

          <div className="consult-footer text-center mt-5">
            <p>
              All consulting engagements use our engineering-first approach:
              <strong>
                {" "}
                practitioner-led, system-aware, and designed for measurable capability uplift.
              </strong>
            </p>

            <a href="/solutions/consulting" className="consult-link">
              👉 View Consulting Services →
            </a>
          </div>

        </div>
      </section>


      {/* SAFe CERTIFICATION SECTION */}
      <section className="safe-section">
        <div className="container">

          <div className="row align-items-center g-5">

            {/* LEFT CONTENT */}
            <div className="col-lg-7">
              <div className="safe-badge">Official Bronze Partner</div>

              <h2>
                Scaled Agile Certification (SAFe®)
              </h2>

              <p>
                As an Official Scaled Agile Bronze Partner, we deliver SAFe®
                certification programs for manufacturing, telecom, banking,
                and large-scale engineering organizations.
              </p>

              <h6 className="mt-4">Popular Certifications</h6>

              <ul className="safe-list">
                <li>SAFe® 6.0 Training</li>
                <li>Leading SAFe (SAFe Agilist)</li>
                <li>SAFe Scrum Master (SSM)</li>
                <li>SAFe Advanced Scrum Master (SASM)</li>
                <li>SAFe DevOps Practitioner</li>
                <li>SAFe for Teams</li>
                <li>SAFe Release Train Engineer</li>
                <li>SAFe Agile Product Management</li>
              </ul>

              <a href="/solutions/agile" className="safe-link">
                👉 Explore SAFe® Certifications →
              </a>
            </div>

            {/* RIGHT FEATURE BOX */}
            <div className="col-lg-5">
              <div className="safe-feature-box">
                <h5>Program Highlights</h5>

                <ul>
                  <li>Delivered by certified SAFe® trainers</li>
                  <li>Private corporate batches</li>
                  <li><strong>HRDC Claimable Training (Malaysia only)</strong></li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* WHY ORGANIZATIONS CHOOSE TIMMINS */}
      <section className="why-timmins">
        <div className="container">

          <div className="text-center mb-5">
            <h2>Why Organizations Choose Timmins</h2>
            <p>
              Trusted by engineering-driven enterprises for measurable,
              practitioner-led capability transformation.
            </p>
          </div>

          <div className="row g-4">

            <div className="col-md-6 col-lg-4">
              <div className="why-card">
                <h4>Practitioner-Led</h4>
                <p>Engineering-grade programs designed by domain experts.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="why-card">
                <h4>5,000+ Professionals</h4>
                <p>Successfully trained across industries.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="why-card">
                <h4>200+ Customized Programs</h4>
                <p>Tailored solutions aligned to business goals.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="why-card">
                <h4>100+ Global Clients</h4>
                <p>Manufacturing, telecom, banking & engineering sectors.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="why-card">
                <h4>HRDC Claimable</h4>
                <p>Eligible training programs in Malaysia.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="why-card">
                <h4>Measurable Impact</h4>
                <p>Capability uplift with tangible business outcomes.</p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* FINAL CTA SECTION */}
      <section className="final-cta">
        <div className="container text-center">

          <h2>Build Capability With Us</h2>

          <p>
            Let’s design a capability roadmap that fits your teams and industry.
          </p>

          <div className="cta-buttons">
            <a href="/contact" className="btn-primary-cta">
              Speak to Our Team
            </a>

          </div>

        </div>
      </section>

      <section className="ed-faq section-gap position-relative overflow-hidden">

        <div className="container ">

          <div className="section-heading-center">
            <h2>Frequently Asked Questions</h2>
          </div>


          <div className="faq-grid">

            {[
              {
                question: "1. What is the best embedded systems training for beginners?",
                answer: "The recommended beginner courses are OS Essentials, Embedded C & GDB, and Embedded Linux System Internals. These courses provide a strong foundation in operating systems, embedded programming, debugging, and Linux internals."

              },
              {
                question: "2. Does Timmins offer AI consulting or only training?",
                answer: "Timmins offers both AI consulting and AI training, including capability assessment, use-case identification, and structured enterprise AI upskilling programs."
              },
              {
                question: "3. Are your programs HRDC Claimable?",
                answer: "Yes. For Malaysian employers only, many AI, Embedded Systems, 5G, and corporate training programs are HRDC claimable, subject to eligibility and approval."
              },
              {
                question: "4. Do you provide customized training for engineering teams?",
                answer: "Yes. Timmins specializes in customized, role-based training pathways for embedded systems, AI, 5G, and software engineering teams."
              },
              {
                question: "5.Are Timmins training courses available online?",
                answer: "Yes. Timmins offers online, on-site, and hybrid training programs for engineering and technical teams."
              },
              {
                question: "6. What industries does Timmins work with?",
                answer: "Timmins works with semiconductors, telecom, manufacturing, banking, digital platforms, and technology-driven enterprises."
              },
              {
                question: "7. Do you provide corporate training outside Malaysia?",
                answer: "Yes. Timmins delivers corporate training across Malaysia, Singapore, Indonesia, China, India, Vietnam, the United States, and Canada."
              },
              {
                question: "8. How is Timmins different from other corporate training providers?",
                answer: "Timmins is practitioner-led, engineering-grade, and deeply specialized, focusing on real capability building rather than generic or tool-centric training."
              },
              {
                question: "9. Do you offer end-to-end Embedded Linux training?",
                answer: "Yes. Timmins covers Embedded Linux end-to-end, including OS Essentials, Embedded C & GDB, Embedded Linux System Internals, device drivers (audio, I2C), kernel debugging, user-space and kernel internals, and SELinux, security."
              },
              {
                question: "10. Can Timmins design onboarding programs for fresh graduates?",
                answer: "Yes. Timmins has designed and delivered large-scale onboarding and engineering academy programs for semiconductor and telecom organizations."
              }
            ].map((item, index) => (
              <div
                key={index}
                className={`faq-card ${activeAccordion === index ? "active" : ""}`}
              >
                <div
                  className="faq-question"
                  onClick={() =>
                    setActiveAccordion(activeAccordion === index ? null : index)
                  }
                >
                  <span>{item.question}</span>
                  <span className="arrow">
                    {activeAccordion === index ? "−" : "›"}
                  </span>
                </div>

                <div
                  className={`faq-answer ${activeAccordion === index ? "show" : ""
                    }`}
                >
                  {item.answer}
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}