import { useState } from "react";

import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import { useAccount, useReadContract, useWriteContract } from "wagmi";

import { productContractABI } from "@/contracts/productContract";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function ConnectModal() {
  const [systemId, setSystemId] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [modalOpen, setModalOpen] = useState(true);
  const [wait, setWait] = useState(false);
  const toast = useToast();
  const { address } = useAccount();
  const { writeContractAsync } = useWriteContract();

  const { data: productData } = useReadContract({
    abi: productContractABI,
    address: `0x${process.env.NEXT_PUBLIC_PRODUCT_CONTRACT_ADDRESS}`,
    functionName: "getProduct",
    account: address,
  });

  const handleSubmit = () => {
    const getProductDataResult = productData as string[] | undefined;

    if (getProductDataResult?.length) {
      if (getProductDataResult?.includes(systemId)) {
        setErrorMessage("This System ID is already connected.");
      }
    }

    fetch(`/api/getData?system_id=${systemId}`)
      .then((response) => response.json())
      .then((data) => {
        if (!data.data || data.data.length === 0) {
          setErrorMessage("The System ID does not exist.");
          toast({
            title: "Error",
            description: "The System ID does not exist.",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        } else {
          setWait(true);
          writeContractAsync({
            abi: productContractABI,
            address: `0x${process.env.NEXT_PUBLIC_PRODUCT_CONTRACT_ADDRESS}`,
            functionName: "registerProduct",
            args: [systemId],
          })
            .then((tx) => {
              console.log("Transaction successful:", tx);
              return tx;
            })
            .then((receipt) => {
              console.log("Transaction successful with receipt:", receipt);
              setModalOpen(false);
              setWait(false);
              toast({
                title: "Success",
                description: "System ID has been connected.",
                status: "success",
                duration: 9000,
                isClosable: true,
                onCloseComplete: () => window.location.reload(),
              });
            })
            .catch((error) => {
              setWait(false);
              toast({
                title: "Error",
                description: "There was a problem processing the transaction.",
                status: "error",
                duration: 9000,
                isClosable: true,
              });
              console.error("Transaction failed:", error);
            });
          setErrorMessage("");
        }
      })
      .catch((error) => {
        console.error("Fetching data failed", error);
        setErrorMessage("The System ID does not exist.");
        toast({
          title: "Error",
          description: "The System ID does not exist.",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      });
  };

  return (
    <>
      <Modal isOpen={modalOpen} onClose={() => {}} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Connect Your KIE-MECS to Your Wallet</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel htmlFor="system-id">KIE-MECS System ID</FormLabel>
              <Input
                id="system-id"
                placeholder="159877WQ08...."
                value={systemId}
                onChange={(e) => setSystemId(e.target.value)}
              />
              {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            </FormControl>
          </ModalBody>
          <ModalFooter>
            {wait ? (
              <Spinner color="blue.500" />
            ) : (
              <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
                Submit
              </Button>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
