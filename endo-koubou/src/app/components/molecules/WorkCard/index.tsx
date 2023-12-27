import Image from "next/image";
import Link from "next/link";
import { Typography } from "../../atoms";
import styles from "./work_card.module.scss";

type ImageData = {
  url: string;
  width: number;
  height: number;
};

export type WorkCardProps = {
  id: string;
  title: string;
  companyName: string;
  date: string;
  imageData: ImageData;
  alt: string;
};

export function WorkCard({
  id,
  title,
  companyName,
  date,
  imageData,
  alt,
}: WorkCardProps) {
  return (
    <div className={styles.card}>
      <Link href={`/works/${id}`} className={styles.link_area}>
        <div className={styles.image_area}>
          <Image src={imageData.url} fill alt={alt} className={styles.image} />
        </div>
        <div className={styles.title_area}>
          <Typography variant="h3" className={styles.title}>
            {title}
          </Typography>
        </div>
        <Typography variant="span" className={styles.date}>
          {companyName} / {date.substr(0, 4)}年
        </Typography>
      </Link>
    </div>
  );
}
