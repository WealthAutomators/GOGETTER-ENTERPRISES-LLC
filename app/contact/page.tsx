"use client";

import { useState } from "react";
import { PageHero } from "@/components/ui/page-layout";
import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Clock, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        title="Contact Us"
        description="Have a question about an order or a product? Use the form and we will follow up."
        breadcrumbs={[{ label: "Contact Us" }]}
      />

      <Container className="pb-16">
        <div className="grid gap-12 py-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-xl font-bold">Get in touch</h2>
            <p className="mt-2 text-muted-foreground">
              Direct email, phone, and mailing details have not been published yet. Leave a message
              here and we will respond once those channels are live.
            </p>

            <div className="mt-8 space-y-6">
              {[
                { icon: Mail, label: "Email", value: "To be added" },
                { icon: MapPin, label: "Address", value: "To be added" },
                { icon: Clock, label: "Hours", value: "To be added" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-primary/10">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{label}</p>
                    <p className="text-sm text-muted-foreground">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-border bg-white p-6 md:p-8">
            <h2 className="font-display text-xl font-bold">Send a message</h2>

            {submitted ? (
              <div className="mt-6 flex flex-col items-center py-8 text-center">
                <CheckCircle className="h-12 w-12 text-primary" />
                <p className="mt-4 text-lg font-medium">Message received</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Thank you. We will get back to you as soon as contact channels are published.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" required className="mt-1.5" placeholder="Your name" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" required className="mt-1.5" placeholder="you@example.com" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" required className="mt-1.5" placeholder="How can we help?" />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" required className="mt-1.5" placeholder="Tell us more..." rows={5} />
                </div>
                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  Send message
                </Button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </>
  );
}
