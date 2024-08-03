import EventsComponent from "@/components/layout/EventsComponent";
import NavBar from "@/components/layout/Navbar";
import SuggestedPages from "@/components/layout/SuggestedPages";
import PostCard from "@/components/PostCard";
import PostSomething from "@/components/PostSomething";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <NavBar />
      <div className="container mx-auto px-4 mt-16 flex flex-col md:flex-row max-w-6xl">
        <div className="md:w-2/3 space-y-4 mt-8">
          <PostSomething />
          <PostCard />
          <PostCard />
        </div>
        <div className="md:w-1/3 mt-8 md:ml-8">
          <EventsComponent />
          <SuggestedPages />
        </div>
      </div>
    </div>
  );
}