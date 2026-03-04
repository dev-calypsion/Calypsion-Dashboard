import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/rtls',
        destination: 'https://rtls-seven.vercel.app/',
      },
      {
        source: '/rtls/:path*',
        destination: 'https://rtls-seven.vercel.app/:path*',
      },
      {
        source: '/vibrationmodule',
        destination: 'https://vibration-moniter.vercel.app/',
      },
      {
        source: '/vibrationmodule/:path*',
        destination: 'https://vibration-moniter.vercel.app/:path*',
      },
    ]
  },
};

export default nextConfig;
