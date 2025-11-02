import SendButton from "../features/send-message";
import ChatsList from "./chats-list";
import MessagesList from "./messages-list";
import UsersList from "./users-list";

export default function Chat()
{
    return(
        <div className="flex flex-col gap-5">
            <UsersList/>
            <ChatsList/>
            <MessagesList/>
            <SendButton/>
        </div>
    )
}