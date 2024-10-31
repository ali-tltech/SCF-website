/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    optimizeFonts: true,
    poweredByHeader: false,
    // Optimize CSS loading
    optimizeCSS: true,
    // Configure CSS modules if you're using them
    webpack(config) {
      return config
    },
    // Add your custom configuration for styles
    experimental: {
      optimizeCss: true, // This enables CSS optimization
    },
  }
  
 

export default nextConfig;
