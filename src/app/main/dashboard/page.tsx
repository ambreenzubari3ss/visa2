"use client";
import Calendar from "@/components/ui/calendar/calendar";
import RevenueSvg from "@/Assets/svgs/RevenueSvg";
import styles from "./styles.module.css";
import Graph1Svg from "@/Assets/svgs/Graph1Svg";
import LeftIconSvg from "@/Assets/svgs/RightIconSvg";
import UserSvg from "@/Assets/svgs/UserSvg";
import Graph2Svg from "@/Assets/svgs/Graph2Svg";
import Graph3Svg from "@/Assets/svgs/Grapg3Svg";
import ApplicationSvg from "@/Assets/svgs/ApplicationSvg";
import GeneralData from "../tableheader/page";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import tableStyles from "../table.styles.module.css";
import TableFooter from "../tablefooter/page";
import DropdownSVG from "@/Assets/svgs/DropdownSVG";

export default function Dashboard() {
  const customers = [
    {
      id: "#12331",
      name: "John Bushmill",
      phone: "+351350335312",
      email: "Johnb@mail.com",
      date: "26 July 2024",
      orders: 30,
    },
    {
      id: "#12331",
      name: "Ilham Budi Agung",
      phone: "+351350335312",
      email: "Johnb@mail.com",
      date: "26 July 2024",
      orders: 30,
    },
    {
      id: "#12331",
      name: "Mohammad Karim",
      phone: "+351350335312",
      email: "Johnb@mail.com",
      date: "26 July 2024",
      orders: 30,
    },
    {
      id: "#12331",
      name: "Linda Blair",
      phone: "+351350335312",
      email: "Johnb@mail.com",
      date: "26 July 2024",
      orders: 30,
    },
    {
      id: "#12331",
      name: "Josh Adam",
      phone: "+351350335312",
      email: "Johnb@mail.com",
      date: "26 July 2024",
      orders: 30,
    },
  ];
  // const [selectedDate, setSelectedDate] = useState<Date>();
  // const [month, setMonth] = useState(new Date(2025, 1)); // February 2025
  // const [isOpen, setIsOpen] = useState(false);

  // const handleNavigation = (direction: 'previous' | 'next') => {
  //     setMonth((prevMonth) => {
  //         const newMonth = new Date(prevMonth);
  //         newMonth.setMonth(newMonth.getMonth() + (direction === 'next' ? 1 : -1));
  //         return newMonth;
  //     });
  // };

  // const quickActions = {
  //     today: () => {
  //         const today = new Date();
  //         setSelectedDate(today);
  //         setMonth(today);
  //     },
  //     yesterday: () => {
  //         const date = new Date();
  //         date.setDate(date.getDate() - 1);
  //         setSelectedDate(date);
  //         setMonth(date);
  //     },
  //     lastWeek: () => {
  //         const date = new Date();
  //         date.setDate(date.getDate() - 7);
  //         setSelectedDate(date);
  //         setMonth(date);
  //     },
  //     last10Days: () => {
  //         const date = new Date();
  //         date.setDate(date.getDate() - 10);
  //         setSelectedDate(date);
  //         setMonth(date);
  //     }
  // };

  return (
    <>
      <div className="container ">
        <div className="w-full flex flex-col items-center">
          <div className="flex justify-between w-full py-5">
            <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
            <div>
              <Calendar />
              {/* <Popover open={isOpen} onOpenChange={setIsOpen}>
                                <PopoverTrigger className="flex items-center gap-2 px-4 py-2 border rounded-lg shadow-sm bg-white text-gray-700">
                                    <CalendarIcon className="w-4 h-4" />
                                    Last 10 Days
                                </PopoverTrigger>

                                <PopoverContent className="w-80 bg-white rounded-lg shadow-lg border p-4" align="start">
                                    <div className="mb-4">
                                        <div className="flex justify-between items-center mb-4">
                                            <span className="text-lg font-medium text-gray-900">Calendar</span>
                                            <div className="flex gap-2">
                                                <button className="p-1 hover:bg-gray-200 rounded" onClick={() => handleNavigation('previous')}>
                                                    <LeftIcon className="w-5 h-5 text-gray-600" />
                                                </button>
                                                <button className="p-1 hover:bg-gray-200 rounded rotate-180" onClick={() => handleNavigation('next')}>
                                                    <LeftIcon className="w-5 h-5 text-gray-600" />
                                                </button>
                                            </div>
                                        </div>

                                        <DayPicker
                                            mode="single"
                                            month={month}
                                            selected={selectedDate}
                                            onSelect={setSelectedDate}
                                            classNames={{
                                                months: "w-full",
                                                head_row: "flex justify-between mb-2",
                                                head_cell: "text-gray-600 text-xs font-medium w-10 h-6",
                                                row: "flex justify-between w-full mb-1",
                                                day: "w-10 h-10 font-[400] text-[14px] text-[#727A90]",
                                                selected: styles.selectedBtn,
                                                day_today: "bg-green-300 text-white",
                                                nav: "hidden",
                                                today: "text-[#42DA82]"
                                            }}
                                        />
                                    </div>

                                    <div className="mt-4 pt-4 border-t">
                                        <div className="grid grid-col gap-2">
                                            <span className='font-[600] text-[16px] text-[#24282E]'>Custom Dates</span>
                                            <button className={styles.btncalendar} onClick={quickActions.today}>
                                                Today {selectedDate?.toDateString() === new Date().toDateString() && "✓"}
                                            </button>
                                            <button className={styles.btncalendar} onClick={quickActions.yesterday}>
                                                Yesterday
                                            </button>
                                            <button className={styles.btncalendar} onClick={quickActions.lastWeek}>
                                                Last Week
                                            </button>
                                            <button className={styles.btncalendar} onClick={quickActions.last10Days}>
                                                Last 10 Days
                                            </button>
                                        </div>
                                    </div>
                                </PopoverContent>
                            </Popover */}
            </div>
          </div>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Total Revenue */}
          <div className="card">
            <div className={styles.containerdashboard}>
              <div className="p-5">
                <div className="flex items-center gap-2">
                  <RevenueSvg />
                  <span className={styles.cardHeader}>Total Revenue</span>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex flex-col">
                    <h2 className="text-[24px] font-[600] text-[#24282E]">
                      $75,000
                    </h2>
                    <div className="flex gap-4">
                      <span className="text-[14px] font-[700] text-[#009499]">
                        10%
                      </span>
                      <span className="text-[14px] font-[400] text-[#727A90]">
                        +750%
                      </span>
                    </div>
                  </div>
                  <Graph1Svg />
                </div>
              </div>
              <hr className="my-1" />
              <div className="flex justify-between items-center p-5">
                <span className="text-[14px] font-[600] text-[#42DA82]">
                  See More
                </span>
                <LeftIconSvg />
              </div>
            </div>
          </div>

          {/* Total New Customers */}
          <div className="card">
            <div className={styles.containerdashboard}>
              <div className="p-5">
                <div className="flex items-center gap-2">
                  <UserSvg />
                  <span className={styles.cardHeader}>Total New Customers</span>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex flex-col">
                    <h2 className="text-[24px] font-[600] text-[#24282E]">
                      31,300
                    </h2>
                    <div className="flex gap-2">
                      <span className="text-[14px] font-[700] text-[#009499]">
                        5%
                      </span>
                      <span className="text-[14px] font-[400] text-[#727A90]">
                        +156
                      </span>
                    </div>
                  </div>
                  <Graph2Svg />
                </div>
              </div>
              <hr className="my-1" />
              <div className="flex justify-between items-center p-5">
                <span className="text-[14px] font-[600] text-[#42DA82]">
                  See More
                </span>
                <LeftIconSvg />
              </div>
            </div>
          </div>

          {/* Applications to Apply */}
          <div className="card">
            <div className={styles.containerdashboard}>
              <div className="p-5">
                <div className="flex items-center gap-2">
                  <ApplicationSvg />
                  <span className={styles.cardHeader}>
                    Applications to Apply
                  </span>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex flex-col">
                    <h2 className="text-[24px] font-[600] text-[#24282E]">
                      26
                    </h2>
                    <div className="flex gap-2">
                      <span className="text-[14px] font-[700] text-[#009499]">
                        10%
                      </span>
                    </div>
                  </div>
                  <Graph3Svg />
                </div>
              </div>
              <hr className="my-1" />
              <div className="flex justify-between items-center p-5">
                <span className="text-[14px] font-[600] text-[#42DA82]">
                  See More
                </span>
                <LeftIconSvg />
              </div>
            </div>
          </div>
        </div>

        <div className={tableStyles.mainContainer}>
          {/* Header */}
          <GeneralData search={false} header="New Customers" />
          {/* User Table */}
          <div className="bg-white rounded-xl">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="whitespace-nowrap">
                    <span className="flex items-center justify-center gap-2">
                      <span className={tableStyles.tableHeaders}>#id</span>
                      <DropdownSVG className="w-2 h-2" />
                    </span>
                  </TableHead>
                  <TableHead className="text-center whitespace-nowrap">
                    <span className={tableStyles.tableHeaders}>Name</span>
                  </TableHead>
                  <TableHead className={tableStyles.tableHeaders}>
                    Phone
                  </TableHead>
                  <TableHead className="text-center whitespace-nowrap">
                    <span className={tableStyles.tableHeaders}>Email</span>
                  </TableHead>

                  <TableHead className="text-center whitespace-nowrap">
                    <span className={tableStyles.tableHeaders}>
                      Created date
                    </span>
                  </TableHead>
                  <TableHead className="text-center whitespace-nowrap">
                    <span className="flex items-center justify-center gap-2">
                      <span className={tableStyles.tableHeaders}>
                        #total orders
                      </span>
                      <DropdownSVG className="w-2 h-2" />
                    </span>
                  </TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {customers.map((user, index) => (
                  <TableRow key={index} className="hover:bg-gray-50">
                    <TableCell
                      className={`text-center ${tableStyles.userName}`}
                    >
                      {user.id}
                    </TableCell>
                    <TableCell
                      className={`text-center ${tableStyles.userName}`}
                    >
                      {user.name}
                    </TableCell>
                    <TableCell
                      className={`text-center ${tableStyles.userName}`}
                    >
                      {user.phone}
                    </TableCell>
                    <TableCell
                      className={`text-center ${tableStyles.tableHeaders}`}
                    >
                      {user.email}
                    </TableCell>
                    <TableCell
                      className={`text-center ${tableStyles.userName}`}
                    >
                      {user.email}
                    </TableCell>
                    <TableCell
                      className={`text-center ${tableStyles.userName}`}
                    >
                      {user.orders}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          {/* Footer Section */}
          <TableFooter />
        </div>
      </div>
    </>
  );
}
