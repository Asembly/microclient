import NextAuth from "next-auth";
import { authConfig } from "./config";
import Credentials from "next-auth/providers/credentials";
import { login, refresh } from "./actions";
import { schemeLogin } from "./schemes";
import { JWT } from "next-auth/jwt";

export const {auth, signIn, signOut, handlers} = NextAuth({
    ...authConfig,
    pages: {
        signIn: "/sign-in"
    },
    callbacks: {
        session: async({session, token}) => {

            if(!token)
                console.log("Проблема с сессией, токен unknown.")    

            session.user.id = token.uid
            session.user.name = token.name
            session.access = token.access
            session.refresh = token.refresh

            return session
        },
        jwt: async({user, token}) => {

            if(user)
            {
                token.name = user.name
                token.access = user.access
                token.refresh = user.refresh
                token.uid = user.id
            }

            // console.log(token)

            if(token.access?.expires_at && Date.now() > token.access?.expires_at && token.refreshToken)
            {
                const refreshed = await refresh(token.refresh?.token || "")

                if(!refreshed)
                {
                    console.log("Ошибка, токен не обновился.")
                    return null
                }

                token.access.token = refreshed?.token
                token.access.expires_at = refreshed?.expires_at; 

                if(token.accessToken && token.expires_at)
                {
                    console.log("Токен обновился в сессии: " + token.accessToken)
                    console.log("Новое истечение времени: " + token.expires_at)
                }
            }

           return token 
        },
    },
    session: {
        strategy: 'jwt'
    },
    providers: [Credentials({
        credentials: {
            username:{
                label: 'username',
                placeholder: 'username'
            },
            password:{
                type: 'password',
                label: 'password',
                placeholder: 'password'
            }
        },
        async authorize(credentials, request): Promise<any> {

            const data = schemeLogin.safeParse({
                username: credentials.username,
                password: credentials.password
            })

            if(!data.success)
            {
                console.log("Данные о пользователе не были введены верно.")
                return null 
            }

            let response: ResponseLogin | undefined = await login(data.data) 

            if(response == undefined || !response.id)
                return null

            console.log(response)

            return{
                id: response.id,
                name: response.username,
                access: {
                    token: response.access.token,
                    expires_at: response.access.expires_at
                },
                refresh: {
                    token: response.refresh.token,
                    expires_at: response.refresh.expires_at
                }
            }
        },
    })]
})