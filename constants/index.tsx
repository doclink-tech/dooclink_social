import { Calendar, File, ImageUp, LayoutDashboard, Settings, Store } from "lucide-react";
import { MdOutlineGroup } from "react-icons/md";

export const BottomNavLinks = [
    {
        name: "Feed",
        Icon: <LayoutDashboard />,
        url: '/'
    },
    {
        name: "Friends",
        Icon: <MdOutlineGroup className="h-6 w-6" />,
        url: '/friends'
    },
    {
        name: "Event",
        Icon: <Calendar />,
        url: '/event',
    },
    {
        name: "Media Files",
        Icon: <ImageUp />,
        url: '/media-files'
    },
    {
        name: "Documents",
        Icon: <File />,
        url: '/documents'
    },
    {
        name: "Marketplace",
        Icon: <Store />,
        url: '/marketplace'
    },
]