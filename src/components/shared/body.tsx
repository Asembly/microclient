'use client'
import { Box, Flex } from "@chakra-ui/react";
import MessagesList from "../widgets/message/messages-list";
import ChatsList from "../widgets/chat/chats-list";
import UsersList from "../widgets/user/users-list";
import ChatForm from "../widgets/chat/chat-form";
import UserForm from "../widgets/user/user-form";
import { useScreen } from "../ui/screen-provider";

export default function Body()
{

    const {isMobile} = useScreen()

    console.log(isMobile)

    return(
        <Flex
        flex="1"
        width="100%"
        height="100%"
        minHeight="0" // важно для скроллинга дочерних flex-элементов
        minWidth="0"
        bg="myBg"
        >
        {
            isMobile?"":(
                <Box
                    width="250px"
                    minWidth="180px"
                    maxWidth="320px"
                    bg="transparent"
                    p={4}
                    overflowY="auto"
                >
                    {/* Здесь будет ваш компонент со списком чатов/групп */}
                    Список групп
                    <ChatsList/>
                    <ChatForm/>
                </Box>
            )
        }
        

        {/* 2. Основной чат по центру */}
        <Flex
            flex="1"
            flexDirection="column"
            align="center"
            justify="center"
            p={4}
            minWidth="0"
            overflowY="auto"
            bg="myBgAlt"
        >
            <MessagesList/>
        </Flex>
            {
                isMobile?"":
                <Box
                    width="220px"
                    minWidth="140px"
                    maxWidth="320px"
                    bg="transparent"
                    p={4}
                    overflowY="auto"
                >
                    Пользователи чата
                    <UsersList/>
                    <UserForm/>
                </Box>
            }
            
        </Flex>
    )
}