import "./App.css";
import React, { useEffect, useRef, useState } from "react";
import { Message } from "./components/Message/Message";
import { Form } from "./components/Form/Form";
import { AUTHORS } from "./utils/constants";
import { MessageList } from "./components/MessageList/MessageList";
import { ChatList } from "./components/ChatList/ChatList";
import { ExampleForm } from "./components/Example/Example";
import { MyButton } from "./components/Example/Example";
import { TextField } from "@mui/material";

function App() {
  const [messages, setMessages] = useState([]);

  const timeout = useRef();
  const wrapperRef = useRef();

  const addMessage = (newMsg) => {
    setMessages([...messages, newMsg]);
  };

  const sendMessage = (text) => {
    addMessage({
      author: AUTHORS.human,
      text,
      id: `msg-${Date.now()}`,
    });
  };

  useEffect(() => {
    if (messages[messages.length - 1]?.author === AUTHORS.human) {
      timeout.current = setTimeout(() => {
        addMessage({
          author: AUTHORS.robot,
          text: "hello friend",
          id: `msg-${Date.now()}`,
        });
      }, 1000);
    }

    return () => {
      clearTimeout(timeout.current);
    };
  }, [messages]);

  return (
    <div className="App" ref={wrapperRef}>
      <ChatList />
      <div>
        <MessageList messages={messages} />
        <Form onSubmit={sendMessage} />
      </div>
     {/* <MyButton text="ExampleButton" onClick={() => {}}/>*/}
     <ExampleForm 
     onSubmit={() => {}}
      render= {({value, handleChange}) => (
       <TextField 
       value={value} 
       onChange={handleChange} 
       // inputRef={inputRef} 
       />
       )}
       ></ExampleForm> 
       <ExampleForm 
       onSubmit={() => {}}
       render={({value, handleChange}) => (
       <input 
       value={value} 
       onChange={handleChange} 
       // inputRef={inputRef} 
       />
       )}
       ></ExampleForm>
    </div>
  );
}

export default App;
