"use client";
import { useState } from "react";
import styles from "./styles.module.css";
import tableStyles from "../table.styles.module.css";
import PlusGreenSvg from "@/Assets/svgs/PlusGreenSvg";
import GeneralData from "../../../components/ui/tableheader/page";
import TableFooter from "../../../components/ui/tablefooter/page";
import DropdownSVG from "@/Assets/svgs/DropdownSVG";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DropDownSvg from "@/Assets/svgs/DropDown";
import FlagImage from "./../../../Assets/Images/flag.png";
import Image from "next/image";
import EyeSvg from "@/Assets/svgs/EyeSvg";
import RightIconSvg from "@/Assets/svgs/RightSvg";
import Chip from "../../../components/ui/chipMenu/page";
import UserSvg from "@/Assets/svgs/UserSvg";
import EditSvg from "@/Assets/svgs/EditSvg";
import DownloadSvg from "@/Assets/svgs/DownloadSvg";
import WhatsappSvg from "@/Assets/svgs/WhatsappSvf";

// Dummy data (Main Sections with Sub-Sections)
const customers = [
    {
        id: 1,
        name: "Mr Michael",
        email: "abc123@gmail.com",
        phone: "+21316161461",
        subRecords: [
            {
                recordId: "#1235",
                tags: ["#tag", "#tag", "#tag"],
                createdDate: "26 July 2024",
                lastOrderDate: "26 July 2024",
                priority: "High Priority",
                visaType: "Tourist Visa",
                country: "India",
                status: "New",
            },
            {
                recordId: "#1235",
                tags: ["#tag", "#tag", "#tag"],
                createdDate: "26 July 2024",
                lastOrderDate: "26 July 2024",
                priority: "High Priority",
                visaType: "Tourist Visa",
                country: "India",
                status: "New",
            },
            {
                recordId: "#1235",
                tags: ["#tag", "#tag", "#tag"],
                createdDate: "26 July 2024",
                lastOrderDate: "26 July 2024",
                priority: "High Priority",
                visaType: "Tourist Visa",
                country: "India",
                status: "New",
            },
        ],
    },
    {
        id: 2,
        name: "Mr Smith",
        email: "smith123@gmail.com",
        phone: "+9876543210",
        subRecords: [
            {
                recordId: "#1235",
                tags: ["#tag", "#tag", "#tag"],
                createdDate: "26 July 2024",
                lastOrderDate: "26 July 2024",
                priority: "High Priority",
                visaType: "Tourist Visa",
                country: "India",
                status: "New",
            },
            {
                recordId: "#1235",
                tags: ["#tag", "#tag", "#tag"],
                createdDate: "26 July 2024",
                lastOrderDate: "26 July 2024",
                priority: "High Priority",
                visaType: "Tourist Visa",
                country: "India",
                status: "New",
            },
        ],
    },
    {
        id: 3,
        name: "Ms Alice",
        email: "alice123@gmail.com",
        phone: "+1234567890",
        subRecords: [
            {
                recordId: "#1235",
                tags: ["#tag", "#tag", "#tag"],
                createdDate: "26 July 2024",
                lastOrderDate: "26 July 2024",
                priority: "High Priority",
                visaType: "Tourist Visa",
                country: "India",
                status: "New",
            }
        ],
    },
];

