/**
 * GitHub Pages 배포 시 basePath를 추가하는 유틸리티 함수
 */
export function getImagePath(path: string): string {
  if (!path) return path;

  // 브라우저 환경에서만 실행
  if (typeof window === "undefined") {
    return path;
  }

  // 이미 basePath가 포함되어 있으면 그대로 반환
  if (path.startsWith("/tarot-app")) {
    return path;
  }

  // 현재 URL이 GitHub Pages인지 확인
  // github.io 도메인이거나, pathname이 /tarot-app으로 시작하거나, 프로덕션 빌드인 경우
  const isGitHubPages =
    window.location.hostname.includes("github.io") ||
    window.location.pathname.startsWith("/tarot-app") ||
    (process.env.NODE_ENV === "production" &&
      window.location.hostname !== "localhost");

  // GitHub Pages이고 절대 경로인 경우 basePath 추가
  if (isGitHubPages && path.startsWith("/")) {
    return `/tarot-app${path}`;
  }

  return path;
}

/**
 * CSS background-image URL에 basePath를 추가
 */
export function getBackgroundImageUrl(path: string): string {
  const imagePath = getImagePath(path);
  return `url('${imagePath}')`;
}
