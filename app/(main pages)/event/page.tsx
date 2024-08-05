import React from "react";
import NavBar from "@/components/layout/Navbar";
import EventNav from "./_component/EventNav";
import EventCard from "./_component/EventCard";

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  image: string;
  attendees: { id: number; avatar: string }[];
}

const events: Event[] = [
  {
    id: 1,
    title: "PUBG Competition",
    date: "APR 27",
    time: "Thu 15:00",
    location: "Hartono Mall, YK",
    image:
      "https://images.unsplash.com/photo-1719937050640-71cfd3d851be?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    attendees: [
      { id: 1, avatar: "https://github.com/shadcn.png" },
      { id: 2, avatar: "https://github.com/shadcn.png" },
      { id: 3, avatar: "https://github.com/shadcn.png" },
      { id: 4, avatar: "https://github.com/shadcn.png" },
    ],
  },
  {
    id: 2,
    title: "Cooking with Chef Juna",
    date: "APR 27",
    time: "Thu 13:00",
    location: "Hartono Mall, YK",
    image:
      "https://images.unsplash.com/photo-1719937050640-71cfd3d851be?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    attendees: [
      { id: 5, avatar: "https://github.com/shadcn.png" },
      { id: 6, avatar: "https://github.com/shadcn.png" },
    ],
  },
  {
    id: 3,
    title: "Sambisari Jazz Festival",
    date: "MAY 02",
    time: "Thu 19:00",
    location: "Hartono Mall, YK",
    image:
      "https://images.unsplash.com/photo-1719937050640-71cfd3d851be?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    attendees: [
      { id: 7, avatar: "https://github.com/shadcn.png" },
      { id: 8, avatar: "https://github.com/shadcn.png" },
      { id: 9, avatar: "https://github.com/shadcn.png" },
    ],
  },
  {
    id: 4,
    title: "The Surprising Popularity",
    date: "MAY 05",
    time: "Thu 10:00",
    location: "Hartono Mall, YK",
    image:
      "https://images.unsplash.com/photo-1719937050640-71cfd3d851be?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    attendees: [
      { id: 10, avatar: "https://github.com/shadcn.png" },
      { id: 11, avatar: "https://github.com/shadcn.png" },
      { id: 12, avatar: "https://github.com/shadcn.png" },
      { id: 13, avatar: "https://github.com/shadcn.png" },
    ],
  },
  {
    id: 5,
    title: "Coachella Concert",
    date: "MAY 08",
    time: "Thu 20:00",
    location: "Hartono Mall, YK",
    image:
      "https://images.unsplash.com/photo-1719937050640-71cfd3d851be?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    attendees: [
      { id: 14, avatar: "https://github.com/shadcn.png" },
      { id: 15, avatar: "https://github.com/shadcn.png" },
      { id: 16, avatar: "https://github.com/shadcn.png" },
    ],
  },
  {
    id: 6,
    title: "Kids Fun Holic 2019",
    date: "MAY 11",
    time: "Thu 09:00",
    location: "Hartono Mall, YK",
    image:
      "https://images.unsplash.com/photo-1719937050640-71cfd3d851be?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    attendees: [
      { id: 17, avatar: "https://github.com/shadcn.png" },
      { id: 18, avatar: "https://github.com/shadcn.png" },
      { id: 19, avatar: "https://github.com/shadcn.png" },
    ],
  },
  // Add more events to match the image
];

const UpcomingEvents: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <NavBar />
      <div className="max-w-6xl mx-auto p-4">
        <EventNav />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <EventCard id={event.id} title={event.time} date={event.date} time={event.time} location={event.location} image={event.image} attendees={event.attendees} key={event.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
