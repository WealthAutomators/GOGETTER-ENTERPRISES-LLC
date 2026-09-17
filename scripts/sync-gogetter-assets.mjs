/**
 * Copy semantically matched product images from the shared (read-only)
 * Ecommerce-Product-Library into public/products and public/categories.
 * Also downloads editorial lifestyle images for hero/banners.
 */
import fs from "fs";
import path from "path";
import https from "https";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const LIBRARY = path.join(
  process.env.HOME,
  "Documents/Ecommerce-Product-Library/images"
);
const PRODUCTS_DIR = path.join(ROOT, "public/products");
const CATEGORIES_DIR = path.join(ROOT, "public/categories");
const HERO_DIR = path.join(ROOT, "public/hero");
const BANNERS_DIR = path.join(ROOT, "public/banners");
const LIFESTYLE_DIR = path.join(ROOT, "public/lifestyle");

const PRODUCT_COPIES = [
  ["electronics/instant-camera-001.jpg", "frame-capture-camera-1.jpg"],
  ["electronics/e-reader-001.jpg", "pocket-folio-reader-1.jpg"],
  ["electronics/mechanical-keyboard-001.jpg", "compact-type-keyboard-1.jpg"],
  ["electronics/mechanical-keyboard-002.jpg", "compact-type-keyboard-2.jpg"],
  ["electronics/portable-radio-001.jpg", "field-portable-radio-1.jpg"],
  ["office-desk/laptop-stand-001.jpg", "aluminum-laptop-riser-1.jpg"],
  ["electronics/clip-desk-light-001.jpg", "clip-task-light-1.jpg"],
  ["office-desk/fountain-pen-001.jpg", "precision-fountain-pen-1.jpg"],
  ["office-desk/pen-holder-001.jpg", "ceramic-pen-cup-1.jpg"],
  ["home-living/ceramic-table-lamp-001.jpg", "ceramic-table-lamp-1.jpg"],
  ["home-living/ceramic-table-lamp-002.jpg", "ceramic-table-lamp-2.jpg"],
  ["home-living/knit-throw-blanket-001.jpg", "knit-studio-throw-1.jpg"],
  ["home-living/minimal-wall-clock-001.jpg", "quiet-wall-clock-1.jpg"],
  ["home-living/arc-floor-lamp-001.jpg", "arc-floor-lamp-1.jpg"],
  ["kitchen-dining/insulated-travel-tumbler-001.jpg", "commute-travel-tumbler-1.jpg"],
  ["kitchen-dining/cast-iron-skillet-001.jpg", "everyday-cast-skillet-1.jpg"],
  ["kitchen-dining/wooden-cutting-board-001.jpg", "endgrain-prep-board-1.jpg"],
  ["kitchen-dining/wooden-cutting-board-002.jpg", "endgrain-prep-board-2.jpg"],
  ["gifts-lifestyle/pour-over-coffee-set-001.jpg", "pour-over-brew-set-1.jpg"],
  ["travel-bags/travel-backpack-001.jpg", "daily-transit-backpack-1.jpg"],
  ["travel-bags/travel-backpack-002.jpg", "daily-transit-backpack-2.jpg"],
  ["travel-bags/weekender-duffel-bag-001.jpg", "weekend-holdall-1.jpg"],
  ["travel-bags/leather-document-cover-001.jpg", "slim-passport-sleeve-1.jpg"],
  ["travel-bags/messenger-bag-001.jpg", "commuter-messenger-bag-1.jpg"],
  ["fitness-wellness/yoga-mat-001.jpg", "studio-grip-mat-1.jpg"],
  ["fitness-wellness/yoga-mat-002.jpg", "studio-grip-mat-2.jpg"],
  ["fitness-wellness/foam-roller-001.jpg", "recovery-foam-roller-1.jpg"],
  ["fitness-wellness/jump-rope-001.jpg", "weighted-jump-rope-1.jpg"],
  ["fitness-wellness/kettlebell-001.jpg", "compact-kettlebell-1.jpg"],
  ["outdoor/hiking-boots-001.jpg", "trail-hiking-boots-1.jpg"],
  ["outdoor/hiking-boots-002.jpg", "trail-hiking-boots-2.jpg"],
  ["outdoor/flashlight-001.jpg", "compact-led-flashlight-1.jpg"],
  ["outdoor/flashlight-002.jpg", "compact-led-flashlight-2.jpg"],
  ["outdoor/camping-lantern-001.jpg", "camp-field-lantern-1.jpg"],
  ["outdoor/camping-lantern-002.jpg", "camp-field-lantern-2.jpg"],
  ["outdoor/insulated-outdoor-bottle-001.jpg", "insulated-trail-bottle-1.jpg"],
  ["apparel/hoodie-001.jpg", "french-terry-hoodie-1.jpg"],
  ["apparel/hoodie-002.jpg", "french-terry-hoodie-2.jpg"],
  ["apparel/cotton-tshirt-001.jpg", "heavyweight-daily-tee-1.jpg"],
  ["apparel/cotton-tshirt-002.jpg", "heavyweight-daily-tee-2.jpg"],
  ["apparel/rain-jacket-001.jpg", "packable-rain-shell-1.jpg"],
  ["apparel/sneakers-001.jpg", "everyday-court-sneakers-1.jpg"],
  ["apparel/sneakers-002.jpg", "everyday-court-sneakers-2.jpg"],
  ["accessories/leather-wallet-001.jpg", "rfid-slim-wallet-1.jpg"],
  ["accessories/leather-wallet-002.jpg", "rfid-slim-wallet-2.jpg"],
  ["accessories/sunglasses-001.jpg", "everyday-polarized-shades-1.jpg"],
  ["accessories/sunglasses-002.jpg", "everyday-polarized-shades-2.jpg"],
  ["accessories/leather-belt-001.jpg", "everyday-leather-belt-1.jpg"],
  ["accessories/wristwatch-001.jpg", "field-wristwatch-1.jpg"],
  ["accessories/wristwatch-002.jpg", "field-wristwatch-2.jpg"],
  ["gifts-lifestyle/grooming-kit-001.jpg", "travel-grooming-kit-1.jpg"],
  ["gifts-lifestyle/razor-blade-set-001.jpg", "safety-razor-set-1.jpg"],
  ["gifts-lifestyle/bath-towel-set-001.jpg", "turkish-cotton-towels-1.jpg"],
  ["gifts-lifestyle/soap-bar-set-001.jpg", "botanical-soap-set-1.jpg"],
  ["home-living/woven-storage-basket-001.jpg", "woven-storage-basket-1.jpg"],
  ["home-living/woven-storage-basket-002.jpg", "woven-storage-basket-2.jpg"],
  ["home-living/storage-box-001.jpg", "modular-storage-box-1.jpg"],
  ["home-living/coat-hooks-001.jpg", "entryway-coat-hooks-1.jpg"],
  ["accessories/key-organizer-001.jpg", "compact-key-organizer-1.jpg"],
  ["office-desk/hardcover-notebook-001.jpg", "hardcover-field-notebook-1.jpg"],
  ["office-desk/hardcover-notebook-002.jpg", "hardcover-field-notebook-2.jpg"],
  ["office-desk/weekly-planner-001.jpg", "weekly-desk-planner-1.jpg"],
  ["office-desk/pencil-set-001.jpg", "graphite-pencil-set-1.jpg"],
  ["travel-bags/laptop-sleeve-001.jpg", "padded-laptop-sleeve-1.jpg"],
];

