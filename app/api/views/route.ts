
import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server"
import { supabase } from "@/lib/supabaseClient"

export async function GET(req: NextRequest) {
  const cookieStore = cookies()

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
        set(name: string, value: string, options: any) {
          cookieStore.set({ name, value, ...options })
        },
        remove(name: string, options: any) {
          cookieStore.set({ name, value: "", ...options })
        },
      },
    },
  )

  // Increment view count
  const { data: page_views, error: pageViewsError } = await supabase
    .from("page_views")
    .select("count")
    .eq("id", 1) // Assuming a single row for global views

  if (pageViewsError) {
    console.error("Error fetching page views:", pageViewsError)
    return NextResponse.json({ error: pageViewsError.message }, { status: 500 })
  }

  let currentViews = page_views?.[0]?.count || 0
  currentViews++

  const { error: updateError } = await supabase
    .from("page_views")
    .upsert({ id: 1, count: currentViews }, { onConflict: "id" })

  if (updateError) {
    console.error("Error updating page views:", updateError)
    return NextResponse.json({ error: updateError.message }, { status: 500 })
  }

  return NextResponse.json({ count: currentViews })
}
