"use client"

import { useState } from "react"

const NAV_LINKS = [
  { label: "Platform",     href: "#platform" },
  { label: "Features",     href: "#agents" },
  { label: "How It Works", href: "#workflow" },
  { label: "Integrations", href: "#integrations" },
  { label: "Pricing",      href: "#pricing" },
]

const NAV_STYLE = {
  backdropFilter: "blur(16px)",
  WebkitBackdropFilter: "blur(16px)",
  background: "rgba(15,23,42,0.85)",
  boxShadow: "0 8px 32px rgba(0,0,0,0.35), 0 2px 8px rgba(0,0,0,0.25)",
} as const

export function MobileNav() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <div className="fixed top-4 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <div className="pointer-events-auto w-full max-w-3xl">

        {/* Main bar */}
        <nav
          className="flex items-center justify-between px-5 py-3 rounded-2xl border border-white/[0.06]"
          style={NAV_STYLE}
        >
          <span className="font-pixel text-xs tracking-[0.25em] text-white/80">ZURI AI</span>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7" style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>
            {NAV_LINKS.map(l => (
              <a
                key={l.label}
                href={l.href}
                className="text-[11px] text-white/60 hover:text-white transition-colors duration-200 tracking-wide"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button className="text-[11px] px-4 py-2 rounded-xl border border-white/10 text-white/60 hover:text-white hover:border-white/20 hover:bg-white/[0.03] transition-all duration-200 tracking-wide hidden md:block" style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>
              REQUEST DEMO
            </button>

            {/* Burger — mobile only */}
            <button
              onClick={() => setOpen(v => !v)}
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px] rounded-lg hover:bg-white/[0.04] transition-colors"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <span
                className="block h-px bg-white/70 transition-all duration-300 origin-center"
                style={{
                  width: "18px",
                  transform: open ? "translateY(6px) rotate(45deg)" : "none",
                }}
              />
              <span
                className="block h-px bg-white/70 transition-all duration-300"
                style={{
                  width: "18px",
                  opacity: open ? 0 : 1,
                  transform: open ? "scaleX(0)" : "none",
                }}
              />
              <span
                className="block h-px bg-white/70 transition-all duration-300 origin-center"
                style={{
                  width: "18px",
                  transform: open ? "translateY(-6px) rotate(-45deg)" : "none",
                }}
              />
            </button>
          </div>
        </nav>

        {/* Mobile dropdown */}
        <div
          className="md:hidden mt-2 overflow-hidden transition-all duration-300 ease-in-out"
          style={{ maxHeight: open ? "320px" : "0px", opacity: open ? 1 : 0 }}
        >
          <div
            className="rounded-2xl border border-white/[0.06] px-2 py-2 flex flex-col"
            style={NAV_STYLE}
          >
            {NAV_LINKS.map(l => (
              <a
                key={l.label}
                href={l.href}
                onClick={close}
                className="px-4 py-3 text-sm text-white/60 hover:text-white hover:bg-white/[0.03] rounded-xl transition-colors tracking-wide"
                style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
              >
                {l.label}
              </a>
            ))}
            <div className="mt-1 px-2 pb-1">
              <button className="w-full text-[11px] px-4 py-2.5 rounded-xl border border-white/10 text-white/60 hover:text-white hover:border-white/20 hover:bg-white/[0.03] transition-all duration-200 tracking-wide" style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>
                REQUEST DEMO
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
