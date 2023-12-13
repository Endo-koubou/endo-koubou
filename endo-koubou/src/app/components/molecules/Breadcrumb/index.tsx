import Link from "next/link";
import { Typography } from "../../atoms";
import styles from "./breadcrumb.module.scss";

type BreadcrumbProps = {
  list: { label: string; path?: string }[];
};

export function Breadcrumb({ list }: BreadcrumbProps) {
  return (
    <div className={styles.wrapper}>
      <nav className={styles.breadcrumb} aria-label="breadcrumb">
        <ol>
          <li>
            <Link href="/">TOP</Link>
          </li>
          {list.map((item, index) =>
            item.path ? (
              <li key={index}>
                <Link href={item.path}>
                  <Typography variant="span">{item.label}</Typography>
                </Link>
              </li>
            ) : (
              <li key={index}>
                <Typography variant="span">{item.label}</Typography>
              </li>
            )
          )}
        </ol>
      </nav>
    </div>
  );
}

export default Breadcrumb;
