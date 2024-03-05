import { useState } from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  Box,
  Flex,
  useToast,
} from "@chakra-ui/react";
import { useWriteContract } from "wagmi";

import { luxContractABI } from "@/contracts/luxContract";
import styles from "@/styles/mainPane.module.css";

export default function SellNowModal({
  readyToSell,
  systemId,
  inputValue,
}: {
  readyToSell: number;
  systemId: string;
  inputValue: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [buttonText, setButtonText] = useState("Next");
  const { writeContractAsync } = useWriteContract();
  const toast = useToast();

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleSellNow = () => {
    writeContractAsync({
      abi: luxContractABI,
      address: `0x${process.env.NEXT_PUBLIC_LUX_CONTRACT_ADDRESS}`,
      functionName: "registerTransaction",
      args: [readyToSell],
    })
      .then((tx) => {
        console.log("Transaction successful:", tx);
        return tx;
      })
      .then((receipt) => {
        console.log("Transaction successful with receipt:", receipt);
        toast({
          title: "Success",
          description: "Your data has been sold.",
          status: "success",
          duration: 9000,
          isClosable: true,
          onCloseComplete: () => (window.location.href = "/mystatus"),
        });
      })
      .catch((error) => {
        toast({
          title: "Error",
          description: "There was a problem processing the transaction.",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
        console.error("Transaction failed:", error);
      });
    handleClose();
  };

  return (
    <>
      <Button
        onClick={() => {
          if (inputValue !== systemId) {
            setButtonText("System ID is not correct");
          } else {
            setButtonText("Next");
            handleOpen();
          }
        }}
        className={styles.button3}
        colorScheme="blue"
      >
        {buttonText}
      </Button>

      <Modal isOpen={isOpen} onClose={handleClose} isCentered>
        <ModalOverlay />
        <ModalContent className={styles.modalContainer}>
          <ModalHeader className={styles.modalTitle}>
            Are you sure want to sell your data?
          </ModalHeader>
          <ModalBody>
            <Flex flexDirection="column" gap="16px">
              <Flex justifyContent="space-between">
                <Box className={styles.modalTextSub}>Receive</Box>
                <Box className={styles.modalTextValue}>{readyToSell} LUX</Box>
              </Flex>
              <Flex justifyContent="space-between">
                <Box className={styles.modalTextSub}>Name</Box>
                <Box className={styles.modalTextValue}>Domenic Diavanda</Box>
              </Flex>
              <Flex justifyContent="space-between">
                <Box className={styles.modalTextSub}>Customer ID</Box>
                <Box className={styles.modalTextValue}>{systemId}</Box>
              </Flex>
              <Flex justifyContent="space-between">
                <Box className={styles.modalTextSub}>Status</Box>
                <Box className={styles.modalTextValue} style={{ color: "red" }}>
                  Ready To Sell
                </Box>
              </Flex>
            </Flex>
          </ModalBody>

          <ModalFooter gap="10px">
            <Button onClick={handleClose} className={styles.modalButton2}>
              Close
            </Button>
            <Button onClick={handleSellNow} className={styles.modalButton}>
              Sell now
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
