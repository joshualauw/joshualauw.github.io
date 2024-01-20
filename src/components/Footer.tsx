"use client";

import { Box, Button, Icon, Text, VStack, useDisclosure } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import Modal from "@/components/Modal";

function Footer() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <VStack>
            <Text color="gray.500">Copyright @{new Date().getFullYear()}</Text>
            <Text color="gray.500" fontSize="sm">
                Made with ❤️ by Joshua William
            </Text>
            <Box mt={2}>
                <Button
                    as="a"
                    target="_blank"
                    href="https://www.linkedin.com/in/joshua-william-58614a21b"
                    variant="ghost"
                    size="sm"
                >
                    <Icon as={FaLinkedin} fontSize={24} />
                </Button>
                <Button as="a" target="_blank" href="https://github.com/joshualauw" variant="ghost" size="sm">
                    <Icon as={FaGithub} fontSize={24} />
                </Button>
                <Button onClick={onOpen} variant="ghost" size="sm">
                    <Icon as={SiGmail} fontSize={24} />
                    <Modal isOpen={isOpen} onClose={onClose} size="sm" header="My Email Address">
                        joshualauw1@gmail.com
                    </Modal>
                </Button>
            </Box>
        </VStack>
    );
}

export default Footer;
