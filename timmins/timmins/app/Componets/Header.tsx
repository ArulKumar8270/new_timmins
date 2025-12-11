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
                                    <li className="offcanvas__menu_li">
                                        <a className="offcanvas__menu_item active" href="index.html">
                                            Home
                                        </a>
                                        <ul className="offcanvas__sub_menu">
                                            <li className="offcanvas__sub_menu_li">
                                                <a href="index.html" className="offcanvas__sub_menu_item">
                                                    Home One
                                                </a>
                                            </li>
                                            <li className="offcanvas__sub_menu_li">
                                                <a
                                                    href="index-2.html"
                                                    className="offcanvas__sub_menu_item active"
                                                >
                                                    Home Two
                                                </a>
                                            </li>
                                            <li className="offcanvas__sub_menu_li">
                                                <a href="index-3.html" className="offcanvas__sub_menu_item">
                                                    Home Three
                                                </a>
                                            </li>
                                            <li className="offcanvas__sub_menu_li">
                                                <a href="index-4.html" className="offcanvas__sub_menu_item">
                                                    Home Four
                                                </a>
                                            </li>
                                            <li className="offcanvas__sub_menu_li">
                                                <a href="index-5.html" className="offcanvas__sub_menu_item">
                                                    Home Five
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="offcanvas__menu_li">
                                        <a className="offcanvas__menu_item" href="course-1.html">
                                            Courses
                                        </a>
                                        <ul className="offcanvas__sub_menu">
                                            <li className="offcanvas__sub_menu_li">
                                                <a
                                                    href="course-1.html"
                                                    className="offcanvas__sub_menu_item"
                                                >
                                                    Course One
                                                </a>
                                            </li>
                                            <li className="offcanvas__sub_menu_li">
                                                <a
                                                    href="course-2.html"
                                                    className="offcanvas__sub_menu_item"
                                                >
                                                    Course Two
                                                </a>
                                            </li>
                                            <li className="offcanvas__sub_menu_li">
                                                <a
                                                    href="course-3.html"
                                                    className="offcanvas__sub_menu_item"
                                                >
                                                    Course Three
                                                </a>
                                            </li>
                                            <li className="offcanvas__sub_menu_li">
                                                <a
                                                    href="course-details.html"
                                                    className="offcanvas__sub_menu_item"
                                                >
                                                    Course Details
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="offcanvas__menu_li">
                                        <a className="offcanvas__menu_item" href="javascript:void(0)">
                                            Pages
                                        </a>
                                        <ul className="offcanvas__sub_menu">
                                            <li className="offcanvas__sub_menu_li">
                                                <a href="product.html" className="offcanvas__sub_menu_item">
                                                    Products
                                                </a>
                                                <ul className="offcanvas__sub_menu">
                                                    <li className="offcanvas__sub_menu_li">
                                                        <a
                                                            className="offcanvas__sub_menu_item"
                                                            href="product.html"
                                                        >
                                                            Product
                                                        </a>
                                                    </li>
                                                    <li className="offcanvas__sub_menu_li">
                                                        <a
                                                            className="offcanvas__sub_menu_item"
                                                            href="product-details.html"
                                                        >
                                                            Product Details
                                                        </a>
                                                    </li>
                                                    <li className="offcanvas__sub_menu_li">
                                                        <a
                                                            className="offcanvas__sub_menu_item"
                                                            href="cart.html"
                                                        >
                                                            Product Cart
                                                        </a>
                                                    </li>
                                                    <li className="offcanvas__sub_menu_li">
                                                        <a
                                                            className="offcanvas__sub_menu_item"
                                                            href="checkout.html"
                                                        >
                                                            Product Checkout
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="offcanvas__sub_menu_li">
                                                <a href="teacher.html" className="offcanvas__sub_menu_item">
                                                    Teacher{" "}
                                                </a>
                                                <ul className="offcanvas__sub_menu">
                                                    <li className="offcanvas__sub_menu_li">
                                                        <a
                                                            className="offcanvas__sub_menu_item"
                                                            href="teacher.html"
                                                        >
                                                            Teacher
                                                        </a>
                                                    </li>
                                                    <li className="offcanvas__sub_menu_li">
                                                        <a
                                                            className="offcanvas__sub_menu_item"
                                                            href="teacher-details.html"
                                                        >
                                                            Teacher Details
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="offcanvas__sub_menu_li">
                                                <a href="faq.html" className="offcanvas__sub_menu_item">
                                                    Faq
                                                </a>
                                            </li>
                                            <li className="offcanvas__sub_menu_li">
                                                <a href="404.html" className="offcanvas__sub_menu_item">
                                                    404 Error
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="offcanvas__menu_li">
                                        <a className="offcanvas__menu_item" href="blog.html">
                                            News
                                        </a>
                                        <ul className="offcanvas__sub_menu">
                                            <li className="offcanvas__sub_menu_li">
                                                <a href="blog.html" className="offcanvas__sub_menu_item">
                                                    Blog
                                                </a>
                                            </li>
                                            <li className="offcanvas__sub_menu_li">
                                                <a
                                                    href="blog-details.html"
                                                    className="offcanvas__sub_menu_item"
                                                >
                                                    Blog Details
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="offcanvas__menu_li">
                                        <a className="offcanvas__menu_item" href="about-1.html">
                                            About
                                        </a>
                                        <ul className="offcanvas__sub_menu">
                                            <li className="offcanvas__sub_menu_li">
                                                <a href="about-1.html" className="offcanvas__sub_menu_item">
                                                    About One
                                                </a>
                                            </li>
                                            <li className="offcanvas__sub_menu_li">
                                                <a href="about-2.html" className="offcanvas__sub_menu_item">
                                                    About Two
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
                <div className="container ed-container-expand">
                    <div className="ed-header__inner">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-6">
                                <div className="ed-header__left--style2">
                                    <div className="ed-header__left-widget--style2">
                                        {/* Logo  */}
                                        <div className="ed-topbar__logo">
                                            <a href="index.html">
                                                <img src="/assets/images/logo.svg" alt="logo" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-6">
                                {/* Header Right */}
                                <div className="ed-header__right">

                                    {/* Navigation Menu */}
                                    <nav className="ed-header__navigation">
                                        <ul className="ed-header__menu">
                                            <li className="active">
                                                <a href="javascript:void(0)">
                                                    Home
                                                    <i className="fi fi-ss-angle-small-down" />
                                                </a>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <a href="index.html">Home One</a>
                                                    </li>
                                                    <li className="active">
                                                        <a href="index-2.html">Home Two</a>
                                                    </li>
                                                    <li>
                                                        <a href="index-3.html">Home Three</a>
                                                    </li>
                                                    <li>
                                                        <a href="index-4.html">Home Four</a>
                                                    </li>
                                                    <li>
                                                        <a href="index-5.html">Home Five</a>
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
                                                        <a href="course-1.html">Course One</a>
                                                    </li>
                                                    <li>
                                                        <a href="course-2.html">Course Two</a>
                                                    </li>
                                                    <li>
                                                        <a href="course-3.html">Course Three</a>
                                                    </li>
                                                    <li>
                                                        <a href="course-details.html">Course Details</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)">
                                                    Pages
                                                    <i className="fi fi-ss-angle-small-down" />
                                                </a>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <a href="javascript:void(0)">
                                                            Products
                                                            <i className="fi fi-ss-angle-small-right" />
                                                        </a>
                                                        <ul className="sub-menu third-menu">
                                                            <li>
                                                                <a href="product.html">Product</a>
                                                            </li>
                                                            <li>
                                                                <a href="product-details.html">Product Details</a>
                                                            </li>
                                                            <li>
                                                                <a href="cart.html">Product Cart</a>
                                                            </li>
                                                            <li>
                                                                <a href="checkout.html">Product Checkout</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0)">
                                                            Teacher <i className="fi fi-ss-angle-small-right" />
                                                        </a>
                                                        <ul className="sub-menu third-menu">
                                                            <li>
                                                                <a href="teacher.html">Teacher</a>
                                                            </li>
                                                            <li>
                                                                <a href="teacher-details.html">Teacher Details</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a href="faq.html">Faq</a>
                                                    </li>
                                                    <li>
                                                        <a href="404.html">404 Error</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)">
                                                    News
                                                    <i className="fi fi-ss-angle-small-down" />
                                                </a>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <a href="blog.html">Blog </a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-details.html">Blog Details</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)">
                                                    About
                                                    <i className="fi fi-ss-angle-small-down" />
                                                </a>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <a href="about-1.html">About One </a>
                                                    </li>
                                                    <li>
                                                        <a href="about-2.html">About Two</a>
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