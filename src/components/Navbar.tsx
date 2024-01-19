import { Center, Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";

function Navbar() {
    return (
        <Center py={6} position="sticky" top={0} left={0} w="100%" zIndex="100" bgColor="white" shadow="sm">
            <Flex alignItems="center" gap={8}>
                <Link as={NextLink} href="#home">
                    Home
                </Link>
                <Link as={NextLink} href="#skills">
                    Skills
                </Link>
                <Link as={NextLink} href="#experience">
                    Experiences
                </Link>
                <Link as={NextLink} href="#projects">
                    Projects
                </Link>
            </Flex>
        </Center>
    );
}

export default Navbar;
