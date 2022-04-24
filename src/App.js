// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Message } from "./components/Message/Message";
import { Counter } from "./components/Example/Example";
import { Form } from "./Form/Form";
import { useState, useEffect, useRef } from "react";
import { AUTHORS } from "./utils/constants";
import { MessageList } from "./components/MessageList/MessageList";
import { ChatList } from "./components/ChatList/ChatList";
// import { MyButton } from "./components/Example/Example";
import { ExampleForm } from "./components/Example/Example";
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
      // text: text
      text,
      id: `msg-${Date.now()}`,
    });
  };

  useEffect(() => {
    if (messages[messages.length - 1]?.author === AUTHORS.human) {
      timeout.current = setTimeout(() => {
        addMessage({
          author: AUTHORS.robot,
          text: "Hello",
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
        <MessageList messages={messages} cd />
        <Form onSubmit={sendMessage} />
      </div>
      {/*<MyButton text="ExampleButton" onClick={() => {}}/>*/}
      <ExampleForm
        onSubmit={() => {}}
        render={({ value, handleChange }) => (
          <TextField
            value={value}
            onChange={handleChange}
            // inputRef={inputRef}
          />
        )}
      ></ExampleForm>
      <ExampleForm
        onSubmit={() => {}}
        render={({ value, handleChange }) => (
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

// export class AppClass extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }
// export default AppClass;

// optional chaining

export default App;
