import { FC } from "react";
import { Box, Text } from "@chakra-ui/react";

const AboutHero: FC = () => {
  return (
    <Box bg="brand.white" w="100%" mt="8">
      <Text color="brand.black" fontWeight="bold" fontSize="32" mt="6" as="h1">
        Sarana{" "}
        <Text as="span" color="brand.primary">
          pembelajaran
        </Text>{" "}
        dari, oleh dan untuk{" "}
        <Text as="span" color="brand.primary">
          masyarakat
        </Text>
      </Text>
    </Box>
  );
};

export default AboutHero;
