'use client'
import { createChat } from "@/utils/actions"
import React, { useActionState, useRef, useState } from "react"
import { useCreateChatStore } from "@/utils/store"
import UserSelectMenu from "../../features/user/select-menu"
import { useSession } from "next-auth/react"

export default function ChatForm()
{
    const {addedUsers, clearAddedUsers} = useCreateChatStore()
    const { data: session, status } = useSession();
    const formRef = useRef<HTMLFormElement>(null)

    const handleSubmit = async(e: React.FormEvent) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget as HTMLFormElement);
          
        formData.append("users_id", JSON.stringify([...addedUsers, session?.user.id]))

        clearAddedUsers()
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
                        <UserSelectMenu/>
                        <button type="submit">Create</button>
                    </div>
                    <div>
                        {
                            addedUsers.map((item,i) => (
                                <div key={i}>
                                    {item}
                                </div>
                            )
                            )
                        }
                    </div>
                </div>
            </form>
        </div>
    )
}