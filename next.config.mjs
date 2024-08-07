/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   domains: ["www.themealdb.com", "https://api.themoviedb.org/"],
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.themealdb.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
