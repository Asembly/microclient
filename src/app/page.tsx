import LogoutBtn from "@/components/features/auth/logout-btn";
import Chat from "@/components/widgets/chat/chat";
import ChatAddUser from "@/components/widgets/chat/add-user-form";
import ChatForm from "@/components/widgets/chat/chat-form";
import StompChat from "@/utils/chat";
import Body from "@/components/shared/body";
import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";
import { Box, Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <div> 
      <StompChat/>
      <div className="flex">
        <Flex direction="column" height="100vh" width="100vw">
          <Header/>
          <Body/>
          <Footer/>
        </Flex>
      </div>
    </div>
  );
}
