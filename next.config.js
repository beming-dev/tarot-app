/** @type {import('next').NextConfig} */

const debug = process.env.NODE_ENV !== "production";
const repository = "tarot-app";

const isVercel = process.env.DEPLOY_TARGET === "vercel";
const isGitHubPages = process.env.DEPLOY_TARGET === "github";
const isDev = process.env.DEPLOY_TARGET === "dev";

const vercelConfig = {};

const githubPagesConfig = {
  basePath: process.env.NODE_ENV === "development" ? "" : "/tarot-app",
  assetPrefix: !debug ? `/${repository}/` : "", // production 일때 prefix 경로
  trailingSlash: true, // 빌드 시 폴더 구조 그대로 생성하도록
};

module.exports = {
  ...(isVercel && vercelConfig),
  ...(isGitHubPages && githubPagesConfig),
  // Common settings
  reactStrictMode: true,
  // 다른 공통 설정
};
