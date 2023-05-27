import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useSetRecoilState } from "recoil";
import { countState, typeState } from "../../state/atom";

interface propsType {
  text: string;
  onClickUrl: string;
  type: string;
}

export default function TarotTypeBtn({ text, onClickUrl, type }: propsType) {
  const router = useRouter();

  const setCount = useSetRecoilState(countState);
  const setType = useSetRecoilState(typeState);

  const onClick = () => {
    setType(type);
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
      bgColor="white"
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
