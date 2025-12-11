"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function PluginLoader() {
  const pathname = usePathname();

  useEffect(() => {
    const $ = (window as any).jQuery;
    if (!$) return;

    // DOM ready
    $(document).ready(() => {
      // ===== Owl Carousel =====
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

      // ===== WOW.js =====
      if (window.WOW) {
        new window.WOW().init();
      }

      // ===== CounterUp =====
      $(".counter").counterUp({ delay: 10, time: 1000 });

      // ===== Magnific Popup =====
      $(".popup-link").magnificPopup({ type: "image" });

      // ===== Back To Top =====
      if (window.backToTop) window.backToTop();

      // ===== GSAP Scroll Animations =====
      if (window.gsap && window.ScrollTrigger) {
        gsap.registerPlugin(ScrollTrigger);
        // example: animate all .animate elements
        gsap.utils.toArray(".animate").forEach((el: any) => {
          gsap.from(el, {
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
            },
            y: 50,
            opacity: 0,
            duration: 1,
          });
        });
      }

      console.log("All plugins initialized on route:", pathname);
    });
  }, [pathname]);

  return null;
}
