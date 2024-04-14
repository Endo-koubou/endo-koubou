import { WorksResponse } from "@/app/interface/work";
import { apiCall } from "@/app/util/api";

export async function getWorks(
  limit?: number,
  offset?: number,
  filters?: { fieldName: string; operator: string; value: string }
): Promise<WorksResponse> {
  const res = await apiCall("works", limit, offset, filters);
  return res;
}
