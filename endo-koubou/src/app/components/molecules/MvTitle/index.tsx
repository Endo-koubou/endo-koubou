import { FadeIn, Typography } from "@/app/components/atoms";
import styles from "./mv_title.module.scss";

export function MvTitle() {
  return (
    <Typography variant="h1" className={styles.title}>
      <FadeIn fadeType="up" delay={2}>
        舞台美術を
      </FadeIn>
      <FadeIn fadeType="up" delay={3}>
        もっと身近に
      </FadeIn>
    </Typography>
  );
}
