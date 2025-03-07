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
import GeneralData from "../../../components/ui/tableheader/page";
import TableFooter from "../../../components/ui/tablefooter/page";
import { useRouter } from "next/navigation"; // ✅ Make sure to import from "next/navigation" in App Router (Next.js 13+)
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
    },
];

export default function CustomerTable() {
    const router = useRouter(); // ✅ Move useRouter inside the function

    return (
        <>
            <div className="flex justify-between mt-3">
                <h1 className={styles.header}>Manage customers</h1>
                <button type="button" className={styles.customerBtn}>
                    <PlusGreenSvg className={styles.btnPlusIcon} />
                    Add New User
                </button>
            </div>
            <div className={tableStyles.mainContainer}>
                {/* Header */}
                <GeneralData search={true} header="Customer List" />
                {/* Customer Table */}
                <div className="bg-white rounded-xl">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className={tableStyles.tableHeaders}>
                                    Users
                                </TableHead>
                                <TableHead className={tableStyles.tableHeaders}>
                                    Customers
                                </TableHead>
                                <TableHead className={tableStyles.tableHeaders}>
                                    <span className="inline-flex items-center gap-2">
                                        <CalendarSvg className="w-4 h-4" />
                                        <span className={tableStyles.tableHeaders}>
                                            Created date
                                        </span>
                                    </span>
                                </TableHead>

                                <TableHead className={tableStyles.tableHeaders}>
                                    <span className="inline-flex items-center gap-2">
                                        <PhoneSvg className="w-4 h-4" />
                                        <span className={tableStyles.tableHeaders}>Phone</span>
                                    </span>
                                </TableHead>

                                <TableHead className={tableStyles.tableHeaders}>
                                    <span className="inline-flex items-center gap-2">
                                        <PhoneSvg className="w-4 h-4" />
                                        <span className={tableStyles.tableHeaders}>
                                            Last Order Date and Time
                                        </span>
                                    </span>
                                </TableHead>

                                <TableHead className={tableStyles.tableHeaders}>
                                    Total Orders
                                </TableHead>
                                <TableHead className={tableStyles.tableHeaders}>
                                    <span className="inline-flex items-center gap-2">
                                        <span className={tableStyles.tableHeaders}>Actions</span>
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
                                            <span className={tableStyles.userName}>
                                                {customer.customerName}
                                            </span>
                                            <span className={tableStyles.userEmail}>
                                                {customer.email}
                                            </span>
                                        </div>
                                    </TableCell>
                                    <TableCell
                                        className={` ${tableStyles.userName}`}
                                    >
                                        {customer.createdDate}
                                    </TableCell>
                                    <TableCell
                                        className={` ${tableStyles.userName}`}
                                    >
                                        {customer.phone}
                                    </TableCell>
                                    <TableCell className="">
                                        <div className="flex flex-col">
                                            <span className={tableStyles.userName}>
                                                {customer.lastOrderDate}
                                            </span>
                                            <span className={tableStyles.userEmail}>
                                                {customer.lastOrderTime}
                                            </span>
                                        </div>
                                    </TableCell>
                                    <TableCell
                                        className={` ${tableStyles.tableName}`}
                                    >
                                        {customer.totalOrders}
                                    </TableCell>
                                    <TableCell className="">
                                        <span className="flex  items-center gap-2">
                                            <DropdownMenu>
                                                <DropdownMenuTrigger>
                                                    <DropdownSVG className="cursor-pointer" />
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent className={styles.dropdownItem}>
                                                    <DropdownMenuItem className="flex items-center p-4">
                                                        <UserSvg color="#727A90" className="w-4 h-4" />
                                                        <span className={styles.dropdownText}>
                                                            Change Account Type
                                                        </span>
                                                    </DropdownMenuItem>
                                                    <hr />
                                                    <DropdownMenuItem className="flex items-center p-4">
                                                        <EditSvg className="w-4 h-4" />
                                                        <span className={styles.dropdownText}>Edit</span>
                                                    </DropdownMenuItem>
                                                    <hr />
                                                    <DropdownMenuItem className="flex items-center p-4">
                                                        <DownloadSvg className="w-4 h-4" />
                                                        <span className={styles.dropdownText}>
                                                            Resend Invite
                                                        </span>
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                            <button
                                                onClick={() => router.push("/main/customerDetails")}
                                                type="button"
                                                className={styles.customerBtn}
                                            >
                                                All Orders
                                            </button>
                                        </span>
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
