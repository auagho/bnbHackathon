import React from "react";

import { Box, Flex } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

import { SellNowModal } from "@/components";
import styles from "@/styles/mainPane.module.css";

import backArrow from "../../assets/arrowleft.png";
import backback from "../../assets/backback.png";
import energe from "../../assets/energe.png";

export default function InputPad() {
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
            <Image src={energe} width={32} height={32} />
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

      <Flex className={styles.box1} style={{ width: "100%" }} flexDirection="column" gap="10px">
        <Box className={styles.subtext8}>Customer ID</Box>
        <Box>
          <Input placeholder="Serial number" />
        </Box>
        <Box>
          <SellNowModal />
        </Box>
        <Flex flexDirection="column" gap="10px">
          <Flex gap="10px">
            <Button className={styles.button4} colorScheme="blue">
              1
            </Button>
            <Button className={styles.button4} colorScheme="blue">
              2
            </Button>
            <Button className={styles.button4} colorScheme="blue">
              3
            </Button>
          </Flex>
          <Flex gap="10px">
            <Button className={styles.button4} colorScheme="blue">
              4
            </Button>
            <Button className={styles.button4} colorScheme="blue">
              5
            </Button>
            <Button className={styles.button4} colorScheme="blue">
              6
            </Button>
          </Flex>
          <Flex gap="10px">
            <Button className={styles.button4} colorScheme="blue">
              7
            </Button>
            <Button className={styles.button4} colorScheme="blue">
              8
            </Button>
            <Button className={styles.button4} colorScheme="blue">
              9
            </Button>
          </Flex>
          <Flex gap="10px">
            <Button style={{ background: 0, width: "92px" }}></Button>
            <Button className={styles.button4} colorScheme="blue">
              0
            </Button>
            <Button className={styles.button4} colorScheme="blue">
              <Image src={backback} style={{ width: "22px", height: "22px" }} />
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
