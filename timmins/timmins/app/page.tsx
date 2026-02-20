"use client";
import { useState } from "react";

import Image from "next/image";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

export default function Home() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  return (
    <>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <div
              className="section-bg hero-bg-2 background-image position-relative"
              style={{ backgroundImage: 'url("/assets/New_images/hero_2.jpg")' }}
            >
              <link rel="preload" as="image" href="/assets/New_images/hero_2.jpg" />

              <section className="ed-hero">
                <div className="container ed-container-expand">

                  {/* HRDC BADGES */}
                  <div className="hero-badge-wrapper d-flex gap-3">
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

                  <div className="row align-items-center">
                    <div className="col-lg-6 col-12">

                      <div className="hero-text-overlay">
                        <div className="ed-hero__content">

                          <h1 className="ed-hero__content-title ed-split-text left">
                            Building Future-Ready Tech Teams
                          </h1>

                          <p className="text-black text-xl font-medium homePara">
                            Engineering-grade capability building for modern tech teams,
                            trusted for over a decade across 12+ countries worldwide.
                          </p>

                          <div className="d-flex gap-3 mt-3 flex-wrap">
                            <div className="ed-hero__btn ed-btn">
                              <a href="#">For Companies – Explore Solutions</a>
                            </div>

                            <div
                              className="ed-btn"
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
                  <h3 className="ed-section-head__title  text-center pb-5   ">
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
              <section className="About-area learn-fit-section position-relative mb-5 ">

                {/* Section Title Container */}
                <div className="container ed-container">
                  <div className="row justify-content-center pb-4">
                    <div className="col-lg-8 col-12">
                      <div className="ed-section-head text-center">
                        <h3 className="ed-section-head__title">
                          Learn the Way That Fits You
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Two Separate Containers */}
                <div className="container ed-container">
                  <div className="row g-4">

                    {/* FOR COMPANIES */}
                    <div className="col-lg-6 col-12">
                      <div className="learn-box-single">
                        <h3>For Companies</h3>
                        <p>
                          Build team-wide engineering capability through tailored training and consulting.
                          Popular corporate programs:
                        </p>

                        <ul>
                          <li>Embedded Systems Engineering</li>
                          <li>5G R&D & Technician Upskilling</li>
                          <li>AI Consulting & Applied AI</li>
                          <li>Fresh Graduate Onboarding program</li>
                          <li>Corporate Training Malaysia (HRDC Claimable)</li>
                        </ul>
                        <div className="ed-hero__btn ed-btn">
                          <a href="/courses">Explore B2B Solutions</a>
                        </div>
                      </div>
                    </div>

                    {/* FOR INDIVIDUALS */}
                    <div className="col-lg-6 col-12">
                      <div className="learn-box-single">
                        <h3>For Individuals (Public Classes)</h3>
                        <p>
                          Technical courses designed for engineers, fresh graduates,
                          and career switchers. Popular public classes:
                        </p>

                        <ul>
                          <li>Embedded Linux System Internals</li>
                          <li>Data Analysis and Visualization with Power BI</li>
                          <li>Machine Learning with Python</li>
                          <li>Kotlin Fundamentals</li>
                          <li>Gen AI for IT and Non-IT Teams</li>
                        </ul>

                        <div className="ed-hero__btn ed-btn">
                          <a href="/courses">Browse Public Classes</a>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

              </section>


            </div>
            <>
              {/* Start About Area */}
              <section className="our-values-2 mb-5 why-timmins-section">
                <div className="container">

                  <div className="text-center mb-5">
                    <h2 className="fw-bold">Why Training with Timmins</h2>

                    <p className="text-muted">
                      <i>Real engineers. Real practice. Real capability.</i>
                    </p>

                    <p className="mt-3">
                      Every program is designed and delivered by practitioners with deep field
                      experience in engineering, telecom, manufacturing, and banking.
                    </p>
                  </div>

                  <div className="row g-4">

                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="value-card h-100">
                        <div className="icon growth">
                          <i className="bi bi-person-workspace" />
                        </div>
                        <h5>Practitioner-Led Delivery</h5>
                        <p>Led by engineers with real-world delivery experience.</p>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="value-card h-100">
                        <div className="icon cocreation">
                          <i className="bi bi-diagram-3" />
                        </div>
                        <h5>Engineering-Grade Depth</h5>
                        <p>Technical rigor for real-world complexity.</p>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="value-card h-100">
                        <div className="icon collaboration">
                          <i className="bi bi-laptop" />
                        </div>
                        <h5>Hands-On Learning</h5>
                        <p>Labs, debugging, system workflows, AI pipelines, firmware tools.</p>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="value-card h-100">
                        <div className="icon excellence">
                          <i className="bi bi-bar-chart-line" />
                        </div>
                        <h5>Measurable Capability Growth</h5>
                        <p>Assessments, dashboards, and skill-mapping.</p>
                      </div>
                    </div>

                  </div>

                  <div className="text-center pt-4">
                    <a
                      href="/our-approach"
                      target="_blank" rel="noopener noreferrer"
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
              <section className="ed-course ed-course--style-5 section-gap position-relative public-class-section">
                <div className="container ed-container">

                  {/* Section Shapes */}
                  <div className="ed-course__shapes">
                    <img
                      className="shape-1 updown-ani"
                      src="assets/images/course/course-5/shape-1.svg"
                      alt="shape-1"
                    />
                  </div>

                  {/* SECTION HEADING */}
                  <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8 col-12">
                      <div className="ed-section-head text-center">
                        <h3 className="ed-section-head__title ed-split-text left">
                          Featured Public Classes
                        </h3>

                        {/* HRDC BADGES */}
                        <div className="public-badge-wrapper d-flex gap-3 justify-content-center mt-3">
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
                      </div>
                    </div>
                  </div>

                  {/* COURSES */}
                  <div className="row mt-4">
                    <div className="col-12">
                      <div className="ed-course__tab">
                        <div
                          className="ed-course__tab-details tab-details wow fadeInUp"
                          data-wow-delay=".5s"
                          data-wow-duration="1s"
                        >
                          <div className="tab-content">
                            <div className="tab-pane fade show active">
                              <div className="row">

                                {/* COURSE 1 */}
                                <div className="col-lg-6 col-12">
                                  <div className="ed-course__card">
                                    <div className="ed-course__image">
                                      <div className="ed-course__main-img">
                                        <img
                                          src="/assets/New_images/Embedded Linux public class at Timmins.png"
                                          alt="course-img"
                                        />
                                      </div>
                                    </div>
                                    <div className="ed-course__content">
                                      <span className="ed-course__type">Face-to-Face</span>
                                      <a href="#">Embedded Linux System Internals</a>
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
                                          src="/assets/New_images/Power BI public class at timmins.png"
                                          alt="course-img"
                                        />
                                      </div>
                                    </div>
                                    <div className="ed-course__content">
                                      <span className="ed-course__type">Face-to-Face</span>
                                      <a href="#">Power BI: From Data to Decisions</a>
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
                                          src="/assets/New_images/Generative AI public class at Timmins.png"
                                          alt="course-img"
                                        />
                                      </div>
                                    </div>
                                    <div className="ed-course__content">
                                      <span className="ed-course__type">Online</span>
                                      <a href="#">Generative AI with LangChain</a>
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
                                          src="/assets/New_images/kotlin fundamentals public class at Timmins.png"
                                          alt="course-img"
                                        />
                                      </div>
                                    </div>
                                    <div className="ed-course__content">
                                      <span className="ed-course__type">Face-to-Face</span>
                                      <a href="#">Kotlin Fundamentals</a>
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
                          <a href="#">View Training Calendar</a>
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
                        <h6>
                          Fresh Graduate Onboarding – Semiconductor Engineering
                        </h6>

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
                            src="/assets/New_images/AI Transformation training at Timmins.png"
                            alt="course-img"
                          />
                        </div>
                      </div>

                      <div className="ed-course__body">
                        <h6>
                          AI Transformation – Banking Sector (DBS & Citi)
                        </h6>

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
                            src="/assets/New_images/Mobile development training at Timmins.png"
                            alt="course-img"
                          />
                        </div>
                      </div>

                      <div className="ed-course__body">
                        <h6>
                          Mobile Development Enablement – Motorola
                        </h6>

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
                    href="/case-study"
                    className="fw-semibold why-work-link"
                    target="_blank" rel="noopener noreferrer"
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


            <section className="global-presence-section section-gap ">
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
                      <img src="/assets/New_images/US2.png" alt="United States" />
                      <p>United States</p>
                    </div>
                  </div>

                  <div className="col-lg-2 col-md-4 col-6">
                    <div className="country-card">
                      <img src="/assets/New_images/Canada 2.png" alt="Canada" />
                      <p>Canada</p>
                    </div>
                  </div>

                  <div className="col-lg-2 col-md-4 col-6">
                    <div className="country-card">
                      <img src="/assets/New_images/UK2.png" alt="United Kingdom" />
                      <p>United Kingdom</p>
                    </div>
                  </div>

                  <div className="col-lg-2 col-md-4 col-6">
                    <div className="country-card">
                      <img src="/assets/New_images/France 2.png" alt="France" />
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
                      <img src="/assets/New_images/China 1.png" alt="China" />
                      <p>China</p>
                    </div>
                  </div>

                </div>

                {/* ROW 2 – 5 COUNTRIES (CENTERED) */}
                <div className="row justify-content-center g-4">

                  <div className="col-lg-2 col-md-4 col-6">
                    <div className="country-card">
                      <img src="/assets/New_images/India 2.png" alt="India" />
                      <p>India</p>
                    </div>
                  </div>

                  <div className="col-lg-2 col-md-4 col-6">
                    <div className="country-card">
                      <img src="/assets/New_images/Malay2.png" alt="Malaysia" />
                      <p>Malaysia</p>
                    </div>
                  </div>

                  <div className="col-lg-2 col-md-4 col-6">
                    <div className="country-card">
                      <img src="/assets/New_images/Singapore2.png" alt="Singapore" />
                      <p>Singapore</p>
                    </div>
                  </div>

                  <div className="col-lg-2 col-md-4 col-6">
                    <div className="country-card">
                      <img src="/assets/New_images/Indo 2.png" alt="Indonesia" />
                      <p>Indonesia</p>
                    </div>
                  </div>

                  <div className="col-lg-2 col-md-4 col-6">
                    <div className="country-card">
                      <img src="/assets/New_images/Thai2 (2).png" alt="Thailand" />
                      <p>Thailand</p>
                    </div>
                  </div>

                </div>

              </div>
            </section>



            <section className="ed-call-action position-relative section-gap pb-5 about-cta">
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

                  <div className="row align-items-center">

                    {/* IMAGE */}
                    <div className="col-lg-6 col-12">
                      <div className="ed-call-action__img">
                        <img
                          src="/assets/New_images/final cta horizontal.png"
                          alt="call-action-img"
                        />
                      </div>
                    </div>

                    {/* CONTENT */}
                    <div className="col-lg-6 col-12 order-class pb-5">
                      <div className="ed-call-action__content">


                        <h4 className="cta-heading ">
                          Let’s Build Your Team’s Next Capability
                        </h4>

                        <p className="ed-section-head__text mb-4">
                          Whether you're designing new systems, strengthening delivery capability, or preparing teams for evolving operational requirements, we’re here to help.
                        </p>


                        <div
                          className="ed-call-action__content-btn ed-btn mb-7"
                          style={{ backgroundColor: 'var(--ed-secondary-color)' }}
                        >
                          <a href="/contact-us">
                            Book a Consultation
                          </a>
                        </div>

                      </div>
                    </div>

                  </div>
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
          </main >

          <Footer />
        </div >
      </div >
      {/* Start Login Modal */}
    </>

  );
}
