import NavBar from "@/components/layout/Navbar";
import React from "react";
import VideoNav from "./_component/VideoNav";
import VideoGrid from "./_component/VideoGrid";

const page = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <NavBar />
      <div className="max-w-6xl mx-auto p-4">
        <VideoNav />
        <VideoGrid />
      </div>
    </div>
  );
};

export default page;
