import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "i.redd.it", port: "", pathname: "**" },
      {
        protocol: "https",
        hostname: "images.apple.com",
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
