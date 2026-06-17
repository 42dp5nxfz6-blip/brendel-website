type Spec = {
  label: string
  value: string
  hint?: string
}

const specs: Spec[] = [
  { label: "Einsatzbereich", value: "Tiefbau, Kommune, Industrie" },
  { label: "Arbeitsprinzip", value: "Kontrollierte Absaugung statt Aushub" },
  { label: "Vorteil", value: "Weniger Risiko an Leitungen" },
  { label: "Ergebnis", value: "Sauberer Arbeitsbereich, weniger Nacharbeit" },
  { label: "Tempo", value: "Schnelle Freilegung & Materialaufnahme" },
  { label: "Qualität", value: "Präzise, dokumentierbar, planbar" }
]

export function TechSpecGrid() {
  return (
    <section id="technik" className="bg-zinc-50">
      <div className="mx-auto w-full max-w-6xl px-4 py-12">
        <h2 className="font-display text-3xl font-bold tracking-tight">
          Technik, die Probleme löst
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-zinc-700">
          Moderne Hochleistungssaugtechnik – für präzise Ergebnisse und saubere
          Abläufe.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {specs.map((s) => (
            <div key={s.label} className="rounded-xl border border-zinc-200 bg-white p-5">
              <div className="text-xs font-semibold uppercase tracking-wide text-zinc-600">
                {s.label}
              </div>
              <div className="mt-2 text-base font-semibold text-zinc-950">{s.value}</div>
              {s.hint ? <div className="mt-1 text-sm text-zinc-700">{s.hint}</div> : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
