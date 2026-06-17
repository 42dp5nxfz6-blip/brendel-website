import { site } from "@/lib/site"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="kontakt" className="border-t border-zinc-200 bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-10">
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <div className="font-display text-lg font-bold">{site.name}</div>
            <p className="mt-2 text-sm text-zinc-700">{site.description}</p>
          </div>

          <div>
            <div className="text-sm font-semibold">Standort</div>
            <p className="mt-2 text-sm text-zinc-700">{site.location}</p>
          </div>

          <div>
            <div className="text-sm font-semibold">Notfall-Kontakt</div>
            <a
              className="mt-2 inline-flex rounded-md bg-black px-4 py-2 text-sm font-semibold text-white"
              href={`tel:${site.emergencyPhone.replace(/\s/g, "")}`}
            >
              {site.emergencyPhone}
            </a>
          </div>
        </div>

        <div className="mt-8 text-xs text-zinc-600">
          © {year} {site.name}. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  )
}
