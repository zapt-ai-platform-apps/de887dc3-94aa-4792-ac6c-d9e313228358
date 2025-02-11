import React from 'react';

export default function App() {
  console.log("App is rendering - Struggling to Become a Doctor");
  return (
    <div className="min-h-screen flex flex-col text-gray-900">
      <header className="p-4 bg-blue-600 text-white">
        <h1 className="text-3xl font-bold">Struggling to Become a Doctor</h1>
        <p className="mt-1 text-lg">Empowering your journey towards a medical career.</p>
      </header>
      <main className="h-full flex-grow p-4">
        <p>
          Welcome to your doctor journey. Explore challenges, embrace resilience, and discover inspiration to pursue your dreams.
        </p>
        <button
          className="cursor-pointer px-4 py-2 bg-blue-500 text-white rounded mt-4"
          onClick={() => {
            console.log('Get Started button clicked');
          }}
        >
          Get Started
        </button>
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