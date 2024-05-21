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
          text="빠른 타로"
          onClickUrl="/choose"
          type="tarot-fast"
          idx={0}
        ></TarotTypeBtn>
        <TarotTypeBtn
          text="빠른 심볼론"
          onClickUrl="/choose"
          type="symbol-fast"
          idx={1}
        ></TarotTypeBtn>
        <TarotTypeBtn
          text="타로카드"
          onClickUrl="/count"
          type="tarot"
          idx={2}
        ></TarotTypeBtn>
        <TarotTypeBtn
          text="심볼론카드"
          onClickUrl="/count"
          type="symbol"
          idx={3}
        ></TarotTypeBtn>
        <TarotTypeBtn
          text="켈틱크로스"
          onClickUrl="celtic"
          type="celtic"
          idx={4}
        ></TarotTypeBtn>
      </Flex>
    </Flex>
  );
}
