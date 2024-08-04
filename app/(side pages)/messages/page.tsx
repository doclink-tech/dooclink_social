import React from 'react';
import { IoChevronBackOutline, IoSettingsOutline } from 'react-icons/io5';

interface Message {
  id: string;
  color: string;
  initial: string;
  preview: string;
  lastMessage: string;
  time: string;
}

const MessageItem: React.FC<Message> = ({ color, initial, preview, lastMessage, time }) => (
  <div className="flex items-center py-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition duration-150 ease-in-out cursor-pointer">
    <div className={`w-12 h-12 rounded-full ${color} flex items-center justify-center mr-4 flex-shrink-0`}>
      <span className="text-white font-bold text-lg">{initial}</span>
    </div>
    <div className="flex-grow min-w-0">
      <p className="text-sm font-semibold text-gray-800 truncate mb-1">
        {preview}
      </p>
      <p className="text-xs text-gray-500 truncate">
        {lastMessage}
      </p>
    </div>
    <div className="text-xs text-gray-400 ml-4 flex-shrink-0">{time}</div>
  </div>
);

const MessagesView: React.FC = () => {
  const messages: Message[] = [
    { id: '1', color: 'bg-blue-500', initial: 'T', preview: 'Have a great day with my amazing...', lastMessage: 'Hi there!', time: '9:56 AM' },
    { id: '2', color: 'bg-pink-500', initial: 'A', preview: 'Have a great day with my amazing...', lastMessage: 'Hi there!', time: '9:56 AM' },
    { id: '3', color: 'bg-green-500', initial: 'J', preview: 'Have a great day with my amazing...', lastMessage: 'Hi there!', time: '9:56 AM' },
    { id: '4', color: 'bg-purple-500', initial: 'M', preview: 'Have a great day with my amazing...', lastMessage: 'Hi there!', time: '9:56 AM' },
    { id: '5', color: 'bg-blue-400', initial: 'R', preview: 'Have a great day with my amazing...', lastMessage: 'Hi there!', time: '9:56 AM' },
    { id: '6', color: 'bg-orange-400', initial: 'S', preview: 'Have a great day with my amazing...', lastMessage: 'Hi there!', time: '9:56 AM' },
    { id: '7', color: 'bg-teal-500', initial: 'D', preview: 'Have a great day with my amazing...', lastMessage: 'Hi there!', time: '9:56 AM' },
    { id: '8', color: 'bg-yellow-500', initial: 'L', preview: 'Have a great day with my amazing...', lastMessage: 'Hi there!', time: '9:56 AM' },
  ];

  return (
    <div className="bg-white min-h-screen flex flex-col md:flex-row">
      {/* Sidebar (visible on desktop) */}
      <aside className="hidden md:block w-1/4 border-r border-gray-200 overflow-y-auto px-5">
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Messages</h2>
          <input
            type="text"
            placeholder="Search messages..."
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <nav>
          {messages.map((msg) => (
            <MessageItem key={msg.id} {...msg} />
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-grow flex flex-col md:w-3/4">
        {/* Header */}
        <header className="bg-gray-50 flex items-center justify-between px-4 py-3 border-b border-gray-200">
          <div className="flex items-center">
            <button className="p-2 -ml-2 md:hidden" aria-label="Go back">
              <IoChevronBackOutline className="text-blue-500 text-xl" />
            </button>
            <h1 className="text-xl font-semibold text-gray-800 ml-2">Messages</h1>
          </div>
          <button className="p-2 -mr-2" aria-label="Settings">
            <IoSettingsOutline className="text-blue-500 text-xl" />
          </button>
        </header>

        {/* Message List (visible on mobile) */}
        <div className="flex-grow overflow-y-auto md:hidden">
          <div className="px-4">
            {messages.map((msg) => (
              <MessageItem key={msg.id} {...msg} />
            ))}
          </div>
        </div>

        {/* Conversation Area (visible on desktop) */}
        <div className="hidden md:flex flex-col flex-grow">
          <div className="flex-grow flex items-center justify-center text-gray-500">
            Select a conversation to start messaging
          </div>
          <div className="p-4 border-t border-gray-200">
            <input
              type="text"
              placeholder="Type a message..."
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Bottom Spacer (for iOS-style bottom bar on mobile) */}
        <div className="h-16 bg-gray-50 border-t border-gray-200 md:hidden"></div>
      </main>
    </div>
  );
};

export default MessagesView;