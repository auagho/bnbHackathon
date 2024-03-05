import React from "react";

import { Box, Flex } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

import styles from "@/styles/mainPane.module.css";

import backArrow from "../../assets/arrowleft.png";
import noti from "../../assets/notification.png";
import successful from "../../assets/successful.png";

export default function Successful() {
  return (
    <Box className={styles.container3} style={{ padding: "10px" }}>
      <Flex justifyContent="space-between">
        <Link href="/home">
          <Flex>
            <Button style={{ background: 0, padding: 0 }}>
              <Image src={backArrow} alt="backArrow" />
            </Button>
          </Flex>
        </Link>
        <Flex>
          <Button style={{ background: 0, padding: 0 }}>
            <Image src={noti} alt="notification" />
          </Button>
        </Flex>
      </Flex>
      <Flex
        className={styles.box1}
        style={{ width: "100%" }}
        flexDirection="column"
        gap="10px"
        mt="30px"
      >
        <Image src={successful} style={{ padding: "30px" }} />

        <Link href="/home">
          <Button
            className={styles.button3}
            colorScheme="blue"
            mt="80px"
            style={{ fontSize: "13px" }}
          >
            Back to home
          </Button>
        </Link>
      </Flex>
    </Box>
  );
}
