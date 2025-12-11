"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function PluginLoader() {
  const pathname = usePathname();

  useEffect(() => {
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

    const loadScript = (src: string) =>
      new Promise<void>((resolve, reject) => {
        // Skip if already loaded
        if (document.querySelector(`script[src="${src}"]`)) return resolve();

        const s = document.createElement("script");
        s.src = src;
        s.async = false; // preserve order
        s.onload = () => resolve();
        s.onerror = () => reject(`Failed to load ${src}`);
        document.body.appendChild(s);
      });

    // Load all scripts sequentially
    const loadAll = async () => {
      for (const src of scripts) {
        try {
          await loadScript(src);
        } catch (err) {
          console.error(err);
        }
      }

      // jQuery must exist now
      const $ = (window as any).jQuery;
      if (!$) return;

      // DOM ready
      $(document).ready(() => {
        try {
          // ===== Owl Carousel =====
          if ($(".owl-carousel").length > 0) {
            $(".owl-carousel").each(function () {
              if (!$(this).hasClass("owl-loaded")) {
                $(this).owlCarousel({
                  items: 1,
                  loop: true,
                  autoplay: true,
                  nav: true,
                  dots: true,
                });
              }
            });
          }

          // ===== WOW.js =====
          if ((window as any).WOW) {
            new (window as any).WOW().init();
          }

          // ===== CounterUp =====
          if ($(".counter").length > 0) {
            $(".counter").counterUp({ delay: 10, time: 1000 });
          }

          // ===== active.js =====
          // Re-run the script logic if needed
          const activeScript = document.createElement("script");
          activeScript.src = "/assets/plugins/js/active.js";
          activeScript.async = true;
          document.body.appendChild(activeScript);

          console.log("All plugins initialized on route:", pathname);
        } catch (err) {
          console.error("Plugin initialization failed:", err);
        }
      });
    };

    loadAll();
  }, [pathname]); // re-run every route change

  return null;
}
