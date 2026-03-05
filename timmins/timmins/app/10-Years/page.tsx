import Footer from "../Components/Footer";
import Header from "../Components/Header";

type TimelineItemBase = {
  year: string;
  title: string;
  side: "left" | "right";
  image: string;
  imageAlt: string;
};

type TimelineItemPoints = TimelineItemBase & {
  points: string[];
};

type TimelineItemTextSection = TimelineItemBase & {
  format: "text-section";
  intro: string;
  bullets: string[];
  subheading: string;
  subBullets: string[];
};

type TimelineItem = TimelineItemPoints | TimelineItemTextSection;

function isTextSection(item: TimelineItem): item is TimelineItemTextSection {
  return (item as TimelineItemTextSection).format === "text-section";
}

/** Parses a point string into { year?, bold, rest } for UI formatting */
function parsePoint(point: string): { year?: string; bold: string; rest: string } {
  const yearMatch = point.match(/^(\d{4}):\s*(.+)$/);
  const content = yearMatch ? yearMatch[2] : point;

  // Bold: "X: Y" pattern (bold X), or first phrase until comma (if ≤5 words), else first 3 words
  let bold = "";
  let rest = content;
  const colonIdx = content.indexOf(": ");
  const commaIdx = content.indexOf(",");
  if (colonIdx > 0 && (commaIdx < 0 || colonIdx < commaIdx)) {
    bold = content.slice(0, colonIdx);
    rest = content.slice(colonIdx + 2);
  } else if (commaIdx > 0) {
    const beforeComma = content.slice(0, commaIdx).trim();
    const wordCount = beforeComma.split(/\s+/).length;
    if (wordCount <= 4) {
      bold = beforeComma;
      rest = content.slice(commaIdx);
    } else {
      const words = content.split(/\s+/);
      bold = words.slice(0, 3).join(" ");
      rest = " " + words.slice(3).join(" ");
    }
  } else {
    const words = content.split(/\s+/);
    const take = Math.min(3, words.length);
    bold = words.slice(0, take).join(" ");
    rest = words.slice(take).join(" ") ? " " + words.slice(take).join(" ") : "";
  }
  return {
    year: yearMatch ? yearMatch[1] : undefined,
    bold: bold.trim(),
    rest: rest.trim() ? (rest.startsWith(" ") ? rest : " " + rest) : "",
  };
}

const timelineData: TimelineItem[] = [
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
    title: "Timmins shifted into advanced technical domains: Telecom & 5G capability, Semiconductor & embedded engineering, AI & data foundations, Enterprise software engineering.",
    side: "left" as const,
    image: "/assets/New_images/2018.png",
    imageAlt: "Timmins expansion",
    points: [
      "2018: HRD Corp–recognized Training Provider, enabling HRDC-Claimable Training for Malaysian employers.",
      "2019: Expanded operations to Canada to access global subject matter experts.",
      "Enabled cross-regional knowledge exchange.",
      "Broadened delivery of practitioner-led technical upskilling programs.",
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
    title: "Global Reach, Engineering Depth, and HRDC Recognition",
    side: "right" as const,
    image: "/assets/New_images/2026.jpg",
    imageAlt: "Timmins global capability",
    format: "text-section" as const,
    intro:
      "Today, Timmins delivers engineering-grade capability programs globally, supporting organizations through hands-on, practitioner-led learning.",
    bullets: [
      "Programs delivered in 11 countries, in English and Mandarin.",
      "Clients across sectors: global tech companies, engineering manufacturers, banks & financial institutions, universities, and public organizations.",
    ],
    subheading: "Core capability areas:",
    subBullets: [
      "Embedded systems and embedded programming",
      "Telecom, 5G, and network capability",
      "Cloud, DevOps, and automation",
      "Technical upskilling for engineering teams",
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

              <div
                className={`timeline__card ${
                  isTextSection(item) ? "timeline__card--text-section" : ""
                }`}
              >
                <h3 className="timeline__card-title">
                  {item.title}
                </h3>
                {isTextSection(item) ? (
                  <div className="timeline__text-section">
                    <p className="timeline__intro">{item.intro}</p>
                    <ul className="timeline__bullets timeline__bullets--primary">
                      {item.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                    <h4 className="timeline__subheading">{item.subheading}</h4>
                    <ul className="timeline__bullets timeline__bullets--secondary">
                      {item.subBullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="timeline__list">
                    {(() => {
                      const groups: { year?: string; points: string[] }[] = [];
                      let current: { year?: string; points: string[] } = {
                        points: [],
                      };
                      for (const point of (item as TimelineItemPoints).points) {
                        const parsed = parsePoint(point);
                        if (parsed.year) {
                          if (current.points.length) groups.push(current);
                          current = {
                            year: parsed.year,
                            points: [parsed.bold + parsed.rest],
                          };
                        } else {
                          current.points.push(point);
                        }
                      }
                      if (current.points.length) groups.push(current);
                      return groups.map((g, gi) => (
                        <div key={gi} className="timeline__year-group">
                          {g.year && (
                            <div className="timeline__year-heading">
                              {g.year}:
                            </div>
                          )}
                          <ul className="timeline__bullets">
                            {g.points.map((pt, pi) => {
                              const { bold, rest } = parsePoint(pt);
                              return (
                                <li key={pi}>
                                  {bold && <strong>{bold}</strong>}
                                  {rest}
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      ));
                    })()}
                  </div>
                )}
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
