type ImageData = {
  url: string;
  width: number;
  height: number;
};

export interface Work {
  id: string;
  title: string;
  imageData: ImageData;
  date: string;
  companyName: string;
  theaterName: string;
  performanceStart: string;
  performanceEnd: string;
  director: string;
  lightingDesigner: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  archiveImages?: ImageData[];
  productionImages?: ImageData[];
}
