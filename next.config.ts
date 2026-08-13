// remote next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  devIndicators: false,
  reactStrictMode: true,
  turbopack: {
    root: process.cwd(),
  },
  //assetPrefix: 'https://test.onliest.ai',
  // async headers() {
  //   return [
  //     {
  //       source: '/_next/:path*',
  //       headers: [{ key: 'Access-Control-Allow-Origin', value: '*' }],
  //     },
  //     {
  //       // Also allow CORS on page routes so the host proxy can read responses
  //       source: '/:path*',
  //       headers: [{ key: 'Access-Control-Allow-Origin', value: '*' }],
  //     },
  //   ];
  // },
};

export default nextConfig;