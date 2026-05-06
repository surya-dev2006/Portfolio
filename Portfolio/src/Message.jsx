import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Message = () => {
  const [messages, setMessages] = useState([]); // clearer name
  const [loading, setLoading] = useState(true); // optional loading state

  useEffect(() => {
    axios.get("http://localhost:5000/api/rec")
      .then(res => setMessages(res.data))
      .catch(err => console.error("Error fetching data:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div>Loading messages...</div>;
  }

  if (messages.length === 0) {
    return <div>No messages found.</div>;
  }
function handleDelete(id){
  axios.delete(`http://192.168.174.176:5173/${id}`)
  setMessages(messages.filter(user => user.id !== id))
}
  return (
    <div className='hell-d min-vh-100'>
      {messages.map((message) => (
        <div className='hell' key={message.id}>
          <p>{message.name}</p>
        <p>{message.mail}</p>
          <p>{message.number}</p>

          <button onClick={()=>handleDelete(message.id)}>delete</button>
        </div>  
      ))}
    </div>
  )
}

export default Message;
