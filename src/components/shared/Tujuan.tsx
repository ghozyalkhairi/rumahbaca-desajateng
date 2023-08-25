import { FC } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Box, Text, Divider } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import RBaca3 from "@/assets/jpg/rbaca3.jpeg";

const Tujuan: FC = () => {
  return (
    <Box bg="brand.white" w="100%">
      <Text color="brand.black" fontWeight="bold" fontSize="30" mb="4">
        Tujuan
      </Text>
      <Box
        bg="brand.semiWhite"
        px="4"
        py="16"
        borderRadius={10}
        position="relative"
      >
        <Image
          src={RBaca3}
          alt="RBaca3"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
            filter: "brightness(0.8)",
            opacity: 0.5,
            borderRadius: 10,
          }}
        />
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
          showArrows={true}
          interval={4000}
        >
          <Text color="brand.black" fontSize="16" fontStyle="italic" as="p">
            Menjadi sarana pembelajaran bagi masyarakat untuk menimba ilmu dan
            sebagai penunjang kurikulum program pendidikan di luar sekolah
          </Text>
          <Text color="brand.black" fontSize="16" fontStyle="italic" as="p">
            Sumber informasi yang bersumber dari buku dan bahan bacaan lainnya
            yang sesuai dengan kebutuhan warga serta masyarakat setempat
          </Text>
          <Text color="brand.black" fontSize="16" fontStyle="italic" as="p">
            Sumber penelitian dengan menyediakan buku-buku dan bahan bacaan
            lainnya dalam studi kepustakaan
          </Text>
          <Text color="brand.black" fontSize="16" fontStyle="italic" as="p">
            Sumber hiburan yang kreatif serta menyediakan bahan bacaan untuk
            memperoleh informasi baru yang menarik dan bermanfaat
          </Text>
          <Text color="brand.black" fontSize="16" fontStyle="italic" as="p">
            Sebagai wadah pengembangan potensi anak di Desa Jawa Tengah
          </Text>
        </Carousel>
      </Box>
      <Divider my="10" />
    </Box>
  );
};

export default Tujuan;
