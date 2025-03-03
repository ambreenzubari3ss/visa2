import React from "react";
import styles from "./styles.module.css";
import SearchSvg from "@/Assets/svgs/SearchSvg";
import { Button } from "@/components/ui/button";
import FilterIconSvg from "@/Assets/svgs/FilterIconSvg";

const TableHeaderPage = ({
  header,
  search,
}: {
  header: string;
  search: boolean;
}) => {
  return (
    <>
      <div className="flex items-center justify-between p-4">
        <div className="bg-white rounded-xl ">
          <h2 className={styles.userListText}>{header}</h2>
        </div>

        {/* Search & Filters */}
        <div className="bg-white rounded-xl flex justify-between items-center space-x-2">
          {search && (
            <div className="search-container">
              <div className="search-icon">
                <SearchSvg />
              </div>
              <input
                type="text"
                className={`input-search ${styles.inputField}`}
                placeholder="Search..."
              />
            </div>
          )}

          <div className="flex space-x-2">
            <Button
              className={`${styles.filtersBtn}  flex items-center gap-1 `}
            >
              <FilterIconSvg className="w-4 h-4" />
              <span className={styles.filterBtnText}>Filters</span>
            </Button>
            <Button className={styles.filtersBtn}>
              <span className={styles.filterBtnText}>See More</span>
            </Button>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default TableHeaderPage;
