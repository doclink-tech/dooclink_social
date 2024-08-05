import EventsComponent from "@/components/layout/EventsComponent";
import NavBar from "@/components/layout/Navbar";
import SuggestedPages from "@/components/layout/SuggestedPages";
import PostCard from "@/components/PostCard";
import PostSomething from "@/components/PostSomething";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Image from "next/image";
import React from "react";

interface Stat {
  label: string;
  value: string | number;
}

const stats: Stat[] = [
  { label: "Post", value: "10.3K" },
  { label: "Followers", value: "2,564" },
  { label: "Following", value: "3,154" },
  { label: "Likes", value: "12.2k" },
  { label: "Photos", value: "35" },
  { label: "Videos", value: "24" },
  { label: "Saved", value: "18" },
];

const ProfilePage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <NavBar />
      <div className="max-w-6xl mx-auto p-4 mt-20">
        <div className="relative">
          {/* Background Image */}
          <div className="h-[15rem]  rounded-b-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1719937050640-71cfd3d851be?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Background"
              layout="fill"
              objectFit="cover"
              className="  rounded-2xl"
            />
          </div>

          {/* Edit Profile Button */}
          <button className="absolute top-4 right-4 bg-white bg-opacity-20 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-opacity-30 transition-colors">
            Edit Profile
          </button>

          {/* Profile Picture */}
          <div className="absolute -bottom-16 left-6">
            <Image
              src="https://github.com/shadcn.png"
              alt=""
              width={128}
              height={128}
              className="rounded-full border-4 border-white"
            />
          </div>

          {/* Profile Info */}
          <div className="absolute left-[10rem]">
            <h1 className="text-2xl font-bold">Darshit Rajvansh</h1>
            <p className="text-gray-600">@Flame</p>
          </div>
        </div>
        <div className="flex flex-row bg-white p-6 rounded-2xl mt-20">
          <Tabs defaultValue="post" className="w-full ">
            <TabsList className="grid grid-cols-7 bg-white">
              {stats.map((stat) => (
                <TabsTrigger
                  key={stat.label}
                  value={stat.label.toLowerCase()}
                  className="flex flex-col items-center py-2 text-sm"
                >
                  <span className="font-semibold">{stat.value}</span>
                  <span className="">{stat.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            {stats.map((stat) => (
              <TabsContent key={stat.label} value={stat.label.toLowerCase()}>
                <div className="flex flex-row">
                  <div className="md:w-2/3 space-y-4 mt-8 mx-0">
                    <PostSomething />
                    <PostCard />
                    <PostCard />
                  </div>
                  <div className="md:w-1/3 mt-8 md:ml-8">
                    <EventsComponent />
                    <SuggestedPages />
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
