import Navbar from "@/components/Navbar";
import { fonts } from "@/lib/fonts";
import { Providers } from "@/lib/providers";
import { Box, Container } from "@chakra-ui/react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={fonts.poppins.variable}>
            <body>
                <Providers>
                    <Box bgColor="gray.50" width="100%" paddingBottom={24}>
                        <div id="home"></div>
                        <Navbar />
                        <Container maxW={{ base: "100%", md: "700px", xl: "1000px" }} paddingBottom={16}>
                            {children}
                        </Container>
                    </Box>
                </Providers>
            </body>
        </html>
    );
}
