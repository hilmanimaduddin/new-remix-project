import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function NewFallingLetter({ children }: any) {
  return (
    <Box>
      <motion.div
        style={{ display: "inline-block" }}
        initial={{ y: -100, opacity: 0, rotate: 0, scale: 2 }}
        animate={{ y: 0, opacity: 1, rotate: 0, scale: 1 }}
        transition={{
          type: "spring",
          damping: 10,
          stiffness: 80,
          duration: 5,
          delay: 2,
        }}
      >
        {children}
      </motion.div>
    </Box>
  );
}
