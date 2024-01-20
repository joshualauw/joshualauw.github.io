"use client";

import { Flex, Link, Text, IconButton, useColorMode, Spacer, Box } from "@chakra-ui/react";
import { usePathname, useRouter } from "next/navigation";
import NextLink from "next/link";
import { FaSun, FaMoon } from "react-icons/fa";

function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();
    const pathName = usePathname();

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

    const isHomePage = pathName === "/";

    return (
        <Box py={4} w="100%" position="sticky" top={0} left={0} zIndex="100" shadow="sm" bgColor="secondary">
            <Flex alignItems="center" justify="center" w="100%" px={{ base: 4, md: 8 }}>
                {links.map((link) => (
                    <Link key={link.href} as={NextLink} href={(!isHomePage ? "/" : "") + link.href}>
                        <Text fontSize={{ base: "sm", md: "md" }} fontWeight={600} mx={{ base: 2, md: 4 }}>
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
        </Box>
    );
}

export default Navbar;
