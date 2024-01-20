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

function Contact() {
    return (
        <VStack spacing={14} w="100%" p={{ base: 5, md: 0 }} position="relative">
            <Heading size="lg" textAlign="center">
                Contact
            </Heading>
            <Card w={{ base: "100%", xl: "75%" }} p={{ base: 2, md: 4 }} rounded="lg" bgColor="secondary">
                <CardBody>
                    <VStack spacing={6}>
                        <FormControl>
                            <FormLabel>Your Name</FormLabel>
                            <Input type="text" />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Content </FormLabel>
                            <Textarea height="200px" maxLength={1500} resize="none" />
                            <FormHelperText>(max 1500 characters)</FormHelperText>
                        </FormControl>
                        <Button colorScheme="blue">
                            <Icon as={IoSend} mr="3" /> Submit
                        </Button>
                    </VStack>
                </CardBody>
            </Card>
        </VStack>
    );
}

export default Contact;
