import Link from "next/link";
import Image from "next/image";
import { promotionalBanner } from "@/data/homepage";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function PromotionalBanner() {
  return (
    <section className="py-0">
      <div className="relative min-h-[420px] overflow-hidden md:min-h-[520px]">
        <Image
          src={promotionalBanner.image}
          alt={promotionalBanner.title}
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ink/55" />
        <Container className="relative flex min-h-[420px] items-end py-12 md:min-h-[520px] md:py-16">
          <div className="max-w-xl text-white">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/70">Travel edit</p>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight md:text-5xl">
              {promotionalBanner.title}
            </h2>
            <p className="mt-4 text-white/80">{promotionalBanner.description}</p>
            <Button asChild size="lg" className="mt-8">
              <Link href={promotionalBanner.buttonLink}>{promotionalBanner.buttonText}</Link>
            </Button>
          </div>
        </Container>
      </div>
    </section>
  );
}
