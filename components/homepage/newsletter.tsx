"use client";

import { useState } from "react";
import { newsletter } from "@/data/homepage";
import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="bg-white py-14 md:py-20">
      <Container>
        <div className="grid items-center gap-8 border border-border bg-muted/40 px-6 py-10 md:grid-cols-[1.2fr_1fr] md:px-12 md:py-14">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary">Newsletter</p>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight md:text-4xl">{newsletter.title}</h2>
            <p className="mt-3 max-w-md text-muted-foreground">{newsletter.description}</p>
          </div>
          {submitted ? (
            <p className="text-sm font-semibold text-primary">You&apos;re on the list. Thanks for joining.</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
              <Input
                type="email"
                placeholder={newsletter.placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Email address"
                className="flex-1 bg-white"
              />
              <Button type="submit" size="lg" className="shrink-0">
                {newsletter.buttonText}
              </Button>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
