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
  director: string;
  lightingDesigner: string;
  archiveImages: ImageData[];
  productionImages: ImageData[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
}
