import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
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
      const age = +(formData.get("age") as string);
      const city = formData.get("city") as string;

      const formDataObject = {
        name,
        age,
        city,
      };

      await prisma.user.create({
        data: formDataObject,
      });
      console.log(formData);
      return redirect("/");
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
      <Box maxW="md" width="400px">
        <Form method="post">
          <VStack spacing={4}>
            <FormControl id="name">
              <FormLabel>Name</FormLabel>
              <Input type="text" name="name" placeholder="Name" />
            </FormControl>

            <FormControl id="age">
              <FormLabel>Age</FormLabel>
              <Input type="number" name="age" placeholder="Age" />
            </FormControl>

            <FormControl id="city">
              <FormLabel>City</FormLabel>
              <Input type="text" name="city" placeholder="City" />
            </FormControl>
            <Box display="flex" justifyContent="space-between" width="100%">
              <Link to="/">
                <Button colorScheme="teal" mt={4}>
                  Back
                </Button>
              </Link>
              <Button type="submit" colorScheme="teal" mt={4}>
                Submit
              </Button>
            </Box>
          </VStack>
        </Form>
      </Box>
    </Box>
  );
}
