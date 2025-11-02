'use client'

import { useStore } from "@/app/utils/store"

export default function SelectUser(props: {id : string})
{
    const {selectedUserId, setSelectedUserId, fetchChatsByUserId, chats} = useStore()

    const handler = async() => {
        setSelectedUserId(props.id)
        await fetchChatsByUserId(props.id) 
    }

    return(
        <div>
            <input checked={selectedUserId === props.id} type="radio" className="cursor-pointer" onChange={handler}/>
        </div>
    ) 
}