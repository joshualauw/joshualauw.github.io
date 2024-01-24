"use client";

import {
    Button,
    Card,
    CardBody,
    FormControl,
    FormHelperText,
    FormLabel,
    Heading,
    Icon,
    Input,
    Textarea,
    VStack,
} from "@chakra-ui/react";
import { IoSend } from "react-icons/io5";
import { sendEmail } from "@/api/contact";
import { useFormStatus } from "react-dom";
import { useToast } from "@chakra-ui/react";
import { useRef } from "react";

function Contact() {
    const toast = useToast();
    const form = useRef<HTMLFormElement>(null);

    async function contactMe(formData: FormData) {
        const { status, message } = await sendEmail({
            name: formData.get("name") as string,
            content: formData.get("content") as string,
        });

        toast({
            title: status ? "Success" : "Error",
            description: message,
            status: status ? "success" : "error",
            duration: 5000,
            isClosable: true,
        });

        form.current?.reset();
    }

    return (
        <VStack spacing={14} w="100%" p={{ base: 5, md: 0 }} position="relative">
            <Heading size="lg" textAlign="center">
                Contact Me
            </Heading>
            <Card w={{ base: "100%", xl: "75%" }} p={{ base: 2, md: 4 }} rounded="xl" bgColor="secondary">
                <CardBody>
                    <form ref={form} action={contactMe}>
                        <ContactForm />
                    </form>
                </CardBody>
            </Card>
        </VStack>
    );
}

function ContactForm() {
    const { pending } = useFormStatus();

    return (
        <VStack spacing={6}>
            <FormControl>
                <FormLabel>Your Name</FormLabel>
                <Input type="text" name="name" required minLength={3} />
            </FormControl>
            <FormControl>
                <FormLabel>Content </FormLabel>
                <Textarea height="200px" maxLength={1500} resize="none" name="content" required minLength={10} />
                <FormHelperText>(max 1500 characters)</FormHelperText>
            </FormControl>
            <Button colorScheme="blue" type="submit" disabled={pending} isLoading={pending} loadingText="Sending">
                <Icon as={IoSend} mr="3" /> Submit
            </Button>
        </VStack>
    );
}

export default Contact;
