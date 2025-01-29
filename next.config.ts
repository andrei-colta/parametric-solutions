import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Enables static HTML export for Firebase
  images: {
    unoptimized: true, // Firebase Hosting doesn’t support Next.js Image Optimization
  },
};

export default nextConfig;
