import { Box, Text } from "@chakra-ui/react";
import { FC } from "react";
import BookIcon from "../icons/BookIcon";

interface Props {
  title: string;
  desc: string;
}

const KegiatanItem: FC<Props> = ({ title, desc }) => {
  return (
    <Box
      bg="brand.semiWhite"
      w="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      p="4"
      my="4"
    >
      <BookIcon />
      <Text color="brand.black" fontWeight="bold" fontSize="24" mt="4" mb="4">
        {title}
      </Text>
      <Text color="brand.black" fontSize="18" mb="4">
        {desc}
      </Text>
    </Box>
  );
};

export default KegiatanItem;
