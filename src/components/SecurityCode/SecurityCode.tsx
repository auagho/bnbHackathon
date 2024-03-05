import { useState, useRef, useEffect } from "react";

import { Flex, Input, Button } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

import styles from "@/styles/mainPane.module.css";

import backArrow from "../../assets/arrowleft.png";
import backback from "../../assets/backback.png";

export default function SecurityCode() {
  const [inputValues, setInputValues] = useState(["", "", "", ""]); // 각 input 필드의 값
  const inputRefs = useRef([]); // 인풋 태그의 ref를 저장할 배열

  // useEffect를 사용하여 inputRefs 배열 초기화
  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, inputValues.length);
  }, [inputValues]);

  // 입력된 값을 업데이트하는 함수
  const handleButtonClick = (value) => {
    // 현재 선택된 인풋 태그의 값에 값을 차례로 추가
    setInputValues((prevValues) => {
      const currentIndex = prevValues.findIndex((value) => value.length === 0);
      if (currentIndex !== -1) {
        const newValues = [...prevValues];
        newValues[currentIndex] = value;
        return newValues;
      }
      return prevValues;
    });

    // 다음 인풋 태그로 포커스 이동
    moveFocusToNextInput();
  };
  // 입력 값이 한 자리일 때 다음 인풋 태그로 포커스를 이동하는 함수
  const moveFocusToNextInput = () => {
    const nextIndex = inputValues.findIndex((value) => value.length === 0);
    if (nextIndex !== -1) {
      inputRefs.current[nextIndex].focus();
    }
  };

  const moveFocusToPrevInput = () => {
    const lastIndex = inputValues
      .slice()
      .reverse()
      .findIndex((value) => value.length > 0); // 가장 마지막에 입력된 값의 인덱스
    if (lastIndex !== -1) {
      inputRefs.current[inputValues.length - lastIndex - 1].focus();
    }
  };

  const handleDelete = () => {
    setInputValues((prevValues) => {
      const newValues = [...prevValues];
      const lastIndex = newValues
        .slice()
        .reverse()
        .findIndex((value) => value.length > 0); // 가장 마지막에 입력된 값의 인덱스
      if (lastIndex !== -1) {
        newValues[newValues.length - lastIndex - 1] = ""; // 가장 마지막에 입력된 값 삭제
      }
      return newValues;
    });

    // 현재 인풋 태그로 포커스 이동
    moveFocusToPrevInput();
  };

  // 입력된 값이 네 개인지 확인하는 함수
  const isInputComplete = inputValues.every((value) => value.length === 1);

  // 입력 값이 한 자리일 때 다음 인풋 태그로 포커스를 이동하는 함수
  const handleInputChange = (value, index) => {
    // 입력 값이 한 자리일 때 다음 인풋 태그로 포커스 이동
    if (value.length === 1 && index < inputValues.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  // 입력 값이 네 개일 때 모달을 열고 입력 값을 초기화하는 함수
  const handleInputComplete = () => {
    if (isInputComplete) {
      window.location.href = "/inputpad/success";
    }
  };

  return (
    <Box className={styles.container3} style={{ padding: "10px" }}>
      <Flex>
        <Link href="/home">
          <Flex>
            <Button style={{ background: 0, padding: 0 }}>
              <Image src={backArrow} alt="backArrow" />
            </Button>
          </Flex>
        </Link>
      </Flex>
      <Flex p="30px 0" flexDirection="column" gap="10px">
        <Flex alignItems="center">
          <Flex>
            <Box className={styles.subtext8}>
              Enter your
              <br />
              security code
            </Box>
          </Flex>
        </Flex>
        <Flex>
          <Box className={styles.subtext9}>
            Enter your security code or simply using the touch of your
            <br /> fingerprint to confirm your transaction.
          </Box>
        </Flex>
      </Flex>

      <Flex className={styles.box1} style={{ width: "100%" }} flexDirection="column" gap="10px">
        <Flex gap="18px" p="10px">
          {inputValues.map((value, index) => (
            <Input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)} // ref 설정
              value={value}
              placeholder=""
              style={{ width: "60px", height: "60px" }}
              onChange={(e) => {
                const newValue = e.target.value.slice(-1); // 마지막 문자만 사용
                setInputValues((prevValues) => {
                  const newValues = [...prevValues];
                  newValues[index] = newValue;
                  return newValues;
                });
                handleInputChange(newValue, index); // 입력 값 변경 시 포커스 이동
              }}
            />
          ))}
        </Flex>

        <Flex flexDirection="column" gap="10px" pt="50px">
          <Flex gap="10px">
            {[1, 2, 3].map((number) => (
              <Button
                key={number}
                className={styles.button4}
                colorScheme="blue"
                onClick={() => handleButtonClick(number.toString())}
              >
                {number}
              </Button>
            ))}
          </Flex>
          <Flex gap="10px">
            {[4, 5, 6].map((number) => (
              <Button
                key={number}
                className={styles.button4}
                colorScheme="blue"
                onClick={() => handleButtonClick(number.toString())}
              >
                {number}
              </Button>
            ))}
          </Flex>
          <Flex gap="10px">
            {[7, 8, 9].map((number) => (
              <Button
                key={number}
                className={styles.button4}
                colorScheme="blue"
                onClick={() => handleButtonClick(number.toString())}
              >
                {number}
              </Button>
            ))}
          </Flex>
          <Flex gap="10px">
            {/* 빈 버튼 */}
            <Button style={{ background: 0, width: "92px" }}></Button>
            <Button
              className={styles.button4}
              colorScheme="blue"
              onClick={() => handleButtonClick("0")}
            >
              0
            </Button>
            <Button className={styles.button4} colorScheme="blue" onClick={() => handleDelete("")}>
              <Image src={backback} style={{ width: "22px", height: "22px" }} />
            </Button>
          </Flex>
        </Flex>

        {/* 네 번째 입력 필드가 완료되면 /inputpad/success 페이지로 이동 */}
        {isInputComplete && handleInputComplete()}
      </Flex>
    </Box>
  );
}
