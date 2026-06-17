import Image from "next/image"
import { Phone, ShieldCheck, Timer, Sparkles } from "lucide-react"
import { site } from "@/lib/site"

type Benefit = {
  icon: React.ReactNode
  title: string
  text: string
}

const benefits: Benefit[] = [
  {
    icon: <Timer className="h-5 w-5" />,
    title: "Zeitersparnis",
    text: "Schneller Aushub & Freilegen – weniger Stillstand auf der Baustelle.",
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: "Sauberkeit",
    text: "Minimale Verschmutzung, kontrollierte Absaugung, weniger Nacharbeit.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Präzision & Sicherheit",
    text: "Schonendes Arbeiten an Leitungen und sensibler Infrastruktur.",
  },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-50 to-white" />
        <div className="absolute left-1/2 top-[-120px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#FFC400]/25 blur-3xl" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-4 py-12 md:grid-cols-2 md:py-16">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">
            <span className="h-2 w-2 rounded-full bg-[#FFC400]" />
            Hochleistungssaugtechnik • {site.location}
          </p>

          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-zinc-950 md:text-5xl">
            Saugbagger-Einsätze, die{" "}
            <span className="bg-[#FFC400] px-2 text-black">sauber</span> und{" "}
            <span className="bg-black px-2 text-white">präzise</span> abliefern.
          </h1>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-700">
            Wir unterstützen Tiefbau, Kommunen und Industrie mit professioneller
            Absaugtechnik: schnelle Freilegung, weniger Risiko, weniger Stillstand.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={`tel:${site.emergencyPhone.replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-black px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-900"
            >
              <Phone className="h-4 w-4" />
              Notfall-Kontakt
            </a>
            <a
              href="#leistungen"
              className="inline-flex items-center justify-center rounded-md border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
            >
              Leistungen ansehen
            </a>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-lg border border-zinc-200 bg-white p-4">
                <div className="flex items-center gap-2 text-zinc-950">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-[#FFC400] text-black">
                    {b.icon}
                  </span>
                  <div className="text-sm font-semibold">{b.title}</div>
                </div>
                <p className="mt-2 text-sm text-zinc-700">{b.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100">
            <Image
              src="/images/saugbagger-hero.jpg"
              alt="Saugbagger im Einsatz – präzise Absaugtechnik"
              width={1200}
              height={900}
              priority
              className="h-auto w-full object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="mt-3 text-xs text-zinc-600">
            Tipp: Lege Bilder unter <code>/public/images</code> ab und nutze WebP/AVIF.
          </div>
        </div>
      </div>
    </section>
  )
}
