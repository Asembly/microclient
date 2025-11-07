'use client'

import SelectChat from "../../features/chat/select-chat"
import ChatRemoveButton from "../../features/chat/remove-btn"
import { getChatsByUserId } from "@/utils/actions"
import { Session } from "next-auth"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import { auth } from "@/utils/auth"
import { Flex } from "@chakra-ui/react"

export default function ChatsList()
{
    const [chats, setChats] = useState<Chat[]>([])
    const { data: session, status } = useSession();

    useEffect(() => {
        if(session?.user?.id)
            getChatsByUserId(session.user.id).then(setChats)
    }, [status, session]) 

    return ( 
        <div>
           {
            chats.length == 0?"Chat not found":
            chats.map((item) => (
                <Flex key={item.id} gap={2}>
                    {/* <div>
                    {
                            item.id
                    }
                    </div> */}
                    <div>
                        {
                            item.title
                        }
                    </div>
                    <SelectChat chat={item}/>
                    <ChatRemoveButton id={item.id}/>
                </Flex>
            ))
           } 
        </div>
    )
}