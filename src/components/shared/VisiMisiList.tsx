import { Box, Text } from "@chakra-ui/react";
import { FC } from "react";
import VisiMisiItem from "./VisiMisiItem";
import VisiIcon from "../icons/VisiIcon";
import MisiIcon from "../icons/MisiIcon";

const visiMisiList = [
  {
    id: 1,
    title: "VISI",
    desc: [
      "Sebagai pusat informasi dan wisata pendidikan dalam rangka terwujudnya masyarakat yang cerdas berawawasan ilmu pengetahuan.",
    ],
    Icon: <VisiIcon />,
  },
  {
    id: 2,
    title: "MISI",
    desc: [
      "Menjadi sarana pembelajaran bagi masyarakat untuk menimba ilmu.",
      "Sumber informasi yang bersumber dari buku dan bahan bacaan lainnya yang sesuai dengan kebutuhan masyarakat.",
      "Sebagai penunjang kurikulum program pendidikan di luar sekolah.",
      "Sumber hiburan kreatif serta menyediakan bacaan untuk memperolah informasi menarik dan bermanfaat.",
      "Sebagai wadah pengembangan potensi anak-anak.",
    ],
    Icon: <MisiIcon />,
  },
];

const VisiMisiList: FC = () => {
  return (
    <Box w="100%" my="8">
      <Text color="brand.black" fontWeight="bold" fontSize="30" mb="4">
        Visi dan Misi
      </Text>
      {visiMisiList.map((visimisi) => (
        <VisiMisiItem key={visimisi.id} {...visimisi} />
      ))}
    </Box>
  );
};

export default VisiMisiList;
