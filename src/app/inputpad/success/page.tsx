"use client";
import { Box, Flex } from "@chakra-ui/react";

import { Successful, Header } from "@/components";

export default function Success() {
  return (
    <Flex flexDirection="column" minHeight="100vh">
      <Header />

      <Box flex={1} p={4}>
        <Successful />
      </Box>
    </Flex>
  );
}
