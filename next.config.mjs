/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'faizan-iota.vercel.app',
            port: '',
            pathname: '/**', // Corrected to match all paths recursively
          },
          {
            protocol: 'https',
            hostname: 'placehold.co',
            port: '',
            pathname: '/**', // Corrected to match all paths recursively
          }
        ],
        dangerouslyAllowSVG: true,
      },
};

export default nextConfig;
