import { Box, Text } from "@chakra-ui/react";
import { PrismaClient } from "@prisma/client";
import { ActionFunctionArgs, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import NewFallingLetter from "~/component/newFalling";
import SlugElement from "~/component/slug/element";

const prisma = new PrismaClient();
export async function loader({ params }: ActionFunctionArgs) {
  const slug = params.slug;
  try {
    const users = await prisma.content.findUnique({
      where: {
        id: slug,
      },
    });
    return users;
  } catch (error) {
    console.log(error);
  }
}

export default function Post() {
  const item = useLoaderData<typeof loader>();
  console.log("item", item);

  //   const { slug } = useParams();

  return (
    <Box
      overflow={"hidden"}
      position={"relative"}
      display="flex"
      justifyContent="center"
      alignItems="center"
      h="100vh"
      p={4}
    >
      <SlugElement />
      <NewFallingLetter>
        <Text fontWeight={"bold"} fontSize={"2xl"} textAlign={"center"}>
          {item?.content}
        </Text>
      </NewFallingLetter>
    </Box>
  );
}
