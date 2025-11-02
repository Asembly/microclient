'use client'

import { useStore } from "@/utils/store"
import SelectChat from "../../features/chat/select-chat"
import ChatRemoveButton from "../../features/chat/remove-btn"

export default function ChatsList()
{
    const {chats} = useStore()

    return ( 
        <div>
           {
            chats == null?"test":
            chats.map((item) => (
                <div key={item.id} className="flex gap-5">
                    <div>
                    {
                            item.id
                    }
                    </div>
                    <div>
                        {
                            item.title
                        }
                    </div>
                    <SelectChat id={item.id}/>
                    <ChatRemoveButton id={item.id}/>
                </div>
            ))
           } 
        </div>
    )
}