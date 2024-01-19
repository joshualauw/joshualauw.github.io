import { Heading, VStack, useColorModeValue, chakra, Flex, Box, Text } from "@chakra-ui/react";

function Experience() {
    const experiences = [
        {
            title: "Intern Web Developer",
            location: "PT. Fiesto Informatika",
            duration: "June 2022 - October 2022",
            description: [
                "- Developed transaction, budgetting, and orphanage admin dashboard",
                "- Implement REST API using OOP Architecture",
                "- Creating documentation and user handbook for the application",
                "- Skills: Boostrap | MySQL | JQuery | Codeigniter 3",
            ],
        },
        {
            title: "Web Developer",
            location: "iSTTS",
            duration: "October 2022 - November 2023",
            description: [
                "- Developed event management website with video meeting platform as final project",
                "- Conducted testing on a 30+ student at seminar at iSTTS with questionnaire feedback",
                "- Implement Real Time Communication using Agora publisher-subscriber architecture.",
                "- Skills: NuxtJs | WebRTC | ExpressJS | MongoDB | Typescript",
            ],
        },
    ];

    return (
        <VStack spacing={14} width={{ base: "100%", xl: "75%" }} padding={{ base: 5, md: 0 }}>
            <Heading size="lg" textAlign="center">
                Experience
            </Heading>
            {experiences.map((exp) => (
                <Flex key={exp.title}>
                    <DotLine />
                    <Box key={exp.title} width={{ base: "100%", md: "550px" }}>
                        <VStack alignItems="start" spacing={1} mb={4}>
                            <Text fontWeight={700} fontSize="xl">
                                {exp.title} | {exp.location}
                            </Text>
                            <Text color="gray.700" fontWeight={500}>
                                {exp.duration}
                            </Text>
                        </VStack>
                        {exp.description.map((desc) => (
                            <Text key={desc} color="gray.600" fontSize="sm" mb="1px">
                                {desc}
                            </Text>
                        ))}
                    </Box>
                </Flex>
            ))}
        </VStack>
    );
}

function DotLine() {
    return (
        <Flex pos="relative" alignItems="center" mr="40px">
            <chakra.span
                position="absolute"
                left="50%"
                height="calc(100% + 10px)"
                border="1px solid"
                borderColor={useColorModeValue("gray.200", "gray.700")}
                top="0px"
            ></chakra.span>
            <Box pos="relative" p="10px">
                <Box
                    pos="absolute"
                    width="100%"
                    height="100%"
                    bottom="0"
                    right="0"
                    top="0"
                    left="0"
                    backgroundSize="cover"
                    backgroundRepeat="no-repeat"
                    backgroundPosition="center center"
                    backgroundColor="rgb(255, 255, 255)"
                    borderRadius="100px"
                    border="3px solid rgb(4, 180, 180)"
                    backgroundImage="none"
                    opacity={1}
                ></Box>
            </Box>
        </Flex>
    );
}

export default Experience;
