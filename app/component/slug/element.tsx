import { Box, Image } from "@chakra-ui/react";
import LeftDown from "../leftDown";
import LeftUp from "../leftUp";
import leaf1 from "../../../public/elements/leaf1.svg";
import leaf2 from "../../../public/elements/leaf2.svg";
import leaf3 from "../../../public/elements/leaf3.svg";
import leaf4 from "../../../public/elements/leaf4.svg";
import RightUp from "../rightUp";
import RightDown from "../rightDown";

export default function SlugElement() {
  return (
    <Box>
      <Box position={"absolute"}>
        <LeftDown>
          <Image src={leaf1} alt="leaf" />
        </LeftDown>
      </Box>
      <Box position={"absolute"}>
        <LeftUp>
          <Image src={leaf2} alt="leaf" />
        </LeftUp>
      </Box>
      <Box position={"absolute"}>
        <RightUp>
          <Image src={leaf4} alt="leaf" />
        </RightUp>
      </Box>
      <Box position={"absolute"}>
        <RightDown>
          <Image src={leaf3} alt="leaf" />
        </RightDown>
      </Box>
    </Box>
  );
}
