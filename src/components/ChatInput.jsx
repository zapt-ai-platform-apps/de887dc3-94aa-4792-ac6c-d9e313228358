import React from 'react';

export default function ChatInput({ input, setInput, handleSendMessage, handleKeyPress, loading }) {
  return (
    <div className="p-4 border-t border-gray-300">
      <textarea
        className="w-full box-border p-2 border rounded resize-none"
        rows="2"
        placeholder="Type your message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
        disabled={loading}
      />
      <button
        className="mt-2 cursor-pointer px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        onClick={handleSendMessage}
        disabled={loading}
      >
        {loading ? "Sending..." : "Send"}
      </button>
    </div>
  );
}