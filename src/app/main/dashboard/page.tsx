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
import GeneralData from "../../../components/ui/tableheader/page";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import tableStyles from "../table.styles.module.css";
import TableFooter from "../../../components/ui/tablefooter/page";
import DropdownSVG from "@/Assets/svgs/DropdownSVG";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store";
import { fetchCustomers, setCurrentPage } from "@/store/slices/customersSlice";
import { PAGINATION_CONFIG } from "@/config/pagination";
import AnalyticsComponent from "@/components/ui/AnalyticsComponent/page";

export default function Dashboard() {
  const dispatch = useAppDispatch();
  const { customers, isLoading, error, currentPage, total } = useAppSelector(
    (state) => state.customers
  );

  useEffect(() => {
    dispatch(
      fetchCustomers({
        skip: (currentPage - 1) * PAGINATION_CONFIG.DEFAULT_PAGE_SIZE,
      })
    );
  }, [dispatch, currentPage]);

  const handlePageChange = (page: number) => {
    const totalPages = Math.ceil(total / PAGINATION_CONFIG.DEFAULT_PAGE_SIZE);
    if (page >= 1 && page <= totalPages) {
      dispatch(setCurrentPage(page));
    }
  };

  const DashboardCard = ({
    icon: Icon,
    title,
    amount,
    percentage,
    change,
    graph: Graph,
  }) => {
    return (
      <div className="border border-gray-300 w-full h-[208px] rounded-2xl bg-white">
        <div className="p-5">
          <div className="flex items-center gap-2">
            <Icon />
            <span className="font-medium text-lg text-gray-500">{title}</span>
          </div>
          <div className="flex items-center justify-between mt-4">
            <div className="flex flex-col">
              <h2 className="text-2xl font-semibold text-gray-900">{amount}</h2>
              <div className="flex gap-4">
                <span className="text-sm font-bold text-teal-600">
                  {percentage}
                </span>
                {change && (
                  <span className="text-sm font-normal text-gray-500">
                    {change}
                  </span>
                )}
              </div>
            </div>
            <Graph />
          </div>
        </div>
        <hr className="my-1" />
        <div className="flex justify-between items-center p-5">
          <span className="text-sm font-semibold text-green-500">See More</span>
          <LeftIconSvg />
        </div>
      </div>
    );
  };

  const LoadingSkeleton = () => (
    <>
      {[...Array(PAGINATION_CONFIG.DEFAULT_PAGE_SIZE)].map((_, index) => (
        <TableRow key={index}>
          <TableCell>
            <div className="h-4 w-16 bg-gray-200 rounded"></div>
          </TableCell>
          <TableCell>
            <div className="h-4 w-24 bg-gray-200 rounded"></div>
          </TableCell>
          <TableCell>
            <div className="h-4 w-24 bg-gray-200 rounded"></div>
          </TableCell>
          <TableCell>
            <div className="h-4 w-32 bg-gray-200 rounded"></div>
          </TableCell>
          <TableCell>
            <div className="h-4 w-24 bg-gray-200 rounded"></div>
          </TableCell>
          <TableCell>
            <div className="h-4 w-16 bg-gray-200 rounded"></div>
          </TableCell>
        </TableRow>
      ))}
    </>
  );

  const NoDataRow = () => (
    <TableRow>
      <TableCell colSpan={6} className=" py-6">
        <p className="text-sm font-medium text-gray-400">No customers found</p>
      </TableCell>
    </TableRow>
  );

  return (
    <>
      <div className="w-full ">
        <div className="w-full flex flex-col items-center">
          <div className="flex justify-between w-full py-5">
            <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
            <div>
              <Calendar />
            </div>
          </div>
        </div>
        {/* Dashboard Cards */}

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <DashboardCard
            icon={RevenueSvg}
            title="Total Revenue"
            amount="$75,000"
            percentage="10%"
            change="+750%"
            graph={Graph1Svg}
          />
          <DashboardCard
            icon={UserSvg}
            title="Total New Customers"
            amount="31,300"
            percentage="5%"
            change="+156"
            graph={Graph2Svg}
          />
          <DashboardCard
            icon={ApplicationSvg}
            title="Applications to Apply"
            amount="26"
            change="+156"
            percentage="10%"
            graph={Graph3Svg}
          />
        </div>
        <div className={tableStyles.mainContainer}>
          {/* Header */}
          <GeneralData search={false} header="New Customers" />
          {/* User Table */}
          <div className="bg-white rounded-xl">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className={tableStyles.tableHeaders}>
                    <span className="flex items-center gap-2">
                      <span className={tableStyles.tableHeaders}>#id</span>
                      <DropdownSVG className="w-2 h-2" />
                    </span>
                  </TableHead>
                  <TableHead className={tableStyles.tableHeaders}>
                    <span className={tableStyles.tableHeaders}>Name</span>
                  </TableHead>
                  <TableHead className={tableStyles.tableHeaders}>
                    Phone
                  </TableHead>
                  <TableHead className={tableStyles.tableHeaders}>
                    <span className={tableStyles.tableHeaders}>Email</span>
                  </TableHead>

                  <TableHead className={tableStyles.tableHeaders}>
                    <span className={tableStyles.tableHeaders}>
                      Created date
                    </span>
                  </TableHead>
                  <TableHead className={tableStyles.tableHeaders}>
                    <span className="flex items-center  gap-2">
                      <span className={tableStyles.tableHeaders}>
                        #total orders
                      </span>
                      <DropdownSVG className="w-2 h-2" />
                    </span>
                  </TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {isLoading ? (
                  <LoadingSkeleton />
                ) : customers.length === 0 ? (
                  <NoDataRow />
                ) : (
                  customers.map((customer) => (
                    <TableRow key={customer.id} className="hover:bg-gray-50">
                      <TableCell className={` ${tableStyles.userName}`}>
                        {customer.id}
                      </TableCell>
                      <TableCell className={` ${tableStyles.userName}`}>
                        {customer.name}
                      </TableCell>
                      <TableCell className={` ${tableStyles.userName}`}>
                        {customer.phone}
                      </TableCell>
                      <TableCell className={` ${tableStyles.tableHeaders}`}>
                        {customer.email}
                      </TableCell>
                      <TableCell className={` ${tableStyles.userName}`}>
                        {new Date(customer.created_at).toLocaleDateString()}
                      </TableCell>
                      <TableCell className={` ${tableStyles.userName}`}>
                        {customer.total_applications}
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
          {/* Footer Section */}
          <TableFooter
            total={total}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </>
  );
}
