"use client";

import Modal from "@/components/Modal";
import { urlFor } from "@/lib/sanity";
import { Image, useDisclosure, Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";

function Gallery({ images }: { images: any[] }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [activeImage, setActiveImage] = useState(null);

    function openImage(idx: number) {
        setActiveImage(images[idx]);
        onOpen();
    }

    return (
        <>
            <Grid templateColumns={{ base: "repeat(1, 1fr)", xl: "repeat(2, 1fr)" }} gap={8} w="100%">
                {images.map((img, i) => (
                    <GridItem key={i} onClick={() => openImage(i)}>
                        <Image
                            src={urlFor(img).url()}
                            h="225px"
                            w="100%"
                            border="1px"
                            borderColor="mute"
                            shadow="sm"
                            objectPosition="center"
                            objectFit="cover"
                            cursor="zoom-in"
                            _hover={{ transform: "scale(1.02)" }}
                        />
                    </GridItem>
                ))}
            </Grid>
            <Modal isOpen={isOpen} onClose={onClose} size="xl" header="Gallery Image">
                {activeImage && <Image src={urlFor(activeImage).url()} borderRadius="lg" />}
            </Modal>
        </>
    );
}

export default Gallery;
