import { Center, Flex, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";

function Navbar() {
    const links = [
        {
            href: "#home",
            name: "Home",
        },
        {
            href: "#skills",
            name: "Skills",
        },
        {
            href: "#experience",
            name: "Experience",
        },
        {
            href: "#projects",
            name: "Projects",
        },
        {
            href: "#contact",
            name: "Contact",
        },
    ];

    return (
        <Center py={6} position="sticky" top={0} left={0} w="100%" zIndex="100" bgColor="white" shadow="sm">
            <Flex alignItems="center" gap={{ base: 4, md: 8 }}>
                {links.map((link) => (
                    <Link key={link.href} as={NextLink} href={link.href}>
                        <Text fontSize={{ base: "sm", md: "md" }} fontWeight={600}>
                            {link.name}
                        </Text>
                    </Link>
                ))}
            </Flex>
        </Center>
    );
}

export default Navbar;
