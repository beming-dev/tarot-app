import { Flex, Text, Button, Box, Grid } from "@chakra-ui/react";
import { symbolList, tarotList, tarotType } from "../../assets/array";
import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { selectedListState, typeState } from "../../state/atom";
import Cards from "./Cards";
import SubCards from "./SubCards";

export default function SubCardModal({
  setShowModal,
  clickedCardNo,
  setSubCardList,
  subCardList,
}: any) {
  const type = useRecoilValue(typeState);
  const [filteredArr, setFilteredArr] = useState<tarotType[]>([]);
  const selectedList = useRecoilValue(selectedListState);
  const [selectedCard, setSelectedCard] = useState<tarotType>();
  const setSelectedList = useSetRecoilState(selectedListState);

  const filterArray = (array: tarotType[]) => {
    let _filteredArr = array
      .filter(
        (card) =>
          !selectedList.some(
            (selectedCard) => selectedCard.card_no == card.card_no
          )
      )
      .filter(
        (card) =>
          !subCardList.some((subCard: any) => subCard?.card_no == card.card_no)
      );

    // 배열 요소 랜덤으로 섞기
    for (let i = _filteredArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [_filteredArr[i], _filteredArr[j]] = [_filteredArr[j], _filteredArr[i]];
    }

    return _filteredArr;
  };

  const onClickComplete = () => {
    const newArray = [
      ...subCardList.slice(0, clickedCardNo),
      selectedCard,
      ...subCardList.slice(clickedCardNo + 1),
    ];
    setSubCardList(newArray);
    setShowModal(false);
  };

  useEffect(() => {
    switch (type) {
      case "tarot":
        setFilteredArr(filterArray(tarotList));
        break;
      case "symbol":
        setFilteredArr(filterArray(symbolList));
        break;
    }
  }, [type]);

  return (
    <Flex
      w="100vw"
      maxW={"800px"}
      h="100vh"
      position="absolute"
      alignItems="center"
      justifyContent="center"
      zIndex={10}
    >
      <Flex
        bgColor="rgba(0, 0, 0, 0.7)"
        flexDir="column"
        w="90vw"
        h="90vh"
        borderRadius="10px"
        padding={{ base: "16px 12px", md: "20px 16px" }}
        border="1px solid white"
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
            보조카드 뽑기
          </Text>
          <Text
            color="rgba(255,255,255,0.8)"
            fontSize={{ base: "xs", md: "sm" }}
            textShadow="0 1px 2px rgba(0,0,0,0.5)"
          >
            {selectedCard ? "카드를 선택했습니다" : "카드를 선택해주세요"}
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
            {filteredArr.map((card) => (
              <SubCards
                setSelectedCard={setSelectedCard}
                card={card}
                selected={card.card_no === selectedCard?.card_no}
                key={card.card_no}
              ></SubCards>
            ))}
          </Grid>
        </Box>

        {/* 완료 버튼 */}
        <Box
          w="100%"
          flexShrink={0}
          pt={{ base: "8px", md: "12px" }}
          pb={{ base: "55px", sm: "30px" }}
        >
          <Button
            w="100%"
            maxW={{ base: "100%", md: "400px" }}
            mx="auto"
            display="flex"
            border="2px solid white"
            color="white"
            bgColor="transparent"
            fontSize={{ base: "sm", md: "md" }}
            fontWeight="600"
            py={{ base: "16px", md: "20px" }}
            borderRadius="10px"
            onClick={onClickComplete}
            _hover={{
              bgColor: "rgba(255,255,255,0.3)",
              transform: "scale(1.02)",
            }}
            _active={{
              transform: "scale(0.98)",
            }}
            transition="all 0.2s"
            disabled={!selectedCard}
            opacity={selectedCard ? 1 : 0.6}
            textAlign="center"
            alignItems="center"
            justifyContent="center"
          >
            완료
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
}