export default function CustomerDetails() {
    const [expandedSections, setExpandedSections] = useState<number[]>([]);

    // Toggle Expand/Collapse
    const toggleSection = (id: number) => {
        setExpandedSections((prev) =>
            prev.includes(id) ? prev.filter((sec) => sec !== id) : [...prev, id]
        );
    };

    return (
        <>
            {/* Page Header */}
            <div className="flex justify-between mt-3">
                <h1 className={styles.header}>All Customers</h1>
                <button type="button" className={styles.customerBtn}>
                    <PlusGreenSvg className={styles.btnPlusIcon} />
                    Add New User
                </button>
            </div>

            {/* Main Container */}
            <div className={tableStyles.mainContainer}>
                <GeneralData search={true} header="Applicants" />

                {/* Customer Table */}
                <div className="bg-white rounded-xl">
                    {customers.map((customer) => {
                        const isExpanded = expandedSections.includes(customer.id);

                        return (
                            <div key={customer.id}>
                                {/* Main Section Row */}
                                <div className="flex justify-between items-center py-3 px-4">
                                    {/* Left Section (Name & Email) */}
                                    <div>
                                        <p className="text-[14px] font-[500] text-[#24282E]">
                                            {customer.name}
                                        </p>
                                        <p className="text-[12px] font-[400] text-[#727A90]">{customer.email}</p>
                                    </div>

                                    {/* Middle Section (Phone) */}
                                    <p className="text-[12px] font-[400] text-[#727A90]">{customer.phone}</p>
                                    <div className="flex items-center justify-center gap-3">
                                        <span className={styles.tableChip}>
                                            +{customer.subRecords.length}
                                        </span>
                                        {/* Right Section (Expand/Collapse Button) */}
                                        {customer.subRecords.length > 0 && (
                                            <>
                                                <button
                                                    onClick={() => toggleSection(customer.id)}
                                                >
                                                    {isExpanded ? (
                                                        <>
                                                            <DropDownSvg />
                                                        </>
                                                    ) : (
                                                        <>
                                                            <RightIconSvg />
                                                        </>
                                                    )}
                                                </button>
                                            </>
                                        )}
                                    </div>
                                </div>

                                {/* Sub-Section (Only Visible When Expanded) */}
                                {isExpanded && (
                                    <div className="border-gray-200">
                                        {customer.subRecords.map((record, idx) => (
                                            <div
                                                key={idx}
                                                className="flex justify-between px-4 items-center py-2 border-b last:border-none"
                                            >
                                                {/* Record ID*/}
                                                <div>
                                                    <p className="text-[12px] font-[400] text-[#727A90]">{record.recordId}</p>
                                                </div>

                                                {/* Tags */}
                                                <div>
                                                    <p className="text-[12px] font-[400] text-[#727A90]">
                                                        {record.tags.join(", ")}
                                                    </p>
                                                </div>

                                                {/* Dates */}
                                                <p className="text-[14px] font-[500] text-[#24282E]">{record.createdDate}</p>
                                                <p className="text-[14px] font-[500] text-[#24282E]">{record.lastOrderDate}</p>

                                                {/* Priority */}
                                                <p className="text-[14px] font-[500] text-[#F05D3D]">
                                                    • {record.priority}
                                                </p>

                                                <div className="flex flex-col">
                                                    {/* Visa Type */}
                                                    <p className="text-[12px] font-[400] text-[#727A90]">{record.visaType}</p>

                                                    {/* Country */}
                                                    <p className="flex items-center gap-2">
                                                        <Image src={FlagImage} alt="Flag Image" />
                                                        <span className="text-[14px] font-[500] text-[#24282E]">{record.country}</span>
                                                    </p>
                                                </div>
                                                {/* Chip Component Called */}
                                                <Chip status={record.status} />
                                                {/* Actions */}
                                                <span className="flex items-center justify-end gap-2">
                                                    <DropdownMenu>
                                                        <DropdownMenuTrigger>
                                                            <DropdownSVG className="cursor-pointer" />
                                                        </DropdownMenuTrigger>
                                                        <DropdownMenuContent className={styles.dropdownItem}>
                                                            <DropdownMenuItem className="flex items-center p-4">
                                                                <EditSvg className="w-4 h-4" />
                                                                <span className={styles.dropdownText}>Edit</span>
                                                            </DropdownMenuItem>
                                                            <hr />
                                                            <DropdownMenuItem className="flex items-center p-4">
                                                                <DownloadSvg className="w-4 h-4" />
                                                                <span className={styles.dropdownText}>Send Email</span>
                                                            </DropdownMenuItem>
                                                            <hr />
                                                            <DropdownMenuItem className="flex items-center p-4">
                                                                <WhatsappSvg className="w-4 h-4" />
                                                                <span className={styles.dropdownText}>
                                                                    Send Whatsapp
                                                                </span>
                                                            </DropdownMenuItem>
                                                        </DropdownMenuContent>
                                                    </DropdownMenu>
                                                    <EyeSvg className="cursor-pointer" />
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Footer Section */}
                <TableFooter />
            </div>
        </>
    );
}
