'use client'

import { useStore } from "@/app/utils/store"
import SelectChat from "../features/select-chat"

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
                </div>
            ))
           } 
        </div>
    )
}