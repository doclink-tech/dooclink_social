"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { BottomNavLinks } from "@/constants";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import PagesYouLike from "./PageYouLike";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col w-[20rem]  bg-white h-screen sticky top-0 shadow-lg border-r border-gray-200 left-0">
      <div className="p-4 flex items-center space-x-2">
        <Image src="/logo.svg" alt="App Logo" width={32} height={32} />
        <span className="text-xl font-semibold text-gray-600">Square</span>
      </div>
      <div className="flex flex-row items-center m-4 p-2 rounded-lg bg-gray-50 gap-x-4 border">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
            <h1 className="text-sm font-semibold">Darshit Rajvansh</h1>
            <p className="text-muted-foreground text-xs">@Flame</p>
        </div>
      </div>
      <div className="flex flex-col w-full px-4 py-2">
        <div className="space-y-1">
          {BottomNavLinks.map((link) => (
            <Link
              key={link.name}
              href={link.url}
              className={`flex items-center space-x-3 p-2 rounded-md transition-colors ${
                pathname === link.url
                  ? "bg-blue-100 text-primary"
                  : "text-muted-foreground hover:bg-blue-100 hover:text-primary"
              }`}
            >
              {link.Icon}
              <span
                className={`font-medium text-sm ${
                  pathname === link.url ? "font-semibold" : ""
                }`}
              >
                {link.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex-1 px-2 py-10">
        <div className="space-y-4 px-4">
          <h4 className="text-muted-foreground">PAGE YOU LIKE</h4>
          <PagesYouLike />
        </div>
      </div>
    </nav>
  );
};

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  currentPath: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  label,
  href,
  currentPath,
}) => {
  const isActive = currentPath === href;
  return (
    <Link
      href={href}
      className={`flex items-center space-x-3 p-2 rounded-md transition-colors ${
        isActive
          ? "bg-blue-100 text-blue-600"
          : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
      }`}
    >
      {icon}
      <span
        className={`font-medium text-sm ${isActive ? "font-semibold" : ""}`}
      >
        {label}
      </span>
    </Link>
  );
};

export default Sidebar;
