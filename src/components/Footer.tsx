import { Text, VStack } from "@chakra-ui/react";

function Footer() {
    return (
        <VStack>
            <Text color="gray.500">Copyright @{new Date().getFullYear()}</Text>
            <Text color="gray.500" fontSize="sm">
                Made with ❤️ by Joshua William
            </Text>
        </VStack>
    );
}

export default Footer;
