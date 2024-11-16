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

// Product data
const data = [
  {
    id: 1,
    title: "Floor Cleaning",
    rating: "4.77 (636)",
    price: 150,
    phone: "9826506683",
    src: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/home-screen/1644931257406-6b799b.jpeg",
  },
  {
    id: 2,
    title: "Bathroom Cleaning",
    rating: "4.77 (636)",
    price: 99,
    phone: "9826506683",
    src: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/home-screen/1644931257406-6b799b.jpeg",
  },
  // Add more items...
];

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
