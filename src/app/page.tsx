"use client";

import { Divider, VStack , useColorMode } from "@chakra-ui/react";
import Hero from "./_components/Hero";
import Skill from "./_components/Skill";
import Experience from "./_components/Experience";
import Project from "./_components/Project";
import Contact from "./_components/Contact";

export default function Page() {
    const { colorMode } = useColorMode();
    return (
        <VStack bgColor={colorMode === "light" ? "white" : "black"} marginTop={{ base: 16, md: 28 }} spacing={{ base: 10, md: 20 }}>
            <Hero />
            <Divider id="skills"></Divider>
            <Skill />
            <Divider id="experience"></Divider>
            <Experience />
            <Divider id="projects"></Divider>
            <Project />
            <Divider id="contact"></Divider>
            <Contact />
        </VStack>
    );
}
