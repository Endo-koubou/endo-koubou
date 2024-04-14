"use client";
import React from "react";
import { Button } from "@/app/components/atoms";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import styles from "./pagination.module.scss";
import useResponsive from "@/app/hooks/useResponsive";

export type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  totalPages = 20;
  const isSelectedFirst = currentPage === 1;
  const isSelectedLast = currentPage === totalPages;
  const isPc = useResponsive("pc");

  // ページネーションのボタンを生成（常に最大10個表示）
  const pagesButtonList = [];
  let startPage = 1;
  let endPage = totalPages;

  // Button range determination based on screen type
  if (totalPages > (isPc ? 10 : 3)) {
    // Define the number of buttons to display on each side of the current page
    const sideButtonsCount = isPc ? 4 : 1; // 1 on each side for mobile, 4 for desktop

    if (currentPage <= sideButtonsCount + 1) {
      endPage = isPc ? 10 : 3; // Show the first few pages
    } else if (currentPage + sideButtonsCount >= totalPages) {
      startPage = totalPages - (isPc ? 9 : 2); // Show the last few pages
    } else {
      startPage = currentPage - sideButtonsCount;
      endPage = currentPage + sideButtonsCount;
    }
  }

  // 最初のページボタン
  if (startPage > 1) {
    pagesButtonList.push(
      <Button
        key={1}
        onClick={() => onPageChange(1)}
        className={styles.button_base}
      >
        1
      </Button>,
      <span key="ellipsis-start" className={styles.ellipsis}>
        ...
      </span>
    );
  }

  // メインのページボタン
  for (let i = startPage; i <= endPage; i++) {
    const buttonClassNames = `${styles.button_base} ${
      currentPage === i ? styles.active : ""
    }`;
    pagesButtonList.push(
      <Button
        key={i}
        onClick={() => onPageChange(i)}
        className={buttonClassNames}
      >
        {i}
      </Button>
    );
  }

  // 最後のページボタン
  if (endPage < totalPages) {
    pagesButtonList.push(
      <span key="ellipsis-end" className={styles.ellipsis}>
        ...
      </span>,
      <Button
        key={totalPages}
        onClick={() => onPageChange(totalPages)}
        className={styles.button_base}
      >
        {totalPages}
      </Button>
    );
  }

  return (
    <div className={styles.pagination}>
      <Button
        className={`${styles.button_base} ${
          isSelectedFirst ? styles.disable : ""
        }`}
        color="base"
        onClick={() => onPageChange(currentPage - 1)}
      >
        <FaArrowLeft className={styles.icon_arrow} />
      </Button>

      <div className={styles.pages_wrapper}>{pagesButtonList}</div>

      <Button
        className={`${styles.button_base}  ${
          isSelectedLast ? styles.disable : ""
        }`}
        color="base"
        onClick={() => onPageChange(currentPage + 1)}
      >
        <FaArrowRight className={styles.icon_arrow} />
      </Button>
    </div>
  );
}

export default Pagination;
