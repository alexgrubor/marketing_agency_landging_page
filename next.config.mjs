/** @type {import('next').NextConfig} */
import withPWAInit from '@ducanh2912/next-pwa';
const withPWA = withPWAInit({
    
  dest: "public",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  disable:false,
  workboxOptions: {
    disableDevLogs:true
  }
});

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'www.pexels.com',
      },
    ],
  },
};

export default withPWA(nextConfig);
