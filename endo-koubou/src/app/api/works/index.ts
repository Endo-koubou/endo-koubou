import { Work } from "@/app/interface/work";
import { apiCall } from "@/app/util/api";

export async function getWorks(limit?: number): Promise<Work[]> {
  const res = await apiCall("works", limit);
  return res.contents;
}
