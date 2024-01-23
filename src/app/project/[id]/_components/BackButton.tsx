"use client";

import { Button, Flex, Icon, Link } from "@chakra-ui/react";
import { IoMdArrowBack } from "react-icons/io";
import NextLink from "next/link";

function BackButton() {
    return (
        <Button variant="ghost">
            <Link as={NextLink} href="/#projects">
                <Flex alignItems="center">
                    <Icon as={IoMdArrowBack} fontSize={{ base: 16, md: 20 }} mr={2} /> Back
                </Flex>
            </Link>
        </Button>
    );
}

export default BackButton;
