"use client";

import { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const FAQ_ITEMS = [
  { question: "What is the best embedded systems training for beginners?", answer: "The recommended beginner courses are OS Essentials, Embedded C & GDB, and Embedded Linux System Internals. These courses provide a strong foundation in operating systems, embedded programming, debugging, and Linux internals." },
  { question: "Does Timmins offer AI consulting or only training?", answer: "Timmins offers both AI consulting and AI training, including capability assessment, use-case identification, and structured enterprise AI upskilling programs." },
  { question: "Are your programs HRDC Claimable?", answer: "Yes. For Malaysian employers only, many AI, Embedded Systems, 5G, and corporate training programs are HRDC claimable, subject to eligibility and approval." },
  { question: "Do you provide customized training for engineering teams?", answer: "Yes. Timmins specializes in customized, role-based training pathways for embedded systems, AI, 5G, and software engineering teams." },
  { question: "Are Timmins training courses available online?", answer: "Yes. Timmins offers online, on-site, and hybrid training programs for engineering and technical teams." },
  { question: "What industries does Timmins work with?", answer: "Timmins works with semiconductors, telecom, manufacturing, banking, digital platforms, and technology-driven enterprises." },
  { question: "Do you provide corporate training outside Malaysia?", answer: "Yes. Timmins delivers corporate training across Malaysia, Singapore, Indonesia, China, India, Vietnam, the United States, and Canada." },
  { question: "How is Timmins different from other corporate training providers?", answer: "Timmins is practitioner-led, engineering-grade, and deeply specialized, focusing on real capability building rather than generic or tool-centric training." },
  { question: "Do you offer end-to-end Embedded Linux training?", answer: "Yes. Timmins covers Embedded Linux end-to-end, including OS Essentials, Embedded C & GDB, Embedded Linux System Internals, device drivers (audio, I2C), kernel debugging, user-space and kernel internals, and SELinux, security." },
  { question: "Can Timmins design onboarding programs for fresh graduates?", answer: "Yes. Timmins has designed and delivered large-scale onboarding and engineering academy programs for semiconductor and telecom organizations." },
];

const SOLUTION_CARDS = [
  {
    title: "Fresh Graduate Programs",
    description: "From fresh talent to project-ready engineers. We design onboarding programs that accelerate readiness for engineering, tech, and operations roles.",
    features: ["AI & ML fundamentals", "Embedded Linux", "Mobile (Kotlin, Jetpack)", "Cloud & DevOps", "HRDC Claimable"],
    icon: "cap",
    link: "/solutions/tna",
  },
  {
    title: "Technology Stack Programs",
    description: "End-to-end skill mastery for technical teams across Embedded Linux, AI, and Mobile stacks.",
    features: ["Embedded Linux Stack", "AI Stack", "Mobile Stack", "Engineering autonomy"],
    icon: "chip",
    link: "/solutions/technology-stacks",
  },
  {
    title: "Professional Development",
    description: "Human capability for engineering-driven organizations: mindset, communication, collaboration, and leadership.",
    features: ["Mindset & adaptability", "Communication & influence", "Team enablement"],
    icon: "people",
    link: "/solutions/tna",
  },
  {
    title: "Training Needs Assessment",
    description: "Measure, benchmark, transform. Role-based skills mapping, gap analysis, and data-driven reporting.",
    features: ["Skills mapping", "Gap analysis", "Custom roadmap", "HRDC support"],
    icon: "chart",
    link: "/solutions/tna",
  },
];

const TECH_PILLS = [
  "Embedded Linux", "AI & GenAI", "Mobile (Kotlin)", "Cloud & DevOps",
  "5G & Telecom", "Software Engineering", "Data Analytics", "Automation",
  "Yocto & BSP", "LangChain", "Jetpack Compose", "CI/CD",
];

export default function OurSolutionPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <>
      <Header />

      <div className="sol-page">
        {/* Hero: gradient, headline, orange CTA */}
        <section className="sol-hero">
          <div className="sol-hero__pattern" aria-hidden="true" />
          <div className="sol-hero__inner">
            <h1 className="sol-hero__title">Empowering Tech Teams & Individuals</h1>
            <p className="sol-hero__subtitle">
              Practitioner-led capability building for engineering-driven organizations—hands-on learning, domain expertise, and real-world application across industries.
            </p>
            <a href="/solutions/tna" className="sol-hero__cta">Explore Our Solutions</a>
          </div>
        </section>

        {/* Our Solutions: section title + 4 cards grid */}
        <section className="sol-section sol-solutions">
          <div className="sol-container">
            <h2 className="sol-section__title">Our Solutions</h2>
            <div className="sol-section__line" />
            <div className="sol-cards">
              {SOLUTION_CARDS.map((card, i) => (
                <div key={i} className="sol-card">
                  <div className="sol-card__icon">
                    {card.icon === "cap" && <SolIconCap />}
                    {card.icon === "chip" && <SolIconChip />}
                    {card.icon === "people" && <SolIconPeople />}
                    {card.icon === "chart" && <SolIconChart />}
                  </div>
                  <h3 className="sol-card__title">{card.title}</h3>
                  <p className="sol-card__desc">{card.description}</p>
                  <ul className="sol-card__features">
                    {card.features.map((f, j) => (
                      <li key={j}><span className="sol-card__dot" />{f}</li>
                    ))}
                  </ul>
                  <a href={card.link} className="sol-card__link">Learn more</a>
                </div>
              ))}
            </div>
            <a href="/solutions/tna" className="sol-btn sol-btn--primary">See More Solutions</a>
          </div>
        </section>

        {/* Technology Stack: dark blue, white text, pills */}
        <section className="sol-section sol-tech">
          <div className="sol-container sol-container--narrow">
            <h2 className="sol-tech__title">Technology Stack Services</h2>
            <p className="sol-tech__desc">
              Our Technology Stack Programs help engineers build mastery across complete domains—Embedded Linux, AI, Mobile—not isolated modules.
            </p>
            <div className="sol-tech__icon-wrap">
              <SolIconShield />
            </div>
            <div className="sol-tech__pills">
              {TECH_PILLS.map((label, i) => (
                <span key={i} className="sol-tech__pill"><SolIconCog />{label}</span>
              ))}
            </div>
            <a href="/solutions/technology-stacks" className="sol-btn sol-btn--light">Start Your Solution</a>
          </div>
        </section>

        {/* Consulting: title + 4 metric boxes */}
        <section className="sol-section sol-consulting">
          <div className="sol-container">
            <h2 className="sol-consulting__title">Consulting Services</h2>
            <p className="sol-consulting__tagline">From learning to implementation, led by practitioners.</p>
            <div className="sol-metrics">
              <div className="sol-metric">
                <span className="sol-metric__value">5,000+</span>
                <span className="sol-metric__label">Professionals Trained</span>
              </div>
              <div className="sol-metric">
                <span className="sol-metric__value">10+</span>
                <span className="sol-metric__label">Years of Experience</span>
              </div>
              <div className="sol-metric">
                <span className="sol-metric__value">200+</span>
                <span className="sol-metric__label">Customized Programs</span>
              </div>
              <div className="sol-metric">
                <span className="sol-metric__value">100+</span>
                <span className="sol-metric__label">Global Clients</span>
              </div>
            </div>
            <div className="sol-consulting__list">
              <div className="sol-consulting__item">
                <h4>Embedded Linux Consulting</h4>
                <p>Kernel, BSP, drivers, Yocto, debugging — ideal for manufacturing, embedded, IoT.</p>
              </div>
              <div className="sol-consulting__item">
                <h4>AI Consulting</h4>
                <p>GenAI workflows, LLM integration, LangChain — ideal for telco, software, digital banking.</p>
              </div>
              <div className="sol-consulting__item">
                <h4>Mobile Development Consulting</h4>
                <p>Android, Kotlin, Jetpack, performance — ideal for fintech, telco, mobile-first enterprises.</p>
              </div>
            </div>
            <a href="/solutions/consulting" className="sol-btn sol-btn--primary">View Consulting Services</a>
          </div>
        </section>

        {/* Why Choose Us: two-column text */}
        <section className="sol-section sol-why">
          <div className="sol-container">
            <h2 className="sol-why__title">Why Organizations Choose Timmins</h2>
            <div className="sol-why__grid">
              <div className="sol-why__col">
                <h3>Practitioner-led & engineering-grade</h3>
                <p>We don’t just teach skills. We build engineers, teams, and systems. Our programs are delivered by people with real industry experience and grounded in real-world application.</p>
                <p>Relevant across manufacturing, telecom, banking, and engineering—with measurable impact and capability uplift.</p>
              </div>
              <div className="sol-why__col">
                <h3>Global reach, local impact</h3>
                <p>Programs delivered in 11+ countries, in English and Mandarin. Clients include global tech companies, engineering manufacturers, banks, universities, and public organizations.</p>
                <p>HRDC-Claimable in Malaysia. SAFe® Bronze Partner. Over a decade of onboarding success.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA strip */}
        <section className="sol-section sol-cta-strip">
          <div className="sol-container sol-container--narrow">
            <h2 className="sol-cta-strip__title">Build Capability With Us</h2>
            <p className="sol-cta-strip__text">Let’s design a capability roadmap that fits your teams and industry.</p>
            <div className="sol-cta-strip__buttons">
              <a href="/solutions/consulting" className="sol-btn sol-btn--primary">For Companies – Explore Solutions</a>
              <a href="/courses" className="sol-btn sol-btn--outline">For Individuals – Browse Public Classes</a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="sol-section sol-faq">
          <div className="sol-container sol-container--narrow">
            <h2 className="sol-faq__title">Frequently Asked Questions</h2>
            <p className="sol-faq__subtitle">Answers for teams and individuals exploring our solutions.</p>
            <div className="sol-faq__list">
              {FAQ_ITEMS.map((item, i) => (
                <div
                  key={i}
                  className={`sol-faq__item ${activeFaq === i ? "sol-faq__item--open" : ""}`}
                >
                  <button
                    type="button"
                    className="sol-faq__q"
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    aria-expanded={activeFaq === i}
                  >
                    {item.question}
                    <span className="sol-faq__icon">{activeFaq === i ? "−" : "+"}</span>
                  </button>
                  <div className="sol-faq__a">{item.answer}</div>
                </div>
              ))}
            </div>
            <a href="/contact-us" className="sol-btn sol-btn--primary">Get in Touch</a>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

function SolIconCap() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 4L2 8l10 4 10-4-10-4z" /><path d="M2 8v6l10 4 10-4V8" /><path d="M6 12l6 2 6-2" /></svg>
  );
}
function SolIconChip() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M9 9h6v6H9z" /><path d="M9 4v4M15 4v4M9 16v4M15 16v4M4 9h4M4 15h4M16 9h4M16 15h4" /></svg>
  );
}
function SolIconPeople() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="9" cy="7" r="3" /><path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" /><circle cx="17" cy="11" r="2" /><path d="M21 21v-1a3 3 0 00-3-3" /></svg>
  );
}
function SolIconChart() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 3v18h18" /><path d="M7 14l4-4 4 4 5-6" /></svg>
  );
}
function SolIconShield() {
  return (
    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
  );
}
function SolIconCog() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></svg>
  );
}
