import React from "react";
import GroupCard from "./GroupCard";
import Link from "next/link";

const suggestedGroups = [
  {
    name: "Dribbble Designer Pro ID",
    location: "Yogyakarta",
    members: 2391,
    imageUrl:
      "https://images.unsplash.com/photo-1719937050446-a121748d4ba0?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Urban Sneakers Society ID",
    location: "Jakarta",
    members: 7234,
    imageUrl:
      "https://images.unsplash.com/photo-1719937050446-a121748d4ba0?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Microstock Community",
    location: "Yogyakarta",
    members: 2391,
    imageUrl:
      "https://images.unsplash.com/photo-1719937050446-a121748d4ba0?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Football Europe Update",
    location: "Kopavík",
    members: 134213,
    imageUrl:
      "https://images.unsplash.com/photo-1719937050446-a121748d4ba0?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const SuggestedGroups: React.FC = () => {
  return (
    <section className="mb-8 bg-white rounded-xl">
      <div className="flex justify-between items-center mb-4 p-4    ">
        <div className="flex flex-col">
          <h2 className="text-md font-semibold">Suggested Communities</h2>
          <p className="text-sm text-muted-foreground pt-1 font-medium">
            Communities you might me interested
          </p>
        </div>
        <Link href="#" className="text-blue-500 hover:underline">
          See All
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 pb-6">
        {suggestedGroups.map((group, index) => (
          <GroupCard key={index} {...group} />
        ))}
      </div>
    </section>
  );
};

export default SuggestedGroups;
