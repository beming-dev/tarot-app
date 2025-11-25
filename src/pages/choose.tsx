import { useState, useEffect } from "react";
import { Box, Flex, Text, Button, Grid } from "@chakra-ui/react";
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
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
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
      h="100vh"
      align="flex-start"
      justify="flex-start"
      direction="column"
      padding={{ base: "16px 12px", md: "20px 16px" }}
      overflow="hidden"
      position="relative"
    >
      {/* 헤더 섹션 */}
      <Box
        w="100%"
        textAlign="center"
        mb={{ base: "8px", md: "12px" }}
        pt={{ base: "4px", md: "8px" }}
        flexShrink={0}
      >
        <Text
          color="white"
          fontSize={{ base: "lg", md: "xl" }}
          fontWeight="600"
          textShadow="0 2px 4px rgba(0,0,0,0.5)"
          mb="4px"
        >
          {count}장의 카드를 골라주세요
        </Text>
        <Text
          color="rgba(255,255,255,0.8)"
          fontSize={{ base: "xs", md: "sm" }}
          textShadow="0 1px 2px rgba(0,0,0,0.5)"
        >
          선택된 카드: {selectedList.length} / {count}
        </Text>
      </Box>

      {/* 카드 그리드 */}
      <Box
        w="100%"
        flex="1"
        overflowY="auto"
        overflowX="hidden"
        minH="0"
        sx={{
          "&::-webkit-scrollbar": {
            display: "none",
          },
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <Grid
          templateColumns={{
            base: "repeat(8, 1fr)",
            sm: "repeat(9, 1fr)",
            md: "repeat(10, 1fr)",
          }}
          gap={{ base: "2px", md: "4px" }}
          w="100%"
          maxW="100%"
          px={{ base: "1px", md: "4px" }}
          pb="12px"
          justifyItems="center"
          autoRows="min-content"
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
            />
          ))}
        </Grid>
      </Box>

      {/* 선택 완료 버튼 */}
      <Box
        w="100%"
        flexShrink={0}
        pt={{ base: "8px", md: "12px" }}
        pb={{ base: "12px", md: "16px" }}
      >
        <Button
          w="100%"
          maxW={{ base: "100%", md: "400px" }}
          mx="auto"
          display="flex"
          border="2px solid white"
          color="black"
          fontSize={{ base: "sm", md: "md" }}
          fontWeight="600"
          py={{ base: "16px", md: "20px" }}
          borderRadius="10px"
          onClick={onComplete}
          _hover={{
            bgColor: "rgba(255,255,255,0.3)",
            transform: "scale(1.02)",
          }}
          _active={{
            transform: "scale(0.98)",
          }}
          transition="all 0.2s"
          disabled={selectedList.length !== count}
          opacity={selectedList.length === count ? 1 : 0.6}
          textAlign="center"
          alignItems="center"
          justifyContent="center"
        >
          선택완료
        </Button>
      </Box>
    </Flex>
  );
}
