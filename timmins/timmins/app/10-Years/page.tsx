import Footer from "../Components/Footer";
import Header from "../Components/Header";

const timelineData = [
  {
    year: "2015–2017",
    title: "Where It All Began",
    side: "right" as const,
    image: "/assets/New_images/2016.png",
    imageAlt: "Timmins early days",
    points: [
      "2015: Founded in Malaysia with a clear belief in practical, hands-on learning.",
      "Practitioner-led training, built by people with real industry experience.",
      "Engineering-grade focus grounded in real-world application.",
      "2017: Expanded to Indonesia as the first international milestone.",
      "Specialized capability programs for engineering and banking sectors.",
      "Focus areas: embedded systems, firmware fundamentals, and hardware–software integration.",
    ],
  },
  {
    year: "2018–2019",
    title: "Specialization & North America Expansion",
    side: "left" as const,
    image: "/assets/New_images/2018.png",
    imageAlt: "Timmins expansion",
    points: [
      "Timmins shifted into advanced technical domains: Telecom & 5G, Semiconductor & embedded, AI & data foundations, Enterprise software engineering.",
      "HRD Corp–recognized Training Provider, enabling HRDC-Claimable Training for Malaysian employers.",
      "Expanded operations to Canada to access global subject matter experts,Enabled cross-regional knowledge exchange,Broadened delivery of practitioner-led technical upskilling programs.",
    ],
  },
  {
    year: "2020–2022",
    title: "Reinvention Through Disruption",
    side: "right" as const,
    image: "/assets/New_images/2020.png",
    imageAlt: "Timmins hybrid learning",
    points: [
      "Rebuilt delivery model during the pandemic.",
      "Launched hybrid and fully virtual learning.",
      "Enabled remote labs and multi-timezone classrooms.",
      "Expanded reach, supporting more learners despite global disruption.",
    ],
  },
  {
    year: "2024",
    title: "Opening Timmins Training Center, Bayan Lepas (Penang)",
    side: "left" as const,
    image: "/assets/New_images/2024.jpg",
    imageAlt: "Timmins Training Center Penang",
    points: [
      "Timmins opened a dedicated training center in Bayan Lepas, Penang, to support hands-on, lab-based technical training and strengthen its delivery capability in Malaysia.",
    ],
  },
  {
    year: "2023–2025",
    title: "Global Reach , Engineering Depth, & HRDC Recognition",
    side: "right" as const,
    image: "/assets/New_images/2026.jpg",
    imageAlt: "Timmins global capability",
    points: [
      "Today, Timmins delivers Engineering-grade capability programs delivered globally supporting organizations through hands-on, practitioner-led learning.Programs delivered in in 11 countries, in English and Mandarin.",
      "Clients across sectors global tech companies, engineering manufacturers, banks, universities, and public organizations,financial institutions.",
      "Core capability  areas: Embedded systems  and embedded programming, Telecom,5Gc&  network capability, Cloud,DevOps & automation , technical upskilling for engineering teams.",
    ],
  },
];

export default function TenYearsPage() {
  return (
    <>
      <Header />

      <main className="tenyears timeline-page">
        {/* Hero */}
        <section className="timeline-hero">
          <div className="timeline-hero__inner">
            <h1 className="timeline-hero__title">10 Years of Timmins</h1>
            <p className="timeline-hero__intro">
              From a vision in Malaysia to a trusted global capability partner—marking a decade of engineering-grade learning in action.
            </p>
          </div>
        </section>

        {/* Timeline */}
        <section className="timeline">
          <div className="timeline__axis" aria-hidden="true" />

          {timelineData.map((item, index) => (
            <article
              key={item.year}
              className={`timeline__item timeline__item--${item.side}`}
            >
              <div className="timeline__connector" aria-hidden="true" />
              <span className="timeline__year">{item.year}</span>

              <div className="timeline__card">
                <h3 className="timeline__card-title">{item.title}</h3>
                <ul className="timeline__list">
                  {item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
              <div className="timeline__media">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className="timeline__img"
                />
              </div>
            </article>
          ))}
        </section>

        {/* CTA */}
        <section className="ed-call-action position-relative section-gap pb-5 about-cta">
          <div className="container ed-container">
            <div className="ed-call-action__inner position-relative">
              <div className="ed-call-action__shapes">
                <img
                  className="ed-call-action__shape-1 rotate-ani"
                  src="/assets/images/call-action/call-action-1/shape-1.svg"
                  alt=""
                />
                <img
                  className="ed-call-action__shape-2"
                  src="/assets/images/call-action/call-action-1/shape-2.svg"
                  alt=""
                />
                <img
                  className="ed-call-action__shape-3 updown-ani"
                  src="/assets/images/call-action/call-action-1/shape-3.svg"
                  alt=""
                />
              </div>
              <div className="row align-items-center">
                <div className="col-lg-6 col-12">
                  <div className="ed-call-action__img">
                    <img
                      src="/assets/New_images/final cta horizontal.png"
                      alt="Partner with Timmins"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-12 order-class pb-5">
                  <div className="ed-call-action__content">
                    <h4 className="cta-heading">Looking Ahead</h4>
                    <p className="ed-section-head__text mb-4">
                      Entering our second decade, Timmins is building a global engineering learning ecosystem that helps organizations excel in future technologies. Let’s shape the next decade of learning, capability, and impact together.
                    </p>
                    <p className="ed-section-head__text mt-2 mb-2">
                      Ready to build engineering capability that lasts?
                    </p>
                    <div
                      className="ed-call-action__content-btn ed-btn mb-7"
                      style={{ backgroundColor: "var(--ed-secondary-color)" }}
                    >
                      <a href="/contact-us">Partner With Us</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
