import SendButton from "@/components/features/message/send-message";
import ChatsList from "@/components/widgets/chat/chats-list";
import MessagesList from "@/components/widgets/message/messages-list";
import UsersList from "@/components/widgets/user/users-list";

export default function Chat()
{
    return(
        <div className="flex flex-col gap-5">
            {/* <UsersList/> */}
            <ChatsList/>
            <MessagesList/>
            <SendButton/>
        </div>
    )
}