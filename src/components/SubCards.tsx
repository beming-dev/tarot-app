import { Box, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { tarotType } from "../../assets/array";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  countState,
  prefixState,
  reverseState,
  selectedListState,
} from "../../state/atom";
import { REVERSE_PERCENT } from "../../assets/constants";

interface propsType {
  card: tarotType;
  selected: boolean;
  setSelectedCard: any;
}

export default function SubCards({
  card,
  selected,
  setSelectedCard,
}: propsType) {
  const prefix = useRecoilValue(prefixState);

  const onClick = () => {
    setSelectedCard(card);
  };
  return (
    <Image
      src={`${prefix}/cards/tarot_back.jpg`}
      alt="tarot_back"
      w="30px"
      h="60px"
      m="5px 3px"
      border={selected ? "1px solid white" : "1px solid black"}
      onClick={onClick}
    ></Image>
  );
}
