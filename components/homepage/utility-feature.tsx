"use client";

import Image from "next/image";
import Link from "next/link";
import { utilityFeature, utilityFeatureSlugs } from "@/data/homepage";
import { getProductsBySlugs } from "@/data/products";
import { formatPrice } from "@/lib/format";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function UtilityFeature() {
  const products = getProductsBySlugs(utilityFeatureSlugs);

  return (
    <section className="bg-white py-14 md:py-20">
      <Container>
        <div className="grid overflow-hidden border border-border lg:grid-cols-2">
          <div className="relative min-h-[320px] lg:min-h-[560px]">
            <Image
              src={utilityFeature.image}
              alt={utilityFeature.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col justify-center bg-ink px-6 py-10 text-white md:px-12 md:py-16">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary">Everyday utility</p>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              {utilityFeature.title}
            </h2>
            <p className="mt-4 max-w-md text-white/75">{utilityFeature.description}</p>
            <ul className="mt-8 divide-y divide-white/10">
              {products.map((product) => (
                <li key={product.id}>
                  <Link href={`/product/${product.slug}`} className="flex items-center justify-between gap-4 py-4 transition-colors hover:text-primary">
                    <span className="font-medium">{product.name}</span>
                    <span className="text-sm text-white/60">{formatPrice(product.salePrice ?? product.price)}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <Button asChild size="lg" className="mt-8 w-fit">
              <Link href={utilityFeature.ctaLink}>{utilityFeature.ctaText}</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
