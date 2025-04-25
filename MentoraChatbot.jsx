import React, { useState } from 'react'

const MentoraChatbot = () => {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');

  const handleSend = async () => {
    const res = await fetch('https://mentora-backend.onrender.com/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ grade: 0, subject: 'General', question })
    });
    const data = await res.json();
    setResponse(data.answer || 'Hmm, I’m not sure how to answer that yet.');
  };

  return (
    <div>
      <h1>Mentora AI Tutor</h1>
      <textarea value={question} onChange={e => setQuestion(e.target.value)} placeholder="Ask me anything..." rows={4} cols={50} />
      <br />
      <button onClick={handleSend}>Ask</button>
      <p>{response}</p>
    </div>
  );
};

export default MentoraChatbot;