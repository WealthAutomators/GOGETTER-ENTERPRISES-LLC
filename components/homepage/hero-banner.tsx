"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { heroSlides } from "@/data/homepage";
import { Button } from "@/components/ui/button";

export function HeroBanner() {
  const slide = heroSlides[0];

  return (
    <section className="relative isolate min-h-[78vh] overflow-hidden bg-ink md:min-h-[88vh]">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src={slide.image}
          alt={slide.headline}
          fill
          priority
          className="object-cover object-[center_35%]"
          sizes="100vw"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/10" />
      <div className="absolute inset-x-0 bottom-0 h-1 bg-primary" />

      <div className="relative mx-auto flex min-h-[78vh] max-w-[1440px] flex-col justify-end px-4 pb-12 pt-28 sm:px-6 md:min-h-[88vh] md:pb-16 lg:px-8">
        <motion.div
          className="max-w-3xl text-white"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-white/80">
            Contemporary everyday retail
          </p>
          <h1 className="font-display mt-4 text-4xl font-extrabold leading-[0.95] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            {slide.headline}
          </h1>
          <p className="mt-5 max-w-lg text-base text-white/80 sm:text-lg">{slide.description}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="h-12 min-w-[170px]">
              <Link href={slide.ctaLink}>{slide.ctaText}</Link>
            </Button>
            {slide.secondaryCtaText && slide.secondaryCtaLink && (
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 border-white/50 bg-transparent text-white hover:bg-white hover:text-ink"
              >
                <Link href={slide.secondaryCtaLink}>
                  {slide.secondaryCtaText}
                  <ArrowDownRight className="h-4 w-4" />
                </Link>
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
