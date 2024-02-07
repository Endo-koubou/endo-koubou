"use client";
import Image from "next/image";
import { useState } from "react";
import { Modal } from "@/app/components/atoms";
import styles from "./image_modal.module.scss";
import { FaXmark } from "react-icons/fa6";

export type ImageModalProps = {
  src: string;
  index: number;
  className?: string;
};

export function ImageModal({ src, index, className }: ImageModalProps) {
  const [isModalShow, setIsModalShow] = useState<boolean>(false);

  return (
    <div className={className}>
      <Image
        src={src}
        fill
        objectFit="cover"
        alt={`資料画像${index + 1}`}
        className={styles.image}
        onClick={() => setIsModalShow(true)}
      />
      <Modal isShow={isModalShow} setIsShow={setIsModalShow}>
        <div className={styles.modal_contents}>
          <FaXmark className={styles.icon_close} />
          <Image
            src={src}
            fill
            objectFit="contain"
            alt={`資料画像${index + 1}`}
            className={styles.modal_image}
          />
        </div>
      </Modal>
    </div>
  );
}
