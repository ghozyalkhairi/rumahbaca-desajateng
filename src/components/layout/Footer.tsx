import { FC } from "react";
import { Box, Text, Divider } from "@chakra-ui/react";

const Footer: FC = () => {
  return (
    <Box w="100%" mt="4">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        p="4"
      >
        <Text color="brand.primary" fontSize="14" textAlign="center">
          © {new Date().getFullYear()} Rumah Baca Masyarakat Desa Jawa Tengah
        </Text>
        <Text color="brand.primary" fontSize="14" textAlign="center">
          All Rights Reserved
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
