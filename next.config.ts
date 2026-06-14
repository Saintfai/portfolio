import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: [],
  // @ts-ignore - Next.js config type might not have been fully updated for this yet
  turbopack: {
    root: "./",
  },
};

export default nextConfig;
