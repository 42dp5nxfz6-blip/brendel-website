"use client"

import Link from "next/link"
import { useMemo, useState } from "react"
import { Menu, Phone, X } from "lucide-react"
import { site, type NavItem } from "@/lib/site"

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ")
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const nav = useMemo(() => site.nav, [])

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/70 bg-white/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-[#FFC400] text-black">
            <span className="font-display text-lg font-bold">BT</span>
          </span>
          <div className="leading-tight">
            <div className="font-display text-base font-bold tracking-wide">
              {site.name}
            </div>
            <div className="text-xs text-zinc-600">Hochleistungssaugtechnik</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <NavLink key={item.href} item={item} />
          ))}
          <a
            href={`tel:${site.emergencyPhone.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2 rounded-md bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-900"
            aria-label="Notfall-Kontakt anrufen"
          >
            <Phone className="h-4 w-4" />
            Notfall-Kontakt
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-zinc-200 p-2 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div className={cx("md:hidden", open && "border-t border-zinc-200/70 bg-white")} hidden={!open}>
        <div className="mx-auto max-w-6xl px-4 py-3">
          <div className="flex flex-col gap-2">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-zinc-800 hover:bg-zinc-100"
              >
                {item.label}
              </a>
            ))}
            <a
              href={`tel:${site.emergencyPhone.replace(/\s/g, "")}`}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-black px-4 py-2 text-sm font-semibold text-white"
            >
              <Phone className="h-4 w-4" />
              Notfall-Kontakt
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

function NavLink({ item }: { item: NavItem }) {
  return (
    <a href={item.href} className="text-sm font-medium text-zinc-700 hover:text-black">
      {item.label}
    </a>
  )
}
