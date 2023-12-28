import { Box, useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function LeftUp({ children }: any) {
  const xValue = useBreakpointValue({
    base: -150,
    sm: -250,
    md: -350,
    lg: -450,
    xl: -600,
  });
  return (
    <Box>
      <motion.div
        initial={{ opacity: 0, x: 0, y: 0, rotate: 30, scale: 2 }}
        animate={{
          opacity: 1,
          x: xValue,
          y: 100,
          rotate: 0,
          scale: 1,
        }}
        transition={{
          type: "spring",
          bounce: 0.4,
          duration: 5,
        }}
      >
        {children}
      </motion.div>
    </Box>
  );
}
