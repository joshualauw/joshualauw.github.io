import { Badge, Box, Heading, VStack } from "@chakra-ui/react";

function Skill() {
    const skills = [
        "HTML",
        "CSS",
        "Javascript",
        "Typescript",
        "Java",
        "Python",
        "C#",
        "tailwindcss",
        "PHP / Laravel",
        "NodeJs / Express",
        "Vue / NuxtJs",
        "React / NextJs",
        "MySQL",
        "MongoDB",
        "Firebase",
    ];

    return (
        <VStack spacing={14} width={{ base: "100%", xl: "75%" }} padding={{ base: 5, md: 0 }}>
            <Heading size="lg" textAlign="center">
                My Skills
            </Heading>
            <Box px={8} textAlign="center">
                {skills.map((skill) => (
                    <Badge key={skill} mr={3} mb={4} colorScheme="purple" px={4} py={1.5} rounded="full">
                        {skill}
                    </Badge>
                ))}
            </Box>
        </VStack>
    );
}

export default Skill;
