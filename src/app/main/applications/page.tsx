"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import styles from "./styles.module.css";
import tableStyles from "../table.styles.module.css";
import PlusGreenSvg from "@/Assets/svgs/PlusGreenSvg";
import CalendarSvg from "@/Assets/svgs/CalendarSvg";
import PhoneSvg from "@/Assets/svgs/PhoneSvg";
import DropdownSVG from "@/Assets/svgs/DropdownSVG";
import UserSvg from "@/Assets/svgs/UserSvg";
import EditSvg from "@/Assets/svgs/EditSvg";
import DownloadSvg from "@/Assets/svgs/DownloadSvg";
import GeneralData from "../tableheader/page";
import TableFooter from "../tablefooter/page";
import { useRouter } from "next/navigation"; // ✅ Make sure to import from "next/navigation" in App Router (Next.js 13+)
// import { IndiaFlag } from "@/Assets/svgs/CountryFlags";
import { Button } from "@/components/ui/button";
import IndiaFlag from "@/Assets/svgs/IndiaFlag";
import EyeIcon from "@/Assets/svgs/EyeIcon";

// Status component with different styles
const Status = ({ status = "" }: { status: string }) => {
  const getStatusStyle = () => {
    switch (status.toLowerCase()) {
      case "new":
        return "bg-red-50 text-red-500";
      case "ready to be apply":
        return "bg-blue-50 text-blue-500";
      case "have issues":
        return "bg-orange-50 text-orange-500";
      case "need to pay gov fee":
        return "bg-purple-50 text-purple-500";
      case "gov fee paid":
        return "bg-green-50 text-green-500";
      case "approved":
        return "bg-teal-50 text-teal-500";
      case "rejected":
        return "bg-red-50 text-red-500";
      case "cancel":
        return "bg-gray-50 text-gray-500";
      default:
        return "bg-gray-50 text-gray-500";
    }
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusStyle()}`}
    >
      {status}
    </span>
  );
};

// Priority component with different colors
const Priority = ({ level = "" }: { level: string }) => {
  const getColor = () => {
    switch (level.toLowerCase()) {
      case "high priority":
        return "text-red-500";
      case "medium priority":
        return "text-yellow-500";
      case "low priority":
        return "text-green-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <span className={`flex items-center gap-2 ${getColor()}`}>
      <span className="w-2 h-2 rounded-full bg-current" />
      {level}
    </span>
  );
};

const customers: any = [
  {
    id: "#233511",
    platform: "Whatsapp",
    customerName: "John Bushmill",
    email: "johnb@mail.com",
    createdDate: "26 July 2024",
    phone: "+3513503333",
    lastOrderDate: "26 October 2025",
    lastOrderTime: "12:15 am",
    totalOrders: 24,
    action: "All Orders",
    status: "New",
    priority: "High Priority",
    visaType: "Tourist Visa",
  },
  {
    id: "#445522",
    platform: "Instagram",
    customerName: "Jane Doe",
    email: "janed@mail.com",
    createdDate: "26 July 2024",
    phone: "983429234832",
    lastOrderDate: "26 October 2025",
    lastOrderTime: "12:15 am",
    totalOrders: 24,
    action: "All Orders",
    status: "Ready to be apply",
    priority: "Low Priority",
    visaType: "Business Visa",
  },
  {
    id: "#112233",
    platform: "Twitter",
    customerName: "Alice Johnson",
    email: "alicej@mail.com",
    createdDate: "26 July 2024",
    phone: "754389573485",
    lastOrderDate: "26 October 2025",
    lastOrderTime: "12:15 am",
    totalOrders: 24,
    action: "All Orders",
    status: "Need to pay gov fee",
    priority: "Medium Priority",
    visaType: "Tourist Visa",
  },
  {
    id: "#783456",
    platform: "Facebook",
    customerName: "David Smith",
    email: "davids@mail.com",
    createdDate: "26 July 2024",
    phone: "1234567890",
    lastOrderDate: "26 October 2025",
    lastOrderTime: "12:15 am",
    totalOrders: 24,
    action: "All Orders",
    status: "Gov fee paid",
    priority: "High Priority",
    visaType: "Tourist Visa",
  },
  {
    id: "#654321",
    platform: "LinkedIn",
    customerName: "Emily Brown",
    email: "emilyb@mail.com",
    createdDate: "26 July 2024",
    phone: "9876543210",
    lastOrderDate: "26 October 2025",
    lastOrderTime: "12:15 am",
    totalOrders: 24,
    action: "All Orders",
    status: "Approved",
    priority: "Medium Priority",
    visaType: "Tourist Visa",
  },
  {
    id: "#987654",
    platform: "Pinterest",
    customerName: "Michael Wilson",
    email: "michaelw@mail.com",
    createdDate: "26 July 2024",
    phone: "2468013579",
    lastOrderDate: "26 October 2025",
    lastOrderTime: "12:15 am",
    totalOrders: 24,
    action: "All Orders",
    status: "Rejected",
    priority: "Medium Priority",
    visaType: "Business Visa",
  },
  {
    id: "#345678",
    platform: "Snapchat",
    customerName: "Sarah Clark",
    email: "sarahc@mail.com",
    createdDate: "26 July 2024",
    phone: "5555555555",
    lastOrderDate: "26 October 2025",
    lastOrderTime: "12:15 am",
    totalOrders: 24,
    action: "All Orders",
    status: "Cancel",
    priority: "Medium Priority",
    visaType: "Business Visa",
  },
  {
    id: "#876543",
    platform: "TikTok",
    customerName: "Kevin Miller",
    email: "kevinm@mail.com",
    createdDate: "26 July 2024",
    phone: "1111111111",
    lastOrderDate: "26 October 2025",
    lastOrderTime: "12:15 am",
    totalOrders: 24,
    action: "All Orders",
    status: "Approved",
    priority: "Medium Priority",
    visaType: "Business Visa",
  },
];

export default function Applications() {
  // const router = useRouter(); // ✅ Move useRouter inside the function

  return (
    <>
      <div className="flex justify-between mt-3">
        <h1 className={styles.header}>Manage Applications Lists</h1>
      </div>

      <div className={tableStyles.mainContainer}>
        {/* Header */}
        <GeneralData
          search={true}
          header="Application List"
          showFilters={true}
          showSeeMore={true}
        />
        {/* Customer Table */}
        <div className="bg-white rounded-xl">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customers</TableHead>
                <TableHead>Tags</TableHead>
                <TableHead>Application Date</TableHead>
                <TableHead>Flight Date</TableHead>
                <TableHead>Priority Level</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Visa Type & Country</TableHead>
                <TableHead className="text-center">
                  <span className="flex items-center justify-center gap-2">
                    Actions
                    <DropdownSVG />
                  </span>
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {customers.map((customer, index) => (
                <TableRow key={index} className="hover:bg-gray-50">
                  <TableCell>
                    <div className="flex flex-col">
                      <span className={tableStyles.userEmail}>
                        {customer.id}
                      </span>
                      <span className={tableStyles.userName}>
                        {customer.platform}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <span className={tableStyles.userEmail}>
                        #tag, #tag, #tag,#tag, #tag, #tag,
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>{customer.createdDate}</TableCell>
                  <TableCell>{customer.phone}</TableCell>
                  <TableCell>
                    <Priority level={customer.priority} />
                  </TableCell>
                  <TableCell>
                    <Status status={customer.status} />
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-medium">
                        {customer.visaType}
                      </span>
                      <div className="flex items-center gap-2">
                        <IndiaFlag className="w-5 h-5" />
                        <span className="text-sm">India</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex justify-center items-center gap-2">
                      <EyeIcon className="cursor-pointer " />
                      <DropdownSVG className="cursor-pointer w-[13px] h-[8px]" />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        {/* Footer Section */}
        <TableFooter />
      </div>
    </>
  );
}
