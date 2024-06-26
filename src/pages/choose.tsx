import { useState, useEffect } from "react";
import { Box, Flex, Text, Button } from "@chakra-ui/react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  countState,
  reverseState,
  selectedListState,
  typeState,
} from "../../state/atom";
import { symbolList, tarotList, tarotType } from "../../assets/array";
import Cards from "@/components/Cards";
import { useRouter } from "next/router";

export default function Choose() {
  const [shuffledArr, setShuffledArr] = useState<tarotType[]>([]);

  const router = useRouter();
  const selectedList = useRecoilValue(selectedListState);
  const count = useRecoilValue(countState);
  const setSelectedList = useSetRecoilState(selectedListState);
  const type = useRecoilValue(typeState);

  useEffect(() => {
    setSelectedList([]);
  }, []);

  const shuffleArray = (array: any[]) => {
    // 배열 요소 랜덤으로 섞기
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  };

  const onComplete = () => {
    if (selectedList.length !== count) {
      alert(`${count}장의 카드를 골라주세요!`);
      return;
    }

    switch (type) {
      case "celtic":
        router.push("/celticResult");
        break;
      default:
        router.push("/result");
        break;
    }
  };

  useEffect(() => {
    switch (type) {
      case "tarot":
        setShuffledArr(shuffleArray(tarotList));
        break;
      case "symbol":
        setShuffledArr(shuffleArray(symbolList));
        break;
    }
  }, [type]);

  return (
    <Flex
      w="100%"
      h="100%"
      align="center"
      justify="space-between"
      direction="column"
      padding={"20px 0"}
    >
      <Text color="white" fontSize="2xl" mt="20px">
        {count}장의 카드를 골라주세요
      </Text>
      <Flex
        align="center"
        justify="center"
        w="100%"
        overflow="hidden"
        flexWrap="wrap"
        m="10px 0"
        maxW={"500px"}
      >
        {shuffledArr.map((card) => (
          <Cards
            key={card.card_no}
            card={card}
            selected={
              selectedList.some((_card) => card.card_no === _card.card_no)
                ? true
                : false
            }
          ></Cards>
        ))}
      </Flex>
      <Button
        border="1px solid white"
        bgColor="transparent"
        color="white"
        mb="20px"
        onClick={onComplete}
      >
        선택완료
      </Button>
    </Flex>
  );
}
