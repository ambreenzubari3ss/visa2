"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import RightIconSvg from "@/Assets/svgs/RightSvg";
import LeftSvg from "@/Assets/svgs/LeftSvg";
import styles from "./styles.module.css";
import { useAppDispatch, useAppSelector } from "@/store";
import { fetchUsers, setCurrentPage } from "@/store/slices/usersSlice";

const TableFooter = ({ total = 100, currentPage = 1, limit = 10 }) => {
  const dispatch = useAppDispatch();
  //   const { total, currentPage, limit } = useAppSelector((state) => state.users);
  const totalPages = Math.ceil(total / limit);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      dispatch(setCurrentPage(page));
      dispatch(fetchUsers({ skip: (page - 1) * limit, limit }));
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= Math.min(totalPages, 3); i++) {
      pages.push(
        <Button
          key={i}
          className={currentPage === i ? styles.activeBtn : styles.footerBtn}
          variant="outline"
          onClick={() => handlePageChange(i)}
        >
          {i}
        </Button>
      );
    }
    return pages;
  };

  return (
    <>
      <hr />
      {/* Pagination */}
      <div className="flex justify-between items-center my-4 p-4">
        <span className={styles.tableHeaders}>
          Showing {(currentPage - 1) * limit + 1} to{" "}
          {Math.min(currentPage * limit, total)} of {total}
        </span>
        <div className="flex space-x-1">
          <Button
            className={styles.footerBtn}
            variant="outline"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <LeftSvg className={styles.footerIconBtn} />
          </Button>
          {renderPageNumbers()}
          {totalPages > 3 && (
            <Button className={styles.footerBtn} variant="outline">
              ...
            </Button>
          )}
          {totalPages > 3 && (
            <Button
              className={styles.footerBtn}
              variant="outline"
              onClick={() => handlePageChange(totalPages)}
            >
              {totalPages}
            </Button>
          )}
          <Button
            className={styles.footerBtn}
            variant="outline"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <RightIconSvg className={styles.footerIconBtn} />
          </Button>
        </div>
      </div>
    </>
  );
};

export default TableFooter;
