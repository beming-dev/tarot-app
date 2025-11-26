import { Box, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { tarotType } from "../../assets/array";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { countState, reverseState, selectedListState } from "../../state/atom";
import { REVERSE_PERCENT } from "../../assets/constants";
import { getImagePath } from "@/lib/path";

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
  const onClick = () => {
    setSelectedCard(card);
  };
  return (
    <Image
      src={getImagePath("/background2.png")}
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
