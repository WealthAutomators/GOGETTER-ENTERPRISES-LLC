import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { aboutSection } from "@/data/homepage";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  return (
    <section className="bg-background py-14 md:py-20">
      <Container>
        <div className="grid items-stretch gap-0 overflow-hidden border border-border md:grid-cols-2">
          <div className="relative min-h-[280px] md:min-h-[440px]">
            <Image
              src={aboutSection.image}
              alt={aboutSection.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col justify-center bg-white px-6 py-10 md:px-12 md:py-16">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary">Brand</p>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              {aboutSection.title}
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{aboutSection.description}</p>
            <ul className="mt-6 space-y-3">
              {aboutSection.checklist.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <Button asChild size="lg" className="mt-8 w-fit">
              <Link href={aboutSection.buttonLink}>{aboutSection.buttonText}</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
