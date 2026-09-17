import Link from "next/link";
import Image from "next/image";
import { company } from "@/data/company";
import { footerLinks, paymentMethods } from "@/data/navigation";
import { Container } from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <Container className="py-14 md:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Image
              src="/logo/logo.svg"
              alt={company.name}
              width={220}
              height={40}
              className="mb-5 h-9 w-auto brightness-0 invert"
            />
            <p className="max-w-sm text-sm leading-relaxed text-white/70">{company.description}</p>
          </div>

          <div>
            <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white">Shop</h3>
            <ul className="space-y-2.5">
              {footerLinks.shop.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/70 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white">Categories</h3>
            <ul className="space-y-2.5">
              {footerLinks.categories.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/70 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white">Customer Care</h3>
            <ul className="space-y-2.5">
              {footerLinks.customerCare.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/70 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white">About</h3>
            <ul className="space-y-2.5">
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/70 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <h3 className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white">Contact</h3>
              <p className="text-sm leading-relaxed text-white/70">
                Contact details will be published here when they are available.
              </p>
              <Link href="/contact" className="mt-3 inline-block text-sm font-semibold text-white hover:text-white/80">
                Use the contact form →
              </Link>
            </div>
          </div>
        </div>
      </Container>

      <Separator className="bg-white/10" />

      <Container className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
        <p className="text-sm text-white/55">{company.copyright}</p>
        <div className="flex items-center gap-2">
          {paymentMethods.map((method) => (
            <Image
              key={method.name}
              src={method.icon}
              alt={method.name}
              width={40}
              height={28}
              className="h-7 w-auto opacity-80"
            />
          ))}
        </div>
      </Container>
    </footer>
  );
}
