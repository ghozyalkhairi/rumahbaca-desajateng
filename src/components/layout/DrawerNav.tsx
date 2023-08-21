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
} from "@chakra-ui/react";
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
          <Text
            color="brand.black"
            fontWeight="bold"
            fontSize="20"
            textAlign="center"
          >
            Rumah
            <Text as="span" color="brand.primary">
              Baca
            </Text>
          </Text>
        </DrawerHeader>

        <DrawerBody>
          <Link href="/" onClick={onClose}>
            <Text color="brand.black" fontSize="17" my="2">
              Beranda
            </Text>
            <Divider />
          </Link>
          <Link href="/about" onClick={onClose}>
            <Text color="brand.black" fontSize="17" my="2">
              Tentang
            </Text>
            <Divider />
          </Link>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerNav;
