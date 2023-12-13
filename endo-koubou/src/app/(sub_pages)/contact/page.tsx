import { Breadcrumb, PageTitle } from "@/app/components/molecules";
import { ContactSection } from "@/app/components/organisms";
import { Metadata } from "next";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "お問い合わせ",
};

export default function Contact() {
  return (
    <>
      <div className={styles.head_contents}>
        <Breadcrumb list={[{ label: "お問い合わせ" }]} />
        <PageTitle title="お問い合わせ" subtitle="CONTACT" />
      </div>
      <ContactSection className={styles.contents} />
    </>
  );
}
