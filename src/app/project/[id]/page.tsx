import { IProject, getProjectDetail } from "@/api/project";
import { Box, Center, Heading, Image, Link, ListItem, Text, UnorderedList, VStack } from "@chakra-ui/react";
import BackButton from "./_components/BackButton";
import Gallery from "./_components/Gallery";
import { urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";

export const revalidate = 30;

const customComponents = {
    list: {
        bullet: ({ children }: any) => <UnorderedList>{children}</UnorderedList>,
    },
    listItem: {
        bullet: ({ children }: any) => <ListItem ml={5}>{children}</ListItem>,
    },
};

async function ProjectDetailPage({ params }: { params: { id: string } }) {
    const project: IProject = await getProjectDetail(params.id);

    if (project == null) return <Center>Not Found</Center>;

    return (
        <Box p={{ base: 5, md: 0 }}>
            <BackButton />
            <Center mt={8}>
                <VStack w={{ base: "100%", md: "75%" }} alignItems="start" spacing={12}>
                    <Image
                        src={urlFor(project.imageUrl).url()}
                        borderRadius="lg"
                        maxH="375px"
                        w="100%"
                        objectFit="cover"
                    />
                    <Heading fontSize="2xl">📕 Overview</Heading>
                    <Heading fontSize="xl">Project Title: {project.name}</Heading>
                    <VStack spacing={6} alignItems="start">
                        <PortableText value={project.content} components={customComponents} />
                    </VStack>
                    <Heading fontSize="2xl">🖼️ Gallery</Heading>
                    <Gallery images={project.gallery} />
                    <Heading fontSize="2xl">🔗 Links</Heading>
                    <Box>
                        {project.links.map((link) => (
                            <Text key={link.url}>
                                <Link target="_blank" href={link.url} color="blue">
                                    {link.url}
                                </Link>
                                <span> - {link.name}</span>
                            </Text>
                        ))}
                    </Box>
                </VStack>
            </Center>
        </Box>
    );
}

export default ProjectDetailPage;
