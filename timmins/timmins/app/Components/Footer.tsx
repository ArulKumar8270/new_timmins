import React from 'react'

const Footer = () => {
    return (
        <div className="footer-bg position-relative">
            <section className="ed-call-action position-relative">
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
                                        src="/assets/images/call-action/call-action-1/call-action-img.png"
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
            <div className="footer-bg__img">
                <img
                    src="/assets/images/footer/footer-2/footer-bg.png"
                    alt="footer-bg-img"
                />
            </div>
            {/* Start Call Action Area */}

            {/* End Call Action Area */}
            <div className="footer-bg position-relative">
                <div className="footer-bg__img">
                    <img
                        src="/assets/New_images/footerbg.jpg"
                        alt="footer-bg-img"
                    />
                </div>

                {/* Footer Links Section */}
                <footer className="ed-footer position-relative">
                    <div className="position-relative">
                        <div className="container ed-container">
                            {/* Top Section - HRDC Badge */}
                            <div className="border-b">
                                <div className="container ed-container pb-4 pt-5">
                                    <div className="text-center max-w-4xl mx-auto">
                                        <h3 className="text-2xl sm:text-3xl font-bold mb-4 ">
                                            Registered. Reliable. Ready.
                                        </h3>
                                        <p className="text-base sm:text-lg /90 mb-6 flex items-center justify-center gap-2">
                                            Your Trusted HRD Corp Registered Training Provider
                                            <span className="inline-flex items-center justify-center w-6 h-6 bg-green-500 rounded  text-sm">
                                                ✓
                                            </span>
                                        </p>
                                        <p className="text-sm sm:text-base /70 mb-8 leading-relaxed">
                                            Every Timmins course is HRDC-claimable — Complete with documentation, Claim Support, and Attendance Reporting.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <hr className='my-0' />
                            <div className="row fotterbgstyle">
                                <div className="col-12 col-md-6">
                                    <div className="ed-footer__widget contact-widgetjustify-content-between">
                                        <div className="ed-footer__contact">
                                            <div className="ed-footer__contact-icon">
                                                <span className="text-xl">🇲🇾</span>
                                            </div>
                                            <div className="ed-footer__contact-info">
                                                <span>Malaysia</span>
                                                <a href="#">Kuala Lumpur & Penang</a>
                                            </div>
                                        </div>
                                        <div className="ed-footer__contact">
                                            <div className="ed-footer__contact-icon">
                                                <span className="text-xl">🇮🇩</span>
                                            </div>
                                            <div className="ed-footer__contact-info">
                                                <span>Indonesia</span>
                                                <a href="#">Jakarta Selatan</a>
                                            </div>
                                        </div>
                                        <div className="ed-footer__contact">
                                            <div className="ed-footer__contact-icon">
                                                <span className="text-xl">🇨🇦</span>
                                            </div>
                                            <div className="ed-footer__contact-info">
                                                <span>Canada</span>
                                                <a href="#">Toronto, Ontario</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="ed-footer__widget contact-widget justify-content-between">
                                        <div className="d-flex flex-column gap-2 mb-2">
                                            <label className="text-sm text-white/60">Email</label>
                                            <a href="mailto:nickname@gmail.com">nickname@gmail.com</a>
                                        </div>
                                        <div className="d-flex flex-column gap-2">
                                            <label className="text-sm text-white/60">Phone</label>
                                            <a href="tel:+60327850737">+60 3 2785 0737</a>
                                        </div>
                                        <div className="ed-auth__modal-third-party">
                                            <ul className="ed-auth__modal-third-party-list">
                                                <li>
                                                    <a className="google-login" href="https://www.google.com/"><img src="assets/images/icons/icon-color-google.svg" alt="icon-color-google" /></a>
                                                </li>

                                                <li>
                                                    <a className="facebook-login" href="https://facebook.com/"><img src="assets/images/icons/icon-color-facebook.svg" alt="icon-color-facebook" /></a>
                                                </li>
                                                <li>
                                                    <a className="linkedin-login" href="https://www.linkedin.com/"><img src="assets/images/icons/icon-color-linkedin.svg" alt="icon-color-linkedin" /></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer Bottom */}
                    <div className="ed-footer__bottom">
                        <div className="container ed-container">
                            <div className="row">
                                <div className="col-12">
                                    <p className="ed-footer__copyright-text">
                                        © 2015–2025 Timmins Training Consulting Sdn. Bhd. All Rights Reserved.
                                    </p>
                                    <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-white/60 mt-3">
                                        <span className="flex items-center gap-2">
                                            <i className="fas fa-award text-[#faaa2e] text-sm"></i>
                                            Bronze Partner – Scaled Agile Inc.
                                        </span>
                                        <span className="hidden sm:inline text-white/30">|</span>
                                        <span className="flex items-center gap-2">
                                            <i className="fas fa-building text-[#faaa2e] text-sm"></i>
                                            HRDC Registered
                                        </span>
                                        <span className="hidden sm:inline text-white/30">|</span>
                                        <span className="flex items-center gap-2">
                                            <i className="fas fa-globe text-[#faaa2e] text-sm"></i>
                                            Global Capability Partner
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}
export default Footer
