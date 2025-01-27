import { Box, Text } from "@chakra-ui/react";
import { PrismaClient } from "@prisma/client";
import { ActionFunctionArgs, json } from "@remix-run/node";
import { useLoaderData, useParams } from "@remix-run/react";
import { useEffect, useState } from "react";
import NewFallingLetter from "~/component/newFalling";
import NewSlugElement from "~/component/upgrade/newElement";

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
//     return {
//       content: "apaaaaaaaaaaaaaaaaaaaaaaaa",
//     };
//   }
// }

export default function Post() {
  const [data, setData] = useState<any>(null);
  const { slug } = useParams();
  // const item = useLoaderData<typeof loader>();

  async function fetchData() {
    try {
      const res = await fetch(
        `https://home-696-default-rtdb.asia-southeast1.firebasedatabase.app/tell-it/${slug}.json?auth=APtzecBUdjOrCA069ZogDzeFzxrlz41ByeqTqSxv`,
        {
          method: "GET",
        }
      );
      const get = await res.json();
      setData(get);
      if (!get) {
        setData({ content: "Alhamdulillah" });
      }
      // console.log("res", get);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box overflow={"hidden"} position={"relative"}>
      <Box>
        <NewSlugElement />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        h="100vh"
        w={"100%"}
        p={4}
      >
        <NewFallingLetter>
          <Text fontWeight={"bold"} fontSize={"2xl"} textAlign={"center"}>
            {data?.content}
          </Text>
        </NewFallingLetter>
      </Box>
    </Box>
  );
}
