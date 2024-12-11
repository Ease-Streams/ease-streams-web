import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

let cache = new Map();

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const key = searchParams.get("key");
  const clearAll = searchParams.get("clearAll");

  if (clearAll) {
    cache.clear();
    await revalidateTag("cache-keys-list");
    return NextResponse.json(
      { message: "All cache cleared." },
      { status: 200 }
    );
  }

  if (key) {
    const data = cache.get(key);
    if (data) {
      await revalidateTag(`cache-key-${key}`);
      return NextResponse.json(data, { status: 200 });
    } else {
      return NextResponse.json(
        { error: `Cache key "${key}" not found.` },
        { status: 404 }
      );
    }
  }

  const keys = Array.from(cache.keys());
  await revalidateTag("cache-keys-list");
  return NextResponse.json(keys, { status: 200 });
}

export async function POST(request) {
  const { searchParams } = new URL(request.url);
  const key = searchParams.get("key");
  const value = searchParams.get("value");
  const ttl = parseInt(searchParams.get("ttl") || "0");

  if (!key || !value) {
    return NextResponse.json(
      { error: "Missing 'key' or 'value' parameter." },
      { status: 400 }
    );
  }

  cache.set(key, value);
  await revalidateTag("cache-keys-list");
  return NextResponse.json({ message: `Key '${key}' added.` }, { status: 201 });
}

export async function DELETE(request) {
  const { searchParams } = new URL(request.url);
  const key = searchParams.get("key");

  if (key) {
    const success = cache.delete(key);
    if (success) {
      await revalidateTag("cache-keys-list");
      return NextResponse.json(
        { message: `Key '${key}' deleted` },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { error: `Cache key "${key}" not found.` },
        { status: 404 }
      );
    }
  }

  return NextResponse.json(
    { error: "Missing 'key' parameter." },
    { status: 400 }
  );
}
