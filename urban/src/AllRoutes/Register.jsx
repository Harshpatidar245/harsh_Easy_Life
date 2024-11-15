import { useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
  Image,
  Select,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FaUserAlt, FaLock, FaPhone } from "react-icons/fa";
import logo from "../Components/Home.gif";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);
const CFaPhone = chakra(FaPhone);

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    service: "",
  });

  const handleShowClick = () => setShowPassword(!showPassword);

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      alert(result.message);
      if (response.ok) navigate("/login");
    } catch (error) {
      console.error(error);
      alert("Error registering user");
    }
  };
  

  const handleHome = () => {
    navigate("/");
  };

  return (
    <Flex align={"center"} justify="space-evenly">
      {/* logo */}
      <Box onClick={handleHome} style={{ pointer: "cursor" }} borderRight={"1px"}>
        <Image src={logo} alt="logo-gif" />
      </Box>

      {/* right side */}
      <Flex
        flexDirection="column"
        width="100wh"
        height="100vh"
        backgroundColor="white.200"
        justifyContent="center"
        alignItems="center"
      >
        <Stack
          flexDir="column"
          mb="2"
          justifyContent="center"
          alignItems="center"
        >
          <Avatar bg="teal.500" />
          <Heading color="teal.400">Register</Heading>
          <Box minW={{ base: "90%", md: "468px" }}>
            <form onSubmit={handleSubmit}>
              <Stack
                spacing={4}
                p="1rem"
                backgroundColor="whiteAlpha.900"
                boxShadow="md"
              >
                <FormControl>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<CFaUserAlt color="gray.300" />}
                    />
                    <Input
                      name="name"
                      type="text"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </InputGroup>
                </FormControl>

                <FormControl>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<CFaUserAlt color="gray.300" />}
                    />
                    <Input
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </InputGroup>
                </FormControl>

                <FormControl>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<CFaPhone color="gray.300" />}
                    />
                    <Input
                      name="phone"
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </InputGroup>
                </FormControl>

                <FormControl>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      color="gray.300"
                      children={<CFaLock color="gray.300" />}
                    />
                    <Input
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                        {showPassword ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>

                <FormControl>
                  <Select
                    name="service"
                    placeholder="Select Service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="plumber">Plumber</option>
                    <option value="carpenter">Carpenter</option>
                    <option value="electrician">Electrician</option>
                    <option value="cleaner">Cleaner</option>
                    <option value="painter">Painter</option>
                  </Select>
                </FormControl>

                <Button
                  borderRadius={10}
                  type="submit"
                  variant="solid"
                  colorScheme="teal"
                  width="full"
                >
                  Register
                </Button>
              </Stack>
            </form>
          </Box>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default Register;