import { Company } from "@/app/interface/company";
import { apiCall } from "@/app/util/api";

export async function getCompany(): Promise<Company> {
  const res = await apiCall("company");
  return res;
}
