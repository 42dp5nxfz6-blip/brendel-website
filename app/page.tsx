import { Hero } from "@/components/hero"
import { ServiceCards } from "@/components/service-cards"
import { TechSpecGrid } from "@/components/tech-spec-grid"
import { Reveal } from "@/components/reveal"

export default function HomePage() {
  return (
    <>
      <Hero />

      <Reveal delay={0.05}>
        <ServiceCards />
      </Reveal>

      <Reveal delay={0.05}>
        <TechSpecGrid />
      </Reveal>

      <section id="einsatzgebiete" className="mx-auto w-full max-w-6xl px-4 py-12">
        <Reveal delay={0.05}>
          <h2 className="font-display text-3xl font-bold tracking-tight">Einsatzgebiete</h2>
          <p className="mt-2 max-w-2xl text-sm text-zinc-700">
            Tiefbau, Kommunaltechnik, Industrieanlagen – überall dort, wo präzise
            Absaugung Zeit spart und Risiken reduziert.
          </p>

          <div className="mt-6 rounded-xl border border-zinc-200 bg-white p-6">
            <ul className="grid gap-3 text-sm text-zinc-800 sm:grid-cols-2">
              <li>• Freilegen von Leitungen/Kabeln</li>
              <li>• Baustellenlogistik & Materialaufnahme</li>
              <li>• Punktgenauer Aushub in sensiblen Bereichen</li>
              <li>• Industrie-Reinigung & Anlagenumfeld</li>
            </ul>
          </div>
        </Reveal>
      </section>
    </>
  )
}
