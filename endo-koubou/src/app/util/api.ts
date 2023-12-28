export async function apiCall(path: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_MICROCMS_END_POINT}/${path}`,
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
