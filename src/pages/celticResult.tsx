import TarotTypeBtn from "@/components/TarotTypeBtn";
import { Box, Flex, Text, Image, Button, useToast } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { countState, selectedListState, subjectState } from "../../state/atom";
import { celticResult } from "../../assets/array";
import { useRouter } from "next/router";

export default function Home() {
  const selectedList = useRecoilValue(selectedListState);
  const router = useRouter();

  const cardGenerator = (cardNo: number) => {
    return (
      <Flex
        position={cardNo === 1 ? "absolute" : "unset"}
        transform={cardNo === 1 ? "rotate(0.25turn)" : "rotate(0turn)"}
        zIndex={cardNo === 1 ? "1" : "1"}
        w="60px"
        direction="column"
        alignItems="center"
        margin="5px 0"
      >
        <Image
          w="100%"
          src={selectedList[cardNo]?.img_name}
          alt={"resultImg"}
        ></Image>
      </Flex>
    );
  };
  return (
    <Flex
      w="100%"
      h="100%"
      align="center"
      direction="column"
      position="relative"
      overflowY="scroll"
      p="0 10px"
    >
      <Text color="white" fontSize="2xl" m="20px 0">
        결과
      </Text>
      <Flex w="100%" flexDir="row" justify="space-evenly" align="center">
        <Flex
          flexDir="column"
          h="100%"
          justify="space-between"
          flex="1"
          marginRight="20px"
        >
          <Flex justify="center">{cardGenerator(4)}</Flex>
          <Flex w="100%" justify="space-between">
            {cardGenerator(3)}
            <Flex position="relative">
              {cardGenerator(0)}
              {cardGenerator(1)}
            </Flex>
            {cardGenerator(5)}
          </Flex>
          <Flex justify="center">{cardGenerator(2)}</Flex>
        </Flex>
        <Flex flexDir="column" align="center">
          {cardGenerator(9)}
          {cardGenerator(8)}
          {cardGenerator(7)}
          {cardGenerator(6)}
        </Flex>
      </Flex>

      <Box w="100%" border="1px solid white" m="20px 0"></Box>

      <Flex flexDir="column">
        {selectedList.map((card, i) => (
          <Flex justify="space-evenly" key={i}>
            <Flex flexDir="column" align="ceenter" justify="center" mb="15px">
              <Image w="60px" src={card.img_name} alt={"resultImg"}></Image>
              <Text textAlign="center" color="white">
                {card.card_name}
              </Text>
            </Flex>

            <Text color="white" w="60%">
              {i + 1}. {celticResult[i]}
            </Text>
          </Flex>
        ))}
      </Flex>

      <Button
        m="10px 0"
        bgColor="white"
        p="10px"
        onClick={() => {
          if (confirm("정말 돌아가시겠습니까?")) {
            router.push("/");
          }
        }}
      >
        돌아가기
      </Button>
    </Flex>
  );
}
