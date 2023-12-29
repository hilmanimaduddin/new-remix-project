import { useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function RightUp({ children }: any) {
  const xValue = useBreakpointValue({
    base: 150,
    sm: 250,
    md: 350,
    lg: 450,
    xl: 600,
  });
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, x: 0, y: 0, rotate: -90, scale: 2 }}
        animate={{ opacity: 1, x: xValue, y: 110, rotate: -50, scale: 1 }}
        transition={{
          type: "spring",
          bounce: 0.4,
          duration: 5,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
