'use client'

import { useStore } from "@/app/utils/store"

export default function MessagesList() {

    const {messages} = useStore()

    return (
      <div className="flex flex-col gap-2">
        {
            messages.map((msg,i) => (
                <div key={i} className="flex gap-5">
                    <div className="bg-yellow-300 p-0.5 rounded-sm text-black">
                      <p>{msg.author_id}</p>
                    </div>
                    <div>
                      <p>{msg.text}</p>
                    </div>
                    {/* <div>
                      <RemoveMsgButton id={msg.id}/>
                    </div> */}
                </div>
            ))
        }
      </div>
    )
  }