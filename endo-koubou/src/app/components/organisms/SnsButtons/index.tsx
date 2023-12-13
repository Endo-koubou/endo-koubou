import { SnsButton } from "@/app/components/molecules";
import styles from "./sns_buttons.module.scss";

export type SnsButtonProps = {
  color?: "base" | "primary" | "secondary";
  size?: "s" | "m";
  instagramId?: string;
  xId?: string;
  className?: string;
};

export function SnsButtons({
  color = "secondary",
  size = "s",
  instagramId,
  xId,
  className,
}: SnsButtonProps) {
  const colorClass = `color_${color}`;
  const sizeClass = `size_${size}`;

  return (
    <div
      className={`${styles.wrapper} ${styles[colorClass]} ${styles[sizeClass]} ${className}}`}
    >
      <SnsButton sns="instagram" link={instagramId} />
      <SnsButton sns="x" link={xId} />
    </div>
  );
}
