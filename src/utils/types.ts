type User = {
    id: string,
    username: string,
    chats_id: string[], 
    created_at: Date
}

type Chat = {
    id: string,
    title: string,
    users_id: string[],
    messages_id: string[],
    created_at: Date
}

type Message = {
    id: string,
    text: string,
    author_id: string,
    chat_id: string,
    created_at: Date
}

type MessageChatDTO = {
    text: string,
    author_id: string,
    chat_id: string
}

type ResponseLogin = {
    access_token: string,
    refresh_token: string,
    expires_at: number,
    user: User
}

type ResponseRefresh = {
    access_token: string
}

type Login = {
    username: string | unknown,
    password: string | unknown
}

type AccessToken = {
    access_token: string,
    expires_at: number,
}

type MessageError = {
    error: string
}