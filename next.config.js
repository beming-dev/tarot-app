/** @type {import('next').NextConfig} */

const debug = process.env.NODE_ENV !== "production";
const repository = "tarot-app";

const isVercel = process.env.DEPLOY_TARGET === "vercel";
const isGitHubPages =
  process.env.DEPLOY_TARGET === "github" ||
  process.env.NODE_ENV === "production";
const isDev = process.env.DEPLOY_TARGET === "dev";

const vercelConfig = {};

const githubPagesConfig = {
  basePath: process.env.NODE_ENV === "development" ? "" : "/tarot-app",
  assetPrefix: process.env.NODE_ENV === "production" ? "/tarot-app" : "", // production 일때 prefix 경로
  trailingSlash: true, // 빌드 시 폴더 구조 그대로 생성하도록
  output: "export", // 정적 export를 위한 설정
  images: {
    unoptimized: true, // GitHub Pages에서는 이미지 최적화 불가
  },
};

module.exports = {
  ...(isVercel && vercelConfig),
  ...(isGitHubPages && githubPagesConfig),
  // Common settings
  reactStrictMode: true,
  // 다른 공통 설정
};
