'use server'
import { revalidateTag } from "next/cache";
import { serverInstance } from "./config"


const access_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJOaWtpc3QiLCJpc3MiOiJhdXRoMCIsImlhdCI6MTc2MjA4OTUwMywiZXhwIjoxNzYyMDkzMTAzfQ.IQYTmzJas66c4PCEqdREW-Wqpl1nyaTmfUAk7c3PZ1Y"

export async function getUsers()
{
    // const access_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJBc2VtYmx5IiwiaXNzIjoiYXV0aDAiLCJpYXQiOjE3NjE4Mjk4NDYsImV4cCI6MTc2MTgzMzQ0Nn0.kS3HNQroAAsE9XEikGi_FjhILfE8b21ip4mq6K4M06Y"
    const users: User[] = await serverInstance.get(`/users`,
        {
            headers: {
                'Authorization': 'Bearer ' + access_token
            },
        }
    )
    .then(res => res.data)
    .catch(error => error)

    console.log("Get Users: " + users)

    return users
}

export async function getMessagesByChatId(chat_id: string)
{
    // const access_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJBc2VtYmx5IiwiaXNzIjoiYXV0aDAiLCJpYXQiOjE3NjE4Mjk4NDYsImV4cCI6MTc2MTgzMzQ0Nn0.kS3HNQroAAsE9XEikGi_FjhILfE8b21ip4mq6K4M06Y"
    console.log("Chat Id" + chat_id)
    const messages: Message[] = await serverInstance.get(`/messages/chat/${chat_id}`,
        {
            headers: {
                'Authorization': 'Bearer ' + access_token
            },
        }
    )
    .then(res => res.data)
    .catch(error => error)

    console.log("TEST " + messages)

    return messages
}

export async function getChatsByUserId(user_id: string)
{
    // const access_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJBc2VtYmx5IiwiaXNzIjoiYXV0aDAiLCJpYXQiOjE3NjE4Mjk4NDYsImV4cCI6MTc2MTgzMzQ0Nn0.kS3HNQroAAsE9XEikGi_FjhILfE8b21ip4mq6K4M06Y"
    console.log("Chat user_id" + user_id)
    const chats: Chat[] = await serverInstance.get(`/chats/user/${user_id}`,
        {
            headers: {
                'Authorization': 'Bearer ' + access_token
            },
        }
    )
    .then(res => res.data)
    .catch(error => error)

    console.log("HELLOOjoo " + chats)

    if(chats.length == null)
        return []

    return chats
}

export async function deleteMessage(msg_id: string)
{
    await serverInstance.delete(`/messages/${msg_id}`,
        {
            headers: {
                'Authorization': 'Bearer ' + access_token
            },
        }
    )
    .catch(error => error)
}

export async function createChat(prevState: Chat, formData: FormData)
{
//    const session: { user?: { id: string }; accessToken?: string } | null = await auth()  
//    const accessToken = session?.accessToken

    const usersIdRaw = formData.get("users_id")?.toString() || "[]";

    const usersIdArray = JSON.parse(usersIdRaw);

    const data = {
    title: formData.get("title"), 
    users_id: usersIdArray  
    };

    console.log("Added users: ", usersIdArray);
    console.log("data: ", JSON.stringify(data));

    const response: Chat = await serverInstance.post(`/chats`, data,
        {
            headers: {
                'Authorization': "Bearer " + access_token,
            }
        }
    )
    .then(res => res.data)
    .catch(error => error)

    revalidateTag('/', 'max')

    return response
}