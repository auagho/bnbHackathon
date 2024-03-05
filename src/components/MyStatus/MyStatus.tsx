import { useEffect, useState } from "react";

import { Box, Flex } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import Image from "next/image";
import { useAccount, useReadContract } from "wagmi";

import { luxContractABI } from "@/contracts/luxContract";
import { productContractABI } from "@/contracts/productContract";
import styles from "@/styles/mainPane.module.css";

import arrowsort from "../../assets/arrowsort.png";
import money from "../../assets/money.png";
import safebox from "../../assets/safebox01.png";
import test from "../../assets/test.png";

export default function MyStatus() {
  const { address } = useAccount();
  const [readyToSell, setReadyToSell] = useState(0);

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

  const productData = data as string[] | undefined;
  // const luxDataResult = luxData as string[] | undefined;

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

  console.log("Transformed luxData:", luxTransactions);
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
            console.log(data?.data);
            setReadyToSell(data?.data?.length - received);
          }
        })
        .catch((error) => {
          console.error("Fetching data failed", error);
        });
    }
  }, [productData]);

  return (
    <Box>
      <Flex justifyContent="center" pb="50px" alignItems="center">
        <p className={styles.myStatusTitle}>My Status</p>
      </Flex>
      <Box className={styles.container4} p="10px">
        <Flex justifyContent="center" flexDirection="column">
          <Flex justifyContent="space-between">
            <p className={styles.myStatusSubTitle}>Graph</p>
            <Flex>
              <Button className={styles.button5}>today &nbsp;♡</Button>
            </Flex>
          </Flex>
          <Flex justifyContent="space-around" gap="40px" p="20px">
            <Flex gap="40px">
              <Flex flexDirection="column" style={{ textAlign: "center" }}>
                <Flex justifyContent="center" flexDirection="column" alignItems="center" gap="3px">
                  <CircularProgress value={20} color="#409CFF" capIsRound={true}>
                    <CircularProgressLabel>
                      <Flex justifyContent="center">
                        <Image src={safebox} alt="safebox" />
                      </Flex>
                    </CircularProgressLabel>
                  </CircularProgress>
                  <p className={styles.myStatusText1}>{received} LUX</p>
                  <p className={styles.myStatusText2}>Received</p>
                </Flex>
              </Flex>

              <Flex flexDirection="column" style={{ textAlign: "center" }}>
                <Flex justifyContent="center" flexDirection="column" alignItems="center" gap="3px">
                  <CircularProgress value={75} color="#FF6961" capIsRound={true}>
                    <CircularProgressLabel>
                      <Flex justifyContent="center">
                        <Image src={money} alt="money" />
                      </Flex>
                    </CircularProgressLabel>
                  </CircularProgress>
                  <p className={styles.myStatusText1}>{readyToSell} LUX</p>
                  <p className={styles.myStatusText2}>Ready to Sell</p>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex justifyContent="space-around">
            <Flex>
              <CircularProgress
                value={98}
                color="#63B3ED"
                thickness="15px"
                size="205px"
                capIsRound={true}
              >
                <CircularProgressLabel>
                  <Flex flexDirection="column" justifyContent="center" gap="5px">
                    <p className={styles.myStatusText3}>Total Income</p>
                    <p className={styles.myStatusText4}>$1,170.45</p>
                  </Flex>
                </CircularProgressLabel>
              </CircularProgress>
              <Box style={{ position: "absolute" }}>
                <CircularProgress
                  value={75}
                  color="#FF6961"
                  thickness="15px"
                  size="205px"
                  capIsRound={true}
                  trackColor="transparent"
                  layerStyle={{
                    strokeDashoffset: "25",
                  }}
                />
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Box>
      <Flex className={styles.container3} flexDirection="column" justifyContent="space-between">
        <Flex className={styles.myStatusText5} justifyContent="space-between">
          Recent Transactions
          <Image src={arrowsort} alt="arrowsort" />
        </Flex>
        {luxTransactions &&
          luxTransactions.length > 0 &&
          luxTransactions.map((transaction, index) => (
            <Flex key={index} className={styles.myStatusContainer}>
              <Flex>
                <Image src={test} alt="test" style={{ borderRadius: "20px" }} />
              </Flex>
              <Flex w="100%" flexDirection="column" alignItems="center" p="5px">
                <Flex w="100%" justifyContent="space-between">
                  <Flex className={styles.myStatusText6}>LUX Received</Flex>
                  <Flex className={styles.myStatusText7}>+{`${transaction.amount}`} LUX</Flex>
                </Flex>
                <Flex w="100%" justifyContent="space-between">
                  <Flex className={styles.myStatusText8}>
                    {new Date(transaction.timestamp * 1000).toLocaleString("en-US")}
                  </Flex>
                  <Flex className={styles.myStatusText9}>Received</Flex>
                </Flex>
              </Flex>
            </Flex>
          ))}
      </Flex>
    </Box>
  );
}
