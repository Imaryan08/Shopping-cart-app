
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Keep this
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "i.ebayimg.com",
        },
      ],
    },
  };

export default nextConfig;


  

  