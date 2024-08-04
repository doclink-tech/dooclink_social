import React from 'react'
import Image from "next/image";

interface Event {
    id: number;
    title: string;
    date: string;
    time: string;
    location: string;
    image: string;
    attendees: { id: number; avatar: string }[];
  }

const EventCard = ({ id, title, date, time, location, image, attendees }: Event) => {
  return (
    <div
              key={id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={image}
                  alt={title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {title}
                </h3>
                <div className="flex flex-row items-center justify-between mb-2">
                  <div className="flex gap-x-4 flex-row items-center">
                    <p className="text-blue-500 text-sm ">
                      {date} • {time}
                    </p>
                  </div>
                  <p className="text-gray-600 text-sm ">{location}</p>
                </div>
                <div className="flex items-center">
                  {attendees.slice(0, 3).map((attendee, index) => (
                    <div
                      key={attendee.id}
                      className={`relative w-8 h-8 ${index > 0 ? "-ml-2" : ""}`}
                    >
                      <Image
                        src={attendee.avatar}
                        alt="Attendee"
                        layout="fill"
                        className="rounded-full border-2 border-white"
                      />
                    </div>
                  ))}
                  {attendees.length > 3 && (
                    <span className="ml-2 text-gray-600 text-sm">
                      +{attendees.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
  )
}

export default EventCard