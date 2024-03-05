// components/MainPane.tsx
import { type FC } from "react";

import { Box, Flex, useColorMode } from "@chakra-ui/react";
import { Slider, SliderTrack, SliderFilledTrack, SliderThumb } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import Image from "next/image";

import styles from "@/styles/mainPane.module.css";

import back from "../../assets/back.png";
import imagebg from "../../assets/image.png";

const MainPane: FC = () => {
  const { colorMode } = useColorMode();

  return (
    <Box>
      <Box
        className={styles.container}
        border={colorMode === "light" ? "none" : "1px solid rgba(152, 161, 192, 0.24)"}
      >
        <Flex justifyContent="center" flexDirection="column" position="relative">
          <p className={styles.subtitle}>Today’s Weather</p>
          <Flex justifyContent="center" style={{ padding: "35px" }}>
            <Image src={back} alt="back" width={130} height={130} />
          </Flex>
          <Flex flexDirection="column" alignItems="flex-start" position="absolute" top="130px">
            <p className={styles.subtext1}>19º</p>
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
          <p className={styles.subtext2}>56 - Moderate</p>
          <p className={styles.subtext3}>
            Air quality is 56, which is the same as
            <br /> yesterday at about this time.
          </p>
          <Slider aria-label="slider-ex-1" defaultValue={30}>
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
            See More
          </Button>
        </Flex>
      </Box>
      <Box
        className={styles.container2}
        border={colorMode === "light" ? "none" : "1px solid rgba(152, 161, 192, 0.24)"}
      >
        <Flex
          justifyContent="center"
          style={{ textAlign: "start", width: "100%" }}
          flexDirection="column"
        >
          <p className={styles.subtest4}>Temperature</p>
          <Box style={{ width: "100%" }}>
            <Image src={imagebg} alt="back" style={{ width: "100%", height: "130px" }} />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default MainPane;
