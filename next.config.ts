import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "csyxkpbavpcrhwqhcpyy.supabase.co",
        pathname: "/storage/v1/object/public/assets/**",
      },
    ],
  },
};

export default nextConfig;
