'use client'
import { getUsersByChatId } from "@/utils/actions"
import { useEffect, useState } from "react";
import { useStore } from "@/utils/store";

export default function UsersList()
{

    const [users, setUsers] = useState<User[]>([])
    const { selectedChatId } = useStore();


    useEffect(() => {
        getUsersByChatId(selectedChatId).then(setUsers)
        console.log(selectedChatId + "SElected chat")
    }, [selectedChatId]) 

    return(
        <div>
            {
                users.map((item) => (
                    <div key={item.id} className="flex gap-5">
                        <div className="flex gap-5">
                            <div>
                                {item.username}
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
