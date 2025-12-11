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

      // Wait a bit for Next.js to render components
      setTimeout(() => {
        // After all scripts are loaded, initialize sliders
        initializeSlidersWithRetry();
        
        // Set up MutationObserver to watch for dynamically added elements
        const observer = new MutationObserver((mutations) => {
          let shouldReinit = false;
          mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
              if (node.nodeType === 1) { // Element node
                const el = node as Element;
                if (el.classList?.contains('ed-partner__slider') || 
                    el.classList?.contains('ed-testimonial__slider') || 
                    el.classList?.contains('ed-hero__slider') ||
                    el.querySelector?.('.ed-partner__slider') ||
                    el.querySelector?.('.ed-testimonial__slider') ||
                    el.querySelector?.('.ed-hero__slider')) {
                  shouldReinit = true;
                }
              }
            });
          });
          
          if (shouldReinit) {
            console.log("New slider elements detected, reinitializing...");
            setTimeout(() => {
              initializeSlidersWithRetry();
            }, 200);
          }
        });
        
        // Start observing
        observer.observe(document.body, {
          childList: true,
          subtree: true
        });
        
        // Stop observing after 10 seconds
        setTimeout(() => {
          observer.disconnect();
        }, 10000);
      }, 800);
      
      // Trigger window load event so active.js preloader code runs
      if (document.readyState === "complete") {
        window.dispatchEvent(new Event("load"));
      }
      
      // Hide preloader (will use jQuery if available, otherwise vanilla JS)
      hidePreloader();
      
      function initializeSlidersWithRetry(retryCount = 0) {
        const maxRetries = 20;
        const retryDelay = 300;
        
        const $ = (window as any).jQuery;
        const initFn = (window as any).initnicknameSliders;
        
        // Check if we have everything we need
        const hasJQuery = $ && typeof $.fn !== 'undefined';
        const hasOwlCarousel = hasJQuery && typeof $.fn.owlCarousel !== 'undefined';
        const hasInitFn = typeof initFn === 'function';
        
        // Check if elements exist in DOM
        const partnerSlider = document.querySelector(".ed-partner__slider");
        const testimonialSlider = document.querySelector(".ed-testimonial__slider");
        const heroSlider = document.querySelector(".ed-hero__slider");
        const hasElements = !!(partnerSlider || testimonialSlider || heroSlider);
        
        console.log("Slider initialization attempt:", {
          attempt: retryCount + 1,
          hasJQuery,
          hasOwlCarousel,
          hasInitFn,
          hasElements,
          partnerSlider: !!partnerSlider,
          testimonialSlider: !!testimonialSlider,
          heroSlider: !!heroSlider
        });
        
        if (hasJQuery && hasOwlCarousel && hasInitFn) {
          try {
            console.log("All requirements met, initializing sliders...");
            initFn();
            console.log("Sliders initialized successfully!");
            
            // Verify initialization worked
            setTimeout(() => {
              const partnerLoaded = partnerSlider?.classList.contains("owl-loaded");
              const testimonialLoaded = testimonialSlider?.classList.contains("owl-loaded");
              const heroLoaded = heroSlider?.classList.contains("owl-loaded");
              
              console.log("Slider initialization verification:", {
                partnerLoaded,
                testimonialLoaded,
                heroLoaded
              });
              
              // If elements exist but weren't initialized, try direct initialization
              if (hasElements && !partnerLoaded && !testimonialLoaded && !heroLoaded) {
                console.log("Direct initialization needed...");
                directOwlCarouselInit();
              }
            }, 500);
          } catch (error) {
            console.error("Error calling initnicknameSliders:", error);
            if (retryCount < maxRetries) {
              setTimeout(() => initializeSlidersWithRetry(retryCount + 1), retryDelay);
            }
          }
        } else if (retryCount < maxRetries) {
          // Retry if requirements not met
          setTimeout(() => initializeSlidersWithRetry(retryCount + 1), retryDelay);
        } else {
          console.warn("Max retries reached. Attempting direct initialization...");
          directOwlCarouselInit();
        }
      }
      
      function directOwlCarouselInit() {
        const $ = (window as any).jQuery;
        if (!$ || typeof $.fn === 'undefined' || typeof $.fn.owlCarousel === 'undefined') {
          console.error("Cannot initialize owl-carousel: jQuery or owlCarousel not available", {
            hasJQuery: !!$,
            hasFn: typeof $.fn !== 'undefined',
            hasOwlCarousel: typeof $.fn?.owlCarousel !== 'undefined'
          });
          return;
        }
        
        // Direct initialization for partner slider
        const partnerSlider = $(".ed-partner__slider");
        if (partnerSlider.length > 0 && !partnerSlider.hasClass("owl-loaded")) {
          try {
            console.log("Directly initializing partner slider...");
            partnerSlider.owlCarousel({
              items: 6,
              autoplay: true,
              loop: true,
              touchDrag: true,
              mouseDrag: true,
              autoplayTimeout: 5000,
              autoplayHoverPause: false,
              animateOut: "fadeOut",
              animateIn: "fadeIn",
              smartSpeed: 500,
              merge: true,
              dots: false,
              nav: false,
              margin: 24,
              responsive: {
                300: { items: 2 },
                480: { items: 2 },
                768: { items: 4 },
                1024: { items: 4 },
                1200: { items: 6 },
              },
            });
            console.log("Partner slider initialized!");
          } catch (e) {
            console.error("Error initializing partner slider:", e);
          }
        }
        
        // Direct initialization for testimonial slider
        const testimonialSlider = $(".ed-testimonial__slider");
        if (testimonialSlider.length > 0 && !testimonialSlider.hasClass("owl-loaded")) {
          try {
            console.log("Directly initializing testimonial slider...");
            testimonialSlider.owlCarousel({
              items: 1,
              autoplay: true,
              loop: true,
              touchDrag: true,
              mouseDrag: true,
              autoplayTimeout: 5000,
              autoplayHoverPause: false,
              smartSpeed: 500,
              merge: true,
              margin: 30,
              dots: false,
              nav: true,
              navText: [
                "<i class='fi fi-rs-arrow-left'></i>",
                "<i class='fi fi-rs-arrow-right'></i>",
              ],
            });
            console.log("Testimonial slider initialized!");
          } catch (e) {
            console.error("Error initializing testimonial slider:", e);
          }
        }
        
        // Direct initialization for hero slider
        const heroSlider = $(".ed-hero__slider");
        if (heroSlider.length > 0 && !heroSlider.hasClass("owl-loaded")) {
          try {
            console.log("Directly initializing hero slider...");
            heroSlider.owlCarousel({
              items: 1,
              autoplay: true,
              loop: true,
              margin: 0,
              touchDrag: false,
              mouseDrag: false,
              autoplayTimeout: 5000,
              autoplayHoverPause: false,
              animateOut: "fadeOut",
              animateIn: "fadeIn",
              smartSpeed: 500,
              merge: true,
              dots: false,
              nav: true,
              navText: [
                "<i class='fi fi-rs-arrow-left'></i>",
                "<i class='fi fi-rs-arrow-right'></i>",
              ],
            });
            console.log("Hero slider initialized!");
          } catch (e) {
            console.error("Error initializing hero slider:", e);
          }
        }
      }
      
      // Make direct initialization available globally for manual triggering
      (window as any).directOwlCarouselInit = directOwlCarouselInit;
    };

    // Start loading scripts
    loadAllScripts();
  }, []);

  return null;
}

