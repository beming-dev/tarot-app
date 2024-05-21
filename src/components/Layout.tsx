import { Box, Text } from "@chakra-ui/react";
import { Poor_Story } from "next/font/google";
import { Image } from "@chakra-ui/react";
import { useRouter } from "next/router";

const NotoSans = Poor_Story({ weight: ["400"], preload: false });

export default function Layout({ children }: any) {
  const router = useRouter();
  return (
    <Box
      className={NotoSans.className}
      w="100vw"
      h="100vh"
      bgImage={"url('/background.png')"}
      bgSize={"cover"}
      bgPosition="center"
      bgRepeat="no-repeat"
      fontWeight="100"
      position="relative"
    >
      {router.pathname !== "/" && (
        <Image
          zIndex="11"
          w="25px"
          position="absolute"
          top="20px"
          left="10px"
          src="/home.jpg"
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
