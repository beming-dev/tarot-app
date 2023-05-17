import { Box, Text } from "@chakra-ui/react";

export default function Layout({ children }: any) {
  return (
    <Box
      w="100vw"
      h="100vh"
      bgImage={"url('/background.jpg')"}
      bgPosition="center"
      bgRepeat="no-repeat"
    >
      <Text>what</Text>
      {children}
    </Box>
  );
}
