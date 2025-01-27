import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Spinner,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { PrismaClient } from "@prisma/client";
import {
  redirect,
  type ActionFunctionArgs,
  type MetaFunction,
} from "@remix-run/node";
import { Form, Link, useNavigate } from "@remix-run/react";
import { useState } from "react";

// const prisma = new PrismaClient();

// export async function action({ request }: ActionFunctionArgs) {
//   try {
//     if (request.method.toLowerCase() === "post") {
//       const formData = await request.formData();
//       const name = formData.get("name") as string;
//       const address = formData.get("address") as string;
//       const content = formData.get("content") as string;

//       const formDataObject = {
//         name,
//         address,
//         content,
//       };

//       const result = await prisma.content.create({
//         data: formDataObject,
//       });
//       console.log("formDataObject", formDataObject);
//       if (result) {
//         return redirect(`/create/${result.id}`);
//       }
//       // return null;
//     }
//   } catch (error) {
//     console.log(error);
//     return null;
//   }
// }

export default function CreatePage() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleCreateData = async () => {
    setIsLoading(true);
    const res = await fetchData();
    if (res instanceof Response) {
      return res;
    }
  };

  const [data, setData] = useState({
    name: "",
    address: "",
    content: "",
  });

  async function fetchData() {
    try {
      const res = await fetch(
        "https://home-696-default-rtdb.asia-southeast1.firebasedatabase.app/tell-it.json?auth=APtzecBUdjOrCA069ZogDzeFzxrlz41ByeqTqSxv",
        {
          method: "POST",
          body: JSON.stringify(data),
        }
      );
      const json = await res.json();
      console.log(json);
      if (json && json.name) {
        return navigate(encodeURI(`/create/${json.name}`));
        // redirect(`/create/${json.name}`);
      }
      return json;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      {isLoading && (
        <Modal
          onClose={() => setIsLoading(false)}
          isOpen={isLoading}
          isCentered
        >
          <ModalOverlay />
          <ModalContent marginInline={5}>
            <ModalBody>
              <Box
                h={"30vh"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                flexDirection={"column"}
              >
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="blue.500"
                  size="xl"
                />
                <Text
                  fontWeight={"bold"}
                  mt={4}
                  fontSize={"lg"}
                  color={"#043904"}
                >
                  Loading...
                </Text>
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
      <Box maxW="md" width="400px" p={4}>
        <Form method="post">
          <VStack spacing={4}>
            <FormControl id="name">
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                name="name"
                placeholder="Name"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
                required
              />
            </FormControl>

            <FormControl id="address">
              <FormLabel>Address</FormLabel>
              <Input
                type="text"
                name="address"
                placeholder="Address"
                value={data.address}
                onChange={(e) => setData({ ...data, address: e.target.value })}
                required
              />
            </FormControl>

            <FormControl id="content">
              <FormLabel>Content</FormLabel>
              <Textarea
                name="content"
                placeholder="Content"
                value={data.content}
                onChange={(e) => setData({ ...data, content: e.target.value })}
                required
              />
            </FormControl>
            <Box display="flex" justifyContent="space-between" width="100%">
              <Link to="/">
                <Button bgColor={"#043904"} color={"white"} mt={4}>
                  Back
                </Button>
              </Link>
              <Button
                onClick={handleCreateData}
                // type="submit"
                bgColor={"#043904"}
                color={"white"}
                mt={4}
              >
                Create
              </Button>
            </Box>
          </VStack>
        </Form>
      </Box>
    </Box>
  );
}
