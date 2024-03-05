import React from "react";

import { Box, Flex } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

import styles from "@/styles/mainPane.module.css";

import backArrow from "../../assets/arrowleft.png";
import backback from "../../assets/backback.png";

export default function SecurityCode() {
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
          <Input placeholder="Serial number" style={{ width: "60px", height: "60px" }} />

          <Input placeholder="Serial number" style={{ width: "60px", height: "60px" }} />

          <Input placeholder="Serial number" style={{ width: "60px", height: "60px" }} />

          <Input placeholder="Serial number" style={{ width: "60px", height: "60px" }} />
        </Flex>

        <Flex flexDirection="column" gap="10px" pt="50px">
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
