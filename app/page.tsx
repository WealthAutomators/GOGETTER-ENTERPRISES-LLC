import { HeroBanner } from "@/components/homepage/hero-banner";
import { CategoryCarousel } from "@/components/homepage/category-carousel";
import { FeaturedCollection } from "@/components/homepage/featured-collection";
import { GoGetterEdit } from "@/components/homepage/gogetter-edit";
import { NewArrivals } from "@/components/homepage/new-arrivals";
import { UtilityFeature } from "@/components/homepage/utility-feature";
import { BestSellers } from "@/components/homepage/best-sellers";
import { PromotionalBanner } from "@/components/homepage/promotional-banner";
import { SecondaryCollection } from "@/components/homepage/secondary-collection";
import { PromoStrip } from "@/components/homepage/promo-strip";
import { AboutSection } from "@/components/homepage/about-section";
import { Newsletter } from "@/components/homepage/newsletter";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <CategoryCarousel />
      <FeaturedCollection />
      <GoGetterEdit />
      <NewArrivals />
      <UtilityFeature />
      <BestSellers />
      <PromotionalBanner />
      <SecondaryCollection />
      <PromoStrip />
      <AboutSection />
      <Newsletter />
    </>
  );
}
