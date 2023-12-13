import { Typography } from "@/app/components/atoms";
import styles from "./toaster.module.scss";

type ToasterProps = {
  type?: "success" | "error";
  message?: string;
};

export function Toaster({
  type = "success",
  message = "default message",
}: ToasterProps) {
  const classType = type;
  return (
    <div className={`${styles.toaster} ${styles[classType]}`}>
      <Typography variant="span">{message}</Typography>
    </div>
  );
}
