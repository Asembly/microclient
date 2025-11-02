import { create } from "zustand";
import { getChatsByUserId, getMessagesByChatId, getUsers } from "./actions";

type Store = { 
    chats: Chat[],
    users: User[],
    messages: Message[],
    selectedUserId: string,
    selectedChatId: string,
    removeChat: (chat_id: string) => void,
    removeMessage: (msg_id: string) => void,
    setSelectedUserId: (user_id: string) => void,
    setSelectedChatId: (chat_id: string) => void,
    fetchChatsByUserId: (user_id: string) => Promise<void>,
    fetchMessagesByUserId: (chat_id: string) => Promise<void>,
    fetchUsers: () => Promise<void>,
    addMessage: (msg: Message) => void,
    rmMessage: (msg: Message) => void,
}

export const useStore = create<Store>((set) => ({
    users: [],
    chats: [],
    messages: [],
    selectedUserId: "",
    selectedChatId: "",
    removeMessage: (msg_id: string) => {
        set((state) => ({messages: [...state.messages.filter(item => item.id !== msg_id)]}))  
    },
    removeChat: (chat_id: string) => {
        set((state) => ({chats: [...state.chats.filter(item => item.id !== chat_id)]}))  
    },
    setSelectedUserId: (user_id: string) => {
        console.log("Selected user ID: ", user_id) 
        set({selectedUserId: user_id})
    },
    setSelectedChatId: (chat_id: string) => {
        console.log("Selected chat ID: ", chat_id) 
        set({selectedChatId: chat_id})
    },
    fetchUsers: async() => {
        try{
            console.log("Fetching users")
            const response = await getUsers()
            set(({users: response}))
        }
        catch(e) 
        {
            console.error("Error fetching chats: ", e)
            set({users: []})
        }
    },
    fetchChatsByUserId: async(user_id: string) => {
        try{
            console.log("Fetching chats for user: ", user_id)
            const response = await getChatsByUserId(user_id)
            set(({chats: response}))
        }
        catch(e) 
        {
            console.error("Error fetching chats: ", e)
            set({chats: []})
        }
    },
    fetchMessagesByUserId: async(chat_id: string) => {
        try{
            console.log("Fetching message for chat: ", chat_id)
            const response = await getMessagesByChatId(chat_id) 
            set({messages: response})
        }
        catch(e) 
        {
            console.error("Error fetching chats: ", e)
            set({messages: []})
        }
    },
    addMessage: (msg: Message) => {
        set((state) => ({messages: [...state.messages, msg]}))
    },
    rmMessage: (msg: Message) => {
        set((state) => ({messages: [...state.messages.filter(item => item !== msg)]}))  
    }
}));

type CreateChatStore = {
    addedUsers: Array<string>,
    setAddedUsers: (user_id: string) => void,
    clearAddedUsers: () => void
}

export const useCreateChatStore = create<CreateChatStore>((set) => ({
    addedUsers: [],
    setAddedUsers: (user_id: string) => {
        set((state) => ({addedUsers: [...new Set([...state.addedUsers, user_id])]}))        
    },
    clearAddedUsers: () => {
        set({addedUsers: []})
    }
}))