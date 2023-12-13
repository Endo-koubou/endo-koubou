import { Metadata } from "next";
import { getCompany } from "@/app/api/company";
import { getStaffs } from "@/app/api/staffs";
import { Breadcrumb, PageTitle } from "@/app/components/molecules";
import { CompanySection } from "@/app/components/organisms";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "会社概要",
};

export default async function Company() {
  const companyData = await getCompany();
  const staffsData = await getStaffs();

  return (
    <>
      <div className={styles.head_contents}>
        <Breadcrumb list={[{ label: "会社概要" }]} />
        <PageTitle title="会社概要" subtitle="COMPANY" />
      </div>
      <CompanySection
        company={companyData}
        staffs={staffsData}
        className={styles.contents}
      />
    </>
  );
}
