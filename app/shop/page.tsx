import { Suspense } from "react";
import { ShopContent } from "@/components/shop/shop-content";

export const metadata = {
  title: "Shop",
  description: "Shop contemporary everyday products from GOGETTER ENTERPRISES LLC — travel, workspace, home, fitness, apparel, and more.",
};

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="py-16 text-center">Loading...</div>}>
      <ShopContent />
    </Suspense>
  );
}
