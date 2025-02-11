import React, { useState, useRef, useEffect } from 'react';
import * as Sentry from '@sentry/browser';
import { simulateResponse } from './api/chatAPI';
import ChatInput from './components/ChatInput';

export default function Chat() {
  const [messages, setMessages] = useState([
    {
      id: Date.now(),
      role: 'bot',
      text: 'Hello! I am here to guide you on your journey. How can I help you today?'
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim() || loading) return;
    console.log("Sending message:", input);
    setLoading(true);
    const userMessage = { id: Date.now(), role: 'user', text: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    try {
      const responseText = await simulateResponse(userMessage.text);
      console.log("Received response:", responseText);
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, role: 'bot', text: responseText }
      ]);
    } catch (error) {
      console.error("Chat response error:", error);
      Sentry.captureException(error);
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, role: 'bot', text: "Sorry, something went wrong." }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`max-w-xs p-3 rounded-lg ${
              msg.role === 'user'
                ? 'bg-blue-500 text-white self-end'
                : 'bg-gray-200 text-gray-900 self-start'
            }`}
          >
            <p>{msg.text}</p>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <ChatInput 
        input={input} 
        setInput={setInput} 
        handleSendMessage={handleSendMessage} 
        handleKeyPress={handleKeyPress} 
        loading={loading} 
      />
    </div>
  );
}