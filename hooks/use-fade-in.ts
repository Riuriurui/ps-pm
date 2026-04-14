"use client"

import { useEffect, useRef } from "react"

export function useFadeIn(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const targets = entry.target.querySelectorAll(".fade-up")
            targets.forEach((t, i) => {
              setTimeout(() => t.classList.add("visible"), i * 80)
            })
            // Also handle direct fade-up on the container
            if (entry.target.classList.contains("fade-up")) {
              entry.target.classList.add("visible")
            }
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return ref
}
