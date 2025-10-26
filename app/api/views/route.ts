
import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabaseClient"

export async function GET(req: Request) {
  try {
    // Get user IP (basic check)
    const ip = req.headers.get("x-forwarded-for") || "unknown"

    // Check if this IP is already counted
    const { data: existing, error: selectError } = await supabase
      .from("views")
      .select("id")
      .eq("ip", ip)
      .maybeSingle()

    if (selectError) {
      console.error("Select error:", selectError)
    }

    // If not found, insert a new record
    if (!existing) {
      const { error: insertError } = await supabase
        .from("views")
        .insert([{ ip }])
      if (insertError) console.error("Insert error:", insertError)
    }

    // Always fetch the total count
    const { count, error: countError } = await supabase
      .from("views")
      .select("*", { count: "exact", head: true })

    if (countError) {
      console.error("Count error:", countError)
      return NextResponse.json({ count: 0 })
    }

    return NextResponse.json({ count })
  } catch (err) {
    console.error("API /views error:", err)
    return NextResponse.json({ count: 0, error: "Failed to load views" })
  }
}
