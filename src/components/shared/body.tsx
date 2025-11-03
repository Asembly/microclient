import { AbsoluteCenter, Box, Flex } from "@chakra-ui/react";
import Chat from "../widgets/chat/chat";
import MessagesList from "../widgets/message/messages-list";
import ChatsList from "../widgets/chat/chats-list";
import UsersList from "../widgets/user/users-list";
import ChatForm from "../widgets/chat/chat-form";
import UserForm from "../widgets/user/user-form";

export default function Body()
{
    return(
        <Flex
        flex="1"
        width="100%"
        height="100%"
        minHeight="0" // важно для скроллинга дочерних flex-элементов
        minWidth="0"
        bg="gray.50"
        >
        {/* 1. Список групп слева */}
        <Box
            width="250px"
            minWidth="180px"
            maxWidth="320px"
            bg="gray"
            borderRight="1px solid #e2e8f0"
            p={4}
            overflowY="auto"
        >
            {/* Здесь будет ваш компонент со списком чатов/групп */}
            Список групп
            <ChatsList/>
            <ChatForm/>
        </Box>

        {/* 2. Основной чат по центру */}
        <Flex
            flex="1"
            flexDirection="column"
            align="center"
            justify="center"
            p={4}
            minWidth="0"
            overflowY="auto"
            bg="gray.600"
        >
            <MessagesList/>
        </Flex>
            <Box
                width="220px"
                minWidth="140px"
                maxWidth="320px"
                bg="gray"
                borderLeft="1px solid #e2e8f0"
                p={4}
                overflowY="auto"
            >
                Пользователи чата
                <UsersList/>
                <UserForm/>
            </Box>
        </Flex>
    )
}