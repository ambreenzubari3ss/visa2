import React from 'react';
import { Button } from "@/components/ui/button";
import RightIconSvg from "@/Assets/svgs/RightSvg";
import LeftSvg from "@/Assets/svgs/LeftSvg";
import styles from "./styles.module.css";

const TableFooter = () => {
    return (
        <>
            <hr />
            {/* Pagination */}
            <div className="flex justify-between items-center my-4 p-4">
                <span className={styles.tableHeaders}>Showing 1-5 from 100</span>
                <div className="flex space-x-1">
                    <Button className={styles.footerBtn} variant="outline"><LeftSvg className={styles.footerIconBtn} /></Button>
                    <Button className={styles.activeBtn} variant="outline">
                        1
                    </Button>
                    <Button className={styles.footerBtn} variant="outline">2</Button>
                    <Button className={styles.footerBtn} variant="outline">3</Button>
                    <Button className={styles.footerBtn} variant="outline">...</Button>
                    <Button className={styles.footerBtn} variant="outline"><RightIconSvg className={styles.footerIconBtn} /></Button>
                </div>
            </div>
        </>
    )
}

export default TableFooter