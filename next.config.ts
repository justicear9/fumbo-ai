import type { NextConfig } from "next";

const isExport = process.env.NEXT_OUTPUT === "export";

const nextConfig: NextConfig = {
  ...(isExport ? { output: "export" as const, trailingSlash: true } : {}),
  images: {
    unoptimized: isExport,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  transpilePackages: ["@splinetool/react-spline", "@splinetool/runtime", "three"],
  serverExternalPackages: ["nodemailer"],
  turbopack: {},
  experimental: {
    webpackMemoryOptimizations: true,
    cpus: 1,
  },
  webpack: (config) => {
    const names = config.resolve.conditionNames ?? [];
    if (!names.includes("import")) {
      config.resolve.conditionNames = ["import", ...names];
    }
    config.parallelism = 1;
    return config;
  },
};

export default nextConfig;
