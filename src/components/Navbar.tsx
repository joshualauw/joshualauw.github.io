"use client";

import { Center, Flex, Link, Text, IconButton, useColorMode, Spacer } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import NextLink from "next/link";
import { FaSun, FaMoon } from "react-icons/fa";

function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();

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

    const pathName = usePathname();

    if (pathName !== "/") return <></>;

    return (
        <Center py={4} w="100%" zIndex="100" shadow="sm" bgColor={colorMode === "light" ? "white" : "black"}>
            <Flex alignItems="center" justify="center" w="100%">
                {links.map((link) => (
                    <Link key={link.href} as={NextLink} href={link.href}>
                        <Text fontSize={{ base: "sm", md: "md" }} fontWeight={600} mx={4}>
                            {link.name}
                        </Text>
                    </Link>
                ))}
                <Spacer />
                <IconButton
                    aria-label="Toggle color mode"
                    icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
                    onClick={toggleColorMode}
                />
            </Flex>
        </Center>
    );
}

export default Navbar;
