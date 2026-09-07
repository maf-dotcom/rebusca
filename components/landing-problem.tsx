import { LandingReveal } from "@/components/landing-reveal";

export function LandingProblem() {
  return (
    <section className="border-t border-borde px-4 py-14 sm:px-8 sm:py-24">
      <LandingReveal className="mx-auto flex w-full max-w-2xl flex-col gap-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bosque">
          Lo que vemos todos los días
        </p>
        <h2 className="text-[clamp(1.75rem,5vw,2.5rem)] font-semibold leading-tight text-piedra">
          Un álbum de la gráfica que nos rodea.
        </h2>
        <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
          Hay imágenes que vemos todos los días y que, sin darnos cuenta, cuentan quiénes somos.
          RE (BUSCA) reúne fotografías de la gráfica popular del Caribe:
          buses, avisos, fachadas, letreros, colores, personajes 
          y todo eso que hace parte de nuestras calles.
          
          Súmate al álbum.
        </p>
      </LandingReveal>
    </section>
  );
}
