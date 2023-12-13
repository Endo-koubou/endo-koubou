"use client";
import { useState } from "react";
import { Button, Typography } from "@/app/components/atoms";
import { FaArrowDown } from "react-icons/fa6";
import styles from "./read_more.module.scss";

export type ReadMoreProps = {
  children?: React.ReactNode;
  className?: string;
};

export function ReadMore({ children, className }: ReadMoreProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const classIsOpen = isOpen ? "open" : "close";
  return (
    <div className={`${styles.wrapper} ${styles[classIsOpen]} ${className}`}>
      {children}
      {!isOpen && (
        <Button onClick={() => setIsOpen(!isOpen)} className={styles.button}>
          <FaArrowDown />
          <Typography variant="p">もっとみる</Typography>
        </Button>
      )}
    </div>
  );
}
