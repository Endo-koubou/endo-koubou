"use client";
import { useEffect, useState } from "react";
import { getWorks } from "@/app/api/works";
import { Spinner } from "@/app/components/atoms";
import { Pagination, Tabs, WorkCard } from "@/app/components/molecules";
import { ProductionType, WorksResponse } from "@/app/interface/work";
import styles from "./works_section.module.scss";
import useWorksStore from "@/app/store/useWorksStore";

export type WorksSectionProps = {
  className?: string;
};

const PAGE_LIMIT = 12;
const tabList: ProductionType[] = ["舞台美術", "個人製作"];

export function WorksSection({ className }: WorksSectionProps) {
  const { currentPage, setCurrentPage, selectedTab, setSelectedTab } =
    useWorksStore();
  const [works, setWorks] = useState<WorksResponse | null>(null);

  /**
   * 初回描画時とページ、タブ変更時にfetchする
   */
  useEffect(() => {
    fetchData();
  }, [currentPage, selectedTab]);

  const fetchData = async () => {
    const offset = (currentPage - 1) * PAGE_LIMIT;
    const worksData = await getWorks(PAGE_LIMIT, offset, {
      fieldName: "productionGenre",
      operator: "contains",
      value: selectedTab,
    });
    setWorks(worksData);
  };

  const onPageChange = async (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({
      top: 170,
      left: 0,
      behavior: "smooth",
    });
  };

  const onTabChange = async (tabLabel: ProductionType) => {
    setCurrentPage(1);
    setSelectedTab(tabLabel);
  };

  return (
    <div className={`${styles.wrapper}`}>
      <div className={`${styles.tabs}`}>
        <Tabs
          tabList={tabList}
          activeTab={selectedTab}
          onTabChange={onTabChange}
          className={styles.workTab}
        />
      </div>

      {works ? (
        <div className={`${styles.contents} ${className}`}>
          {works.contents.map((work) => (
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
      ) : (
        <div className={styles.loading}>
          <Spinner />
        </div>
      )}

      <div className={styles.pagination_wrapper}>
        <Pagination
          currentPage={currentPage}
          totalPages={works ? Math.ceil(works.totalCount / PAGE_LIMIT) : 0}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
}
