import Image from "next/image";
import {
  FaRegComment,
  FaRegHeart,
  FaRegBookmark,
  FaEllipsisH,
} from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const PostCard = () => {
  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden mb-8">
      {/* User info and post content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="ml-4">
              <p className="font-semibold text-md">Pan Feng Shui</p>
              <p className="text-sm text-gray-500">12 April at 09:28 PM</p>
            </div>
          </div>
          <button className="text-gray-500 hover:text-gray-700">
            <FaEllipsisH size={20} />
          </button>
        </div>
        <p className="mb-6 text-gray-500 text-lg font-medium">
          One of the perks of working in an international company is sharing
          knowledge with your colleagues.
        </p>
      </div>

      {/* Image grid */}
      <div className="grid grid-cols-2 gap-2 px-6">
        <Image
          src="/vercel.svg"
          alt="Office space 1"
          width={400}
          height={300}
          className="object-cover w-full h-64 rounded-lg border"
        />
        <div className="grid grid-rows-2 gap-2">
          <Image
            src="/vercel.svg"
            alt="Office space 2"
            width={400}
            height={150}
            className="object-cover w-full h-full rounded-lg border"
          />
          <Image
            src="/vercel.svg"
            alt="Office space 3"
            width={400}
            height={150}
            className="object-cover w-full h-full rounded-lg border"
          />
        </div>
      </div>

      {/* Action buttons */}
      <div className="px-6 py-4  border-gray-200 flex justify-between">
        <ActionButton icon={<FaRegComment size={18} />} text="25 Comment" />
        <ActionButton icon={<FaRegHeart size={18} />} text="120k Like" />
        <ActionButton icon={<IoShareSocialOutline size={18} />} text="231 Share" />
        <ActionButton icon={<FaRegBookmark size={18} />} text="12 Save" />
      </div>

      {/* Comment input */}
      <div className="px-6 py-4 border-t border-gray-200 flex items-center">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <input
          type="text"
          placeholder="Write your comment..."
          className="ml-4 flex-grow bg-gray-100 rounded-full px-6 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <button className="ml-4 text-gray-400 hover:text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <button className="ml-4 text-gray-400 hover:text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

const ActionButton = ({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) => (
  <button className="flex items-center text-gray-500 hover:text-gray-700 transition duration-150 ease-in-out">
    {icon}
    <span className="ml-2 text-sm">{text}</span>
  </button>
);

export default PostCard;
