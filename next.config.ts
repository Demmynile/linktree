import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images : {
    remotePatterns : [
      {
        protocol : "https",
        hostname : "intent-retriever-453.convex.cloud"
      }
    ]
  }
};

export default nextConfig;
