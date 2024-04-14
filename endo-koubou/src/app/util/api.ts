export async function apiCall(
  path: string,
  limit?: number,
  offset?: number,
  filters?: { fieldName: string; operator: string; value: string }
) {
  let queryParams = new URLSearchParams();

  // limitが指定されている場合、クエリパラメータに追加
  if (limit) {
    queryParams.set("limit", limit.toString());
  }

  // offsetが指定されている場合、クエリパラメータに追加
  if (offset !== undefined) {
    // offsetが0の場合も考慮するために、undefinedでチェック
    queryParams.set("offset", offset.toString());
  }

  // filtersオブジェクトが指定されている場合、クエリパラメータに追加
  if (filters) {
    const filterValue = `${filters.fieldName}[${filters.operator}]${filters.value}`;
    queryParams.set("filters", filterValue);
  }

  const queryString = queryParams.toString();
  const queryPrefix = queryString ? `?${queryString}` : "";

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_MICROCMS_END_POINT}/${path}${queryPrefix}`,
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
