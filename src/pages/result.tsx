import TarotTypeBtn from "@/components/TarotTypeBtn";
import { Box, Flex, Text, Image, Button, useToast } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { countState, selectedListState, subjectState } from "../../state/atom";
import { tarotType } from "../../assets/array";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import SubCardModal from "@/components/SubCardModal";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [clickedCardNo, setclickedCardNo] = useState(0);
  const [subCardList, setSubCardList] = useState(new Array(5));

  const selectedList = useRecoilValue(selectedListState);
  const subject = useRecoilValue(subjectState);
  const count = useRecoilValue(countState);
  const router = useRouter();
  const toast = useToast();

  // const marginCalculator = () => {
  //   switch (count) {
  //     case 3:
  //       return "10px 5%";
  //     case 4:
  //       return "10px 5%";
  //     case 5:
  //       return "10px 3%";
  //     default:
  //       return "10px 5%";
  //   }
  // };

  const onClickCard = (cardNo: number) => {
    if (subCardList[cardNo]) return;
    setclickedCardNo(cardNo);
    setShowModal(true);
  };

  const resultCard = (card: tarotType, cardNo: number) => {
    return (
      <Flex
        position="relative"
        w={`${90 / count}%`}
        maxW="200px"
        key={card.card_no}
        m="1%"
        alignItems="center"
        justify="center"
      >
        {subCardList[cardNo] && (
          <Flex
            position="absolute"
            top={`${-21 * count}%`}
            w="90%"
            direction="column"
            alignItems="center"
          >
            <Text
              w="100%"
              textAlign="center"
              fontSize="sm"
              color="white"
              mt="5px"
              textOverflow="clip"
              whiteSpace="nowrap"
            >
              {subCardList[cardNo]?.card_name}
            </Text>
            <Image
              w="100%"
              src={subCardList[cardNo]?.img_name}
              alt={"resultImg"}
            ></Image>
          </Flex>
        )}
        <Flex
          w="100%"
          direction="column"
          alignItems="center"
          onClick={() => onClickCard(cardNo)}
          zIndex="1"
        >
          <Image
            transform={card.reverse ? "rotate(0.5turn)" : ""}
            w="100%"
            src={card.img_name}
            alt={"resultImg"}
          ></Image>
          <Text
            w="100%"
            textAlign="center"
            fontSize="sm"
            color="white"
            mt="5px"
            textOverflow="ellipsis"
            overflow="hidden"
            whiteSpace="nowrap"
          >
            {card.card_name}
          </Text>
        </Flex>
      </Flex>
    );
  };

  return (
    <Flex
      w="100%"
      h="100%"
      align="center"
      justify="space-between"
      direction="column"
      position="relative"
    >
      {showModal && (
        <SubCardModal
          subCardList={subCardList}
          setSubCardList={setSubCardList}
          clickedCardNo={clickedCardNo}
          setShowModal={setShowModal}
        ></SubCardModal>
      )}
      <Text
        w="25px"
        h="25px"
        lineHeight="23px"
        textAlign="center"
        position="absolute"
        color="white"
        right="15px"
        top="20px"
        border="1px solid white"
        borderRadius="100px"
        onClick={() => {
          toast({
            description: "카드를 클릭하면 보조카드를 선택할 수 있어요!",
            status: "info",
            duration: 2000,
            isClosable: true,
          });
        }}
      >
        ?
      </Text>
      <Text w="80%" color="white" fontSize="xl" mt="20px" textAlign="center">
        {subject ? subject : "결과"}
      </Text>
      <Flex align="center" justify="center" direction="column">
        <Flex
          p="0 1%"
          w="100%"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          m="10px 0"
        >
          {selectedList.map((card: tarotType, i: number) =>
            resultCard(card, i)
          )}
        </Flex>
      </Flex>
      <Flex mb="20px">
        <Button
          bgColor="transparent"
          color="white"
          border="1px solid white"
          onClick={() => {
            if (confirm("정말 돌아가시겠습니까?")) {
              router.push("/");
            }
          }}
        >
          메인으로
        </Button>
      </Flex>
    </Flex>
  );
}
