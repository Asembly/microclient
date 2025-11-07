'use client'

import { useStore } from "@/utils/store"

export default function SelectUser(props: {user: User})
{
    const {selectedUser, setSelectedUser, fetchChatsByUserId, chats} = useStore()

    const handler = async() => {
        setSelectedUser(props.user)
        await fetchChatsByUserId(props.user.id) 
    }

    return(
        <div>
            <input checked={selectedUser === props.user} type="radio" className="cursor-pointer" onChange={handler}/>
        </div>
    ) 
}