import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

const page = () => {
    return (
        <>
            <Header />

            <section className="ed-hero ed-hero--style4">
                {/* Hero Image One  */}
                <div className="ed-hero__image--style-4 left-img">
                    <img src="assets/images/hero/home-4/hero-img-1.png" alt="hero-img-1" />
                </div>
                {/* Hero Elements Move  */}
                <div className="ed-hero__elements--style-2">
                    <img
                        className="shape-1 element-move"
                        src="assets/images/hero/home-4/elements-move/shape-1.svg"
                        alt="shape-1"
                    />
                    <img
                        className="shape-2 element-move"
                        src="assets/images/hero/home-4/elements-move/shape-2.svg"
                        alt="shape-2"
                    />
                    <img
                        className="shape-3 element-move"
                        src="assets/images/hero/home-4/elements-move/shape-3.svg"
                        alt="shape-3"
                    />
                    <img
                        className="shape-4 element-move"
                        src="assets/images/hero/home-4/elements-move/shape-4.svg"
                        alt="shape-4"
                    />
                </div>
                <div className="ed-hero__fixed-shape">
                    <img
                        className="shape-1"
                        src="assets/images/hero/home-4/shape-1.svg"
                        alt="shape-1"
                    />
                    <img
                        className="shape-2"
                        src="assets/images/hero/home-4/vector-1.svg"
                        alt="vector-1"
                    />
                    <img
                        className="shape-3"
                        src="assets/images/hero/home-4/shape-3.svg"
                        alt="shape-3"
                    />
                </div>
                <div className="container ed-container-expand">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-6 col-12">
                            {/* Hero Content */}
                            <div className="ed-hero__content text-center">
                                <h1 className="ed-hero__content-title ed-split-text left">
                                    5G Engineering Capability
                                </h1>

                                <span className="ed-hero__content-sm-title">Build 5G Networks with Real Deployment Intelligence</span>

                                <p className="ed-hero__content-text p-0">
                                    From RAN to Core, slicing to latency engineering, device-to-edge performance, and enterprise-grade private 5G. Timmins builds operational 5G capability for real-world networks.
                                </p>

                                <div className="ed-hero__btn">
                                    <a href="course-1.html" className="ed-btn1">
                                        Contact

                                    </a>
                                </div>

                                <p className="ed-hero__content-text p-0">
                                    From RAN to Core, slicing to latency engineering, device-to-edge performance, and enterprise-grade private 5G. Timmins builds operational 5G capability for real-world networks.
                                </p>


                            </div>
                        </div>
                    </div>
                </div>
                {/* Hero Image Two  */}
                <div className="ed-hero__image--style-4 right-img">
                    <div className="ed-hero__image-shape">
                        <img
                            className="rotate-ani"
                            src="assets/images/hero/home-4/shape-2.svg"
                            alt="shape-2"
                        />
                    </div>
                    <div className="ed-hero__image-main">
                        <img src="assets/images/hero/home-4/hero-img-2.png" alt="hero-img-2" />
                    </div>
                </div>
            </section>


            <section className="ed-about ed-about__page section-gap position-relative">
                <div className="container ed-container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-12">
                            {/* About Images  */}
                            <div className="ed-about__images">
                                <div className="ed-about__main-img">
                                    <img
                                        src="assets/images/about/about-1/about-img.png"
                                        alt="about-img"
                                    />
                                </div>
                                <div className="counter-card updown-ani">
                                    <div className="counter-card__icon">
                                        <i className="fi fi-rr-graduation-cap" />
                                    </div>
                                    <div className="counter-card__info">
                                        <h4>
                                            <span className="counter">9394</span>+
                                        </h4>
                                        <p>Enrolled Learners</p>
                                    </div>
                                </div>
                                <div className="ed-about__shapes">
                                    <img
                                        className="ed-about__shape-1"
                                        src="assets/images/about/about-1/shape-1.svg"
                                        alt="shape-1"
                                    />
                                    <img
                                        className="ed-about__shape-2"
                                        src="assets/images/about/about-1/shape-2.svg"
                                        alt="shape-2"
                                    />
                                    <img
                                        className="ed-about__shape-3 rotate-ani"
                                        src="assets/images/about/about-1/shape-3.svg"
                                        alt="shape-3"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            {/* About Content  */}
                            <div className="ed-about__content">
                                <div className="ed-section-head">
                                    <span className="ed-section-head__sm-title">
                                        WELCOME TO nickname
                                    </span>
                                    <h3 className="ed-section-head__title ed-split-text right">
                                        Why 5G Capability Matters for Modern Engineering Teams
                                    </h3>
                                    <p className="ed-section-head__text">
                                        5G is not “faster cellular.” It is:
                                    </p>
                                </div>
                                <div className="ed-about__feature">
                                    <ul className="ed-about__features-list">
                                        <li>
                                            <img
                                                src="assets/images/icons/icon-check-blue.svg"
                                                alt="icon-check-blue"
                                            />
                                            ultra-low latency for robotics & automation
                                        </li>
                                        <li>
                                            <img
                                                src="assets/images/icons/icon-check-blue.svg"
                                                alt="icon-check-blue"
                                            />
                                            deterministic networking for manufacturing lines
                                        </li>
                                        <li>
                                            <img
                                                src="assets/images/icons/icon-check-blue.svg"
                                                alt="icon-check-blue"
                                            />
                                            high-density IoT orchestration
                                        </li>
                                        <li>
                                            <img
                                                src="assets/images/icons/icon-check-blue.svg"
                                                alt="icon-check-blue"
                                            />
                                            edge-based compute reliability
                                        </li>
                                        <li>
                                            <img
                                                src="assets/images/icons/icon-check-blue.svg"
                                                alt="icon-check-blue"
                                            />
                                            enterprise private networks for OT security
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img
                    className="ed-about__shape-4"
                    src="assets/images/abstracts/abstract-element-regular.svg"
                    alt="shape-4"
                />
            </section>


            <section className="ed-about ed-about__page section-gap position-relative">
                <div className="container ed-container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-12">
                            {/* About Images  */}
                            <div className="ed-about__images">
                                <div className="ed-about__main-img">
                                    <img
                                        src="assets/images/about/about-1/about-img.png"
                                        alt="about-img"
                                    />
                                </div>
                                <div className="counter-card updown-ani">
                                    <div className="counter-card__icon">
                                        <i className="fi fi-rr-graduation-cap" />
                                    </div>
                                    <div className="counter-card__info">
                                        <h4>
                                            <span className="counter">9394</span>+
                                        </h4>
                                        <p>Enrolled Learners</p>
                                    </div>
                                </div>
                                <div className="ed-about__shapes">
                                    <img
                                        className="ed-about__shape-1"
                                        src="assets/images/about/about-1/shape-1.svg"
                                        alt="shape-1"
                                    />
                                    <img
                                        className="ed-about__shape-2"
                                        src="assets/images/about/about-1/shape-2.svg"
                                        alt="shape-2"
                                    />
                                    <img
                                        className="ed-about__shape-3 rotate-ani"
                                        src="assets/images/about/about-1/shape-3.svg"
                                        alt="shape-3"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            {/* About Content  */}
                            <div className="ed-about__content">
                                <div className="ed-section-head">

                                    <h3 className="ed-section-head__title ed-split-text right">
                                        How Timmins Delivers Practitioner-Led 5G Engineering Capability
                                    </h3>

                                    <span className="ed-section-head__sm-title">
                                        Timmins is a boutique, engineering-grade capability partner:

                                    </span>
                                </div>
                                <div className="ed-about__feature">
                                    <ul className="ed-about__features-list">
                                        <li>
                                            <img
                                                src="assets/images/icons/icon-check-blue.svg"
                                                alt="icon-check-blue"
                                            />
                                            led by practitioners who deploy 5G, not talk about it
                                        </li>
                                        <li>
                                            <img
                                                src="assets/images/icons/icon-check-blue.svg"
                                                alt="icon-check-blue"
                                            />
                                            covers RAN → Core → MEC → devices → ops
                                        </li>
                                        <li>
                                            <img
                                                src="assets/images/icons/icon-check-blue.svg"
                                                alt="icon-check-blue"
                                            />
                                            embeds telco + manufacturing + banking use cases
                                        </li>
                                        <li>
                                            <img
                                                src="assets/images/icons/icon-check-blue.svg"
                                                alt="icon-check-blue"
                                            />
                                            goes beyond certification to live network behavior, load, jitter, QoS & slicing
                                        </li>
                                    </ul>
                                    <span className="ed-section-head__sm-title">
                                        This is not a 5G classroom. This is 5G as multi-industry infrastructure maturity.

                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img
                    className="ed-about__shape-4"
                    src="assets/images/abstracts/abstract-element-regular.svg"
                    alt="shape-4"
                />
            </section>


            <section className="ed-why-choose ed-why-choose--style3 section-gap position-relative">
                <div className="container ed-container">
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <div className="ed-w-choose__content">
                                <div className="ed-section-head">

                                    <h3 className="ed-section-head__title ed-split-text left">
                                        How Teams Grow in 5G
                                    </h3>
                                    <p className="ed-section-head__text">
                                        Stage & Capability Lift
                                    </p>
                                </div>
                                <div className="ed-w-choose__info">
                                    {/* Single Info  */}
                                    <div className="ed-w-choose__info-single">
                                        <div className="ed-w-choose__info-head">

                                            <h5>RF & RAN foundations</h5>
                                        </div>
                                        <div className="ed-w-choose__info-bottom">
                                            <p>
                                                spectrum, throughput shaping, interference
                                            </p>
                                        </div>
                                    </div>
                                    {/* Single Info  */}
                                    <div className="ed-w-choose__info-single">
                                        <div className="ed-w-choose__info-head">

                                            <h5>5G NR architecture</h5>
                                        </div>
                                        <div className="ed-w-choose__info-bottom">
                                            <p>
                                                RAN split, QoS, scheduling, massive MIMO
                                            </p>
                                        </div>
                                    </div>
                                    {/* Single Info  */}
                                    <div className="ed-w-choose__info-single">
                                        <div className="ed-w-choose__info-head">

                                            <h5>5G Core</h5>
                                        </div>
                                        <div className="ed-w-choose__info-bottom">
                                            <p>
                                                AMF, SMF, UPF, slices, SA/NSA modes
                                            </p>
                                        </div>
                                    </div>
                                    {/* Single Info  */}
                                    <div className="ed-w-choose__info-single">
                                        <div className="ed-w-choose__info-head">

                                            <h5>MEC & Edge</h5>
                                        </div>
                                        <div className="ed-w-choose__info-bottom">
                                            <p>
                                                compute gating, real-time workloads
                                            </p>
                                        </div>
                                    </div>
                                    {/* Single Info  */}
                                    <div className="ed-w-choose__info-single">
                                        <div className="ed-w-choose__info-head">

                                            <h5>Private 5G</h5>
                                        </div>
                                        <div className="ed-w-choose__info-bottom">
                                            <p>
                                                enterprise network hardening & multi-slice ops

                                            </p>
                                        </div>
                                    </div>
                                    {/* Single Info  */}
                                    <div className="ed-w-choose__info-single">
                                        <div className="ed-w-choose__info-head">

                                            <h5>Ops & telemetry</h5>
                                        </div>
                                        <div className="ed-w-choose__info-bottom">
                                            <p>
                                                jitter, outage triage, QoS enforcement

                                            </p>
                                        </div>
                                    </div>
                                    <p>Teams graduate not with certificates, but deployment fluency.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="ed-w-choose__images ed-w-choose__images--style3 position-relative">
                                {/* Why Choose Image  */}
                                <div className="ed-w-choose__main-img--style2 position-relative">
                                    <img
                                        className="why-choose-img-1"
                                        src="assets/images/why-choose/why-choose-3/img-1.png"
                                        alt="why-choose-img-1"
                                    />
                                    <img
                                        className="why-choose-img-2"
                                        src="assets/images/why-choose/why-choose-3/img-2.png"
                                        alt="why-choose-img-2"
                                    />
                                </div>
                                {/* Counter Card */}
                                <div className="counter-card updown-ani">
                                    <div className="counter-card__icon">
                                        <i className="fi fi-rr-graduation-cap" />
                                    </div>
                                    <div className="counter-card__info">
                                        <h4>
                                            <span className="counter">9394</span>+
                                        </h4>
                                        <p>Enrolled Learners</p>
                                    </div>
                                </div>
                                {/* Shapes Elements */}
                                <div className="ed-w-choose__shapes">
                                    <img
                                        className="ed-w-choose__shape-1 rotate-ani"
                                        src="assets/images/why-choose/why-choose-3/shape-1.svg"
                                        alt="shape-1"
                                    />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="ed-about ed-about__page section-gap position-relative">
                <div className="container ed-container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-12">
                            {/* About Images  */}
                            <div className="ed-about__images">
                                <div className="ed-about__main-img">
                                    <img
                                        src="assets/images/about/about-1/about-img.png"
                                        alt="about-img"
                                    />
                                </div>
                                <div className="counter-card updown-ani">
                                    <div className="counter-card__icon">
                                        <i className="fi fi-rr-graduation-cap" />
                                    </div>
                                    <div className="counter-card__info">
                                        <h4>
                                            <span className="counter">9394</span>+
                                        </h4>
                                        <p>Enrolled Learners</p>
                                    </div>
                                </div>
                                <div className="ed-about__shapes">
                                    <img
                                        className="ed-about__shape-1"
                                        src="assets/images/about/about-1/shape-1.svg"
                                        alt="shape-1"
                                    />
                                    <img
                                        className="ed-about__shape-2"
                                        src="assets/images/about/about-1/shape-2.svg"
                                        alt="shape-2"
                                    />
                                    <img
                                        className="ed-about__shape-3 rotate-ani"
                                        src="assets/images/about/about-1/shape-3.svg"
                                        alt="shape-3"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            {/* About Content  */}
                            <div className="ed-about__content">
                                <div className="ed-section-head">

                                    <h3 className="ed-section-head__title ed-split-text right">
                                        5G Technical Scope & Stack Coverage
                                    </h3>
                                    <h6 className="ed-section-head__sm-title">
                                        Android Mobile App Development
                                    </h6>
                                </div>
                                <div className="ed-about__feature">
                                    <ul className="ed-about__features-list">
                                        <li>
                                            <img
                                                src="assets/images/icons/icon-check-blue.svg"
                                                alt="icon-check-blue"
                                            />
                                            5G NR (New Radio) Architecture
                                        </li>
                                        <li>
                                            <img
                                                src="assets/images/icons/icon-check-blue.svg"
                                                alt="icon-check-blue"
                                            />
                                            5G Network Planning & Optimization
                                        </li>
                                        <li>
                                            <img
                                                src="assets/images/icons/icon-check-blue.svg"
                                                alt="icon-check-blue"
                                            />
                                            5G RAN Engineering
                                        </li>
                                        <li>
                                            <img
                                                src="assets/images/icons/icon-check-blue.svg"
                                                alt="icon-check-blue"
                                            />
                                            Telco-grade RF Optimization & Interference Management
                                        </li>
                                    </ul>
                                </div>
                                <br />
                                <br />
                                <div className="ed-section-head">
                                    <h6 className="ed-section-head__sm-title">
                                        Domain:
                                    </h6>
                                </div>
                                <div className="ed-about__feature">
                                    <ul className="ed-about__features-list">
                                        <li>
                                            <img
                                                src="assets/images/icons/icon-check-blue.svg"
                                                alt="icon-check-blue"
                                            />
                                            RAN optimization, RF propagation, MIMO, beamforming

                                        </li>
                                        <li>
                                            <img
                                                src="assets/images/icons/icon-check-blue.svg"
                                                alt="icon-check-blue"
                                            />
                                            Core slicing, QoS tiers, traffic segmentation
                                        </li>
                                        <li>
                                            <img
                                                src="assets/images/icons/icon-check-blue.svg"
                                                alt="icon-check-blue"
                                            />
                                            MEC workload orchestration & edge compute
                                        </li>
                                        <li>
                                            <img
                                                src="assets/images/icons/icon-check-blue.svg"
                                                alt="icon-check-blue"
                                            />
                                            SA/NSA deployment models
                                        </li>
                                        <li>
                                            <img
                                                src="assets/images/icons/icon-check-blue.svg"
                                                alt="icon-check-blue"
                                            />
                                            Latency engineering for automation & robotics
                                        </li>
                                        <li>
                                            <img
                                                src="assets/images/icons/icon-check-blue.svg"
                                                alt="icon-check-blue"
                                            />
                                            Interference & spectrum governance
                                        </li>
                                        <li>
                                            <img
                                                src="assets/images/icons/icon-check-blue.svg"
                                                alt="icon-check-blue"
                                            />
                                            Load calculations for 10k–1M device densities
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img
                    className="ed-about__shape-4"
                    src="assets/images/abstracts/abstract-element-regular.svg"
                    alt="shape-4"
                />
            </section>


            <section className="ed-about ed-about__page section-gap position-relative">
                <div className="container ed-container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-12">
                            {/* About Images  */}
                            <div className="ed-about__images">
                                <div className="ed-about__main-img">
                                    <img
                                        src="assets/images/about/about-1/about-img.png"
                                        alt="about-img"
                                    />
                                </div>
                                <div className="counter-card updown-ani">
                                    <div className="counter-card__icon">
                                        <i className="fi fi-rr-graduation-cap" />
                                    </div>
                                    <div className="counter-card__info">
                                        <h4>
                                            <span className="counter">9394</span>+
                                        </h4>
                                        <p>Enrolled Learners</p>
                                    </div>
                                </div>
                                <div className="ed-about__shapes">
                                    <img
                                        className="ed-about__shape-1"
                                        src="assets/images/about/about-1/shape-1.svg"
                                        alt="shape-1"
                                    />
                                    <img
                                        className="ed-about__shape-2"
                                        src="assets/images/about/about-1/shape-2.svg"
                                        alt="shape-2"
                                    />
                                    <img
                                        className="ed-about__shape-3 rotate-ani"
                                        src="assets/images/about/about-1/shape-3.svg"
                                        alt="shape-3"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            {/* About Content  */}
                            <div className="ed-about__content">
                                <div className="ed-section-head">
                                    <h3 className="ed-section-head__title ed-split-text right">
                                        5G Competencies:
                                    </h3>
                                    <h6 className="ed-section-head__sm-title">
                                        You will build:
                                    </h6>
                                </div>
                                <div className="ed-about__feature">
                                    <ul className="ed-about__features-list">
                                        <li>
                                            <img
                                                src="assets/images/icons/icon-check-blue.svg"
                                                alt="icon-check-blue"
                                            />
                                            network slicing design & enforcement
                                        </li>
                                        <li>
                                            <img
                                                src="assets/images/icons/icon-check-blue.svg"
                                                alt="icon-check-blue"
                                            />
                                            deterministic latency & jitter shaping
                                        </li>
                                        <li>
                                            <img
                                                src="assets/images/icons/icon-check-blue.svg"
                                                alt="icon-check-blue"
                                            />
                                            private 5G fleet deployment frameworks
                                        </li>
                                        <li>
                                            <img
                                                src="assets/images/icons/icon-check-blue.svg"
                                                alt="icon-check-blue"
                                            />
                                            RF interference modeling & optimization
                                        </li>
                                        <li>
                                            <img
                                                src="assets/images/icons/icon-check-blue.svg"
                                                alt="icon-check-blue"
                                            />
                                            telemetry & outage triage standards
                                        </li>
                                        <li>
                                            <img
                                                src="assets/images/icons/icon-check-blue.svg"
                                                alt="icon-check-blue"
                                            />
                                            secure industrial IoT 5G backbone
                                        </li>
                                        <li>
                                            <img
                                                src="assets/images/icons/icon-check-blue.svg"
                                                alt="icon-check-blue"
                                            />
                                            enterprise 5G release governance
                                        </li>
                                    </ul>
                                </div>
                                <div className="ed-section-head">

                                    <h6 className="ed-section-head__sm-title">
                                        This is network systems engineering, not radio overview.
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img
                    className="ed-about__shape-4"
                    src="assets/images/abstracts/abstract-element-regular.svg"
                    alt="shape-4"
                />
            </section>


            <section className="ed-about ed-about__page section-gap position-relative">
                <div className="container ed-container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-12">
                            {/* About Images  */}
                            <div className="ed-about__images">
                                <div className="ed-about__main-img">
                                    <img
                                        src="assets/images/about/about-1/about-img.png"
                                        alt="about-img"
                                    />
                                </div>
                                <div className="counter-card updown-ani">
                                    <div className="counter-card__icon">
                                        <i className="fi fi-rr-graduation-cap" />
                                    </div>
                                    <div className="counter-card__info">
                                        <h4>
                                            <span className="counter">9394</span>+
                                        </h4>
                                        <p>Enrolled Learners</p>
                                    </div>
                                </div>
                                <div className="ed-about__shapes">
                                    <img
                                        className="ed-about__shape-1"
                                        src="assets/images/about/about-1/shape-1.svg"
                                        alt="shape-1"
                                    />
                                    <img
                                        className="ed-about__shape-2"
                                        src="assets/images/about/about-1/shape-2.svg"
                                        alt="shape-2"
                                    />
                                    <img
                                        className="ed-about__shape-3 rotate-ani"
                                        src="assets/images/about/about-1/shape-3.svg"
                                        alt="shape-3"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            {/* About Content  */}
                            <div className="ed-about__content">
                                <div className="ed-section-head">
                                    <h3 className="ed-section-head__title ed-split-text right">
                                        Tools & Engineering Environment for 5G
                                    </h3>

                                </div>
                                <div className="ed-about__feature">
                                    <ul className="ed-about__features-list">
                                        <li>
                                            <img
                                                src="assets/images/icons/icon-check-blue.svg"
                                                alt="icon-check-blue"
                                            />
                                            RF simulation suites
                                        </li>
                                        <li>
                                            <img
                                                src="assets/images/icons/icon-check-blue.svg"
                                                alt="icon-check-blue"
                                            />
                                            5G NR network planners
                                        </li>
                                        <li>
                                            <img
                                                src="assets/images/icons/icon-check-blue.svg"
                                                alt="icon-check-blue"
                                            />
                                            Core slice orchestration dashboards
                                        </li>
                                        <li>
                                            <img
                                                src="assets/images/icons/icon-check-blue.svg"
                                                alt="icon-check-blue"
                                            />
                                            Edge compute QoS profilers
                                        </li>
                                        <li>
                                            <img
                                                src="assets/images/icons/icon-check-blue.svg"
                                                alt="icon-check-blue"
                                            />
                                            MEC traffic shaping tools
                                        </li>
                                        <li>
                                            <img
                                                src="assets/images/icons/icon-check-blue.svg"
                                                alt="icon-check-blue"
                                            />
                                            Live telemetry triage environment
                                        </li>
                                        <li>
                                            <img
                                                src="assets/images/icons/icon-check-blue.svg"
                                                alt="icon-check-blue"
                                            />
                                            Private 5G sandbox (enterprise config)
                                        </li>
                                    </ul>
                                </div>
                                <div className="ed-section-head">

                                    <h6 className="ed-section-head__sm-title">
                                        Everything is deploy-analyze-correct, not watch-slide-repeat.
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img
                    className="ed-about__shape-4"
                    src="assets/images/abstracts/abstract-element-regular.svg"
                    alt="shape-4"
                />
            </section>


            <section
                className="ed-course ed-course--style2 section-gap position-relative background-image"
                style={{ backgroundImage: 'url("assets/images/section-bg-7.png")' }}
            >
                <div className="container ed-container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-8 col-12">
                            <div className="ed-section-head text-center">

                                <h3 className="ed-section-head__title">Funding Eligibility — HRDC Malaysia Only (Global Delivery Available)</h3>
                                <span className="ed-section-head__sm-title">HRDC claimable for Malaysia-based employers only. Global delivery remains available for Indonesia, Canada, and the United States</span>
                            </div>
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


            <section className="ed-call-action position-relative">
                <div className="container ed-container">
                    <div className="ed-call-action__inner position-relative">
                        <div className="ed-call-action__shapes">
                            <img
                                className="ed-call-action__shape-1 rotate-ani"
                                src="assets/images/call-action/call-action-1/shape-1.svg"
                                alt="shape-1"
                            />
                            <img
                                className="ed-call-action__shape-2"
                                src="assets/images/call-action/call-action-1/shape-2.svg"
                                alt="shape-2"
                            />
                            <img
                                className="ed-call-action__shape-3 updown-ani"
                                src="assets/images/call-action/call-action-1/shape-3.svg"
                                alt="shape-3"
                            />
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-12">
                                <div className="ed-call-action__img">
                                    <img
                                        src="assets/images/call-action/call-action-1/call-action-img.png"
                                        alt="call-action-img"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6 col-12 order-class">
                                <div className="ed-call-action__content">
                                    <div className="ed-section-head">

                                        <h3 className="ed-section-head__title">
                                            Build Real 5G Capability, Not 5G Terminology
                                        </h3>

                                    </div>
                                    <div className="ed-call-action__content-btn">
                                        <a href="course-1.html" className="ed-btn">
                                            {" "}
                                            Conatct

                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="ed-faq section-gap position-relative">
                <div className="container ed-container">
                    <div className="ed-section-head text-center">
                        <span className="ed-section-head__sm-title">
                            FREQUENTLY ASKED QUESTIONS
                        </span>
                        <h3 className="ed-section-head__title text-center">
                            Most Popular Questions About Our Online Courses
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
                                                    1. What is 5G beyond “faster 4G”?
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
                                                        5G is deterministic latency + slicing + density orchestration, not merely bandwidth.
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
                                                    2. Which industries benefit most from 5G?
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
                                                        Manufacturing, robotics, fintech, transport, medtech, and high-density IoT environments.

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
                                                    3. Is 5G critical even if networks already run well?
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
                                                        Yes. For next-gen automation, RF predictability, secure private lines, and MEC workloads.
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
                                                    4. What makes 5G engineering different from RF planning?
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
                                                        It merges RF + compute + core + ops, not just propagation math.
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
                                                    5. Do teams learn network slicing hands-on in this training?
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
                                                        Yes, slicing, QoS design, enforcement & telemetry are core to capability uplift., QoS design, enforcement & telemetry are core to capability uplift.

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
                                                    6. Is HRDC funding available globally?
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
                                                        No. HRDC is Malaysia-only. Global delivery runs standard billing.
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
                                                    7. What stack & layers are covered?
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
                                                        RAN, Core, MEC, private 5G, latency shaping, QoS, RF optimization, high-density load.

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
                                                    8. Does Timmins operate like a certification center?
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
                                                        No. Timmins is a practitioner-led capability partner, not a generic exam provider.
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
                                                    9. Will training include real telco deployment cases?
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
                                                        Yes,  telco, enterprise private 5G, and IoT fleet-scale cases.
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
                                                    10. Why Timmins for 5G training?
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
                                                        Because Timmins teaches deployment fluency, not theory. Real slices, real latency, real networks.
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

            <Footer />

















        </>

    )
}

export default page
