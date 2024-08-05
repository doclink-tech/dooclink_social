import React from "react";
import Image from "next/image";

interface Product {
    id: string;
    title: string;
    price: number;
    rating: number;
    location: string;
    timeAgo: string;
    imageUrl: string;
  }

const MarketPlaceCard = ({ id, title, price, rating, location, timeAgo, imageUrl }: Product) => {
  return (
    <div
      key={id}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
    >
      <div className="relative h-48">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-md font-semibold text-gray-800 mb-2 line-clamp-2">
          {title}
        </h3>
        <div className="flex flex-row items-center  justify-between">
          <p className="text-blue-600 font-bold mb-2">
            USD {price.toFixed(2)}
          </p>
          <div className="flex items-center mb-2">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${
                  i < rating ? "text-yellow-400" : "text-gray-300"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
        <div className="flex justify-between text-sm text-gray-500">
          <span>{location}</span>
          <span>{timeAgo}</span>
        </div>
      </div>
    </div>
  );
};

export default MarketPlaceCard;
