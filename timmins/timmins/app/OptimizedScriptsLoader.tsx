"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function OptimizedScriptsLoader() {
  useEffect(() => {
    // Function to hide the preloader
    const hidePreloader = () => {
      const preloader = document.querySelector("#preloader");
      if (!preloader) return;

      const $ = (window as any).jQuery;
      if (preloader) {
        const preloaderEl = preloader as HTMLElement;
        preloaderEl.style.opacity = "0";
        preloaderEl.style.transition = "opacity 0.5s";
        setTimeout(() => {
          preloaderEl.style.display = "none";
        }, 500);
      }
    };

    // Initialize sliders after scripts load
    const initSliders = () => {
      const $ = (window as any).jQuery;
      if ($ && typeof (window as any).initnicknameSliders === 'function') {
        try {
          (window as any).initnicknameSliders();
        } catch (error) {
          console.error("Error initializing sliders:", error);
        }
      }
    };

    // Hide preloader when critical scripts are ready
    const checkAndHidePreloader = () => {
      const $ = (window as any).jQuery;
      if ($) {
        hidePreloader();
        initSliders();
      } else {
        // Retry after a short delay
        setTimeout(checkAndHidePreloader, 100);
      }
    };

    // Start checking after a delay
    setTimeout(checkAndHidePreloader, 300);
  }, []);

  return (
    <>
      {/* Critical Scripts - Load with defer for better performance */}
      <Script
        src="/assets/plugins/js/jquery.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          // jQuery loaded, can now load dependent scripts
        }}
      />
      <Script
        src="/assets/plugins/js/jquery-migrate.js"
        strategy="afterInteractive"
      />
      
      {/* Non-Critical Scripts - Load with lazyOnload */}
      <Script
        src="/assets/plugins/js/bootstrap.min.js"
        strategy="lazyOnload"
      />
      <Script
        src="/assets/plugins/js/gsap/gsap.js"
        strategy="lazyOnload"
      />
      <Script
        src="/assets/plugins/js/gsap/gsap-scroll-to-plugin.js"
        strategy="lazyOnload"
      />
      <Script
        src="/assets/plugins/js/gsap/gsap-scroll-smoother.js"
        strategy="lazyOnload"
      />
      <Script
        src="/assets/plugins/js/gsap/gsap-scroll-trigger.js"
        strategy="lazyOnload"
      />
      <Script
        src="/assets/plugins/js/gsap/gsap-split-text.js"
        strategy="lazyOnload"
      />
      <Script
        src="/assets/plugins/js/wow.min.js"
        strategy="lazyOnload"
      />
      <Script
        src="/assets/plugins/js/owl.carousel.min.js"
        strategy="lazyOnload"
      />
      <Script
        src="/assets/plugins/js/swiper-bundle.min.js"
        strategy="lazyOnload"
      />
      <Script
        src="/assets/plugins/js/magnific-popup.min.js"
        strategy="lazyOnload"
      />
      <Script
        src="/assets/plugins/js/jquery.counterup.min.js"
        strategy="lazyOnload"
      />
      <Script
        src="/assets/plugins/js/waypoints.min.js"
        strategy="lazyOnload"
      />
      <Script
        src="/assets/plugins/js/nice-select.min.js"
        strategy="lazyOnload"
      />
      <Script
        src="/assets/plugins/js/backToTop.js"
        strategy="lazyOnload"
      />
      <Script
        src="/assets/plugins/js/active.js"
        strategy="lazyOnload"
        onLoad={() => {
          // Active.js loaded, trigger initialization
          if (typeof (window as any).initnicknameSliders === 'function') {
            (window as any).initnicknameSliders();
          }
        }}
      />
    </>
  );
}

