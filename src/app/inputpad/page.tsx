"use client";
import { Box, Flex } from "@chakra-ui/react";

import { Footer, Header, InputPad } from "@/components";

export default function Inputpad() {
  return (
    <Flex flexDirection="column" minHeight="100vh">
      <Header />

      <Box flex={1} p={4}>
        <InputPad />
      </Box>

      <Footer />
    </Flex>
  );
}
