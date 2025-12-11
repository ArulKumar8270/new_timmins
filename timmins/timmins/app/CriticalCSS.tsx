// Critical CSS - Inline this in layout.tsx head for faster FCP
export const criticalCSS = `
  /* Critical above-fold styles only */
  .ed-header { background: var(--ed-white-color); box-shadow: 0px 4px 30px 16px rgba(7, 2, 41, 0.04); position: relative; z-index: 99; }
  .ed-header.sticky { position: fixed; top: 0; left: 0; right: 0; z-index: 999; }
  .ed-hero { min-height: 100vh; display: flex; align-items: center; }
  .ed-hero__content-title { font-size: 3rem; font-weight: 700; line-height: 1.2; }
  .element-wrapper { min-height: 100vh; }
`;

