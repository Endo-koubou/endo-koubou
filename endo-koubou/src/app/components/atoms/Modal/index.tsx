"use client";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import styles from "./modal.module.scss";

export type ModalProps = {
  isShow: boolean;
  setIsShow: Dispatch<SetStateAction<boolean>>;
  children: React.ReactNode;
  className?: string;
};

export function Modal({ isShow, setIsShow, children, className }: ModalProps) {
  const modalClass = isShow ? "show" : "hidden";

  useEffect(() => {
    if (isShow) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => document.body.classList.remove("no-scroll");
  }, [isShow]);

  return (
    <div
      className={`${styles.screen} ${styles[modalClass]} ${className}`}
      onClick={() => setIsShow(!isShow)}
    >
      {children}
    </div>
  );
}
