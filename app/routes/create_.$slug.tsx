import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  Input,
  Text,
} from "@chakra-ui/react";
import { PrismaClient } from "@prisma/client";
import { ActionFunctionArgs } from "@remix-run/node";
import { Link, useLoaderData, useParams } from "@remix-run/react";
import { useRef, useState } from "react";

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

  const [isOpen, setIsOpen] = useState(false);
  const leastDestructiveRef = useRef<HTMLButtonElement>(null);

  const onClose = () => {
    setIsOpen(false);
  };

  function copyToClipboard() {
    const inputElement = "https://tell-it.vercel.app/" + slug;
    navigator.clipboard
      .writeText(inputElement)
      .then(() => {
        console.log("Text copied to clipboard");
        setIsOpen(true);
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
            color={"#043904"}
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
        <Button bgColor={"#043904"} color={"white"} onClick={copyToClipboard}>
          Copy
        </Button>
        <Link to={`/${slug}`} target="_blank">
          <Button bgColor={"#043904"} color={"white"} w={"100%"}>
            Go to Link
          </Button>
        </Link>
      </Box>
      <Box>
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={leastDestructiveRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader>Selamat</AlertDialogHeader>
              <AlertDialogBody>Link anda telah disalin!</AlertDialogBody>
              <AlertDialogFooter>
                <Button
                  ref={leastDestructiveRef}
                  colorScheme="blue"
                  onClick={onClose}
                >
                  OK
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </Box>
    </Box>
  );
}
