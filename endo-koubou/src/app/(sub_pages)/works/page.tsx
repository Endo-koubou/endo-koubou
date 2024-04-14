import { Metadata } from "next";
import { Breadcrumb, PageTitle } from "@/app/components/molecules";
import { WorksSection } from "@/app/components/organisms";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "作品一覧",
};

export default async function Works() {
  return (
    <>
      <div className={styles.head_contents}>
        <Breadcrumb list={[{ label: "作品一覧" }]} />
        <PageTitle title="作品一覧" subtitle="WORKS" />
      </div>
      <WorksSection />
    </>
  );
}
