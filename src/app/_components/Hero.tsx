import { DownloadIcon } from "@chakra-ui/icons";
import { Box, Button, HStack, Icon, Image, Text, VStack } from "@chakra-ui/react";

function Hero() {
    return (
        <Box width={{ base: "100%", xl: "75%" }} padding={{ base: 5, md: 0 }}>
            <HStack spacing={12}>
                <VStack spacing={6} textAlign={{ base: "center", md: "left" }}>
                    <Text fontWeight={700} fontSize={28}>
                        Hello 👋 I'm Joshua William, A{" "}
                        <Text as="span" color="cyan.500">
                            Web Developer
                        </Text>{" "}
                        From Surabaya, Indonesia
                    </Text>
                    <Text color="gray.500">
                        A fresh graduate with a keen interest in IT pursuing web development career. My passion lies in
                        programming, science, coding, and software engineering. Always ready for learning new things and
                        excel at teamwork relationship to achieving goals.
                    </Text>
                    <Button width="100%" colorScheme="blue" rounded="full">
                        <Icon as={DownloadIcon} mr={3} /> Download CV
                    </Button>
                </VStack>
                <Image
                    display={{ base: "none", md: "block" }}
                    borderRadius="full"
                    boxSize="225px"
                    src="/img/head_only.jpg"
                    alt="Profile"
                />
            </HStack>
        </Box>
    );
}

export default Hero;
