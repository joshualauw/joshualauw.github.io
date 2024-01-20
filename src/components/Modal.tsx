import {
    Modal as ChakraModal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    ModalProps,
} from "@chakra-ui/react";
import React from "react";

function Modal({
    isOpen,
    onClose,
    children,
    size,
    footer,
    header,
}: ModalProps & { footer?: React.ReactNode; header?: React.ReactNode }) {
    return (
        <>
            <ChakraModal isOpen={isOpen} onClose={onClose} size={size} isCentered>
                <ModalOverlay />
                <ModalContent bgColor="secondary">
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
