'use client'
import ChatRemoveButton from "@/components/features/chat/remove-btn";
import { Box, Flex } from "@chakra-ui/react";
import Chat from "./chat";
import { useStore } from "@/utils/store";

export default function ChatElem(props: {chat: Chat})
{
    const {selectedChat, setSelectedChat, fetchMessagesByChatId} = useStore()

    const handler = async() => {
        setSelectedChat(props.chat)
        await fetchMessagesByChatId(props.chat.id) 
    }

    return (
        <Box onClick={handler} w={"full"} _hover={{ bg: "gray" }} _active={{ bg: "gray.300" }} bg={selectedChat == props.chat ? "black" : ""} cursor="pointer">
            <Flex gap={2}>
                <Box
                    w="30px"
                    h="30px"
                    borderRadius="full"
                    bg={"white"}
                    mr={2}
                    flexShrink={0}
                    flexGrow={0}  
                    flexBasis="30px"
                />
                <Flex direction={"column"}>
                    <Flex gap={2}>
                        <div>
                            {props.chat.title}
                        </div>
                        <ChatRemoveButton id={props.chat.id}/>
                    </Flex>
                    <Box fontSize={12} maxW="100%" wordBreak={"break-word"} whiteSpace={"pre-line"}>
                        группа для одноклассинков и обычных типов
                    </Box>
                </Flex>
                
            </Flex>
        </Box>
    )
}