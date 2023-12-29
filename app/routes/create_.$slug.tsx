import { Box, Button, Input, Text } from "@chakra-ui/react";
import { PrismaClient } from "@prisma/client";
import { ActionFunctionArgs } from "@remix-run/node";
import { Link, useLoaderData, useParams } from "@remix-run/react";

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

export default function CreatePage() {
  const item = useLoaderData<typeof loader>();
  const { slug } = useParams();

  function copyToClipboard() {
    const inputElement = "https://tell-it.vercel.app/" + slug;
    navigator.clipboard
      .writeText(inputElement)
      .then(() => {
        console.log("Text copied to clipboard");
      })
      .catch((error) => {
        console.error("Failed to copy text: ", error);
      });
  }

  return (
    <Box display="flex" justifyContent="center" alignItems="center" h="100vh">
      <Box display={"flex"} flexDirection={"column"} gap={4} p={4}>
        <Box textAlign={"center"}>
          <Text
            fontWeight={"bold"}
            fontSize={"2xl"}
            color={"teal.500"}
            as={"span"}
          >
            Selamat {item?.name},{" "}
          </Text>
          <Text fontWeight={"bold"} fontSize={"2xl"} as={"span"}>
            Ucapan anda telah selesai
          </Text>
        </Box>
        <Box>
          <Text>Your Link:</Text>
          <Input
            type="text"
            value={`https://tell-it.vercel.app/${slug}`}
            readOnly
          />
        </Box>
        <Button onClick={copyToClipboard}>Copy</Button>
        <Link to={`/${slug}`} target="_blank">
          <Button w={"100%"}>Go to Link</Button>
        </Link>
      </Box>
    </Box>
  );
}
