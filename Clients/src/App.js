import "./normal.css";
import "./App.css";
import { useState } from "react";

function App() {

  const [input, setInput] = useState("");
  const [chatLog, setChatLog] = useState([]);

  function clearChat() {
    setChatLog([]);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    let ChatLogNew = [...chatLog, { user: "me", message: `${input}` }]
    setInput("");
    setChatLog(ChatLogNew);
    console.log(input);

    const response = await fetch("http://localhost:3080/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: ChatLogNew.map((message) => message.message).join()
      })
    });

    const data = await response.json();
    console.log(data);
    setChatLog([...ChatLogNew, {
      user: "gpt",
      message: `${data.message}`
    }])
  }

  return (
    <div className="App">
      <aside className="sidemenu">
        <div className="side-menu-button" onClick={() => clearChat()}>
          <i class="bi bi-plus"></i>New chat
        </div>
      </aside>

      <section className="chatbox">
        <div className="chat-log">
          {chatLog.map((message, index) => (
            console.log(message),
            <ChatMessage key={index} message={message} />
          ))}
        </div>
        <div className="chat-input-holder">
          <form onSubmit={handleSubmit}>
            <input className="chat-input-textarea" rows="1" value={input} onChange={(event) => setInput(event.target.value)}></input>
          </form>
        </div>
      </section>
    </div>
  );
}

const ChatMessage = ({ message }) => {
  return (
    <div className={`chat-message ${message.user === "gpt" && "chatgpt"}`}>
      <div className="chat-message-center">
        <div className={`avatar ${message.user === "gpt" && "chatgpt"}`}>

        </div>
        <div className="message">
          {message.message.split("\n").map((line) => {
            return (
              <div className="lines">{line}</div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App;
