"use client";

import { Navbar } from "@/components/navbar/navbar";
import { utilityBarItems } from "@/data/homepage";

export function SiteHeader() {
  return (
    <div className="sticky top-0 z-50 bg-white">
      <div className="bg-ink text-white">
        <div className="mx-auto flex max-w-[1440px] items-center justify-center gap-6 overflow-hidden px-4 py-2 sm:justify-between sm:px-6 lg:px-8">
          {utilityBarItems.map((item, index) => (
            <p
              key={item}
              className={`text-[11px] font-semibold uppercase tracking-[0.16em] ${index > 0 ? "hidden sm:block" : ""}`}
            >
              {item}
            </p>
          ))}
        </div>
      </div>
      <Navbar />
    </div>
  );
}
