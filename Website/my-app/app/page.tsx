import Image from "next/image";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
export default function Home() {
  return (
    <>
      <div id="page" className="page_wapper hfeed site">
        <Header />
        {/*===============PAGE CONTENT ==============*/}
        {/*===============PAGE CONTENT ==============*/}
        <div id="content" className="site-content ">
          {/*-slider--*/}
          <section className="slider style_one pag_position_two">
            <div
              className="banner_carousel owl-carousel owl_nav_none owl_dots_block theme_carousel owl-theme"
              data-options='{"loop": true, "margin": 0, "autoheight":true, "lazyload":true, "nav": true, "dots": true, "autoplay": true, "autoplayTimeout": 7000, "smartSpeed": 1800, "responsive":{ "0" :{ "items": "1" }, "768" :{ "items" : "1" } , "1000":{ "items" : "1" }}}'
            >
              <div className="slide-item">
                <div className="slide-item-content content_left">
                  <div
                    className="image-layer"
                    style={{
                      backgroundImage:
                        "url(assets/images/sliders/slider-2-bg.jpg)"
                    }}
                  />
                  <div className="auto-container">
                    <div className="d-flex align-items-center">
                      <div className="col-lg-7 col-md-12  col-sm-12 col-xs-12">
                        <div className="slider_content">
                          <h1>Building Future-Ready Engineering & Tech Teams</h1>
                          <h6>HRDC Claimable Trainingavailable for Malaysian employers</h6>
                          <p className="description">
                            Timmins is a practitioner-led, engineering-grade capability partner helping organizations scale skills in AI, Embedded Systems, 5G, and enterprise agility.
                          </p>
                          <p>For 10+ years, we've enabled teams across Malaysia, ASEAN, US, and Canada to stay competitive in a fast-moving technology landscape.</p>
                          <a
                            href="#"
                            target="_blank"
                            rel="nofollow"
                            className="theme-btn one  animated _zoomIn mr-3"
                          >
                            For Companies - Explore Solutions
                          </a>
                          <a
                            href="#"
                            target="_blank"
                            rel="nofollow"
                            className="theme-btn one  animated _zoomIn"
                          >
                            For Individuals - Explore Public Classes
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-12  col-sm-12 col-xs-12 image_column">
                        <div className="slider_image">
                          <img
                            src="assets/images/sliders/slider-2-1.png"
                            className="img-fluid"
                            alt="slider image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*-slider-end--*/}
          {/*-service--*/}
          <section className="service-section-one bg_light_1">
            {/*===============spacing==============*/}
            <div className="pd_top_80" />
            {/*===============spacing==============*/}
            <div className="container">
              <div className="row">
                <div className="title_all_box style_one text-center dark_color">
                  <div className="title_sections">
                    <div className="before_title"> Learn the Way That Fits You
                    </div>
                    <h2>Whether you're an organization building full-team capability or an individual upgrading your technical career, Timmins offers two learning paths:

                    </h2>
                  </div>
                  {/*===============spacing==============*/}
                  <div className="pd_bottom_20" />
                  {/*===============spacing==============*/}
                </div>
                <div className="invisible_normal_spacing" />
                <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                  <div className="service_box style_four dark_color">
                    <div className="service_content">
                      <div className="image_box">
                        <img
                          src="assets/images/projects/project-6-img.jpg"
                          className="img-fluid"
                          alt="Service Image"
                        />
                        <span className="icon-video-player" />
                      </div>
                      <div className="content_inner">
                        <h2>
                          <a href="#">Chat With a Live</a>
                        </h2>
                        <p>Live Chat</p>
                      </div>
                    </div>
                  </div>
                  {/*===============spacing==============*/}
                  <div className="mr_bottom_30" />
                  {/*===============spacing==============*/}
                </div>
                <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                  <div className="service_box style_four dark_color">
                    <div className="service_content">
                      <div className="image_box">
                        <img
                          src="assets/images/about/about-12.jpg"
                          className="img-fluid"
                          alt="Service Image"
                        />
                        <span className="icon-businessman-1" />
                      </div>
                      <div className="content_inner">
                        <h2>
                          <a href="#">Ask Professionals</a>
                        </h2>
                        <p>our Team</p>
                      </div>
                    </div>
                  </div>
                  {/*===============spacing==============*/}
                  <div className="mr_bottom_30" />
                  {/*===============spacing==============*/}
                </div>
                <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                  <div className="service_box style_four dark_color">
                    <div className="service_content">
                      <div className="image_box">
                        <img
                          src="assets/images/blog/blog-image-10.jpg"
                          className="img-fluid"
                          alt="Service Image"
                        />
                        <span className=" icon-development" />
                      </div>
                      <div className="content_inner">
                        <h2>
                          <a href="#">Support to Grow</a>
                        </h2>
                        <p>User Guides</p>
                      </div>
                    </div>
                  </div>
                  {/*===============spacing==============*/}
                  <div className="mr_bottom_30" />
                  {/*===============spacing==============*/}
                </div>
              </div>
            </div>
            {/*===============spacing==============*/}
            <div className="pd_bottom_60" />
            {/*===============spacing==============*/}
          </section>
          {/*-service end--*/}
          {/*-image-box-section--*/}
          <section className="image-box-section">
            {/*===============spacing==============*/}
            <div className="pd_top_80" />
            {/*===============spacing==============*/}
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-12 mb-5 mb-lg-5 mb-xl-0">
                  <div className="image_boxes style_three">
                    <img
                      src="assets/images/about/about-8.jpg"
                      className="img-fluid height_500 object-fit-cover"
                      alt="image"
                    />
                    <div className="video_box">
                      <a
                        href="https://www.youtube.com/embed/-VK0axfge4A"
                        className="lightbox-image"
                      >
                        <i className="icon-play" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-12">
                  <div className="title_all_box style_one dark_color">
                    <div className="title_sections ">
                      <div className="before_title"> Dedicated Team </div>
                      <h2>Professional Individuals</h2>
                      <p>
                        Our power of choice is untrammelled and when nothing
                        prevents being able to do what we like best every
                        pleasure.
                      </p>
                    </div>
                  </div>
                  <div className="progress_bar style_two">
                    <div className="progress_new">
                      <div
                        className="ProgressBar ProgressBar--animateText"
                        data-progress={84}
                      >
                        <svg
                          className="ProgressBar-contentCircle"
                          height={170}
                          width={170}
                        >
                          <circle
                            className="ProgressBar-background"
                            cx={85}
                            cy={85}
                            r={75}
                          />
                          <circle
                            transform="rotate(-90, 85, 85)"
                            className="ProgressBar-circle"
                            cx={85}
                            cy={85}
                            r={75}
                            style={{
                              strokeDasharray: 471,
                              strokeDashoffset: "75.36px"
                            }}
                          />
                        </svg>
                      </div>
                      <div className="progress-value">
                        <div>
                          <h6>Year of 2020 </h6>
                        </div>
                      </div>
                    </div>
                    <div className="content_box">
                      <h2>84%</h2>
                      <h3>Income Statement </h3>
                      <p>
                        Certain circumstances seds owing to the claims duty
                        righteous indignation and so beguiled.{" "}
                      </p>
                    </div>
                  </div>
                  {/*===============spacing==============*/}
                  <div className="pd_top_30" />
                  {/*===============spacing==============*/}
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12">
                      <div className="theme_btn_all color_one">
                        <a
                          href="#"
                          target="_blank"
                          rel="nofollow"
                          className="theme-btn one"
                        >
                          {" "}
                          Download{" "}
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-12">
                      <div className="extra_content image_with_content dark_color">
                        <div className="simple_image">
                          <img src="assets/images/cuntry-1.png" alt="img" />
                          <h2>
                            {" "}
                            Since 1998,
                            <br />
                            Operating in Birmingham.
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*===============spacing==============*/}
            <div className="pd_bottom_80" />
            {/*===============spacing==============*/}
          </section>
          {/*-image-box-section-end--*/}
          {/*-client--*/}
          <section className="client-brand-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="client_logo_carousel type_one">
                    <div
                      className="swiper-container"
                      data-swiper='{
                  "autoplay": {
                    "delay": 6000
                  },
                  "freeMode": true,
                  "loop": true,
                  "speed": 1000,
                  "centeredSlides": false,
                  "slidesPerView": 4,
                  "spaceBetween": 30,
                  "pagination": {
                    "el": ".swiper-pagination",
                    "clickable": true
                  },
                  "navigation": {
                    "nextEl": ".swiper-button-next",
                    "prevEl": ".swiper-button-prev"
                  },
                  "breakpoints": {
                     "1200": {
                        "slidesPerView": 4 
                     },
                     "1024": {
                      "slidesPerView": 3 
                     },
                    "768": {
                      "slidesPerView": 2 
                    },
                    "576": {
                      "slidesPerView": 1 
                    },
                    "0": {
                      "slidesPerView": 1 
                    }
                  }
                }'
                    >
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <div className="image">
                            <img
                              src="assets/images/CLIENT-logo-1.png"
                              alt="clients-logo"
                            />
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="image">
                            <img
                              src="assets/images/CLIENT-logo-2.png"
                              alt="clients-logo"
                            />
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="image">
                            <img
                              src="assets/images/CLIENT-logo-3.png"
                              alt="clients-logo"
                            />
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="image">
                            <img
                              src="assets/images/CLIENT-logo-4.png"
                              alt="clients-logo"
                            />
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="image">
                            <img
                              src="assets/images/CLIENT-logo-1.png"
                              alt="clients-logo"
                            />
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="image">
                            <img
                              src="assets/images/CLIENT-logo-2.png"
                              alt="clients-logo"
                            />
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="image">
                            <img
                              src="assets/images/CLIENT-logo-3.png"
                              alt="clients-logo"
                            />
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="image">
                            <img
                              src="assets/images/CLIENT-logo-4.png"
                              alt="clients-logo"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*===============spacing==============*/}
            <div className="pd_bottom_80" />
            {/*===============spacing==============*/}
          </section>
          {/*-client-end--*/}
          {/*-service two--*/}
          <section className="service-section-two bg_light_1">
            {/*===============spacing==============*/}
            <div className="pd_top_80" />
            {/*===============spacing==============*/}
            <div className="container pd_zero">
              <div className="row">
                <div className="col-lg-12">
                  <div className="title_all_box style_one text-center  dark_color">
                    <div className="title_sections">
                      <div className="before_title"> Making What’s </div>
                      <h2>Possible in Human Resource</h2>
                    </div>
                  </div>
                </div>
                {/*===============spacing==============*/}
                <div className="mr_bottom_70" />
                {/*===============spacing==============*/}
              </div>
              <div className="row gutter_15px">
                <div className="col-xl-3 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                  <div className="service_box style_three dark_color">
                    <div className="service_content">
                      <div className="content_inner">
                        <span className="icon-dollar">
                          <i />
                        </span>
                        <small className="nom">01</small>
                        <h2>
                          <a href="#">Employee Compensation </a>
                        </h2>
                        <p>
                          Holds in these matters principles selection right
                          rejects.
                        </p>
                        <a href="#" className="read_more">
                          Read more <i className="icon-right-arrow" />
                        </a>
                      </div>
                    </div>
                  </div>
                  {/*===============spacing==============*/}
                  <div className="mr_bottom_30" />
                  {/*===============spacing==============*/}
                </div>
                <div className="col-xl-3 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                  <div className="service_box style_three dark_color">
                    <div className="service_content">
                      <div className="content_inner">
                        <span className="icon-pharmacy">
                          <i />
                        </span>
                        <small className="nom">02</small>
                        <h2>
                          <a href="#">Health Care Benefits</a>
                        </h2>
                        <p>
                          The great explorer of the truth the master builders
                          human happiness.
                        </p>
                        <a href="#" className="read_more">
                          Read more <i className="icon-right-arrow" />
                        </a>
                      </div>
                    </div>
                  </div>
                  {/*===============spacing==============*/}
                  <div className="mr_bottom_30" />
                  {/*===============spacing==============*/}
                </div>
                <div className="col-xl-3 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                  <div className="service_box style_three dark_color">
                    <div className="service_content">
                      <div className="content_inner">
                        <span className="icon-service">
                          <i />
                        </span>
                        <small className="nom">03</small>
                        <h2>
                          <a href="#">Talent Management</a>
                        </h2>
                        <p>
                          Laborious physo except obtains some advantage from it
                          right.
                        </p>
                        <a href="#" className="read_more">
                          Read more <i className="icon-right-arrow" />
                        </a>
                      </div>
                    </div>
                  </div>
                  {/*===============spacing==============*/}
                  <div className="mr_bottom_30" />
                  {/*===============spacing==============*/}
                </div>
                <div className="col-xl-3 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                  <div className="service_box style_three dark_color">
                    <div className="service_content">
                      <div className="content_inner">
                        <span className=" icon-dollar">
                          <i />
                        </span>
                        <small className="nom">04</small>
                        <h2>
                          <a href="#">Risk Management</a>
                        </h2>
                        <p>
                          Right to find fault with a mans who chooses enjoy has no
                          annoying.
                        </p>
                        <a href="#" className="read_more">
                          Read more <i className="icon-right-arrow" />
                        </a>
                      </div>
                    </div>
                  </div>
                  {/*===============spacing==============*/}
                  <div className="mr_bottom_30" />
                  {/*===============spacing==============*/}
                </div>
              </div>
            </div>
            {/*===============spacing==============*/}
            <div className="pd_bottom_50" />
            {/*===============spacing==============*/}
          </section>
          {/*-service two end--*/}
          {/*-team--*/}
          <section className="team-section">
            {/*===============spacing==============*/}
            <div className="pd_top_80" />
            {/*===============spacing==============*/}
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="title_all_box style_one text-center dark_color">
                    <div className="title_sections">
                      <div className="before_title"> Dedicated Team</div>
                      <h2>Professional Individuals</h2>
                    </div>
                  </div>
                  {/*===============spacing==============*/}
                  <div className="pd_bottom_20" />
                  {/*===============spacing==============*/}
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                  <div className="team_box style_one">
                    <div className="team_box_outer">
                      <div className="member_image">
                        <img
                          src="assets/images/team/team-1.jpg"
                          alt="team image"
                        />
                      </div>
                      <div className="about_member">
                        <div className="share_media">
                          <ul className="first">
                            <li className="text">Share</li>
                            <li>
                              <i className="fa fa-share-alt" />
                            </li>
                          </ul>
                          <ul>
                            <li className="shar_alt">
                              <i className="fa fa-share-alt" />
                            </li>
                            <li>
                              <a href="#">
                                {" "}
                                <i className="fa fa-facebook"> </i>{" "}
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                {" "}
                                <i className="fa fa-twitter"> </i>{" "}
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                {" "}
                                <i className="fa fa-skype"> </i>{" "}
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                {" "}
                                <i className="fa fa-instagram"> </i>{" "}
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="authour_details">
                          <span>Director </span>
                          <h6>Amelia Margaret</h6>
                          <div className="button_view">
                            <a
                              href="#"
                              target="_blank"
                              rel="nofollow"
                              className="theme-btn one"
                            >
                              {" "}
                              View Profile
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*===============spacing==============*/}
                  <div className="mr_bottom_20" />
                  {/*===============spacing==============*/}
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                  <div className="team_box style_one">
                    <div className="team_box_outer">
                      <div className="member_image">
                        <img
                          src="assets/images/team/team-2.jpg"
                          alt="team image"
                        />
                      </div>
                      <div className="about_member">
                        <div className="share_media">
                          <ul className="first">
                            <li className="text">Share</li>
                            <li>
                              <i className="fa fa-share-alt" />
                            </li>
                          </ul>
                          <ul>
                            <li className="shar_alt">
                              <i className="fa fa-share-alt" />
                            </li>
                            <li>
                              <a href="#">
                                {" "}
                                <i className="fa fa-facebook"> </i>{" "}
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                {" "}
                                <i className="fa fa-twitter"> </i>{" "}
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                {" "}
                                <i className="fa fa-skype"> </i>{" "}
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                {" "}
                                <i className="fa fa-instagram"> </i>{" "}
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="authour_details">
                          <span>Team Leader </span>
                          <h6>Andrew Cameron</h6>
                          <div className="button_view">
                            <a
                              href="#"
                              target="_blank"
                              rel="nofollow"
                              className="theme-btn one"
                            >
                              {" "}
                              View Profile
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*===============spacing==============*/}
                  <div className="mr_bottom_20" />
                  {/*===============spacing==============*/}
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                  <div className="team_box style_one">
                    <div className="team_box_outer">
                      <div className="member_image">
                        <img
                          src="assets/images/team/team-3.png"
                          alt="team image"
                        />
                      </div>
                      <div className="about_member">
                        <div className="share_media">
                          <ul className="first">
                            <li className="text">Share</li>
                            <li>
                              <i className="fa fa-share-alt" />
                            </li>
                          </ul>
                          <ul>
                            <li className="shar_alt">
                              <i className="fa fa-share-alt" />
                            </li>
                            <li>
                              <a href="#">
                                {" "}
                                <i className="fa fa-facebook"> </i>{" "}
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                {" "}
                                <i className="fa fa-twitter"> </i>{" "}
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                {" "}
                                <i className="fa fa-skype"> </i>{" "}
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                {" "}
                                <i className="fa fa-instagram"> </i>{" "}
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="authour_details">
                          <span>Manager </span>
                          <h6>Sofia Charlotte</h6>
                          <div className="button_view">
                            <a
                              href="#"
                              target="_blank"
                              rel="nofollow"
                              className="theme-btn one"
                            >
                              {" "}
                              View Profile
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*===============spacing==============*/}
                  <div className="mr_bottom_20" />
                  {/*===============spacing==============*/}
                </div>
              </div>
            </div>
            {/*===============spacing==============*/}
            <div className="pd_bottom_80" />
            {/*===============spacing==============*/}
          </section>
          {/*-team-end-*/}
          {/*-tab--*/}
          <section
            className="tab-section bg_op_1"
            style={{ backgroundImage: "url(assets/images/tab-sec-bg.jpg)" }}
          >
            {/*===============spacing==============*/}
            <div className="pd_top_100" />
            {/*===============spacing==============*/}
            <div className="container">
              <div className="row">
                <div className="tabs_all_box  tabs_all_box_start type_one">
                  <div className="tab_over_all_box">
                    <div className="tabs_header clearfix">
                      <ul className="showcase_tabs_btns nav-pills nav   clearfix">
                        <li className="nav-item">
                          <a
                            className="s_tab_btn nav-link active"
                            data-tab="#tabtabone"
                          >
                            01. Affordable
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="s_tab_btn nav-link" data-tab="#tabtabtwo">
                            02. Knowledge
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="s_tab_btn nav-link"
                            data-tab="#tabtabthree"
                          >
                            03. Saves Time
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="s_tab_btn nav-link"
                            data-tab="#tabtabtfour"
                          >
                            04. Fast &amp; Quality
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="s_tab_btn nav-link"
                            data-tab="#tabtabfive"
                          >
                            05. Experienced
                          </a>
                        </li>
                      </ul>
                      <div className="toll_free">
                        <a href="tel:180667586677">
                          {" "}
                          <i className="icon-phone-call" />
                          Call For Free Consultation
                        </a>
                      </div>
                    </div>
                    <div className="s_tab_wrapper">
                      <div className="s_tabs_content">
                        <div
                          className="s_tab fade active-tab show"
                          id="tabtabone"
                        >
                          <div
                            className="tab_content one"
                            style={{
                              backgroundImage: "url(assets/images/tab-image.jpg)"
                            }}
                          >
                            <div className="content_image">
                              <h6>Why Creote</h6>
                              <h2>Affordable &amp; Flexible</h2>
                              <p>
                                Must explain too you how all this mistaken idea of
                                denouncing pleasures praising pain was born and we
                                will give you complete account of the system the
                                actual teachings of the great explorer.
                              </p>
                              <a
                                href="#"
                                target="_blank"
                                rel="nofollow"
                                className="rd_more"
                              >
                                Read More <i className="icon-right-arrow" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="s_tab fade" id="tabtabtwo">
                          <div
                            className="tab_content one"
                            style={{
                              backgroundImage:
                                "url(assets/images/blog/blog-image-8.jpg)"
                            }}
                          >
                            <div className="content_image">
                              <h6>Why Creote</h6>
                              <h2>Affordable &amp; Flexible</h2>
                              <p>
                                Must explain too you how all this mistaken idea of
                                denouncing pleasures praising pain was born and we
                                will give you complete account of the system the
                                actual teachings of the great explorer.
                              </p>
                              <a
                                href="#"
                                target="_blank"
                                rel="nofollow"
                                className="rd_more"
                              >
                                Read More <i className="icon-right-arrow" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="s_tab fade" id="tabtabthree">
                          <div
                            className="tab_content one"
                            style={{
                              backgroundImage:
                                "url(assets/images/about/about-4.jpg)"
                            }}
                          >
                            <div className="content_image">
                              <h6>Why Creote</h6>
                              <h2>Affordable &amp; Flexible</h2>
                              <p>
                                Must explain too you how all this mistaken idea of
                                denouncing pleasures praising pain was born and we
                                will give you complete account of the system the
                                actual teachings of the great explorer.
                              </p>
                              <a
                                href="#"
                                target="_blank"
                                rel="nofollow"
                                className="rd_more"
                              >
                                Read More <i className="icon-right-arrow" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="s_tab fade" id="tabtabtfour">
                          <div
                            className="tab_content one"
                            style={{
                              backgroundImage:
                                "url(assets/images/about/about-2.jpg)"
                            }}
                          >
                            <div className="content_image">
                              <h6>Why Creote</h6>
                              <h2>Affordable &amp; Flexible</h2>
                              <p>
                                Must explain too you how all this mistaken idea of
                                denouncing pleasures praising pain was born and we
                                will give you complete account of the system the
                                actual teachings of the great explorer.
                              </p>
                              <a
                                href="#"
                                target="_blank"
                                rel="nofollow"
                                className="rd_more"
                              >
                                Read More <i className="icon-right-arrow" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="s_tab fade" id="tabtabfive">
                          <div
                            className="tab_content one"
                            style={{
                              backgroundImage:
                                "url(assets/images/about/about-3.jpg)"
                            }}
                          >
                            <div className="content_image">
                              <h6>Why Creote</h6>
                              <h2>Affordable &amp; Flexible</h2>
                              <p>
                                Must explain too you how all this mistaken idea of
                                denouncing pleasures praising pain was born and we
                                will give you complete account of the system the
                                actual teachings of the great explorer.
                              </p>
                              <a
                                href="#"
                                target="_blank"
                                rel="nofollow"
                                className="rd_more"
                              >
                                Read More <i className="icon-right-arrow" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*===============spacing==============*/}
            <div className="pd_bottom_90" />
            {/*===============spacing==============*/}
          </section>
          {/*-tab-end-*/}
          {/*-price-tab-*/}
          <section className="price-plan-tab-section">
            {/*===============spacing==============*/}
            <div className="pd_top_80" />
            {/*===============spacing==============*/}
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="title_all_box style_one text-center dark_color">
                    <div className="title_sections">
                      <div className="before_title"> Flexible Plan</div>
                      <h2>Perfect for Small &amp; Large Brands</h2>
                    </div>
                  </div>
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_30" />
                {/*===============spacing==============*/}
              </div>
              <div className="row gutter_30px">
                <div className="col-lg-12">
                  <div className="price_plan_with_tab price_tb_style_one">
                    <div className="tab_pricing_list">
                      <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link active"
                            id="home-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#home"
                            type="button"
                            role="tab"
                            aria-controls="home"
                            aria-selected="true"
                          >
                            Monthly
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="profile-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#profile"
                            type="button"
                            role="tab"
                            aria-controls="profile"
                            aria-selected="false"
                          >
                            Anually
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div
                      className="tab-content price_tab_content"
                      id="myTabContent"
                    >
                      <div
                        className="tab-pane fade active show"
                        id="home"
                        role="tabpanel"
                        aria-labelledby="home-tab"
                      >
                        <div className="row">
                          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="price_plan_box style_one ">
                              <div className="inner_box">
                                <div className="top">
                                  <h2>Bronze Package</h2>
                                  <p>Pricing plan for startup company</p>
                                </div>
                                <div className="mid">
                                  <h4>
                                    149<span>$</span>
                                  </h4>
                                  <p>
                                    Loves or pursues or desires obtain pain of
                                    itself is pain occasionally.
                                  </p>
                                </div>
                                <div className="bottom">
                                  <ul>
                                    <li>
                                      <span> 4-5 Weeks from to finish</span>
                                      <i className="fa fa-check" />
                                    </li>
                                    <li>
                                      <span> Data sprint</span>
                                      <i className="fa fa-times" />
                                    </li>
                                    <li>
                                      <span> Results revision</span>
                                      <i className="fa fa-times" />
                                    </li>
                                    <li>
                                      <span> 20 Days of support</span>
                                      <i className="fa fa-times" />
                                    </li>
                                    <li>
                                      <span> Organisational Strategy</span>
                                      <i className="fa fa-times" />
                                    </li>
                                  </ul>
                                  <a
                                    href="#"
                                    target="_blank"
                                    rel="nofollow"
                                    className="theme-btn two"
                                  >
                                    Get Now
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="price_plan_box style_one tag_enables">
                              <div className="tag">Popular</div>
                              <div className="inner_box">
                                <div className="top">
                                  <h2>Silver Package</h2>
                                  <p>Pricing plan for startup company</p>
                                </div>
                                <div className="mid">
                                  <h4>
                                    249<span>$</span>
                                  </h4>
                                  <p>
                                    Loves or pursues or desires obtain pain of
                                    itself is pain occasionally.
                                  </p>
                                </div>
                                <div className="bottom">
                                  <ul>
                                    <li>
                                      <span> 4-5 Weeks from to finish</span>
                                      <i className="fa fa-check" />
                                    </li>
                                    <li>
                                      <span> Data sprint</span>
                                      <i className="fa fa-check" />
                                    </li>
                                    <li>
                                      <span> Results revision</span>
                                      <i className="fa fa-times" />
                                    </li>
                                    <li>
                                      <span> 20 Days of support</span>
                                      <i className="fa fa-times" />
                                    </li>
                                    <li>
                                      <span> Organisational Strategy</span>
                                      <i className="fa fa-times" />
                                    </li>
                                  </ul>
                                  <a
                                    href="#"
                                    target="_blank"
                                    rel="nofollow"
                                    className="theme-btn two"
                                  >
                                    Get Now
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="price_plan_box style_one">
                              <div className="inner_box">
                                <div className="top">
                                  <h2>Gold Package</h2>
                                  <p>Pricing plan for startup company</p>
                                </div>
                                <div className="mid">
                                  <h4>
                                    349<span>$</span>
                                  </h4>
                                  <p>
                                    Loves or pursues or desires obtain pain of
                                    itself is pain occasionally.
                                  </p>
                                </div>
                                <div className="bottom">
                                  <ul>
                                    <li>
                                      <span> 4-5 Weeks from to finish</span>
                                      <i className="fa fa-check" />
                                    </li>
                                    <li>
                                      <span> Data sprint</span>
                                      <i className="fa fa-check" />
                                    </li>
                                    <li>
                                      <span> Results revision</span>
                                      <i className="fa fa-check" />
                                    </li>
                                    <li>
                                      <span> 20 Days of support</span>
                                      <i className="fa fa-check" />
                                    </li>
                                    <li>
                                      <span> Organisational Strategy</span>
                                      <i className="fa fa-check" />
                                    </li>
                                  </ul>
                                  <a
                                    href="#"
                                    target="_blank"
                                    rel="nofollow"
                                    className="theme-btn two"
                                  >
                                    Get Now
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="profile"
                        role="tabpanel"
                        aria-labelledby="profile-tab"
                      >
                        <div className="row">
                          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="price_plan_box style_one">
                              <div className="inner_box">
                                <div className="top">
                                  <h2>Bronze Package </h2>
                                  <p>Pricing plan for startup company</p>
                                </div>
                                <div className="mid">
                                  <h4>
                                    349<span>$</span>
                                  </h4>
                                  <p>
                                    Loves or pursues or desires obtain pain of
                                    itself is pain occasionally.
                                  </p>
                                </div>
                                <div className="bottom">
                                  <ul>
                                    <li>
                                      <span> 4-5 Weeks from to finish</span>
                                      <i className="fa fa-check" />
                                    </li>
                                    <li>
                                      <span> Data sprint</span>
                                      <i className="fa fa-check" />
                                    </li>
                                    <li>
                                      <span> Results revision</span>
                                      <i className="fa fa-check" />
                                    </li>
                                    <li>
                                      <span> 20 Days of support</span>
                                      <i className="fa fa-times" />
                                    </li>
                                    <li>
                                      <span> Organisational Strategy</span>
                                      <i className="fa fa-times" />
                                    </li>
                                  </ul>
                                  <a
                                    href="#"
                                    target="_blank"
                                    rel="nofollow"
                                    className="theme-btn two"
                                  >
                                    Get Now
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="price_plan_box style_one tag_enables ">
                              <div className="tag">Popular</div>
                              <div className="inner_box">
                                <div className="top">
                                  <h2>Silver Package</h2>
                                  <p>Pricing plan for startup company</p>
                                </div>
                                <div className="mid">
                                  <h4>
                                    549<span>$</span>
                                  </h4>
                                  <p>
                                    Loves or pursues or desires obtain pain of
                                    itself is pain occasionally.
                                  </p>
                                </div>
                                <div className="bottom">
                                  <ul>
                                    <li>
                                      <span> 4-5 Weeks from to finish</span>
                                      <i className="fa fa-check" />
                                    </li>
                                    <li>
                                      <span> Data sprint</span>
                                      <i className="fa fa-check" />
                                    </li>
                                    <li>
                                      <span> Results revision</span>
                                      <i className="fa fa-check" />
                                    </li>
                                    <li>
                                      <span> 20 Days of support</span>
                                      <i className="fa fa-check" />
                                    </li>
                                    <li>
                                      <span> Organisational Strategy</span>
                                      <i className="fa fa-times" />
                                    </li>
                                  </ul>
                                  <a
                                    href="#"
                                    target="_blank"
                                    rel="nofollow"
                                    className="theme-btn two"
                                  >
                                    Get Now
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="price_plan_box style_one tag_enables ">
                              <div className="tag">Popular</div>
                              <div className="inner_box">
                                <div className="top">
                                  <h2>
                                    Gold <br /> Package
                                  </h2>
                                  <p>Pricing plan for startup company</p>
                                </div>
                                <div className="mid">
                                  <h4>
                                    949<span>$</span>
                                  </h4>
                                  <p>
                                    Loves or pursues or desires obtain pain of
                                    itself is pain occasionally.
                                  </p>
                                </div>
                                <div className="bottom">
                                  <ul>
                                    <li>
                                      <span> 4-5 Weeks from to finish</span>
                                      <i className="fa fa-check" />
                                    </li>
                                    <li>
                                      <span> Data sprint</span>
                                      <i className="fa fa-check" />
                                    </li>
                                    <li>
                                      <span> Results revision</span>
                                      <i className="fa fa-check" />
                                    </li>
                                    <li>
                                      <span> 20 Days of support</span>
                                      <i className="fa fa-check" />
                                    </li>
                                    <li>
                                      <span> Organisational Strategy</span>
                                      <i className="fa fa-check" />
                                    </li>
                                  </ul>
                                  <a
                                    href="#"
                                    target="_blank"
                                    rel="nofollow"
                                    className="theme-btn two"
                                  >
                                    Get Now
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*===============spacing==============*/}
            <div className="pd_bottom_80" />
            {/*===============spacing==============*/}
          </section>
          {/*-price-tab-end-*/}
          {/*-testimonial-*/}
          <section
            className="testimonial bg_op_1"
            style={{ backgroundImage: "url(assets/images/testimonialbg.jpg)" }}
          >
            <div className="row align-items-center">
              <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-12 pd_zero">
                <div className="image">
                  <img
                    src="assets/images/testi-image.jpg"
                    className="simp_img img-fluid object-fit-cover height_560px"
                    alt="image"
                  />
                </div>
              </div>
              <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-12 pd_zero">
                {/*===============spacing==============*/}
                <div className="pd_top_70" />
                {/*===============spacing==============*/}
                <div className="testimonial_sec_wrapper pd_left_70">
                  <div className="title_all_box style_one light_color">
                    <div className="title_sections">
                      <div className="before_title">Quote About</div>
                      <h2> Customers Experience</h2>
                    </div>
                    {/*===============spacing==============*/}
                    <div className="mr_bottom_20" />
                    {/*===============spacing==============*/}
                  </div>
                  <div className="testimonial_sec light_color style_one">
                    <div className="icon_quotes">
                      <i className="icon-quote" />
                    </div>
                    <div
                      className="swiper-container"
                      data-swiper='{
                  "loop": true,
                  "autoplay": {
                    "delay": 7000
                  },
                  "speed": 1000,
                  "centeredSlides": false,
                  "slidesPerView": 1,
                  "spaceBetween": 30,
                  "navigation": {
                    "nextEl": ".next-single-one",
                    "prevEl": ".prev-single-one"
                  },
                  "pagination": {
                    "el": ".number-pagination",
                    "type": "fraction"
                  },
                  "breakpoints": {
                    "1200": {
                      "slidesPerView": 1 
                    },
                    "1024": {
                      "slidesPerView": 1 
                    },
                    "768": {
                      "slidesPerView": 1 
                    },
                    "576": {
                      "slidesPerView": 1 
                    },
                    "0": {
                      "slidesPerView": 1 
                    }
                  }
                }'
                    >
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <div className="testimonial_box">
                            <div className="rating">
                              <ul>
                                <li>
                                  <span className="fa fa-star fill" />
                                  <span className="fa fa-star fill" />
                                  <span className="fa fa-star fill" />
                                  <span className="fa fa-star fill" />
                                  <span className="fa fa-star empty" />
                                </li>
                              </ul>
                            </div>
                            <div className="authour_details  image_yes ">
                              <div className="image">
                                <img
                                  src="assets/images/testi-3.png"
                                  alt="image"
                                />
                              </div>
                              <div className="details">
                                <h2>Jacob Leonardo</h2>
                                <span>Senior Manager of Excel Solution</span>
                              </div>
                            </div>
                            <div className="comment">
                              While running an early stage startup everything
                              feels hard, that’s why it’s been so nice to have our
                              accounting feel easy. We recommed Qetus.
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="testimonial_box">
                            <div className="rating">
                              <ul>
                                <li>
                                  <span className="fa fa-star fill" />
                                  <span className="fa fa-star fill" />
                                  <span className="fa fa-star fill" />
                                  <span className="fa fa-star fill" />
                                  <span className="fa fa-star fill" />
                                </li>
                              </ul>
                            </div>
                            <div className="authour_details  image_yes ">
                              <div className="image">
                                <img
                                  src="assets/images/testi-2.png"
                                  alt="image"
                                />
                              </div>
                              <div className="details">
                                <h2>Jacob Leonardo</h2>
                                <span>Senior Manager of Excel Solution</span>
                              </div>
                            </div>
                            <div className="comment">
                              While running an early stage startup everything
                              feels hard, that’s why it’s been so nice to have our
                              accounting feel easy. We recommed Qetus.
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="testimonial_box">
                            <div className="rating">
                              <ul>
                                <li>
                                  <span className="fa fa-star fill" />
                                  <span className="fa fa-star fill" />
                                  <span className="fa fa-star empty" />
                                  <span className="fa fa-star empty" />
                                  <span className="fa fa-star empty" />
                                </li>
                              </ul>
                            </div>
                            <div className="authour_details  image_yes ">
                              <div className="image">
                                <img
                                  src="assets/images/testi-1.png"
                                  alt="image"
                                />
                              </div>
                              <div className="details">
                                <h2>Jacob Leonardo</h2>
                                <span>Senior Manager of Excel Solution</span>
                              </div>
                            </div>
                            <div className="comment">
                              While running an early stage startup everything
                              feels hard, that’s why it’s been so nice to have our
                              accounting feel easy. We recommed Qetus.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="arrows">
                        <div className="prev-single-one" />
                        <div className="next-single-one" />
                      </div>
                      <div className="num_pagination">
                        <div className="number-pagination"></div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_70" />
                {/*===============spacing==============*/}
              </div>
              {/*-empty column-*/}
              <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-12"></div>
              {/*-empty column-*/}
            </div>
          </section>
          {/*-testimonial-end-*/}
          {/*-blog-*/}
          <section className="blog-section">
            {/*===============spacing==============*/}
            <div className="pd_top_80" />
            {/*===============spacing==============*/}
            <div className="large-container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="title_all_box style_one text-center dark_color">
                    <div className="title_sections">
                      <div className="before_title"> Find Out Our</div>
                      <h2>Insights &amp; Intelligence</h2>
                    </div>
                  </div>
                  {/*===============spacing==============*/}
                  <div className="pd_bottom_30" />
                  {/*===============spacing==============*/}
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="blog_post_section  two_column news_wrapper_grid style_two ">
                    <div className="grid_show_case grid_layout clearfix">
                      <div className="grid_box _card">
                        <div className="news_box default_style list_view has_images">
                          <div className="image img_hover-1">
                            <img
                              loading="lazy"
                              width={750}
                              height={420}
                              src="assets/images/blog/blog-image-11.jpg"
                              className="img-fluid"
                              alt="img"
                            />
                            <a href="#" className="categories">
                              <i className="icon-folder" />
                              Coaching
                            </a>
                          </div>
                          <div className="content_box">
                            <div className="date">
                              <span className="date_in_number">
                                October 8, 2023
                              </span>
                            </div>
                            <div className="source">
                              <h2 className="title">
                                <a href="blog-single.html" rel="bookmark">
                                  Workplace problems in your business?
                                </a>
                              </h2>
                              <p className="short_desc">
                                Banter! Could “workplace banter” cause problems in
                                your business? The short answer? Yes.
                              </p>
                              <a href="blog-single.html" className="link__go">
                                Read more
                              </a>
                            </div>
                            <div className="auhtour_box">
                              <img
                                alt="img"
                                src="assets/images/auth-1.png"
                                height={60}
                                width={60}
                                className="img-fluid"
                              />
                              <div className="contnet_a">
                                <p>POSTED BY</p>
                                <h4>Evan Thomas</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="grid_box _card">
                        <div className="news_box default_style list_view has_images">
                          <div className="image img_hover-1">
                            <img
                              width={750}
                              height={420}
                              src="assets/images/blog/blog-image-3.jpg"
                              className="img-fluid"
                              alt="img"
                            />
                            <a href="#" className="categories">
                              <i className="icon-folder" />
                              Employee Relations
                            </a>
                          </div>
                          <div className="content_box">
                            <div className="date">
                              <span className="date_in_number">
                                October 8, 2023
                              </span>
                            </div>
                            <div className="source">
                              <h2 className="title">
                                <a href="blog-single.html" rel="bookmark">
                                  Workforce Challenges &amp; Opportunities
                                </a>
                              </h2>
                              <p className="short_desc">
                                How well this mistaken ideas off denouncing
                                pleasure &amp; praisings will give you complete.
                              </p>
                              <a href="#" className="link__go">
                                Read more
                              </a>
                            </div>
                            <div className="auhtour_box">
                              <img
                                alt="img"
                                src="assets/images/auth-2.png"
                                height={60}
                                width={60}
                                className="img-fluid"
                              />
                              <div className="contnet_a">
                                <p>POSTED BY</p>
                                <h4>Evan Thomas</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*===============spacing==============*/}
            <div className="pd_bottom_60" />
            {/*===============spacing==============*/}
          </section>
          {/*-blog-end-*/}
        </div>
        {/*===============PAGE CONTENT END==============*/}
        {/*===============PAGE CONTENT END==============*/}
      </div>
      <Footer />
    </>

  );
}
