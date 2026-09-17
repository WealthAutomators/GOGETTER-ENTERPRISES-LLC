import { company } from "@/data/company";
import { testimonials } from "@/data/testimonials";
import { PageHero, PageSection } from "@/components/ui/page-layout";
import { Container } from "@/components/ui/container";
import { StarRating } from "@/components/ui/star-rating";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Check, Compass, Layers, MoveRight, Sparkles } from "lucide-react";

export const metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <>
      <PageHero
        title={`About ${company.name}`}
        description={company.description}
        breadcrumbs={[{ label: "About Us" }]}
      />

      <Container className="pb-16">
        <div className="grid items-center gap-10 py-12 md:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden bg-muted">
            <Image src="/banners/about.jpg" alt={`About ${company.name}`} fill className="object-cover" sizes="50vw" />
          </div>
          <PageSection title="A store for people who keep moving">
            <p>
              {company.name} is a contemporary retailer of useful everyday products. The catalog is built
              around modern living: workspace tools, travel gear, home essentials, apparel, and practical
              pieces that make a day easier to run.
            </p>
            <p className="mt-4">
              The brand story is about intent, not a fabricated origin myth. We choose products for
              convenience, mobility, organization, and thoughtful design — then present them clearly so
              you can decide quickly.
            </p>
          </PageSection>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: MoveRight, title: "Movement", desc: "Carry, apparel, and outdoor kit for days that leave the house." },
            { icon: Layers, title: "Utility", desc: "Workspace, organization, and kitchen tools that earn a permanent spot." },
            { icon: Compass, title: "Clarity", desc: "Straightforward product pages, honest imagery, and a catalog you can scan." },
            { icon: Sparkles, title: "Design", desc: "Contemporary materials and silhouettes without turning shopping into a slogan." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="border border-border bg-white p-6">
              <div className="mb-4 flex h-11 w-11 items-center justify-center bg-primary/10">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-display font-bold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <ul className="mt-12 grid gap-3 sm:grid-cols-2">
          {[
            "Products selected for daily use, not novelty",
            "A mix of home, travel, fitness, and work — not electronics-only",
            "Clear pricing and specifications on every product",
            "Demo checkout that keeps the shopping engine intact",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              {item}
            </li>
          ))}
        </ul>

        <PageSection title="What customers notice" className="mt-16">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.id} className="border border-border bg-white p-6">
                <StarRating rating={t.rating} showCount={false} size="md" />
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">&ldquo;{t.text}&rdquo;</p>
                <p className="mt-4 text-sm font-medium">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.location}</p>
              </div>
            ))}
          </div>
        </PageSection>

        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link href="/shop">Shop the collection</Link>
          </Button>
        </div>
      </Container>
    </>
  );
}
