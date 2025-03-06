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
// import { IndiaFlag } from "@/Assets/svgs/CountryFlags";
import { Button } from "@/components/ui/button";
import IndiaFlag from "@/Assets/svgs/IndiaFlag";
import EyeIcon from "@/Assets/svgs/EyeIcon";
import GeneralData from "../../../components/ui/tableheader/page";
import TableFooterComponent from "@/components/ui/tablefooter/page";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import Modal from "@/components/ui/applicationDetailModal/page";
import { useEffect, useState } from "react";

// Status component with different styles
const Status = ({ status = "" }: { status: string }) => {
  const getStatusStyle = () => {
    switch (status.toLowerCase()) {
      case "new":
      case "have issues":
      case "need to pay gov fee":
        return "bg-[#feefec] text-[#F05D3D] text-[10px] font-[600] border-[1px] rounded-[100px] border-[#FACDC3]";

      case "gov fee paid":
        return "bg-[#ECFBF3] text-[#42DA82] text-[10px] font-[600] border-[1px] rounded-[100px] border-[#42DA82]";
      case "cancel":
      case "approved":
        return "bg-[#E6F4F5] text-[#009499] text-[10px] font-[600] border-[1px] rounded-[100px] border-[#B0DEDF]";

      case "ready to be apply":
        return "bg-[#E6F5FE] text-[#019BF4] text-[10px] font-[600] border-[1px] rounded-[100px] border-[#B0E0FC]";

      case "rejected":
        return "bg-[#FDEDED] text-[#D32F2F] text-[10px] font-[600] border-[1px] rounded-[100px] border-[#F5C6C6]";

      default:
        return "bg-[#F3F4F6] text-[#6B7280] text-[10px] font-[600] border-[1px] rounded-[100px] border-[#D1D5DB]";
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
        return "text-[#F05D3D] text-[14px] font-[500] ";
      case "medium priority":
        return "text-[#DDCB06] text-[14px] font-[500]";
      case "low priority":
        return "text-[#42DA82] text-[14px] font-[500]";
      default:
        return "text-gray-500 text-[14px] font-[500]";
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
    id: "#445232",
    platform: "Instagram",
    customerName: "Jane Doe",
    email: "janed@mail.com",
    createdDate: "26 July 2024",
    phone: "983429234832",
    lastOrderDate: "26 October 2025",
    lastOrderTime: "12:15 am",
    totalOrders: 24,
    action: "All Orders",
    status: "Have issues",
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
    priority: "Low Priority",
    visaType: "Business Visa",
  },
];

export default function Applications() {

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsModalOpen(searchParams.get("modal") === "open");
  }, [searchParams]);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Re-enable scrolling
    }
  
    return () => {
      document.body.style.overflow = "auto"; // Cleanup when component unmounts
    };
  }, [isModalOpen]);  

  const openModal = () => {
    router.push(`${pathname}?modal=open`);
  };

  const closeModal = () => {
    router.push(pathname);
  };

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
                    <div className="flex flex-col w-[140px]">
                      <span className={styles.tags}>
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
                      <span className={styles.visaText}>{customer.visaType}</span>
                      <div className="flex items-center gap-2">
                        <IndiaFlag className="w-5 h-5" />
                        <span className="text-sm">India</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex justify-center items-center gap-2">
                      <EyeIcon onClick={openModal} className="cursor-pointer " />
                      <DropdownSVG className="cursor-pointer w-[13px] h-[8px]" />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        {/* Footer Section */}
        <TableFooterComponent
          total={customers.length}
          currentPage={1}
          onPageChange={(page) => {
            // Handle page change
          }}
        />
      </div>
      {isModalOpen && <Modal onClose={closeModal} isOpen={isModalOpen} data={{
        name: 'Linda Blair',
        photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTgD14vQ6I-UBiHTcwxZYnpSfLFJ2fclwS2A&s', // Replace with actual image path
        email: 'abc@gmail.com',
        phone: '050 414 8788',
        visaType: 'Business Visa',
        country: 'India',
        flightDate: '26 October 2024',
        passportPhotoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTgD14vQ6I-UBiHTcwxZYnpSfLFJ2fclwS2A&s', // Replace with actual image path
        applicationId: 'ID0121',
        passportNumber: '050 414 8788',
        status: 'Cancel',
        cancellationReason: 'The applicant has decided to postpone their travel plans due to unforeseen personal circumstances. As a result, the visa application is no longer required at this time',
        internalNotes: '',
        paidAmount: '$2000',
        paymentDate: '20 Oct 2024',
        invoiceFiles: [
          { name: 'Invoice name here', url: '/path-to-invoice.pdf' }, // Replace with actual paths
          { name: 'Visa Invoice name here', url: '/path-to-visa-invoice.pdf' },
        ],
      }} />}
    </>
  );
}
