import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function NewRightUp({ children }: any) {
  return (
    <Box>
      <motion.div
        initial={{ opacity: 0, x: -100, y: 300, rotate: -60, scale: 2 }}
        animate={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
        transition={{
          type: "spring",
          bounce: 0.4,
          duration: 5,
          delay: 1.8,
        }}
      >
        {children}
      </motion.div>
    </Box>
  );
}
