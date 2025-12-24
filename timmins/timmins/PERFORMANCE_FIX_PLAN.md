# Performance Optimization Plan - Target: 90+ Score

## Current Issues (Score: 88, sometimes 60)

### 🔴 Critical Issues (High Impact on Performance)

1. **Large Unoptimized Images** (844 KiB savings potential)
   - Mobile development training image: 3,368 KiB
   - map.png: 766 KiB
   - hero_2.png: 572 KiB
   - hero_2.jpg: 237 KiB
   - All using regular `<img>` tags instead of Next.js Image component

2. **Inefficient Cache Lifetimes** (7 days - should be 1 year for static assets)
   - Static assets should have 1-year cache TTL
   - Current: 7 days
   - Impact: 844 KiB re-downloaded unnecessarily

3. **Synchronous Script Loading**
   - All scripts load sequentially, blocking rendering
   - jQuery, GSAP, Bootstrap loading upfront
   - No code splitting

4. **No Image Lazy Loading**
   - All images load immediately, even below fold
   - Large images blocking LCP

5. **CSS Blocking Render**
   - Multiple CSS files in head
   - No critical CSS inlining

### 🟡 Medium Priority Issues

6. **Font Loading Not Optimized**
   - No font preloading
   - No font-display: swap

7. **No Resource Hints**
   - Missing preload for critical resources
   - Missing prefetch for likely next resources

8. **Large JavaScript Bundles**
   - Heavy dependencies loading synchronously
   - No tree shaking

---

## Implementation Plan

### Phase 1: Image Optimization (Target: +10-15 points)

#### 1.1 Convert Images to Next.js Image Component
- Replace all `<img>` tags with Next.js `Image` component
- Add `loading="lazy"` for below-fold images
- Add `priority` only for hero images
- Add proper width/height to prevent layout shift

#### 1.2 Optimize Hero Background
- Convert hero_2.jpg to WebP format
- Use Next.js Image with `fill` and `priority`
- Or use CSS with optimized WebP background

#### 1.3 Compress Large Images
- Compress Mobile development training image (3,368 KiB → target: <500 KiB)
- Compress map.png (766 KiB → target: <200 KiB)
- Convert PNG to WebP where possible

**Expected Impact**: LCP: 3.1s → ~1.5s, FCP: 2.3s → ~1.2s

---

### Phase 2: Cache Configuration (Target: +5-8 points)

#### 2.1 Add Cache Headers
- Configure Next.js headers for static assets
- Set 1-year cache for images, fonts, CSS, JS
- Set shorter cache for HTML (1 hour)

**Expected Impact**: Repeat visit performance significantly improved

---

### Phase 3: Script Optimization (Target: +8-12 points)

#### 3.1 Optimize Script Loading
- Load critical scripts with `defer`
- Load non-critical scripts after page interactive
- Use Next.js Script component with proper strategies

#### 3.2 Code Splitting
- Split heavy components into dynamic imports
- Lazy load sliders and animations

**Expected Impact**: TTI: 6.1s → ~3.5s, FCP: 2.3s → ~1.5s

---

### Phase 4: CSS Optimization (Target: +3-5 points)

#### 4.1 Critical CSS
- Inline critical CSS in head
- Load non-critical CSS asynchronously

#### 4.2 Font Optimization
- Preload critical fonts
- Add font-display: swap

**Expected Impact**: FCP: 2.3s → ~1.0s

---

## Quick Wins (Implement First)

1. ✅ Convert hero background to WebP
2. ✅ Add lazy loading to all below-fold images
3. ✅ Add cache headers configuration
4. ✅ Optimize largest images (Mobile development, map.png)

---

## Expected Results

### After Phase 1 (Image Optimization)
- Performance Score: 88 → 92-95
- LCP: 3.1s → ~1.5s
- FCP: 2.3s → ~1.2s

### After Phase 2 (Cache + Scripts)
- Performance Score: 92-95 → 95-98
- TTI: 6.1s → ~3.5s
- Repeat visits: Much faster

### After Phase 3 (CSS + Fonts)
- Performance Score: 95-98 → 98-100
- FCP: 1.2s → ~0.9s
- All Core Web Vitals: Green

---

## Implementation Order

1. **Week 1**: Image optimization (Phase 1) - Biggest impact
2. **Week 1**: Cache configuration (Phase 2) - Quick win
3. **Week 2**: Script optimization (Phase 3) - Medium impact
4. **Week 2**: CSS optimization (Phase 4) - Fine-tuning

---

## Tools Needed

- Image compression: Squoosh.app, ImageOptim, or Sharp
- WebP conversion: cwebp or online tools
- Bundle analyzer: `@next/bundle-analyzer`
- Performance testing: Lighthouse, PageSpeed Insights

---

## Monitoring

After each phase, test with:
- Lighthouse (Chrome DevTools)
- PageSpeed Insights
- WebPageTest
- Core Web Vitals report

Target Metrics:
- Performance Score: 90+
- FCP: < 1.0s
- LCP: < 1.3s
- TTI: < 2.5s
- CLS: < 0.05

