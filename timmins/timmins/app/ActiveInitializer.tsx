"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ActiveInitializer() {
  const pathname = usePathname();

  useEffect(() => {
    const $ = (window as any).jQuery;
    if (!$) return;

    // Wait until DOM is ready
    $(document).ready(() => {
      try {
        // Run active.js main function if exists
        // Often active.js wraps code inside an IIFE like (function($){ ... })(jQuery)
        // So we can re-run it by simply re-importing script dynamically
        const script = document.createElement("script");
        script.src = "/assets/plugins/js/active.js";
        script.async = true;
        document.body.appendChild(script);

        // optional cleanup
        return () => {
          document.body.removeChild(script);
        };
      } catch (err) {
        console.error("Failed to initialize active.js", err);
      }
    });
  }, [pathname]); // re-run on route change
  return null;
}
