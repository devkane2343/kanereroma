import { useEffect, useState } from "react"
import { Eye } from "lucide-react"

export default function ProfileViews() {
  const [views, setViews] = useState<number | null>(null)

  useEffect(() => {
    fetch("/api/views")
      .then(res => res.json())
      .then(data => setViews(data.count))
  }, [])

  return (
    <div className="text-sm text-foreground/70 flex items-center gap-1">
      <Eye className="h-4 w-4" />
      <span>{views !== null ? views : "Loading..."}</span>
    </div>
  )
}
