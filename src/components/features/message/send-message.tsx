'use client'

import client, { publish } from "@/utils/stomp"
import { useStore } from "@/utils/store"
import { useSession } from "next-auth/react"
import { useState } from "react"

export default function SendButton()
{
    
    const {selectedChat} = useStore()
    const [text, setText] = useState("")
    const { data: session, status } = useSession();
    const token = session?.access?.token

    const handleKeyPress = (event: any) => {
            if (event.key === 'Enter') {
            event.preventDefault(); 
            sendMessage();
        }
    }
    const sendMessage = () => {
        if(client && client.connected)
        {
            console.log("Sending message...")
            if(token)
            {
                publish(`/app/chat/sendMessage/${selectedChat.id}`,
                    JSON.stringify({text: text, author_id: session?.user.id, chat_id: selectedChat.id}), token )
            }
            setText("")
        }
    }

    return(
        <div>
            <input onKeyPress={handleKeyPress} type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="message"/>
            <button onClick={sendMessage}>Send</button>
        </div>
    )
}