import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function NewLeftUp({ children }: any) {
  return (
    <Box>
      <motion.div
        initial={{ opacity: 0, x: 200, y: 300, rotate: 60, scale: 2 }}
        animate={{
          opacity: 1,
          x: 0,
          y: -30,
          rotate: -20,
          scale: 1,
        }}
        transition={{
          type: "spring",
          bounce: 0.4,
          duration: 5,
          delay: 2,
        }}
      >
        {children}
      </motion.div>
    </Box>
  );
}
