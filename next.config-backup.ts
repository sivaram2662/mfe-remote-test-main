import type { NextConfig } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || '';
const BASE_NAME = process.env.NEXT_PUBLIC_BASE_NAME || '';

const nextConfig: NextConfig = {
  devIndicators: false,
  
  basePath: '/' + BASE_NAME,
  assetPrefix: BASE_URL + '/' + BASE_NAME,

  images: {
    unoptimized: true,
  },

  
  async headers() {
    return [
      {
        source: "/_next/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
        ],
      },
    ];
  },
};

export default nextConfig;