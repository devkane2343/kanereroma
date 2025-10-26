import { supabase } from "@/lib/supabaseClient"
import { NextResponse } from "next/server"

export async function GET(req: Request) {
  const ip = req.headers.get("x-forwarded-for") || "unknown"

  // check if already counted
  const { data: existing } = await supabase
    .from("views")
    .select("id")
    .eq("ip", ip)
    .single()

  if (!existing) {
    await supabase.from("views").insert([{ ip }])
  }

  const { count } = await supabase
    .from("views")
    .select("*", { count: "exact", head: true })

  return NextResponse.json({ count })
}
