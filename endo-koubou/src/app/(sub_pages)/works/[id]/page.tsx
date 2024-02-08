import { getWorks } from "@/app/api/works";
import { getWorkDetail } from "@/app/api/works/[id]";
import { Breadcrumb, PageTitle } from "@/app/components/molecules";
import { WorkDetailSection } from "@/app/components/organisms";
import { Metadata } from "next";
import styles from "./page.module.scss";

export async function generateStaticParams() {
  const works = await getWorks();
  const detailPaths = works.map((work) => work.id);
  return detailPaths;
}

export async function generateMetadata(props: {
  params: { id: string };
}): Promise<Metadata> {
  const detailData = await getWorkDetail(props.params.id);
  return {
    title: detailData.title,
    openGraph: {
      images: detailData.imageData.url,
    },
    twitter: {
      card: "summary_large_image",
      title: `ENDO工房｜${detailData.title}`,
      images: [detailData.imageData.url],
      description: detailData.concept,
      site: "@elton_0914",
      creator: "@elton_0914",
    },
  };
}

async function getDetail(id: string) {
  const res = await getWorkDetail(id);
  return res;
}

export default async function WorkDetail(props: { params: { id: string } }) {
  const detail = await getDetail(props.params.id);

  return (
    <>
      <div className={styles.head_contents}>
        <Breadcrumb
          list={[
            { label: "作品一覧", path: "/works" },
            { label: detail.title },
          ]}
        />
        <PageTitle title={detail.title} className={styles.detail_title} />
      </div>
      <WorkDetailSection detail={detail} />
    </>
  );
}
