'use client'
import Image from 'next/image'
import React, { useState } from 'react'

interface Notification {
    id: string;
    user: {
      name: string;
      avatar: string;
    };
    action: string;
    target: string;
    time: string;
    type: 'post' | 'like' | 'comment';
  }
  
  const notifications: Notification[] = [
    {
      id: '1',
      user: { name: 'Janette Janet', avatar: 'https://github.com/shadcn.png' },
      action: 'posted in',
      target: 'UI/UX Community: "Mobile App UI Designer is required for Tech..."',
      time: '12 minutes ago',
      type: 'post'
    },
    {
      id: '2',
      user: { name: 'Mohammed Al El Neny', avatar: 'https://github.com/shadcn.png' },
      action: 'liked your article that you have post.',
      target: '',
      time: '13 minutes ago',
      type: 'like'
    },
    {
      id: '3',
      user: { name: 'Grigoriy Kozhukhov', avatar: 'https://github.com/shadcn.png' },
      action: 'commented your post:',
      target: '"That is really cool dude!"',
      time: '13 minutes ago',
      type: 'comment'
    },
    {
      id: '1',
      user: { name: 'Janette Janet', avatar: 'https://github.com/shadcn.png' },
      action: 'posted in',
      target: 'UI/UX Community: "Mobile App UI Designer is required for Tech..."',
      time: '12 minutes ago',
      type: 'post'
    },
    {
      id: '2',
      user: { name: 'Mohammed Al El Neny', avatar: 'https://github.com/shadcn.png' },
      action: 'liked your article that you have post.',
      target: '',
      time: '13 minutes ago',
      type: 'like'
    },
    {
      id: '3',
      user: { name: 'Grigoriy Kozhukhov', avatar: 'https://github.com/shadcn.png' },
      action: 'commented your post:',
      target: '"That is really cool dude!"',
      time: '13 minutes ago',
      type: 'comment'
    },
    // Add more notifications as needed
  ];

const NotificationCard = () => {
    const [activeTab, setActiveTab] = useState<'all' | 'unread'>('all');

  const getIconForType = (type: Notification['type']) => {
    switch (type) {
      case 'post':
        return '📝';
      case 'like':
        return '❤️';
      case 'comment':
        return '💬';
      default:
        return '🔔';
    }
  };
  return (
    <>
        <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Notifications</h2>
        <div className="flex space-x-2">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === 'all'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveTab('unread')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === 'unread'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Unread
          </button>
        </div>
      </div>
      <ul className="space-y-4 ">
        {notifications.map((notification) => (
          <li key={notification.id} className="flex items-center space-x-4 p-4 rounded-xl  transition-colors bg-white">
            <div className="relative">
              <Image
                src={notification.user.avatar}
                alt={notification.user.name}
                width={48}
                height={48}
                className="rounded-full"
              />
              <span className="absolute bottom-0 right-0 text-xl">{getIconForType(notification.type)}</span>
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-800 leading-relaxed">
                <span className="font-semibold">{notification.user.name}</span>{' '}
                {notification.action}{' '}
                <span className="font-medium text-blue-600">{notification.target}</span>
              </p>
              <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default NotificationCard