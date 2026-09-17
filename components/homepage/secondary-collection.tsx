"use client";

import { secondaryCollectionSlugs } from "@/data/homepage";
import { getProductsBySlugs } from "@/data/products";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProductCard } from "@/components/product/product-card";

export function SecondaryCollection() {
  const products = getProductsBySlugs(secondaryCollectionSlugs);

  return (
    <section className="bg-white py-14 md:py-20">
      <Container>
        <SectionHeading
          eyebrow="Weekend kit"
          title="Packed and ready"
          subtitle="A short list for two-night trips: bag, bottle, shell, documents."
          viewMoreLink="/categories/travel"
        />
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
