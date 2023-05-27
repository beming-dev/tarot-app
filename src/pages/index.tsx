import TarotTypeBtn from "@/components/TarotTypeBtn";
import { Box, Flex, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex w="100%" h="100%" align="center" justify="center" direction="column">
      <Text color="white" fontSize="7xl" mb="50px">
        YS 타로
      </Text>
      <Flex align="center" justify="center" direction="column">
        <TarotTypeBtn
          text="타로카드"
          onClickUrl="/count"
          type="tarot"
        ></TarotTypeBtn>
        <TarotTypeBtn
          text="심볼론카드"
          onClickUrl="/count"
          type="symbol"
        ></TarotTypeBtn>
        <TarotTypeBtn
          text="켈픽크로스"
          onClickUrl="celtic"
          type="celtic"
        ></TarotTypeBtn>
      </Flex>
    </Flex>
  );
}
