import { Work } from "@/app/interface/work";
import { apiCall } from "@/app/util/api";

export async function getWorks(): Promise<Work[]> {
  const res = await apiCall("works");
  return res.contents;
}
