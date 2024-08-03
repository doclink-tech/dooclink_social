import NavBar from "@/components/layout/Navbar";
import MarketPlaceNav from "./_component/MarketPlaceNav";
import MarketPlaceCard from "./_component/MarketPlaceCard";

interface Product {
  id: string;
  title: string;
  price: number;
  rating: number;
  location: string;
  timeAgo: string;
  imageUrl: string;
}

const products: Product[] = [
  {
    id: "1",
    title: "Tips For Choosing The Perfect Glass For Your Lips",
    price: 950.0,
    rating: 5,
    location: "Yogyakarta",
    timeAgo: "3 Hours ago",
    imageUrl:
      "https://images.unsplash.com/photo-1719937050640-71cfd3d851be?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "1",
    title: "Tips For Choosing The Perfect Glass For Your Lips",
    price: 950.0,
    rating: 5,
    location: "Yogyakarta",
    timeAgo: "3 Hours ago",
    imageUrl:
      "https://images.unsplash.com/photo-1719937050640-71cfd3d851be?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "1",
    title: "Tips For Choosing The Perfect Glass For Your Lips",
    price: 950.0,
    rating: 5,
    location: "Yogyakarta",
    timeAgo: "3 Hours ago",
    imageUrl:
      "https://images.unsplash.com/photo-1719937050640-71cfd3d851be?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "1",
    title: "Tips For Choosing The Perfect Glass For Your Lips",
    price: 950.0,
    rating: 5,
    location: "Yogyakarta",
    timeAgo: "3 Hours ago",
    imageUrl:
      "https://images.unsplash.com/photo-1719937050640-71cfd3d851be?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "1",
    title: "Tips For Choosing The Perfect Glass For Your Lips",
    price: 950.0,
    rating: 5,
    location: "Yogyakarta",
    timeAgo: "3 Hours ago",
    imageUrl:
      "https://images.unsplash.com/photo-1719937050640-71cfd3d851be?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "1",
    title: "Tips For Choosing The Perfect Glass For Your Lips",
    price: 950.0,
    rating: 5,
    location: "Yogyakarta",
    timeAgo: "3 Hours ago",
    imageUrl:
      "https://images.unsplash.com/photo-1719937050640-71cfd3d851be?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "1",
    title: "Tips For Choosing The Perfect Glass For Your Lips",
    price: 950.0,
    rating: 5,
    location: "Yogyakarta",
    timeAgo: "3 Hours ago",
    imageUrl:
      "https://images.unsplash.com/photo-1719937050640-71cfd3d851be?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "1",
    title: "Tips For Choosing The Perfect Glass For Your Lips",
    price: 950.0,
    rating: 5,
    location: "Yogyakarta",
    timeAgo: "3 Hours ago",
    imageUrl:
      "https://images.unsplash.com/photo-1719937050640-71cfd3d851be?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "1",
    title: "Tips For Choosing The Perfect Glass For Your Lips",
    price: 950.0,
    rating: 5,
    location: "Yogyakarta",
    timeAgo: "3 Hours ago",
    imageUrl:
      "https://images.unsplash.com/photo-1719937050640-71cfd3d851be?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "1",
    title: "Tips For Choosing The Perfect Glass For Your Lips",
    price: 950.0,
    rating: 5,
    location: "Yogyakarta",
    timeAgo: "3 Hours ago",
    imageUrl:
      "https://images.unsplash.com/photo-1719937050640-71cfd3d851be?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  // ... Add more products here
];

const Marketplace = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <NavBar />
      <div className="max-w-6xl mx-auto p-4">
        <div className="flex justify-between items-center mb-6 mt-16">
          <h1 className="text-2xl font-bold text-gray-800">Marketplace</h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
            + Sell Something
          </button>
        </div>
        <MarketPlaceNav />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <MarketPlaceCard id={product.id} title={product.title} price={product.price} rating={product.rating} location={product.location} timeAgo={product.timeAgo} imageUrl={product.imageUrl} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
