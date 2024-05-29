import { Button, Flex, Input, Spinner, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import { typeState } from "../../state/atom";

export default function GPTModal({ setShowModal, selectedList }: any) {
  const [q, setQ] = useState("");
  const [gptResult, setChatGPTResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [secCode, setSecCode] = useState("");
  const type = useRecoilValue(typeState);

  const maxRequestsPerDay = 2;

  function getTodayDateString() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  // 로컬 스토리지에 저장된 날짜가 오늘과 다른지 확인하고, 다르면 요청 횟수 초기화하는 함수
  function resetRequestCountIfNewDay() {
    const today = getTodayDateString();
    const savedDate = localStorage.getItem("savedDate");
    if (!savedDate || savedDate !== today) {
      localStorage.setItem("savedDate", today);
      localStorage.setItem("requestCount", "0");
    }
  }

  // 로컬 스토리지에 저장된 요청 횟수를 가져오는 함수
  function getRequestCountFromLocalStorage() {
    resetRequestCountIfNewDay();
    const requestCountString = localStorage.getItem("requestCount");
    return requestCountString ? parseInt(requestCountString) : 0;
  }

  // 로컬 스토리지에 저장된 요청 횟수를 증가시키는 함수
  function incrementRequestCountInLocalStorage() {
    const currentCount = getRequestCountFromLocalStorage();
    localStorage.setItem("requestCount", currentCount + 1 + "");
  }

  const onChatGPTSubmit = async () => {
    if (secCode != process.env.NEXT_PUBLIC_SEC) {
      const requestCount = getRequestCountFromLocalStorage();

      if (requestCount >= maxRequestsPerDay) {
        alert("당일 요청 횟수를 초과했습니다. 내일 이용해주세요!");
        return;
      }
    }

    try {
      setLoading(true);
      const response = await fetch("/api/chat", {
        method: "POST",
        body: JSON.stringify({ question: q, cards: selectedList, type }),
      });

      if (response.ok) {
        const data = await response.json();
        setChatGPTResult(data.message.replace(/\n/g, "<br>"));
        setLoading(false);
        incrementRequestCountInLocalStorage();
      } else {
        console.log("API 요청 실패. 상태 코드:", response.status);
      }
    } catch (error) {
      console.error("API 요청 오류:", error);
    }
  };

  const onClickComplete = () => {
    setShowModal(false);
  };

  return (
    <Flex
      w="100vw"
      maxW={"800px"}
      h="100vh"
      position="absolute"
      alignItems="center"
      justifyContent="center"
      zIndex={10}
    >
      <Flex
        bgColor="rgba(255, 255, 255, 0.9)"
        flexDir="column"
        w="90vw"
        h="90vh"
        alignItems="center"
        justifyContent="space-between"
        borderRadius="10px"
        p="20px 20px"
        border="1px solid white"
      >
        <Flex w="100%" justifyContent="space-between" alignItems="center">
          <Text>남은 요청 횟수: {2 - getRequestCountFromLocalStorage()}</Text>
          <Button
            bgColor="black"
            onClick={onClickComplete}
            border="1px solid white"
            color="white"
          >
            X
          </Button>
        </Flex>
        <Input
          w="50%"
          type="text"
          onChange={(e) => setSecCode(e.target.value)}
          outline="none"
          color="black"
          margin="10px 0"
          bgColor="blackAlpha.400"
        ></Input>
        <Text
          w="100%"
          h="50%"
          flex="1"
          border="3px solid black"
          bgColor="blackAlpha.400"
          dangerouslySetInnerHTML={{ __html: gptResult }}
          overflowY="scroll"
        ></Text>
        <Input
          type="text"
          onChange={(e) => setQ(e.target.value)}
          outline="none"
          placeholder="질문을 입력해주세요"
          color="black"
          margin="10px 0"
          border="3px solid black"
          bgColor="blackAlpha.400"
        />

        {loading ? (
          <Spinner></Spinner>
        ) : (
          <Button
            border="2px solid black"
            bgColor="black"
            color="white"
            onClick={onChatGPTSubmit}
            transitionDuration="0.5s"
            _hover={{
              color: "black",
              bgColor: "blackAlpha.400",
            }}
          >
            질문하기
          </Button>
        )}
      </Flex>
    </Flex>
  );
}
