import { Droplets, Factory, MapPinned, Shovel } from "lucide-react"

type Service = {
  title: string
  text: string
  icon: React.ReactNode
}

const services: Service[] = [
  {
    title: "Leitungsfreilegung",
    text: "Schonend freilegen statt riskant baggern – präzise an sensibler Infrastruktur.",
    icon: <Shovel className="h-5 w-5" />,
  },
  {
    title: "Tiefbau & Baugruben",
    text: "Schnell, sauber, kontrolliert – weniger Aushub, weniger Entsorgung, weniger Zeitverlust.",
    icon: <MapPinned className="h-5 w-5" />,
  },
  {
    title: "Industrie & Anlagen",
    text: "Absaugung von Material/Reststoffen – reduziert Stillstandszeiten und verbessert Arbeitssicherheit.",
    icon: <Factory className="h-5 w-5" />,
  },
  {
    title: "Schlamm/Feinstoffe",
    text: "Effizient bei nassem, schwerem Material – saubere Baustelle, klare Prozesse.",
    icon: <Droplets className="h-5 w-5" />,
  },
]

export function ServiceCards() {
  return (
    <section id="leistungen" className="mx-auto w-full max-w-6xl px-4 py-12">
      <div>
        <h2 className="font-display text-3xl font-bold tracking-tight">
          Leistungen mit messbarem Nutzen
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-zinc-700">
          Fokus auf Zeitersparnis, Präzision und Sauberkeit – damit Ihr Projekt
          schneller und sicherer vorankommt.
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => (
          <div key={s.title} className="rounded-xl border border-zinc-200 bg-white p-5">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#FFC400] text-black">
              {s.icon}
            </div>
            <h3 className="mt-4 text-base font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-zinc-700">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
