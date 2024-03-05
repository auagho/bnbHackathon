"use client";
import { type FC } from "react";

import { Box, Flex } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import Link from "next/link";

import styles from "@/styles/mainPane.module.css";

const Footer: FC = () => {
  return (
    <Box as="footer" p={"1rem"} position="sticky" bottom={0} zIndex={10} textAlign={"center"}>
      {/* <Link
        href=""
        target="_blank"
        rel="noopener noreferrer"
      >
        Foooooooooter
      </Link> */}
      <Flex justifyContent="center">
        <Flex gap={"10px"}>
          <Link href="/mystatus">
            <Button className={styles.button1} colorScheme="teal" size="md">
              My Status
            </Button>
          </Link>
          <Link href="/inputpad">
            <Button className={styles.button2} colorScheme="teal" size="md">
              Sell
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
