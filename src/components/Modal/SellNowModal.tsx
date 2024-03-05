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
} from "@chakra-ui/react";
import Link from "next/link";

import styles from "@/styles/mainPane.module.css";

export default function SellNowModal() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <Button onClick={handleOpen} className={styles.button3} colorScheme="blue">
        Next
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
                <Box className={styles.modalTextValue}>1000 LUX</Box>
              </Flex>
              <Flex justifyContent="space-between">
                <Box className={styles.modalTextSub}>Name</Box>
                <Box className={styles.modalTextValue}>Domenic Diavanda</Box>
              </Flex>
              <Flex justifyContent="space-between">
                <Box className={styles.modalTextSub}>Customer ID</Box>
                <Box className={styles.modalTextValue}>1230091022</Box>
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
            <Link href="/security">
              <Button onClick={handleClose} className={styles.modalButton}>
                Sell now
              </Button>
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
