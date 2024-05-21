import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useSetRecoilState } from "recoil";
import { countState, reverseState, typeState } from "../../state/atom";

interface propsType {
  text: string;
  onClickUrl: string;
  type: string;
  idx: number;
}

export default function TarotTypeBtn({
  text,
  onClickUrl,
  type,
  idx,
}: propsType) {
  const colorList = ["#C6DBDA", "#FEE1E8", "#FED7C3", "#F6EAC2", "#ECD5E3"];
  const router = useRouter();

  const setCount = useSetRecoilState(countState);
  const setType = useSetRecoilState(typeState);
  const setReverseState = useSetRecoilState(reverseState);

  const onClick = () => {
    switch (type) {
      case "tarot-fast":
        console.log("headsf");
        setCount(3);
        setType("tarot");
        setReverseState(false);
        break;
      case "symbol-fast":
        setCount(3);
        setType("symbol");
        setReverseState(false);
        break;
      default:
        setType(type);
        break;
    }

    switch (onClickUrl) {
      case "celtic":
        setCount(10);
        router.push("/choose");
        break;
      default:
        router.push(onClickUrl);
        break;
    }
  };

  return (
    <Button
      w="150px"
      h="40px"
      m="10px 0"
      bgColor={colorList[idx % 5]}
      transitionDuration="1s"
      onClick={onClick}
      _hover={{
        background: "black",
        color: "white",
      }}
    >
      {text}
    </Button>
  );
}
