import { Company } from "@/app/interface/company";
import { Typography } from "@/app/components/atoms";
import { PageTitle } from "../../molecules";
import { Staff } from "@/app/interface/staff";
import { SnsButtons } from "@/app/components/organisms";
import styles from "./company_section.module.scss";

export type ContactSectionProps = {
  company: Company;
  staffs: Staff[];
  className?: string;
};

export function CompanySection({
  company,
  staffs,
  className,
}: ContactSectionProps) {
  return (
    <div className={`${styles.contents} ${className}`}>
      <section>
        <dl className={styles.info_data}>
          <dt>社名</dt>
          <dd>{company.companyName}</dd>
          <dt>設立年</dt>
          <dd>{company.yearEstablished.substring(0, 4)}年</dd>
          <dt>代表所在地</dt>
          <dd>{company.location}</dd>
          <dt>代表者</dt>
          <dd>{company.representativeName}</dd>
        </dl>
      </section>
      <section className={styles.staffs}>
        <PageTitle
          title="スタッフ一覧"
          subtitle="STAFF LIST"
          className={styles.staff_title}
        />
        <div className={styles.staff_list}>
          {staffs.map((staff) => (
            <div className={styles.staff_card} key={staff.id}>
              <div>
                <Typography variant="h4">{staff.name}</Typography>
                <Typography variant="p">{staff.selfIntroduction}</Typography>
              </div>
              <SnsButtons
                color="secondary"
                size="s"
                instagramId={staff.instagramId}
                xId={staff.xId}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
