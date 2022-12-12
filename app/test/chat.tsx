import React, { useEffect, useState } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import InputEmoji from 'react-input-emoji';
import { RiSendPlaneLine } from 'react-icons/ri';
import { AiOutlinePaperClip, AiOutlineGif } from 'react-icons/ai';
import Image from 'next/image';
import Gif from '../../components/gif';

function Chat({ socket, username, room }) {
  const [isShown, setIsShown] = useState(false);
  const [currentMessage, setCurrentMessage] = useState('');
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== '') {
      const messageData = {
        room,
        author: username,
        message: currentMessage,
        time: `${new Date(Date.now()).getHours()}:${new Date(
          Date.now(),
        ).getMinutes()}`,
      };

      await socket.emit('send_message', messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage('');
    }
  };

  useEffect(() => {
    socket.on('receive_message', (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, []);
  const handleClick = (event) => {
    // 👇️ toggle shown state
    setIsShown((current) => !current);
  };
  const setGifUrlToChat = (url) => {
    setCurrentMessage(url);
    setIsShown(false);
  };
  return (
    <div className="chat-window bg-white rounded-lg shadow-lg w-full  h-full">
      {/* <div className="chat-header">
        <p>GROUPE {room}</p>
      </div> */}
      <div className="chat-body rounded-lg">
        <ScrollToBottom className="message-container pt-4">
          {messageList.map((messageContent) => (
            <div
              className="message"
              id={username === messageContent.author ? 'you' : 'other'}
            >
              <div className="">
                <div className="flex">
                  <div className="message-content">
                    {(messageContent.message.startsWith('https://media') && (
                      <Image
                        src={messageContent.message}
                        width={200}
                        height={200}
                        alt="un gif a été envoyer par //METTRE TITTLE DU GIF ICI"
                      />
                    )) || <p>{messageContent.message}</p>}
                  </div>
                  <img
                    src="https://cdna.artstation.com/p/assets/images/images/044/872/734/large/rodion-vlasov-fin1-1.jpg?1641375316"
                    className="object-cover h-8 w-8 rounded-full"
                    alt=""
                  />
                </div>

                <div className="message-meta">
                  <p id="time">{messageContent.time}</p>
                  <p id="author">{messageContent.author}</p>
                </div>
              </div>
            </div>
          ))}
        </ScrollToBottom>
      </div>
      {isShown && (
        <div className='absolute bottom-[15%] right-[5%]'>
          <Gif sendToChat={(urlgif) => setGifUrlToChat(urlgif)}/>
        </div>
      )}

      <div className="flex border bg-[#f3f3f3] rounded-xl mx-4 break-all bottom-0">
        <InputEmoji
          className="w-3/4"
          value={currentMessage}
          onChange={(currentMessage) => {
            setCurrentMessage(currentMessage);
          }}
          cleanOnEnter
          onEnter={sendMessage}
          placeholder="Type a message"
        />
        <div className="flex w-fit justify-end my-4 gap-2 mx-2">
          <AiOutlineGif size={'30px'} onClick={handleClick} className="" />
          <AiOutlinePaperClip size={'30px'} />
          <RiSendPlaneLine size={'30px'} onClick={sendMessage} />
        </div>
      </div>
    </div>
  );
}

export default Chat;
