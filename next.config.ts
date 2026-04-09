import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Fix for multiple lockfiles - use turbopack root option
  turbopack: {
    root: '/workspace/projects/skill-platform',
  },
  // outputFileTracingRoot: path.resolve(__dirname, '../../'),  // Uncomment and add 'import path from "path"' if needed
  /* config options here */
  allowedDevOrigins: ['*.dev.coze.site'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
