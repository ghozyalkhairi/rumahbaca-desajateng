import { FC } from "react";
import { Box, Text, useDisclosure } from "@chakra-ui/react";
import BurgerIcon from "../icons/BurgerIcon";
import DrawerNav from "./DrawerNav";

const Navbar: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <DrawerNav isOpen={isOpen} onClose={onClose} />
      <Box
        bg="brand.white"
        w="100%"
        display="flex"
        justifyContent="space-between"
        py="2"
      >
        <Box
          onClick={onOpen}
          _hover={{
            cursor: "pointer",
          }}
        >
          <BurgerIcon />
        </Box>
        <Text color="brand.black" fontWeight="bold" fontSize="20">
          Rumah
          <Text as="span" color="brand.primary">
            Baca
          </Text>
        </Text>
      </Box>
    </>
  );
};

export default Navbar;
