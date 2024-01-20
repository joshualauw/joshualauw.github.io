import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { fonts } from "@/lib/fonts";
import { Providers } from "@/providers/providers";
import { Box, Container } from "@chakra-ui/react";

import "./global.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Joshualauw's Portfolio",
    description: "Welcome to my portfolio website. I'm Joshua, your friendly neighbourhood web developer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={fonts.poppins.variable}>
            <body>
                <Providers>
                    <Box w="100%" pb={16}>
                        <div id="home"></div>
                        <Navbar />
                        <Container
                            maxW={{ base: "100%", md: "700px", xl: "1000px" }}
                            pt={{ base: 8, md: 16 }}
                            pb={{ base: 8, md: 16 }}
                        >
                            {children}
                        </Container>
                        <Footer />
                    </Box>
                </Providers>
            </body>
        </html>
    );
}
