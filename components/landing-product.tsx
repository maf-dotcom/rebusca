import { LandingAlbumPreview } from "@/components/landing-album-preview";
import { LandingReveal } from "@/components/landing-reveal";

const BENEFITS = [
  {
    n: "01",
    title: "Sube una foto",
    body: "¿Viste una gráfica que te llamó la atención? Compártela.",
  },
  {
    n: "02",
    title: "Rebusca en tu barrio",
    body: "Recorre tus calles y encuentra esas imágenes que hacen parte de lo cotidiano.",
  },
  {
    n: "03",
    title: "Crea el álbum",
    body: "Tu mirada también cuenta. Cada foto ayuda a construir este archivo colectivo de nuestra gráfica popular.",
  },
] as const;

export function LandingProduct() {
  return (
    <section className="border-t border-borde px-4 py-14 sm:px-8 sm:py-24">
      <div className="mx-auto grid w-full max-w-6xl items-start gap-10 md:grid-cols-2 md:gap-16">
        <LandingReveal className="flex min-w-0 flex-col gap-8">
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bosque">
              Qué hay dentro
            </p>
            <h2 className="text-[clamp(1.75rem,5vw,2.5rem)] font-semibold leading-tight text-piedra">
              Un álbum por cada sitio que ha pasado por la nevera.
            </h2>
          </div>
          <ol className="flex flex-col gap-8">
            {BENEFITS.map((item) => (
              <li key={item.n} className="flex flex-col gap-2 sm:flex-row sm:gap-6">
                <span
                  className="shrink-0 text-sm font-semibold tracking-wide text-tierra"
                  aria-hidden
                >
                  {item.n}
                </span>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-lg font-semibold text-piedra">{item.title}</h3>
                  <p className="max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </LandingReveal>

        <LandingReveal delay={0.12}>
          <LandingAlbumPreview />
        </LandingReveal>
      </div>
    </section>
  );
}
