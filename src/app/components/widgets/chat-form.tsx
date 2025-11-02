'use client'
import { createChat } from "@/app/utils/actions"
import React, { useActionState, useRef, useState } from "react"
import AddUser from "../features/add-user"
import { useCreateChatStore } from "@/app/utils/store"

export default function ChatForm()
{
    const [_, formAction] = useActionState(createChat, {} as any)
    const {addedUsers} = useCreateChatStore()
    const formRef = useRef<HTMLFormElement>(null)

    const handleSubmit = async(e: React.FormEvent) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget as HTMLFormElement);
          
        console.log("Added Users json" + JSON.stringify(addedUsers))
        console.log("Added Users json" + addedUsers)
        formData.append("users_id", JSON.stringify(addedUsers))

        try
        {
            await createChat({} as any, formData)
            console.log("Chat is created!")
        }
        catch(e)
        {
            console.log("Axios error")
        }

    }

    return(
        <div>
            <form ref={formRef} onSubmit={handleSubmit} method="POST">
                <h1>Создать чат</h1>
                <div className="flex flex-col">
                    <input type="text" name="title" placeholder="название"/>
                    <div>
                        <AddUser/>
                        <button type="submit">Create</button>
                    </div>
                </div>
            </form>
        </div>
    )
}