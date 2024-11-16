import React, { useContext } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  HStack,
  VStack,
  Button,
  Image,
  Stack,
} from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import { cartContext } from "../Context/CartContextProvider";
import data from "./Data"; // Import the data from Data.jsx

const Product = () => {
  const { total, handleTotal } = useContext(cartContext);

  return (
    <div>
      <Flex w={"90%"} borderTop={"1px"} m={"auto"} justify="space-between">
        {/* Left Side */}
        <Box px={10}>
          {data.map((item) => (
            <Box
              key={item.id}
              w="500px"
              m={"15px"}
              h="150px"
              p={5}
              borderRadius={20}
              style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
            >
              <HStack justify="space-between">
                {/* Item Details */}
                <VStack align="flex-start">
                  <Text fontWeight="bold">{item.title}</Text>
                  <HStack>
                    <FaStar color="gold" />
                    <Text>{item.rating}</Text>
                  </HStack>
                  <Text>₹{item.price}</Text>
                </VStack>

                {/* Item Image */}
                <Image src={item.src} alt={item.title} boxSize="80px" />
              </HStack>
              <Button mt={3} colorScheme="teal" onClick={() => handleTotal(item.price)}>
                Add to Cart
              </Button>
            </Box>
          ))}
        </Box>

        {/* Right Side */}
        <Box w={"500px"}>
          <Stack align={"center"} mt={100}>
            <Heading>Total: ₹{total}</Heading>
            <Button w={"60%"} mt={5} colorScheme="teal">
              Checkout
            </Button>
          </Stack>
        </Box>
      </Flex>
    </div>
  );
};

export default Product;