const CATEGORY_COPIES = [
  ["electronics/instant-camera-001.jpg", "tech-gadgets.jpg"],
  ["office-desk/laptop-stand-001.jpg", "workspace.jpg"],
  ["home-living/ceramic-table-lamp-001.jpg", "home.jpg"],
  ["kitchen-dining/cast-iron-skillet-001.jpg", "kitchen-dining.jpg"],
  ["travel-bags/travel-backpack-001.jpg", "travel.jpg"],
  ["fitness-wellness/yoga-mat-001.jpg", "fitness.jpg"],
  ["outdoor/hiking-boots-001.jpg", "outdoor.jpg"],
  ["apparel/hoodie-001.jpg", "apparel.jpg"],
  ["accessories/wristwatch-001.jpg", "accessories.jpg"],
  ["gifts-lifestyle/grooming-kit-001.jpg", "personal-essentials.jpg"],
  ["home-living/woven-storage-basket-001.jpg", "organization.jpg"],
  ["office-desk/hardcover-notebook-001.jpg", "productivity.jpg"],
];

const DOWNLOADS = [
  // Full-width editorial hero: urban movement / contemporary commute
  {
    dest: path.join(HERO_DIR, "hero-1.jpg"),
    url: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=2400&q=80",
  },
  // Lifestyle tiles
  {
    dest: path.join(LIFESTYLE_DIR, "workday.jpg"),
    url: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1600&q=80",
  },
  {
    dest: path.join(LIFESTYLE_DIR, "on-the-move.jpg"),
    url: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1600&q=80",
  },
  {
    dest: path.join(LIFESTYLE_DIR, "at-home.jpg"),
    url: "https://images.unsplash.com/photo-1556912173-46c336c7fd55?auto=format&fit=crop&w=1600&q=80",
  },
  {
    dest: path.join(LIFESTYLE_DIR, "train.jpg"),
    url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1600&q=80",
  },
  {
    dest: path.join(LIFESTYLE_DIR, "weekend.jpg"),
    url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
  },
  {
    dest: path.join(LIFESTYLE_DIR, "essentials.jpg"),
    url: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1600&q=80",
  },
  // Utility / philosophy / editorial banners
  {
    dest: path.join(BANNERS_DIR, "utility.jpg"),
    url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80",
  },
  {
    dest: path.join(BANNERS_DIR, "editorial.jpg"),
    url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=2000&q=80",
  },
  {
    dest: path.join(BANNERS_DIR, "about.jpg"),
    url: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2000&q=80",
  },
  {
    dest: path.join(BANNERS_DIR, "featured.jpg"),
    url: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=2000&q=80",
  },
];

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function copyFile(src, dest) {
  if (!fs.existsSync(src)) {
    throw new Error(`Missing library file: ${src}`);
  }
  const stats = fs.statSync(src);
  if (stats.size < 1000) {
    throw new Error(`Suspiciously small file: ${src} (${stats.size} bytes)`);
  }
  fs.copyFileSync(src, dest);
  return stats.size;
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https
      .get(url, { headers: { "User-Agent": "gogetter-ecommerce/1.0" } }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          file.close();
          fs.unlinkSync(dest);
          return download(res.headers.location, dest).then(resolve).catch(reject);
        }
        if (res.statusCode !== 200) {
          file.close();
          fs.unlinkSync(dest);
          return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
        }
        res.pipe(file);
        file.on("finish", () => file.close(() => resolve(fs.statSync(dest).size)));
      })
      .on("error", (err) => {
        file.close();
        if (fs.existsSync(dest)) fs.unlinkSync(dest);
        reject(err);
      });
  });
}

