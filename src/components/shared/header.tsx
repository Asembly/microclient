"use client";

import { Box, Button, CloseButton, Drawer, Flex, Icon, IconButton, Portal, Show } from "@chakra-ui/react";
import ChatsList from "../widgets/chat/chats-list";
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import LogoutBtn from "../features/auth/logout-btn";
import ChatForm from "../widgets/chat/chat-form";
import { useStore } from "@/utils/store";
import { useState } from "react";
import Image from "next/image";
import UsersList from "../widgets/user/users-list";
import { ColorModeButton } from "../ui/color-mode";
import { useSession } from "next-auth/react";

export default function MessengerHeader() {

    const {selectedChat} = useStore()
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Flex
        as="header"
        align="center"
        justify="space-between"
        bg="topBar"
        height="78px"
        width="100%"
        px={4}>
            <Box>
                <Drawer.Root placement="start" size="xs">
                    <Drawer.Trigger asChild>
                        <Box display={{base:"block", md: "none"}}>
                            <IconButton bg={"none"}>
                                <HamburgerIcon></HamburgerIcon>
                            </IconButton>
                        </Box>
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
                                <ChatForm/>
                            </Drawer.Footer>
                            <Drawer.CloseTrigger asChild>
                            <CloseButton size="md" />
                            </Drawer.CloseTrigger>
                        </Drawer.Content>
                        </Drawer.Positioner>
                    </Portal>
                </Drawer.Root>
            </Box>
            <Box fontWeight="bold" flex={1} textAlign="center" fontSize="lg">
                {selectedChat.title}
            </Box>
            <Box>
                <Drawer.Root placement="end" size="xs">
                    <Drawer.Trigger asChild>
                        <Box display={{base:"block", md: "none"}}>
                            <Image alt="user-info" width={18} height={18} src={"user-info.svg"}></Image>
                        </Box>
                    </Drawer.Trigger>
                    <Portal>
                        <Drawer.Positioner>
                            <Drawer.Content>
                                <Drawer.Header>
                                    <Flex align={"center"} direction={"row"} placeItems={"flex-start"}>
                                        <Drawer.CloseTrigger asChild>
                                            <CloseButton size="md" />
                                        </Drawer.CloseTrigger>
                                        <Box flex={1}/>
                                        <Box>
                                            <Drawer.Title>Пользователи</Drawer.Title>
                                        </Box>
                                    </Flex>
                                </Drawer.Header>
                                <Drawer.Body>
                                    <UsersList/>
                                </Drawer.Body>
                                <Drawer.Footer>
                                    Footer
                                </Drawer.Footer>
                            </Drawer.Content>
                        </Drawer.Positioner>
                    </Portal>
                </Drawer.Root>
            </Box>
            <Box>
                <ColorModeButton/>
            </Box>
        </Flex>
    );
}