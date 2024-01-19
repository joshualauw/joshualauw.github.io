"use client";

import { Divider, VStack } from "@chakra-ui/react";
import Hero from "./_components/Hero";
import Skill from "./_components/Skill";
import Experience from "./_components/Experience";
import Project from "./_components/Project";

export default function Page() {
    return (
        <VStack marginTop={24} spacing={{ base: 12, md: 20 }}>
            <Hero />
            <Divider id="skills"></Divider>
            <Skill />
            <Divider id="experience"></Divider>
            <Experience />
            <Divider id="projects"></Divider>
            <Project />
        </VStack>
    );
}