async function main() {
  if (!fs.existsSync(LIBRARY)) {
    throw new Error(`Library not found: ${LIBRARY}`);
  }

  ensureDir(PRODUCTS_DIR);
  ensureDir(CATEGORIES_DIR);
  ensureDir(HERO_DIR);
  ensureDir(BANNERS_DIR);
  ensureDir(LIFESTYLE_DIR);

  console.log("Copying product images from library...");
  for (const [srcRel, destName] of PRODUCT_COPIES) {
    const src = path.join(LIBRARY, srcRel);
    const dest = path.join(PRODUCTS_DIR, destName);
    const size = copyFile(src, dest);
    console.log(`  ${destName} (${size} bytes)`);
  }

  console.log("Copying category images...");
  for (const [srcRel, destName] of CATEGORY_COPIES) {
    const src = path.join(LIBRARY, srcRel);
    const dest = path.join(CATEGORIES_DIR, destName);
    copyFile(src, dest);
    console.log(`  ${destName}`);
  }

  console.log("Downloading editorial lifestyle images...");
  for (const item of DOWNLOADS) {
    ensureDir(path.dirname(item.dest));
    const size = await download(item.url, item.dest);
    if (size < 8000) throw new Error(`Download too small: ${item.dest}`);
    console.log(`  ${path.relative(ROOT, item.dest)} (${size} bytes)`);
  }

  console.log("Done.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
