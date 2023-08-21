import { FC, PropsWithChildren } from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "./Navbar";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box bg="brand.white" minH="100vh" w="100%" p="4">
      <Navbar />
      {children}
    </Box>
  );
};

export default MainLayout;
