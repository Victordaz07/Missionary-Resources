export function withSearchParam(url: string, key: string, value: string) {
  const u = new URL(url, "http://localhost");
  u.searchParams.set(key, value);
  const path = u.pathname + (u.search ? `?${u.searchParams.toString()}` : "");
  return path + (u.hash || "");
}


