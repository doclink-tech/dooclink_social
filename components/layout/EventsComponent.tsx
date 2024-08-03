// components/layout/EventsComponent.tsx
import { FaCalendarAlt, FaGift, FaEllipsisH } from 'react-icons/fa'

const EventsComponent = () => {
  return (
    <div className="w-full bg-white rounded-lg shadow-md overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-md font-semibold">Events</h2>
        <button className="text-gray-500">
          <FaEllipsisH />
        </button>
      </div>
      
      {/* Events List */}
      <div className="p-4 space-y-4">
        <div className="flex items-center space-x-3">
          <FaCalendarAlt className="text-blue-500" />
          <span className="text-sm">10 Events Invites</span>
        </div>
        <div className="flex items-center space-x-3">
          <FaGift className="text-pink-500" />
          <span className="text-sm">Prada&apos;s invitation Birthday</span>
        </div>
        <div className="flex items-center space-x-3">
          <FaCalendarAlt className="text-blue-500" />
          <span className="text-sm">10 Events Invites</span>
        </div>
        <div className="flex items-center space-x-3">
          <FaGift className="text-pink-500" />
          <span className="text-sm">Prada&apos;s invitation Birthday</span>
        </div>
        <div className="flex items-center space-x-3">
          <FaCalendarAlt className="text-blue-500" />
          <span className="text-sm">10 Events Invites</span>
        </div>
        <div className="flex items-center space-x-3">
          <FaGift className="text-pink-500" />
          <span className="text-sm">Prada&apos;s invitation Birthday</span>
        </div>
        <div className="flex items-center space-x-3">
          <FaCalendarAlt className="text-blue-500" />
          <span className="text-sm">10 Events Invites</span>
        </div>
        <div className="flex items-center space-x-3">
          <FaGift className="text-pink-500" />
          <span className="text-sm">Prada&apos;s invitation Birthday</span>
        </div>
      </div>
    </div>
  )
}

export default EventsComponent