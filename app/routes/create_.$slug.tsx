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
import { useEffect, useRef, useState } from "react";

// const prisma = new PrismaClient();
// export async function loader({ params }: ActionFunctionArgs) {
//   const slug = params.slug;
//   try {
//     const users = await prisma.content.findUnique({
//       where: {
//         id: slug,
//       },
//     });
//     return users;
//   } catch (error) {
//     console.log(error);
//   }
// }

export default function CreatePage() {
  // const item = useLoaderData<typeof loader>();
  const [data, setData] = useState<any>(null);
  const { slug } = useParams();

  const [isOpen, setIsOpen] = useState(false);
  const leastDestructiveRef = useRef<HTMLButtonElement>(null);

  const onClose = () => {
    setIsOpen(false);
  };

  function fetchData() {
    try {
      const res = fetch(
        `https://home-696-default-rtdb.asia-southeast1.firebasedatabase.app/tell-it/${slug}.json?auth=APtzecBUdjOrCA069ZogDzeFzxrlz41ByeqTqSxv`,
        {
          method: "GET",
        }
      )
        .then((response) => response.json())
        // .then((json) => console.log(json))
        .then((json) => setData(json));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

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
            Selamat {data?.name},{" "}
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
            <AlertDialogContent marginInline={5}>
              <AlertDialogHeader>Selamat</AlertDialogHeader>
              <AlertDialogBody>Link anda telah disalin!</AlertDialogBody>
              <AlertDialogFooter>
                <Button
                  ref={leastDestructiveRef}
                  color={"white"}
                  bgColor={"#043904"}
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
