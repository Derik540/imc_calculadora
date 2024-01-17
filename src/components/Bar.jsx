import { Box, Link } from "@chakra-ui/react";
function Bar() {
  return (
    <Box bg="teal.400" w="100%" p={4} color="white">
      <Link href="#home" p={2}>
        Confira o IMC
      </Link>
    </Box>
  );
}

export default Bar;
