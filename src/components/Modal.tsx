import {
    Modal as ChakraModal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from "@chakra-ui/react";
import React from "react";

function Modal({
    isOpen,
    onClose,
    children,
    footer,
    header,
}: {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    footer?: React.ReactNode;
    header?: React.ReactNode;
}) {
    return (
        <>
            <ChakraModal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{header}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>{children}</ModalBody>
                    <ModalFooter>{footer}</ModalFooter>
                </ModalContent>
            </ChakraModal>
        </>
    );
}

export default Modal;
