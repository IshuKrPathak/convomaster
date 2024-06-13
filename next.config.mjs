/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wordpress-1280118-4631970.cloudwaysapps.com",
      },
    ],
  },
};

export default nextConfig;
