import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  
  // Image optimization
  images: {
    unoptimized: true, // Required for static export, but we'll use Next.js Image component for optimization
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year cache for images
  },
  
  // Compression
  compress: true,
  
  // Experimental features for better performance
  experimental: {
    optimizeCss: true,
  },
  
  // Note: Headers are not supported in static export mode
  // Cache headers must be configured at CDN/server level
  // See PERFORMANCE_FIX_PLAN.md for server configuration instructions
};

export default nextConfig;
