import Image from "next/image";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <div
              className="section-bg hero-bg-2 background-image"
              style={{ backgroundImage: 'url("/assets/New_images/hero_2.jpg")' }}
            >
              {/* Preload hero image */}
              <link rel="preload" as="image" href="/assets/New_images/hero_2.jpg" />

              <section className="ed-hero">

                {/* HRDC BADGES – TOP RIGHT */}
                <div className="position-absolute top-0 end-0 m-4 me-5 hero-badge-wrapper d-flex gap-3">
                  <Image
                    src="/assets/New_images/badge.png"
                    alt="HRDC Claimable"
                    width={110}
                    height={110}
                    priority
                  />
                  <Image
                    src="/assets/New_images/HRDC.png"
                    alt="HRDC Registered Training Provider"
                    width={110}
                    height={110}
                    priority
                  />
                </div>

                <div className="container ed-container-expand">
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-12">

                      {/* LEFT TEXT WITH WHITE OVERLAY */}
                      <div className="hero-text-overlay">
                        <div className="ed-hero__content">

                          <h1 className="ed-hero__content-title ed-split-text left">
                            Building Future-Ready Tech Teams
                          </h1>

                          <p className="text-black text-lg font-medium">
                            Engineering-grade capability building for modern tech teams,
                            trusted for over a decade across 12+ countries worldwide.
                          </p>

                          <div className="d-flex gap-3 mt-3">
                            <div className="ed-hero__btn ed-btn">
                              <a href="#">For Companies – Explore Solutions</a>
                            </div>

                            <div
                              className="ed-hero__btn ed-btn"
                              style={{ backgroundColor: 'var(--ed-secondary-color)' }}
                            >
                              <a href="#">For Individuals – Browse Public Classes</a>
                            </div>
                          </div>

                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </section>
            </div>


            <section className="ed-partner mt-5 section-gap">
              <div className="container ed-container">
                <div className="row">
                  <h3 className="text-center pb-5   ">
                    Trusted by Teams Across Industries & Regions
                  </h3>

                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="owl-carousel ed-partner__slider">
                      {/* Single Slider  */}
                      <a href="#" target="_blank" className="ed-parnet__brand-logo">
                        <img
                          src="/assets/New_images/clients/Cisco_logo_blue_2016.svg.png"
                          alt="Cisco"
                          className="clients-logo"
                        />
                      </a>
                      {/* Single Slider  */}
                      <a href="#" target="_blank" className="ed-parnet__brand-logo">
                        <img
                          src="/assets/New_images/clients/citigroup.png"
                          alt="Citigroup"
                        />
                      </a>
                      {/* Single Slider  */}
                      <a href="#" target="_blank" className="ed-parnet__brand-logo">
                        <img
                          src="/assets/New_images/clients/dbs.png"
                          alt="DBS"
                        />
                      </a>
                      {/* Single Slider  */}
                      <a href="#" target="_blank" className="ed-parnet__brand-logo">
                        <img
                          src="/assets/New_images/clients/digi company.jpeg"
                          alt="Digi"
                          style={{ height: '60px', width: 'auto' }}
                        />
                      </a>
                      {/* Single Slider  */}
                      <a href="#" target="_blank" className="ed-parnet__brand-logo">
                        <img
                          src="/assets/New_images/clients/dxc tech.jpeg"
                          alt="DXC Technology"
                        />
                      </a>
                      {/* Single Slider  */}
                      <a href="#" target="_blank" className="ed-parnet__brand-logo">
                        <img
                          src="/assets/New_images/clients/elnusa.png"
                          alt="Elnusa"
                        />
                      </a>
                      {/* Single Slider  */}
                      <a href="#" target="_blank" className="ed-parnet__brand-logo">
                        <img
                          src="/assets/New_images/clients/enquest.jpeg"
                          alt="Enquest"
                        />
                      </a>
                      {/* Single Slider  */}
                      <a href="#" target="_blank" className="ed-parnet__brand-logo">
                        <img
                          src="/assets/New_images/clients/epsilon.jpeg"
                          alt="Epsilon"
                        />
                      </a>
                      {/* Single Slider  */}
                      <a href="#" target="_blank" className="ed-parnet__brand-logo">
                        <img
                          src="/assets/New_images/clients/german_malaysian_institute_logo.jpeg"
                          alt="German Malaysian Institute"
                        />
                      </a>
                      {/* Single Slider  */}
                      <a href="#" target="_blank" className="ed-parnet__brand-logo">
                        <img
                          src="/assets/New_images/clients/GKL1_Telkomsel - Koleksilogo.com.jpg"
                          alt="Telkomsel"
                        />
                      </a>
                      {/* Single Slider  */}
                      <a href="#" target="_blank" className="ed-parnet__brand-logo">
                        <img
                          src="/assets/New_images/clients/hongleong bank.jpg"
                          alt="Hong Leong Bank"
                        />
                      </a>
                      {/* Single Slider  */}
                      <a href="#" target="_blank" className="ed-parnet__brand-logo">
                        <img
                          src="/assets/New_images/clients/indosar-ooredoo-l-min.jpg"
                          alt="Indosat Ooredoo"
                        />
                      </a>
                      {/* Single Slider  */}
                      <a href="#" target="_blank" className="ed-parnet__brand-logo">
                        <img
                          src="/assets/New_images/clients/infineon.png"
                          alt="Infineon"
                        />
                      </a>
                      {/* Single Slider  */}
                      <a href="#" target="_blank" className="ed-parnet__brand-logo">
                        <img
                          src="/assets/New_images/clients/maxis-logo.jpg"
                          alt="Maxis"
                        />
                      </a>
                      {/* Single Slider  */}
                      <a href="#" target="_blank" className="ed-parnet__brand-logo">
                        <img
                          src="/assets/New_images/clients/micost.png"
                          alt="Micost"
                        />
                      </a>
                      {/* Single Slider  */}
                      <a href="#" target="_blank" className="ed-parnet__brand-logo">
                        <img
                          src="/assets/New_images/clients/mof khazanah treasury.png"
                          alt="MOF Khazanah Treasury"
                        />
                      </a>
                      {/* Single Slider  */}
                      <a href="#" target="_blank" className="ed-parnet__brand-logo">
                        <img
                          src="/assets/New_images/clients/motorola-logo-png_seeklogo-95176.png"
                          alt="Motorola"
                          className="clients-logo"
                        />
                      </a>
                      {/* Single Slider  */}
                      <a href="#" target="_blank" className="ed-parnet__brand-logo">
                        <img
                          src="/assets/New_images/clients/olx.png"
                          alt="OLX"
                        />
                      </a>
                      {/* Single Slider  */}
                      <a href="#" target="_blank" className="ed-parnet__brand-logo">
                        <img
                          src="/assets/New_images/clients/qualcomm.png"
                          alt="Qualcomm"
                        />
                      </a>
                      {/* Single Slider  */}
                      <a href="#" target="_blank" className="ed-parnet__brand-logo">
                        <img
                          src="/assets/New_images/clients/telecom malaysia.png"
                          alt="Telekom Malaysia"
                        />
                      </a>
                      {/* Single Slider  */}
                      <a href="#" target="_blank" className="ed-parnet__brand-logo">
                        <img
                          src="/assets/New_images/clients/telkom metra.png"
                          alt="Telkom Metra"
                        />
                      </a>
                      {/* Single Slider  */}
                      <a href="#" target="_blank" className="ed-parnet__brand-logo">
                        <img
                          src="/assets/New_images/clients/telkomsat.png"
                          alt="Telkomsat"
                        />
                      </a>
                      {/* Single Slider  */}
                      <a href="#" target="_blank" className="ed-parnet__brand-logo">
                        <img
                          src="/assets/New_images/clients/umobile.png"
                          alt="U Mobile"
                        />
                      </a>
                      {/* Single Slider  */}
                      <a href="#" target="_blank" className="ed-parnet__brand-logo">
                        <img
                          src="/assets/New_images/clients/uniKL.jpeg"
                          alt="UniKL"
                        />
                      </a>
                      {/* Single Slider  */}
                      <a href="#" target="_blank" className="ed-parnet__brand-logo">
                        <img
                          src="/assets/New_images/clients/Webe-with-TM-Group_01.png"
                          alt="Webe TM Group"
                        />
                      </a>
                      {/* Single Slider  */}
                      <a href="#" target="_blank" className="ed-parnet__brand-logo">
                        <img
                          src="/assets/New_images/clients/YTL_Corporation_Berhad_Logo_(former).svg.png"
                          alt="YTL Corporation"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div
              className="section-bg background-image"
            // style={{ backgroundImage: 'url("/assets/images/section-bg-5.png")' }}
            >

              {/* Start About Area */}
              <section className="ed-about ed-about--style2 mb-5 position-relative">
                <div className="container ed-container">
                  <div className="row justify-content-center pb-4">
                    <div className="col-lg-8 col-12">
                      <div className="ed-section-head text-center">
                        <h3 className="ed-section-head__title ed-split-text left ">
                          Learn the Way That Fits You
                        </h3>
                        {/* <p className="ed-section-head__text">
                          Whether you’re an organization building full-team capability or an individual upgrading your technical career, Timmins offers two learning paths:                        </p> */}
                      </div>
                    </div>
                  </div>
                  <div className="row serviceBox">
                    <div className="col-lg-6 col-12">
                      {/* About Content  */}
                      <div className="ed-about__content">
                        <div className="ed-section-head">
                          <h3 className="ed-section-head__title ed-split-text right">
                            For Companies
                          </h3>
                          <p className="ed-section-head__text">
                            Build team-wide engineering capability through tailored training and consulting. Popular corporate programs:

                          </p>
                        </div>
                        <div className="ed-about__feature">
                          <ul className="ed-about__features-list">
                            <li>
                              <img
                                src="/assets/images/icons/icon-check-blue.svg"
                                alt="icon-check-blue"
                              />
                              Embedded Systems Engineering
                            </li>

                            <li>
                              <img
                                src="/assets/images/icons/icon-check-blue.svg"
                                alt="icon-check-blue"
                              />
                              5G R&D & Technician Upskilling
                            </li>
                            <li>
                              <img
                                src="/assets/images/icons/icon-check-blue.svg"
                                alt="icon-check-blue"
                              />
                              AI Consulting & Applied AI
                            </li>
                            <li>
                              <img
                                src="/assets/images/icons/icon-check-blue.svg"
                                alt="icon-check-blue"
                              />
                              Fresh Graduate Onboarding program
                            </li>
                            <li>
                              <img
                                src="/assets/images/icons/icon-check-blue.svg"
                                alt="icon-check-blue"
                              />
                              Corporate Training Malaysia (HRDC Claimable)
                            </li>
                          </ul>
                        </div>
                        <div className="ed-about__btn ed-btn">
                          <a href="/courses">
                            Explore B2B Solutions
                            {/* <i className="fi fi-rr-arrow-small-right" /> */}
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      {/* About Images  */}
                      <div className="ed-about__content">
                        <div className="ed-section-head">
                          <h3 className="ed-section-head__title ed-split-text right">
                            For Individuals (Public Classes)

                          </h3>
                          <p className="ed-section-head__text">
                            Technical courses designed for engineers, fresh graduates, and career switchers. Popular public classes:

                          </p>
                        </div>
                        <div className="ed-about__feature">
                          <ul className="ed-about__features-list">
                            <li>
                              <img
                                src="/assets/images/icons/icon-check-blue.svg"
                                alt="icon-check-blue"
                              />
                              Embedded Linux System Internals

                            </li>
                            <li>
                              <img
                                src="/assets/images/icons/icon-check-blue.svg"
                                alt="icon-check-blue"
                              />
                              Data Analysis and Visualization with Power PI

                            </li>
                            <li>
                              <img
                                src="/assets/images/icons/icon-check-blue.svg"
                                alt="icon-check-blue"
                              />
                              Machine Learning with Python

                            </li>
                            <li>
                              <img
                                src="/assets/images/icons/icon-check-blue.svg"
                                alt="icon-check-blue"
                              />
                              Kotlin Fundamentals
                            </li>
                            <li>
                              <img
                                src="/assets/images/icons/icon-check-blue.svg"
                                alt="icon-check-blue"
                              />
                              Gen AI for IT and Non-IT Teams
                            </li>
                          </ul>
                        </div>
                        <div className="ed-about__btn ed-btn">
                          <a href="#">
                            Browse Public Classe
                          </a>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

              </section>

            </div>
            <>
              {/* Start About Area */}
              <section className="our-values-2 mb-5">
                <div className="container">

                  <div className="text-center mb-5">
                    <h2 className="fw-bold">Why Training with Timmins</h2>

                    <p className="text-muted">
                      <i>Real engineers. Real practice. Real capability.</i>
                    </p>

                    <br />

                    <p>
                      Every program is designed and delivered by practitioners with deep field
                      experience in engineering, telecom, manufacturing, and banking.
                    </p>
                  </div>

                  {/* REMOVED: Our signature approach combines */}

                  <div className="row g-4">

                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="value-card h-100">
                        <div className="icon growth">
                          <i className="bi bi-person-workspace" />
                        </div>
                        <h5>Practitioner-Led Delivery</h5>
                        <p>
                          Led by engineers with real-world delivery experience.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="value-card h-100">
                        <div className="icon cocreation">
                          <i className="bi bi-diagram-3" />
                        </div>
                        <h5>Engineering-Grade Depth</h5>
                        <p>
                          Technical rigor for real-world complexity.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="value-card h-100">
                        <div className="icon collaboration">
                          <i className="bi bi-laptop" />
                        </div>
                        <h5>Hands-On Learning</h5>
                        <p>
                          Labs, debugging, system workflows, AI pipelines, firmware tools.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="value-card h-100">
                        <div className="icon excellence">
                          <i className="bi bi-bar-chart-line" />
                        </div>
                        <h5>Measurable Capability Growth</h5>
                        <p>
                          Assessments, dashboards, and skill-mapping.
                        </p>
                      </div>
                    </div>

                  </div>

                  <br />

                  <div className="text-center text-xl pt-4">
                    <a
                      href="/about/approach"
                      className="fw-semibold why-work-link"
                    >
                      Explore How We Work
                    </a>

                  </div>

                </div>
              </section>

              {/* End About Area */}
            </>
            <>
              {/* Start Course Area  */}
              <section className="ed-course ed-course--style-5 section-gap position-relative">
                <div className="container ed-container">

                  {/* HRDC BADGES – TOP RIGHT */}
                  <div className="position-absolute top-0 end-0 m-4 me-5 public-badge-wrapper d-flex gap-3">
                    <img
                      src="/assets/New_images/badge.png"
                      alt="HRDC Claimable"
                      width="110"
                    />
                    <img
                      src="/assets/New_images/HRDC.png"
                      alt="HRDC Registered Training Provider"
                      width="110"
                    />
                  </div>

                  {/* Section Shapes */}
                  <div className="ed-course__shapes">
                    <img
                      className="shape-1 updown-ani"
                      src="assets/images/course/course-5/shape-1.svg"
                      alt="shape-1"
                    />
                  </div>

                  <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8 col-12">
                      <div className="ed-section-head text-center">
                        <h3 className="ed-section-head__title ed-split-text left">
                          Featured Public Classes
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12">
                      <div className="ed-course__tab">

                        <div
                          className="ed-course__tab-details tab-details wow fadeInUp"
                          data-wow-delay=".5s"
                          data-wow-duration="1s"
                        >
                          <div className="tab-content" id="nav-tabContent">
                            <div
                              className="tab-pane fade show active"
                              id="courseTab1"
                              role="tabpanel"
                            >
                              <div className="row">

                                {/* COURSE 1 */}
                                <div className="col-lg-6 col-12">
                                  <div className="ed-course__card">
                                    <div className="ed-course__image">
                                      <div className="ed-course__main-img">
                                        <img
                                          src="/assets/New_images/Embedded Linux public class at Timmins.jpg"
                                          alt="course-img"
                                        />
                                      </div>
                                    </div>
                                    <div className="ed-course__content">
                                      <span className="ed-course__type">Face-to-Face</span>
                                      <a href="#">
                                        Embedded Linux System Internals
                                      </a>
                                      <p>5 days</p>
                                    </div>
                                  </div>
                                </div>

                                {/* COURSE 2 */}
                                <div className="col-lg-6 col-12">
                                  <div className="ed-course__card">
                                    <div className="ed-course__image">
                                      <div className="ed-course__main-img">
                                        <img
                                          src="/assets/New_images/Power BI public class at timmins.jpg"
                                          alt="course-img"
                                        />
                                      </div>
                                    </div>
                                    <div className="ed-course__content">
                                      <span className="ed-course__type">Face-to-Face</span>
                                      <a href="#">
                                        Power BI: From Data to Decisions
                                      </a>
                                      <p>2 Days</p>
                                    </div>
                                  </div>
                                </div>

                                {/* COURSE 3 */}
                                <div className="col-lg-6 col-12">
                                  <div className="ed-course__card">
                                    <div className="ed-course__image">
                                      <div className="ed-course__main-img">
                                        <img
                                          src="/assets/New_images/Generative AI public class at Timmins.jpg"
                                          alt="course-img"
                                        />
                                      </div>
                                    </div>
                                    <div className="ed-course__content">
                                      <span className="ed-course__type">Online</span>
                                      <a href="#">
                                        Generative AI with LangChain
                                      </a>
                                      <p>2 days</p>
                                    </div>
                                  </div>
                                </div>

                                {/* COURSE 4 */}
                                <div className="col-lg-6 col-12">
                                  <div className="ed-course__card">
                                    <div className="ed-course__image">
                                      <div className="ed-course__main-img">
                                        <img
                                          src="/assets/New_images/kotlin fundamentals public class at Timmins.jpg"
                                          alt="course-img"
                                        />
                                      </div>
                                    </div>
                                    <div className="ed-course__content">
                                      <span className="ed-course__type">Face-to-Face</span>
                                      <a href="#">
                                        Kotlin Fundamentals
                                      </a>
                                      <p>4 Days</p>
                                    </div>
                                  </div>
                                </div>

                              </div>
                            </div>
                          </div>
                        </div>

                      </div>

                      {/* VIEW CALENDAR BUTTON */}
                      <div className="d-flex justify-content-center mt-4">
                        <div className="ed-hero__btn ed-btn">
                          <a href="#">
                            View Training Calendar
                          </a>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              </section>

              {/* End Course Area  */}
            </>


            {/* Start Course Area */}
            <section className="ed-course ed-course--style2 section-gap position-relative overflow-hidden">
              <div className="container ed-container">

                <div className="row justify-content-center">
                  <div className="col-lg-6 col-md-8 col-12">
                    <div className="ed-section-head text-center">
                      <h3 className="ed-section-head__title ed-split-text left">
                        Proven Results Across Industries
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="row justify-content-center">

                  {/* CARD 1 */}
                  <div className="col-lg-6 col-xl-6 col-md-6 col-12">
                    <div
                      className="ed-course__card ed-course__card--style2 wow fadeInUp"
                      data-wow-delay=".3s"
                      data-wow-duration="1s"
                    >
                      <div className="ed-course__head position-relative">
                        <div className="ed-course__img">
                          <img
                            src="/assets/New_images/FG.png"
                            alt="course-img"
                          />
                        </div>
                      </div>

                      <div className="ed-course__body">
                        <h5>
                          Fresh Graduate Onboarding – Semiconductor Engineering
                        </h5>

                        <div className="ed-course__rattings">
                          <span>
                            A 10-year partnership enabling 3,000+ engineers to become project-ready
                            in embedded, mobile, 5G, AI, and RF.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CARD 2 */}
                  <div className="col-lg-6 col-xl-6 col-md-6 col-12">
                    <div
                      className="ed-course__card ed-course__card--style2 wow fadeInUp"
                      data-wow-delay=".3s"
                      data-wow-duration="1s"
                    >
                      <div className="ed-course__head position-relative">
                        <div className="ed-course__img">
                          <img
                            src="/assets/New_images/AI Transformation training at Timmins.jpg"
                            alt="course-img"
                          />
                        </div>
                      </div>

                      <div className="ed-course__body">
                        <h5>
                          AI Transformation – Banking Sector (DBS & Citi)
                        </h5>

                        <div className="ed-course__rattings">
                          <span>
                            7-year capability development in applied AI, analytics, and automation —
                            50–80% performance improvement.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CARD 3 */}
                  <div className="col-lg-6 col-xl-6 col-md-6 col-12">
                    <div
                      className="ed-course__card ed-course__card--style2 wow fadeInUp"
                      data-wow-delay=".5s"
                      data-wow-duration="1s"
                    >
                      <div className="ed-course__head position-relative">
                        <div className="ed-course__img">
                          <img
                            src="/assets/New_images/Mobile development training at Timmins.jpg"
                            alt="course-img"
                          />
                        </div>
                      </div>

                      <div className="ed-course__body">
                        <h5>
                          Mobile Development Enablement – Motorola
                        </h5>

                        <div className="ed-course__rattings">
                          <span>
                            Large-scale mobile engineering enablement driving faster delivery
                            and consistent code quality across teams.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                {/* BOTTOM LINK (NOT A BUTTON) */}
                <div className="text-center text-xl pt-4">
                  <a
                    href="/case-studies"
                    className="fw-semibold why-work-link"
                  >
                    See All Case Studies
                  </a>

                </div>


              </div>
            </section>

            {/* End Course Area */}

            {/* Start Why Choose Area */}
            <section className="position-relative section-gap pt-0">
              <div className="container ed-container position-relative">
                <div className="row justify-content-center">
                  <div className="col-lg-6 col-md-8 col-12">
                    <div className="ed-section-head text-center">
                      <h3 className="ed-section-head__title ed-split-text left">
                        A Decade of Engineering Impact
                      </h3>
                      <p>Languages Delivered: English & Mandarin</p>
                    </div>
                  </div>
                </div>
                {/* Start Funfact Area */}
                <section className="ed-funfact ed-funfact--style2">
                  <div className="container ed-container position-relative">
                    <div className="ed-funfact__inner">
                      <div className="row g-0 justify-content-between">
                        {/* Single Counter  */}
                        <div className="col-xl-auto col-lg-3 col-md-6 col-6">
                          <div
                            className="ed-funfact__counter wow fadeInUp"
                            data-wow-delay=".3s"
                            data-wow-duration="1s"
                          >
                            <h4 className="color-text-1">
                              <span className="counter">	200+</span>
                            </h4>
                            <p>Customized Courses</p>
                          </div>
                        </div>
                        {/* Single Counter  */}
                        <div className="col-xl-auto col-lg-3 col-md-6 col-6">
                          <div
                            className="ed-funfact__counter wow fadeInUp"
                            data-wow-delay=".5s"
                            data-wow-duration="1s"
                          >
                            <h4 className="color-text-2">
                              <span className="counter">5,000+</span>
                            </h4>
                            <p>Professionals Trained</p>
                          </div>
                        </div>
                        {/* Single Counter  */}
                        <div className="col-xl-auto col-lg-3 col-md-6 col-6">
                          <div
                            className="ed-funfact__counter wow fadeInUp"
                            data-wow-delay=".7s"
                            data-wow-duration="1s"
                          >
                            <h4 className="color-text-3">
                              <span className="counter">	100+</span>
                            </h4>
                            <p>Corporate Clients</p>
                          </div>
                        </div>
                        {/* Single Counter  */}
                        <div className="col-xl-auto col-lg-3 col-md-6 col-6">
                          <div
                            className="ed-funfact__counter wow fadeInUp"
                            data-wow-delay=".9s"
                            data-wow-duration="1s"
                          >
                            <h4 className="color-text-4">
                              <span className="counter">10+</span>
                            </h4>
                            <p>Countries Reached</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {/* End Funfact Area */}
                <div className="ed-w-choose__images ed-w-choose__images--style2">
                  {/* Why Choose Image  */}
                  <div className="ed-w-choose__main-img">

                  </div>
                  {/* Shapes Elements */}
                  <div className="ed-w-choose__shapes">
                    <img
                      className="ed-w-choose__shape-1 updown-ani"
                      src="/assets/images/why-choose/why-choose-2/shape-1.svg"
                      alt="shape-1"
                    />
                  </div>
                </div>
              </div>
            </section>



            <div className="section-bg position-relative">
              {/* <div className="section-bg__img style-2">
                <img src="/assets/images/section-bg-6.png" alt="bg-img" />
              </div> */}
              {/* Start Testimonial Area */}
              <section className="ed-testimonial ed-testimonial--style2 ed-course ed-course--style-5 section-gap position-relative">
                <div className="container ed-container">
                  <div className="row align-items-center">
                    <div className="col-12">
                      {/* Testimonial Content  */}
                      <div className="ed-testimonial__content ed-testimonial__content--style2">
                        <div className="owl-carousel ed-testimonial__slider">
                          {/* Single Testimonial  */}
                          <div className="ed-testimonial__slider-item">
                            <ul className="ed-testimonial__rattings">
                              <li>
                                <i className="icofont-star" />
                              </li>
                              <li>
                                <i className="icofont-star" />
                              </li>
                              <li>
                                <i className="icofont-star" />
                              </li>
                              <li>
                                <i className="icofont-star" />
                              </li>
                              <li>
                                <i className="icofont-star" />
                              </li>
                            </ul>
                            <p className="ed-testimonial__text">
                              “At Linux Driver Development session, there were many hands-on training sessions that can help to easily relate to info shared from the trainer. The trainer is passionately guiding us to resolve blockers we met along the exercises."
                            </p>
                            <div className="ed-testimonial__author">

                              <div className="ed-testimonial__author-info">
                                <h5>Engineer at Motorola</h5>

                              </div>
                            </div>
                          </div>
                          {/* Single Testimonial  */}
                          <div className="ed-testimonial__slider-item">
                            <ul className="ed-testimonial__rattings">
                              <li>
                                <i className="icofont-star" />
                              </li>
                              <li>
                                <i className="icofont-star" />
                              </li>
                              <li>
                                <i className="icofont-star" />
                              </li>
                              <li>
                                <i className="icofont-star" />
                              </li>
                              <li>
                                <i className="icofont-star" />
                              </li>
                            </ul>
                            <p className="ed-testimonial__text">
                              “There were multiple key takeaways that I had from the Embedded Linux session. It was detailed and well presented.  Really happy with the trainer who could very smoothly and gently explain the entire subject matter with much clarity.”
                            </p>
                            <div className="ed-testimonial__author">

                              <div className="ed-testimonial__author-info">
                                <h5>Engineer at Qualcomm</h5>
                              </div>
                            </div>
                          </div>
                          {/* Single Testimonial  */}
                          <div className="ed-testimonial__slider-item">
                            <ul className="ed-testimonial__rattings">
                              <li>
                                <i className="icofont-star" />
                              </li>
                              <li>
                                <i className="icofont-star" />
                              </li>
                              <li>
                                <i className="icofont-star" />
                              </li>
                              <li>
                                <i className="icofont-star" />
                              </li>
                              <li>
                                <i className="icofont-star" />
                              </li>
                            </ul>
                            <p className="ed-testimonial__text">
                              At SAFe certifications training, the trainer and the activities done during the training. The PI planning activity really helped in understanding it better. The trainer was doing a recap of the modules discussed after a few lessons which helped to remember the points learnt.
                            </p>
                            <div className="ed-testimonial__author">

                              <div className="ed-testimonial__author-info">
                                <h5>Engineer at Citigroup</h5>
                              </div>
                            </div>
                          </div>
                          {/* Single Testimonial  */}
                          <div className="ed-testimonial__slider-item">
                            <ul className="ed-testimonial__rattings">
                              <li>
                                <i className="icofont-star" />
                              </li>
                              <li>
                                <i className="icofont-star" />
                              </li>
                              <li>
                                <i className="icofont-star" />
                              </li>
                              <li>
                                <i className="icofont-star" />
                              </li>
                              <li>
                                <i className="icofont-star" />
                              </li>
                            </ul>
                            <p className="ed-testimonial__text">
                              “The session gave a very deep knowledge of RUST. With this knowledge, we can effectively understand our application's existing code and make meaningful changes in it, knowing what we are actually doing instead of just going around compiler issues and making the code to run. The SerDes part was very helpful.”
                            </p>
                            <div className="ed-testimonial__author">
                              <div className="ed-testimonial__author-info">
                                <h5>Engineer at Motorola</h5>
                              </div>
                            </div>
                          </div>
                          {/* Single Testimonial  */}
                          <div className="ed-testimonial__slider-item">
                            <ul className="ed-testimonial__rattings">
                              <li>
                                <i className="icofont-star" />
                              </li>
                              <li>
                                <i className="icofont-star" />
                              </li>
                              <li>
                                <i className="icofont-star" />
                              </li>
                              <li>
                                <i className="icofont-star" />
                              </li>
                              <li>
                                <i className="icofont-star" />
                              </li>
                            </ul>
                            <p className="ed-testimonial__text">
                              “One of my main takeaways from the Python training was learning how to write more simplified and efficient functions compared to my current approach. The examples and explanations helped me understand how to streamline logic and improve code readability, which I can apply to my day-to-day tasks.”
                            </p>
                            <div className="ed-testimonial__author">
                              <div className="ed-testimonial__author-info">
                                <h5>Engineer at Citigroup
                                </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <section className="ed-call-action position-relative section-gap mb-3.5">
              <div className="container ed-container">
                <div className="ed-call-action__inner position-relative">
                  <div className="ed-call-action__shapes">
                    <img
                      className="ed-call-action__shape-1 rotate-ani"
                      src="/assets/images/call-action/call-action-1/shape-1.svg"
                      alt="shape-1"
                    />
                    <img
                      className="ed-call-action__shape-2"
                      src="/assets/images/call-action/call-action-1/shape-2.svg"
                      alt="shape-2"
                    />
                    <img
                      className="ed-call-action__shape-3 updown-ani"
                      src="/assets/images/call-action/call-action-1/shape-3.svg"
                      alt="shape-3"
                    />
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-12">
                      <div className="ed-call-action__img">
                        <img
                          src="/assets/New_images/final cta horizontal.png"
                          alt="call-action-img"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-12 order-class">
                      <div className="ed-call-action__content">
                        <div className="ed-section-head">

                          <h3 className="ed-section-head__title">
                            Let’s Build Your Team’s Next Capability
                          </h3>
                          <p className="ed-section-head__text">
                            Whether you're planning a new AI initiative, upgrading your embedded systems team, or preparing engineers for new 5G requirements; we’re here to help.
                          </p>
                        </div>
                        <div className="ed-call-action__content-btn ed-btn mb-5" style={{ backgroundColor: 'var(--ed-secondary-color)' }}>
                          <a href="#" >
                            {" "}
                            Book a Consultation
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>


            <section className="global-presence-section section-gap">
              <div className="container">

                {/* SECTION TITLE */}
                <div className="text-center mb-5">
                  <h2 className="global-title">Our Global Presence</h2>
                  <p className="global-desc">
                    Supporting organizations across key global regions.
                  </p>
                </div>

                {/* ROW 1 – 6 COUNTRIES */}
                <div className="row justify-content-center g-4 mb-4">

                  <div className="col-lg-2 col-md-4 col-6">
                    <div className="country-card">
                      <img src="/assets/New_images/us.png" alt="United States" />
                      <p>United States</p>
                    </div>
                  </div>

                  <div className="col-lg-2 col-md-4 col-6">
                    <div className="country-card">
                      <img src="/assets/New_images/canada.png" alt="Canada" />
                      <p>Canada</p>
                    </div>
                  </div>

                  <div className="col-lg-2 col-md-4 col-6">
                    <div className="country-card">
                      <img src="/assets/New_images/uk.png" alt="United Kingdom" />
                      <p>United Kingdom</p>
                    </div>
                  </div>

                  <div className="col-lg-2 col-md-4 col-6">
                    <div className="country-card">
                      <img src="/assets/New_images/france.png" alt="France" />
                      <p>France</p>
                    </div>
                  </div>

                  <div className="col-lg-2 col-md-4 col-6">
                    <div className="country-card">
                      <img src="/assets/New_images/ME.png" alt="Middle East" />
                      <p>Middle East</p>
                    </div>
                  </div>

                  <div className="col-lg-2 col-md-4 col-6">
                    <div className="country-card">
                      <img src="/assets/New_images/chaina.png" alt="China" />
                      <p>China</p>
                    </div>
                  </div>

                </div>

                {/* ROW 2 – 5 COUNTRIES (CENTERED) */}
                <div className="row justify-content-center g-4">

                  <div className="col-lg-2 col-md-4 col-6">
                    <div className="country-card">
                      <img src="/assets/New_images/india.png" alt="India" />
                      <p>India</p>
                    </div>
                  </div>

                  <div className="col-lg-2 col-md-4 col-6">
                    <div className="country-card">
                      <img src="/assets/New_images/malaysia.png" alt="Malaysia" />
                      <p>Malaysia</p>
                    </div>
                  </div>

                  <div className="col-lg-2 col-md-4 col-6">
                    <div className="country-card">
                      <img src="/assets/New_images/sinagpore.png" alt="Singapore" />
                      <p>Singapore</p>
                    </div>
                  </div>

                  <div className="col-lg-2 col-md-4 col-6">
                    <div className="country-card">
                      <img src="/assets/New_images/indo.png" alt="Indonesia" />
                      <p>Indonesia</p>
                    </div>
                  </div>

                  <div className="col-lg-2 col-md-4 col-6">
                    <div className="country-card">
                      <img src="/assets/New_images/thai.png" alt="Thailand" />
                      <p>Thailand</p>
                    </div>
                  </div>

                </div>

              </div>
            </section>






            {/* Start Faq Area */}
            <section className="ed-faq section-gap position-relative">
              <div className="container ed-container">
                <div className="ed-section-head text-center">

                  <h3 className="ed-section-head__title text-center">
                    Frequently Asked Questions
                  </h3>
                </div>
                <div className="ed-faq__inner position-relative">

                  <div className="row align-items-center">
                    <div className="col-lg-12 col-xl-6 col-12">
                      {/* Faq Images  */}
                      <div className="ed-faq__content">

                        <div
                          className="ed-faq__accordion faq-inner accordion"
                          id="accordionExample"
                        >
                          {/* Single Faq */}
                          <div className="ed-faq__accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                              <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                              >
                                1. What is the best embedded systems training for beginners?
                              </button>
                            </h2>
                            <div
                              id="collapseOne"
                              className="accordion-collapse collapse show"
                              aria-labelledby="headingOne"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="ed-faq__accordion-body">
                                <p className="ed-faq__accordion-text">
                                  The recommended beginner courses are OS Essentials, Embedded C & GDB, and Embedded Linux System Internals. These courses provide a strong foundation in operating systems, embedded programming, debugging, and Linux internals.
                                </p>
                              </div>
                            </div>
                          </div>
                          {/* Single Faq */}
                          <div className="ed-faq__accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                              >
                                2. Does Timmins offer AI consulting or only training?
                              </button>
                            </h2>
                            <div
                              id="collapseThree"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingThree"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="ed-faq__accordion-body">
                                <p className="ed-faq__accordion-text">
                                  Timmins offers both AI consulting and AI training, including capability assessment, use-case identification, and structured enterprise AI upskilling programs.
                                </p>
                              </div>
                            </div>
                          </div>
                          {/* Single Faq */}
                          <div className="ed-faq__accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                              >
                                3. Are your programs HRDC Claimable?

                              </button>
                            </h2>
                            <div
                              id="collapseTwo"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingTwo"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="ed-faq__accordion-body">
                                <p className="ed-faq__accordion-text">
                                  Yes. For Malaysian employers only, many AI, Embedded Systems, 5G, and corporate training programs are HRDC claimable, subject to eligibility and approval.
                                </p>
                              </div>
                            </div>
                          </div>
                          {/* Single Faq */}
                          <div className="ed-faq__accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                              >
                                4. Do you provide customized training for engineering teams?
                              </button>
                            </h2>
                            <div
                              id="collapseThree"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingThree"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="ed-faq__accordion-body">
                                <p className="ed-faq__accordion-text">
                                  Yes. Timmins specializes in customized, role-based training pathways for embedded systems, AI, 5G, and software engineering teams.
                                </p>
                              </div>
                            </div>
                          </div>
                          {/* Single Faq */}
                          <div className="ed-faq__accordion-item">
                            <h2 className="accordion-header" id="headingFour">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseFour"
                                aria-expanded="false"
                                aria-controls="collapseFour"
                              >
                                5.Are Timmins training courses available online?
                              </button>
                            </h2>
                            <div
                              id="collapseFour"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingFour"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="ed-faq__accordion-body">
                                <p className="ed-faq__accordion-text">
                                  Yes. Timmins offers online, on-site, and hybrid training programs for engineering and technical teams.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                    <div className="col-lg-12 col-xl-6 col-12">
                      {/* Faq Content  */}
                      <div className="ed-faq__content">

                        <div
                          className="ed-faq__accordion faq-inner accordion"
                          id="accordionExample"
                        >
                          {/* Single Faq */}
                          <div className="ed-faq__accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                              <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                              >
                                6. What industries does Timmins work with?
                              </button>
                            </h2>
                            <div
                              id="collapseOne"
                              className="accordion-collapse collapse show"
                              aria-labelledby="headingOne"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="ed-faq__accordion-body">
                                <p className="ed-faq__accordion-text">
                                  Timmins works with semiconductors, telecom, manufacturing, banking, digital platforms, and technology-driven enterprises.
                                </p>
                              </div>
                            </div>
                          </div>
                          {/* Single Faq */}
                          <div className="ed-faq__accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                              >
                                7. Do you provide corporate training outside Malaysia?
                              </button>
                            </h2>
                            <div
                              id="collapseTwo"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingTwo"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="ed-faq__accordion-body">
                                <p className="ed-faq__accordion-text">
                                  Yes. Timmins delivers corporate training across Malaysia, Singapore, Indonesia, China, India, Vietnam, the United States, and Canada.
                                </p>
                              </div>
                            </div>
                          </div>
                          {/* Single Faq */}
                          <div className="ed-faq__accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                              >
                                8. How is Timmins different from other corporate training providers?
                              </button>
                            </h2>
                            <div
                              id="collapseThree"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingThree"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="ed-faq__accordion-body">
                                <p className="ed-faq__accordion-text">
                                  Timmins is practitioner-led, engineering-grade, and deeply specialized, focusing on real capability building rather than generic or tool-centric training.
                                </p>
                              </div>
                            </div>
                          </div>
                          {/* Single Faq */}
                          <div className="ed-faq__accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                              >
                                9. Do you offer end-to-end Embedded Linux training?
                              </button>
                            </h2>
                            <div
                              id="collapseThree"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingThree"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="ed-faq__accordion-body">
                                <p className="ed-faq__accordion-text">
                                  Yes. Timmins covers Embedded Linux end-to-end, including OS Essentials, Embedded C & GDB, Embedded Linux System Internals, device drivers (audio, I2C), kernel debugging, user-space and kernel internals, and SELinux, security.
                                </p>
                              </div>
                            </div>
                          </div>
                          {/* Single Faq */}
                          <div className="ed-faq__accordion-item">
                            <h2 className="accordion-header" id="headingFour">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseFour"
                                aria-expanded="false"
                                aria-controls="collapseFour"
                              >
                                10. Can Timmins design onboarding programs for fresh graduates?

                              </button>
                            </h2>
                            <div
                              id="collapseFour"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingFour"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="ed-faq__accordion-body">
                                <p className="ed-faq__accordion-text">
                                  Yes. Timmins has designed and delivered large-scale onboarding and engineering academy programs for semiconductor and telecom organizations.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main >

          <Footer />
        </div >
      </div >
      {/* Start Login Modal */}
    </>

  );
}
