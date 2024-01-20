"use client";

import Modal from "@/components/Modal";
import { Box, Button, Center, Flex, Heading, Icon, Image, Link, Text, VStack, useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { IoMdArrowBack } from "react-icons/io";

function ProjectDetailPage() {
    const router = useRouter();
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box p={{ base: 5, md: 0 }}>
            <Flex alignItems="center" gap={8}>
                <Button onClick={() => router.push("/#projects")} variant="ghost">
                    <Icon as={IoMdArrowBack} fontSize={{ base: 16, md: 20 }} mr={2} /> Back
                </Button>
            </Flex>
            <Center mt={8}>
                <VStack w={{ base: "100%", md: "75%" }} alignItems="start" spacing={12}>
                    <Image src="/img/justdoit.png" borderRadius="lg" maxH="375px" w="100%" objectFit="cover" />
                    <Heading fontSize="2xl">📕 Overview</Heading>
                    <Heading fontSize="xl">Project Title: JUSTDOIT</Heading>
                    <Text color="mute">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere esse in aliquid cumque cum natus
                        dolorem ipsam vel voluptatem corrupti laborum nihil exercitationem, voluptate consequuntur id
                        soluta, culpa tempore repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Architecto esse odit mollitia non accusamus incidunt amet facere quae hic et. Consequuntur
                        reiciendis error ex, iusto quibusdam consequatur quaerat dolores delectus? <br /> <br />
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, beatae quisquam vitae optio
                        soluta explicabo dicta officia consectetur qui ipsam doloremque dolores aperiam maiores atque
                        nostrum id deleniti unde reiciendis.
                    </Text>
                    <Heading fontSize="2xl">🖼️ Gallery</Heading>
                    <Flex w="100%" overflowX="auto" gap={4} pb={8}>
                        {Array.from(Array(4).keys()).map((i) => (
                            <Image
                                key={i}
                                onClick={onOpen}
                                src="/img/justdoit.png"
                                maxW={{ base: "200px", md: "300px" }}
                                borderRadius="lg"
                                objectFit="cover"
                                cursor="zoom-in"
                                _hover={{ transform: "scale(1.05)" }}
                            />
                        ))}
                    </Flex>
                    <Heading fontSize="2xl">🔗 Links</Heading>
                    <Box>
                        <Text>
                            <Link target="_blank" href="https://github.com" color="blue">
                                https://github.com
                            </Link>{" "}
                            - Github Link
                        </Text>
                        <Text>
                            <Link target="_blank" href="https://justdoit-sigma.vercel.app" color="blue">
                                https://justdoit-sigma.vercel.app
                            </Link>{" "}
                            - Website Link
                        </Text>
                    </Box>
                </VStack>
            </Center>
            <Modal isOpen={isOpen} onClose={onClose} size="xl" header="Gallery Image">
                <Icon as={BiChevronLeft} fontSize={48} position="absolute" top="50%" left="0" cursor="pointer" />
                <Image src="/img/justdoit.png" borderRadius="xl" />
                <Icon as={BiChevronRight} fontSize={48} position="absolute" top="50%" right="0" cursor="pointer" />
            </Modal>
        </Box>
    );
}

export default ProjectDetailPage;
