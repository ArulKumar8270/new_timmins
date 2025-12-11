import Image from "next/image";
import Header from "./Components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <div
              className="section-bg hero-bg-2 background-image"
              style={{ backgroundImage: 'url("/assets/images/section-bg-4.png")' }}
            >
              {/* Start Hero Area */}
              <section className="ed-hero">
                <div className="container ed-container-expand">
                  {/* Hero Element Shape */}
                  <div className="ed-hero__elements">
                    <img
                      className="element-move ed-hero__shape-1"
                      src="assets/images/hero/home-1/shape-1.svg"
                      alt="shape-1"
                    />
                    <img
                      className="element-move ed-hero__shape-2"
                      src="assets/images/hero/home-1/shape-2.svg"
                      alt="shape-1"
                    />
                    <img
                      className="element-move ed-hero__shape-3"
                      src="assets/images/hero/home-1/shape-3.svg"
                      alt="shape-1"
                    />
                    <img
                      className="element-move ed-hero__shape-4"
                      src="assets/images/hero/home-1/shape-4.svg"
                      alt="shape-1"
                    />
                    <img
                      className="element-move ed-hero__shape-5"
                      src="assets/images/hero/home-1/shape-5.png"
                      alt="shape-5"
                    />
                  </div>
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                      {/* Hero Content */}
                      <div className="ed-hero__content">
                        <h1 className="ed-hero__content-title ed-split-text left">
                          Best <span>Online</span> Platform to Learn Everything
                        </h1>
                        <p className="ed-hero__content-text">
                          Excedteur sint occaecat cupidatat non proident sunt in culpa qui
                          officia deserunt mollit.
                        </p>
                        <div className="ed-hero__btn">
                          <a href="course-1.html" className="ed-btn">
                            Find Courses
                            <i className="fi fi-rr-arrow-small-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      {/* Hero Image */}
                      <div className="ed-hero__image">
                        <img src="assets/images/hero/home-1/hero-img.png" alt="hero-img" />
                      </div>
                      <div className="col-lg-6 col-12">
                        {/* Hero Image */}
                        <div className="ed-hero__image">
                          <img src="/assets/images/hero/home-1/hero-img.png" alt="hero-img" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* End Hero Area */}
            </div>
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
            <div
              className="section-bg background-image"
              style={{ backgroundImage: 'url("/assets/images/section-bg-5.png")' }}
            >

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
                  <div className="row align-items-center">

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
                  </div>
                </div>
              </section>
              {/* End About Area */}
            </div>
            <>
              {/* Start About Area */}
              <section className="ed-about section-gap position-relative">
                <div className="container ed-container">
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                      {/* About Content  */}
                      <div className="ed-about__content p-0">
                        <div className="ed-section-head">
                          <span className="ed-section-head__sm-title">
                            WHY CHOOSE EDUNA
                          </span>
                          <h3 className="ed-section-head__title ed-split-text left">
                            Digital Online Academy: Your <br />
                            Path to Creative Excellence
                          </h3>
                          <p className="ed-section-head__text">
                            Excedteur sint occaecat cupidatat non proident sunt in culpa qui
                            officia deserunt mollit.
                          </p>
                        </div>
                        <div className="ed-about__feature">
                          <ul className="ed-about__features-list">
                            <li>
                              <img
                                src="assets/images/icons/icon-check-blue.svg"
                                alt="icon-check-blue"
                              />
                              Our Expert Trainers
                            </li>
                            <li>
                              <img
                                src="assets/images/icons/icon-check-blue.svg"
                                alt="icon-check-blue"
                              />
                              Online Remote Learning
                            </li>
                            <li>
                              <img
                                src="assets/images/icons/icon-check-blue.svg"
                                alt="icon-check-blue"
                              />
                              Easy to follow curriculum
                            </li>
                            <li>
                              <img
                                src="assets/images/icons/icon-check-blue.svg"
                                alt="icon-check-blue"
                              />
                              Lifetime Access
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      {/* About Images  */}
                      <div className="ed-about__images">
                        <div className="ed-about__main-img">
                          <img
                            src="assets/images/about/about-3/about-img.png"
                            alt="about-img"
                          />
                        </div>
                        <div className="counter-card updown-ani">
                          <div className="counter-card__icon">
                            <i className="fi fi-rr-graduation-cap" />
                          </div>
                          <div className="counter-card__info">
                            <h4>
                              <span className="counter">3458</span>+
                            </h4>
                            <p>Satisfied Students</p>
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
                                          src="assets/images/course/course-5/1.png"
                                          alt="course-img"
                                        />
                                      </div>

                                    </div>
                                    <div className="ed-course__content">
                                      <span className="ed-course__type">
                                        Face-to-Face
                                      </span>
                                      <a href="course-1.html">
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
                                          src="assets/images/course/course-5/2.png"
                                          alt="course-img"
                                        />
                                      </div>
                                    </div>
                                    <div className="ed-course__content">
                                      <span className="ed-course__type">Face-to-Face</span>
                                      <a href="course-1.html">
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
                                          src="assets/images/course/course-5/3.png"
                                          alt="course-img"
                                        />
                                      </div>

                                    </div>
                                    <div className="ed-course__content">
                                      <span className="ed-course__type">
                                        Online
                                      </span>
                                      <a href="course-1.html">
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
                                          src="assets/images/course/course-5/4.png"
                                          alt="course-img"
                                        />
                                      </div>

                                    </div>
                                    <div className="ed-course__content">
                                      <span className="ed-course__type">Face-to-Face</span>
                                      <a href="course-1.html">
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
                            {/* Tab Two */}
                            <div className="tab-pane fade" id="courseTab2" role="tabpanel">
                              <div className="row">
                                {/* Single Course  */}
                                <div className="col-lg-6 col-12">
                                  <div className="ed-course__card">
                                    <div className="ed-course__image">
                                      <span className="ed-course__price">Free</span>
                                      <div className="ed-course__main-img">
                                        <img
                                          src="assets/images/course/course-5/1.png"
                                          alt="course-img"
                                        />
                                      </div>
                                      <span className="ed-course__category">Business</span>
                                    </div>
                                    <div className="ed-course__content">
                                      <span className="ed-course__type">
                                        Online + Onsite
                                      </span>
                                      <a href="course-1.html">
                                        Explore Our Undergraduate Programs for Future
                                        Leaders
                                      </a>
                                      <p>
                                        Excepteur sint occaecat cupidatat non proident sunt
                                        in culpa qui officia deserunt mollite excepteur
                                        sint.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                {/* Single Course  */}
                                <div className="col-lg-6 col-12">
                                  <div className="ed-course__card">
                                    <div className="ed-course__image">
                                      <span className="ed-course__price">$97</span>
                                      <div className="ed-course__main-img">
                                        <img
                                          src="assets/images/course/course-5/2.png"
                                          alt="course-img"
                                        />
                                      </div>
                                      <span className="ed-course__category">
                                        Motivation
                                      </span>
                                    </div>
                                    <div className="ed-course__content">
                                      <span className="ed-course__type">Only Online</span>
                                      <a href="course-1.html">
                                        Innovative Graduate Degrees for Career Advancement
                                      </a>
                                      <p>
                                        Excepteur sint occaecat cupidatat non proident sunt
                                        in culpa qui officia deserunt mollite excepteur
                                        sint.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                {/* Single Course  */}
                                <div className="col-lg-6 col-12">
                                  <div className="ed-course__card">
                                    <div className="ed-course__image">
                                      <span className="ed-course__price">$38</span>
                                      <div className="ed-course__main-img">
                                        <img
                                          src="assets/images/course/course-5/3.png"
                                          alt="course-img"
                                        />
                                      </div>
                                      <span className="ed-course__category">Design</span>
                                    </div>
                                    <div className="ed-course__content">
                                      <span className="ed-course__type">
                                        Online + Onsite
                                      </span>
                                      <a href="course-1.html">
                                        Undergraduate Courses Shaping Tomorrow Visionaries
                                      </a>
                                      <p>
                                        Excepteur sint occaecat cupidatat non proident sunt
                                        in culpa qui officia deserunt mollite excepteur
                                        sint.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                {/* Single Course  */}
                                <div className="col-lg-6 col-12">
                                  <div className="ed-course__card">
                                    <div className="ed-course__image">
                                      <span className="ed-course__price">$63</span>
                                      <div className="ed-course__main-img">
                                        <img
                                          src="assets/images/course/course-5/4.png"
                                          alt="course-img"
                                        />
                                      </div>
                                      <span className="ed-course__category">Marketing</span>
                                    </div>
                                    <div className="ed-course__content">
                                      <span className="ed-course__type">Onsite</span>
                                      <a href="course-1.html">
                                        Graduate Programs Designed for Real-World Success
                                      </a>
                                      <p>
                                        Excepteur sint occaecat cupidatat non proident sunt
                                        in culpa qui officia deserunt mollite excepteur
                                        sint.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* Tab Three */}
                            <div className="tab-pane fade" id="courseTab3" role="tabpanel">
                              <div className="row">
                                {/* Single Course  */}
                                <div className="col-lg-6 col-12">
                                  <div className="ed-course__card">
                                    <div className="ed-course__image">
                                      <span className="ed-course__price">Free</span>
                                      <div className="ed-course__main-img">
                                        <img
                                          src="assets/images/course/course-5/1.png"
                                          alt="course-img"
                                        />
                                      </div>
                                      <span className="ed-course__category">Business</span>
                                    </div>
                                    <div className="ed-course__content">
                                      <span className="ed-course__type">
                                        Online + Onsite
                                      </span>
                                      <a href="course-1.html">
                                        Explore Our Undergraduate Programs for Future
                                        Leaders
                                      </a>
                                      <p>
                                        Excepteur sint occaecat cupidatat non proident sunt
                                        in culpa qui officia deserunt mollite excepteur
                                        sint.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                {/* Single Course  */}
                                <div className="col-lg-6 col-12">
                                  <div className="ed-course__card">
                                    <div className="ed-course__image">
                                      <span className="ed-course__price">$97</span>
                                      <div className="ed-course__main-img">
                                        <img
                                          src="assets/images/course/course-5/2.png"
                                          alt="course-img"
                                        />
                                      </div>
                                      <span className="ed-course__category">
                                        Motivation
                                      </span>
                                    </div>
                                    <div className="ed-course__content">
                                      <span className="ed-course__type">Only Online</span>
                                      <a href="course-1.html">
                                        Innovative Graduate Degrees for Career Advancement
                                      </a>
                                      <p>
                                        Excepteur sint occaecat cupidatat non proident sunt
                                        in culpa qui officia deserunt mollite excepteur
                                        sint.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                {/* Single Course  */}
                                <div className="col-lg-6 col-12">
                                  <div className="ed-course__card">
                                    <div className="ed-course__image">
                                      <span className="ed-course__price">$38</span>
                                      <div className="ed-course__main-img">
                                        <img
                                          src="assets/images/course/course-5/3.png"
                                          alt="course-img"
                                        />
                                      </div>
                                      <span className="ed-course__category">Design</span>
                                    </div>
                                    <div className="ed-course__content">
                                      <span className="ed-course__type">
                                        Online + Onsite
                                      </span>
                                      <a href="course-1.html">
                                        Undergraduate Courses Shaping Tomorrow Visionaries
                                      </a>
                                      <p>
                                        Excepteur sint occaecat cupidatat non proident sunt
                                        in culpa qui officia deserunt mollite excepteur
                                        sint.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                {/* Single Course  */}
                                <div className="col-lg-6 col-12">
                                  <div className="ed-course__card">
                                    <div className="ed-course__image">
                                      <span className="ed-course__price">$63</span>
                                      <div className="ed-course__main-img">
                                        <img
                                          src="assets/images/course/course-5/4.png"
                                          alt="course-img"
                                        />
                                      </div>
                                      <span className="ed-course__category">Marketing</span>
                                    </div>
                                    <div className="ed-course__content">
                                      <span className="ed-course__type">Onsite</span>
                                      <a href="course-1.html">
                                        Graduate Programs Designed for Real-World Success
                                      </a>
                                      <p>
                                        Excepteur sint occaecat cupidatat non proident sunt
                                        in culpa qui officia deserunt mollite excepteur
                                        sint.
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
                      </div>
                      <div className="ed-course__body">
                        <a href="course-details.html" className="ed-course__title">
                          <h5>
                            Fresh Graduate Onboarding - Semiconductor Engineering
                          </h5>
                        </a>
                        <div className="ed-course__rattings">

                          <span>A 10-year partnership enabling 3,000+ engineers to become project-ready in embedded, mobile, 5G, AI, and RF.</span>

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
                      </div>
                      <div className="ed-course__body">

                        <a href="course-details.html" className="ed-course__title">
                          <h5>AI Transformation - Banking Sector (DBS & Citi)</h5>
                        </a>
                        <div className="ed-course__rattings">
                          <span>7-year capability development in applied AI, analytics, and automation — 50–80% performance improvement.</span>
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

                      </div>
                      <div className="ed-course__body">
                        <div className="ed-course__lesson">

                        </div>
                        <a href="course-details.html" className="ed-course__title">
                          <h5>
                            Mobile Development Enablement - Motorola
                          </h5>
                        </a>
                        <div className="ed-course__rattings">

                          <span>Mobile Development Enablement - Motorola</span>

                        </div>
                        <div className="ed-course__bottom">

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

            {/* Start Why Choose Area */}
            <section className="ed-why-choose ed-why-choose--style2 section-gap position-relative">
              <div className="container ed-container position-relative">
                <div className="ed-w-choose__content">
                  <div className="row g-0">
                    <div className="col-lg-6 col-12">
                      <div className="ed-section-head">

                        <h3 className="ed-section-head__title ed-split-text right">
                          A Decade of Engineering Impact
                        </h3>

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
                </div>
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


            <>
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
                            src="assets/images/partner/partner-1/1.svg"
                            alt="brand-logo"
                          />
                        </a>
                        {/* Single Slider  */}
                        <a href="#" target="_blank" className="ed-parnet__brand-logo">
                          <img
                            src="assets/images/partner/partner-1/2.svg"
                            alt="brand-logo"
                          />
                        </a>
                        {/* Single Slider  */}
                        <a href="#" target="_blank" className="ed-parnet__brand-logo">
                          <img
                            src="assets/images/partner/partner-1/3.svg"
                            alt="brand-logo"
                          />
                        </a>
                        {/* Single Slider  */}
                        <a href="#" target="_blank" className="ed-parnet__brand-logo">
                          <img
                            src="assets/images/partner/partner-1/4.svg"
                            alt="brand-logo"
                          />
                        </a>
                        {/* Single Slider  */}
                        <a href="#" target="_blank" className="ed-parnet__brand-logo">
                          <img
                            src="assets/images/partner/partner-1/5.svg"
                            alt="brand-logo"
                          />
                        </a>
                        {/* Single Slider  */}
                        <a href="#" target="_blank" className="ed-parnet__brand-logo">
                          <img
                            src="assets/images/partner/partner-1/6.svg"
                            alt="brand-logo"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* End Partner Area */}
            </>

            <div className="section-bg position-relative">
              <div className="section-bg__img style-2">
                <img src="/assets/images/section-bg-6.png" alt="bg-img" />
              </div>
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
            {/* Start Faq Area */}
            <section className="ed-faq section-gap position-relative">
              <div className="container ed-container">
                <div className="ed-faq__inner position-relative">
                  <div className="ed-section-head m-0">
                    <span className="ed-section-head__sm-title">
                      FREQUENTLY ASKED QUESTIONS
                    </span>
                    <h3 className="ed-section-head__title ed-split-text right">
                      Most Popular Questions About Our Online Courses
                    </h3>
                  </div>
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

                          <h3 className="ed-section-head__title">
                            Let’s Build Your Team’s Next Capability
                          </h3>
                          <p className="ed-section-head__text">
                            Whether you're planning a new AI initiative, upgrading your embedded systems team, or preparing engineers for new 5G requirements; we’re here to help.
                          </p>
                        </div>
                        <div className="ed-call-action__content-btn">
                          <a href="course-1.html" className="ed-btn">
                            {" "}
                            Book a Consultation
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



                </div>
                <div className="container ed-container">
                  <div className="row g-0">
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="ed-footer__widget ed-footer__about">
                        <a href="index.html" className="ed-footer__logo">
                          <img src="/assets/Timmins-img/logo.png" alt="footer-logo" />
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
                            <a href="about-1.html">Home</a>
                          </li>
                          <li>
                            <a href="course-1.html">About</a>
                          </li>
                          <li>
                            <a href="#">Solution</a>
                          </li>
                          <li>
                            <a href="contact.html">Course</a>
                          </li>
                          <li>
                            <a href="blog.html">Training Calender</a>
                          </li>
                          <li>
                            <a href="faq.html">Resources</a>
                          </li>
                          <li>
                            <a href="faq.html">Contact</a>
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
        </div >
      </div >
      {/* Start Login Modal */}
    </>

  );
}
