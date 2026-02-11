"use client";
import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function EmbeddedLinuxDomain() {
    return (
        <>
            <Header />

            {/* ================= HERO ================= */}
            <section className="domain-hero">
                <div className="container hero-wrapper">
                    <div className="hero-content">
                        <p className="domain-label">ENGINEERING CAPABILITY DOMAIN</p>
                        <h1>
                            Embedded Linux <br />
                            Engineering Capability
                        </h1>
                        <p className="hero-desc">
                            Practitioner-led capability development across kernel engineering,
                            BSP bring-up, driver development, system integration, and
                            production deployment.
                        </p>
                    </div>

                    <div className="hero-image">
                        <img
                            src="/assets/New_images/linux.jpg"
                            alt="Embedded Linux"
                        />
                    </div>
                </div>
            </section>

            {/* ================= MAIN LAYOUT ================= */}
            <section className="domain-main">
                <div className="container domain-layout">

                    {/* SIDEBAR */}
                    <aside className="domain-sidebar">
                        <div className="sidebar-card">
                            <ul className="sidebar-menu">
                                <li><a href="#overview">Overview</a></li>
                                <li><a href="#approach">Timmins Approach</a></li>
                            </ul>
                        </div>
                    </aside>

                    {/* CONTENT */}
                    <div className="domain-content">

                        {/* OVERVIEW */}
                        <section id="overview" className="domain-section">
                            <h2>Overview</h2>
                            <p>
                                Embedded Linux Engineering is at the core of modern device
                                development. From automotive control systems to IoT gateways
                                and telecom infrastructure, Linux powers mission-critical
                                embedded systems worldwide.
                            </p>

                            <div className="capability-grid">
                                <div className="capability-card">
                                    <h4>Kernel Engineering</h4>
                                    <p>Linux kernel customization & optimization.</p>
                                </div>

                                <div className="capability-card">
                                    <h4>BSP & Bring-Up</h4>
                                    <p>Hardware enablement & board support packages.</p>
                                </div>

                                <div className="capability-card">
                                    <h4>Driver Development</h4>
                                    <p>Custom peripheral & SoC driver development.</p>
                                </div>

                                <div className="capability-card">
                                    <h4>System Integration</h4>
                                    <p>Embedded Linux validation & deployment.</p>
                                </div>
                            </div>
                        </section>

                        {/* APPROACH */}
                        <section id="approach" className="domain-section approach-section">
                            <div className="approach-title">
                                <h2>How Timmins Approaches This Domain</h2>
                            </div>

                            <div className="approach-grid">
                                <div className="approach-card">
                                    <h4>Competency-Driven</h4>
                                    <p>Not just framework-driven</p>
                                </div>

                                <div className="approach-card">
                                    <h4>Role-Aligned</h4>
                                    <p>Aligned to real engineering roles</p>
                                </div>

                                <div className="approach-card">
                                    <h4>Production-Ready Skills</h4>
                                    <p>Hands-on, deployment-focused learning</p>
                                </div>

                                <div className="approach-card">
                                    <h4>All Seniority Levels</h4>
                                    <p>Fresh grads to senior engineers</p>
                                </div>

                                <div className="approach-card">
                                    <h4>Enterprise Customizable</h4>
                                    <p>Adaptable for product teams</p>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
