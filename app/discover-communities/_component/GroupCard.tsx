import React from 'react';
import Image from 'next/image';

interface GroupCardProps {
  name: string;
  location: string;
  members: number;
  imageUrl: string;
  friendsJoined?: number;
}

const GroupCard: React.FC<GroupCardProps> = ({ name, location, members, imageUrl, friendsJoined }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-40">
        <Image src={imageUrl} alt={name} layout="fill" objectFit="cover" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1 tracking-tight">{name}</h3>
        <p className="text-gray-600 text-sm mb-2 font-medium">{location} • {members.toLocaleString()} Members</p>
        {friendsJoined && (
          <p className="text-gray-600 text-sm mb-2 font-medium">{friendsJoined} Friends Joined</p>
        )}
        <button className="w-full bg-gray-100 text-gray-800 py-2 rounded-lg hover:bg-gray-200 transition duration-300">
          Join Group
        </button>
      </div>
    </div>
  );
};

export default GroupCard;