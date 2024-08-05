import NavBar from "@/components/layout/Navbar";
import Image from "next/image";
import React from "react";
import { FaFilter, FaSearch } from "react-icons/fa";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import DiscoverNav from "./_component/DiscoverNav";

interface Friend {
  name: string;
  username: string;
  bio: string;
  isFollowing: boolean;
  avatarUrl: string;
  backgroundUrl: string;
}

const friends: Friend[] = [
  {
    name: "Mayke Schuurs",
    username: "@maymayke",
    bio: "Not a Man but a Ghost 👻",
    isFollowing: true,
    avatarUrl: "https://github.com/shadcn.png",
    backgroundUrl:
      "https://images.unsplash.com/photo-1721616216040-88b305eea70d?q=80&w=2003&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Tiontay Carroll",
    username: "@tatay",
    bio: "Interaction Designer | Coffe Addict | Part time Traveller | Full time Mom of Baby and Bayi.",
    isFollowing: true,
    avatarUrl: "https://github.com/shadcn.png",
    backgroundUrl:
      "https://images.unsplash.com/photo-1721616216040-88b305eea70d?q=80&w=2003&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Ngô Hải Giang",
    username: "@ngohaigiang",
    bio: "Pushing pixels and experiences in digital products for onetwothree | Coffee(nosugar)",
    isFollowing: false,
    avatarUrl: "https://github.com/shadcn.png",
    backgroundUrl:
      "https://images.unsplash.com/photo-1721616216040-88b305eea70d?q=80&w=2003&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Chineze Uchechey",
    username: "@chinezeulala",
    bio: "Youtube Content Creator | Photography | Professional Videographer",
    isFollowing: true,
    avatarUrl: "https://github.com/shadcn.png",
    backgroundUrl:
      "https://images.unsplash.com/photo-1721616216040-88b305eea70d?q=80&w=2003&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Xian Zhou",
    username: "@xianzen",
    bio: "Life is a Choice baby :)",
    isFollowing: false,
    avatarUrl: "https://github.com/shadcn.png",
    backgroundUrl:
      "https://images.unsplash.com/photo-1721616216040-88b305eea70d?q=80&w=2003&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Anje Keizer",
    username: "@anjedrive",
    bio: "Not a Man but a Ghost 👻",
    isFollowing: false,
    avatarUrl: "https://github.com/shadcn.png",
    backgroundUrl:
      "https://images.unsplash.com/photo-1721616216040-88b305eea70d?q=80&w=2003&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const FriendsPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <NavBar />
      <div className="max-w-6xl mx-auto p-4 mt-16">
        <DiscoverNav />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {friends.map((friend) => (
            <div
              key={friend.username}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="h-32 relative ">
                <Image
                  src={friend.backgroundUrl}
                  alt="Background"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center -mt-12 mb-4 absolute glassmorphism p-2 rounded-lg gap-x-2">
                  <Image
                    src={friend.avatarUrl}
                    alt={friend.name}
                    width={50}
                    height={50}
                    className="rounded-full border-4 border-white"
                  />
                  <div className="ml-4 flex-grow">
                    <h2 className="text-lg font-semibold">{friend.name}</h2>
                    <p className="text-sm text-gray-600">{friend.username}</p>
                  </div>
                  <button
                    className={`px-4 py-1 rounded-full text-sm ${
                      friend.isFollowing
                        ? "bg-blue-500 text-white"
                        : "bg-white text-gray-800"
                    }`}
                  >
                    {friend.isFollowing ? "Following" : "Follow"}
                  </button>
                </div>
                <p className="text-sm text-gray-700 pt-10">{friend.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FriendsPage;
