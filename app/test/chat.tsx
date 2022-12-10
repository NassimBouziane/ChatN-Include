import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import InputEmoji from "react-input-emoji";
import { RiSendPlaneLine } from "react-icons/ri";
import { AiOutlinePaperClip, AiOutlineGif } from "react-icons/ai";
import Gif from '../../components/gif'
import Image from "next/image";
import message from "../../components/message";

function Chat({ socket, username, room }) {
  const [isShown, setIsShown] = useState(false);
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, []);
  const handleClick = event => {
    // 👇️ toggle shown state
    setIsShown(current => !current);
  };
 const setGifUrlToChat = url => {setCurrentMessage(url);}
  return (
    <div className="chat-window">
      <div className="chat-header">
        <p>GROUPE {room}</p>
      </div>
      <div className="chat-body">
        <ScrollToBottom className="message-container">
          {messageList.map((messageContent) => {
            return (
              <div
                className="message"
                id={username === messageContent.author ? "you" : "other"}>
                <div>
                  <div className="message-content">
                    {messageContent.message.startsWith('https://media') && <Image src={messageContent.message} width={200} height={200} alt="un gif a été envoyer par //METTRE TITTLE DU GIF ICI"/> || <p>{messageContent.message}</p> }        
                    
                  </div>
                  <div className="message-meta">
                    <p id="time">{messageContent.time}</p>
                    <p id="author">{messageContent.author}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </ScrollToBottom>
      </div>
      {isShown && (
        <div>
          <Gif sendToChat={(urlgif) => setGifUrlToChat(urlgif)} />
        </div>
      )}
      <div className="chat-footer">
        <InputEmoji
            className=""
            value={currentMessage}
            onChange={(currentMessage) => {
              setCurrentMessage(currentMessage);
            }}
            onKeyPress={(event) => {
              console.log(event.key)
              event.key === "Enter" && sendMessage();
            }}
            cleanOnEnter
            onEnter={sendMessage}
            placeholder="Type a message"/>
            <AiOutlineGif size={'30px'} onClick={handleClick}/>
            <AiOutlinePaperClip size={'30px'}/>      
            <RiSendPlaneLine size={'30px'} onClick={sendMessage}/>
            
      </div>
    </div>
  );
}

export default Chat;