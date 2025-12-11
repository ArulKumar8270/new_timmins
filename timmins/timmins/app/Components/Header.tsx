"use client";

import React, { useEffect, useState } from 'react'

const Header = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scroll = window.scrollY || document.documentElement.scrollTop;
            if (scroll < 100) {
                setIsSticky(false);
            } else {
                setIsSticky(true);
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);
        
        // Check initial scroll position
        handleScroll();

        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {/* <div id="preloader">
                <div id="ed-preloader" className="ed-preloader">
                    <div className="animation-preloader">
                        <div className="spinner" />
                    </div>
                </div>
            </div> */}
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
                                <a href="#">
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
                                        <a className="offcanvas__menu_item" href="#">
                                            Home
                                        </a>
                                    </li>
                                    <li className="offcanvas__menu_li">
                                        <a className="offcanvas__menu_item" href="#">
                                            About
                                        </a>
                                        <ul className="offcanvas__sub_menu">
                                            <li className="offcanvas__sub_menu_li">
                                                <a
                                                    href="#"
                                                    className="offcanvas__sub_menu_item"
                                                >
                                                    Who We Are
                                                </a>
                                            </li>
                                            <li className="offcanvas__sub_menu_li">
                                                <a
                                                    href="#"
                                                    className="offcanvas__sub_menu_item"
                                                >
                                                    Our Approach
                                                </a>
                                            </li>
                                            <li className="offcanvas__sub_menu_li">
                                                <a
                                                    href="#"
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
                                                <a href="#" className="offcanvas__sub_menu_item">
                                                    Overview
                                                </a>
                                            </li>
                                            <li className="offcanvas__sub_menu_li">
                                                <a
                                                    className="offcanvas__sub_menu_item"
                                                    href="#"
                                                >
                                                    Fresh Graduate Onboarding
                                                </a>
                                            </li>
                                            <li className="offcanvas__sub_menu_li">
                                                <a
                                                    className="offcanvas__sub_menu_item"
                                                    href="#"
                                                >
                                                    Training Needs Assessment
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="offcanvas__menu_li">
                                        <a className="offcanvas__menu_item" href="#">
                                            Courses
                                        </a>
                                        <ul className="offcanvas__sub_menu">
                                            <li className="offcanvas__sub_menu_li">
                                                <a href="#" className="offcanvas__sub_menu_item">
                                                    Overview
                                                </a>
                                            </li>
                                            <li className="offcanvas__sub_menu_li">
                                                <a
                                                    href="#"
                                                    className="offcanvas__sub_menu_item"
                                                >
                                                    SFAe Certification
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="offcanvas__menu_li">
                                        <a className="offcanvas__menu_item" href="#">
                                            Training Calendar
                                        </a>
                                    </li>
                                    <li className="offcanvas__menu_li">
                                        <a className="offcanvas__menu_item" href="#">
                                            Resources
                                            <i className="fi fi-ss-angle-small-down" />
                                        </a>
                                        <ul className="offcanvas__sub_menu">
                                            <li className="offcanvas__sub_menu_li">
                                                <a href="#" className="offcanvas__sub_menu_item">
                                                    Case Studies
                                                </a>
                                            </li>
                                            <li className="offcanvas__sub_menu_li">
                                                <a
                                                    href="#"
                                                    className="offcanvas__sub_menu_item"
                                                >
                                                    Blog
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="offcanvas__menu_li">
                                        <a className="offcanvas__menu_item" href="#">
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
            <header className={`ed-header ed-header--style2 ${isSticky ? 'sticky' : ''}`}>
                <div className="container">
                    <div className="ed-header__inner">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-3">
                                <div className="ed-header__left--style2">
                                    <div className="ed-header__left-widget--style2">
                                        {/* Logo  */}
                                        <div className="ed-topbar__logo">
                                            <a href="#">
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
                                                        <a href="#">Who We Are</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Our Approach</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Our 10 Year Journey</a>
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
                                                        <a href="#">Overview</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Fresh Graduate Onboarding</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Training Needs Assessment</a>
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
                                                        <a href="#">Overview </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">SFAe Certification</a>
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
                                                        <a href="#">Overview </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">SFAe Certification</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">Resources
                                                    <i className="fi fi-ss-angle-small-down" />
                                                </a>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <a href="#">Case Studies</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Blog</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">Contact</a>
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