'use client'
import ChatForm from "@/components/widgets/chat/chat-form";
import { Box, Button, Menu, Portal } from "@chakra-ui/react";

export default function CreateChatBtn()
{
    return (
        <Box w={"100%"} display="flex" justifyContent="center">
            <Menu.Root>
                <Menu.Trigger asChild w={"90%"}>
                    {/* <Button variant="outline" size="sm">
                    Open
                    </Button> */}
                    <Button
                        mb={6}
                        px={2}
                        bg="button"
                        rounded="xl"
                        textAlign="center"
                        fontSize="md"
                        py={2}
                        color={"text"}
                        cursor="pointer"
                    >
                        Создать чат
                    </Button>
                </Menu.Trigger>
                <Portal>
                    <Menu.Positioner>
                    <Menu.Content>
                        {/* <Menu.Item value="export">Export</Menu.Item> */}
                        <ChatForm/>
                    </Menu.Content>
                    </Menu.Positioner>
                </Portal>
            </Menu.Root>
        </Box>
    )
}