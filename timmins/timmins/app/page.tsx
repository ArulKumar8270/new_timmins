import Image from "next/image";

export default function Home() {
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
              <div className="col-lg-9 col-6">
                <div className="ed-header__left--style2">
                  <div className="ed-header__left-widget--style2">
                    {/* Logo  */}
                    <div className="ed-topbar__logo">
                      <a href="index.html">
                        <img src="/assets/images/logo.svg" alt="logo" />
                      </a>
                    </div>
                    {/* Category Dropdown */}
                    <div className="ed-topbar__search-widget">
                      <div className="ed-topbar__category">
                        <select>
                          <option data-display="All Categories">
                            All Categories
                          </option>
                          <option value={1}>Business</option>
                          <option value={2}>Marketing</option>
                          <option value={3}>Design</option>
                          <option value={4}>Finance</option>
                          <option value={5}>Lifestyle</option>
                          <option value={6}>Development</option>
                          <option value={7}>Photography</option>
                        </select>
                      </div>
                    </div>
                  </div>
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
                </div>
              </div>
              <div className="col-lg-3 col-6">
                {/* Header Right */}
                <div className="ed-header__right">
                  <div className="ed-header__action">
                    <div className="ed-header__cart">
                      <button
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#edSidebarCart"
                        aria-controls="offcanvasRight"
                        className="ed-topbar__action-icon"
                      >
                        <img
                          src="/assets/images/icons/icon-grey-bag.svg"
                          alt="icon-grey-bag"
                        />
                        <span>3</span>
                      </button>
                    </div>
                    <div className="ed-topbar__info-buttons">
                      <button
                        type="button"
                        className="register-btn"
                        data-bs-toggle="modal"
                        data-bs-target="#registerModal"
                      >
                        Register
                      </button>
                      <button
                        type="button"
                        className="login-btn"
                        data-bs-toggle="modal"
                        data-bs-target="#loginModal"
                      >
                        Log In
                      </button>
                    </div>
                  </div>
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
      {/* End Header Area */}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <div
              className="section-bg hero-bg-2 background-image"
              style={{ backgroundImage: 'url("/assets/images/section-bg-4.png")' }}
            >
              {/* Start Hero Area */}
              <section className="ed-hero ed-hero--style2">
                <div className="container ed-container-expand position-relative">
                  <div className="ed-hero__bg--style2">
                    <img
                      src="/assets/images/hero/home-2/hero-bg.jpg"
                      alt="hero-bg-img"
                    />
                  </div>
                  <div className="row">
                    <div className="col-lg-7 col-12">
                      {/* Hero Content */}
                      <div className="ed-hero__content">
                        <span className="ed-hero__content-sm-title">
                          WELCOME TO EDUNA
                        </span>
                        <h1 className="ed-hero__content-title text-white ed-split-text left">
                          Learn Everything <br />
                          What You Want with Eduna Courses
                        </h1>
                        <div className="ed-hero__search">
                          <form
                            action="#"
                            method="post"
                            className="ed-hero__search-form"
                          >
                            <input
                              type="search"
                              name="search"
                              placeholder="Search your courses"
                              required=""
                            />
                            <button type="submit">
                              Search
                              <i className="fi-rr-search" />
                            </button>
                          </form>
                          <ul className="ed-hero__tags">
                            <li>
                              <a href="course-1.html">Business</a>
                            </li>
                            <li>
                              <a href="course-1.html">Marketing</a>
                            </li>
                            <li>
                              <a href="course-1.html">Design</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5 col-12">
                      <div className="ed-hero__images--style2">
                        <div
                          className="ed-course__card wow fadeInUp"
                          data-wow-delay=".3s"
                          data-wow-duration="1s"
                        >
                          <a href="course-details.html" className="ed-course__img">
                            <img
                              src="/assets/images/course/course-1/1.png"
                              alt="course-img"
                            />
                          </a>
                          <a
                            href="course-1.html"
                            className="ed-course__tag bg-primary-color text-white"
                          >
                            Best Seller
                          </a>
                          <div className="ed-course__body">
                            <div className="ed-course__lesson">
                              <div className="ed-course__part">
                                <i className="fi-rr-book" />
                                <p>04 Lessons</p>
                              </div>
                              <div className="ed-course__teacher">
                                <i className="fi-rr-user" />
                                <p>John Smith</p>
                              </div>
                            </div>
                            <a
                              href="course-details.html"
                              className="ed-course__title"
                            >
                              <h5>
                                Data Competitive Strategy law and Organization
                                Course
                              </h5>
                            </a>
                            <div className="ed-course__rattings">
                              <ul>
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
                                <li>
                                  <span>(09 Reviews)</span>
                                </li>
                              </ul>
                            </div>
                            <div className="ed-course__bottom">
                              <span className="ed-course__price">$383.00</span>
                              <div className="ed-course__students">
                                <i className="fi fi-rr-graduation-cap" />
                                <p>553 Students</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* End Hero Area */}
            </div>
            {/* Start Partner Area */}
            <section className="ed-partner section-gap">
              <div className="container ed-container">
                <div className="row">
                  <div className="col-12">
                    <div className="ed-partner__section-head">
                      <h3 className="ed-partner__section-head-title">
                        Get in touch with the <span>250+</span> companies who
                        Collaboration us
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="owl-carousel ed-partner__slider">
                      {/* Single Slider  */}
                      <a href="#" target="_blank" className="ed-parnet__brand-logo">
                        <img
                          src="/assets/images/partner/partner-1/1.svg"
                          alt="brand-logo"
                        />
                      </a>
                      {/* Single Slider  */}
                      <a href="#" target="_blank" className="ed-parnet__brand-logo">
                        <img
                          src="/assets/images/partner/partner-1/2.svg"
                          alt="brand-logo"
                        />
                      </a>
                      {/* Single Slider  */}
                      <a href="#" target="_blank" className="ed-parnet__brand-logo">
                        <img
                          src="/assets/images/partner/partner-1/3.svg"
                          alt="brand-logo"
                        />
                      </a>
                      {/* Single Slider  */}
                      <a href="#" target="_blank" className="ed-parnet__brand-logo">
                        <img
                          src="/assets/images/partner/partner-1/4.svg"
                          alt="brand-logo"
                        />
                      </a>
                      {/* Single Slider  */}
                      <a href="#" target="_blank" className="ed-parnet__brand-logo">
                        <img
                          src="/assets/images/partner/partner-1/5.svg"
                          alt="brand-logo"
                        />
                      </a>
                      {/* Single Slider  */}
                      <a href="#" target="_blank" className="ed-parnet__brand-logo">
                        <img
                          src="/assets/images/partner/partner-1/6.svg"
                          alt="brand-logo"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* End Partner Area */}
            <div
              className="section-bg background-image"
              style={{ backgroundImage: 'url("/assets/images/section-bg-5.png")' }}
            >
              {/* Start Category Area */}
              <section className="ed-category section-gap">
                <div className="container ed-container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8 col-12">
                      <div className="ed-section-head text-center">
                        <span className="ed-section-head__sm-title">
                          COURSE CATEGORIES
                        </span>
                        <h3 className="ed-section-head__title m-0 ed-split-text left">
                          Top Categories You Want to&nbsp;Learn
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="ed-category__wrapper">
                        {/* Single Coure Card  */}
                        <a
                          href="course-1.html"
                          className="ed-category__card wow fadeInUp"
                          data-wow-delay=".3s"
                          data-wow-duration="1s"
                        >
                          <div className="ed-category__icon bg-1">
                            <img
                              src="/assets/images/category/category-1/1.svg"
                              alt="icon"
                            />
                          </div>
                          <div className="ed-category__info">
                            <h4>Business</h4>
                            <p>04 Courses</p>
                          </div>
                        </a>
                        {/* Single Coure Card  */}
                        <a
                          href="course-1.html"
                          className="ed-category__card wow fadeInUp"
                          data-wow-delay=".5s"
                          data-wow-duration="1s"
                        >
                          <div className="ed-category__icon bg-2">
                            <img
                              src="/assets/images/category/category-1/2.svg"
                              alt="icon"
                            />
                          </div>
                          <div className="ed-category__info">
                            <h4>Marketing</h4>
                            <p>88 Courses</p>
                          </div>
                        </a>
                        {/* Single Coure Card  */}
                        <a
                          href="course-1.html"
                          className="ed-category__card wow fadeInUp"
                          data-wow-delay=".7s"
                          data-wow-duration="1s"
                        >
                          <div className="ed-category__icon bg-3">
                            <img
                              src="/assets/images/category/category-1/3.svg"
                              alt="icon"
                            />
                          </div>
                          <div className="ed-category__info">
                            <h4>Design</h4>
                            <p>23 Courses</p>
                          </div>
                        </a>
                        {/* Single Coure Card  */}
                        <a
                          href="course-1.html"
                          className="ed-category__card wow fadeInUp"
                          data-wow-delay=".9s"
                          data-wow-duration="1s"
                        >
                          <div className="ed-category__icon bg-4">
                            <img
                              src="/assets/images/category/category-1/4.svg"
                              alt="icon"
                            />
                          </div>
                          <div className="ed-category__info">
                            <h4>Finance</h4>
                            <p>02 Courses</p>
                          </div>
                        </a>
                        {/* Single Coure Card  */}
                        <a
                          href="course-1.html"
                          className="ed-category__card wow fadeInUp"
                          data-wow-delay=".3s"
                          data-wow-duration="1s"
                        >
                          <div className="ed-category__icon bg-5">
                            <img
                              src="/assets/images/category/category-1/5.svg"
                              alt="icon"
                            />
                          </div>
                          <div className="ed-category__info">
                            <h4>Lifestyle</h4>
                            <p>29 Courses</p>
                          </div>
                        </a>
                        {/* Single Coure Card  */}
                        <a
                          href="course-1.html"
                          className="ed-category__card wow fadeInUp"
                          data-wow-delay=".5s"
                          data-wow-duration="1s"
                        >
                          <div className="ed-category__icon bg-6">
                            <img
                              src="/assets/images/category/category-1/6.svg"
                              alt="icon"
                            />
                          </div>
                          <div className="ed-category__info">
                            <h4>Cyber</h4>
                            <p>45 Courses</p>
                          </div>
                        </a>
                        {/* Single Coure Card  */}
                        <a
                          href="course-1.html"
                          className="ed-category__card wow fadeInUp"
                          data-wow-delay=".7s"
                          data-wow-duration="1s"
                        >
                          <div className="ed-category__icon bg-7">
                            <img
                              src="/assets/images/category/category-1/7.svg"
                              alt="icon"
                            />
                          </div>
                          <div className="ed-category__info">
                            <h4>Development</h4>
                            <p>28 Courses</p>
                          </div>
                        </a>
                        {/* Single Coure Card  */}
                        <a
                          href="course-1.html"
                          className="ed-category__card wow fadeInUp"
                          data-wow-delay=".9s"
                          data-wow-duration="1s"
                        >
                          <div className="ed-category__icon bg-8">
                            <img
                              src="/assets/images/category/category-1/8.svg"
                              alt="icon"
                            />
                          </div>
                          <div className="ed-category__info">
                            <h4>Photography</h4>
                            <p>03 Courses</p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* End Category Area */}
              {/* Start About Area */}
              <section className="ed-about ed-about--style2 section-gap pt-0 position-relative">
                <div className="container ed-container">
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                      {/* About Content  */}
                      <div className="ed-about__content">
                        <div className="ed-section-head">
                          <span className="ed-section-head__sm-title">
                            ABOUT OUR COURSES
                          </span>
                          <h3 className="ed-section-head__title ed-split-text right">
                            Digital Online Academy: Your <br />
                            Path to Creative Excellence
                          </h3>
                          <p className="ed-section-head__text">
                            Excepteur sint occaecat cupidatat non proident sunt in
                            culpa qui officia deserunt mollit.
                          </p>
                        </div>
                        <div className="ed-about__feature">
                          <ul className="ed-about__features-list">
                            <li>
                              <img
                                src="/assets/images/icons/icon-check-blue.svg"
                                alt="icon-check-blue"
                              />
                              Our Expert Trainers
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
                              Easy to follow curriculum
                            </li>
                            <li>
                              <img
                                src="/assets/images/icons/icon-check-blue.svg"
                                alt="icon-check-blue"
                              />
                              Lifetime Access
                            </li>
                          </ul>
                        </div>
                        <div className="ed-about__btn">
                          <a href="course-1.html" className="ed-btn">
                            Start Learning
                            <i className="fi fi-rr-arrow-small-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      {/* About Images  */}
                      <div className="ed-about__images ed-about__images--style2">
                        <div className="ed-about__main-img-style2">
                          <img
                            className="ed-about__main-img-1"
                            src="/assets/images/about/about-2/about-img-1.png"
                            alt="about-img-1"
                          />
                          <img
                            className="ed-about__main-img-2"
                            src="/assets/images/about/about-2/about-img-2.png"
                            alt="about-img-1"
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
                            src="/assets/images/about/about-2/shape-1.svg"
                            alt="shape-1"
                          />
                          <img
                            className="ed-about__shape-2"
                            src="/assets/images/about/about-2/shape-2.svg"
                            alt="shape-2"
                          />
                          <img
                            className="ed-about__shape-3 rotate-ani"
                            src="/assets/images/about/about-2/shape-3.svg"
                            alt="shape-3"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* End About Area */}
            </div>
            {/* Start Course Area */}
            <section className="ed-course ed-course--style2 section-gap position-relative overflow-hidden">
              <div className="container ed-container">
                <div className="row justify-content-center">
                  <div className="col-lg-6 col-md-8 col-12">
                    <div className="ed-section-head text-center">
                      <span className="ed-section-head__sm-title">
                        ONLINE COURSES
                      </span>
                      <h3 className="ed-section-head__title ed-split-text left">
                        Get Your Course With Us
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="row">
                  {/* Single Course Card */}
                  <div className="col-lg-6 col-xl-6 col-md-6 col-12">
                    <div
                      className="ed-course__card ed-course__card--style2 wow fadeInUp"
                      data-wow-delay=".3s"
                      data-wow-duration="1s"
                    >
                      <div className="ed-course__head position-relative">
                        <a href="course-details.html" className="ed-course__img">
                          <img
                            src="/assets/images/course/course-2/1.png"
                            alt="course-img"
                          />
                        </a>
                        <a href="course-1.html" className="ed-course__tag">
                          Marketing
                        </a>
                        <a href="#" className="ed-course__bookmarked">
                          <i className="fi fi-rr-bookmark" />
                        </a>
                      </div>
                      <div className="ed-course__body">
                        <div className="ed-course__lesson">
                          <div className="ed-course__part">
                            <i className="fi-rr-book" />
                            <p>04 Lessons</p>
                          </div>
                          <div className="ed-course__teacher">
                            <i className="fi-rr-user" />
                            <p>Lucas Brooks</p>
                          </div>
                        </div>
                        <a href="course-details.html" className="ed-course__title">
                          <h5>
                            Grow Personal Financial Security Thinking &amp;
                            Principles
                          </h5>
                        </a>
                        <div className="ed-course__rattings">
                          <ul>
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
                            <li>
                              <span>(67 Reviews)</span>
                            </li>
                          </ul>
                        </div>
                        <div className="ed-course__bottom">
                          <span className="ed-course__price">$383.00</span>
                          <div className="ed-course__students">
                            <i className="fi fi-rr-graduation-cap" />
                            <p>356 Students</p>
                          </div>
                        </div>
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
                        <a href="course-details.html" className="ed-course__img">
                          <img
                            src="/assets/images/course/course-2/2.png"
                            alt="course-img"
                          />
                        </a>
                        <a href="course-1.html" className="ed-course__tag">
                          Development
                        </a>
                        <a href="#" className="ed-course__bookmarked">
                          <i className="fi fi-rr-bookmark" />
                        </a>
                      </div>
                      <div className="ed-course__body">
                        <div className="ed-course__lesson">
                          <div className="ed-course__part">
                            <i className="fi-rr-book" />
                            <p>98 Lessons</p>
                          </div>
                          <div className="ed-course__teacher">
                            <i className="fi-rr-user" />
                            <p>John Smith</p>
                          </div>
                        </div>
                        <a href="course-details.html" className="ed-course__title">
                          <h5>
                            Data Competitive Strategy law and Organization Course
                          </h5>
                        </a>
                        <div className="ed-course__rattings">
                          <ul>
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
                            <li>
                              <span>(09 Reviews)</span>
                            </li>
                          </ul>
                        </div>
                        <div className="ed-course__bottom">
                          <span className="ed-course__price">$383.00</span>
                          <div className="ed-course__students">
                            <i className="fi fi-rr-graduation-cap" />
                            <p>553 Students</p>
                          </div>
                        </div>
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
                        <a href="course-details.html" className="ed-course__img">
                          <img
                            src="/assets/images/course/course-2/3.png"
                            alt="course-img"
                          />
                        </a>
                        <a href="course-1.html" className="ed-course__tag">
                          Design
                        </a>
                        <a href="#" className="ed-course__bookmarked">
                          <i className="fi fi-rr-bookmark" />
                        </a>
                      </div>
                      <div className="ed-course__body">
                        <div className="ed-course__lesson">
                          <div className="ed-course__part">
                            <i className="fi-rr-book" />
                            <p>87 Lessons</p>
                          </div>
                          <div className="ed-course__teacher">
                            <i className="fi-rr-user" />
                            <p>Alexander Wells</p>
                          </div>
                        </div>
                        <a href="course-details.html" className="ed-course__title">
                          <h5>Voices from the Learning Manage Education Hub</h5>
                        </a>
                        <div className="ed-course__rattings">
                          <ul>
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
                            <li>
                              <span>(23 Reviews)</span>
                            </li>
                          </ul>
                        </div>
                        <div className="ed-course__bottom">
                          <span className="ed-course__price">$944.00</span>
                          <div className="ed-course__students">
                            <i className="fi fi-rr-graduation-cap" />
                            <p>234 Students</p>
                          </div>
                        </div>
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
                        <a href="course-details.html" className="ed-course__img">
                          <img
                            src="/assets/images/course/course-2/4.png"
                            alt="course-img"
                          />
                        </a>
                        <a href="course-1.html" className="ed-course__tag">
                          Business
                        </a>
                        <a href="#" className="ed-course__bookmarked">
                          <i className="fi fi-rr-bookmark" />
                        </a>
                      </div>
                      <div className="ed-course__body">
                        <div className="ed-course__lesson">
                          <div className="ed-course__part">
                            <i className="fi-rr-book" />
                            <p>90 Lessons</p>
                          </div>
                          <div className="ed-course__teacher">
                            <i className="fi-rr-user" />
                            <p>Oliver Knight</p>
                          </div>
                        </div>
                        <a href="course-details.html" className="ed-course__title">
                          <h5>
                            The Complete Guide to Build RESTful API Application
                          </h5>
                        </a>
                        <div className="ed-course__rattings">
                          <ul>
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
                            <li>
                              <span>(34 Reviews)</span>
                            </li>
                          </ul>
                        </div>
                        <div className="ed-course__bottom">
                          <span className="ed-course__price">$855.00</span>
                          <div className="ed-course__students">
                            <i className="fi fi-rr-graduation-cap" />
                            <p>313 Students</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="ed-section-bottom-btn">
                      <a href="course-1.html" className="ed-btn">
                        View All Courses
                        <i className="fi fi-rr-arrow-small-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* End Course Area */}
            <div className="section-bg position-relative">
              <div className="section-bg__img">
                <img src="/assets/images/section-bg-6.png" alt="bg-img" />
              </div>
              {/* Start Video Area */}
              <section className="ed-video">
                <div className="container ed-container">
                  <div
                    className="ed-video__bg background-image ed-hobble position-relative"
                    style={{
                      backgroundImage:
                        'url("assets/images/video/video-1/bg-img.png")'
                    }}
                  >
                    <div className="ed-video__shapes">
                      <img
                        className="ed-video__shape-1 rotate-ani"
                        src="/assets/images/video/video-1/shape-1.svg"
                        alt="shape-1"
                      />
                      <img
                        className="ed-video__shape-2 updown-ani"
                        src="/assets/images/video/video-1/shape-2.svg"
                        alt="shape-2"
                      />
                    </div>
                    <a
                      href="https://www.youtube.com/watch?v=gyGsPlt06bo"
                      className="ed-video__btn popup-video ed-hover-layer-2"
                    >
                      <img
                        src="/assets/images/icons/icon-play-yellow.svg"
                        alt="play-icon"
                      />
                    </a>
                  </div>
                </div>
              </section>
              {/* End Video Area */}
              {/* Start Why Choose Area */}
              <section className="ed-why-choose ed-why-choose--style2 section-gap position-relative">
                <div className="container ed-container position-relative">
                  <div className="ed-w-choose__content">
                    <div className="row g-0">
                      <div className="col-lg-6 col-12">
                        <div className="ed-section-head">
                          <span className="ed-section-head__sm-title">
                            WHY CHOOSE US
                          </span>
                          <h3 className="ed-section-head__title ed-split-text right">
                            Transform Your Best Practice <br />
                            with Our Online Course
                          </h3>
                          <p className="ed-section-head__text">
                            Excepteur sint occaecat cupidatat non proident sunt in
                            culpa qui officia deserunt mollit. Excepteur sint
                            occaecat.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="ed-w-choose__info">
                      {/* Single Info  */}
                      <div
                        className="ed-w-choose__info-single ed-w-choose__info-single--style2 wow fadeInUp"
                        data-wow-delay=".3s"
                        data-wow-duration="1s"
                      >
                        <div className="ed-w-choose__info-head">
                          <div className="ed-w-choose__info-icon bg-1">
                            <img
                              src="/assets/images/why-choose/why-choose-1/icon-1.svg"
                              alt="icon"
                            />
                          </div>
                          <h5>Online Teaching</h5>
                        </div>
                        <div className="ed-w-choose__info-bottom">
                          <p>
                            Excepteur sint occaecat cupidatat non proident sunta in
                            culpa qui officia for this is a for that.
                          </p>
                        </div>
                      </div>
                      {/* Single Info  */}
                      <div
                        className="ed-w-choose__info-single ed-w-choose__info-single--style2 wow fadeInUp"
                        data-wow-delay=".5s"
                        data-wow-duration="1s"
                      >
                        <div className="ed-w-choose__info-head">
                          <div className="ed-w-choose__info-icon bg-2">
                            <img
                              src="/assets/images/why-choose/why-choose-1/icon-2.svg"
                              alt="icon"
                            />
                          </div>
                          <h5>24/7 Support</h5>
                        </div>
                        <div className="ed-w-choose__info-bottom">
                          <p>
                            Excepteur sint occaecat cupidatat non proident sunta in
                            culpa qui officia for this is a for that.
                          </p>
                        </div>
                      </div>
                      {/* Single Info  */}
                      <div
                        className="ed-w-choose__info-single ed-w-choose__info-single--style2 wow fadeInUp"
                        data-wow-delay=".7s"
                        data-wow-duration="1s"
                      >
                        <div className="ed-w-choose__info-head">
                          <div className="ed-w-choose__info-icon bg-3">
                            <img
                              src="/assets/images/why-choose/why-choose-1/icon-3.svg"
                              alt="icon"
                            />
                          </div>
                          <h5>Award Wining</h5>
                        </div>
                        <div className="ed-w-choose__info-bottom">
                          <p>
                            Excepteur sint occaecat cupidatat non proident sunta in
                            culpa qui officia for this is a for that.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ed-w-choose__images ed-w-choose__images--style2">
                    {/* Why Choose Image  */}
                    <div className="ed-w-choose__main-img">
                      <img
                        src="/assets/images/why-choose/why-choose-2/why-choose-img.png"
                        alt="why-choose-img"
                      />
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
              {/* End Why Choose Area */}
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
                            <span className="counter">534</span>+
                          </h4>
                          <p>Student enrolled</p>
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
                            <span className="counter">643</span>+
                          </h4>
                          <p>Classes completed</p>
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
                            <span className="counter">744</span>+
                          </h4>
                          <p>Top instructors</p>
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
                            <span className="counter">922</span>+
                          </h4>
                          <p>Learners report</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* End Funfact Area */}
            </div>
            {/* Start Team Area */}
            <section className="ed-team position-relative section-gap">
              <div className="container ed-container">
                <div className="row justify-content-center">
                  <div className="col-lg-6 col-md-8 col-12">
                    <div className="ed-section-head text-center">
                      <span className="ed-section-head__sm-title">
                        OUR INSTRUCTOR
                      </span>
                      <h3 className="ed-section-head__title ed-split-text left">
                        Our Top Class &amp; Expert Instructors
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="row">
                  {/* Single Team */}
                  <div className="col-lg-4 col-md-6 col-12">
                    <div
                      className="ed-team__card wow fadeInUp"
                      data-wow-delay=".3s"
                      data-wow-duration="1s"
                    >
                      <div className="ed-team__cover">
                        <div className="ed-team__img">
                          <img
                            src="/assets/images/team/team-1/1.png"
                            alt="team-img"
                          />
                        </div>
                        <ul className="ed-team__social">
                          <li>
                            <a href="https://www.facebook.com/" target="_blank">
                              <img
                                src="/assets/images/icons/icon-white-facebook.svg"
                                alt="icon-white-facebook"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="https://www.twitter.com/" target="_blank">
                              <img
                                src="/assets/images/icons/icon-white-twitter.svg"
                                alt="icon-white-twitter"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="https://www.dribbble.com/" target="_blank">
                              <img
                                src="/assets/images/icons/icon-white-dribbble.svg"
                                alt="icon-white-dribbble"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="https://www.instagram.com/" target="_blank">
                              <img
                                src="/assets/images/icons/icon-white-instagram.svg"
                                alt="icon-white-instagram"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="ed-team__info">
                        <p className="ed-team__designation">Digital Marketer</p>
                        <a className="ed-team__name" href="teacher-details.html">
                          Laura Martinez
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Single Team */}
                  <div className="col-lg-4 col-md-6 col-12">
                    <div
                      className="ed-team__card wow fadeInUp"
                      data-wow-delay=".5s"
                      data-wow-duration="1s"
                    >
                      <div className="ed-team__cover">
                        <div className="ed-team__img">
                          <img
                            src="/assets/images/team/team-1/2.png"
                            alt="team-img"
                          />
                        </div>
                        <ul className="ed-team__social">
                          <li>
                            <a href="https://www.facebook.com/" target="_blank">
                              <img
                                src="/assets/images/icons/icon-white-facebook.svg"
                                alt="icon-white-facebook"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="https://www.twitter.com/" target="_blank">
                              <img
                                src="/assets/images/icons/icon-white-twitter.svg"
                                alt="icon-white-twitter"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="https://www.dribbble.com/" target="_blank">
                              <img
                                src="/assets/images/icons/icon-white-dribbble.svg"
                                alt="icon-white-dribbble"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="https://www.instagram.com/" target="_blank">
                              <img
                                src="/assets/images/icons/icon-white-instagram.svg"
                                alt="icon-white-instagram"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="ed-team__info">
                        <p className="ed-team__designation">Graphic Designer</p>
                        <a className="ed-team__name" href="teacher-details.html">
                          Jennifer Brown
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Single Team */}
                  <div className="col-lg-4 col-md-6 col-12">
                    <div
                      className="ed-team__card wow fadeInUp"
                      data-wow-delay=".7s"
                      data-wow-duration="1s"
                    >
                      <div className="ed-team__cover">
                        <div className="ed-team__img">
                          <img
                            src="/assets/images/team/team-1/3.png"
                            alt="team-img"
                          />
                        </div>
                        <ul className="ed-team__social">
                          <li>
                            <a href="https://www.facebook.com/" target="_blank">
                              <img
                                src="/assets/images/icons/icon-white-facebook.svg"
                                alt="icon-white-facebook"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="https://www.twitter.com/" target="_blank">
                              <img
                                src="/assets/images/icons/icon-white-twitter.svg"
                                alt="icon-white-twitter"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="https://www.dribbble.com/" target="_blank">
                              <img
                                src="/assets/images/icons/icon-white-dribbble.svg"
                                alt="icon-white-dribbble"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="https://www.instagram.com/" target="_blank">
                              <img
                                src="/assets/images/icons/icon-white-instagram.svg"
                                alt="icon-white-instagram"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="ed-team__info">
                        <p className="ed-team__designation">Web Developer</p>
                        <a className="ed-team__name" href="teacher-details.html">
                          Michael Anderson
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* End Team Area */}
            {/* Start Testimonial Area */}
            <section className="ed-testimonial ed-testimonial--style2 section-gap pt-0">
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
                            “ Attending EduVibe School of Business was one of the
                            best decisions I've ever made. The curriculum was
                            practical and industry-focused, and I was able to apply
                            what I learned in the classroom.”
                          </p>
                          <div className="ed-testimonial__author">
                            <div className="ed-testimonial__author-img">
                              <img
                                src="/assets/images/testimonial/testimonial-1/author-1.png"
                                alt="author-img"
                              />
                            </div>
                            <div className="ed-testimonial__author-info">
                              <h5>John Smith</h5>
                              <p>Science Student</p>
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
                            “ Attending EduVibe School of Business was one of the
                            best decisions I've ever made. The curriculum was
                            practical and industry-focused, and I was able to apply
                            what I learned in the classroom.”
                          </p>
                          <div className="ed-testimonial__author">
                            <div className="ed-testimonial__author-img">
                              <img
                                src="/assets/images/testimonial/testimonial-1/author-1.png"
                                alt="author-img"
                              />
                            </div>
                            <div className="ed-testimonial__author-info">
                              <h5>John Smith</h5>
                              <p>Science Student</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* End Testimonial Area */}
            <div className="section-bg position-relative">
              <div className="section-bg__img style-2">
                <img src="/assets/images/section-bg-6.png" alt="bg-img" />
              </div>
              {/* Start Faq Area */}
              <section className="ed-faq section-gap position-relative">
                <div className="container ed-container">
                  <div className="ed-faq__inner position-relative">
                    <div className="row align-items-center">
                      <div className="col-lg-12 col-xl-6 col-12">
                        {/* Faq Images  */}
                        <div className="ed-faq__images position-relative">
                          <div className="ed-faq__images-group">
                            <div className="ed-faq__image-group-1">
                              <img
                                className="faq-img-1"
                                src="/assets/images/faq/faq-1/faq-img-1.png"
                                alt="faq-img-1"
                              />
                            </div>
                            <div className="ed-faq__image-group-2">
                              <img
                                className="faq-img-2"
                                src="/assets/images/faq/faq-1/faq-img-2.png"
                                alt="faq-img-2"
                              />
                              <img
                                className="faq-img-3"
                                src="/assets/images/faq/faq-1/faq-img-3.png"
                                alt="faq-img-2"
                              />
                            </div>
                          </div>
                          {/* Shape Elemets  */}
                          <div className="ed-faq__shapes">
                            <img
                              className="ed-faq__shape-1"
                              src="/assets/images/faq/faq-1/shape-1.svg"
                              alt="shape-1"
                            />
                            <img
                              className="ed-faq__shape-2"
                              src="/assets/images/faq/faq-1/shape-2.svg"
                              alt="shape-2"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-xl-6 col-12">
                        {/* Faq Content  */}
                        <div className="ed-faq__content">
                          <div className="ed-section-head m-0">
                            <span className="ed-section-head__sm-title">
                              FREQUENTLY ASKED QUESTIONS
                            </span>
                            <h3 className="ed-section-head__title ed-split-text right">
                              Most Popular Questions About Our Online Courses
                            </h3>
                          </div>
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
                                  How can I start with your online class?
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
                                    Excepteur sint occaecat cupidatat non proident
                                    sunta in culpa qui officia for this is a for
                                    that tempor.
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
                                  How can I register to your website to learn?
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
                                    Excepteur sint occaecat cupidatat non proident
                                    sunta in culpa qui officia for this is a for
                                    that tempor.
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
                                  Can i get lifetime access for your any courses?
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
                                    Excepteur sint occaecat cupidatat non proident
                                    sunta in culpa qui officia for this is a for
                                    that tempor.
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
                                  How can I contact a school directly?
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
                                    Excepteur sint occaecat cupidatat non proident
                                    sunta in culpa qui officia for this is a for
                                    that tempor.
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
              {/* End Faq Area */}
              {/* Start Blog Area */}
              <section className="ed-blog section-gap pt-0">
                <div className="container ed-container">
                  <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8 col-12">
                      <div className="ed-section-head text-center">
                        <span className="ed-section-head__sm-title">OUR NEWS</span>
                        <h3 className="ed-section-head__title ed-split-text left">
                          Our New Articles
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    {/* Single Blog */}
                    <div className="col-lg-4 col-md-6 col-12">
                      <div
                        className="ed-blog__card wow fadeInUp"
                        data-wow-delay=".3s"
                        data-wow-duration="1s"
                      >
                        <div className="ed-blog__head">
                          <div className="ed-blog__img">
                            <img
                              src="/assets/images/blog/blog-1/1.png"
                              alt="blog-img"
                            />
                          </div>
                          <a href="blog.html" className="ed-blog__category">
                            Education
                          </a>
                        </div>
                        <div className="ed-blog__content">
                          <ul className="ed-blog__meta">
                            <li>
                              <i className="fi fi-rr-calendar" />
                              09 May, 2024
                            </li>
                            <li>
                              <i className="fi fi-rr-comment-alt-dots" />
                              32 Comments
                            </li>
                          </ul>
                          <a href="blog-details.html" className="ed-blog__title">
                            <h4>
                              Solutions Your All Problem With Online Courses For
                              Your Thinking
                            </h4>
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* Single Blog */}
                    <div className="col-lg-4 col-md-6 col-12">
                      <div
                        className="ed-blog__card wow fadeInUp"
                        data-wow-delay=".5s"
                        data-wow-duration="1s"
                      >
                        <div className="ed-blog__head">
                          <div className="ed-blog__img">
                            <img
                              src="/assets/images/blog/blog-1/2.png"
                              alt="blog-img"
                            />
                          </div>
                          <a href="blog.html" className="ed-blog__category">
                            Business
                          </a>
                        </div>
                        <div className="ed-blog__content">
                          <ul className="ed-blog__meta">
                            <li>
                              <i className="fi fi-rr-calendar" />
                              09 January, 2024
                            </li>
                            <li>
                              <i className="fi fi-rr-comment-alt-dots" />
                              98 Comments
                            </li>
                          </ul>
                          <a href="blog-details.html" className="ed-blog__title">
                            <h4>
                              Exploring Learning Landscapes in All Academic Calendar
                              For Season
                            </h4>
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* Single Blog */}
                    <div className="col-lg-4 col-md-6 col-12">
                      <div
                        className="ed-blog__card wow fadeInUp"
                        data-wow-delay=".7s"
                        data-wow-duration="1s"
                      >
                        <div className="ed-blog__head">
                          <div className="ed-blog__img">
                            <img
                              src="/assets/images/blog/blog-1/3.png"
                              alt="blog-img"
                            />
                          </div>
                          <a href="blog.html" className="ed-blog__category">
                            Marketing
                          </a>
                        </div>
                        <div className="ed-blog__content">
                          <ul className="ed-blog__meta">
                            <li>
                              <i className="fi fi-rr-calendar" />
                              03 June, 2024
                            </li>
                            <li>
                              <i className="fi fi-rr-comment-alt-dots" />
                              04 Comments
                            </li>
                          </ul>
                          <a href="blog-details.html" className="ed-blog__title">
                            <h4>
                              Voices from the Learning Education Hub For Your
                              Children
                            </h4>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* End Blog Area */}
            </div>
          </main>
          <div className="footer-bg position-relative">
            <div className="footer-bg__img">
              <img
                src="/assets/images/footer/footer-2/footer-bg.png"
                alt="footer-bg-img"
              />
            </div>
            {/* Start Call Action Area */}
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
                          <span className="ed-section-head__sm-title">
                            GET STARTED NOW
                          </span>
                          <h3 className="ed-section-head__title">
                            Affordable Your Online Courses <br />
                            &amp; Learning Opportunities
                          </h3>
                          <p className="ed-section-head__text">
                            Excepteur sint occaecat cupidatat non proident sunt in
                            culpa qui officia deserunt mollit. Excepteur sint
                            occaecat.
                          </p>
                        </div>
                        <div className="ed-call-action__content-btn">
                          <a href="course-1.html" className="ed-btn">
                            {" "}
                            Start Learning Today
                            <i className="fi fi-rr-arrow-small-right" />{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* End Call Action Area */}
            {/* Start Footer Area */}
            <footer className="ed-footer position-relative">
              {/* Footer Top */}
              <div className="ed-footer__top position-relative">
                <div className="ed-footer__shapes">
                  <img
                    className="ed-footer__shape-1"
                    src="/assets/images/footer/footer-1/shape-1.svg"
                    alt="shape-1"
                  />
                  <img
                    className="ed-footer__shape-2 rotate-ani"
                    src="/assets/images/footer/footer-1/shape-2.svg"
                    alt="shape-2"
                  />
                  <img
                    className="ed-footer__shape-3"
                    src="/assets/images/footer/footer-1/shape-3.svg"
                    alt="shape-3"
                  />
                </div>
                <div className="container ed-container">
                  <div className="row g-0">
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="ed-footer__widget ed-footer__about">
                        <a href="index.html" className="ed-footer__logo">
                          <img src="/assets/images/logo.svg" alt="footer-logo" />
                        </a>
                        <p className="ed-footer__about-text">
                          Excepteur sint occaecat cupidatat non proident sunt in
                          culpa qui officia deserunt mollit.
                        </p>
                        <ul className="ed-footer__about-social">
                          <li>
                            <a href="https://www.facebook.com/" target="_blank">
                              <img
                                src="/assets/images/icons/icon-dark-facebook.svg"
                                alt="icon-dark-facebook"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="https://www.twitter.com/" target="_blank">
                              <img
                                src="/assets/images/icons/icon-dark-twitter.svg"
                                alt="icon-dark-twitter"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="https://www.dribbble.com/" target="_blank">
                              <img
                                src="/assets/images/icons/icon-dark-dribbble.svg"
                                alt="icon-dark-dribbble"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="https://www.instagram.com/" target="_blank">
                              <img
                                src="/assets/images/icons/icon-dark-instagram.svg"
                                alt="icon-dark-instagram"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-6 col-12">
                      <div className="ed-footer__widget">
                        <h4 className="ed-footer__widget-title">Links</h4>
                        <ul className="ed-footer__widget-links">
                          <li>
                            <a href="about-1.html">About Us</a>
                          </li>
                          <li>
                            <a href="course-1.html">Our Courses</a>
                          </li>
                          <li>
                            <a href="#">Pricing Plan</a>
                          </li>
                          <li>
                            <a href="contact.html">Contact Us</a>
                          </li>
                          <li>
                            <a href="blog.html">Our News</a>
                          </li>
                          <li>
                            <a href="faq.html">FAQ’s</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                      <div className="ed-footer__widget contact-widget">
                        <h4 className="ed-footer__widget-title">Contact</h4>
                        {/* Single Info  */}
                        <div className="ed-footer__contact">
                          <div className="ed-footer__contact-icon">
                            <img
                              src="/assets/images/icons/icon-phone-blue.svg"
                              alt="icon-phone-blue"
                            />
                          </div>
                          <div className="ed-footer__contact-info">
                            <span>24/7 Support</span>
                            <a href="tel:+532 321 33 33">+532 321 33 33</a>
                          </div>
                        </div>
                        {/* Single Info  */}
                        <div className="ed-footer__contact">
                          <div className="ed-footer__contact-icon">
                            <img
                              src="/assets/images/icons/icon-envelope-blue.svg"
                              alt="icon-envelope-blue"
                            />
                          </div>
                          <div className="ed-footer__contact-info">
                            <span>Send Message</span>
                            <a href="mailto:eduna@gmail.com">eduna@gmail.com</a>
                          </div>
                        </div>
                        {/* Single Info  */}
                        <div className="ed-footer__contact">
                          <div className="ed-footer__contact-icon">
                            <img
                              src="/assets/images/icons/icon-location-blue.svg"
                              alt="icon-location-blue"
                            />
                          </div>
                          <div className="ed-footer__contact-info">
                            <span>Our Locati0n</span>
                            <a href="#" target="_blank">
                              32/Jenin, London
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                      <div className="ed-footer__widget newsletter-widget">
                        <h4 className="ed-footer__widget-title">Subscribe</h4>
                        <div className="ed-footer__newsletter">
                          <p className="ed-footer__about-text">
                            Enter your email address to register to our newsletter
                            subscription
                          </p>
                          <form
                            action="#"
                            method="post"
                            className="ed-footer__newsletter-form"
                          >
                            <input
                              type="email"
                              name="email"
                              placeholder="Enter email"
                              required=""
                            />
                            <button type="submit" className="ed-btn">
                              Subscribe Now
                              <i className="fi fi-rr-arrow-small-right" />
                            </button>
                          </form>
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
                        Copyright 2024&nbsp;Eduna&nbsp;| Developed By
                        <a
                          href="https://themeforest.net/user/bizantheme"
                          target="_blank"
                        >
                          BizanTheme
                        </a>
                        . All Rights Reserved
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
            {/* End Footer Area  */}
          </div>
        </div>
      </div>
      {/* Start Login Modal */}
      <div
        className="modal fade ed-auth__modal"
        id="loginModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="ed-auth__modal-content modal-content">
            <button
              type="button"
              className="ed-auth__modal-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i className="fi-rr-cross" />
            </button>
            {/* Auth Head  */}
            <div className="ed-auth__modal-head">
              <a href="index.html" className="ed-auth__modal-logo">
                <img src="/assets/images/logo.svg" alt="logo" />
              </a>
              <h3 className="ed-auth__modal-title">Sign In Now</h3>
              <p className="ed-auth__modal-text">
                Didn’t Create an account?
                <button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#registerModal"
                >
                  Sign Up
                </button>
              </p>
            </div>
            {/* Auth Body  */}
            <div className="ed-auth__modal-body">
              <form action="#" method="post" className="ed-auth__modal-form">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter user name"
                    required=""
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    required=""
                  />
                </div>
                <div className="form-check">
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault"
                    />
                    Remember me
                  </label>
                </div>
                <div className="ed-auth__form-btn">
                  <button type="submit" className="ed-btn">
                    Sign In
                    <i className="fi fi-rr-arrow-small-right" />
                  </button>
                </div>
              </form>
            </div>
            {/* Auth Footer  */}
            <div className="ed-auth__modal-footer">
              <div className="ed-auth__modal-third-party">
                <p>Or Sign In with</p>
                <ul className="ed-auth__modal-third-party-list">
                  <li>
                    <a className="google-login" href="https://www.google.com/">
                      <img
                        src="/assets/images/icons/icon-color-google.svg"
                        alt="icon-color-google"
                      />
                    </a>
                  </li>
                  <li>
                    <a className="facebook-login" href="https://facebook.com/">
                      <img
                        src="/assets/images/icons/icon-color-facebook.svg"
                        alt="icon-color-facebook"
                      />
                    </a>
                  </li>
                  <li>
                    <a className="linkedin-login" href="https://www.linkedin.com/">
                      <img
                        src="/assets/images/icons/icon-color-linkedin.svg"
                        alt="icon-color-linkedin"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Login Modal */}
      {/* Start Register Modal */}
      <div
        className="modal fade ed-auth__modal"
        id="registerModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="ed-auth__modal-content modal-content">
            <button
              type="button"
              className="ed-auth__modal-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i className="fi-rr-cross" />
            </button>
            {/* Auth Head  */}
            <div className="ed-auth__modal-head">
              <a href="index.html" className="ed-auth__modal-logo">
                <img src="/assets/images/logo.svg" alt="logo" />
              </a>
              <h3 className="ed-auth__modal-title">Sign Up Now</h3>
              <p className="ed-auth__modal-text">
                already have an account?
                <button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#loginModal"
                >
                  Sign In
                </button>
              </p>
            </div>
            {/* Auth Body  */}
            <div className="ed-auth__modal-body">
              <form action="#" method="post" className="ed-auth__modal-form">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter name"
                    required=""
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="user name"
                    placeholder="Enter user name"
                    required=""
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    required=""
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    required=""
                  />
                </div>
                <div className="form-check">
                  <label className="form-check-label" htmlFor="flexCheckDefault2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault2"
                    />
                    I agree with your <strong>Privacy Policy</strong>
                  </label>
                </div>
                <div className="ed-auth__form-btn">
                  <button type="submit" className="ed-btn">
                    Register Now
                    <i className="fi fi-rr-arrow-small-right" />
                  </button>
                </div>
              </form>
            </div>
            {/* Auth Footer  */}
            <div className="ed-auth__modal-footer">
              <div className="ed-auth__modal-third-party">
                <p>Or Sign Up with</p>
                <ul className="ed-auth__modal-third-party-list">
                  <li>
                    <a className="google-login" href="https://www.google.com/">
                      <img
                        src="/assets/images/icons/icon-color-google.svg"
                        alt="icon-color-google"
                      />
                    </a>
                  </li>
                  <li>
                    <a className="facebook-login" href="https://facebook.com/">
                      <img
                        src="/assets/images/icons/icon-color-facebook.svg"
                        alt="icon-color-facebook"
                      />
                    </a>
                  </li>
                  <li>
                    <a className="linkedin-login" href="https://www.linkedin.com/">
                      <img
                        src="/assets/images/icons/icon-color-linkedin.svg"
                        alt="icon-color-linkedin"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Register Modal */}
      {/* Start Sidebar Cart */}
      <div
        className="offcanvas offcanvas-end ed-sidebar ed-sidebar-cart"
        tabIndex={-1}
        id="edSidebarCart"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="ed-sidebar-header">
          <h3 className="ed-sidebar-header-title">Add to cart</h3>
          <button
            type="button"
            className="text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <i className="fi fi-rr-cross" />
          </button>
        </div>
        <div className="ed-sidebar-body">
          {/* Single Cart Item  */}
          <div className="ed-sidebar-cart-item">
            <div className="ed-sidebar-cart-main">
              <div className="ed-sidebar-cart-img">
                <img src="/assets/images/product/cart-1.png" alt="cart-1" />
              </div>
              <div className="ed-sidebar-cart-info">
                <span>
                  1 x <strong>$64</strong>
                </span>
                <a href="product-details.html">Digital marketing demo</a>
              </div>
            </div>
            <div className="ed-sidebar-cart-remove">
              <button type="button">
                <i className="fi-rr-cross" />
              </button>
            </div>
          </div>
          {/* Single Cart Item  */}
          <div className="ed-sidebar-cart-item">
            <div className="ed-sidebar-cart-main">
              <div className="ed-sidebar-cart-img">
                <img src="/assets/images/product/cart-2.png" alt="cart-2" />
              </div>
              <div className="ed-sidebar-cart-info">
                <span>
                  1 x <strong>$74</strong>
                </span>
                <a href="product-details.html">Business solution book</a>
              </div>
            </div>
            <div className="ed-sidebar-cart-remove">
              <button type="button">
                <i className="fi-rr-cross" />
              </button>
            </div>
          </div>
          {/* Single Cart Item  */}
          <div className="ed-sidebar-cart-item">
            <div className="ed-sidebar-cart-main">
              <div className="ed-sidebar-cart-img">
                <img src="/assets/images/product/cart-3.png" alt="cart-3" />
              </div>
              <div className="ed-sidebar-cart-info">
                <span>
                  1 x <strong>$94</strong>
                </span>
                <a href="product-details.html">Business type</a>
              </div>
            </div>
            <div className="ed-sidebar-cart-remove">
              <button type="button">
                <i className="fi-rr-cross" />
              </button>
            </div>
          </div>
        </div>
        <div className="ed-sidebar-footer">
          <div className="ed-sidebar-cart-subtotal">
            <p>
              Subtotal:<span> $224</span>
            </p>
            <a href="checkout.html" className="ed-sidebar-cart-btn">
              Checkout
            </a>
          </div>
        </div>
      </div>
      {/* End Sidebar Cart */}
      {/* Start Back To Top  */}
      <div className="progress-wrap">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
      {/* End Back To Top */}
    </>

  );
}
