import React from "react";

import { Box, Text } from "@chakra-ui/react";
const CarDetails = ({ data }) => {
  return (
    <Box m="20px" data-testid="details">
      <Text fontSize="xl" p="15px" textAlign="center">
        Car Details
      </Text>
      <Box
        border="2px"
        borderColor="#ac4887"
        borderRadius="20px"
        overflow="hidden"
      >
        <Box display="flex">
          <Text
            fontSize="md"
            p="10px"
            pr="20px"
            w="40%"
            bg="rgb(172, 72, 135,0.8)"
          >
            Car Make
          </Text>
          <Text fontSize="md" p="10px" bg="rgb(172, 72, 135,0.4)" w="60%">
            {data.car && data.car.make}
          </Text>
        </Box>
        <Box display="flex">
          <Text
            fontSize="md"
            p="10px"
            pr="20px"
            w="40%"
            bg="rgb(172, 72, 135,0.8)"
          >
            Car Model
          </Text>
          <Text fontSize="md" p="10px" bg="rgb(172, 72, 135,0.4)" w="60%">
            {data.car && data.car.model}
          </Text>
        </Box>
        <Box display="flex">
          <Text
            fontSize="md"
            p="10px"
            pr="20px"
            w="40%"
            bg="rgb(172, 72, 135,0.8)"
          >
            Car Generation
          </Text>
          <Text fontSize="md" p="10px" bg="rgb(172, 72, 135,0.4)" w="60%">
            {data.car && data.car.generation}
          </Text>
        </Box>
        <Box display="flex">
          <Text
            fontSize="md"
            p="10px"
            pr="20px"
            w="40%"
            bg="rgb(172, 72, 135,0.8)"
          >
            Car Years
          </Text>
          <Text fontSize="md" p="10px" bg="rgb(172, 72, 135,0.4)" w="60%">
            {data.car && data.car.years}
          </Text>
        </Box>
        <Box display="flex">
          <Text
            fontSize="md"
            p="10px"
            pr="20px"
            w="40%"
            bg="rgb(172, 72, 135,0.8)"
          >
            Car Color
          </Text>
          <Text fontSize="md" p="10px" bg="rgb(172, 72, 135,0.4)" w="60%">
            {data.color && data.color.name}
          </Text>
        </Box>
        <Box display="flex">
          <Text
            fontSize="md"
            p="10px"
            pr="20px"
            w="40%"
            bg="rgb(172, 72, 135,0.8)"
          >
            Car Angle
          </Text>
          <Text fontSize="md" p="10px" bg="rgb(172, 72, 135,0.4)" w="60%">
            {data.angle && data.angle.name}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default CarDetails;
