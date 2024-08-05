"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { BottomNavLinks } from "@/constants";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import PagesYouLike from "./PageYouLike";
import { MdOutlineGroupAdd } from "react-icons/md";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { BellIcon } from "lucide-react";

import { UserButton, useUser } from "@clerk/nextjs";

const RightSidebarLink = [
    {
        src: "/friend-request",
        icon: <MdOutlineGroupAdd  className="text-muted-foreground h-6 w-6" />
    },
    {
        src: "/friend-request",
        icon: <IoChatbubbleEllipsesOutline  className="text-muted-foreground h-6 w-6"/>
    },
    {
        src: "/notifications",
        icon: <BellIcon  className="text-muted-foreground h-6 w-6"/>
    },
]

interface UserItem {
  id: string;
  name: string;
  imageUrl: string;
  status?: 'online' | 'offline';
  lastSeen?: string;
}

interface GroupItem {
  id: string;
  name: string;
  icon: string;
  color: string;
  status?: 'online' | 'offline';
  lastSeen?: string;
}

const pages: UserItem[] = [
  { id: '1', name: 'Cynthia Cox', imageUrl: 'https://github.com/shadcn.png', lastSeen: '11 min' },
  { id: '2', name: 'Danny Quinn', imageUrl: 'https://github.com/shadcn.png', status: 'online' },
];

const friends: UserItem[] = [
  { id: '1', name: 'Morgan', imageUrl: 'https://github.com/shadcn.png', lastSeen: '11 min' },
  { id: '2', name: 'Stanley Burton', imageUrl: 'https://github.com/shadcn.png', status: 'online' },
  { id: '3', name: 'Allen Anderson', imageUrl: 'https://github.com/shadcn.png', status: 'online' },
  { id: '4', name: 'Lucas West', imageUrl: 'https://github.com/shadcn.png', lastSeen: '11 min' },
  { id: '5', name: 'Danny Moore', imageUrl: 'https://github.com/shadcn.png', lastSeen: '9 min' },
  { id: '6', name: 'Jason Gutierrez', imageUrl: 'https://github.com/shadcn.png', status: 'online' },
  { id: '7', name: 'Jesus Cooper', imageUrl: 'https://github.com/shadcn.png', status: 'online' },
  { id: '8', name: 'Joshua Hunt', imageUrl: 'https://github.com/shadcn.png', lastSeen: '11 min' },
  { id: '9', name: 'Jimmy Maxwell', imageUrl: 'https://github.com/shadcn.png', status: 'online' },
];

const groups: GroupItem[] = [
  { id: '1', name: 'Web Designer', icon: 'WD', color: 'bg-pink-500', lastSeen: '3hr' },
  { id: '2', name: 'Topcoder Indonesia', icon: 'TI', color: 'bg-purple-500', status: 'online' },
  { id: '3', name: 'Creativemarket YK', icon: 'C', color: 'bg-orange-500', status: 'online' },
];

const UserListItem: React.FC<{ item: UserItem }> = ({ item }) => (
  <li className="flex items-center justify-between py-2">
    <div className="flex items-center">
      <Image src={item.imageUrl} alt={item.name} width={32} height={32} className="rounded-full mr-2" />
      <span className="font-semibold text-sm">{item.name}</span>
    </div>
    {item.status === 'online' ? (
      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
    ) : (
      <span className="text-xs text-gray-500">{item.lastSeen}</span>
    )}
  </li>
);

const GroupListItem: React.FC<{ item: GroupItem }> = ({ item }) => (
  <li className="flex items-center justify-between py-2">
    <div className="flex items-center">
      <div className={`w-9 h-9 ${item.color} rounded-full flex items-center justify-center text-white font-bold mr-2`}>
        {item.icon}
      </div>
      <span className="font-semibold text-sm">{item.name}</span>
    </div>
    {item.status === 'online' ? (
      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
    ) : (
      <span className="text-xs text-gray-500">{item.lastSeen}</span>
    )}
  </li>
);

const RightSidebar = () => {
  const pathname = usePathname();
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return <p>Loading..</p>;
  }

  const avatarFallbackName = user 
    ? (user.firstName && user.firstName.length > 0 ? user.firstName[0] : "") 
    + (user.lastName && user.lastName.length > 0 ? user.lastName[0] : "") 
    : "DC";


  return (
    <nav className="flex flex-col w-[20rem] z-20 bg-white h-screen sticky top-0 shadow-lg border-r border-gray-200 right-0">
      <div className="p-4 flex flex-row justify-end items-center space-x-4">
        {RightSidebarLink.map((link,index) => (
            <Link href={link.src} key={index}>
                {link.icon}
            </Link>
        ))}
        <Avatar className="h-8 w-8">
          {/* <AvatarImage src={user.imageUrl} />
          <AvatarFallback>{avatarFallbackName}</AvatarFallback> */}
        <UserButton/>
        </Avatar>
      </div>
      <div className="p-4 overflow-y-auto">
      <section className="mb-6">
        <h2 className="text-sm font-semibold text-gray-500 mb-2">YOUR PAGES</h2>
        <ul>
          {pages.map(page => <UserListItem key={page.id} item={page} />)}
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-sm font-semibold text-gray-500 mb-2">FRIENDS</h2>
        <ul>
          {friends.map(friend => <UserListItem key={friend.id} item={friend} />)}
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-sm font-semibold text-gray-500 mb-2">GROUPS</h2>
        <ul>
          {groups.map(group => <GroupListItem key={group.id} item={group} />)}
        </ul>
      </section>

      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-8 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <svg
          className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
    </div>
    </nav>
  );
};

export default RightSidebar;
