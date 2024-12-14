import { unstable_cache } from "next/cache";

export default async function cacheHandler({ request, response }) {
  const headers = new Headers(response.headers);

  // Cache-Control header
  headers.set("Cache-Control", "public, s-maxage=60");

  // Set cache header
  headers.set(
    "X-Cache",
    unstable_cache(request.url, {
      status: response.status,
      headers: Object.fromEntries(response.headers),
    })
  );

  return [response, { headers }];
}
