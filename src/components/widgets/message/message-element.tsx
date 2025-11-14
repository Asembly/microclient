'use client'
import MessageRemoveButton from "@/components/features/message/remove-btn";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useSession } from "next-auth/react";

export default function MessageElement(props: {msg: Message})
{

    const { data: session, status } = useSession();

    return(
        <Flex
            key={props.msg.id}
            gap={2}
            align="flex-start"
            w="full"
            px={4}
            py={2}
          >
            <Box
              w="30px"
              h="30px"
              borderRadius="full"
              bg={"white"}
              mr={2}
            />
            <Box  flex="1" color={"msgText"}>
              <Flex align="center" mb={1} gap={2}>
                <Text fontWeight="bold" color={session?.user.name == props.msg.author ? "nickOwn" :"nickForeign"} fontSize="md">
                  {props.msg.author}
                </Text>
              </Flex>
              <Text fontSize="sm" whiteSpace="pre-line" wordBreak={"break-word"} color={"text"}>
                {props.msg.text}
              </Text>
            </Box> 
            <MessageRemoveButton id={props.msg.id} />
          </Flex>
    )
}