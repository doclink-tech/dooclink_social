import Image from "next/image";
import React from "react";
import { CiGlobe } from "react-icons/ci";
import { FaRegNewspaper } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { GiLargeDress } from "react-icons/gi";
import { MdMovie } from "react-icons/md";

const categories = [
  {
    name: "Hobby",
    icon: <CiGlobe className="text-blue-500" />,
    color: "bg-blue-100",
    image:
      "https://images.unsplash.com/photo-1721819506270-af50411fc152?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3NHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Entertainment",
    icon: <MdMovie className="text-green-500" />,
    color: "bg-green-100",
    image:
      "https://images.unsplash.com/photo-1721819506270-af50411fc152?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3NHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Business",
    icon: <FaBagShopping className="text-orange-500" />,
    color: "bg-orange-100",
    image:
      "https://images.unsplash.com/photo-1721819506270-af50411fc152?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3NHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Fashion",
    icon: <GiLargeDress className="text-pink-500" />,
    color: "bg-pink-100",
    image:
      "https://images.unsplash.com/photo-1721819506270-af50411fc152?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3NHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "News Update",
    icon: <FaRegNewspaper className="text-yellow-500" />,
    color: "bg-yellow-100",
    image:
      "https://images.unsplash.com/photo-1721819506270-af50411fc152?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3NHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const CategoryButton: React.FC<{
  name: string;
  icon: any;
  color: string;
  image: string;
}> = ({ name, icon, color, image }) => (
  <div>
    <Image
      src={image}
      alt=""
      width={350}
      height={350}
      className="h-[150px] rounded-2xl"
    />
    <div className="flex flex-col items-center space-y-2 relative -top-16">
      <button
        className={`w-24 h-24 ${color} rounded-2xl shadow-sm flex items-center justify-center transition duration-300 hover:shadow-md hover:scale-105 flex-col`}
      >
        <span className="text-2xl">{icon}</span>
        <span className="text-xs text-gray-600 font-medium mt-1">{name}</span>
      </button>
    </div>
  </div>
);

const CategoryButtons: React.FC = () => {
  return (
    <section>
      <div className="flex space-x-6 overflow-x-auto scrollbar-hide">
        {categories.map((category, index) => (
          <CategoryButton key={index} {...category} />
        ))}
      </div>
    </section>
  );
};

export default CategoryButtons;
