/** @type {import('next').NextConfig} */

const nextConfig = {
  basePath: "/tarot-app",
  env: {
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
  },
};

module.exports = nextConfig;
