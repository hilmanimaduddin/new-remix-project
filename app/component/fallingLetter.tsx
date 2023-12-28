import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function FallingLetter({ children }: any) {
  return (
    <Box>
      {children.split("").map((letter: string, index: number) => (
        <motion.div
          style={{ display: "inline-block" }}
          key={index}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            damping: 10,
            stiffness: 100,
            duration: 0.5,
            delay: index * 0.2,
          }}
        >
          {letter === " " ? (
            <Text as={"span"}>&nbsp;</Text>
          ) : (
            <Text
              as="span"
              fontSize={"2xl"}
              fontWeight={"bold"}
              display="inline-block"
            >
              {letter}
            </Text>
          )}
        </motion.div>
      ))}
    </Box>
  );
}
