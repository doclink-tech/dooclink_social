// components/PagesYouLike.tsx

import React from 'react';

interface Page {
  id: string;
  name: string;
  icon: string;
  color: string;
  notificationCount?: number;
}

const pages: Page[] = [
  { id: 'ff', name: 'Football FC', icon: 'FF', color: 'bg-green-500', notificationCount: 120 },
  { id: 'bc', name: 'Badminton Club', icon: 'BC', color: 'bg-purple-500' },
  { id: 'ui', name: 'UI/UX Community', icon: 'UI', color: 'bg-blue-500' },
  { id: 'wd', name: 'Web Designer', icon: 'WD', color: 'bg-pink-500' },
];

const PagesYouLike = () => {
  return (
      <ul className="gap-x-2 gap-y-3 flex flex-col">
        {pages.map((page) => (
          <li key={page.id} className="flex items-center hover:bg-gray-50  py-2 rounded-md">
            <div className={`w-8 h-8 ${page.color} rounded-md flex items-center justify-center text-white font-bold mr-3`}>
              {page.icon}
            </div>
            <span className="flex-grow font-semibold text-sm">{page.name}</span>
            {page.notificationCount && (
              <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                {page.notificationCount}
              </span>
            )}
          </li>
        ))}
      </ul>
  );
};

export default PagesYouLike;