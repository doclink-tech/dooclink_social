import NotificationCard from "./_component/NotificationCard";
import NavBar from "@/components/layout/Navbar";

const NotificationList = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <NavBar />
      <div className="max-w-6xl mx-auto p-4 mt-20">
        <NotificationCard />
      </div>
    </div>
  );
};

export default NotificationList;
