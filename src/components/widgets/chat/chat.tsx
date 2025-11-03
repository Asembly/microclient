import SendButton from "@/components/features/message/send-message";
import ChatsList from "@/components/widgets/chat/chats-list";
import MessagesList from "@/components/widgets/message/messages-list";
import { Box, Flex } from "@chakra-ui/react";

export default function Chat()
{
    return(
        <Box>
            <MessagesList/>
        </Box>
    )
}