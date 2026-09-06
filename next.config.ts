import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920], // Default sizes for responsive images
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Default sizes for static images
  },
  async redirects() {
    return [
      {
        source: "/discord",
        destination: "https://discord.gg/your-invite-code",
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
