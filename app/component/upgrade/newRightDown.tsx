import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function NewRightDown({ children }: any) {
  return (
    <Box>
      <motion.div
        initial={{ opacity: 0, x: -200, y: -300, rotate: 30, scale: 2 }}
        animate={{ opacity: 1, x: 0, y: 0, rotate: -30, scale: 1 }}
        transition={{
          type: "spring",
          bounce: 0.4,
          duration: 5,
          delay: 1,
        }}
      >
        {children}
      </motion.div>
    </Box>
  );
}
