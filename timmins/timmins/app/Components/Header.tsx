"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {
    const [isSticky, setIsSticky] = useState(false);
    const pathname = usePathname();
    const [expandedMenus, setExpandedMenus] = useState<Set<string>>(new Set());
    const cursorBallRef = useRef<HTMLDivElement>(null);

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

    // Function to restore body scrolling
    const restoreBodyScroll = () => {
        document.body.classList.remove('modal-open');
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
        const backdrop = document.querySelector('.modal-backdrop');
        if (backdrop) {
            backdrop.remove();
        }
    };

    // Handle modal cleanup on route change
    useEffect(() => {
        const cleanupModal = () => {
            const modalElement = document.getElementById('offcanvas-modal');
            if (modalElement) {
                // Use Bootstrap 5 modal API to hide the modal
                const modal = (window as any).bootstrap?.Modal?.getInstance(modalElement);
                if (modal) {
                    modal.hide();
                } else {
                    // Fallback: manually hide modal and remove backdrop
                    modalElement.classList.remove('show');
                    modalElement.style.display = 'none';
                }
                // Always restore body scroll
                restoreBodyScroll();
            }
        };

        // Close modal when route changes
        cleanupModal();
    }, [pathname]);

    // Initial cleanup on mount - ensure body is scrollable
    useEffect(() => {
        // Restore body scroll on component mount
        restoreBodyScroll();
    }, []);

    // Listen for Bootstrap modal events to ensure proper cleanup
    useEffect(() => {
        const modalElement = document.getElementById('offcanvas-modal');
        if (!modalElement) return;

        const handleHidden = () => {
            restoreBodyScroll();
        };

        // Listen for Bootstrap modal hidden event
        modalElement.addEventListener('hidden.bs.modal', handleHidden);
        modalElement.addEventListener('hide.bs.modal', handleHidden);

        return () => {
            modalElement.removeEventListener('hidden.bs.modal', handleHidden);
            modalElement.removeEventListener('hide.bs.modal', handleHidden);
        };
    }, []);

    // Function to toggle mobile menu submenu
    const toggleSubmenu = (menuId: string, e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setExpandedMenus(prev => {
            const newSet = new Set(prev);
            if (newSet.has(menuId)) {
                newSet.delete(menuId);
            } else {
                newSet.add(menuId);
            }
            return newSet;
        });
    };

    // Function to close mobile menu modal
    const closeMobileMenu = () => {
        // Get Bootstrap modal instance
        const modalElement = document.getElementById('offcanvas-modal');
        if (modalElement) {
            // Use Bootstrap 5 modal API to hide the modal
            const modal = (window as any).bootstrap?.Modal?.getInstance(modalElement);
            if (modal) {
                modal.hide();
            } else {
                // Fallback: manually hide modal and remove backdrop
                modalElement.classList.remove('show');
                modalElement.style.display = 'none';
            }
            // Always restore body scroll
            restoreBodyScroll();
        }
        // Reset expanded menus when closing
        setExpandedMenus(new Set());
    };

    // Reset expanded menus on route change
    useEffect(() => {
        setExpandedMenus(new Set());
    }, [pathname]);

    // Re-initialize custom cursor on mount and after client-side navigation
    // (cursor-ball is re-created when Header remounts on each page)
    useLayoutEffect(() => {
        let cancelled = false;
        let cleanup: (() => void) | null = null;

        const tryInit = (): boolean => {
            const cursorBall = cursorBallRef.current;
            const gsap = (window as any).gsap;
            if (!cursorBall || !gsap || cancelled) return false;

            const mouse = { x: 0, y: 0 };
            const pos = { x: 0, y: 0 };
            const ratio = 0.99;

            gsap.set(cursorBall, {
                xPercent: -50,
                yPercent: -50,
                borderWidth: "1px",
                width: "40px",
                height: "40px",
                opacity: 1,
                scale: 1,
                backgroundColor: "transparent",
                borderColor: "rgba(156, 156, 156, 0.5)",
            });

            const onMouseMove = (e: MouseEvent) => {
                const scrollTop = window.pageYOffset ?? document.documentElement.scrollTop;
                mouse.x = e.pageX;
                mouse.y = e.pageY - scrollTop;
            };

            const updatePosition = () => {
                pos.x += (mouse.x - pos.x) * ratio;
                pos.y += (mouse.y - pos.y) * ratio;
                gsap.to(cursorBall, { duration: 0.4, x: pos.x, y: pos.y });
            };

            document.addEventListener("mousemove", onMouseMove);
            gsap.ticker.add(updatePosition);

            const onHoverEnter = () => {
                gsap.to(cursorBall, {
                    borderColor: "rgba(34, 34, 34, 0.05)",
                    scale: 1.7,
                    opacity: 0.15,
                    backgroundColor: "rgba(34, 34, 34, 0.2)",
                });
            };
            const onHoverLeave = () => {
                gsap.to(cursorBall, {
                    borderColor: "rgba(156, 156, 156, 0.5)",
                    scale: 1,
                    opacity: 1,
                    backgroundColor: "transparent",
                    width: "40px",
                    height: "40px",
                });
                gsap.ticker.add(updatePosition);
            };

            const selector = "a, button, input[type=submit]";
            const onMouseOver = (e: Event) => {
                if ((e.target as Element).closest?.(selector)) onHoverEnter();
            };
            const onMouseOut = (e: Event) => {
                const related = (e as MouseEvent).relatedTarget as Element | null;
                if (!related?.closest?.(selector)) onHoverLeave();
            };
            document.body.addEventListener("mouseover", onMouseOver);
            document.body.addEventListener("mouseout", onMouseOut);

            cleanup = () => {
                document.removeEventListener("mousemove", onMouseMove);
                gsap.ticker.remove(updatePosition);
                document.body.removeEventListener("mouseover", onMouseOver);
                document.body.removeEventListener("mouseout", onMouseOut);
            };
            return true;
        };

        let attempts = 0;
        let retryId: ReturnType<typeof setTimeout> | null = null;
        const maxAttempts = 30; // ~4.5s of retries
        const run = () => {
            if (cancelled || attempts >= maxAttempts) return;
            attempts++;
            if (tryInit()) return;
            retryId = window.setTimeout(run, 150);
        };

        // Run immediately (ref is set after commit; useLayoutEffect runs after commit)
        run();
        // When returning to home, DOM/GSAP can be delayed; schedule one extra try after paint
        if (!cleanup) {
            const lateId = window.setTimeout(() => {
                if (!cancelled && !cleanup) run();
            }, 200);
            return () => {
                cancelled = true;
                window.clearTimeout(lateId);
                if (retryId) window.clearTimeout(retryId);
                cleanup?.();
            };
        }

        return () => {
            cancelled = true;
            if (retryId) window.clearTimeout(retryId);
            cleanup?.();
        };
    }, [pathname]);

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
            {/* Custom Cursor Start - ref allows re-init after client-side navigation */}
            <div id="ed-mouse">
                <div id="cursor-ball" ref={cursorBallRef} />
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
                                <Link href="/" onClick={closeMobileMenu}>
                                    <img src="/assets/New_images/logo.png" alt="#" />
                                </Link>
                            </div>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                onClick={closeMobileMenu}
                            >
                                <i className="fi fi-ss-cross" />
                            </button>
                        </div>
                        <div className="mobile-menu-modal-main-body">
                            {/* Mobile Menu Navigation */}
                            <nav className="offcanvas__menu">
                                <ul className="offcanvas__menu_ul">
                                    <li>
                                        <Link className="offcanvas__menu_item" href="/" onClick={closeMobileMenu}>
                                            Home
                                        </Link>
                                    </li>
                                    <li className={`offcanvas__menu_li ${expandedMenus.has('about') ? 'active' : ''}`}>
                                        <a
                                            className="offcanvas__menu_item"
                                            href="javascript:void(0)"
                                            onClick={(e) => toggleSubmenu('about', e)}
                                        >
                                            About-us
                                            <i className={`fi fi-ss-angle-small-${expandedMenus.has('about') ? 'up' : 'down'}`} />
                                        </a>
                                        <ul className={`offcanvas__sub_menu ${expandedMenus.has('about') ? 'show' : ''}`}>
                                            <li className="offcanvas__sub_menu_li">
                                                <Link
                                                    href="/about-us"
                                                    className="offcanvas__sub_menu_item"
                                                    onClick={closeMobileMenu}
                                                >
                                                    Who We Are
                                                </Link>
                                            </li>
                                            <li className="offcanvas__sub_menu_li">
                                                <Link
                                                    href="/our-approach"
                                                    className="offcanvas__sub_menu_item"
                                                    onClick={closeMobileMenu}
                                                >
                                                    Our Approach
                                                </Link>
                                            </li>
                                            <li className="offcanvas__sub_menu_li">
                                                <Link
                                                    href="/10-years"
                                                    className="offcanvas__sub_menu_item"
                                                    onClick={closeMobileMenu}
                                                >
                                                    Our 10 Year Journey
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className={`offcanvas__menu_li ${expandedMenus.has('solutions') ? 'active' : ''}`}>
                                        <a
                                            className="offcanvas__menu_item"
                                            href="javascript:void(0)"
                                            onClick={(e) => toggleSubmenu('solutions', e)}
                                        >
                                            Solutions
                                            <i className={`fi fi-ss-angle-small-${expandedMenus.has('solutions') ? 'up' : 'down'}`} />
                                        </a>
                                        <ul className={`offcanvas__sub_menu ${expandedMenus.has('solutions') ? 'show' : ''}`}>
                                            <li className="offcanvas__sub_menu_li">
                                                <Link href="/our-solution" className="offcanvas__sub_menu_item" onClick={closeMobileMenu}>
                                                    Overview
                                                </Link>
                                            </li>
                                            <li className="offcanvas__sub_menu_li">
                                                <Link
                                                    className="offcanvas__sub_menu_item"
                                                    href="/our-solution"
                                                    onClick={closeMobileMenu}
                                                >
                                                    Fresh Graduate Onboarding
                                                </Link>
                                            </li>
                                            <li className="offcanvas__sub_menu_li">
                                                <Link
                                                    className="offcanvas__sub_menu_item"
                                                    href="/our-solution"
                                                    onClick={closeMobileMenu}
                                                >
                                                    Training Needs Assessment
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className={`offcanvas__menu_li ${expandedMenus.has('courses') ? 'active' : ''}`}>
                                        <a
                                            className="offcanvas__menu_item"
                                            href="javascript:void(0)"
                                            onClick={(e) => toggleSubmenu('courses', e)}
                                        >
                                            Courses
                                            <i className={`fi fi-ss-angle-small-${expandedMenus.has('courses') ? 'up' : 'down'}`} />
                                        </a>
                                        <ul className={`offcanvas__sub_menu ${expandedMenus.has('courses') ? 'show' : ''}`}>
                                            <li className="offcanvas__sub_menu_li">
                                                <Link href="/" className="offcanvas__sub_menu_item" onClick={closeMobileMenu}>
                                                    Overview
                                                </Link>
                                            </li>
                                            <li className="offcanvas__sub_menu_li">
                                                <Link
                                                    href="/Scaled-Agile"
                                                    className="offcanvas__sub_menu_item"
                                                    onClick={closeMobileMenu}
                                                >
                                                    SFAe Certification
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="offcanvas__menu_li">
                                        <Link className="offcanvas__menu_item" href="/Contact-us" onClick={closeMobileMenu}>
                                            Training Calendar
                                        </Link>
                                    </li>
                                    <li className={`offcanvas__menu_li ${expandedMenus.has('resources') ? 'active' : ''}`}>
                                        <a
                                            className="offcanvas__menu_item"
                                            href="javascript:void(0)"
                                            onClick={(e) => toggleSubmenu('resources', e)}
                                        >
                                            Resources
                                            <i className={`fi fi-ss-angle-small-${expandedMenus.has('resources') ? 'up' : 'down'}`} />
                                        </a>
                                        <ul className={`offcanvas__sub_menu ${expandedMenus.has('resources') ? 'show' : ''}`}>
                                            <li className="offcanvas__sub_menu_li">
                                                <Link href="/Case-study" className="offcanvas__sub_menu_item" onClick={closeMobileMenu}>
                                                    Case Studies
                                                </Link>
                                            </li>
                                            <li className="offcanvas__sub_menu_li">
                                                <a
                                                    href="#"
                                                    className="offcanvas__sub_menu_item"
                                                    onClick={closeMobileMenu}
                                                >
                                                    Blog
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="offcanvas__menu_li">
                                        <Link className="offcanvas__menu_item" href="/contact-us" onClick={closeMobileMenu}>
                                            Contact
                                        </Link>
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
                                            <Link href="/">
                                                <img src="/assets/New_images/logo.png" alt="logo" />
                                            </Link>
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
                                                <Link href="/">
                                                    Home
                                                </Link>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)">
                                                    About-us
                                                    <i className="fi fi-ss-angle-small-down" />
                                                </a>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <Link href="/about-us">Who We Are</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/our-approach">Our Approach</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/10-Years">Our 10 Year Journey</Link>
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
                                                        <Link href="/our-solution">Overview</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/our-solution">Fresh Graduate Onboarding</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/our-solution">Training Needs Assessment</Link>
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
                                                        <Link href="/">Overview</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/Scaled-Agile">SFAe Certification</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link href="/contact-us">
                                                    Training Calendar
                                                </Link>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)">Resources
                                                    <i className="fi fi-ss-angle-small-down" />
                                                </a>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <Link href="/case-study">Case Studies</Link>
                                                    </li>
                                                    <li>
                                                        <a href="#">Blog</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link href="/contact-us">Contact</Link>
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