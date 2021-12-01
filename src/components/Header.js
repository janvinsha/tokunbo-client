import * as React from "react";
import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box display="flex" justifyContent="center" p="40px">
      <Link to="/">
        <Box
          className="my-box"
          p="5px"
          pr="20px"
          pl="20px"
          border="2px"
          borderColor="#ac4887"
          borderRadius="20px"
        >
          <Text fontSize="2xl">Tokunbo</Text>
        </Box>
      </Link>
    </Box>
  );
};

export default Home;
