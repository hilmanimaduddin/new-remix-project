import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { PrismaClient } from "@prisma/client";
import {
  redirect,
  type ActionFunctionArgs,
  type MetaFunction,
} from "@remix-run/node";
import { Form, Link } from "@remix-run/react";

const prisma = new PrismaClient();

export const meta: MetaFunction = () => {
  return [
    { title: "Create User" },
    { name: "description", content: "This is for create" },
  ];
};
export async function action({ request }: ActionFunctionArgs) {
  try {
    if (request.method.toLowerCase() === "post") {
      const formData = await request.formData();
      const name = formData.get("name") as string;
      const address = formData.get("address") as string;
      const content = formData.get("content") as string;

      const formDataObject = {
        name,
        address,
        content,
      };

      const result = await prisma.content.create({
        data: formDataObject,
      });
      console.log("formDataObject", formDataObject);
      if (result) {
        return redirect(`/create/${result.id}`);
      }
      // return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
}

export default function CreatePage() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Box maxW="md" width="400px" p={4}>
        <Form method="post">
          <VStack spacing={4}>
            <FormControl id="name">
              <FormLabel>Name</FormLabel>
              <Input type="text" name="name" placeholder="Name" required />
            </FormControl>

            <FormControl id="address">
              <FormLabel>Address</FormLabel>
              <Input
                type="text"
                name="address"
                placeholder="Address"
                required
              />
            </FormControl>

            <FormControl id="content">
              <FormLabel>Content</FormLabel>
              <Textarea name="content" placeholder="Content" required />
            </FormControl>
            <Box display="flex" justifyContent="space-between" width="100%">
              <Link to="/">
                <Button colorScheme="teal" mt={4}>
                  Back
                </Button>
              </Link>
              <Button type="submit" colorScheme="teal" mt={4}>
                Create
              </Button>
            </Box>
          </VStack>
        </Form>
      </Box>
    </Box>
  );
}
