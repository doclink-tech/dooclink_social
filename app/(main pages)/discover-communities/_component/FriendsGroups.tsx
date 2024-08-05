import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "@/components/ui/button";

interface FriendGroup {
  name: string;
  location: string;
  members: number;
  imageUrl: string;
  friendsJoined: number;
}

const friendsGroups: FriendGroup[] = [
  {
    name: "Dribbble Designer Pro ID",
    location: "Yogyakarta",
    members: 2391,
    imageUrl:
      "https://images.unsplash.com/photo-1719937050446-a121748d4ba0?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    friendsJoined: 4,
  },
  {
    name: "Urban Sneakers Society ID",
    location: "Yogyakarta",
    members: 2391,
    imageUrl:
      "https://images.unsplash.com/photo-1719937050446-a121748d4ba0?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    friendsJoined: 2,
  },
  {
    name: "Microstock Community",
    location: "Yogyakarta",
    members: 2391,
    imageUrl:
      "https://images.unsplash.com/photo-1719937050446-a121748d4ba0?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    friendsJoined: 4,
  },
  {
    name: "Football Europe Update",
    location: "Kopavík",
    members: 134213,
    imageUrl:
      "https://images.unsplash.com/photo-1719937050446-a121748d4ba0?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    friendsJoined: 3,
  },
  {
    name: "Anti Rounded Shape Club",
    location: "Kotor Varoš",
    members: 86485,
    imageUrl:
      "https://images.unsplash.com/photo-1719937050446-a121748d4ba0?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    friendsJoined: 1,
  },
  {
    name: "Rubik Font Hooligans",
    location: "Kotor Varoš",
    members: 86485,
    imageUrl:
      "https://images.unsplash.com/photo-1719937050446-a121748d4ba0?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    friendsJoined: 2,
  },
];

const FriendGroupCard: React.FC<FriendGroup> = ({
  name,
  location,
  members,
  imageUrl,
  friendsJoined,
}) => (
  <div className="flex items-center p-3 bg-white rounded-lg shadow-md">
    <div className="relative w-12 h-12 mr-3 rounded-lg overflow-hidden">
      <Image src={imageUrl} alt={name} layout="fill" objectFit="cover" />
    </div>
    <div className="flex-grow">
      <h3 className="font-semibold text-sm">{name}</h3>
      <p className="text-xs text-gray-500">
        {location} • {members.toLocaleString()} Members
      </p>
      <div className="flex items-center mt-1">
        <div className="flex -space-x-1 mr-2">
          {[...Array(Math.min(friendsJoined, 3))].map((_, i) => (
            <Avatar className="h-4 w-4" key={i}>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          ))}
        </div>
        <p className="text-xs text-gray-500">{friendsJoined} Friends Joined</p>
      </div>
    </div>
    <Button size='sm'>
      Join Community
    </Button>
  </div>
);

const FriendsGroups: React.FC = () => {
  return (
    <section className=" bg-white rounded-xl">
      <div className="flex justify-between items-center p-4">
        <div className="flex flex-col">
          <h2 className="text-md font-semibold">Friends Communities</h2>
          <p className="text-sm text-muted-foreground pt-1 font-medium">
            Communities that your friends are in.
          </p>
        </div>
        <Link href="#" className="text-blue-500 hover:underline">
          See All
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        {friendsGroups.map((group, index) => (
          <FriendGroupCard key={index} {...group} />
        ))}
      </div>
    </section>
  );
};

export default FriendsGroups;
