"use client";
import { Box, Flex } from "@chakra-ui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useReadContract } from "wagmi";

import { Successful, Header, ConnectModal } from "@/components";
import { productContractABI } from "@/contracts/productContract";

export default function Success() {
  const { isConnected, address } = useAccount();
  const { data, error, isLoading } = useReadContract({
    abi: productContractABI,
    address: `0x${process.env.NEXT_PUBLIC_PRODUCT_CONTRACT_ADDRESS}`,
    functionName: "getProduct",
    account: address,
  });

  const productData = data as string[] | undefined;

  if (error) {
    console.error("Error occurred during getProduct call:", error);
  } else {
    console.log("productData", productData);
  }

  return (
    <>
      {!isConnected && (
        <Flex
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          zIndex={200}
        >
          <Box p={4}>
            <ConnectButton />
          </Box>
        </Flex>
      )}

      {!productData?.length && !isLoading && isConnected && <ConnectModal />}

      <Flex
        flexDirection="column"
        minHeight="100vh"
        {...(!isConnected || isLoading || !productData?.length
          ? { filter: "blur(8px)", pointerEvents: "none" }
          : {})}
      >
        {" "}
        <Header />
        <Box flex={1} p={4}>
          <Successful />
        </Box>
      </Flex>
    </>
  );
}
