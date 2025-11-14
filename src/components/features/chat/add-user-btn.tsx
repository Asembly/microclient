import UserForm from "@/components/widgets/user/user-form";
import { Box, Button, Menu, Portal } from "@chakra-ui/react";

export default function AddUserBtn()
{
    return (
        <Box w={"100%"} display="flex" justifyContent="center">
            <Menu.Root>
                <Menu.Trigger asChild w={"90%"}>
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
                        Пригласить
                    </Button>
                </Menu.Trigger>
                <Portal>
                    <Menu.Positioner>
                    <Menu.Content>
                        <UserForm/>
                    </Menu.Content>
                    </Menu.Positioner>
                </Portal>
            </Menu.Root>
        </Box>
    )
}