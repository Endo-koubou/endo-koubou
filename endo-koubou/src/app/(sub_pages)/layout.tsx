import "@/app/globals.scss";
import { Toaster } from "react-hot-toast";
import styles from "./layout.module.scss";

export default function SubPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className={styles.contents}>
      {children} <Toaster />
    </section>
  );
}
