import "./ChatList.css";

const chats = [
    {
        name: "Chat1",
        id: "chat1"
    },
    {
        name: "Chat2",
        id: "chat2"
    },
    {
        name: "Chat3",
        id: "chat3"
    },
]
function Nav () {
    <nav>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </nav>
}
export const ChatList = () => {
    <div className="chat-List">
        {chats.map((chat) => (
            <div key={chat.id}>{chat.name}</div>
        ))}
    </div>
}

