import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL('https://img.icons8.com/**')],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920], // Default sizes for responsive images
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Default sizes for static images
  },
  async redirects() {
    return [
      {
        source: "/discord",
        destination: "https://discord.com/invite/BFcGatqw6d",
        permanent: false,
      },
      {
        source: "/hackathon",
        destination: "/hackathon2025",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
