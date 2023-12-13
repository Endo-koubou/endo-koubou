import { Typography } from "@/app/components/atoms";
import {
  FaChalkboardUser,
  FaRegCircleCheck,
  FaRegComments,
  FaRegEnvelope,
  FaRegFileLines,
  FaRegPenToSquare,
} from "react-icons/fa6";
import styles from "./flow_item.module.scss";

export type FlowItemProps = {
  step: string;
  title: string;
  text: string;
  icon: string;
  isLast?: boolean;
};

const iconsMap = {
  mail: "FaRegEnvelope",
};

export function FlowItem({
  step,
  title,
  text,
  icon,
  isLast = false,
}: FlowItemProps) {
  const lastItemClass = isLast ? "" : "not_last_item";

  const selectIcon = () => {
    switch (icon) {
      case "mail":
        return <FaRegEnvelope className={styles.mail} />;
      case "document":
        return <FaRegFileLines className={styles.document} />;
      case "chat":
        return <FaRegComments className={styles.chat} />;
      case "edit":
        return <FaRegPenToSquare className={styles.edit} />;
      case "presen":
        return <FaChalkboardUser className={styles.presen} />;
      case "check":
        return <FaRegCircleCheck className={styles.check} />;
    }
  };

  return (
    <>
      <div className={`${styles.contents} ${styles[lastItemClass]}`}>
        <div className={styles.icon_wrapper}>{selectIcon()}</div>
        <div className={styles.text_wrapper}>
          <Typography variant="h3">
            <Typography variant="span" className={styles.step}>
              step{step}
            </Typography>
            {title}
          </Typography>
          <Typography variant="p">{text}</Typography>
        </div>
      </div>
    </>
  );
}
