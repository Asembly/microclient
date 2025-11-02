'use client'

import { deleteMessage } from "@/utils/actions"
import { useStore } from "@/utils/store"

export default function MessageRemoveButton(props: {id: string})
{
    const {removeMessage} = useStore()

    const handler = () => {
        removeMessage(props.id) 
        deleteMessage(props.id)
    }

    return(
        <div>
            <button onClick={() => handler()}>X</button>
        </div>
    )
}