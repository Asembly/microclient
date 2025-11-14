'use client'

import { useStore } from "@/utils/store"
import MessageRemoveButton from "../../features/message/remove-btn"
import { Avatar, Box, Flex, IconButton, Text } from "@chakra-ui/react"
import { useSession } from "next-auth/react"
import { useEffect, useRef } from "react"
import MessageElement from "./message-element"

export default function MessagesList() {

    const {messages, selectedChat} = useStore()

    const bottomRef:any = useRef(null);

    useEffect(() => {
      if (bottomRef.current) {
        bottomRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, [messages]);

    return (
      <Box xlDown={{w:"full"}} overflowY={"auto"} lg={{w:"70%"}} h={"100%"}>
        <Flex alignItems={"center"}
        direction="column" gap={5}>
          {
            selectedChat.id == undefined 
            ?
              <Box>
                Выберите чат, чтобы начать общение
              </Box>
            :
                messages.length == 0 
                ? 
                <Box>
                  Чат пустой, напишите что нибудь 
                </Box>
                :
                messages.map((msg) => (
                  <MessageElement msg={msg}/>
                ))
          }
          <div ref={bottomRef} />
        </Flex>
    </Box>
    )
  }