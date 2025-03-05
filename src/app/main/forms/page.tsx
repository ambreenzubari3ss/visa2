"use client";
import { useState } from "react";
import styles from "./styles.module.css";
import tableStyles from "../table.styles.module.css";
import PlusGreenSvg from "@/Assets/svgs/PlusGreenSvg";
import GeneralData from "@/components/ui/tableheader/page";
import TableFooterComponent from "@/components/ui/tablefooter/page";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import EditSvg from "@/Assets/svgs/EditSvg";
import TrashSvg from "@/Assets/svgs/TrashSvg";
import { Button } from "@/components/ui/button";
import DropdownSVG from "@/Assets/svgs/DropdownSVG";

const forms = [
  {
    id: "#1235",
    name: "Visa form name here",
    started: 86,
    paid: 86,
    revenue: "$200.00",
  },
  {
    id: "#1234",
    name: "Visa form name here",
    started: 86,
    paid: 86,
    revenue: "$200.00",
  },
  {
    id: "#1232",
    name: "Visa form name here",
    started: 86,
    paid: 86,
    revenue: "$200.00",
  },
  {
    id: "#1231",
    name: "Visa form name here",
    started: 86,
    paid: 86,
    revenue: "$200.00",
  },
  // Add more sample data as needed
];

export default function Forms() {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      {/* Page Header */}
      <div className="flex justify-between mt-3">
        <h1 className={styles.header}>Manage Visa forms</h1>
        <button type="button" className={styles.createFormBtn}>
          <PlusGreenSvg className={styles.btnPlusIcon} />
          Create New Form
        </button>
      </div>

      <div className={tableStyles.mainContainer}>
        {/* Header */}
        <GeneralData
          search={true}
          header="Visa Lists"
          showFilters={true}
          showSeeMore={true}
        />

        {/* Forms Table */}
        <div className="bg-white rounded-xl w-ful">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className={tableStyles.tableHeaders}>
                  Visa Id & Name
                </TableHead>
                <TableHead className={tableStyles.tableHeaders}>
                  # of started
                </TableHead>
                <TableHead className={tableStyles.tableHeaders}>
                  # of paid
                </TableHead>
                <TableHead>
                  <div className="flex items-center gap-2">
                    <span className={tableStyles.tableHeaders}>
                      Total Revenue
                    </span>
                  </div>
                </TableHead>
                <TableHead className={` w-[20px] ${tableStyles.tableHeaders}`}>
                  <span className="flex items-center  gap-2 ">
                    Actions
                    <DropdownSVG />
                  </span>
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {forms.map((form) => (
                <TableRow key={form.id} className="hover:bg-gray-50">
                  <TableCell>
                    <div className="flex flex-col">
                      <span className={tableStyles.id}>{form.id}</span>
                      <span className={tableStyles.userName}>{form.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className={tableStyles.userName}>
                    {form.started}
                  </TableCell>
                  <TableCell className={tableStyles.userName}>
                    {form.paid}
                  </TableCell>
                  <TableCell className={tableStyles.userName}>
                    {form.revenue}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center  gap-4">
                      <EditSvg className="w-[20px] h-[20px]"/>
                      <TrashSvg className="w-[20px] h-[20px]"/>
                      <Button className={styles.copyBtn}>
                        Copy form iframe code
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Footer Section */}
        <TableFooterComponent
          total={forms.length}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
}
