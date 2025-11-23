import React from 'react';

interface HeaderProps {
  onReset: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onReset }) => {
  return (
    <header className="border-b border-gray-200 mb-6 pb-2 flex items-baseline gap-4">
      <h1 className="text-2xl font-bold">
        <button onClick={onReset} className="hover:text-delicious-meta transition-colors">
          <span className="text-black">link</span>
          <span className="text-delicious-meta">.</span>
          <span className="text-blue-600">pile</span>
        </button>
      </h1>
      <nav className="text-sm space-x-4 text-black">
        <button onClick={onReset} className="hover:underline font-bold">popular</button>
        <span className="text-gray-300">|</span>
        <a href="#" className="hover:underline">recent</a>
        <span className="text-gray-300">|</span>
        <a href="#" className="hover:underline">tags</a>
        <span className="text-gray-300">|</span>
        <a href="#" className="hover:underline">about</a>
      </nav>
      <div className="ml-auto text-xs text-gray-400">
        logged in as <span className="font-bold text-black">user</span>
      </div>
    </header>
  );
};
