import "./typography.module.scss";
import styles from "./typography.module.scss";

type TypographyProps = {
  variant: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  children: React.ReactNode;
  vertical?: boolean;
  className?: string;
};

export function Typography({
  variant,
  children,
  vertical = false,
  className,
}: TypographyProps) {
  const classVertical = vertical ? "vertical" : "";

  switch (variant) {
    case "h1":
      return (
        <h1 className={`${styles[classVertical]} ${styles.h1} ${className}`}>
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2 className={`${styles[classVertical]} ${styles.h2} ${className}`}>
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3 className={`${styles[classVertical]} ${styles.h3} ${className}`}>
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4 className={`${styles[classVertical]} ${styles.h4} ${className}`}>
          {children}
        </h4>
      );
    case "p":
      return (
        <p className={`${styles[classVertical]} ${styles.p} ${className}`}>
          {children}
        </p>
      );
    case "span":
      return (
        <span
          className={`${styles[classVertical]} ${styles.span} ${className}`}
        >
          {children}
        </span>
      );
    default:
      return (
        <span
          className={`${styles[classVertical]} ${styles.span} ${className}`}
        >
          {children}
        </span>
      );
  }
}
