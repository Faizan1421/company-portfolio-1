/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'faizan-iota.vercel.app',
            port: '',
            pathname: '/**', // Corrected to match all paths recursively
          }
        ],
      },
};

export default nextConfig;
