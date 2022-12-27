import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChatArea from "./ChatArea";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MicIcon from "@mui/icons-material/Mic";

const ChatViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70vw;
  height: 100vh;
`;

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #1f2c33;
`;

const User = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 5px;
  justify-content: space-around;
`;

const UserIcon = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 90px;
  cursor: pointer;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  line-height: 1.2em;
`;

const Name = styled.div`
  font-size: 16px;
  color: #fcfcfc;
  font-weight: 700;
`;

const LastSeen = styled.div`
  color: #d8d8d8;
  font-size: 12px;
`;

const NavActions = styled.div`
  display: flex;
  flex-direction: row;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: #1f2c33;
  padding: 10px;
`;
const InputContainer = styled.div`
  background-color: #2a3942;
  padding: 10px;
  border-radius: 10px;
`;

const Input = styled.input`
  width: 800px;
  background: transparent;
  border: none;
  color: #fcfcfc;
  font-size: 15px;
  &:focus {
    outline: none;
  }
`;

function ChatView({ name, activity,url }) {
  return (
    <ChatViewWrapper>
      <Nav>
        <User>
          <UserIcon
            src={url}
            alt="user"
          />
          <InfoWrapper>
            <Name>{name ?? "John Doe"}</Name>
            <LastSeen>Last seen {activity ?? "today"}</LastSeen>
          </InfoWrapper>
        </User>
        <NavActions>
          <SearchIcon
            sx={{ color: "#adbac1", cursor: "pointer", marginRight: 5 }}
          />
          <MoreVertIcon sx={{ color: "#adbac1", cursor: "pointer" }} />
        </NavActions>
      </Nav>
      <ChatArea />
      <InputWrapper>
        <InsertEmoticonIcon sx={{ color: "#8696a0", cursor: "pointer" }} />
        <AttachFileIcon
          sx={{
            color: "#8696a0",
            cursor: "pointer",
            transform: "rotate(60deg)",
          }}
        />
        <InputContainer>
          <Input placeholder=" Type a message " />
        </InputContainer>
        <MicIcon sx={{ color: "#8696a0", cursor: "pointer" }} />
      </InputWrapper>
    </ChatViewWrapper>
  );
}

export default ChatView;
