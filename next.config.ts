import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
      },
    ],
    dangerouslyAllowSVG: true,
  },
  env: {
    BUILD_TIME: new Date().toISOString(),
  },
};

export default nextConfig;
