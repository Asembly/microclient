'use client'

import { useCreateChatStore } from "@/utils/store"
import { useState } from "react"

export default function UserSelectMenu()
{

    const [text, setText] = useState("")
    const {setAddedUsers, addedUsers} = useCreateChatStore()

    const buttonHandler = () => {
        console.log(text)
        setAddedUsers(text)
        setText("")
    }

    const handleKeyPress = (event: any) => {
        if (event.key === 'Enter') {
            event.preventDefault(); 
            setAddedUsers(text)
            setText("")
        }
    }

    const inputHandler = (text: string) => {
        setText(text)
        console.log(text)
    }

    return(
        <div>
            <input onKeyPress={handleKeyPress} type="text" value={text} onChange={(e) => inputHandler(e.target.value)} placeholder="type user id"/>
            <button onClick={buttonHandler} type="button">Add</button>
        </div>
    )
}