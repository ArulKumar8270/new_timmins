'use client'

import React, { useState } from 'react'
import Script from 'next/script'
import Link from 'next/link'

const Footer = () => {
    const [openAccordion, setOpenAccordion] = useState<string | null>(null)

    const toggleAccordion = (section: string) => {
        setOpenAccordion(openAccordion === section ? null : section)
    }

    const footerSchema = {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "name": "Timmins Training Consulting Sdn. Bhd.",
        "url": "https://consult-timmins.com",
        "logo": "https://consult-timmins.com/assets/logo.png",
        "areaServed": ["MY", "ID", "CA"],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+60327850737",
            "email": "info@consult-timmins.com",
            "contactType": "customer service"
        },
        "sameAs": [
            "https://www.linkedin.com/company/timmins-training-consulting",
            "https://www.facebook.com/consulttimmins",
            "https://www.instagram.com/consulttimmins",
            "https://www.youtube.com/@consulttimmins"
        ]
    }

    return (
        <>
            <footer className="timmins-footer">
                {/* Top Bar - HRDC Trust Strip */}
                <div className="footer-trust-bar">
                    <div className="container ed-container">
                        <div className="trust-bar-content">
                            <div className="trust-badges">
                                <span className="trust-badge">HRDC Registered</span>
                                <span className="trust-separator">•</span>
                                <span className="trust-badge">Trusted</span>
                                <span className="trust-separator">•</span>
                                <span className="trust-badge">Global</span>
                            </div>
                            <div className="trust-message">
                                <p>
                                    Every Timmins course is HRDC-claimable — with complete documentation and claim support.
                                </p>
                            </div>
                            <div className="trust-features">
                                <span className="trust-feature">
                                    <span className="trust-icon">📄</span> Documentation
                                </span>
                                <span className="trust-feature">
                                    <span className="trust-icon">🧾</span> Claim Support
                                </span>
                                <span className="trust-feature">
                                    <span className="trust-icon">📊</span> Training Reports
                                </span>
                            </div>
                            <div className="trust-ctas">
                                <Link href="/Contact-us" className="cta-button primary">
                                    📘 View Course Calendar
                                </Link>
                                <Link href="/Contact-us" className="cta-button secondary">
                                    💬 Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Footer - 4 Columns */}
                <div className="footer-main">
                    <div className="container ed-container">
                        <div className="footer-grid">
                            {/* Company Column */}
                            <div className="footer-column">
                                <button 
                                    className="footer-column-title mobile-only"
                                    onClick={() => toggleAccordion('company')}
                                    aria-expanded={openAccordion === 'company'}
                                >
                                    Company
                                    <span className="accordion-icon">{openAccordion === 'company' ? '−' : '+'}</span>
                                </button>
                                <h4 className="footer-column-title desktop-only">Company</h4>
                                <div className={`footer-column-content ${openAccordion === 'company' ? 'open' : ''}`}>
                                    <ul className="footer-links">
                                        <li><Link href="/About-us">About Us</Link></li>
                                        <li><Link href="/10-Years">Our Journey (10 Years)</Link></li>
                                        <li><Link href="/Contact-us">Contact Us</Link></li>
                                    </ul>
                                </div>
                            </div>

                            {/* Solutions Column */}
                            <div className="footer-column">
                                <button 
                                    className="footer-column-title mobile-only"
                                    onClick={() => toggleAccordion('solutions')}
                                    aria-expanded={openAccordion === 'solutions'}
                                >
                                    Solutions
                                    <span className="accordion-icon">{openAccordion === 'solutions' ? '−' : '+'}</span>
                                </button>
                                <h4 className="footer-column-title desktop-only">Solutions</h4>
                                <div className={`footer-column-content ${openAccordion === 'solutions' ? 'open' : ''}`}>
                                    <ul className="footer-links">
                                        <li><Link href="/Our-Solution">Fresh Graduate Onboarding</Link></li>
                                        <li><Link href="/Our-Solution">Technology Stack Programs</Link></li>
                                        <li><Link href="/Our-Solution">AI Consulting</Link></li>
                                        <li><Link href="/Scaled-Agile">SAFe® Certification</Link></li>
                                    </ul>
                                </div>
                            </div>

                            {/* Resources Column */}
                            <div className="footer-column">
                                <button 
                                    className="footer-column-title mobile-only"
                                    onClick={() => toggleAccordion('resources')}
                                    aria-expanded={openAccordion === 'resources'}
                                >
                                    Resources
                                    <span className="accordion-icon">{openAccordion === 'resources' ? '−' : '+'}</span>
                                </button>
                                <h4 className="footer-column-title desktop-only">Resources</h4>
                                <div className={`footer-column-content ${openAccordion === 'resources' ? 'open' : ''}`}>
                                    <ul className="footer-links">
                                        <li><Link href="/">Courses</Link></li>
                                        <li><Link href="/Contact-us">Training Calendar</Link></li>
                                        <li><Link href="/Case-study">Insights & Case Studies</Link></li>
                                    </ul>
                                </div>
                            </div>

                            {/* Offices Column */}
                            <div className="footer-column">
                                <button 
                                    className="footer-column-title mobile-only"
                                    onClick={() => toggleAccordion('offices')}
                                    aria-expanded={openAccordion === 'offices'}
                                >
                                    Offices
                                    <span className="accordion-icon">{openAccordion === 'offices' ? '−' : '+'}</span>
                                </button>
                                <h4 className="footer-column-title desktop-only">Offices</h4>
                                <div className={`footer-column-content ${openAccordion === 'offices' ? 'open' : ''}`}>
                                    <div className="footer-offices">
                                        <div className="office-item">
                                            <span className="office-flag">🇲🇾</span>
                                            <div className="office-details">
                                                <strong>Malaysia</strong>
                                                <p>Kuala Lumpur & Penang</p>
                                            </div>
                                        </div>
                                        <div className="office-item">
                                            <span className="office-flag">🇮🇩</span>
                                            <div className="office-details">
                                                <strong>Indonesia</strong>
                                                <p>Jakarta Selatan</p>
                                            </div>
                                        </div>
                                        <div className="office-item">
                                            <span className="office-flag">🇨🇦</span>
                                            <div className="office-details">
                                                <strong>Canada</strong>
                                                <p>Toronto, Ontario</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="footer-contact-info">
                                        <a href="mailto:info@consult-timmins.com" className="contact-link">
                                            ✉️ info@consult-timmins.com
                                        </a>
                                        <a href="tel:+60327850737" className="contact-link">
                                            📞 +60 3 2785 0737
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar - Social & Legal */}
                <div className="footer-bottom">
                    <div className="container ed-container">
                        <div className="footer-bottom-content">
                            <div className="footer-social">
                                <a 
                                    href="https://www.linkedin.com/company/timmins-training-consulting" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn Page"
                                    className="social-link"
                                >
                                    🔗 LinkedIn
                                </a>
                                <a 
                                    href="https://www.instagram.com/consulttimmins" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    aria-label="Instagram Page"
                                    className="social-link"
                                >
                                    🔗 Instagram
                                </a>
                                <a 
                                    href="https://www.facebook.com/consulttimmins" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    aria-label="Facebook Page"
                                    className="social-link"
                                >
                                    🔗 Facebook
                                </a>
                                <a 
                                    href="https://www.youtube.com/@consulttimmins" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    aria-label="YouTube Channel"
                                    className="social-link"
                                >
                                    🔗 YouTube
                                </a>
                            </div>
                            <div className="footer-certifications">
                                <span className="cert-badge">
                                    🏅 Bronze Partner – Scaled Agile Inc.
                                </span>
                                <span className="cert-separator">|</span>
                                <span className="cert-badge">
                                    🏛️ HRDC Registered
                                </span>
                                <span className="cert-separator">|</span>
                                <span className="cert-badge">
                                    🌍 Global Capability Partner
                                </span>
                            </div>
                            <p className="footer-copyright">
                                © 2015–2025 Timmins Training Consulting Sdn. Bhd. | All Rights Reserved
                            </p>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Schema Markup */}
            <Script
                id="footer-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(footerSchema)
                }}
            />
        </>
    )
}

export default Footer
