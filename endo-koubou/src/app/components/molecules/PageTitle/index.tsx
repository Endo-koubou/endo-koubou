import { Typography } from "@/app/components/atoms";
import styles from "./page_title.module.scss";

export type PagetitleProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

export function PageTitle({ title, subtitle, className }: PagetitleProps) {
  return (
    <div className={`${styles.wrapper} ${className}`}>
      <div className={styles.inner}>
        <Typography variant="h1" className={styles.title}>
          {title}
        </Typography>
        {subtitle && (
          <Typography variant="span" className={styles.sub_title}>
            {subtitle}
          </Typography>
        )}
      </div>
    </div>
  );
}
