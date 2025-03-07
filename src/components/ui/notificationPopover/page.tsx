// components/NotificationPopover.jsx
import { useState } from "react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Check } from "lucide-react"; // For the "Mark as Read" checkmark
import BellSvg from "@/Assets/svgs/BellSvg";
import TimeSvg from "@/Assets/svgs/TimeSvg";
import InfoSvg from "@/Assets/svgs/InfoSvg";

const NotificationPopover = () => {
    const [notifications, setNotifications] = useState([
        {
            id: 1,
            title: "New Order #30854",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus finibus vestibulum hendrerit. Nulla est diam, efficitur eu ullamcorper quis, ultrices nec nisl.",
            tag: "Tag",
            time: "Time",
            read: false,
        },
        {
            id: 2,
            title: "Order #30851 Has Been Shipped",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus finibus vestibulum hendrerit. Nulla est diam, efficitur eu ullamcorper quis, ultrices nec nisl.",
            tag: "Tag",
            time: "Time",
            read: true,
        },
        {
            id: 3,
            title: 'Your Product "iMac 2021" Out of Stock',
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus finibus vestibulum hendrerit. Nulla est diam, efficitur eu ullamcorper quis, ultrices nec nisl.",
            tag: "Tag",
            time: "Time",
            read: false,
        },
        {
            id: 4,
            title: 'Your Product "iMac 2021" Out of Stock',
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus finibus vestibulum hendrerit. Nulla est diam, efficitur eu ullamcorper quis, ultrices nec nisl.",
            tag: "Tag",
            time: "Time",
            read: true,
        },
        {
            id: 5,
            title: 'Your Product "iMac 2021" Out of Stock',
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus finibus vestibulum hendrerit. Nulla est diam, efficitur eu ullamcorper quis, ultrices nec nisl.",
            tag: "Tag",
            time: "Time",
            read: false,
        },
    ]);

    const markAsRead = (id) => {
        setNotifications(
            notifications.map((notif) =>
                notif.id === id ? { ...notif, read: true } : notif
            )
        );
    };

    const markAllAsRead = () => {
        setNotifications(notifications.map((notif) => ({ ...notif, read: true })));
    };

    return (
        <Popover>
            <PopoverTrigger asChild>
                <div className="relative cursor-pointer">
                    <BellSvg />
                    <div className="Notification">
                        <span className="NotifactionNm">
                            {notifications.filter((notif) => !notif.read).length || ""}
                        </span>
                    </div>
                </div>
            </PopoverTrigger>
            <PopoverContent
                className="w-[432px] h-[580px] border border-[1px] rounded-[16px] p-0 border-[#E9EAEA] shadow-none bg-white" // Added blue border and shadow
                align="end"
            >
                {/* Header */}
                <div className="border-b border-gray-200 px-4 py-3">
                    <h3 className="text-[20px] font-[600] text-[#24282E]">Notification</h3>
                </div>

                {/* Notification List */}
                <div className="max-h-[466px] overflow-y-auto">
                    {notifications.map((notification) => (
                        <div
                            key={notification.id}
                            className={`px-4 py-3 ${!notification.read ? "bg-[#E6F4F5]" : "bg-white"
                                }`} // Match Figma: blue for unread, white for read
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2 text-[12px] font-[500] text-[#727A90]">
                                    <InfoSvg />
                                    <span>{notification.tag}</span>
                                    <TimeSvg />
                                    <span>{notification.time}</span>
                                </div>
                                {!notification.read && (
                                    <button
                                        onClick={() => markAsRead(notification.id)}
                                        className="flex items-center space-x-1 bg-green-500 text-white rounded px-2 py-1 text-sm"
                                    >
                                        <Check className="w-4 h-4" />
                                        <span>Mark as Read</span>
                                    </button>
                                )}
                            </div>
                            <h4 className="mt-1 font-medium text-gray-900">
                                {notification.title}
                            </h4>
                            <p className="text-sm text-gray-600">{notification.description}</p>
                        </div>
                    ))}
                </div>

                {/* Footer */}
                <div className="border-t border-gray-200 px-4 py-3 flex justify-between">
                    <button
                        onClick={markAllAsRead}
                        className="text-green-500 text-sm hover:underline"
                    >
                        Mark All as Read
                    </button>
                    <button className="text-green-500 text-sm hover:underline">
                        See More
                    </button>
                </div>
            </PopoverContent>
        </Popover>
    );
};

export default NotificationPopover;