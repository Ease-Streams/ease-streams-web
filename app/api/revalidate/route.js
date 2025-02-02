import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { setCacheId } from "@/cache"; // Utility to update cache ID

export async function POST() {
  try {
    const newCacheId = crypto.randomUUID();
    setCacheId(newCacheId); // Update global cache ID

    // Revalidate specific paths
    revalidatePath("/"); // Home page
    revalidatePath("/category"); // Category page
    revalidatePath("/subcategory"); // Category page
    revalidatePath("/products"); // Products page
    revalidatePath("/brands"); // Products page
    revalidatePath("/globals"); // Products page
    revalidatePath("/home"); // Products page

    return NextResponse.json({ success: true, newCacheId });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
