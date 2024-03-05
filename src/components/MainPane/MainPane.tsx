// components/MainPane.tsx
import { type FC } from "react";

import { Box, Flex, Table, Tbody, Td, Tr, useColorMode } from "@chakra-ui/react";
import { Slider, SliderTrack, SliderFilledTrack, SliderThumb } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import Image from "next/image";

import styles from "@/styles/mainPane.module.css";

import back from "../../assets/back.png";
// import imagebg from "../../assets/image.png";

interface MainPaneProps {
  data: any;
}

const MainPane: FC<MainPaneProps> = ({ data }: MainPaneProps) => {
  const { colorMode } = useColorMode();

  console.log("data: ", data);

  return (
    <Box>
      <Box
        className={styles.container}
        border={colorMode === "light" ? "none" : "1px solid rgba(152, 161, 192, 0.24)"}
      >
        <Flex justifyContent="center" flexDirection="column" position="relative">
          <p className={styles.subtitle}>
            {data?.temperature ? "Your Space's temperature" : "Today’s Weather"}
          </p>
          <Flex justifyContent="center" style={{ padding: "35px" }}>
            <Image src={back} alt="back" width={130} height={130} />
          </Flex>
          <Flex flexDirection="column" alignItems="flex-start" position="absolute" top="130px">
            <p className={styles.subtext1}>{data?.temperature}°</p>
            <p className={styles.subtext}>Cloud</p>
          </Flex>
        </Flex>

        {/* {isConnected && (
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
        )} */}
      </Box>
      <Box
        className={styles.container2}
        border={colorMode === "light" ? "none" : "1px solid rgba(152, 161, 192, 0.24)"}
      >
        <Flex justifyContent="center" flexDirection="column" style={{ textAlign: "start" }}>
          <p className={styles.subtext2}>{data?.pm25 || "??"} - Moderate</p>
          <p className={styles.subtext3}>
            The PM2.5 level is {data?.pm25 || "??"},
            <br />
            which is the same as yesterday at about this time.
          </p>
          <Slider aria-label="slider-ex-1" defaultValue={10} isDisabled={true}>
            <SliderTrack bg="linear-gradient(90deg, #4792F2 10.89%, #65DB7C 23.27%, #F5E753 39.37%, #E63A52 59.11%, #75212D 76.86%)">
              <SliderFilledTrack bg="transprant" />
            </SliderTrack>
            <SliderThumb />
          </Slider>
          <Button
            colorScheme="teal"
            size="sm"
            width="70px"
            marginTop="10px"
            bg="transprant"
            color="#000"
          >
            {/* See More */}
          </Button>
        </Flex>
      </Box>
      <Box
        className={styles.container2}
        border={colorMode === "light" ? "none" : "1px solid rgba(152, 161, 192, 0.24)"}
        overflowY="auto" // 스크롤을 위해 overflowY 속성 추가
      >
        <Flex
          justifyContent="center"
          style={{ textAlign: "start", width: "100%" }}
          flexDirection="column"
        >
          <p className={styles.subtest4}>Overview</p>
          <Box style={{ width: "100%", overflowX: "auto" }}>
            <Table variant="simple">
              <Tbody>
                <Tr>
                  <Td>CO2</Td>
                  <Td>{data?.co2 || "??"} ppm</Td>
                </Tr>
                <Tr>
                  <Td>humidity</Td>
                  <Td>{data?.humidity || "??"}%</Td>
                </Tr>
                <Tr>
                  <Td>PM2.5</Td>
                  <Td>{data?.pm25 || "??"} µg/m³</Td>
                </Tr>
                <Tr>
                  <Td>PM1.0</Td>
                  <Td>{data?.pm10 || "??"} µg/m³</Td>
                </Tr>
                <Tr>
                  <Td>PM0.1</Td>
                  <Td>{data?.pm01 || "??"} µg/m³</Td>
                </Tr>
              </Tbody>
            </Table>
            {/* <Image src={imagebg} alt="back" style={{ width: "100%", height: "130px" }} /> */}
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default MainPane;
