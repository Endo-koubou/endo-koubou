import Image from "next/image";
import { Work } from "@/app/interface/work";
import { Typography } from "@/app/components/atoms";
import { TransButton } from "@/app/components/molecules";
import styles from "./work_detail_section.module.scss";
import { DateUtils } from "@/app/util/formatDate";

export type WorksSectionProps = {
  detail: Work;
  className?: string;
};

export function WorkDetailSection({ detail, className }: WorksSectionProps) {
  return (
    <>
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
              <dt>
                <Typography variant="h4">劇団名</Typography>
              </dt>
              <dd>{detail.companyName}</dd>
              <dt>
                <Typography variant="h4">劇場</Typography>
              </dt>
              <dd>{detail.theaterName}</dd>
              <dt>
                <Typography variant="h4">公演期間</Typography>
              </dt>
              <dd>{DateUtils.toYearMonthFormat(detail.performancePeriod)}</dd>
              <dt>
                <Typography variant="h4">作者</Typography>
              </dt>
              <dd>{detail.creater}</dd>
              <dt>
                <Typography variant="h4">演出家</Typography>
              </dt>
              <dd>{detail.director}</dd>
              <dt>
                <Typography variant="h4">照明デザイナー</Typography>
              </dt>
              <dd>{detail.lightingDesigner}</dd>
            </dl>
          </div>
        </section>
      </div>
      {detail.archiveImages && detail.archiveImages.length > 1 && (
        <>
          <Typography variant="h2" className={styles.document_title}>
            資料画像
          </Typography>
          <section className={styles.document_section}>
            <>
              <div className={styles.images}>
                {detail.archiveImages.map((imageData, index) => (
                  <div key={index} className={styles.image_box}>
                    <Image
                      src={imageData.url}
                      fill
                      alt={`資料画像${index + 1}`}
                      className={styles.image}
                    />
                  </div>
                ))}
              </div>
            </>
          </section>
        </>
      )}
      {detail.productionImages && detail.productionImages.length > 1 && (
        <>
          <Typography variant="h2" className={styles.document_title}>
            制作風景
          </Typography>
          <section className={styles.document_section}>
            <>
              <div className={styles.images}>
                {detail.productionImages.map((imageData, index) => (
                  <div key={index} className={styles.image_box}>
                    <Image
                      src={imageData.url}
                      fill
                      alt={`制作風景${index + 1}`}
                      className={styles.image}
                    />
                  </div>
                ))}
              </div>
            </>
          </section>
        </>
      )}
      <div className={styles.back_button}>
        <TransButton
          label="作品一覧へ戻る"
          direction={"back"}
          path={"/works"}
        />
      </div>
    </>
  );
}
