import { FC } from "react";
import { Box, Text, Divider } from "@chakra-ui/react";

const Lokasi: FC = () => {
  return (
    <Box bg="brand.white" w="100%" mt="8">
      <Text color="brand.black" fontWeight="bold" fontSize="30" mb="4">
        Lokasi
      </Text>
      <Box bg="brand.primary" p="4" borderRadius={10}>
        <Box
          w="100%"
          h="400px"
          borderRadius={10}
          overflow="hidden"
          position="relative"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d705.3067555235336!2d109.45835337964408!3d-0.03635492358087572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1692630522185!5m2!1sen!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
          ></iframe>
          <Box
            position="absolute"
            bottom="0"
            left="0"
            bg="brand.primary"
            opacity="0.4"
            w="100%"
          >
            <Text p="4" color="brand.white">
              Jl. Trans Kalimantan, Desa Jawa Tengah, Kec. Sungai Ambawang, Kab.
              Kubu Raya, Kalimantan Barat
            </Text>
          </Box>
        </Box>
      </Box>
      <Divider my="10" />
    </Box>
  );
};

export default Lokasi;
