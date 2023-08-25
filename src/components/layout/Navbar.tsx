import { FC } from "react";
import { Box, Text, useDisclosure } from "@chakra-ui/react";
import BurgerIcon from "../icons/BurgerIcon";
import DrawerNav from "./DrawerNav";
import Image from "next/image";
import Logo from "@/assets/png/logo.png";

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
        alignItems="center"
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
        <Image src={Logo} alt="Study Image" width={50} height={50} />
      </Box>
    </>
  );
};

export default Navbar;
