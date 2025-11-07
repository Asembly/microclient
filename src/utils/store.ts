import { create } from "zustand";
import { getChatsByUserId, getMessagesByChatId, getUsers } from "./actions";

type Store = { 
    chats: Chat[],
    users: User[],
    messages: Message[],
    selectedUser: User, 
    selectedChat: Chat,
    removeChat: (chat_id: string) => void,
    removeMessage: (msg_id: string) => void,
    setSelectedUser: (user: User) => void,
    setSelectedChat: (chat: Chat) => void,
    fetchChatsByUserId: (user_id: string) => Promise<void>,
    fetchMessagesByChatId: (chat_id: string) => Promise<void>,
    fetchUsers: () => Promise<void>,
    addMessage: (msg: Message) => void,
    rmMessage: (msg: Message) => void,
}

export const useStore = create<Store>((set) => ({
    users: [],
    chats: [],
    messages: [],
    selectedUser: {} as User,
    selectedChat: {} as Chat,
    removeMessage: (msg_id: string) => {
        set((state) => ({messages: [...state.messages.filter(item => item.id !== msg_id)]}))  
    },
    removeChat: (chat_id: string) => {
        set((state) => ({chats: [...state.chats.filter(item => item.id !== chat_id)]}))  
    },
    setSelectedUser: (user: User) => {
        console.log("Selected user ID: ", user.id) 
        set({selectedUser: user})
    },
    setSelectedChat: (chat: Chat) => {
        console.log("Selected chat ID: ", chat.id) 
        set({selectedChat: chat})
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
    fetchMessagesByChatId: async(chat_id: string) => {
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

type AdaptiveDesignStore = {
    isMobile: boolean
    setIsMobile: (isMobile: boolean) => void 
}

export const useAdaptiveStore = create<AdaptiveDesignStore>((set) => ({
    isMobile: false,
    setIsMobile: (isMobile) => {
        set({isMobile: isMobile})
    },
}))