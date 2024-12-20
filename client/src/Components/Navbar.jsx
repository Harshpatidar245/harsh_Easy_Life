import React from "react";
import "./Navbar.css";
import logo from "./logo.png";
import { Box, Image, HStack, Spacer, Flex, Text, Heading, Select, Input, Button } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Navbar = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token to logout the user
    navigate("/"); // Navigate to the Login page after logging out
  };
  const token = localStorage.getItem("token"); // Check if token exists

  return (
    <div>
      <Box border={"5px"}>
        <Image
          className="cleaning-poster"
          src="https://res.cloudinary.com/urbanclap/image/upload/images/growth/home-screen/1645105954445-5a1b01.jpeg"
          alt="cleaning-poster"
        />
      </Box>
      <Flex h={50} justify="center" align={"center"}>
        <Box w={40} ml={10} mt={5}>
          <Image h={60} src={logo} alt="logo" />
        </Box>
        <Spacer />
        <HStack spacing={20} mr={20} color={"blackAlpha.900"}>
          <Box
            bg={"white"}
            p={3}
            borderRadius={"lg"}
            boxShadow={"md"}
            mt={4}
          >
            {token ? (
              <Button onClick={handleLogout}>Logout</Button> // Show logout button if logged in
            ) : (
              <Link to="/Login">Login/SignUp</Link> // Show login/signup link if not logged in
            )}
          </Box>
        </HStack>
      </Flex>
      <Box w={"60%"} m="auto" mt={"200px"}>
        <Heading color={"whiteAlpha.900"} mb={"50px"}>
          Home Services, On Demand.
        </Heading>
        <Flex gap="20px">
          <HStack bg={"whitesmoke"} p={1.5} borderRadius={"base"}>
            <MdLocationOn />
            <Select placeholder="Country" width={"120px"} border={"none"}>
              <option>India</option>
              <option>China</option>
              <option>UK</option>
              <option>USA</option>
            </Select>
          </HStack>
          <HStack borderRadius={"base"} bg={"whiteAlpha.900"}>
            <Box ml={3}>
              <Search2Icon />
            </Box>
            <Box bg={"whiteAlpha.900"} pr={3}>
              <Input placeholder="Search for Services" w={600} />
            </Box>
          </HStack>
        </Flex>
      </Box>

      {/* Services tab */}
      <Box
        className="services"
        w={"35%"}
        h={150}
        m="auto"
        mt={75}
        bg={"whiteAlpha.900"}
        borderRadius="30px" // Adjust the value for the desired level of rounding

      >
        <HStack align={"center"} spacing={10} justify={"center"} pt={5}>
          <Box align={"center"}>
            <Image
              src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1647671850137-e4a809.png"
              alt="regular-home-cleaning"
            />
            <Link to="/product">Regular Home Cleaning</Link>
          </Box>
          {/* <Box align={"center"}>
            <Image src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1647671844702-24e611.png" />
            <Text>Move In/Move Out Cleaning</Text>
          </Box> */}
        </HStack>
      </Box>
    </div>
  );
};

export default Navbar;
