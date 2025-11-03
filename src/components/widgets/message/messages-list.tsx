'use client'

import { useStore } from "@/utils/store"
import MessageRemoveButton from "../../features/message/remove-btn"

export default function MessagesList() {

    const {messages} = useStore()

    return (
      <div className="flex flex-col gap-2">
        {
          messages.length == 0? "Messages empty":
            messages.map((msg,i) => (
                <div key={i} className="flex gap-5">
                    <div className="bg-yellow-300 p-0.5 rounded-sm text-black">
                      <p>{msg.author_id}</p>
                    </div>
                    <div>
                      <p>{msg.text}</p>
                    </div>
                    <div>
                      <MessageRemoveButton id={msg.id}/>
                    </div>
                </div>
            ))
        }
      </div>
    )
  }