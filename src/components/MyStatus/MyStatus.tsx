import { Box, Flex } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import Image from "next/image";

import styles from "@/styles/mainPane.module.css";

import arrowsort from "../../assets/arrowsort.png";
import money from "../../assets/money.png";
import safebox from "../../assets/safebox01.png";
import test from "../../assets/test.png";

export default function MyStatus() {
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
                  <CircularProgress value={20} color="#409CFF" capIsRound="true">
                    <CircularProgressLabel>
                      <Flex justifyContent="center">
                        <Image src={safebox} />
                      </Flex>
                    </CircularProgressLabel>
                  </CircularProgress>
                  <p className={styles.myStatusText1}>1,000 LUX</p>
                  <p className={styles.myStatusText2}>Received</p>
                </Flex>
              </Flex>

              <Flex flexDirection="column" style={{ textAlign: "center" }}>
                <Flex justifyContent="center" flexDirection="column" alignItems="center" gap="3px">
                  <CircularProgress value={75} color="#FF6961" capIsRound="true">
                    <CircularProgressLabel>
                      <Flex justifyContent="center">
                        <Image src={money} />
                      </Flex>
                    </CircularProgressLabel>
                  </CircularProgress>
                  <p className={styles.myStatusText1}>500 LUX</p>
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
                    strokeDashoffset: 25,
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
          <Image src={arrowsort} />
        </Flex>
        <Flex className={styles.myStatusContainer}>
          <Flex>
            <Image src={test} style={{ borderRadius: "20px" }} />
          </Flex>
          <Flex w="100%" flexDirection="column" alignItems="center" p="5px">
            <Flex w="100%" justifyContent="space-between">
              <Flex className={styles.myStatusText6}>LUX Received</Flex>
              <Flex className={styles.myStatusText7}>+1000 LUX</Flex>
            </Flex>
            <Flex w="100%" justifyContent="space-between">
              <Flex className={styles.myStatusText8}>Jan 28, 2023 08.00</Flex>
              <Flex className={styles.myStatusText9}>Received</Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
