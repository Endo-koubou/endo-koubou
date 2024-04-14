type ImageData = {
  url: string;
  width: number;
  height: number;
};

export type ProductionType = "舞台制作" | "個人制作";
export interface WorksResponse {
  contents: Work[];
  totalCount: number;
  offset: number;
  limit: number;
}

export interface Work {
  id: string;
  productionGenre: ProductionType;
  title: string;
  imageData: ImageData;
  concept?: string;
  date?: string;
  companyName?: string;
  theaterName?: string;
  performancePeriod?: string;
  creater?: string;
  director?: string;
  lightingDesigner?: string;
  motif?: string;
  materialsUsed?: string;
  width?: string;
  height?: string;
  depth?: string;
  productionPeriod?: string;
  archiveImages?: ImageData[];
  productionImages?: ImageData[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
}
