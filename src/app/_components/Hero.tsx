"use client";

import { IResume, getResume } from "@/api/resume";
import { Box, Icon, HStack, Image, Stack, Text, VStack, Button } from "@chakra-ui/react";
import { IoDocumentText, IoMail } from "react-icons/io5";

async function Hero() {
    const resume: IResume = await getResume();

    return (
        <Box w={{ base: "100%", xl: "75%" }} p={{ base: 5, md: 0 }}>
            <Stack direction={{ base: "column-reverse", md: "row" }} alignItems="center" spacing={{ base: 8, md: 16 }}>
                <VStack spacing={6} textAlign={{ base: "center", md: "left" }}>
                    <Text fontWeight={700} fontSize={28}>
                        Hello 👋 I'm Joshua William, Aspiring{" "}
                        <Text as="span" color="cyan.500">
                            Web Developer
                        </Text>{" "}
                        From Surabaya, Indonesia
                    </Text>
                    <Text color="mute">
                        A fresh graduate with a keen interest in IT pursuing web development career. My passion lies in
                        programming, science, internet technology, and software engineering. I Hope we can work
                        Together.
                    </Text>
                    <HStack spacing={4} w="100%" justifyContent={{ base: "center", md: "start" }}>
                        <Button as="a" href="#contact" colorScheme="blue" rounded="full" variant="outline">
                            <Icon as={IoMail} mr={2} /> Contact Me
                        </Button>
                        <Button
                            as="a"
                            href={resume.url}
                            download={resume.version}
                            target="_blank"
                            colorScheme="blue"
                            rounded="full"
                        >
                            <Icon as={IoDocumentText} mr={2} /> Download CV
                        </Button>
                    </HStack>
                </VStack>
                <Image
                    borderRadius="full"
                    boxSize={{ base: "160px", md: "200px", xl: "240px" }}
                    src="/img/head_only.jpg"
                    alt="Profile"
                />
            </Stack>
        </Box>
    );
}

export default Hero;
