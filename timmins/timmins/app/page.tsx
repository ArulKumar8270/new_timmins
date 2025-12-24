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
              {/* Preload hero image for faster LCP */}
              <link rel="preload" as="image" href="/assets/New_images/hero_2.jpg" />

              {/* Start Hero Area */}
              <section className="ed-hero">
                <div className="container ed-container-expand">
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                      {/* Hero Content */}
                      <div className="ed-hero__content">
                        <h1 className="ed-hero__content-title ed-split-text left">
                          Building Future-Ready Engineering & Tech Teams
                        </h1>
                        <p className="ed-hero__content-text">
                          Timmins builds practical engineering capability in AI, Embedded Systems, 5G, and enterprise agility for teams across ASEAN and North America with 10+ years experience
                        </p>
                        <p className="badge-container mt-2">
                          <Image 
                            src="/assets/New_images/badge.png" 
                            alt="HRDC Claimable Training badge" 
                            width={120}
                            height={120}
                            priority
                          />
                          <span>HRDC Claimable Training available for Malaysian employers.</span>
                        </p>
                        <div className="d-flex gap-3">
                          <div className="ed-hero__btn ed-btn">
                            <a href="#">
                              For Companies – Explore Solutions
                            </a>
                          </div>
                          <div className="ed-hero__btn ed-btn" style={{ backgroundColor: 'var(--ed-secondary-color)' }}>
                            <a href="#">
                              For Individuals – Browse Public Classes
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </section>

              {/* End Hero Area */}
            </div>

            <section className="ed-partner mt-5">
              <div className="container ed-container">
                <div className="row">
                  {/* <div className="col-12">
                    <div className="ed-partner__section-head">
                      <h3 className="ed-partner__section-head-title">
                        Get in touch with the <span>250+</span> companies who
                        Collaboration us
                      </h3>
                    </div>
                  </div> */}
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="owl-carousel ed-partner__slider">
                      {/* Single Slider  */}
                      <a href="#" target="_blank" className="ed-parnet__brand-logo">
                        <img
                          src="/assets/New_images/clients/Cisco_logo_blue_2016.svg.png"
                          alt="Cisco"
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
              <section className="ed-about ed-about--style2 section-gap  position-relative">
                <div className="container ed-container">
                  <div className="row justify-content-center pb-4">
                    <div className="col-lg-8 col-12">
                      <div className="ed-section-head text-center">
                        <h3 className="ed-section-head__title ed-split-text left">
                          Learn the Way That Fits You
                        </h3>
                        <p className="ed-section-head__text">
                          Whether you’re an organization building full-team capability or an individual upgrading your technical career, Timmins offers two learning paths:                        </p>
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
                            Build team-wide capability in AI, embedded systems, and 5G through customized corporate training and consulting. Popular corporate programs:

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
                              Online Remote Learning
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
                              Customized Technical Training
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
                              Embedded Linux Fundamentals

                            </li>
                            <li>
                              <img
                                src="/assets/images/icons/icon-check-blue.svg"
                                alt="icon-check-blue"
                              />
                              Generative AI & LangChain

                            </li>
                            <li>
                              <img
                                src="/assets/images/icons/icon-check-blue.svg"
                                alt="icon-check-blue"
                              />
                              Android/Kotlin Development

                            </li>
                            <li>
                              <img
                                src="/assets/images/icons/icon-check-blue.svg"
                                alt="icon-check-blue"
                              />
                              5G Fundamentals
                            </li>
                            <li>
                              <img
                                src="/assets/images/icons/icon-check-blue.svg"
                                alt="icon-check-blue"
                              />
                              SAFe® Scrum Master Certification
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
              <section className="ed-about position-relative section-gap pt-0">
                <div className="container-fluid">
                  <div className="row justify-content-center pb-4">
                    <div className="col-lg-8 col-12">
                      <div className="ed-section-head text-center">
                        <h2 className="ed-section-head__title ed-split-text left">
                          Why Timmins
                        </h2>
                        <p>Real engineers. Real practice. Real capability.</p>
                        <p className="ed-section-head__text">
                          We are not a generic training vendor. Every program is designed and delivered by practitioners with deep field experience in engineering, telecom, manufacturing, and digital banking.
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="ed-category__wrapper">
                          {/* Single Coure Card  */}
                          <a
                            href="/courses"
                            className="ed-category__card wow fadeInUp"
                            data-wow-delay=".3s"
                            data-wow-duration="1s"
                          >
                            {/* <div className="ed-category__icon bg-1">
                              <img src="assets/images/category/category-1/1.svg" alt="icon" />
                            </div> */}
                            <div className="ed-category__info">
                              <h4>Practitioner-Led Delivery</h4>
                              <p>trainers who build systems, not just teach them.</p>
                            </div>
                          </a>
                          {/* Single Coure Card  */}
                          <a
                            href="/courses"
                            className="ed-category__card wow fadeInUp"
                            data-wow-delay=".5s"
                            data-wow-duration="1s"
                          >
                            {/* <div className="ed-category__icon bg-2">
                              <img src="assets/images/category/category-1/2.svg" alt="icon" />
                            </div> */}
                            <div className="ed-category__info">
                              <h4>Engineering-Grade Depth</h4>
                              <p>technical rigor for real-world complexity.                              </p>
                            </div>
                          </a>
                          {/* Single Coure Card  */}
                          <a
                            href="/courses"
                            className="ed-category__card wow fadeInUp"
                            data-wow-delay=".7s"
                            data-wow-duration="1s"
                          >
                            {/* <div className="ed-category__icon bg-3">
                              <img src="assets/images/category/category-1/3.svg" alt="icon" />
                            </div> */}
                            <div className="ed-category__info">
                              <h4>Hands-On Learning</h4>
                              <p>labs, debugging, system workflows, AI pipelines, firmware tools.
                              </p>
                            </div>
                          </a>
                          {/* Single Coure Card  */}
                          <a
                            href="/courses"
                            className="ed-category__card wow fadeInUp"
                            data-wow-delay=".9s"
                            data-wow-duration="1s"
                          >
                            {/* <div className="ed-category__icon bg-4">
                              <img src="assets/images/category/category-1/4.svg" alt="icon" />
                            </div> */}
                            <div className="ed-category__info">
                              <h4>Measurable Capability Growth</h4>
                              <p> assessments, dashboards, and skill-mapping.</p>
                            </div>
                          </a>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* End About Area */}
            </>
            <>
              {/* Start Course Area  */}
              <section className="ed-course ed-course--style-5 section-gap position-relative">
                <div className="container ed-container">
                  {/* Section Shapes  */}
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

                        {/* Tab Details */}
                        <div
                          className="ed-course__tab-details tab-details wow fadeInUp"
                          data-wow-delay=".5s"
                          data-wow-duration="1s"
                        >
                          <div className="tab-content" id="nav-tabContent">
                            {/* Tab One */}
                            <div
                              className="tab-pane fade show active"
                              id="courseTab1"
                              role="tabpanel"
                            >
                              <div className="row">
                                {/* Single Course  */}
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
                                      <span className="ed-course__type">
                                        Face-to-Face
                                      </span>
                                      <a href="#">
                                        Embedded Linux System Internals
                                      </a>
                                      <p>
                                        5 days
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                {/* Single Course  */}
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
                                      <p>
                                        2 Days
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                {/* Single Course  */}
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
                                      <span className="ed-course__type">
                                        Online
                                      </span>
                                      <a href="#">
                                        Generative AI with LangChain
                                      </a>
                                      <p>
                                        2 days
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                {/* Single Course  */}
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
                                      <p>
                                        4 Days
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Tab Details */}
                      </div>
                      <div className="d-flex justify-content-center mt-4">
                        <p className="badge-container">
                          <img src="/assets/New_images/badge.png" alt="hero-image" />
                          <span>HRDC Claimable Training available for Malaysian employers.</span>
                        </p>

                      </div>
                      <div className="d-flex justify-content-center">
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
                  {/* Single Course Card */}
                  <div className="col-lg-6 col-xl-6 col-md-6 col-12">
                    <div
                      className="ed-course__card ed-course__card--style2 wow fadeInUp"
                      data-wow-delay=".3s"
                      data-wow-duration="1s"
                    >
                      <div className="ed-course__head position-relative">
                        <a href="#" className="ed-course__img">
                          <img
                            src="/assets/images/course/course-2/1.png"
                            alt="course-img"
                          />
                        </a>
                      </div>
                      <div className="ed-course__body">
                        <a href="#" className="ed-course__title">
                          <h5>
                            Fresh Graduate Onboarding - Semiconductor Engineering
                          </h5>
                        </a>
                        <div className="ed-course__rattings">

                          <span>A 10-year partnership enabling 3,000+ engineers to become project-ready in embedded, mobile, 5G, AI, and RF.</span>

                        </div>
                        <div className="text-decoration-underline"><a href="#">See All Case Studies</a></div>
                      </div>
                    </div>
                  </div>

                  {/* Single Course Card */}
                  <div className="col-lg-6 col-xl-6 col-md-6 col-12">
                    <div
                      className="ed-course__card ed-course__card--style2 wow fadeInUp"
                      data-wow-delay=".3s"
                      data-wow-duration="1s"
                    >
                      <div className="ed-course__head position-relative">
                        <a href="#" className="ed-course__img">
                          <img
                            src="/assets/New_images/AI Transformation training at Timmins.jpg"
                            alt="course-img"
                          />
                        </a>
                      </div>
                      <div className="ed-course__body">

                        <a href="#" className="ed-course__title">
                          <h5>AI Transformation - Banking Sector (DBS & Citi)</h5>
                        </a>
                        <div className="ed-course__rattings">
                          <span>7-year capability development in applied AI, analytics, and automation — 50–80% performance improvement.</span>
                        </div>
                        <div className="text-decoration-underline"><a href="#">See All Case Studies</a></div>
                      </div>
                    </div>
                  </div>
                  {/* Single Course Card */}
                  <div className="col-lg-6 col-xl-6 col-md-6 col-12">
                    <div
                      className="ed-course__card ed-course__card--style2 wow fadeInUp"
                      data-wow-delay=".5s"
                      data-wow-duration="1s"
                    >
                      <div className="ed-course__head position-relative">
                        <a href="#" className="ed-course__img">
                          <img
                            src="/assets/New_images/Mobile development training at Timmins.jpg"
                            alt="course-img"
                          />
                        </a>

                      </div>
                      <div className="ed-course__body">
                        <div className="ed-course__lesson">

                        </div>
                        <a href="#" className="ed-course__title">
                          <h5>
                            Mobile Development Enablement - Motorola
                          </h5>
                        </a>
                        <div className="ed-course__rattings">

                          <span>Mobile Development Enablement - Motorola</span>

                        </div>
                        <div className="text-decoration-underline"><a href="#">See All Case Studies</a></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="ed-section-bottom-btn ed-btn w-auto">
                    <a>
                      View All Courses
                    </a>
                  </div>
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
                                <h5>L&D at Qualcomm</h5>
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
                                <h5>Engineer at Citibank</h5>
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
                                <h5>Engineer at Citibank</h5>
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

            <section className="ed-call-action position-relative section-gap pb-0">
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
                          src="/assets/New_images/final cta section.jpg"
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
                        <div className="ed-call-action__content-btn ed-btn" style={{ backgroundColor: 'var(--ed-secondary-color)' }}>
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



            <section className="section-gap map-section pb-0">
              <img src="/assets/New_images/map.png" alt="clients" />
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
                                  For new engineers, foundational Embedded Linux and embedded programming training provide the fastest capability lift
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
                                  Yes. Timmins provides AI consulting, AI consultation, and full capability-building programs for enterprise AI transformation.
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
                                  Yes, for Malaysian employers only. Many AI, embedded, 5G, and corporate training Malaysia programs qualify.
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
                                  Yes. We specialize in custom training pathways for embedded systems, 5G, AI, and software engineering
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
                                5. Are 5G training courses available online?
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
                                  Yes. We offer both online and on-site 5G training certification and 5G technician training programs.
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
                                6. How can I start with your online class?
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
                                  Semiconductors, telecom, manufacturing, banking, digital platforms, and tech-driven enterprises.
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
                                  Yes. We deliver programs across Singapore, India, Vietnam, the US, and Canada.
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
                                8.How is Timmins different from other corporate training providers?
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
                                  We’re practitioner-led, engineering-grade, and deeply specialized in advanced technical capability, not generic soft skills.
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
                                9. Do you offer embedded programming training for IoT or device teams?
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
                                  Yes. Including kernel, drivers, BSP, Yocto, debugging, and system-level engineering.
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
                                  Absolutely. We’ve built multi-year onboarding academies for semiconductor and telecom companies.
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
