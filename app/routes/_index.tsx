import { Box, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { PrismaClient } from "@prisma/client";
import type { MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import moment from "moment";

const prisma = new PrismaClient();

export const meta: MetaFunction = () => {
  return [
    { title: "My Project" },
    { name: "description", content: "Welcome to Home" },
  ];
};

export async function loader() {
  try {
    const users = await prisma.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return users;
  } catch (error) {
    console.log(error);
  }
}

export default function HomePage() {
  const item = useLoaderData<typeof loader>();

  return (
    <Box
      m="auto"
      display={"flex"}
      flexDirection={"column"}
      p={4}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box
        w={"100%"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          Data Users
        </Text>
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          <Link to="create">Click for Create</Link>
        </Text>
      </Box>
      <Table variant="striped">
        <Thead>
          <Tr>
            <Th>No</Th>
            <Th>Name</Th>
            <Th>Age</Th>
            <Th>City</Th>
            <Th>Create At</Th>
          </Tr>
        </Thead>
        <Tbody>
          {item.map((user, index) => (
            <Tr key={index}>
              <Td>{index + 1}</Td>
              <Td>{user.name}</Td>
              <Td>
                {user.age} {user.age > 1 ? "Years" : "Year"}
              </Td>
              <Td>{user.city}</Td>
              <Td>{moment(user.createdAt).format("LLLL")}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}
