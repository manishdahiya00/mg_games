/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "store-images.s-microsoft.com" }],
  },
};

export default nextConfig;
