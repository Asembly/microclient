import StompChat from "./components/features/chat-client";
import Chat from "./components/widgets/chat";
import ChatForm from "./components/widgets/chat-form";

export default function Home() {
  return (
    <div> 
      <StompChat/>
      <div className="flex">
        <Chat/>
        <ChatForm/>
      </div>
    </div>
  );
}
