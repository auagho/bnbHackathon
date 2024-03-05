// import { useEffect, useState } from 'react';

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
} from "@chakra-ui/react";

export default function ConnectModal() {
  // const [datas, setDatas] = useState<object[]>([]);

  // useEffect(() => {
  //   fetch("/api/getData")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setDatas(data.data);
  //     })
  //     .catch((error) => console.error("Fetching data failed", error));
  // }, []);

  return (
    <>
      <Modal isOpen={true} onClose={() => {}} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Connect Your KIE-MECS to Your Wallet</ModalHeader>
          {/* {datas.map((data: any, index: number) => {
            return <div key={index}>{data.measure_dt}</div>;
          })} */}
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel htmlFor="system-id">KIE-MECS system ID</FormLabel>
              <Input id="system-id" placeholder="159877WQ08...." />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
