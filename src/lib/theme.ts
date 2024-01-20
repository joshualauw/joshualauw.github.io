import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
    styles: {
        global: (props: any) => ({
            "html, body": {
                bgColor: props.colorMode == "light" ? "gray.50" : "gray.900",
            },
        }),
    },
    semanticTokens: {
        colors: {
            mute: {
                default: "gray.600",
                _dark: "gray.400",
            },
            secondary: {
                default: "white",
                _dark: "gray.800",
            },
        },
    },
});

export default customTheme;
