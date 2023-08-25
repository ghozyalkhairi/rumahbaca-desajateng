import { Box, Button, Text } from "@chakra-ui/react";
import { FC } from "react";
import Person from "@/assets/jpg/person.jpeg";
import Image from "next/image";
import WhatsAppIcon from "../icons/WhatsAppIcon";

const Profile: FC = () => {
  return (
    <Box
      bg="brand.white"
      w="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        bg="brand.semiWhite"
        w="200px"
        h="200px"
        borderRadius="full"
        position="relative"
        my="8"
      >
        <Image
          src={Person}
          alt="Person"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
            borderRadius: 100,
          }}
        />
      </Box>
      <Box
        w="100%"
        p="4"
        mb="4"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        bg="#dedede"
        borderRadius={10}
      >
        <Text
          color="brand.black"
          fontWeight="bold"
          fontSize="24"
          mb="4"
          textAlign="center"
        >
          Dedi Rianto
        </Text>
        <Text
          color="brand.black"
          fontSize="16"
          fontStyle="italic"
          as="p"
          textAlign="center"
        >
          Founder Rumah Baca Masyarakat Desa Jawa Tengah
        </Text>
        <Button
          w="100%"
          mt="4"
          bg="brand.primary"
          color="brand.white"
          variant="outline"
          _hover={{
            opacity: 0.8,
          }}
        >
          <Box
            as="a"
            href="https://wa.me/6285750066711"
            target="_blank"
            w="100%"
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              gap="2"
            >
              <Text>Hubungi</Text>
              <WhatsAppIcon width={24} height={24} color="#fff" />
            </Box>
          </Box>
        </Button>
      </Box>
    </Box>
  );
};

export default Profile;
