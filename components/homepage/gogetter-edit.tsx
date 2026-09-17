"use client";

import Image from "next/image";
import Link from "next/link";
import { goGetterEditSlugs } from "@/data/homepage";
import { getProductsBySlugs } from "@/data/products";
import { formatPrice } from "@/lib/format";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function GoGetterEdit() {
  const products = getProductsBySlugs(goGetterEditSlugs);
  const [lead, ...rest] = products;

  if (!lead) return null;

  return (
    <section className="bg-white py-14 md:py-20">
      <Container>
        <SectionHeading
          eyebrow="Editorial"
          title="The Go-Getter Edit"
          subtitle="Three pieces that cover a commute, a workday, and the details in between."
          viewMoreLink="/shop"
        />
        <div className="grid gap-4 lg:grid-cols-12 lg:gap-5">
          <Link href={`/product/${lead.slug}`} className="group relative min-h-[420px] overflow-hidden bg-muted lg:col-span-7">
            <div className="relative aspect-[4/5] h-full lg:aspect-auto lg:min-h-[560px]">
              <Image
                src={lead.images[0]}
                alt={lead.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-8">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/70">{lead.category}</p>
                <h3 className="font-display mt-1 text-3xl font-bold text-white">{lead.name}</h3>
                <p className="mt-1 text-sm text-white/80">{formatPrice(lead.salePrice ?? lead.price)}</p>
              </div>
            </div>
          </Link>
          <div className="grid gap-4 lg:col-span-5">
            {rest.map((product) => (
              <Link key={product.id} href={`/product/${product.slug}`} className="group relative min-h-[220px] overflow-hidden bg-muted">
                <div className="relative h-full min-h-[220px] lg:min-h-[270px]">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/70">{product.category}</p>
                    <h3 className="font-display mt-1 text-xl font-bold text-white">{product.name}</h3>
                    <p className="mt-1 text-sm text-white/80">{formatPrice(product.salePrice ?? product.price)}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
