import { Box, Image } from "@chakra-ui/react";
import leaf1 from "../../../public/elements/leaf1.svg";
import leaf2 from "../../../public/elements/leaf2.svg";
import leaf3 from "../../../public/elements/leaf3.svg";
import leaf4 from "../../../public/elements/leaf4.svg";
import LeftUp from "../leftUp";
import RightDown from "../rightDown";
import RightUp from "../rightUp";
import NewLeftDown from "./newLeftDown";
import NewLeftUp from "./newLeftUp";
import NewRightUp from "./newRightUp";
import NewRightDown from "./newRightDown";

export default function NewSlugElement() {
  return (
    <Box
      position={"absolute"}
      h={["140vh", "130vh", "120vh", "110vh"]}
      w={["180%", "160%", "140%", "120%"]}
      display={"flex"}
      flexDir={"column"}
      justifyContent={"space-between"}
      alignItems={"space-between"}
      mt={-100}
      mb={-100}
      ml={["-40%", "-30%", "-20%", "-10%"]}
      mr={["-40%", "-30%", "-20%", "-10%"]}
      zIndex={-1}
    >
      <Box display={"flex"} justifyContent={"space-between"}>
        <NewLeftUp>
          <Image src={leaf1} alt="leaf" />
        </NewLeftUp>
        <NewRightUp>
          <Image src={leaf2} alt="leaf" />
        </NewRightUp>
      </Box>
      <Box display={"flex"} justifyContent={"space-between"}>
        <NewLeftDown>
          <Image src={leaf4} alt="leaf" />
        </NewLeftDown>
        <NewRightDown>
          <Image src={leaf3} alt="leaf" />
        </NewRightDown>
      </Box>
    </Box>
  );
}

function AddElement() {
  return (
    <Box>
      <Box position={"absolute"}>
        <NewLeftDown></NewLeftDown>
      </Box>
      <Box position={"absolute"}>
        <LeftUp></LeftUp>
      </Box>
      <Box position={"absolute"}>
        <RightUp></RightUp>
      </Box>
      <Box position={"absolute"}>
        <RightDown></RightDown>
      </Box>
    </Box>
  );
}
