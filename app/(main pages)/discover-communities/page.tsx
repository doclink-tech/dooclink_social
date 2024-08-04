import NavBar from "@/components/layout/Navbar";
import React from "react";
import DiscoverNav from "./_component/DiscoverNav";
import SuggestedGroups from "./_component/SuggestedGroups";
import CategoryButtons from "./_component/CategoryButtons";
import FriendsGroups from "./_component/FriendsGroups";

const DiscoverPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <NavBar />
      <div className="max-w-6xl mx-auto p-4">
        <DiscoverNav />
        <SuggestedGroups />
        <CategoryButtons />
        <FriendsGroups />
      </div>
    </div>
  );
};

export default DiscoverPage;
