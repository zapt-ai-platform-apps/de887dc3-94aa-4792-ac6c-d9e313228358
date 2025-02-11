import React from 'react';
import Chat from './Chat';

export default function App() {
  console.log("App is rendering - Struggling to Become a Doctor");
  return (
    <div className="min-h-screen flex flex-col text-gray-900">
      <header className="p-4 bg-blue-600 text-white">
        <h1 className="text-3xl font-bold">Struggling to Become a Doctor</h1>
        <p className="mt-1 text-lg">Empowering your journey towards a medical career.</p>
      </header>
      <main className="h-full flex-grow p-4">
        <Chat />
      </main>
      <footer className="p-4 bg-gray-200 text-center">
        <a
          href="https://www.zapt.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer underline"
        >
          Made on ZAPT
        </a>
      </footer>
    </div>
  );
}