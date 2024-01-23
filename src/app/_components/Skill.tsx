"use client";

import { ISkill, getAllSkill } from "@/api/skill";
import { Badge, Box, Heading, VStack } from "@chakra-ui/react";

async function Skill() {
    const skills: ISkill[] = await getAllSkill();

    return (
        <VStack spacing={14} width={{ base: "100%", xl: "75%" }} padding={{ base: 5, md: 0 }}>
            <Heading size="lg" textAlign="center">
                My Skills
            </Heading>
            <Box px={8} textAlign="center">
                {skills.map((skill) => (
                    <Badge key={skill.name} mr={3} mb={3} colorScheme="purple" px={4} py={1.5} rounded="full">
                        {skill.name}
                    </Badge>
                ))}
            </Box>
        </VStack>
    );
}

export default Skill;
