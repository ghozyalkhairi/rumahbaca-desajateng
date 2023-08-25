import { FC } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Text,
  Divider,
  Box,
} from "@chakra-ui/react";
import Image from "next/image";
import Logo from "@/assets/png/logo.png";
import { Link } from "@chakra-ui/next-js";

interface DrawerNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const DrawerNav: FC<DrawerNavProps> = ({ isOpen, onClose }) => {
  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="full">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>
          <Box w="100%" display="flex" justifyContent="center">
            <Image src={Logo} alt="Study Image" width={60} height={60} />
          </Box>
        </DrawerHeader>

        <DrawerBody>
          <Link href="/" onClick={onClose}>
            <Text color="brand.black" fontSize="17" my="2">
              Beranda
            </Text>
            <Divider />
          </Link>
          <Link href="/visimisi" onClick={onClose}>
            <Text color="brand.black" fontSize="17" my="2">
              Visi dan Misi
            </Text>
            <Divider />
          </Link>
          <Link href="/contact" onClick={onClose}>
            <Text color="brand.black" fontSize="17" my="2">
              Hubungi Kami
            </Text>
            <Divider />
          </Link>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerNav;
