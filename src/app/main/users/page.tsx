'use client'
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
import TimeSvg from "@/Assets/svgs/TimeSvg";
import DropdownSVG from "@/Assets/svgs/DropdownSVG";
import TrashSvg from "@/Assets/svgs/TrashSvg";
import UserSvg from "@/Assets/svgs/UserSvg";
import EditSvg from "@/Assets/svgs/EditSvg";
import DownloadSvg from "@/Assets/svgs/DownloadSvg";
import GeneralData from '../tableheader/page'
import TableFooter from "../tablefooter/page";
const users = [
  {
    name: "John Bushmill",
    email: "johnb@mail.com",
    date: "26 July 2024",
    phone: "+351530335312",
    role: "Admin",
    lastLogin: "2d ago",
    roleColor: `${styles.roleBtnRed}`,
  },
  {
    name: "Jane Doe",
    email: "janed@mail.com",
    date: "26 July 2024",
    phone: "+351530335312",
    role: "User",
    lastLogin: "2d ago",
    roleColor: `${styles.roleBtnBlue}`,
  },
  {
    name: "Alice Johnson",
    email: "alicej@mail.com",
    date: "26 July 2024",
    phone: "+351530335312",
    role: "Editor",
    lastLogin: "2d ago",
    roleColor: `${styles.roleBtnRed}`,
  },
  {
    name: "Emily Brown",
    email: "emilyb@mail.com",
    date: "26 July 2024",
    phone: "+351530335312",
    role: "User",
    lastLogin: "30hr ago",
    roleColor: `${styles.roleBtnBlue}`,
  },
  {
    name: "Michael Wilson",
    email: "michaelw@mail.com",
    date: "26 July 2024",
    phone: "+351530335312",
    role: "Admin",
    lastLogin: "2d ago",
    roleColor: `${styles.roleBtnGreen}`,
  },
  {
    name: "Sarah Clark",
    email: "sarahc@mail.com",
    date: "26 July 2024",
    phone: "+351530335312",
    role: "Editor",
    lastLogin: "4hr ago",
    roleColor: `${styles.roleBtnBlue}`,
  },
  {
    name: "Kevin Miller",
    email: "kevinm@mail.com",
    date: "26 July 2024",
    phone: "+351530335312",
    role: "User",
    lastLogin: "2d ago",
    roleColor: `${styles.roleBtnRed}`,
  },
];

export default function UserTable() {
  return (
    <>
      <div className="flex justify-between p-5 mt-3">
        <h1 className={styles.header}>Manage users</h1>
        <button type="button" className={styles.userBtn}>
          <PlusGreenSvg className={styles.btnPlusIcon} />
          Add New User
        </button>
      </div>
      <div className={styles.mainContainer}>
        {/* Header */}
        <GeneralData search={true} header="User List" />
        {/* User Table */}
        <div className="bg-white rounded-xl">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-[14px] font-[500] text-[#727A90]">Users</TableHead>
                <TableHead className="text-center whitespace-nowrap">
                  <span className="inline-flex items-center gap-2">
                    <CalendarSvg className="w-4 h-4" />
                    <span className={tableStyles.tableHeaders}>Created date</span>
                  </span>
                </TableHead>

                <TableHead className="text-center whitespace-nowrap">
                  <span className="inline-flex items-center gap-2">
                    <PhoneSvg className="w-4 h-4" />
                    <span className={tableStyles.tableHeaders}>Phone</span>
                  </span>
                </TableHead>

                <TableHead className={tableStyles.tableHeaders}>Role</TableHead>
                <TableHead className="text-center whitespace-nowrap">
                  <span className="inline-flex items-center gap-2">
                    <TimeSvg className="w-4 h-4" />
                    <span className={tableStyles.tableHeaders}>Last Login</span>
                  </span>
                </TableHead>
                <TableHead className="text-center whitespace-nowrap">
                  <span className="inline-flex items-center gap-2">
                    <span className={tableStyles.tableHeaders}>Actions</span>
                    <DropdownSVG />
                  </span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user, index) => (
                <TableRow key={index} className="hover:bg-gray-50">
                  <TableCell>
                    <div className="flex flex-col">
                      <span className={tableStyles.userName}>{user.name}</span>
                      <span className={tableStyles.userEmail}>{user.email}</span>
                    </div>
                  </TableCell>
                  <TableCell className={`text-center ${tableStyles.userName}`}>{user.date}</TableCell>
                  <TableCell className={`text-center ${tableStyles.userName}`}>{user.phone}</TableCell>
                  <TableCell className="text-center">
                    <span
                      className={`rounded-full text-sm ${user.roleColor}`}
                    >
                      {user.role}
                    </span>
                  </TableCell>
                  <TableCell className={tableStyles.tableHeaders}>{user.lastLogin}</TableCell>
                  <TableCell className="text-center">
                    <span className="flex justify-center align-center gap-2">
                      <DropdownMenu>
                        <DropdownMenuTrigger>
                          <DropdownSVG className="cursor-pointer" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className={styles.dropdownItem}>
                          <DropdownMenuItem className="flex items-center p-4">
                            <UserSvg color='#727A90' className="w-4 h-4" />
                            <span className={styles.dropdownText}>Change Account Type</span>
                          </DropdownMenuItem>
                          <hr />
                          <DropdownMenuItem className="flex items-center p-4">
                            <EditSvg className="w-4 h-4" />
                            <span className={styles.dropdownText}>Edit</span>
                          </DropdownMenuItem>
                          <hr />
                          <DropdownMenuItem className="flex items-center p-4">
                            <DownloadSvg className="w-4 h-4" />
                            <span className={styles.dropdownText}>Resend Invite</span>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                      <TrashSvg className="cursor-pointer" />
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        {/* Footer Section */}
        <TableFooter />
      </div >
    </>
  );
}
