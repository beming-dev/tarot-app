import TarotCountBtn from "@/components/TarotCountBtn";
import { Flex, Text, Button, Input } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { countState, reverseState, subjectState } from "../../state/atom";
import { useState } from "react";
import { ArrowBackIcon, ArrowForwardIcon, CheckIcon } from "@chakra-ui/icons";

export default function Count() {
  const router = useRouter();
  const [turn, setTurn] = useState(0);

  const setSubjectState = useSetRecoilState(subjectState);
  const subject = useRecoilValue(subjectState);
  const setReverseState = useSetRecoilState(reverseState);
  const reverse = useRecoilValue(reverseState);
  const setCountState = useSetRecoilState(countState);
  const count = useRecoilValue(countState);

  const onClickCnt = (cnt: number) => {
    setCountState(cnt);
    setTurn(1);
  };

  const onClickReverse = (use: boolean) => {
    setReverseState(use);
  };

  const tarotCountBtn = (cnt: number) => {
    const selected = cnt === count;
    return (
      <Button
        m="0 10px"
        bgColor={selected ? "white" : "transparent"}
        w="50px"
        h="50px"
        border="1px solid white"
        transitionDuration="0.5s"
        color={selected ? "black" : "white"}
        onClick={() => {
          onClickCnt(cnt);
        }}
        _hover={{
          bgColor: "white",
          color: "black",
        }}
      >
        <Text fontSize="xl" fontWeight="300">
          {cnt}
        </Text>
      </Button>
    );
  };

  const onPrevClick = () => {
    setTurn(turn - 1);
  };

  const onNextClick = () => {
    setTurn(turn + 1);
  };

  const onComplete = () => {
    router.push("/choose");
  };

  const onInputChange = (e: any) => {
    setSubjectState(e.target.value);
  };

  return (
    <Flex w="100vw" h="100%" align="center" overflow="hidden">
      <Flex transitionDuration="1s" transform={`translate(${-100 * turn}vw)`}>
        {/* 1 */}
        <Flex w="100vw" align="center" justify="center" direction="column">
          <Text color="white" fontSize="2xl" mb="50px">
            몇 장의 카드를 선택할까요?
          </Text>
          <Flex align="center" justify="center">
            {tarotCountBtn(3)}
            {tarotCountBtn(4)}
            {tarotCountBtn(5)}
          </Flex>
        </Flex>
        {/* 2 */}
        <Flex
          w="100vw"
          align="center"
          justify="center"
          direction="column"
          p="0 5px"
        >
          <Text color="white" fontSize="2xl">
            주제가 무엇인가요? (선택)
          </Text>
          <Input
            color="white"
            w="80%"
            m="50px"
            outline="none"
            onChange={onInputChange}
            maxLength={50}
            defaultValue={subject}
            _focus={{
              outline: "none",
              border: "1px solid white",
            }}
          />
          <Flex w="50%" justify="space-between">
            <ArrowBackIcon
              boxSize={7}
              color="white"
              onClick={onPrevClick}
            ></ArrowBackIcon>
            <ArrowForwardIcon
              boxSize={7}
              color="white"
              onClick={onNextClick}
            ></ArrowForwardIcon>
          </Flex>
        </Flex>

        {/* 3 */}
        <Flex
          w="100vw"
          align="center"
          justify="center"
          direction="column"
          p="0 5px"
        >
          <Text color="white" fontSize="2xl">
            역방향을 사용할까요?
          </Text>
          <Flex w="50%" justify="space-between" m="50px 0">
            <Button
              w="50px"
              h="50px"
              bgColor={reverse ? "transparent" : "white"}
              border="1px solid white"
              color={reverse ? "white" : "black"}
              onClick={() => {
                onClickReverse(false);
              }}
            >
              N
            </Button>
            <Button
              w="50px"
              h="50px"
              bgColor={!reverse ? "transparent" : "white"}
              border="1px solid white"
              color={!reverse ? "white" : "black"}
              onClick={() => {
                onClickReverse(true);
              }}
            >
              Y
            </Button>
          </Flex>
          <Flex w="50%" justify="space-between">
            <ArrowBackIcon
              boxSize={7}
              color="white"
              onClick={onPrevClick}
            ></ArrowBackIcon>
            <CheckIcon
              boxSize={5}
              color="white"
              onClick={onComplete}
            ></CheckIcon>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
