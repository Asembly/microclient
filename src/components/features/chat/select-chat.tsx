'use client'

import { useStore } from "@/utils/store"

export default function SelectChat(props: {chat: Chat})
{
    const {selectedChat, setSelectedChat, fetchMessagesByChatId} = useStore()

    const handler = async() => {
        setSelectedChat(props.chat)
        await fetchMessagesByChatId(props.chat.id) 
    }

    return(
        <div>
            <input checked={selectedChat === props.chat} type="radio" className="cursor-pointer" onChange={handler}/>
        </div>
    ) 
}