"use client";

import { IProjectCard, getProjectCards } from "@/api/project";
import { urlFor } from "@/lib/sanity";
import {
    Image,
    Card,
    CardBody,
    Grid,
    GridItem,
    Heading,
    VStack,
    Button,
    Center,
    Badge,
    Box,
    Text,
} from "@chakra-ui/react";
import Link from "next/link";

async function Project() {
    const projects: IProjectCard[] = await getProjectCards();

    return (
        <VStack spacing={14} w="full" padding={{ base: 5, md: 0 }}>
            <Heading size="lg" textAlign="center">
                My Projects
            </Heading>
            <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", xl: "repeat(3, 1fr)" }} gap={8}>
                {projects.map((project) => (
                    <GridItem key={project.id}>
                        <Card rounded="lg" bgColor="secondary">
                            <CardBody>
                                <Image
                                    src={urlFor(project.imageUrl).url()}
                                    alt="Green double couch with wooden legs"
                                    borderRadius="lg"
                                />
                                <VStack mt={4} spacing={4}>
                                    <Heading size="md">{project.name}</Heading>
                                    <Text color="mute" fontSize="sm">
                                        {project.overview}
                                    </Text>
                                    <Box>
                                        {project.stack.map((st) => (
                                            <Badge
                                                key={st}
                                                mr={2}
                                                mb={2}
                                                colorScheme="cyan"
                                                px={2}
                                                py={0.5}
                                                rounded="full"
                                                display="inline-flex"
                                            >
                                                {st}
                                            </Badge>
                                        ))}
                                    </Box>
                                    <Center>
                                        <Button variant="outline" size="sm">
                                            <Link href={`/project/${project.id}`}>Read More</Link>
                                        </Button>
                                    </Center>
                                </VStack>
                            </CardBody>
                        </Card>
                    </GridItem>
                ))}
            </Grid>
        </VStack>
    );
}

export default Project;
