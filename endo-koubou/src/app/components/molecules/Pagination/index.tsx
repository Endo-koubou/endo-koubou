"use client";
import React from "react";
import { Button } from "@/app/components/atoms";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import styles from "./pagination.module.scss";

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
  const isSelectedFirst = currentPage === 1;
  const isSelectedLast = currentPage === totalPages;

  // ページネーションのボタンを生成（常に最大10個表示）
  const pagesButtonList = [];
  let startPage = 1;
  let endPage = totalPages;

  // 11個以上のボタンがある場合
  if (totalPages > 10) {
    // 最初と最後から10以内の範囲が選択されている場合
    if (currentPage <= 6) {
      endPage = 10;
    } else if (currentPage + 5 >= totalPages) {
      startPage = totalPages - 9;
    } else {
      startPage = currentPage - 4;
      endPage = currentPage + 5;
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
