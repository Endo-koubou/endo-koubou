import { MetadataRoute } from "next";
import { getWorks } from "./api/works";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPaths = [
    {
      url: "https://endo-koubou.com",
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 1,
    },
    {
      url: "https://endo-koubou.com/works",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: "https://endo-koubou.com/company",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
    {
      url: "https://endo-koubou.com/contact",
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.8,
    },
  ];

  const works = await getWorks();
  const dynamicPaths = works.contents.map((work) => {
    return {
      url: `https://endo-koubou.com/${work.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    };
  });

  return [...staticPaths, ...dynamicPaths];
}
