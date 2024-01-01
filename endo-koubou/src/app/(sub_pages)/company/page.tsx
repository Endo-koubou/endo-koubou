import { Metadata } from "next";
import { getCompany } from "@/app/api/company";
import { getStaffs } from "@/app/api/staffs";
import { Breadcrumb, PageTitle } from "@/app/components/molecules";
import { CompanySection } from "@/app/components/organisms";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "工房情報",
};

export default async function Company() {
  const companyData = await getCompany();
  const staffsData = await getStaffs();

  return (
    <>
      <div className={styles.head_contents}>
        <Breadcrumb list={[{ label: "工房情報" }]} />
        <PageTitle title="工房情報" subtitle="ATELIER" />
      </div>
      <CompanySection
        company={companyData}
        staffs={staffsData}
        className={styles.contents}
      />
    </>
  );
}
