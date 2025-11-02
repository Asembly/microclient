'use client'

import { useStore } from "@/app/utils/store"

export default function SelectChat(props: {id : string})
{
    const {selectedChatId, setSelectedChatId, fetchMessagesByUserId} = useStore()

    const handler = async() => {
        setSelectedChatId(props.id)
        await fetchMessagesByUserId(props.id) 
    }

    return(
        <div>
            <input checked={selectedChatId === props.id} type="radio" className="cursor-pointer" onChange={handler}/>
        </div>
    ) 
}