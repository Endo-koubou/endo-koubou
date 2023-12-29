export async function apiCall(path: string, limit?: number) {
  let queryParams = "";
  if (limit) {
    queryParams = `?limit=${limit}`;
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_MICROCMS_END_POINT}/${path}${queryParams}`,
    {
      headers: {
        "Content-Type": "application/json",
        "X-MICROCMS-API-KEY": process.env.NEXT_PUBLIC_MICROCMS_API_KEY!,
      },
      cache: "no-cache",
    }
  );
  const data = await res.json();

  return data;
}
