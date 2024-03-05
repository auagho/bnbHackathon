// components/MainPane.tsx
import { useState, type FC, useEffect } from "react";

import { Box, Divider, Flex, Heading, useColorMode } from "@chakra-ui/react";
import { useAccount } from "wagmi";

import styles from "@/styles/mainPane.module.css";

import {
  Status,
  Address,
  Chain,
  Balance,
  BlockNumber,
  TransferNative,
  SignMessage,
} from "./components";

const MainPane: FC = () => {
  const { isConnected } = useAccount();
  const { colorMode } = useColorMode();
  const [datas, setDatas] = useState<object[]>([]);

  useEffect(() => {
    fetch("/api/getData")
      .then((response) => response.json())
      .then((data) => {
        setDatas(data.data);
      })
      .catch((error) => console.error("Fetching data failed", error));
  }, []);

  return (
    <Box
      className={styles.container}
      border={colorMode === "light" ? "none" : "1px solid rgba(152, 161, 192, 0.24)"}
    >
      <Heading as="h2" fontSize={"2rem"} mb={10} className="text-shadow">
        Display Info
      </Heading>

      {datas.map((data: any, index: number) => {
        return <div key={index}>{data.measure_dt}</div>;
      })}

      <Flex className={styles.content}>
        <Status />

        {isConnected && (
          <>
            <Address />
            <Chain />
            <Balance />
            <BlockNumber />

            <Divider mb={5} />

            <Flex
              w={"100%"}
              display={"flex"}
              justifyContent={"space-around"}
              flexWrap={"wrap"}
              gap={5}
            >
              <SignMessage />
              <TransferNative />
            </Flex>
          </>
        )}
      </Flex>
    </Box>
  );
};

export default MainPane;
