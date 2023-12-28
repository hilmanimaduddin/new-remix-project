import { Box, Text } from "@chakra-ui/react";
import { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export default function Home() {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      h="100vh"
    >
      <Box
        maxW="md"
        display={"flex"}
        flexDirection={"column"}
        p={4}
        alignItems={"center"}
        textAlign={"center"}
        gap={4}
      >
        <Text fontWeight={"bold"} fontSize={"2xl"}>
          Ayo, Buat Ucapan Untuk Orang Yang Penting Buat Kita...
        </Text>
        <Link to="/create">
          <Text
            fontWeight={"bold"}
            bgColor={"teal.500"}
            color={"white"}
            p={2}
            borderRadius={"md"}
          >
            Click for Create
          </Text>
        </Link>
      </Box>
    </Box>
  );
}
