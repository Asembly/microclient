import SendButton from "@/components/features/message/send-message";
import { Box, Flex } from "@chakra-ui/react";

export default function Footer()
{
    return(
        <Flex flexShrink={0} bg="black" p={4} flexDir="column" justifyContent="space-between" alignItems="center">
            <SendButton/>
        </Flex>
    )
}