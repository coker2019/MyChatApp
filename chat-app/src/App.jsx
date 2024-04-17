import React from "react";
import MessageList from "./components/MessageList"; // Corrected import path
import SendMessageForm from "./components/SendMessageForm"; // Corrected import path
import NewRoomForm from "./components/NewRoomForm"; // Corrected import path
import RoomList from "./components/RoomList"; // Corrected import path
import './App.css';

const DUMMY_DATA = [
  {
    senderId: 'perbogen',
    text: 'how are u doing?'
  },
  {
    senderId: 'perbela',
    text: 'how are u eating?'
  }
];

function App() {
  return (
    <div className="app">
  
         <h1>Welcome to My Chat App</h1>
      <MessageList messages={DUMMY_DATA} />
      <SendMessageForm />
      <NewRoomForm />
      <RoomList />
    </div>
  );
}

export default App;
