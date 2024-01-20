"use client";

import {
    Flex,
    Link,
    Text,
    useColorMode,
    Spacer,
    Box,
    useDisclosure,
    Button,
    Icon,
    useMediaQuery,
} from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import NextLink from "next/link";
import { FaSun, FaMoon } from "react-icons/fa";
import { Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton } from "@chakra-ui/react";
import { FaBars, FaGithub, FaLinkedin } from "react-icons/fa6";
import { links, socialMediaLinks } from "@/lib/const";

function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();
    const [isNotMobile] = useMediaQuery("(min-width: 800px)");
    const pathName = usePathname();
    const isHomePage = pathName === "/";

    return (
        <Box py={4} w="100%" position="sticky" top={0} left={0} zIndex="100" shadow="sm" bgColor="secondary">
            <Flex alignItems="center" justify="center" w="100%" px={{ base: 6, md: 12 }}>
                {isNotMobile ? (
                    <>
                        {links.map((link) => (
                            <Link key={link.href} as={NextLink} href={(!isHomePage ? "/" : "") + link.href}>
                                <Text fontSize={{ base: "sm", md: "md" }} fontWeight={600} mx={{ base: 2, md: 4 }}>
                                    {link.name}
                                </Text>
                            </Link>
                        ))}
                    </>
                ) : (
                    <MobileNav isHomePage={isHomePage} />
                )}
                <Spacer />
                <Button as="a" target="_blank" href={socialMediaLinks[0].link} variant="ghost">
                    <Icon as={FaGithub} fontSize={20} />
                </Button>
                <Button as="a" target="_blank" href={socialMediaLinks[1].link} variant="ghost" ml={1}>
                    <Icon as={FaLinkedin} fontSize={20} />
                </Button>
                <Button onClick={toggleColorMode} variant="outline" ml={2}>
                    <Icon as={colorMode === "light" ? FaMoon : FaSun} fontSize={16} />
                </Button>
            </Flex>
        </Box>
    );
}

function MobileNav({ isHomePage }: { isHomePage: boolean }) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Button onClick={onOpen} variant="outline">
                <Icon as={FaBars} />
            </Button>
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader></DrawerHeader>
                    <DrawerBody px={12}>
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                as={NextLink}
                                href={(!isHomePage ? "/" : "") + link.href}
                                onClick={onClose}
                            >
                                <Text fontSize="xl" fontWeight={600} mb={8}>
                                    {link.name}
                                </Text>
                            </Link>
                        ))}
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
}

export default Navbar;
