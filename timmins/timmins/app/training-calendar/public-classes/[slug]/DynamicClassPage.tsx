"use client";

import { useState, useRef } from "react";
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import ClassRegistrationModal from "./ClassRegistrationModal";
import "../../../section-css/public.css";
import type { PublicClassSession } from "@/lib/supabase";
import { DEFAULT_COURSE_CONTENT, type CourseContent } from "@/lib/course-content";


const TRUSTED_LOGOS = [
  { src: "/assets/New_images/clients/Cisco_logo_blue_2016.svg.png", alt: "Cisco" },
  { src: "/assets/New_images/clients/citigroup.png", alt: "Citigroup" },
  { src: "/assets/New_images/clients/dbs.png", alt: "DBS" },
  { src: "/assets/New_images/clients/digi company.jpeg", alt: "Digi" },
  { src: "/assets/New_images/clients/dxc tech.jpeg", alt: "DXC Technology" },
  { src: "/assets/New_images/clients/elnusa.png", alt: "Elnusa" },
  { src: "/assets/New_images/clients/infineon.png", alt: "Infineon" },
  { src: "/assets/New_images/clients/qualcomm.png", alt: "Qualcomm" },
];

function mergeContent(courseContent: CourseContent | null): CourseContent {
  if (!courseContent) return DEFAULT_COURSE_CONTENT;
  return {
    ...DEFAULT_COURSE_CONTENT,
    ...courseContent,
    capability_outcomes: courseContent.capability_outcomes ?? DEFAULT_COURSE_CONTENT.capability_outcomes,
    benefits: courseContent.benefits ?? DEFAULT_COURSE_CONTENT.benefits,
    price: courseContent.price ?? DEFAULT_COURSE_CONTENT.price,
    why_matters: courseContent.why_matters ?? DEFAULT_COURSE_CONTENT.why_matters,
    who_should_attend: courseContent.who_should_attend ?? DEFAULT_COURSE_CONTENT.who_should_attend,
    training_format_cards: courseContent.training_format_cards ?? DEFAULT_COURSE_CONTENT.training_format_cards,
    learning_objectives: courseContent.learning_objectives ?? DEFAULT_COURSE_CONTENT.learning_objectives,
    prerequisites: courseContent.prerequisites ?? DEFAULT_COURSE_CONTENT.prerequisites,
    course_outline: courseContent.course_outline ?? DEFAULT_COURSE_CONTENT.course_outline,
    testimonials: courseContent.testimonials ?? DEFAULT_COURSE_CONTENT.testimonials,
    registration_job_roles: courseContent.registration_job_roles ?? DEFAULT_COURSE_CONTENT.registration_job_roles,
    registration_hear_about: courseContent.registration_hear_about ?? DEFAULT_COURSE_CONTENT.registration_hear_about,
    registration_experience_levels: courseContent.registration_experience_levels ?? DEFAULT_COURSE_CONTENT.registration_experience_levels,
    registration_who_pays: courseContent.registration_who_pays ?? DEFAULT_COURSE_CONTENT.registration_who_pays,
    registration_invoice_options: courseContent.registration_invoice_options ?? DEFAULT_COURSE_CONTENT.registration_invoice_options,
    registration_dietary: courseContent.registration_dietary ?? DEFAULT_COURSE_CONTENT.registration_dietary,
    registration_experience_label: courseContent.registration_experience_label ?? DEFAULT_COURSE_CONTENT.registration_experience_label,
    registration_success_message: courseContent.registration_success_message ?? DEFAULT_COURSE_CONTENT.registration_success_message,
    registration_terms_text: courseContent.registration_terms_text ?? DEFAULT_COURSE_CONTENT.registration_terms_text,
  };
}

