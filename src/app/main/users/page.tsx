import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Trash2, Filter } from "lucide-react";
import SearchSvg from "@/Assets/svgs/SearchSvg";
import styles from "./styles.module.css";
import PlusGreenSvg from "@/Assets/svgs/PlusGreenSvg";
import CalendarSvg from "@/Assets/svgs/CalendarSvg";

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
        <div className="flex items-center justify-between p-4">
          <div className="bg-white rounded-xl ">
            <h2 className={styles.userListText}>User List</h2>
          </div>

          {/* Search & Filters */}
          <div className="bg-white rounded-xl flex justify-between items-center space-x-2">
            <div className={styles.inputSearch}>
              <div className={styles.inputSearchIcon}>
                <SearchSvg />
              </div>
              <input type="text" className="input-search" placeholder="Search..." />
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" className="flex items-center gap-1">
                <Filter className="w-4 h-4" /> Filters
              </Button>
              <Button variant="outline">See More</Button>
            </div>
          </div>
        </div>
        <hr />

        {/* User Table */}
        <div className="bg-white rounded-xl">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-[14px] font-[500] text-[#727A90]">Users</TableHead>
                <TableHead className={`flex justify-center items-center gap-2 ${styles.tableHeaders}`}>
                  <span><CalendarSvg /></span>
                  <span>Created date</span>
                </TableHead>
                <TableHead className={styles.tableHeaders}>Phone</TableHead>
                <TableHead className={styles.tableHeaders}>Role</TableHead>
                <TableHead className={styles.tableHeaders}>Last Login</TableHead>
                <TableHead className={styles.tableHeaders}>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user, index) => (
                <TableRow key={index} className="hover:bg-gray-50">
                  <TableCell>
                    <div className="flex flex-col">
                      <span className={styles.userName}>{user.name}</span>
                      <span className={styles.userEmail}>{user.email}</span>
                    </div>
                  </TableCell>
                  <TableCell className={`text-center ${styles.userName}`}>{user.date}</TableCell>
                  <TableCell className={`text-center ${styles.userName}`}>{user.phone}</TableCell>
                  <TableCell className="text-center">
                    <span
                      className={`rounded-full text-sm ${user.roleColor}`}
                    >
                      {user.role}
                    </span>
                  </TableCell>
                  <TableCell className={styles.tableHeaders}>{user.lastLogin}</TableCell>
                  <TableCell className="text-center">
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <MoreHorizontal className="cursor-pointer" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600 flex items-center">
                          <Trash2 className="w-4 h-4 mr-2" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <hr />
        {/* Pagination */}
        <div className="flex justify-between items-center my-4 p-4">
          <span className={styles.tableHeaders}>Showing 1-5 from 100</span>
          <div className="flex space-x-1">
            <Button className={styles.footerBtn} variant="outline">&lt;</Button>
            <Button className={styles.activeBtn} variant="outline">
              1
            </Button>
            <Button className={styles.footerBtn} variant="outline">2</Button>
            <Button className={styles.footerBtn} variant="outline">3</Button>
            <Button className={styles.footerBtn} variant="outline">...</Button>
            <Button className={styles.footerBtn} variant="outline">&gt;</Button>
          </div>
        </div>
      </div>
    </>
  );
}
