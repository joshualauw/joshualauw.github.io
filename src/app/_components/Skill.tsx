import { Badge, Box, Heading, VStack } from "@chakra-ui/react";

function Skill() {
    const skills = [
        "tailwindcss",
        "PHP / Laravel",
        "HTML",
        "CSS",
        "Javascript",
        "Typescript",
        "NodeJs / Express",
        "Vue / NuxtJs",
        "React / NextJs",
        "MySQL",
        "MongoDB",
    ];

    return (
        <VStack spacing={14} width="full" padding={{ base: 5, md: 0 }}>
            <Heading size="lg" textAlign="center">
                My Skills
            </Heading>
            <Box px={8} textAlign="center">
                {skills.map((skill) => (
                    <Badge key={skill} mr={3} mb={3} colorScheme="purple" px={3} py={1} rounded="full">
                        {skill}
                    </Badge>
                ))}
            </Box>
        </VStack>
    );
}

export default Skill;
