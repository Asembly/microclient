'use client'

import { useCreateChatStore } from "@/app/utils/store"
import { useState } from "react"

export default function AddUser()
{

    const [text, setText] = useState("")
    const {setAddedUsers} = useCreateChatStore()

    const buttonHandler = () => {
        setAddedUsers(text)
        setText("")
    }

    const handleKeyPress = (event: any) => {
        if (event.key === 'Enter') {
            event.preventDefault(); 
            setText("")
        }
    }

    return(
        <div>
            <input onKeyPress={handleKeyPress} type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="type user id"/>
            <button onClick={buttonHandler}>Add</button>
        </div>
    )
}