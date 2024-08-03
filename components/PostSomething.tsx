import { ImageDown } from 'lucide-react'
import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

const PostSomething = () => {
  return (
    <div className="bg-white rounded-lg shadow p-4  flex-1 ">
      <div className="flex items-center gap-x-2">
      <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <input
          type="text"
          placeholder="What's on your mind?"
          className="flex-grow bg-gray-100 text-gray-600 rounded-full py-2 px-4 focus:outline-none"
        />
        <button className="ml-3">
          <ImageDown className='text-gray-500' />
        </button>
      </div>
    </div>
  )
}

export default PostSomething