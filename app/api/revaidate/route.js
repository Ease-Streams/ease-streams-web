import { revalidate } from "next/cache";

export const POST = async ({ request }) => {
  const path = new URL(request.url).searchParams.get("path");

  try {
    await revalidate(path);
    return new Response(
      JSON.stringify({ message: `Path '${path}' revalidated.` }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to revalidate path." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};
