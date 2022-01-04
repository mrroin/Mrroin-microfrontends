import React, { useState } from "react";
import { ChakraProvider, Box, Grid, Text } from "@chakra-ui/react";
import UtilsPage from "./UtilsPage";

export default function MrroinUtilsPage() {
  let [indexUtil, setIndexUtil] = useState(0);

  const toHome = (index) => {
    console.log("toHome");
    setIndexUtil(index ? index : 0);
  };
  return (
    <ChakraProvider>
      <>
        <Text fontSize="5xl">@Mrroin Utils</Text>
        {indexUtil === 0 ? (
          <Grid templateColumns="repeat(5, 1fr)" gap={6}>
            <Box
              p="40px"
              color="white"
              mt="4"
              bg="green.500"
              rounded="md"
              shadow="md"
              maxW="sm"
              onClick={() => toHome(1)}
            >
              Base64 Util
            </Box>
            <Box
              p="40px"
              color="white"
              mt="4"
              bg="blue.500"
              rounded="md"
              shadow="md"
              maxW="sm"
              onClick={() => toHome(2)}
            >
              Pretty JSON
            </Box>
          </Grid>
        ) : null}
      </>
      <UtilsPage indexUtil={indexUtil} toHome={toHome} />
    </ChakraProvider>
  );
}
