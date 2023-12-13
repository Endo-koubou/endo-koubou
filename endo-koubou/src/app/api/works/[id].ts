import { Work } from "@/app/interface/work";
import { apiCall } from "@/app/util/api";

export async function getWorkDetail(id: string): Promise<Work> {
  const res = await apiCall(`works/${id}`);
  return res;
}
