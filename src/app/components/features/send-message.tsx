'use client'

import client, { publish } from "@/app/utils/stomp"
import { useStore } from "@/app/utils/store"
import { useState } from "react"

export default function SendButton()
{
    
    const {selectedChatId, selectedUserId} = useStore()
    const [text, setText] = useState("")

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
            publish(`/app/chat/sendMessage/${selectedChatId}`,
                    JSON.stringify({text: text, author_id: selectedUserId, chat_id: selectedChatId}) )
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