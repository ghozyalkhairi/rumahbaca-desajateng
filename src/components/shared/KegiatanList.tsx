import { Box } from "@chakra-ui/react";
import { FC } from "react";
import KegiatanItem from "./KegiatanItem";
import BookIcon from "../icons/BookIcon";
import MathIcon from "../icons/MathIcon";

const kegiatanList = [
  {
    id: 1,
    title: "LITERASI",
    desc: "Kegiatan literasi yang dilakukan oleh rumah baca bertujuan untuk meningkatkan pemahaman dan keterampilan membaca, menulis, berbicara, dan mendengarkan masyarakat. Tujuan utamanya adalah membantu masyarakat menjadi lebih terampil dalam berbahasa dan memiliki pemahaman yang lebih baik terhadap informasi.",
    Icon: <BookIcon />,
  },
  {
    id: 2,
    title: "NUMERASI",
    desc: "Kegiatan numerasi yang dilakukan oleh lembaga rumah baca bertujuan untuk meningkatkan pemahaman dan keterampilan dalam hal angka, matematika, dan pemecahan masalah. Tujuan utamanya adalah membantu individu menjadi lebih terampil dalam berpikir kritis terkait konsep matematika serta menggunakan kemampuan numerasi dalam kehidupan sehari-hari. ",
    Icon: <MathIcon />,
  },
];

const KegiatanList: FC = () => {
  return (
    <Box w="100%" my="8">
      {kegiatanList.map((kegiatan) => (
        <KegiatanItem key={kegiatan.id} {...kegiatan} />
      ))}
    </Box>
  );
};

export default KegiatanList;
