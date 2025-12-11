# Performance Optimization Implementation Guide

## Quick Start - Immediate Actions

### 1. Replace ScriptsLoader with Optimized Version
**File**: `app/layout.tsx`
```typescript
// Replace this:
import ScriptsLoader from "./ScriptsLoader";

// With this:
import OptimizedScriptsLoader from "./OptimizedScriptsLoader";

// And update the component:
<OptimizedScriptsLoader />
```

### 2. Optimize Images in page.tsx
**Replace all `<img>` tags with Next.js Image component:**

```typescript
// Before:
<img src="/assets/New_images/badge.png" alt="hero-image" />

// After:
import Image from "next/image";
<Image 
  src="/assets/New_images/badge.png" 
  alt="hero-image"
  width={200}
  height={200}
  loading="lazy" // For below-fold images
  priority // Only for above-fold hero images
/>
```

### 3. Optimize Hero Background Image
**File**: `app/page.tsx`
```typescript
// Option 1: Use Next.js Image as background (recommended)
<div className="hero-background-wrapper">
  <Image
    src="/assets/New_images/hero_2.png"
    alt=""
    fill
    priority
    quality={85}
    style={{ objectFit: 'cover', zIndex: -1 }}
  />
</div>

// Option 2: Use CSS with optimized image
// Convert hero_2.png to WebP format and compress
// Then use: backgroundImage: 'url("/assets/New_images/hero_2.webp")'
```

### 4. Add Image Optimization
**File**: `next.config.ts` (Already updated)
- Images will be automatically optimized
- WebP/AVIF formats will be used when supported

### 5. Lazy Load Below-Fold Images
**All images below the fold should have:**
```typescript
<Image 
  loading="lazy" // Add this
  // ... other props
/>
```

---

## Phase 1 Implementation Steps

### Step 1: Update Script Loading (30 min)
1. Replace `ScriptsLoader` with `OptimizedScriptsLoader` in layout.tsx
2. Test that all functionality still works
3. Verify scripts load correctly

### Step 2: Optimize Images (2-3 hours)
1. Convert all `<img>` to Next.js `Image` component
2. Add proper width/height attributes
3. Add `priority` to hero images only
4. Add `loading="lazy"` to all below-fold images
5. Convert hero background to WebP format

### Step 3: Optimize CSS Loading (1 hour)
1. CSS loading is already optimized in layout.tsx
2. Test that styles load correctly
3. Verify no FOUC (Flash of Unstyled Content)

### Step 4: Compress Images (1 hour)
1. Use tools like:
   - ImageOptim (Mac)
   - Squoosh.app (Web)
   - Sharp (Node.js)
2. Convert PNG/JPG to WebP
3. Target: 70-80% file size reduction

---

## Phase 2 Implementation Steps

### Step 5: Code Splitting (2-3 hours)
1. Identify heavy components
2. Use dynamic imports:
```typescript
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>,
  ssr: false // If component uses browser-only APIs
});
```

### Step 6: Optimize Fonts (30 min)
1. Add to layout.tsx head:
```html
<link rel="preload" href="/assets/fonts/your-font.woff2" as="font" type="font/woff2" crossorigin />
```
2. Add font-display: swap to font CSS

### Step 7: Remove Unused Code (1-2 hours)
1. Analyze bundle size
2. Remove unused CSS
3. Tree shake unused JavaScript

---

## Testing & Validation

### After Each Phase:
1. Run Lighthouse audit
2. Check Core Web Vitals
3. Test on slow 3G connection
4. Verify all functionality works

### Tools to Use:
- **Lighthouse** (Chrome DevTools)
- **PageSpeed Insights** (Google)
- **WebPageTest** (webpagetest.org)
- **Next.js Bundle Analyzer**

---

## Expected Timeline

- **Week 1**: Phase 1 (Critical Fixes) - 50-70% improvement
- **Week 2**: Phase 2 (Advanced) - Additional 20-30% improvement  
- **Week 3**: Phase 3 (Fine-tuning) - Additional 10-15% improvement

**Total Expected Improvement**: 70-90% performance gain

---

## Monitoring Checklist

After implementation, verify:
- [ ] FCP < 1.0s
- [ ] TTI < 2.5s
- [ ] LCP < 1.3s
- [ ] SI < 1.5s
- [ ] TBT < 50ms
- [ ] CLS < 0.05
- [ ] Lighthouse score > 90
- [ ] All functionality works correctly

