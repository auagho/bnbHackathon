"use client";
import { Box, Flex } from "@chakra-ui/react";

import { Header, SecurityCode } from "@/components";

export default function Home() {
  return (
    <Flex flexDirection="column" minHeight="100vh">
      <Header />

      <Box flex={1} p={4}>
        <SecurityCode />
      </Box>
    </Flex>
  );
}
