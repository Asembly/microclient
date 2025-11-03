"use client";

import { Box, Button, CloseButton, Drawer, Flex, IconButton, Portal } from "@chakra-ui/react";
import SelectChat from "../features/chat/select-chat";
import ChatsList from "../widgets/chat/chats-list";
import LogoutBtn from "../features/auth/logout-btn";
import ChatForm from "../widgets/chat/chat-form";
import { useStore } from "@/utils/store";

export default function MessengerHeader() {

    const {selectedChatId} = useStore()

    return (
        <Flex
        as="header"
        align="center"
        justify="space-between"
        bg="blue.500"
        color="white"
        height="60px"
        width="100%"
        px={4}>
            <Box>
                <Drawer.Root placement="start">
                    <Drawer.Trigger asChild>
                        <Button variant="outline" size="sm">
                            Open 
                        </Button>
                    </Drawer.Trigger>
                    <Portal>
                        <Drawer.Backdrop />
                        <Drawer.Positioner>
                        <Drawer.Content>
                            <Drawer.Header>
                            <Drawer.Title>Groups</Drawer.Title>
                            </Drawer.Header>
                            <Drawer.Body>
                                <ChatsList/>
                            </Drawer.Body>
                            <Drawer.Footer>
                            {/* <Button variant="outline">Cancel</Button> */}
                            {/* <Button>Save</Button> */}
                                <ChatForm/>
                            </Drawer.Footer>
                            <Drawer.CloseTrigger asChild>
                            <CloseButton size="sm" />
                            </Drawer.CloseTrigger>
                        </Drawer.Content>
                        </Drawer.Positioner>
                    </Portal>
                </Drawer.Root>
            </Box>
            <Box fontWeight="bold" flex={1} textAlign="center" fontSize="lg">
                Id Group {selectedChatId}
            </Box>
            <Box>
                <LogoutBtn/>
            </Box>
        </Flex>
    );
}