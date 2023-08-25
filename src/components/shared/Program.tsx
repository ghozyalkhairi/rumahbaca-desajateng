import { FC } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Box, Text, Divider } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import SchoolIcon from "../icons/SchoolIcon";
import DeliveryIcon from "../icons/DeliveryIcon";
import BookIcon from "../icons/BookIcon";
import MartialIcon from "../icons/MartialIcon";
import StarIcon from "../icons/StarIcon";

const programList = [
  {
    id: 1,
    title: "Bimbingan Belajar Bersama",
    icon: <SchoolIcon />,
  },
  {
    id: 2,
    title: "Gerakan Antar Jemput Buku",
    icon: <DeliveryIcon />,
  },
  {
    id: 3,
    title: "Ruang Baca",
    icon: <BookIcon />,
  },
  {
    id: 4,
    title: "Pencak Silat",
    icon: <MartialIcon />,
  },
  {
    id: 5,
    title: "Kelas Pengembangan Bakat",
    icon: <StarIcon />,
  },
];

const Program: FC = () => {
  return (
    <Box bg="brand.white" w="100%">
      <Text color="brand.black" fontWeight="bold" fontSize="30" mb="4">
        Program Unggulan
      </Text>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        showIndicators={true}
        showArrows={true}
        interval={4000}
      >
        {programList.map((program) => (
          <Box
            bg="brand.semiWhite"
            px="4"
            w="100%"
            h={["200px", "300px", "300px", "300px"]}
            borderRadius={10}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            key={program.id}
          >
            {program.icon}
            <Text
              color="brand.black"
              fontWeight="semibold"
              fontSize="22"
              mt="4"
            >
              {program.title}
            </Text>
          </Box>
        ))}
      </Carousel>
      <Divider my="10" />
    </Box>
  );
};

export default Program;
