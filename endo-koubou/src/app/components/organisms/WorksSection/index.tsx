import { WorkCard } from "@/app/components/molecules";
import { Work } from "@/app/interface/work";
import styles from "./works_section.module.scss";

export type WorksSectionProps = {
  works: Work[];
  className?: string;
};

export function WorksSection({ works, className }: WorksSectionProps) {
  return (
    <div className={`${styles.contents} ${className}`}>
      {works.map((work) => (
        <WorkCard
          key={work.id}
          id={work.id}
          title={work.title}
          companyName={work.companyName}
          date={work.date}
          imageData={work.imageData}
          alt={work.title}
        />
      ))}
    </div>
  );
}
