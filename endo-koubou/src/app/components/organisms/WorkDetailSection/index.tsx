import Image from "next/image";
import { Work } from "@/app/interface/work";
import { Typography } from "@/app/components/atoms";
import { TransButton } from "@/app/components/molecules";
import styles from "./work_detail_section.module.scss";

export type WorksSectionProps = {
  detail: Work;
  className?: string;
};

export function WorkDetailSection({ detail, className }: WorksSectionProps) {
  return (
    <div className={`${styles.contents} ${className}`}>
      <section>
        <Image
          src={detail.imageData.url}
          width={detail.imageData.width}
          height={detail.imageData.height}
          alt={detail.title}
          style={{ width: "100%", height: "auto" }}
        />
        <div className={styles.info}>
          <Typography variant="h3" className={styles.info_title}>
            作品詳細
          </Typography>
          <dl className={styles.info_data}>
            <dt>劇団名</dt>
            <dd>{detail.companyName}</dd>
            <dt>劇場</dt>
            <dd>{detail.theaterName}</dd>
            <dt>演出家</dt>
            <dd>{detail.director}</dd>
            <dt>照明デザイナー</dt>
            <dd>{detail.lightingDesigner}</dd>
          </dl>
        </div>
      </section>
      <section>
        <Typography variant="h2">資料画像</Typography>
      </section>
      <section>
        <Typography variant="h2">制作風景</Typography>
      </section>
      <div className={styles.back_button}>
        <TransButton
          label="作品一覧へ戻る"
          direction={"back"}
          path={"/works"}
        />
      </div>
    </div>
  );
}
