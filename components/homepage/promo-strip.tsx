import Link from "next/link";
import { promoStrip } from "@/data/homepage";
import { Container } from "@/components/ui/container";

export function PromoStrip() {
  return (
    <section className="bg-primary text-white">
      <Container className="flex flex-col items-start justify-between gap-4 py-6 md:flex-row md:items-center">
        <div>
          <p className="font-display text-xl font-bold md:text-2xl">{promoStrip.title}</p>
          <p className="mt-1 text-sm text-white/80">{promoStrip.description}</p>
        </div>
        <Link
          href={promoStrip.ctaLink}
          className="inline-flex h-11 items-center border border-white px-6 text-sm font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-white hover:text-primary"
        >
          {promoStrip.ctaText}
        </Link>
      </Container>
    </section>
  );
}
