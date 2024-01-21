"use client";

import { Button, Flex, Icon } from "@chakra-ui/react";
import Link from "next/link";
import { IoMdArrowBack } from "react-icons/io";

function BackButton() {
    return (
        <Button variant="ghost">
            <Link href="/#projects">
                <Flex alignItems="center">
                    <Icon as={IoMdArrowBack} fontSize={{ base: 16, md: 20 }} mr={2} /> Back
                </Flex>
            </Link>
        </Button>
    );
}

export default BackButton;
