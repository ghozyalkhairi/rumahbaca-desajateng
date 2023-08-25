import { FC } from "react";
import { Box, Text, Divider } from "@chakra-ui/react";

const Sejarah: FC = () => {
  return (
    <Box bg="brand.white" w="100%" mt="8">
      <Text color="brand.black" fontSize="16" my="6" as="p">
        Pada tanggal 21 April 2020, sebuah entitas pustaka komunitas muncul di
        Desa Jawa Tengah sebagai respons terhadap kondisi keterbatasan fasilitas
        perpustakaan dan minimnya kegiatan literasi di wilayah tersebut.
        Inisiatif ini berawal dari gagasan yang muncul dari sekelompok remaja
        yang tinggal di desa tersebut. Program ini dirancang untuk berkontribusi
        secara konkret dalam persiapan generasi mendatang di Desa Jawa Tengah,
        dengan tujuan mendorong pembentukan peradaban yang berkualitas melalui
        upaya yang terfokus dalam bidang pendidikan.
      </Text>
      <Text color="brand.black" fontSize="16" my="6" as="p">
        Rumah baca ini diharapkan akan memberikan akses yang lebih luas terhadap
        bahan bacaan dan sumber daya literasi kepada masyarakat setempat, serta
        berperan sebagai pusat kegiatan yang merangsang minat baca dan
        pemahaman. Langkah-langkah progresif seperti ini menjadi bagian integral
        dari visi untuk meningkatkan taraf pendidikan dan membangun fondasi
        peradaban yang lebih berdaya dan berbudaya di lingkungan Desa Jawa
        Tengah.
      </Text>
      <Divider my="10" />
    </Box>
  );
};

export default Sejarah;
