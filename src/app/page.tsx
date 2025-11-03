import LogoutBtn from "@/components/features/auth/logout-btn";
import Chat from "@/components/shared/chat";
import ChatAddUser from "@/components/widgets/chat/add-user-form";
import ChatForm from "@/components/widgets/chat/chat-form";
import StompChat from "@/utils/chat";

export default function Home() {
  return (
    <div> 
      <StompChat/>
      <div className="flex">
        <Chat/>
        <ChatForm/>
        <LogoutBtn/>
        <ChatAddUser/>
      </div>
    </div>
  );
}
