import { Staff } from "@/app/interface/staff";
import { apiCall } from "@/app/util/api";

export async function getStaffs(): Promise<Staff[]> {
  const res = await apiCall("staffs");
  return res.contents;
}
