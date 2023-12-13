import { getWorks } from "@/app/api/works";
import { getWorkDetail } from "@/app/api/works/[id]";
import { Breadcrumb, PageTitle } from "@/app/components/molecules";
import { WorkDetailSection } from "@/app/components/organisms";
import { ResolvingMetadata, Metadata } from "next";
import { Props } from "next/script";
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
      images: [`${detailData.imageData.url}`],
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
        <PageTitle title={detail.title} />
      </div>
      <WorkDetailSection detail={detail} />
    </>
  );
}
