'use client'
import { Flex, Text, Box } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { useState, useRef } from "react";
import SendButton from "../features/message/send-message";

export default function Footer() {
  const { data: session } = useSession();
  const [copied, setCopied] = useState(false);
  const leftRef = useRef(null);

  const username = session?.user?.name || "User";
  const userId = session?.user?.id || "unknown";

  const handleCopy = async () => {
    if (userId) {
      await navigator.clipboard.writeText(userId);
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    }
  };

  return (
    <Box position="relative" w="100%">
      <Flex
        flexShrink={0}
        bg="topBar"
        h={78}
        align="center"
        px={4}
        gap={2}
        w="100%"
      >
        {/* Левая часть: Имя и id */}
        <Box position="relative" ref={leftRef} minW="0">
          <Flex
            align="center"
            gap={2}
            cursor="pointer"
            userSelect="none"
            onClick={handleCopy}
            minW={0}
          >
            <Text
              truncate
              fontWeight="bold"
              color="text"
              maxW="120px"
            >
              {username}
            </Text>
            <Text
              color={copied ? "accent" : "tagUser"}
              fontSize="sm"
              fontFamily="mono"
              truncate
              maxW="80px"
              transition="color 0.2s"
            >
              #{userId}
            </Text>
          </Flex>
          {/* Оповещение прямо над ником+ID */}
          {copied && (
            <Box
              position="absolute"
              left={0}
              top="-36px"
              zIndex={10}
              px={2}
              py={1}
              bg="accent"
              color="white"
              borderRadius="md"
              fontSize="sm"
              boxShadow="md"
              pointerEvents="none"
              minW="max-content"
              textAlign="center"
            >
              ID скопирован!
            </Box>
          )}
        </Box>

        {/* Центр: кнопка */}
        <Flex flex="1" justify="center">
          <SendButton/>
        </Flex>
        {/* Правая часть */}
        <Flex minW="60px" justify="flex-end"></Flex>
      </Flex>
    </Box>
  );
}
