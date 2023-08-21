import { FC } from "react";
import { Box, Text, Button, Divider } from "@chakra-ui/react";
import Image from "next/image";
import StudyImage from "@/assets/jpg/study.jpg";

const Hero: FC = () => {
  return (
    <Box bg="brand.white" w="100%" mt="8">
      <Image
        src={StudyImage}
        alt="study"
        style={{
          width: "100%",
          borderRadius: "10px",
        }}
      />
      <Text color="brand.black" fontWeight="bold" fontSize="26" mt="6" as="h1">
        Rumah Baca Masyarakat
      </Text>
      <Text color="brand.black" fontSize="26" as="h1">
        Desa Jawa Tengah
      </Text>
      <Text color="brand.black" fontSize="16" my="6" as="p">
        Rumah Baca Masyarakat adalah tempat yang didirikan oleh pemuda untuk
        menyediakan bahan bacaan dan menumbuhkan minat baca masyarakat, serta
        menjadikan tempat pembelajaran yang kreatif dan inovatif.
      </Text>
      <Button
        bg="brand.primary"
        color="brand.white"
        w="100%"
        py="8"
        fontSize="20"
        _hover={{
          bg: "brand.primary",
          opacity: "0.8",
        }}
      >
        HUBUNGI KAMI
      </Button>
      <Divider my="10" />
    </Box>
  );
};

export default Hero;
