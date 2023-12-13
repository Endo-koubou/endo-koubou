import Link from "next/link";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { Button, Typography } from "@/app/components/atoms";
import styles from "./trans_button.module.scss";

export type TransButtonProps = {
  direction: "back" | "next";
  path: string;
  label?: string;
};

export function TransButton({ direction, path, label }: TransButtonProps) {
  const classDirection = direction;
  return (
    <Link href={path}>
      <Button color="primary">
        <span className={`${styles.contents} ${styles[classDirection]}`}>
          <Typography variant="p">{label}</Typography>
          <span className={styles.icon}>
            {direction === "next" ? (
              <FaArrowRight className={styles.icon_arrow} />
            ) : (
              <FaArrowLeft className={styles.icon_arrow} />
            )}
          </span>
        </span>
      </Button>
    </Link>
  );
}
