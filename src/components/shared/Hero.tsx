import { FC } from "react";
import { Box, Text, Button, Divider } from "@chakra-ui/react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import RBaca1 from "@/assets/jpg/rbaca1.jpeg";
import RBaca2 from "@/assets/jpg/rbaca2.jpeg";
import RBaca3 from "@/assets/jpg/rbaca3.jpeg";
import RBaca4 from "@/assets/jpg/rbaca4.jpeg";
import RBaca5 from "@/assets/jpg/rbaca5.jpeg";
import RBaca6 from "@/assets/jpg/rbaca6.jpeg";
import { Link } from "@chakra-ui/next-js";

const Hero: FC = () => {
  return (
    <Box bg="brand.white" w="100%" mt="8">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        showIndicators={true}
        showArrows={true}
        interval={5000}
      >
        <Image
          src={RBaca3}
          alt="rbaca3"
          style={{
            width: "100%",
            borderRadius: "10px",
          }}
        />
        <Image
          src={RBaca4}
          alt="rbaca4"
          style={{
            width: "100%",
            borderRadius: "10px",
          }}
        />
        <Image
          src={RBaca1}
          alt="rbaca1"
          style={{
            width: "100%",
            borderRadius: "10px",
          }}
        />
        <Image
          src={RBaca2}
          alt="rbaca2"
          style={{
            width: "100%",
            borderRadius: "10px",
          }}
        />
        <Image
          src={RBaca6}
          alt="rbaca6"
          style={{
            width: "100%",
            borderRadius: "10px",
          }}
        />
        <Image
          src={RBaca5}
          alt="rbaca5"
          style={{
            width: "100%",
            borderRadius: "10px",
          }}
        />
      </Carousel>

      <Text color="brand.black" fontWeight="bold" fontSize="26" mt="6" as="h1">
        Rumah Baca Masyarakat
      </Text>
      <Text color="brand.black" fontSize="26" as="h1">
        Desa Jawa Tengah
      </Text>
      <Text color="brand.black" fontSize="16" my="6" as="p">
        Rumah Baca Masyarakat merupakan suatu inisiatif yang didirikan oleh
        sekelompok pemuda dengan tujuan menyediakan koleksi bahan bacaan yang
        beragam dan merangsang perkembangan minat baca di kalangan masyarakat.
        Selain itu, tujuan lain dari Rumah Baca ini adalah menciptakan
        lingkungan pembelajaran yang tidak hanya kreatif, tetapi juga inovatif,
        dengan mengakomodasi berbagai gaya belajar dan mempromosikan pemahaman
        yang mendalam melalui pendekatan yang unik dan interaktif.
      </Text>
      <Link href="/contact">
        <Button
          bg="brand.primary"
          color="brand.white"
          w="100%"
          py="6"
          fontSize="18"
          _hover={{
            bg: "brand.primary",
            opacity: "0.8",
          }}
        >
          HUBUNGI KAMI
        </Button>
      </Link>
      <Divider my="10" />
    </Box>
  );
};

export default Hero;
