import { Box, Text } from "@chakra-ui/react";
import { Poor_Story } from "next/font/google";
import { Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { getBackgroundImageUrl, getImagePath } from "@/lib/path";
import { useEffect, useState } from "react";

const NotoSans = Poor_Story({ weight: ["400"], preload: false });

export default function Layout({ children }: any) {
  const router = useRouter();
  const [bgImageUrl, setBgImageUrl] = useState("/background2.png");

  useEffect(() => {
    // 클라이언트 사이드에서만 basePath를 포함한 경로로 설정
    const imagePath = getImagePath("/background2.png");
    setBgImageUrl(imagePath);
  }, []);

  return (
    <Box
      className={NotoSans.className}
      w="100vw"
      h="100vh"
      bgSize={"cover"}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgAttachment="fixed"
      fontWeight="100"
      position="relative"
      sx={{
        backgroundImage: `url('${bgImageUrl}')`,
        "@media (min-width: 800px)": {
          backgroundSize: "800px auto",
        },
      }}
    >
      {router.pathname !== "/" && (
        <Image
          zIndex="11"
          w="25px"
          position="absolute"
          top="20px"
          left="10px"
          src={getImagePath("/home.jpg")}
          alt="home"
          onClick={() => {
            if (confirm("정말 돌아가시겠습니까?")) {
              router.push("/");
            }
          }}
        ></Image>
      )}
      <Box w="100vw" h="100vh" backgroundColor="rgba(0, 0, 0, 0.3)">
        {children}
      </Box>
    </Box>
  );
}
