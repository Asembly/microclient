'use client'
import { useCreateChatStore, useStore } from "@/utils/store";
import { useActionState, useRef } from "react";
import UserSelectMenu from "../../features/user/select-menu";
import { addUserToChat } from "@/utils/actions";

export default function UserForm()
{

    const [_, formAction] = useActionState(addUserToChat, {} as any)
    const {addedUsers, clearAddedUsers} = useCreateChatStore()
    const {selectedChatId} = useStore()
    const formRef = useRef<HTMLFormElement>(null)

    const handleSubmit = async(e: React.FormEvent) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget as HTMLFormElement);
          
        formData.append("users_id", JSON.stringify(addedUsers))
        formData.append("chat_id", selectedChatId) 

        clearAddedUsers()
        try
        {
            await addUserToChat({} as any, formData)
            console.log("Chat is created!")
        }
        catch(e)
        {
            console.log("Axios error")
        }

    }

    return (
        <div>
            <form ref={formRef} onSubmit={handleSubmit} method="POST">
                <h1>Добавить пользователей в чат</h1>
                <div className="flex flex-col">
                    <div>
                        <UserSelectMenu/>
                        <button type="submit">Добавить</button>
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