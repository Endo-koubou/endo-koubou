import { Button, Typography } from "@/app/components/atoms";
import { ProductionType } from "@/app/interface/work";
import styles from "./tabs.module.scss";

export type TabProps = {
  tabList: ProductionType[];
  activeTab: ProductionType;
  onTabChange: (tabLabel: ProductionType) => void;
  defaultValue?: string;
  className?: string;
};

export function Tabs({ tabList, activeTab, onTabChange, className }: TabProps) {
  const handleClickTab = (tabLabel: ProductionType) => {
    onTabChange(tabLabel);
  };

  return (
    <div className={`${styles.wrapper} ${className}`}>
      {tabList.map((tab) => (
        <Button
          key={tab}
          onClick={() => handleClickTab(tab)}
          className={`${activeTab === tab ? styles.active : ""} ${styles.tab}`}
        >
          <Typography variant="h4">{tab}</Typography>
        </Button>
      ))}
    </div>
  );
}
