/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mww.jesskors.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
