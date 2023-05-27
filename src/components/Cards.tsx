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
      src="/cards/tarot_back.jpg"
      w="30px"
      m="5px 3px"
      border={selected ? "2px solid black" : "1px solid white"}
      transform={selected ? "rotate(0.025turn)" : "rotate(0turn)"}
      onClick={onClick}
    ></Image>
  );
}
