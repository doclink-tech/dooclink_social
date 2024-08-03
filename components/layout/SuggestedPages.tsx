import Image from 'next/image'
import React from 'react'
import { FaCalendarAlt, FaEllipsisH, FaGift, FaThumbsUp } from 'react-icons/fa'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

const SuggestedPages = () => {
  return (
    <div className="w-full bg-white rounded-lg shadow-md mt-4 overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-md font-semibold">Suggested pages</h2>
        <button className="text-primary text-sm font-medium">
          SEE ALL
        </button>
      </div>
      
      {/* Events List */}
      <div className="p-4 space-y-4">
      <div className="flex items-center mb-3">
          <div className="w-10 h-10 mr-3 relative">
          <Avatar className="h-8 w-8">
          <AvatarImage   src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Darshit Rajvanhs</h3>
            <p className="text-gray-500 text-sm">alkdknalkdnlkadnalk</p>
          </div>
        </div>
        <div className="relative h-48 w-full mb-3">
          <Image
            src="/vercel.svg"
            alt=""
            className="rounded-lg border"
            fill
          />
        </div>
        <button className="flex items-center justify-center w-full py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition duration-300">
          <FaThumbsUp className="mr-2" />
          Like Page
        </button>
    </div>
    </div>
  )
}

export default SuggestedPages