import {
	Button,
	Container,
	Flex,
	HStack,
	Text,
	useColorMode,
	InputGroup,
	Input,
	InputLeftElement,
	IconButton,
	Box,
	useDisclosure,
      } from "@chakra-ui/react";
      import { Link } from "react-router-dom";
      import { PlusSquareIcon, SearchIcon, CloseIcon } from "@chakra-ui/icons";
      import { IoMoon } from "react-icons/io5";
      import { LuSun } from "react-icons/lu";
      
      const Navbar = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const { isOpen, onToggle } = useDisclosure(); // Moved useDisclosure to the Navbar scope
      
	return (
	  <Container maxW={"1140px"} px={4}>
	    <Flex
	      h={16}
	      alignItems={"center"}
	      justifyContent={"space-between"}
	      flexDir={{
		base: "column",
		sm: "row",
	      }}
	    >
	      <Text
		fontSize={{ base: "22", sm: "28" }}
		fontWeight={"bold"}
		textTransform={"uppercase"}
		textAlign={"center"}
		bgGradient={"linear(to-r, cyan.400, blue.500)"}
		bgClip={"text"}
	      >
		<Link to={"/"}>Product Store 🛒</Link>
	      </Text>
      
	      <HStack spacing={2} alignItems={"center"}>
		{/* Search Toggle */}
		<Flex  p={4}>
		  <IconButton
		    icon={isOpen ? <CloseIcon /> : <SearchIcon />}
		    onClick={onToggle}
		    aria-label="Toggle Search"
		    variant="ghost"
		  />
		  {isOpen && (
		    <Box ml={4}>
		      <InputGroup>
			<InputLeftElement pointerEvents="none">
			  <SearchIcon color="gray.500" />
			</InputLeftElement>
			<Input type="text" placeholder="Search..." variant="outline" />
		      </InputGroup>
		    </Box>
		  )}
		</Flex>
      
		{/* Create Button */}
		<Link to={"/create"}>
		  <Button>
		    <PlusSquareIcon fontSize={20} />
		  </Button>
		</Link>
      
		{/* Theme Toggle */}
		<Button onClick={toggleColorMode}>
		  {colorMode === "light" ? <IoMoon /> : <LuSun size="20" />}
		</Button>
	      </HStack>
	    </Flex>
	  </Container>
	);
      };
      
      export default Navbar;
      