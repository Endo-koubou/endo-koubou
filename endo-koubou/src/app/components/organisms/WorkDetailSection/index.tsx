import Image from "next/image";
import { Work } from "@/app/interface/work";
import { Typography } from "@/app/components/atoms";
import { TransButton } from "@/app/components/molecules";
import { ImageModal } from "@/app/components/molecules";
import { DateUtils } from "@/app/util/formatDate";
import styles from "./work_detail_section.module.scss";

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
            style={{ width: "100%", height: "auto", verticalAlign: "bottom" }}
          />
          {detail.productionGenre == "舞台美術" && (
            <>
              <div className={styles.concept}>
                <Typography variant="p">{detail.concept}</Typography>
              </div>
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
                  <dd>
                    {DateUtils.toYearMonthFormat(detail.performancePeriod!)}
                  </dd>
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
            </>
          )}

          {detail.productionGenre == "個人製作" && (
            <>
              <div className={`${styles.info} ${styles.private_info}`}>
                <Typography variant="h3" className={styles.info_title}>
                  作品詳細
                </Typography>
                <dl className={styles.info_data}>
                  <dt>
                    <Typography variant="h4">参考作品</Typography>
                  </dt>
                  <dd>{detail.motif}</dd>
                  <dt>
                    <Typography variant="h4">使用素材</Typography>
                  </dt>
                  <dd>{detail.materialsUsed}</dd>
                  <dt>
                    <Typography variant="h4">サイズ</Typography>
                  </dt>
                  <dd>
                    {`横幅: ${detail.width} / 高さ: ${detail.height} / 奥行き: ${detail.depth}`}
                  </dd>
                  <dt>
                    <Typography variant="h4">製作期間</Typography>
                  </dt>
                  <dd>{detail.productionPeriod}</dd>
                </dl>
              </div>
            </>
          )}
        </section>
      </div>
      {detail.archiveImages && detail.archiveImages.length > 0 && (
        <>
          <Typography variant="h2" className={styles.document_title}>
            資料画像
          </Typography>
          <section className={styles.document_section}>
            <div className={styles.images}>
              {detail.archiveImages.map((imageData, index) => (
                <div key={index} className={styles.image_box}>
                  <ImageModal src={imageData.url} index={index} />
                </div>
              ))}
            </div>
          </section>
        </>
      )}
      {detail.productionImages && detail.productionImages.length > 0 && (
        <>
          <Typography variant="h2" className={styles.document_title}>
            製作風景
          </Typography>
          <section className={styles.document_section}>
            <div className={styles.images}>
              {detail.productionImages.map((imageData, index) => (
                <div key={index} className={styles.image_box}>
                  <ImageModal src={imageData.url} index={index} />
                </div>
              ))}
            </div>
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
