import React, { useEffect, useLayoutEffect, useState } from "react";
import { ChatState } from "../context/chatContext";
import SideDrawer from "../components/SideDrawer";
import { Box } from "@chakra-ui/react";
import MyChats from "../components/MyChats";
import Chatbox from "../components/Chatbox";
import { Flex, Spacer } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Chat = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();
  const navigate = useNavigate();

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box
        display="flex"
        justifyContent="space-between"
        w="100%"
        h="91.5vh"
        p="10px"
      >
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};

export default Chat;
