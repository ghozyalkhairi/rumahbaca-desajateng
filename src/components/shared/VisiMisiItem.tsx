import { Box, Text } from "@chakra-ui/react";
import { FC } from "react";
import BookIcon from "../icons/VisiIcon";

interface Props {
  title: string;
  desc: string[];
  Icon: JSX.Element;
}

const VisiMisiItem: FC<Props> = ({ title, desc, Icon }) => {
  return (
    <Box
      bg="brand.semiWhite"
      w="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      px="8"
      py="4"
      my="4"
      borderRadius={10}
    >
      {Icon}
      <Text color="brand.black" fontWeight="bold" fontSize="24" mt="4" mb="4">
        {title}
      </Text>
      {desc.length < 2 ? (
        desc.map((desc) => (
          <Text key={desc} color="brand.black" fontSize="18" textAlign="center">
            {desc}
          </Text>
        ))
      ) : (
        <ol>
          {desc.map((desc, index) => (
            <li>
              <Text
                key={desc}
                color="brand.black"
                fontSize="18"
                textAlign="left"
                mt="2"
              >
                {desc}
              </Text>
            </li>
          ))}
        </ol>
      )}
    </Box>
  );
};

export default VisiMisiItem;
