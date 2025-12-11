"use client";

import { useEffect } from "react";

export default function ScriptsLoader() {
  useEffect(() => {
    // Function to hide the preloader
    const hidePreloader = () => {
      const preloader = document.querySelector("#preloader");
      if (!preloader) return;

      const $ = (window as any).jQuery;
      if ($) {
        // Use jQuery if available (preferred method)
        $(".ed-preloader").fadeOut();
        $("#preloader").delay(350).fadeOut("slow");
      } else {
        // Vanilla JS fallback
        const preloaderEl = preloader as HTMLElement;
        preloaderEl.style.opacity = "0";
        preloaderEl.style.transition = "opacity 0.5s";
        setTimeout(() => {
          preloaderEl.style.display = "none";
        }, 500);
      }
    };

    // List of scripts to load in order
    const scripts = [
      "/assets/plugins/js/jquery.min.js",
      "/assets/plugins/js/jquery-migrate.js",
      "/assets/plugins/js/bootstrap.min.js",
      "/assets/plugins/js/gsap/gsap.js",
      "/assets/plugins/js/gsap/gsap-scroll-to-plugin.js",
      "/assets/plugins/js/gsap/gsap-scroll-smoother.js",
      "/assets/plugins/js/gsap/gsap-scroll-trigger.js",
      "/assets/plugins/js/gsap/gsap-split-text.js",
      "/assets/plugins/js/wow.min.js",
      "/assets/plugins/js/owl.carousel.min.js",
      "/assets/plugins/js/swiper-bundle.min.js",
      "/assets/plugins/js/magnific-popup.min.js",
      "/assets/plugins/js/jquery.counterup.min.js",
      "/assets/plugins/js/waypoints.min.js",
      "/assets/plugins/js/nice-select.min.js",
      "/assets/plugins/js/backToTop.js",
      "/assets/plugins/js/active.js",
    ];

    const loadScript = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        // Skip if already loaded
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve();
          return;
        }

        const script = document.createElement("script");
        script.src = src;
        script.async = false; // Load synchronously to maintain order
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Failed to load ${src}`));
        document.body.appendChild(script);
      });
    };

    // Load all scripts sequentially
    const loadAllScripts = async () => {
      for (const src of scripts) {
        try {
          await loadScript(src);
        } catch (error) {
          console.error(`Error loading script ${src}:`, error);
        }
      }

      // After all scripts are loaded, hide the preloader and initialize sliders
      // Wait a bit for jQuery and active.js to be fully available
      setTimeout(() => {
        // Trigger window load event so active.js preloader code runs
        // This ensures compatibility with the existing preloader logic
        if (document.readyState === "complete") {
          window.dispatchEvent(new Event("load"));
        }
        
        // Manually trigger slider initialization if available (for Next.js)
        const $ = (window as any).jQuery;
        if ($ && typeof (window as any).initEdunaSliders === 'function') {
          try {
            (window as any).initEdunaSliders();
          } catch (error) {
            console.error("Error initializing sliders:", error);
          }
        }
        
        // Hide preloader (will use jQuery if available, otherwise vanilla JS)
        hidePreloader();
      }, 500);
    };

    // Start loading scripts
    loadAllScripts();
  }, []);

  return null;
}

