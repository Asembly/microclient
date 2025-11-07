'use client'

import { useStore } from "@/utils/store"
import MessageRemoveButton from "../../features/message/remove-btn"
import { Avatar, Box, Flex, IconButton, Text } from "@chakra-ui/react"

export default function MessagesList() {

    const {messages} = useStore()

    return (
      <Flex overflowY="auto" 
      direction="column" gap={5}>
      {messages.map((msg, i) => (
        <Flex
          key={msg.id || i}
          gap={2}
          align="flex-start"
          borderRadius="md"
          bg={"msgForeign"}
          w="1000px"
          px={4}
          py={2}
          boxShadow="sm"
        >
          <Box
            w="30px"
            h="30px"
            borderRadius="full"
            bg={"white"}
            mr={2}
          />
          <Box flex="1" color={"msgText"}>
            <Flex align="center" mb={1} gap={2}>
              <Text fontWeight="bold" color={"nickForeign"} fontSize="md">
                {msg.author}
              </Text>
            </Flex>
            <Text fontSize="sm" whiteSpace="pre-line" wordBreak={"break-word"}>
              {msg.text}
            </Text>
          </Box>
          <MessageRemoveButton id={msg.id} />
        </Flex>
      ))}
    </Flex>
    )
  }