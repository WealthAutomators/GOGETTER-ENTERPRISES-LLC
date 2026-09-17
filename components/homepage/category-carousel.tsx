"use client";

import Image from "next/image";
import Link from "next/link";
import { lifestyleTiles } from "@/data/homepage";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function CategoryCarousel() {
  return (
    <section className="bg-white py-14 md:py-20">
      <Container>
        <SectionHeading
          eyebrow="Shop by need"
          title="How do you want the day to go?"
          subtitle="Start with the situation, then find the kit that fits it."
        />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {lifestyleTiles.map((tile, index) => (
            <Link
              key={tile.id}
              href={tile.href}
              className={`group relative overflow-hidden bg-muted ${index === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
            >
              <div className={`relative overflow-hidden ${index === 0 ? "aspect-[4/3] md:aspect-auto md:h-full md:min-h-[420px]" : "aspect-[4/3]"}`}>
                <Image
                  src={tile.image}
                  alt={tile.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes={index === 0 ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 50vw, 33vw"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 md:p-6">
                  <h3 className="font-display text-xl font-bold text-white md:text-2xl">{tile.title}</h3>
                  <p className="mt-1 max-w-sm text-sm text-white/80">{tile.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
