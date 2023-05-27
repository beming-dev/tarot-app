import { Box, Button, Text } from "@chakra-ui/react";
import { useSetRecoilState } from "recoil";
import { useRouter } from "next/router";
import { countState } from "../../state/atom";

interface propsType {
  count: number;
}

export default function TarotCountBtn({ count }: propsType) {
  const router = useRouter();
  const setCountState = useSetRecoilState(countState);

  const onClick = () => {
    setCountState(count);
    router.push("/choose");
  };
  return (
    <Button
      m="0 10px"
      bgColor="transparent"
      w="50px"
      h="50px"
      border="1px solid white"
      transitionDuration="0.5s"
      color="white"
      onClick={onClick}
      _hover={{
        bgColor: "white",
        color: "black",
      }}
    >
      <Text fontSize="xl" fontWeight="300">
        {count}
      </Text>
    </Button>
  );
}
