"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { BottomNavLinks } from "@/constants";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import PagesYouLike from "./PageYouLike";
import { ChevronDown, ChevronUp, ImageIcon, VideoIcon } from "lucide-react";

const Sidebar = () => {
  const pathname = usePathname();
  const [isMediaDropdownOpen, setIsMediaDropdownOpen] = useState(false);

  return (
    <nav className="flex flex-col w-[20rem] bg-white h-screen sticky top-0 shadow-lg border-r border-gray-200 left-0">
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
          {BottomNavLinks.map((link) => {
            if (link.name === "Media Files") {
              return (
                <div key={link.name}>
                  <button
                    onClick={() => setIsMediaDropdownOpen(!isMediaDropdownOpen)}
                    className={`flex items-center justify-between w-full space-x-3 p-2 rounded-md transition-colors ${
                      pathname.startsWith(link.url)
                        ? "bg-blue-100 text-primary"
                        : "text-muted-foreground hover:bg-blue-100 hover:text-primary"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      {link.Icon}
                      <span className="font-medium text-sm">{link.name}</span>
                    </div>
                    {isMediaDropdownOpen ? (
                      <ChevronUp size={16} />
                    ) : (
                      <ChevronDown size={16} />
                    )}
                  </button>
                  {isMediaDropdownOpen && (
                    <div className="ml-8 mt-2 space-y-2">
                      <Link
                        href={`${link.url}/images`}
                        className={`block text-sm text-muted-foreground hover:text-primary`}
                      >
                        <div className="flex items-center space-x-3">
                          <ImageIcon />
                          <span className="font-medium text-sm">Images</span>
                        </div>
                      </Link>
                      <Link
                        href={`${link.url}/videos`}
                        className="block text-sm text-muted-foreground hover:text-primary ${}"
                      >
                        <div className="flex items-center space-x-3">
                          <VideoIcon />
                          <span className="font-medium text-sm">Videos</span>
                        </div>
                      </Link>
                    </div>
                  )}
                </div>
              );
            }
            return (
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
            );
          })}
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

export default Sidebar;
