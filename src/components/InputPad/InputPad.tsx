import React, { useEffect, useState } from "react";

import { Box, Center, Flex, Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useAccount, useReadContract } from "wagmi";

import { SellNowModal } from "@/components";
import { luxContractABI } from "@/contracts/luxContract";
import { productContractABI } from "@/contracts/productContract";
import styles from "@/styles/mainPane.module.css";

import backArrow from "../../assets/arrowleft.png";
import energe from "../../assets/energe.png";

export default function InputPad() {
  const [inputValue, setInputValue] = useState("");
  const { address } = useAccount();
  const [readyToSell, setReadyToSell] = useState(0);
  const [systemId, setSystemId] = useState("");

  const { data, error } = useReadContract({
    abi: productContractABI,
    address: `0x${process.env.NEXT_PUBLIC_PRODUCT_CONTRACT_ADDRESS}`,
    functionName: "getProduct",
    account: address,
  });

  const { data: luxData } = useReadContract({
    abi: luxContractABI,
    address: `0x${process.env.NEXT_PUBLIC_LUX_CONTRACT_ADDRESS}`,
    functionName: "getUserTransactions",
    args: [address],
  });

  const transformLuxData = (luxData: number[]) => {
    const transactions = [];
    for (let i = 0; i < luxData?.length; i += 2) {
      transactions.push({
        amount: luxData[i],
        timestamp: luxData[i + 1],
      });
    }
    return transactions;
  };
  const luxTransactions = transformLuxData(luxData as number[]);
  const received = luxTransactions.reduce((acc, transaction) => acc + transaction.amount, 0) % 1000;

  const productData = data as string[] | undefined;

  if (error) {
    console.error("Error occurred during getProduct call:", error);
  } else {
    console.log("productData?.[0]:", productData?.[0]);
  }

  useEffect(() => {
    if (productData?.[0]) {
      fetch(`/api/getDatas?system_id=${productData?.[0]}`)
        .then((response) => response.json())
        .then((data) => {
          if (!data.data || data.data.length === 0) {
            // err
          } else {
            setSystemId(data?.data?.[0]?.system_id);
            setReadyToSell(data?.data?.length - received);
          }
        })
        .catch((error) => {
          console.error("Fetching data failed", error);
        });
    }
  }, [productData]);

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
        <Flex w="75%" justifyContent="center" alignItems="center">
          <Box className={styles.subtest5}>Sell</Box>
        </Flex>
      </Flex>
      <Flex p="30px 0" flexDirection="column">
        <Flex alignItems="center">
          <Flex>
            <Image src={energe} width={32} height={32} alt="energe" />
          </Flex>
          <Flex>
            <Box className={styles.subtext6}>Weather Data</Box>
          </Flex>
        </Flex>
        <Flex>
          <Box className={styles.subtext7}>
            Sell Your Current Weather Data with the
            <br /> Installed Device at Your Preferred Location
          </Box>
        </Flex>
      </Flex>

      <Flex
        className={styles.box1}
        style={{
          width: "100%",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          padding: "20px",
        }}
        flexDirection="column"
        gap="20px"
      >
        <Flex justifyContent="space-between" width="100%">
          <Link href="/home" style={{ flex: 1, textAlignLast: "left" }}>
            <Button style={{ background: 0, padding: 0 }}>
              <Image src={backArrow} alt="backArrow" />
            </Button>
          </Link>
          <Text
            fontSize="lg"
            fontWeight="bold"
            color="gray.700"
            style={{ flex: 1, textAlign: "center", alignSelf: "center" }}
          >
            System ID
          </Text>
          <Box style={{ flex: 1 }}></Box> {/* 이 부분은 오른쪽 공간을 비워두기 위함입니다. */}
        </Flex>
        <Input
          placeholder="159877WQ08...."
          size="lg"
          variant="filled"
          _placeholder={{ color: "gray.500" }}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          focusBorderColor="blue.500"
        />
        <Center>
          <SellNowModal readyToSell={readyToSell} systemId={systemId} inputValue={inputValue} />
        </Center>
      </Flex>
    </Box>
  );
}
