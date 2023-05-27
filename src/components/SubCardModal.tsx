import { Flex, Text, Button } from "@chakra-ui/react";
import { symbolList, tarotList, tarotType } from "../../assets/array";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { selectedListState, tarotState } from "../../state/atom";
import Cards from "./Cards";
import SubCards from "./SubCards";

export default function SubCardModal({
  setShowModal,
  clickedCardNo,
  setSubCardList,
  subCardList,
}: any) {
  const tarotType = useRecoilValue(tarotState);
  const [filteredArr, setFilteredArr] = useState<tarotType[]>([]);
  const selectedList = useRecoilValue(selectedListState);
  const [selectedCard, setSelectedCard] = useState<tarotType>();

  const filterArray = (array: tarotType[]) => {
    const _filteredArr = array.filter(
      (card) =>
        !selectedList.some(
          (selectedCard) => selectedCard.card_no == card.card_no
        )
    );

    // 배열 요소 랜덤으로 섞기
    for (let i = filteredArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [filteredArr[i], filteredArr[j]] = [filteredArr[j], filteredArr[i]];
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
    switch (tarotType) {
      case "tarot":
        setFilteredArr(filterArray(tarotList));
        break;
      case "symbol":
        setFilteredArr(filterArray(symbolList));
        break;
    }
  }, [tarotType]);

  return (
    <Flex
      w="100vw"
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
        alignItems="center"
        justifyContent="center"
        borderRadius="10px"
        p="10px 0"
        border="1px solid white"
      >
        <Text color="white">보조카드 뽑기</Text>
        <Flex
          align="center"
          justify="center"
          w="100%"
          overflow="scroll"
          flexWrap="wrap"
          flex={1}
          m="10px 0"
        >
          {filteredArr.map((card) => (
            <SubCards
              setSelectedCard={setSelectedCard}
              card={card}
              selected={card.card_no === selectedCard?.card_no}
              key={card.card_no}
            ></SubCards>
          ))}
        </Flex>
        <Button
          bgColor="transparent"
          onClick={onClickComplete}
          border="1px solid white"
          color="white"
        >
          완료
        </Button>
      </Flex>
    </Flex>
  );
}
