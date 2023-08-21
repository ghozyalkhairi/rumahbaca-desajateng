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
        <Text color="brand.primary" fontSize="16">
          © 2023 Rumah Baca
        </Text>
        <Text color="brand.primary" fontSize="16">
          All Rights Reserved
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
