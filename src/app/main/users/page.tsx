import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Trash2, Filter } from "lucide-react";

const users = [
  {
    name: "John Bushmill",
    email: "johnb@mail.com",
    date: "26 July 2024",
    phone: "+351530335312",
    role: "Admin",
    lastLogin: "2d ago",
    roleColor: "bg-red-100 text-red-500",
  },
  {
    name: "Jane Doe",
    email: "janed@mail.com",
    date: "26 July 2024",
    phone: "+351530335312",
    role: "User",
    lastLogin: "2d ago",
    roleColor: "bg-blue-100 text-blue-500",
  },
  {
    name: "Alice Johnson",
    email: "alicej@mail.com",
    date: "26 July 2024",
    phone: "+351530335312",
    role: "Editor",
    lastLogin: "2d ago",
    roleColor: "bg-red-100 text-red-500",
  },
  {
    name: "Emily Brown",
    email: "emilyb@mail.com",
    date: "26 July 2024",
    phone: "+351530335312",
    role: "User",
    lastLogin: "30hr ago",
    roleColor: "bg-blue-100 text-blue-500",
  },
  {
    name: "Michael Wilson",
    email: "michaelw@mail.com",
    date: "26 July 2024",
    phone: "+351530335312",
    role: "Admin",
    lastLogin: "2d ago",
    roleColor: "bg-green-100 text-green-500",
  },
  {
    name: "Sarah Clark",
    email: "sarahc@mail.com",
    date: "26 July 2024",
    phone: "+351530335312",
    role: "Editor",
    lastLogin: "4hr ago",
    roleColor: "bg-red-100 text-red-500",
  },
  {
    name: "Kevin Miller",
    email: "kevinm@mail.com",
    date: "26 July 2024",
    phone: "+351530335312",
    role: "User",
    lastLogin: "2d ago",
    roleColor: "bg-green-100 text-green-500",
  },
];

export default function UserTable() {
  return (
    <div className="container mx-auto p-6">
      {/* Header */}
      <div className="bg-white rounded-xl  p-4">
        <h2 className="text-xl font-semibold">User List</h2>
      </div>

      {/* Search & Filters */}
      <div className="bg-white rounded-xl p-4 mt-4 flex justify-between items-center">
        <Input placeholder="Search..." className="w-1/3 border-gray-300" />
        <div className="flex space-x-2">
          <Button variant="outline" className="flex items-center gap-1">
            <Filter className="w-4 h-4" /> Filters
          </Button>
          <Button variant="outline">See More</Button>
        </div>
      </div>

      {/* User Table */}
      <div className="bg-white rounded-xl p-4 mt-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Users</TableHead>
              <TableHead className="text-center">Created date</TableHead>
              <TableHead className="text-center">Phone</TableHead>
              <TableHead className="text-center">Role</TableHead>
              <TableHead className="text-center">Last Login</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user, index) => (
              <TableRow key={index} className="hover:bg-gray-50">
                <TableCell>
                  <div className="flex flex-col">
                    <span className="font-medium">{user.name}</span>
                    <span className="text-sm text-gray-500">{user.email}</span>
                  </div>
                </TableCell>
                <TableCell className="text-center">{user.date}</TableCell>
                <TableCell className="text-center">{user.phone}</TableCell>
                <TableCell className="text-center">
                  <span
                    className={`px-2 py-1 rounded-full text-sm ${user.roleColor}`}
                  >
                    {user.role}
                  </span>
                </TableCell>
                <TableCell className="text-center">{user.lastLogin}</TableCell>
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

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <span className="text-gray-600">Showing 1-5 from 100</span>
        <div className="flex space-x-1">
          <Button variant="outline">&lt;</Button>
          <Button variant="outline" className="bg-gray-200">
            1
          </Button>
          <Button variant="outline">2</Button>
          <Button variant="outline">3</Button>
          <Button variant="outline">...</Button>
          <Button variant="outline">&gt;</Button>
        </div>
      </div>
    </div>
  );
}
