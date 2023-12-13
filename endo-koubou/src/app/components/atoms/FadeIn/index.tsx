"use client";
import { useOnScreen } from "@/app/hooks/useOnScreen";
import styles from "./fade_in.module.scss";

export type FadeInProps = {
  delay?: 1 | 2 | 3;
  fadeType?: "in" | "up";
  children: React.ReactNode;
};

export function FadeIn({ delay, fadeType, children }: FadeInProps) {
  const [ref, isOnScreen] = useOnScreen();
  const classDelay = delay ? `delay_${delay}` : "";
  const classDirection = fadeType ? fadeType : "";
  const classFadeType = fadeType ? `fade_${fadeType}` : "";

  return (
    <div
      ref={ref}
      className={`${styles.box} ${styles[classDelay]} ${
        styles[classDirection]
      } ${isOnScreen ? styles[classFadeType] : ""}`}
    >
      {children}
    </div>
  );
}
