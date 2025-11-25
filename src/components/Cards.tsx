import { Box, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { tarotType } from "../../assets/array";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { countState, reverseState, selectedListState } from "../../state/atom";
import { REVERSE_PERCENT } from "../../assets/constants";

interface propsType {
  card: tarotType;
  selected: boolean;
}

export default function Cards({ card, selected }: propsType) {
  const router = useRouter();

  const reverse = useRecoilValue(reverseState);
  const count = useRecoilValue(countState);
  const selectedList = useRecoilValue(selectedListState);
  const setSelectedList = useSetRecoilState(selectedListState);

  const onClick = () => {
    if (selectedList.some((_card) => _card.card_no === card.card_no)) {
      setSelectedList(
        selectedList.filter(
          (selectedCard) => selectedCard.card_no !== card.card_no
        )
      );
    } else {
      if (selectedList.length >= count) {
        alert("카드를 다 골랐어요!");
        return;
      }

      if (reverse && Math.random() < REVERSE_PERCENT) {
        setSelectedList([...selectedList, { ...card, reverse: true }]);
      } else {
        setSelectedList([...selectedList, { ...card, reverse: false }]);
      }
    }
  };
  return (
    <Image
      src="/background2.png"
      alt="tarot_back"
      w={{ base: "35px", sm: "38px", md: "42px" }}
      h={{ base: "48px", sm: "52px", md: "58px" }}
      border={
        selected ? "3px solid #FFD700" : "2px solid rgba(255,255,255,0.3)"
      }
      borderRadius="5px"
      transform={selected ? "scale(1.08) rotate(2deg)" : "scale(1)"}
      onClick={onClick}
      cursor="pointer"
      transition="all 0.2s ease"
      _hover={{
        transform: selected ? "scale(1.12) rotate(2deg)" : "scale(1.03)",
        borderColor: selected ? "#FFD700" : "rgba(255,255,255,0.6)",
      }}
      boxShadow={
        selected
          ? "0 4px 12px rgba(255,215,0,0.5), 0 0 8px rgba(255,215,0,0.3)"
          : "0 2px 6px rgba(0,0,0,0.3)"
      }
      objectFit="cover"
    />
  );
}
