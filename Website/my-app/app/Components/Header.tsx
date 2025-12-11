import React from 'react'

const Header = () => {
    return (
        <div> {/*--header---*/}
            <div className="header_area " id="header_contents">
                <div className="top_bar style_one">
                    <div className="auto-container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="top_inner">
                                    <div className="left_side common_css">
                                        <div className="contntent address">
                                            <i className="icon-placeholder" />
                                            <div className="text">
                                                <small>Location</small>
                                                <span>61W Business Str Hobert, LA </span>
                                            </div>
                                        </div>
                                        <div className="contntent email">
                                            <i className="icon-email" />
                                            <div className="text">
                                                <small>Email</small>
                                                <a href="mailto:sendmail@creote.com">
                                                    sendmail@creote.com
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="right_side common_css">
                                        <div className="contntent phone">
                                            <i className="icon-phone-call" />
                                            <div className="text">
                                                <small>Phone</small>
                                                <a href="tel:+9806071234">+9806071234</a>
                                            </div>
                                        </div>
                                        <div className="contntent media">
                                            <div className="text">
                                                <a href="#" target="_blank" rel="nofollow">
                                                    <i className="fa fa-facebook" />
                                                </a>
                                                <a href="#" target="_blank" rel="nofollow">
                                                    <i className="fa fa-twitter" />
                                                </a>
                                                <a href="#" target="_blank" rel="nofollow">
                                                    <i className="fa fa-skype" />
                                                </a>
                                                <a href="#" target="_blank" rel="nofollow">
                                                    <i className="fa fa-telegram" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <header className="header header_default style_one style_two_remade get_sticky_header">
                    <div className="auto-container">
                        <div className="row align-items-center">
                            <div className="col-lg-2 col-md-9 col-sm-9 col-xs-9 logo_column">
                                <div className="header_logo_box">
                                    <a href="#" className="logo navbar-brand">
                                        <img
                                            src="/assets/images/logo-default.png"
                                            alt="Creote Elementor"
                                            className="logo_default"
                                        />
                                        <img
                                            src="/assets/images/logo-default.png"
                                            alt="Creote Elementor"
                                            className="logo__sticky"
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-10 col-md-3 col-sm-3 col-xs-3 menu_column">
                                <div className="navbar_togglers hamburger_menu">
                                    <span className="line" />
                                    <span className="line" />
                                    <span className="line" />
                                </div>
                                <div className="header_content_collapse">
                                    <div className="header_menu_box">
                                        <div className="navigation_menu">
                                            <ul id="myNavbar" className="navbar_nav">
                                                <li className="menu-item  menu-item-has-children dropdown active dropdown_full position-static mega_menu nav-item">
                                                    <a
                                                        href="index.html"
                                                        className="dropdown-toggle nav-link"
                                                    >
                                                        <span>Home</span>
                                                    </a>
                                                </li>
                                                <li className="menu-item menu-item-has-children dropdown nav-item">
                                                    <a href="#" className="dropdown-toggle nav-link">
                                                        <span>About Us</span>
                                                    </a>
                                                </li>
                                                <li className="menu-item menu-item-has-children dropdown nav-item">
                                                    <a
                                                        href="blog.html"
                                                        className="dropdown-toggle nav-link"
                                                    >
                                                        <span>Our Journey</span>
                                                    </a>
                                                </li>
                                                <li className="menu-item menu-item-has-children dropdown nav-item">
                                                    <a
                                                        href="project-1-column-grid.html"
                                                        className="dropdown-toggle nav-link"
                                                    >
                                                        <span>Insights</span>
                                                    </a>
                                                </li>
                                                <li className="menu-item  menu-item-has-children dropdown nav-item">
                                                    <a
                                                        href="shop.html"
                                                        className="dropdown-toggle nav-link"
                                                    >
                                                        <span>Case Studies</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="header_right_content">
                                        <ul>
                                            <li className="header-button">
                                                <a
                                                    href="#"
                                                    target="_blank"
                                                    rel=""
                                                    className="theme-btn one"
                                                >
                                                    {" "}
                                                    Get In Touch{" "}
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                {/* end of the loop */}
            </div>
            {/*--header---*/}</div>
    )
}

export default Header