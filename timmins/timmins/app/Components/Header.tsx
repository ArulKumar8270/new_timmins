import React from 'react'

const Header = () => {
    return (
        <>
            <div id="preloader">
                <div id="ed-preloader" className="ed-preloader">
                    <div className="animation-preloader">
                        <div className="spinner" />
                    </div>
                </div>
            </div>
            {/* End Preloader */}
            {/* Custom Cursor Start */}
            <div id="ed-mouse">
                <div id="cursor-ball" />
            </div>
            {/* Custom Cursor End */}
            {/* Start Mobile Menu Offcanvas */}
            <div
                className="modal mobile-menu-modal offcanvas-modal fade"
                id="offcanvas-modal"
            >
                <div className="modal-dialog offcanvas-dialog">
                    <div className="modal-content">
                        <div className="modal-header offcanvas-header">
                            {/* Mobile Menu Logo */}
                            <div className="offcanvas-logo">
                                <a href="index.html">
                                    <img src="/assets/images/logo.svg" alt="#" />
                                </a>
                            </div>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                <i className="fi fi-ss-cross" />
                            </button>
                        </div>
                        <div className="mobile-menu-modal-main-body">
                            {/* Mobile Menu Navigation */}
                            <nav className="offcanvas__menu">
                                <ul className="offcanvas__menu_ul">
                                    <li>
                                        <a className="offcanvas__menu_item" href="index.html">
                                            Home
                                        </a>
                                    </li>
                                    <li className="offcanvas__menu_li">
                                        <a className="offcanvas__menu_item" href="course-1.html">
                                            About
                                        </a>
                                        <ul className="offcanvas__sub_menu">
                                            <li className="offcanvas__sub_menu_li">
                                                <a
                                                    href="course-1.html"
                                                    className="offcanvas__sub_menu_item"
                                                >
                                                    Who We Are
                                                </a>
                                            </li>
                                            <li className="offcanvas__sub_menu_li">
                                                <a
                                                    href="course-2.html"
                                                    className="offcanvas__sub_menu_item"
                                                >
                                                    Our Approach
                                                </a>
                                            </li>
                                            <li className="offcanvas__sub_menu_li">
                                                <a
                                                    href="course-3.html"
                                                    className="offcanvas__sub_menu_item"
                                                >
                                                    Our 10 Year Journey
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="offcanvas__menu_li">
                                        <a className="offcanvas__menu_item" href="javascript:void(0)">
                                            Solutions
                                        </a>
                                        <ul className="offcanvas__sub_menu">
                                            <li className="offcanvas__sub_menu_li">
                                                <a href="product.html" className="offcanvas__sub_menu_item">
                                                    Overview
                                                </a>
                                            </li>
                                            <li className="offcanvas__sub_menu_li">
                                                <a
                                                    className="offcanvas__sub_menu_item"
                                                    href="product.html"
                                                >
                                                    Fresh Graduate Onboarding
                                                </a>
                                            </li>
                                            <li className="offcanvas__sub_menu_li">
                                                <a
                                                    className="offcanvas__sub_menu_item"
                                                    href="product-details.html"
                                                >
                                                    Training Needs Assessment
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="offcanvas__menu_li">
                                        <a className="offcanvas__menu_item" href="blog.html">
                                            Courses
                                        </a>
                                        <ul className="offcanvas__sub_menu">
                                            <li className="offcanvas__sub_menu_li">
                                                <a href="blog.html" className="offcanvas__sub_menu_item">
                                                    Overview
                                                </a>
                                            </li>
                                            <li className="offcanvas__sub_menu_li">
                                                <a
                                                    href="blog-details.html"
                                                    className="offcanvas__sub_menu_item"
                                                >
                                                    SFAe Certification
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="offcanvas__menu_li">
                                        <a className="offcanvas__menu_item" href="about-1.html">
                                            Training Calendar
                                        </a>
                                    </li>
                                    <li className="offcanvas__menu_li">
                                        <a className="offcanvas__menu_item" href="contact.html">
                                            Resources
                                            <i className="fi fi-ss-angle-small-down" />
                                        </a>
                                        <ul className="offcanvas__sub_menu">
                                            <li className="offcanvas__sub_menu_li">
                                                <a href="blog.html" className="offcanvas__sub_menu_item">
                                                    Case Studies
                                                </a>
                                            </li>
                                            <li className="offcanvas__sub_menu_li">
                                                <a
                                                    href="blog-details.html"
                                                    className="offcanvas__sub_menu_item"
                                                >
                                                    Blog
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="offcanvas__menu_li">
                                        <a className="offcanvas__menu_item" href="contact.html">
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Mobile Menu Offcanvas */}
            {/* Start Header Area */}
            <header className="ed-header ed-header--style2">
                <div className="container">
                    <div className="ed-header__inner">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-3">
                                <div className="ed-header__left--style2">
                                    <div className="ed-header__left-widget--style2">
                                        {/* Logo  */}
                                        <div className="ed-topbar__logo">
                                            <a href="index.html">
                                                <img src="/assets/New_images/logo.png" alt="logo" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9 col-9">
                                {/* Header Right */}
                                <div className="ed-header__right">

                                    {/* Navigation Menu */}
                                    <nav className="ed-header__navigation">
                                        <ul className="ed-header__menu">
                                            <li className="active">
                                                <a href="javascript:void(0)">
                                                    Home
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)">
                                                    About
                                                    <i className="fi fi-ss-angle-small-down" />
                                                </a>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <a href="course-1.html">Who We Are</a>
                                                    </li>
                                                    <li>
                                                        <a href="course-2.html">Our Approach</a>
                                                    </li>
                                                    <li>
                                                        <a href="course-3.html">Our 10 Year Journey</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)">
                                                    Solutions
                                                    <i className="fi fi-ss-angle-small-down" />
                                                </a>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <a href="faq.html">Overview</a>
                                                    </li>
                                                    <li>
                                                        <a href="faq.html">Fresh Graduate Onboarding</a>
                                                    </li>
                                                    <li>
                                                        <a href="404.html">Training Needs Assessment</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)">
                                                    Courses
                                                    <i className="fi fi-ss-angle-small-down" />
                                                </a>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <a href="blog.html">Overview </a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-details.html">SFAe Certification</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)">
                                                    Training Calendar
                                                    <i className="fi fi-ss-angle-small-down" />
                                                </a>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <a href="about-1.html">Overview </a>
                                                    </li>
                                                    <li>
                                                        <a href="about-2.html">SFAe Certification</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="contact.html">Resources
                                                    <i className="fi fi-ss-angle-small-down" />
                                                </a>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <a href="blog.html">Case Studies</a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-details.html">Blog</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="contact.html">Contact</a>
                                            </li>
                                        </ul>
                                    </nav>
                                    {/* Mobile Menu Button */}
                                    <button
                                        type="button"
                                        className="mobile-menu-offcanvas-toggler"
                                        data-bs-toggle="modal"
                                        data-bs-target="#offcanvas-modal"
                                    >
                                        <span className="line" />
                                        <span className="line" />
                                        <span className="line" />
                                    </button>
                                    {/* End Mobile Menu Button */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header