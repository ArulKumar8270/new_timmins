"use client";
import { useState } from "react";
import "../section-css/our-solution.css"
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import CaseStudyDownloadModal from "../case-study/CaseStudyDownloadModal";

const TECH_STACK_PDF = "/assets/pdf/Timmins Technology Stack.pdf";

export default function OurSolutionPage() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [showTechStackModal, setShowTechStackModal] = useState(false);

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
              <a href="#solutions-offerings" className="solutions-hero-btn">
                Explore Solutions
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* SOLUTION OFFERINGS SECTION - Alternating Text | Image layout */}
      <section id="solutions-offerings" className="solutions-offerings">
        <div className="container">

          {/* 1: Text left | Image right */}
          <div className="solution-row">
            <div className="solution-row-text">
              <h2>Fresh Graduate Onboarding Programs</h2>
              <p className="solution-highlight">From fresh talent to project-ready engineers.</p>
              <p>We design onboarding programs that accelerate readiness for engineering, tech, and operations roles across industries. Our multi-industry curricula cover:
              </p>
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
                <li>Hands-on labs and real-case simulations</li>
                <li>Pre-/post-assessment</li>
                <li>Engagement analytics</li>
                <li><strong>HRDC Claimable Training (Malaysia only)</strong></li>
              </ul>
              <a href="/contact-us" className="solution-link">
              Curate Your Programs →
              </a>
            </div>
            <div className="solution-row-image">
              <img src="/assets/New_images/AP1.png" alt="Fresh graduate onboarding and training" />
            </div>
          </div>
        </div>
      </section>
      <section id="solutions-offerings" className="solutions-offerings solutions-offerings--alt">
        <div className="container">
          {/* 2: Image left | Text right */}
          <div className="solution-row solution-row-reverse">
            <div className="solution-row-image">
              <img src="/assets/New_images/our-solution/Consulting service at Timmins.png" alt="Technology stack programs" />
            </div>
            <div className="solution-row-text">
              <h2>Technology Stack Programs</h2>
              <p>Our Technology Stack Programs help engineers build mastery across complete domains, not isolated modules. Sample stacks:</p>
              <ul>
                <li><strong>Embedded Linux Stack:</strong> Boot → Kernel → Drivers → Yocto → Debugging</li>
                <li><strong>AI Stack:</strong> Python → ML → DL → GenAI → LangChain → Autogen</li>
                <li><strong>Mobile Apps Dev Stack:</strong> Kotlin → Jetpack → Compose → Optimization → CI/CD</li>
              </ul>
              <h6>Outcomes</h6>
              <ul>
                <li>Deeper engineering autonomy</li>
                <li>Reduced dependency on external vendors</li>
                <li>Consistent skill standards across teams</li>
              </ul>
              <button
                type="button"
                className="solution-link"
                onClick={() => setShowTechStackModal(true)}
              >
                Explore Our Technology Stack →
              </button>
            </div>
          </div>
        </div>
      </section>

      <CaseStudyDownloadModal
        isOpen={showTechStackModal}
        onClose={() => setShowTechStackModal(false)}
        downloadUrl={TECH_STACK_PDF}
        caseStudyName="Technology Stack"
        title="Download Technology Stack"
      />

      <section id="solutions-offerings" className="solutions-offerings">
        <div className="container">
          {/* 3: Text left | Image right */}
          <div className="solution-row">
            <div className="solution-row-text">
              <h2>Professional Development Stack</h2>
              <p>Our Professional Development Stack strengthens:
              </p>
              <ul>
                <li>Mindset & adaptability</li>
                <li>Communication & influence</li>
                <li>Collaboration & emotional intelligence</li>
                <li>Productivity & self-management</li>
                <li>Team enablement & leadership</li>
              </ul>
              <p>
                This stack is designed for engineers, analysts, managers,
                and cross-functional teams across industries.
              </p>
              <a href="/contact-us" className="solution-link">
              Curate Your Programs →
              </a>
            </div>
            <div className="solution-row-image">
              <img src="/assets/New_images/our-solution/Professional Stack Development at Timmins.png" alt="Professional development training" />
            </div>
          </div>

          {/* 4: Image left | Text right */}
          <div className="solution-row solution-row-reverse">
            <div className="solution-row-image">
              <img src="/assets/New_images/our-solution/Timmins skills matrix.png" alt="Training needs assessment and skill matrix" />
            </div>
            <div className="solution-row-text">
              <h2>Training Needs Assessment & Skill Matrix</h2>
              <p>We help organizations evaluate capability objectively through:
              </p>
              <ul>
                <li>Role-based skills mapping</li>
                <li>Engineering vs non-engineering segmentation</li>
                <li>Prerequisite tracking</li>
                <li>Gap analysis</li>
                <li>Custom development roadmap</li>
                <li>Data-driven reporting</li>
              </ul>
              <p>
                This brings clarity to your training needs assessment, customized training plans, and professional development training roadmap.
              </p>
              <a href="/contact-us" className="solution-link">
              Talk to Our Expert →
              </a>
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

            {/* <a href="/solutions/consulting" className="consult-link">
              👉 View Consulting Services →
            </a> */}
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

              {/* <a href="/Scaled-Agile" className="safe-link">
                👉 Explore SAFe® Certifications →
              </a> */}
            </div>

            {/* RIGHT FEATURE BOX */}
            <div className="col-lg-5">
              <div className="safe-feature-box">
                <h5>Features:</h5>

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
                <p>Practitioner-led, engineering-grade programs relevant across industries.</p>
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
            <a href="/contact-us" className="btn-primary-cta">
              Speak to Our Team
            </a>
            <a href="https://consult-timmins.com/course/" target="_blank" rel="noopener noreferrer" className="btn-primary-cta btn-secondary-cta">
              Explore Courses
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
                question: "1. What is Scaled Agile Certification (SAFe)?",
                answer: "Scaled Agile Certification (SAFe) is a globally recognized framework for implementing agile at enterprise scale. Companies search for it to improve program delivery, cross-team collaboration, and organizational agility."
              },
              {
                question: "2. Is SAFe Scrum Master Certification worth it?",
                answer: "Yes. SAFe Scrum Master Certification is valuable for professionals working in enterprises with complex, multi-team environments. It enhances career opportunities and qualifies you for roles in large-scale agile transformations."
              },
              {
                question: "3. What is Embedded Linux used for?",
                answer: "Embedded Linux is widely used in IoT devices, industrial automation, automotive systems, consumer electronics, and medical devices. Companies search this when looking for engineers who understand kernel, drivers, and system-level programming."
              },
              {
                question: "4. What skills are required for Embedded Linux development?",
                answer: "Common prerequisites include C programming, Linux basics, shell scripting, cross-compiling, kernel concepts, and Yocto/Buildroot exposure."
              },
              {
                question: "5. What is a Skill Matrix in training?",
                answer: "A skill matrix is a structured tool that maps team competencies, identifies skill gaps, and guides training planning. It's often searched by L&D leaders planning technical upskilling."
              },
              {
                question: "6. How do I build a fresh graduate onboarding program for engineers?",
                answer: "Graduate onboarding programs should combine technical fundamentals, hands-on labs, SCORM modules, assessments, and supervised projects. Many engineering and banking companies search for this to accelerate talent readiness."
              },
              {
                question: "7. What is HRDC Claimable Training?",
                answer: "HRDC Claimable Training allows Malaysian employers to claim training costs under HRD Corp. (This applies only to Malaysian organizations.)"
              },
              {
                question: "8. Does Timmins offer Customized Training?",
                answer: "Yes. We specialize in custom-designed capability programs based on technology stack, workflow, and team goals."
              },
              {
                question: "9. Does Timmins provide consulting, not just training?",
                answer: "Yes. We offer Embedded Linux Consulting, AI Consulting, and Mobile Development Consulting for organizations needing technical implementation support."
              },
              {
                question: "10. What is the difference between corporate training and customized training?",
                answer: "Corporate training usually refers to standardized programs delivered to many companies, while customized training is tailored specifically to your organization's technology stack, workflows, skill gaps, and business goals. Customized programs deliver higher relevance and better capability outcomes for engineering-driven teams."
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
                    {activeAccordion === index ? "⌃" : "⌄"}
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