export default function DynamicClassPage({
  sessions,
  contentBySessionId = {},
  courseContentFallback = null,
}: {
  sessions: PublicClassSession[];
  contentBySessionId?: Record<string, CourseContent>;
  courseContentFallback?: CourseContent | null;
}) {
  const first = sessions[0];
  const courseName = first.course_name;
  const domain = first.domain;
  const hrdcNumber = first.hrdc_number;
  const duration = first.duration;

  const [selectedSessionId, setSelectedSessionId] = useState<string>(first.id);
  const selectedSession = sessions.find((s) => s.id === selectedSessionId) ?? first;
  const courseContent = contentBySessionId[selectedSessionId] ?? courseContentFallback;
  const c = mergeContent(courseContent);

  const [activeOutline, setActiveOutline] = useState<number | null>(null);
  const [showRegModal, setShowRegModal] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const priceText = c.price ?? "Price: RM 7,500 (100% HRDC Claimable)";

  const formatSession = (s: PublicClassSession) => {
    const dateFormatted = s.date.replace(/(\d+)-(\d+)/, "$1 - $2");
    return `${dateFormatted} | Face-to-face | ${s.location}`;
  };

  const scroll = (dir: string) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollLeft += dir === "left" ? -320 : 320;
  };

  return (
    <>
      <Header />

      {/* 1. Hero */}
      <section className="revou-hero">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-lg-7">
              <div className="hero-content">
                {hrdcNumber && (
                  <span className="badge-tag" style={{ background: "#15314e", color: "#fff", padding: "0.25rem 0.75rem", borderRadius: "6px", fontSize: "0.8rem" }}>
                    HRDC Reg. No: {hrdcNumber}
                  </span>
                )}
                <h1 style={{ color: "#fff" }}>{courseName}</h1>
                <p style={{ fontSize: "1rem", marginBottom: "0.5rem", color: "#fff" }}>
                  {domain} • {first.course_code}
                </p>
                {c.course_description && (
                  <div style={{ fontSize: "0.95rem", color: "white", marginBottom: "1rem", width: "68%" }} dangerouslySetInnerHTML={{ __html: c.course_description }} />
                )}

                <div style={{ marginBottom: "1rem" }}>
                  <p style={{ fontSize: "0.95rem", marginBottom: 0, color: "#333", backgroundColor: "#fff", padding: "0.5rem 1rem", borderRadius: "6px", width: "fit-content" }}>
                    {formatSession(selectedSession)}
                  </p>
                </div>

                <div className="meta" style={{ marginBottom: "1rem", fontSize: "0.95rem", color: "#333", backgroundColor: "#fff", padding: "0.5rem 1rem", borderRadius: "6px", width: "fit-content" }}>
                  <span>💰 {priceText}</span>
                </div>

                <div className="cta-area">
                  <button
                    type="button"
                    className="btn-register"
                    onClick={() => setShowRegModal(true)}
                    style={{ border: "none", cursor: "pointer", font: "inherit" }}
                  >
                    Register Now
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-5 mb-4 mb-lg-0">
              <div className="skill-card">
                <h4>Capability Outcomes</h4>
                <ul>
                  {(c.capability_outcomes?.length ? c.capability_outcomes : DEFAULT_COURSE_CONTENT.capability_outcomes!).map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trusted By */}
      <section className="ed-partner mt-5 section-gap">
        <div className="container ed-container">
          <div className="row">
            <h3 className="ed-section-head__title text-center pb-5">
              {c.trusted_by_title ?? "Trusted by Teams Across Industries & Regions"}
            </h3>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="owl-carousel ed-partner__slider">
                {(c.trusted_by_logos?.length ? c.trusted_by_logos : TRUSTED_LOGOS.map((l) => ({ url: l.src, alt: l.alt }))).map((logo, i) => (
                  <a key={i} href="#" target="_blank" rel="noreferrer" className="ed-parnet__brand-logo">
                    <img src={logo.url} alt={logo.alt} className="clients-logo" style={i === 3 ? { height: "60px", width: "auto" } : undefined} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why Training Matters */}
      <section className="why-matters why-matters-modern">
        <div className="container">
          <div className="why-matters-header text-center mb-5">
            <h2 className="why-matters-title">
              Why {courseName} {c.why_matters_title ?? "Training Matters"}
            </h2>
          </div>
          <div className="row g-4">
            {(c.why_matters?.length ? c.why_matters : DEFAULT_COURSE_CONTENT.why_matters!).map((item, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <div className="why-card-modern">
                  <div className="why-card-modern-icon"><span>{item.icon ?? "⚡"}</span></div>
                  <h5>{item.title}</h5>
                  {item.description && <p>{item.description}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Who Should Attend */}
      <section className="why-timmins-section" style={{ background: "#f8fafc" }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="why-title">{c.who_should_attend_title ?? "Who Should Attend?"}</h2>
            <div className="title-underline"></div>
          </div>
          <div className="row g-4 justify-content-center">
            {(c.who_should_attend?.length ? c.who_should_attend : DEFAULT_COURSE_CONTENT.who_should_attend!).map((item, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <div className="why-card" style={{ textAlign: "center" }}>
                  <p style={{ margin: 0, fontWeight: 600, color: "#15314e" }}>{item}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <button
              type="button"
              className="btn-register"
              onClick={() => setShowRegModal(true)}
              style={{ border: "none", cursor: "pointer", font: "inherit", display: "inline-block", textDecoration: "none", color: "#000" }}
            >
              Register Now
            </button>
          </div>
        </div>
      </section>

      <ClassRegistrationModal
        isOpen={showRegModal}
        onClose={() => setShowRegModal(false)}
        courseName={courseName}
        sessionId={selectedSession?.id}
        sessionDate={selectedSession?.date}
        sessionLocation={selectedSession?.location}
        config={c}
      />

      {/* 5. Training Format */}
      <section className="why-matters why-matters-modern" style={{ background: "#eaf1f6" }}>
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-5">
              <h2 className="why-matters-title" style={{ marginBottom: "0.5rem" }}>
                {c.training_format_title ?? `${duration} Intensive Training`}
              </h2>
              <p style={{ color: "#64748b", margin: 0 }}>{c.training_format_subtitle || courseName}</p>
            </div>
            <div className="col-lg-7">
              <div className="row g-4">
                {(c.training_format_cards?.length ? c.training_format_cards : DEFAULT_COURSE_CONTENT.training_format_cards!).map((card, i) => (
                  <div key={i} className="col-6 col-md-6">
                    <div className="why-card-modern">
                      <div className="why-card-modern-icon"><span>{card.icon ?? "⚙️"}</span></div>
                      <h5>{card.title}</h5>
                      {card.description && <p>{card.description}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Learning Objectives */}
      <section className="why-timmins-section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="why-title">{c.learning_objectives_title ?? "Learning Objectives"}</h2>
            <div className="title-underline"></div>
          </div>
          <div className="row g-4">
            {(c.learning_objectives?.length ? c.learning_objectives : DEFAULT_COURSE_CONTENT.learning_objectives!).map((obj, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <div className="el-objective-card">
                  <span className="el-objective-check">✓</span>
                  <span className="el-objective-text">{obj}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Prerequisites */}
      <section className="why-timmins-section" style={{ background: "#f8fafc" }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="why-title">{c.prerequisites_title ?? "Prerequisites"}</h2>
            <div className="title-underline"></div>
          </div>
          <div className="row g-4 justify-content-center">
            {(c.prerequisites?.length ? c.prerequisites : DEFAULT_COURSE_CONTENT.prerequisites!).map((p, i) => (
              <div key={i} className="col-lg-5 col-md-6">
                <div className="el-prereq-card">
                  <div className="el-prereq-icon">{p.icon ?? "📄"}</div>
                  <div>
                    <h5 className="el-prereq-title">{p.title}</h5>
                    <p className="el-prereq-desc">{p.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Course Outline */}
      <section className="ed-faq section-gap position-relative overflow-hidden">
        <div className="container">
          <div className="section-heading-center">
            <h2>{c.course_outline_title ?? "Course Outline"}</h2>
          </div>
          <div className="faq-grid">
            {(c.course_outline?.length ? c.course_outline : DEFAULT_COURSE_CONTENT.course_outline!).map((item, i) => (
              <div key={i} className={`faq-card ${activeOutline === i ? "active" : ""}`}>
                <div className="faq-question" onClick={() => setActiveOutline(activeOutline === i ? null : i)}>
                  <span>{item.day}: {item.title}</span>
                  <span className="arrow">{activeOutline === i ? "⌃" : "⌄"}</span>
                </div>
                <div className={`faq-answer ${activeOutline === i ? "show" : ""}`}>
                  {item.topics || "Topics covered in this module."}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <button
              type="button"
              className="btn-register"
              onClick={() => setShowRegModal(true)}
              style={{ border: "none", cursor: "pointer", font: "inherit", display: "inline-block", textDecoration: "none", color: "#000" }}
            >
              Register Now
            </button>
          </div>
        </div>
      </section>

      {/* 9. Learn From The Expert */}
      <section
        className="ed-call-action position-relative section-gap about-cta expert-cta-section"
        style={{
          background: "linear-gradient(135deg, #4198c8 0%, #4198c8c9 50%, #4198c845 100%), url(/assets/New_images/final%20cta%20horizontal.png) center center / cover no-repeat",
          minHeight: 280,
        }}
      >
        <div className="container ed-container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-12 order-class pb-5">
              <div className="ed-call-action__content expert-cta-content">
                <h4 className="cta-heading expert-cta-heading">{c.expert_title ?? "Learn From The Expert"}</h4>
                <div className="ed-section-head__text mb-4 expert-cta-description" dangerouslySetInnerHTML={{ __html: c.expert_description || "Our instructors bring extensive industry experience and proven track record in embedded systems." }} />
                <ul className="expert-cta-bullets">
                  {(c.expert_bullets ?? DEFAULT_COURSE_CONTENT.expert_bullets!).map((b, i) => (
                    <li key={i}>• {b}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. What Participants Say */}
      <section className="testimonial-modern">
        <div className="container">
          <div className="text-center mb-5">
            <h2>{c.testimonials_title ?? "What Participants Say"}</h2>
            <p className="mt-2" style={{ color: "#64748b" }}>
              Reviews from <a href={c.google_reviews_url ?? "https://g.page/r/ncn3sf8LcQuoBbhaB"} target="_blank" rel="noopener noreferrer" style={{ color: "#4198c8" }}>Google Business Review</a>
            </p>
          </div>
          <div className="testimonial-wrapper">
            <button className="scroll-btn left" onClick={() => scroll("left")}>❮</button>
            <div className="testimonial-scroll" ref={scrollRef}>
              {(c.testimonials?.length ? c.testimonials : DEFAULT_COURSE_CONTENT.testimonials!).map((t, i) => (
                <div key={i} className="testimonial-card">
                  <div className="user-info">
                    <div>
                      <h6>{t.name}</h6>
                      <span>{t.rating ?? "⭐⭐⭐⭐⭐"}</span>
                    </div>
                  </div>
                  <p>{t.quote}</p>
                  <small>{t.source ?? "Google Review"}</small>
                </div>
              ))}
            </div>
            <button className="scroll-btn right" onClick={() => scroll("right")}>❯</button>
          </div>
        </div>
      </section>

      {/* 11. Certificate */}
      <section className="why-timmins-section" style={{ background: "#f8fafc" }}>
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-5 text-center">
              <img
                src={c.certificate_image ?? DEFAULT_COURSE_CONTENT.certificate_image ?? "/assets/New_images/coc.png"}
                alt="Certificate of Completion"
                style={{ width: "100%", height: "auto", margin: "0 auto", display: "block" }}
              />
            </div>
            <div className="col-lg-7">
              <h2 className="why-title" style={{ textAlign: "left", marginBottom: "1rem" }}>
                {c.certificate_title ?? "Earn A Certificate of Completion"}
              </h2>
              <div style={{ color: "#64748b", fontSize: "1rem", lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: c.certificate_description || "Participants receive a Timmins certificate upon successful completion." }} />
            </div>
          </div>
        </div>
      </section>

      {/* 12. Final CTA - Centered white card design */}
      <section className="final-cta-section" style={{ background: "#4198c8", padding: "4rem 1rem" }}>
        <div className="container">
          <div className="final-cta-card">
            <h4 className="final-cta-text">{c.cta_limit_text ?? "Limited to 15 participants!"}</h4>
            <button
              type="button"
              className="final-cta-btn"
              onClick={() => setShowRegModal(true)}
            >
              Register Now
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
