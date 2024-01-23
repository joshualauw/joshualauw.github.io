import { Box, VStack } from "@chakra-ui/react";
import Hero from "./_components/Hero";
import Skill from "./_components/Skill";
import Experience from "./_components/Experience";
import Project from "./_components/Project";
import Contact from "./_components/Contact";

export const revalidate = 30;

export default function Page() {
    return (
        <VStack marginTop={{ base: 10, md: 16 }} spacing={{ base: 10, md: 20 }}>
            <Hero />
            <Box id="skills"></Box>
            <Skill />
            <Box id="experience"></Box>
            <Experience />
            <Box id="projects"></Box>
            <Project />
            <Box id="contact"></Box>
            <Contact />
        </VStack>
    );
}
