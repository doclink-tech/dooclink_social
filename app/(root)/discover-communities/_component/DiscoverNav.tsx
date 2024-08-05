import { Input } from "@/components/ui/input";
import React from "react";

const DiscoverNav = () => {
  return (
    <div className="flex justify-between items-center mb-6 mt-16">
      <h1 className="text-2xl font-bold text-gray-800">Discover Communities</h1>
      <div className="flex flex-row items-center gap-x-3">
        <Input
          type="text"
          placeholder="Search..."
          className="border rounded-lg px-3 py-2 mr-4 focus:outline-none focus:ring-2 focus:ring-gray-300"
        />
        <button  className="bg-blue-500 text-white px-4 py-1.5 rounded-md hover:bg-blue-600 transition-colors">
          + Create Communities
        </button>
      </div>
    </div>
  );
};

export default DiscoverNav;
