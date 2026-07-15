export type Product = {
  slug: string;
  name: string;
  category: string;
  ageRange: string;
  price: number;
  comparePrice?: number;
  cert: string;
  description: string;
  specs: { label: string; value: string }[];
  stock: number;
  image?: string;
  badge?: "New" | "Hot" | "Sale" | "Low Stock";
  rating?: number;
};

export const PRODUCT_IMAGES: Record<string, string> = {
  "toyota-land-cruiser-v8-lc200-waterproof-heavy-duty-car-cover": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/1_4bbc4930-1c9d-4831-8526-6adce8b96f09.jpg",
  "heavy-duty-toyota-land-cruiser-prado-car-cover-kenya": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/1_4bbc4930-1c9d-4831-8526-6adce8b96f09.jpg",
  "toyota-landcruiser-prado-j150-j120-j90-heavy-duty-car-cover": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/1_4bbc4930-1c9d-4831-8526-6adce8b96f09.jpg",
  "toyota-kluger-heavy-duty-car-cover": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/images-2025-04-17T135659.331.jpg",
  "toyota-rush-heavy-duty-car-cover": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/images-2025-04-17T135659.331.jpg",
  "toyota-harrier-heavy-duty-car-cover": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/images-2025-04-17T135659.331.jpg",
  "toyota-rav4-heavy-duty-car-cover": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/images-2025-04-17T135659.331.jpg",
  "lexus-heavy-duty-car-coverall-models": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/1_4bbc4930-1c9d-4831-8526-6adce8b96f09.jpg",
  "mitsubishi-rvr-heavy-duty-car-cover": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/images-2025-04-17T135659.331.jpg",
  "mitsubishi-pajero-heavy-duty-car-cover": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/images-2025-04-17T135659.331.jpg",
  "mitsubishi-outlander-heavy-duty-car-cover": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/images-2025-04-17T135659.331.jpg",
  "honda-hr-v-heavy-duty-car-cover": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/images-2025-04-17T135659.331.jpg",
  "honda-vezel-heavy-duty-car-cover": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/images-2025-04-17T135659.331.jpg",
  "honda-cr-v-heavy-duty-car-cover": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/images-2025-04-17T135659.331.jpg",
  "subaru-crosstrek-heavy-duty-car-cover": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/images-2025-04-17T135659.331.jpg",
  "subaru-outback-heavy-duty-car-cover": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/images-2025-04-17T135659.331.jpg",
  "subaru-xv-heavy-duty-car-cover": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/images-2025-04-17T135659.331.jpg",
  "subaru-forester-heavy-duty-car-cover": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/images-2025-04-17T135659.331.jpg",
  "mazda-cx-3-to-9-heavy-duty-car-cover": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/images-2025-04-17T135659.331.jpg",
  "nissan-pathfinder-heavy-duty-car-cover": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/images-2025-04-17T135659.331.jpg",
  "nissan-patrol-heavy-duty-car-cover": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/images-2025-04-17T135659.331.jpg",
  "nissan-qashqai-heavy-duty-car-cover": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/images-2025-04-17T135659.331.jpg",
  "nissan-juke-heavy-duty-car-cover": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/images-2025-04-17T135659.331.jpg",
  "nissan-murano-heavy-duty-car-cover": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/images-2025-04-17T135659.331.jpg",
  "nissan-dualis-heavy-duty-car-cover": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/images-2025-04-17T135659.331.jpg",
  "nissan-x-trail-heavy-duty-car-cover": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/images-2025-04-17T135659.331.jpg",
  "volkswagen-heavy-duty-car-cover": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/71ok0RV4J4L._AC_UF8941000_QL80_-2.jpg",
  "audi-heavy-duty-car-cover": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/71ok0RV4J4L._AC_UF8941000_QL80_-2.jpg",
  "bmw-heavy-duty-car-coverall-models-available": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/71ok0RV4J4L._AC_UF8941000_QL80_-2.jpg",
  "mercedes-benz-heavy-duty-car-coverall-models-available": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/71ok0RV4J4L._AC_UF8941000_QL80_-2.jpg",
  "subaru-wrx-heavy-duty-car-cover": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/71ok0RV4J4L._AC_UF8941000_QL80_-2.jpg",
  "subaru-legacy-sedan-heavy-duty-car-cover": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/71ok0RV4J4L._AC_UF8941000_QL80_-2.jpg",
  "subaru-impreza-heavy-duty-car-cover": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/71ok0RV4J4L._AC_UF8941000_QL80_-2.jpg",
  "honda-insight-heavy-duty-car-cover": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/71ok0RV4J4L._AC_UF8941000_QL80_-2.jpg",
  "honda-grace-heavy-duty-car-cover": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/71ok0RV4J4L._AC_UF8941000_QL80_-2.jpg",
  "honda-civic-heavy-duty-car-cover": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/71ok0RV4J4L._AC_UF8941000_QL80_-2.jpg",
  "honda-accord-heavy-duty-car-cover": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/71ok0RV4J4L._AC_UF8941000_QL80_-2.jpg",
  "mazda-6-heavy-duty-car-cover": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/71ok0RV4J4L._AC_UF8941000_QL80_-2.jpg",
  "mazda-demio-car-cover": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/71ok0RV4J4L._AC_UF8941000_QL80_-2.jpg",
  "mazda-axela-car-cover": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/71ok0RV4J4L._AC_UF8941000_QL80_-2.jpg",
  "mazda-atenza-sedan-car-cover": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/71ok0RV4J4L._AC_UF8941000_QL80_-2.jpg",
  "nissan-fuga-heavy-duty-car-cover": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/71ok0RV4J4L._AC_UF8941000_QL80_-2.jpg",
  "nissan-tiida-latio-heavy-duty-car-cover": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/71ok0RV4J4L._AC_UF8941000_QL80_-2.jpg",
  "nissan-teana-heavy-duty-car-cover": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/71ok0RV4J4L._AC_UF8941000_QL80_-2.jpg",
  "nissan-sylphy-heavy-duty-car-cover": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/71ok0RV4J4L._AC_UF8941000_QL80_-2.jpg",
  "nissan-bluebird-heavy-duty-car-cover": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/71ok0RV4J4L._AC_UF8941000_QL80_-2.jpg",
  "nissan-sunny-heavy-duty-car-cover": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/71ok0RV4J4L._AC_UF8941000_QL80_-2.jpg",
  "toyota-premio-heavy-duty-car-cover-2": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/71ok0RV4J4L._AC_UF8941000_QL80_-2.jpg",
  "saloon-car-cover-heavy-duty": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/71ok0RV4J4L._AC_UF8941000_QL80_-2.jpg",
  "toyota-crown-heavy-duty-car-cover": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/71ok0RV4J4L._AC_UF8941000_QL80_-2.jpg",
  "toyota-mark-x-heavy-duty-car-cover": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/71ok0RV4J4L._AC_UF8941000_QL80_-2.jpg",
  "toyota-camry-heavy-duty-car-cover": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/71ok0RV4J4L._AC_UF8941000_QL80_-2.jpg",
  "toyota-fielder-heavy-duty-car-cover": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/71ok0RV4J4L._AC_UF8941000_QL80_-2.jpg",
  "toyota-axio-heavy-duty-car-cover": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/71ok0RV4J4L._AC_UF8941000_QL80_-2.jpg",
  "toyota-corolla-heavy-duty-car-cover": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/71ok0RV4J4L._AC_UF8941000_QL80_-2.jpg",
  "toyota-allion-heavy-duty-car-cover": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/71ok0RV4J4L._AC_UF8941000_QL80_-2.jpg",
  "toyota-premio-heavy-duty-car-cover": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/71ok0RV4J4L._AC_UF8941000_QL80_-2.jpg",
  "12ft-trampoline-with-ladder-and-safety-net": "https://payafterdelivery.co.ke/wp-content/uploads/2026/02/IMG-20250516-WA0018.jpg",
  "test-pro": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/Generated-Image-January-30-2026-1_47PM.png",
  "test-product-dont-buy": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/apple-shopping-event-full-img-opt.png",
  "kids-slide-with-swing-outdoor-playset-for-ages-1-5-years": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-22-at-12.36.57-PM.jpeg",
  "foldable-camping-table-portable-outdoor-picnic-table": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-22-at-12.35.35-PM.jpeg",
  "mastela-3-in-1-electric-baby-swing-side-to-side-motion-with-canopy-toys-2": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/bby-.jpeg",
  "mastela-3-in-1-electric-baby-swing-side-to-side-motion-with-canopy-toys": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-22-at-12.33.16-PM.jpeg",
  "aluminium-outdoor-camping-table-lightweight-foldable-portable-table": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/alm.jpeg",
  "foldable-adjustable-camping-picnic-table-multi-function-outdoor-table-with-benches-1-8m": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-22-at-12.26.26-PM.jpeg",
  "armrest-camping-chair-heavy-duty-foldable-outdoor-chair-with-carry-bag": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/dd.jpeg",
  "kids-swing-outdoor-indoor-play-swing": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-22-at-11.36.20-AM.jpeg",
  "bouncing-castle-kids-inflatable-play-castle-1-75-x-1-75-x-1-35-m": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-22-at-11.32.28-AM.jpeg",
  "heavy-duty-camping-chair-portable-outdoor-folding-chai": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-22-at-11.29.26-AM.jpeg",
  "camping-reclining-foldable-chair-sunbed-portable-outdoor-lounger": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-22-at-11.21.31-AM.jpeg",
  "outdoor-camping-folding-chair-portable-chair-green-black": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-22-at-11.20.36-AM.jpeg",
  "mega-family-camping-tent-7-10-person-two-room-tent": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/ms.jpeg",
  "mega-huge-family-camping-tent-10-12-person-two-room-tent": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/meg2.jpeg",
  "automatic-camping-tent-6-to-8-person-four-sided-tent": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-22-at-11.05.09-AM.jpeg",
  "inflatable-mattress-portable-air-bed-3x6-4x6-sizes": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-22-at-11.00.44-AM.jpeg",
  "inflatable-bed-with-backrest-self-pumping-electric-air-mattress-heavy-duty": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-22-at-10.59.21-AM.jpeg",
  "colorful-inflatable-lazy-sofa-portable-lounge-chair-with-pump": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-22-at-10.50.54-AM.jpeg",
  "5-in-1-inflatable-multifunction-sofa-bed-pull-out-lounge-bed": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-22-at-10.48.40-AM.jpeg",
  "car-travel-inflatable-mattress-automotive-air-bed-for-back-seat-with-pump": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-22-at-10.45.39-AM.jpeg",
  "5-in-1-inflatable-couch-lazy-sofa-bed-l-shaped-armrest-waterproof": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-22-at-10.44.30-AM.jpeg",
  "3-seater-intex-inflatable-pull-out-sofa-bed-free-electric-pump": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/abb.jpeg",
  "double-king-size-inflatable-bed-built-in-electric-pump-4x6": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/bd.jpeg",
  "6-5-inch-smart-hoverboard-self-balancing-with-bluetooth-guards-2": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/ihov.jpeg",
  "6-5-inch-smart-hoverboard-self-balancing-with-bluetooth-guards": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/6.5.jpeg",
  "8-inch-electric-hoverboard-self-balancing-with-bluetooth-led-lights": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/8.jpeg",
  "10-inch-off-road-hoverboard-all-terrain-self-balancing-scooter": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/10.jpeg",
  "8-inch-hoverboard-self-balancing-electric-scooter": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/hov.jpeg",
  "kids-electric-ride-on-car-rechargeable-2-motors-remote-control-ages-1-4-years": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/lb.jpeg",
  "kids-electric-ride-on-car-12v-4-motors-remote-control-ages-1-9-years": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/ca-scaled.jpeg",
  "kids-foldable-electric-scooter-120w-24v-18km-h-with-adjustable-height": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-21-at-9.38.49-PM.jpeg",
  "electric-scooter-32km-h-top-speed-45km-range-with-head-brake-lights": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-21-at-9.38.49-PM.jpeg",
  "drift-scooter-with-bluetooth-led-lights-3-speed-electric-scooter": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-21-at-9.26.05-PM.jpeg",
  "inflatable-swimming-pool-large-family-pool-with-free-pump": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-21-at-9.20.04-PM.jpeg",
  "intex-prism-frame-swimming-pool-round-305-x-76-cm-grey": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/1.jpeg",
  "intex-rectangular-frame-swimming-pool-kids-family-pool-ages-6": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-21-at-9.04.39-PM.jpeg",
  "ultra-xtra-prism-frame-swimming-pool-rectangular-400-x-200-x-122-cm": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-21-at-9.03.44-PM.jpeg"
};

export const PRODUCTS: Product[] = [
  {
    "slug": "toyota-land-cruiser-v8-lc200-waterproof-heavy-duty-car-cover",
    "name": "Toyota Land Cruiser V8 LC200 Waterproof Heavy Duty Car Cover",
    "category": "Car covers",
    "ageRange": "All Ages",
    "price": 5999,
    "cert": "ASTM / CE certified",
    "description": "Protect your Toyota Land Cruiser V8 LC200 with a premium heavy-duty car cover designed for maximum all-weather protection. This full-body SUV cover is tailored for Toyota Land Cruiser LC200 models and helps shield your vehicle from rain, sunlight, dust, scratches, tree sap, bird droppings and harsh ...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      },
      {
        "label": "Material",
        "value": "Waterproof heavy-duty"
      }
    ],
    "stock": 10,
    "rating": 4.5,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/1_4bbc4930-1c9d-4831-8526-6adce8b96f09.jpg",
    "comparePrice": 6899,
    "badge": "Sale"
  },
  {
    "slug": "heavy-duty-toyota-land-cruiser-prado-car-cover-kenya",
    "name": "Heavy Duty Toyota Land Cruiser Prado Car Cover Kenya",
    "category": "car cover",
    "ageRange": "All Ages",
    "price": 5999,
    "cert": "ASTM / CE certified",
    "description": "Protect your Toyota Land Cruiser Prado with a premium heavy-duty car cover designed for all Prado models including J90, J120, J150, TX, TXL, VX, VXL and TZG variants. Built for both indoor and outdoor use, Prado car covers are designed to protect your SUV from rain, dust, UV rays, bird droppings, sc...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      },
      {
        "label": "Material",
        "value": "Waterproof heavy-duty"
      }
    ],
    "stock": 24,
    "rating": 4.9,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/1_4bbc4930-1c9d-4831-8526-6adce8b96f09.jpg",
    "comparePrice": 6899,
    "badge": "Sale"
  },
  {
    "slug": "toyota-landcruiser-prado-j150-j120-j90-heavy-duty-car-cover",
    "name": "Toyota Landcruiser Prado J150, J120, J90 Heavy-duty Car Cover",
    "category": "car cover",
    "ageRange": "All Ages",
    "price": 5999,
    "cert": "ASTM / CE certified",
    "description": "Keep your Toyota Land Cruiser Prado clean and protected with this premium heavy-duty all-weather car cover. Designed to fit Prado models including J90, J120, J150, TX, TXL, VX, VXL and TZG variants, this full-body SUV cover provides maximum protection against harsh weather, sunlight, dust, scratches...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      },
      {
        "label": "Material",
        "value": "Waterproof heavy-duty"
      }
    ],
    "stock": 21,
    "rating": 4.6,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/1_4bbc4930-1c9d-4831-8526-6adce8b96f09.jpg",
    "comparePrice": 6899,
    "badge": "Sale"
  },
  {
    "slug": "toyota-kluger-heavy-duty-car-cover",
    "name": "Toyota Kluger Heavy-duty Car Cover",
    "category": "Car covers",
    "ageRange": "All Ages",
    "price": 5999,
    "cert": "ASTM / CE certified",
    "description": "Keep your Toyota Kluger Car\u00a0 protected in every season with our premium Heavy Duty Car Cover, specially designed to provide maximum protection and convenience. Made from durable multi-layer heavy-duty material, this cover helps shield your vehicle from harsh weather conditions and everyday outdoor d...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      },
      {
        "label": "Material",
        "value": "Waterproof heavy-duty"
      }
    ],
    "stock": 13,
    "rating": 4.8,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/images-2025-04-17T135659.331.jpg",
    "comparePrice": 6899,
    "badge": "Sale"
  },
  {
    "slug": "toyota-rush-heavy-duty-car-cover",
    "name": "Toyota Rush Heavy-duty Car Cover",
    "category": "Car covers",
    "ageRange": "All Ages",
    "price": 5999,
    "cert": "ASTM / CE certified",
    "description": "Keep your Toyota Rush Car protected in every season with our premium Heavy Duty Car Cover, specially designed to provide maximum protection and convenience. Made from durable multi-layer heavy-duty material, this cover helps shield your vehicle from harsh weather conditions and everyday outdoor dama...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      },
      {
        "label": "Material",
        "value": "Waterproof heavy-duty"
      }
    ],
    "stock": 10,
    "rating": 4.5,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/images-2025-04-17T135659.331.jpg",
    "comparePrice": 6899,
    "badge": "Sale"
  },
  {
    "slug": "toyota-harrier-heavy-duty-car-cover",
    "name": "Toyota Harrier Heavy-duty Car Cover",
    "category": "Car covers",
    "ageRange": "All Ages",
    "price": 5999,
    "cert": "ASTM / CE certified",
    "description": "Keep your Toyota Harrier Car\u00a0 protected in every season with our premium Heavy Duty Car Cover, specially designed to provide maximum protection and convenience. Made from durable multi-layer heavy-duty material, this cover helps shield your vehicle from harsh weather conditions and everyday outdoor ...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      },
      {
        "label": "Material",
        "value": "Waterproof heavy-duty"
      }
    ],
    "stock": 7,
    "rating": 4.2,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/images-2025-04-17T135659.331.jpg",
    "comparePrice": 6899,
    "badge": "Sale"
  },
  {
    "slug": "toyota-rav4-heavy-duty-car-cover",
    "name": "Toyota RAV4 Heavy-duty Car Cover",
    "category": "Car covers",
    "ageRange": "All Ages",
    "price": 5999,
    "cert": "ASTM / CE certified",
    "description": "Keep your Toyota RAV4 Car protected in every season with our premium Heavy Duty Car Cover, specially designed to provide maximum protection and convenience. Made from durable multi-layer heavy-duty material, this cover helps shield your vehicle from harsh weather conditions and everyday outdoor dama...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      },
      {
        "label": "Material",
        "value": "Waterproof heavy-duty"
      }
    ],
    "stock": 24,
    "rating": 4.9,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/images-2025-04-17T135659.331.jpg",
    "comparePrice": 6899,
    "badge": "Sale"
  },
  {
    "slug": "lexus-heavy-duty-car-coverall-models",
    "name": "Lexus Heavy-duty Car Cover(all models )",
    "category": "Car covers",
    "ageRange": "All Ages",
    "price": 5999,
    "cert": "Verified Quality",
    "description": "Keep your Lexus Car protected in every season with our premium Heavy Duty Car Cover, specially designed to provide maximum protection and convenience. Made from durable multi-layer heavy-duty material, this cover helps shield your vehicle from harsh weather conditions and everyday outdoor damage.\nPr...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      },
      {
        "label": "Material",
        "value": "Waterproof heavy-duty"
      }
    ],
    "stock": 20,
    "rating": 4.5,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/1_4bbc4930-1c9d-4831-8526-6adce8b96f09.jpg",
    "comparePrice": 6899,
    "badge": "Sale"
  },
  {
    "slug": "mitsubishi-rvr-heavy-duty-car-cover",
    "name": "Mitsubishi RVR Heavy-duty Car Cover",
    "category": "Car covers",
    "ageRange": "All Ages",
    "price": 5999,
    "cert": "Verified Quality",
    "description": "Keep your Mitsubishi RVR Car\u00a0 protected in every season with our premium Heavy Duty Car Cover, specially designed to provide maximum protection and convenience. Made from durable multi-layer heavy-duty material, this cover helps shield your vehicle from harsh weather conditions and everyday outdoor ...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      },
      {
        "label": "Material",
        "value": "Waterproof heavy-duty"
      }
    ],
    "stock": 17,
    "rating": 4.2,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/images-2025-04-17T135659.331.jpg",
    "comparePrice": 6899,
    "badge": "Sale"
  },
  {
    "slug": "mitsubishi-pajero-heavy-duty-car-cover",
    "name": "Mitsubishi Pajero Heavy-duty Car Cover",
    "category": "Car covers",
    "ageRange": "All Ages",
    "price": 5999,
    "cert": "Verified Quality",
    "description": "Keep your Mitsubishi Pajero Car\u00a0 protected in every season with our premium Heavy Duty Car Cover, specially designed to provide maximum protection and convenience. Made from durable multi-layer heavy-duty material, this cover helps shield your vehicle from harsh weather conditions and everyday outdo...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      },
      {
        "label": "Material",
        "value": "Waterproof heavy-duty"
      }
    ],
    "stock": 14,
    "rating": 4.9,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/images-2025-04-17T135659.331.jpg",
    "comparePrice": 6899,
    "badge": "Sale"
  },
  {
    "slug": "mitsubishi-outlander-heavy-duty-car-cover",
    "name": "Mitsubishi Outlander Heavy-duty Car Cover",
    "category": "Car covers",
    "ageRange": "All Ages",
    "price": 5999,
    "cert": "Verified Quality",
    "description": "Keep your Mitsubishi Outlander Car\u00a0 protected in every season with our premium Heavy Duty Car Cover, specially designed to provide maximum protection and convenience. Made from durable multi-layer heavy-duty material, this cover helps shield your vehicle from harsh weather conditions and everyday ou...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      },
      {
        "label": "Material",
        "value": "Waterproof heavy-duty"
      }
    ],
    "stock": 10,
    "rating": 4.5,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/images-2025-04-17T135659.331.jpg",
    "comparePrice": 6899,
    "badge": "Sale"
  },
  {
    "slug": "honda-hr-v-heavy-duty-car-cover",
    "name": "Honda HR-V Heavy-duty Car Cover",
    "category": "Car covers",
    "ageRange": "All Ages",
    "price": 5999,
    "cert": "Verified Quality",
    "description": "Keep your Honda HR-V Car protected in every season with our premium Heavy Duty Car Cover, specially designed to provide maximum protection and convenience. Made from durable multi-layer heavy-duty material, this cover helps shield your vehicle from harsh weather conditions and everyday outdoor damag...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      },
      {
        "label": "Material",
        "value": "Waterproof heavy-duty"
      }
    ],
    "stock": 7,
    "rating": 4.2,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/images-2025-04-17T135659.331.jpg",
    "comparePrice": 6899,
    "badge": "Sale"
  },
  {
    "slug": "honda-vezel-heavy-duty-car-cover",
    "name": "Honda Vezel Heavy-duty Car Cover",
    "category": "Car covers",
    "ageRange": "All Ages",
    "price": 5999,
    "cert": "Verified Quality",
    "description": "Keep your Honda Vezel Car protected in every season with our premium Heavy Duty Car Cover, specially designed to provide maximum protection and convenience. Made from durable multi-layer heavy-duty material, this cover helps shield your vehicle from harsh weather conditions and everyday outdoor dama...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      },
      {
        "label": "Material",
        "value": "Waterproof heavy-duty"
      }
    ],
    "stock": 24,
    "rating": 4.9,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/images-2025-04-17T135659.331.jpg",
    "comparePrice": 6899,
    "badge": "Sale"
  },
  {
    "slug": "honda-cr-v-heavy-duty-car-cover",
    "name": "Honda CR-V Heavy-duty Car Cover",
    "category": "Car covers",
    "ageRange": "All Ages",
    "price": 5999,
    "cert": "Verified Quality",
    "description": "Keep your Honda CR-V Car\u00a0 protected in every season with our premium Heavy Duty Car Cover, specially designed to provide maximum protection and convenience. Made from durable multi-layer heavy-duty material, this cover helps shield your vehicle from harsh weather conditions and everyday outdoor dama...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      },
      {
        "label": "Material",
        "value": "Waterproof heavy-duty"
      }
    ],
    "stock": 21,
    "rating": 4.6,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/images-2025-04-17T135659.331.jpg",
    "comparePrice": 6899,
    "badge": "Sale"
  },
  {
    "slug": "subaru-crosstrek-heavy-duty-car-cover",
    "name": "Subaru Crosstrek Heavy-duty Car Cover",
    "category": "Car covers",
    "ageRange": "All Ages",
    "price": 5999,
    "cert": "Verified Quality",
    "description": "Keep your Subaru Crosstrek Car protected in every season with our premium Heavy Duty Car Cover, specially designed to provide maximum protection and convenience. Made from durable multi-layer heavy-duty material, this cover helps shield your vehicle from harsh weather conditions and everyday outdoor...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      },
      {
        "label": "Material",
        "value": "Waterproof heavy-duty"
      }
    ],
    "stock": 18,
    "rating": 4.3,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/images-2025-04-17T135659.331.jpg",
    "comparePrice": 6899,
    "badge": "Sale"
  },
  {
    "slug": "subaru-outback-heavy-duty-car-cover",
    "name": "Subaru Outback Heavy-duty Car Cover",
    "category": "Car covers",
    "ageRange": "All Ages",
    "price": 5999,
    "cert": "Verified Quality",
    "description": "Keep your Subaru Outback Car\u00a0 protected in every season with our premium Heavy Duty Car Cover, specially designed to provide maximum protection and convenience. Made from durable multi-layer heavy-duty material, this cover helps shield your vehicle from harsh weather conditions and everyday outdoor ...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      },
      {
        "label": "Material",
        "value": "Waterproof heavy-duty"
      }
    ],
    "stock": 15,
    "rating": 4.0,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/images-2025-04-17T135659.331.jpg",
    "comparePrice": 6899,
    "badge": "Sale"
  },
  {
    "slug": "subaru-xv-heavy-duty-car-cover",
    "name": "Subaru XV heavy-duty Car Cover",
    "category": "Car covers",
    "ageRange": "All Ages",
    "price": 5999,
    "cert": "Verified Quality",
    "description": "Keep your Subaru XV Car\u00a0 protected in every season with our premium Heavy Duty Car Cover, specially designed to provide maximum protection and convenience. Made from durable multi-layer heavy-duty material, this cover helps shield your vehicle from harsh weather conditions and everyday outdoor damag...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      },
      {
        "label": "Material",
        "value": "Waterproof heavy-duty"
      }
    ],
    "stock": 12,
    "rating": 4.7,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/images-2025-04-17T135659.331.jpg",
    "comparePrice": 6899,
    "badge": "Sale"
  },
  {
    "slug": "subaru-forester-heavy-duty-car-cover",
    "name": "Subaru Forester Heavy-duty Car Cover",
    "category": "Car covers",
    "ageRange": "All Ages",
    "price": 5999,
    "cert": "Verified Quality",
    "description": "Keep your Subaru Forester\u00a0 protected in every season with our premium Heavy Duty Car Cover, specially designed to provide maximum protection and convenience. Made from durable multi-layer heavy-duty material, this cover helps shield your vehicle from harsh weather conditions and everyday outdoor dam...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      },
      {
        "label": "Material",
        "value": "Waterproof heavy-duty"
      }
    ],
    "stock": 9,
    "rating": 4.4,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/images-2025-04-17T135659.331.jpg",
    "comparePrice": 6899,
    "badge": "Sale"
  },
  {
    "slug": "mazda-cx-3-to-9-heavy-duty-car-cover",
    "name": "Mazda CX (3 to 9) Heavy-duty Car Cover",
    "category": "Car covers",
    "ageRange": "All Ages",
    "price": 5999,
    "cert": "Verified Quality",
    "description": "Keep your Mazda CX(3 to 9) Car\u00a0 protected in every season with our premium Heavy Duty Car Cover, specially designed to provide maximum protection and convenience. Made from durable multi-layer heavy-duty material, this cover helps shield your vehicle from harsh weather conditions and everyday outdoo...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      },
      {
        "label": "Material",
        "value": "Waterproof heavy-duty"
      }
    ],
    "stock": 6,
    "rating": 4.1,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/images-2025-04-17T135659.331.jpg",
    "comparePrice": 6899,
    "badge": "Sale"
  },
  {
    "slug": "nissan-pathfinder-heavy-duty-car-cover",
    "name": "Nissan Pathfinder Heavy-duty Car Cover",
    "category": "Car covers",
    "ageRange": "All Ages",
    "price": 5999,
    "cert": "Verified Quality",
    "description": "Keep your Nissan Pathfinder protected in every season with our premium Heavy Duty Car Cover, specially designed to provide maximum protection and convenience. Made from durable multi-layer heavy-duty material, this cover helps shield your vehicle from harsh weather conditions and everyday outdoor da...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      },
      {
        "label": "Material",
        "value": "Waterproof heavy-duty"
      }
    ],
    "stock": 23,
    "rating": 4.8,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/images-2025-04-17T135659.331.jpg",
    "comparePrice": 6899,
    "badge": "Sale"
  },
  {
    "slug": "nissan-patrol-heavy-duty-car-cover",
    "name": "Nissan Patrol Heavy-duty Car Cover",
    "category": "Car covers",
    "ageRange": "All Ages",
    "price": 5999,
    "cert": "Verified Quality",
    "description": "Keep your Nissan Patrol protected in every season with our premium Heavy Duty Car Cover, specially designed to provide maximum protection and convenience. Made from durable multi-layer heavy-duty material, this cover helps shield your vehicle from harsh weather conditions and everyday outdoor damage...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      },
      {
        "label": "Material",
        "value": "Waterproof heavy-duty"
      }
    ],
    "stock": 20,
    "rating": 4.5,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/images-2025-04-17T135659.331.jpg",
    "comparePrice": 6899,
    "badge": "Sale"
  },
  {
    "slug": "nissan-qashqai-heavy-duty-car-cover",
    "name": "Nissan Qashqai Heavy-duty Car Cover",
    "category": "Car covers",
    "ageRange": "All Ages",
    "price": 5999,
    "cert": "Verified Quality",
    "description": "Keep your Nissan Qashqai Car\u00a0 protected in every season with our premium Heavy Duty Car Cover, specially designed to provide maximum protection and convenience. Made from durable multi-layer heavy-duty material, this cover helps shield your vehicle from harsh weather conditions and everyday outdoor ...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      },
      {
        "label": "Material",
        "value": "Waterproof heavy-duty"
      }
    ],
    "stock": 17,
    "rating": 4.2,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/images-2025-04-17T135659.331.jpg",
    "comparePrice": 6899,
    "badge": "Sale"
  },
  {
    "slug": "nissan-juke-heavy-duty-car-cover",
    "name": "Nissan Juke Heavy-duty Car Cover",
    "category": "Car covers",
    "ageRange": "All Ages",
    "price": 5499,
    "cert": "Verified Quality",
    "description": "Keep your Nissan Juke Car\u00a0 protected in every season with our premium Heavy Duty Car Cover, specially designed to provide maximum protection and convenience. Made from durable multi-layer heavy-duty material, this cover helps shield your vehicle from harsh weather conditions and everyday outdoor dam...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      },
      {
        "label": "Material",
        "value": "Waterproof heavy-duty"
      }
    ],
    "stock": 15,
    "rating": 4.0,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/images-2025-04-17T135659.331.jpg",
    "comparePrice": 6899,
    "badge": "Sale"
  },
  {
    "slug": "nissan-murano-heavy-duty-car-cover",
    "name": "Nissan Murano Heavy-duty Car Cover",
    "category": "Car covers",
    "ageRange": "All Ages",
    "price": 5999,
    "cert": "Verified Quality",
    "description": "Keep your Nissan Murano Car protected in every season with our premium Heavy Duty Car Cover, specially designed to provide maximum protection and convenience. Made from durable multi-layer heavy-duty material, this cover helps shield your vehicle from harsh weather conditions and everyday outdoor da...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      },
      {
        "label": "Material",
        "value": "Waterproof heavy-duty"
      }
    ],
    "stock": 13,
    "rating": 4.8,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/images-2025-04-17T135659.331.jpg",
    "comparePrice": 6899,
    "badge": "Sale"
  },
  {
    "slug": "nissan-dualis-heavy-duty-car-cover",
    "name": "Nissan Dualis Heavy-duty Car Cover",
    "category": "Car covers",
    "ageRange": "All Ages",
    "price": 5999,
    "cert": "Verified Quality",
    "description": "Keep your Nissan Dualis Car protected in every season with our premium Heavy Duty Car Cover, specially designed to provide maximum protection and convenience. Made from durable multi-layer heavy-duty material, this cover helps shield your vehicle from harsh weather conditions and everyday outdoor da...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      },
      {
        "label": "Material",
        "value": "Waterproof heavy-duty"
      }
    ],
    "stock": 10,
    "rating": 4.5,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/images-2025-04-17T135659.331.jpg",
    "comparePrice": 6899,
    "badge": "Sale"
  },
  {
    "slug": "nissan-x-trail-heavy-duty-car-cover",
    "name": "Nissan X-trail Heavy-duty Car Cover",
    "category": "Car covers",
    "ageRange": "All Ages",
    "price": 5999,
    "cert": "Verified Quality",
    "description": "Keep your Nissan X-trail Car protected in every season with our premium Heavy Duty Car Cover, specially designed to provide maximum protection and convenience. Made from durable multi-layer heavy-duty material, this cover helps shield your vehicle from harsh weather conditions and everyday outdoor d...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      },
      {
        "label": "Material",
        "value": "Waterproof heavy-duty"
      }
    ],
    "stock": 7,
    "rating": 4.2,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/images-2025-04-17T135659.331.jpg",
    "comparePrice": 6899,
    "badge": "Sale"
  },
  {
    "slug": "volkswagen-heavy-duty-car-cover",
    "name": "Volkswagen Heavy-duty Car Cover",
    "category": "Car covers",
    "ageRange": "All Ages",
    "price": 5499,
    "cert": "Verified Quality",
    "description": "Keep your volkswagen car protected in every season with our premium Heavy Duty Car Cover, specially designed to provide maximum protection and convenience. Made from durable multi-layer heavy-duty material, this cover helps shield your vehicle from harsh weather conditions and everyday outdoor damag...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      },
      {
        "label": "Material",
        "value": "Waterproof heavy-duty"
      }
    ],
    "stock": 24,
    "rating": 4.9,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/71ok0RV4J4L._AC_UF8941000_QL80_-2.jpg",
    "comparePrice": 6899,
    "badge": "Sale"
  },
  {
    "slug": "audi-heavy-duty-car-cover",
    "name": "AUDI Heavy-duty Car Cover",
    "category": "Car covers",
    "ageRange": "All Ages",
    "price": 5499,
    "cert": "Verified Quality",
    "description": "Keep your AUDI Car protected in every season with our premium Heavy Duty Car Cover, specially designed to provide maximum protection and convenience. Made from durable multi-layer heavy-duty material, this cover helps shield your vehicle from harsh weather conditions and everyday outdoor damage.\nPro...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      },
      {
        "label": "Material",
        "value": "Waterproof heavy-duty"
      }
    ],
    "stock": 21,
    "rating": 4.6,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/71ok0RV4J4L._AC_UF8941000_QL80_-2.jpg",
    "comparePrice": 6899,
    "badge": "Sale"
  },
  {
    "slug": "bmw-heavy-duty-car-coverall-models-available",
    "name": "BMW Heavy-duty Car Cover(all models available)",
    "category": "Car covers",
    "ageRange": "All Ages",
    "price": 5499,
    "cert": "Verified Quality",
    "description": "Keep your BMW car protected in every season with our premium Heavy Duty Car Cover, specially designed to provide maximum protection and convenience. Made from durable multi-layer heavy-duty material, this cover helps shield your vehicle from harsh weather conditions and everyday outdoor damage.\nProt...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      },
      {
        "label": "Material",
        "value": "Waterproof heavy-duty"
      }
    ],
    "stock": 19,
    "rating": 4.4,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/71ok0RV4J4L._AC_UF8941000_QL80_-2.jpg",
    "comparePrice": 6899,
    "badge": "Sale"
  },
  {
    "slug": "mercedes-benz-heavy-duty-car-coverall-models-available",
    "name": "Mercedes Benz Heavy-duty Car Cover(all models available)",
    "category": "Car covers",
    "ageRange": "All Ages",
    "price": 5499,
    "cert": "Verified Quality",
    "description": "Keep your Mercedes Benz Car protected in every season with our premium Heavy Duty Car Cover, specially designed to provide maximum protection and convenience. Made from durable multi-layer heavy-duty material, this cover helps shield your vehicle from harsh weather conditions and everyday outdoor da...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      },
      {
        "label": "Material",
        "value": "Waterproof heavy-duty"
      }
    ],
    "stock": 16,
    "rating": 4.1,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/71ok0RV4J4L._AC_UF8941000_QL80_-2.jpg",
    "comparePrice": 6899,
    "badge": "Sale"
  },
  {
    "slug": "subaru-wrx-heavy-duty-car-cover",
    "name": "Subaru WRX Heavy-duty Car Cover",
    "category": "Car covers",
    "ageRange": "All Ages",
    "price": 5499,
    "cert": "Verified Quality",
    "description": "Keep your Subaru WRX Car\u00a0 protected in every season with our premium Heavy Duty Car Cover, specially designed to provide maximum protection and convenience. Made from durable multi-layer heavy-duty material, this cover helps shield your vehicle from harsh weather conditions and everyday outdoor dama...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      },
      {
        "label": "Material",
        "value": "Waterproof heavy-duty"
      }
    ],
    "stock": 13,
    "rating": 4.8,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/71ok0RV4J4L._AC_UF8941000_QL80_-2.jpg",
    "comparePrice": 6899,
    "badge": "Sale"
  },
  {
    "slug": "subaru-legacy-sedan-heavy-duty-car-cover",
    "name": "Subaru Legacy Sedan Heavy-duty Car Cover",
    "category": "Car covers",
    "ageRange": "All Ages",
    "price": 5499,
    "cert": "Verified Quality",
    "description": "Keep your Subaru Legacy Sedan Car protected in every season with our premium Heavy Duty Car Cover, specially designed to provide maximum protection and convenience. Made from durable multi-layer heavy-duty material, this cover helps shield your vehicle from harsh weather conditions and everyday outd...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      },
      {
        "label": "Material",
        "value": "Waterproof heavy-duty"
      }
    ],
    "stock": 10,
    "rating": 4.5,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/71ok0RV4J4L._AC_UF8941000_QL80_-2.jpg",
    "comparePrice": 6899,
    "badge": "Sale"
  },
  {
    "slug": "subaru-impreza-heavy-duty-car-cover",
    "name": "Subaru Impreza Heavy-duty Car Cover",
    "category": "Car covers",
    "ageRange": "All Ages",
    "price": 5499,
    "cert": "Verified Quality",
    "description": "Keep your Subaru Impeza protected in every season with our premium Heavy Duty Car Cover, specially designed to provide maximum protection and convenience. Made from durable multi-layer heavy-duty material, this cover helps shield your vehicle from harsh weather conditions and everyday outdoor damage...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      },
      {
        "label": "Material",
        "value": "Waterproof heavy-duty"
      }
    ],
    "stock": 7,
    "rating": 4.2,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/71ok0RV4J4L._AC_UF8941000_QL80_-2.jpg",
    "comparePrice": 6899,
    "badge": "Sale"
  },
  {
    "slug": "honda-insight-heavy-duty-car-cover",
    "name": "Honda Insight Heavy-duty Car Cover",
    "category": "Car covers",
    "ageRange": "All Ages",
    "price": 5499,
    "cert": "Verified Quality",
    "description": "Keep your Honda Insight Car\u00a0 protected in every season with our premium Heavy Duty Car Cover, specially designed to provide maximum protection and convenience. Made from durable multi-layer heavy-duty material, this cover helps shield your vehicle from harsh weather conditions and everyday outdoor d...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      },
      {
        "label": "Material",
        "value": "Waterproof heavy-duty"
      }
    ],
    "stock": 24,
    "rating": 4.9,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/71ok0RV4J4L._AC_UF8941000_QL80_-2.jpg",
    "comparePrice": 6899,
    "badge": "Sale"
  },
  {
    "slug": "honda-grace-heavy-duty-car-cover",
    "name": "Honda Grace Heavy-duty Car Cover",
    "category": "Car covers",
    "ageRange": "All Ages",
    "price": 5499,
    "cert": "Verified Quality",
    "description": "Keep your Honda Grace Car protected in every season with our premium Heavy Duty Car Cover, specially designed to provide maximum protection and convenience. Made from durable multi-layer heavy-duty material, this cover helps shield your vehicle from harsh weather conditions and everyday outdoor dama...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      },
      {
        "label": "Material",
        "value": "Waterproof heavy-duty"
      }
    ],
    "stock": 21,
    "rating": 4.6,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/71ok0RV4J4L._AC_UF8941000_QL80_-2.jpg",
    "comparePrice": 6899,
    "badge": "Sale"
  },
  {
    "slug": "honda-civic-heavy-duty-car-cover",
    "name": "Honda Civic Heavy-duty Car Cover",
    "category": "Car covers",
    "ageRange": "All Ages",
    "price": 5499,
    "cert": "Verified Quality",
    "description": "Keep your Honda Civic protected in every season with our premium Heavy Duty Car Cover, specially designed to provide maximum protection and convenience. Made from durable multi-layer heavy-duty material, this cover helps shield your vehicle from harsh weather conditions and everyday outdoor damage.\n...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      },
      {
        "label": "Material",
        "value": "Waterproof heavy-duty"
      }
    ],
    "stock": 18,
    "rating": 4.3,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/71ok0RV4J4L._AC_UF8941000_QL80_-2.jpg",
    "comparePrice": 6899,
    "badge": "Sale"
  },
  {
    "slug": "honda-accord-heavy-duty-car-cover",
    "name": "Honda Accord Heavy-duty Car Cover",
    "category": "Car covers",
    "ageRange": "All Ages",
    "price": 5499,
    "cert": "Verified Quality",
    "description": "Keep your Honda Accord Car protected in every season with our premium Heavy Duty Car Cover, specially designed to provide maximum protection and convenience. Made from durable multi-layer heavy-duty material, this cover helps shield your vehicle from harsh weather conditions and everyday outdoor dam...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      },
      {
        "label": "Material",
        "value": "Waterproof heavy-duty"
      }
    ],
    "stock": 15,
    "rating": 4.0,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/71ok0RV4J4L._AC_UF8941000_QL80_-2.jpg",
    "comparePrice": 6899,
    "badge": "Sale"
  },
  {
    "slug": "mazda-6-heavy-duty-car-cover",
    "name": "Mazda 6 Heavy-duty Car Cover",
    "category": "Car covers",
    "ageRange": "All Ages",
    "price": 5499,
    "cert": "Verified Quality",
    "description": "Keep your Mazda 6 Car protected in every season with our premium Heavy Duty Car Cover, specially designed to provide maximum protection and convenience. Made from durable multi-layer heavy-duty material, this cover helps shield your vehicle from harsh weather conditions and everyday outdoor damage.\n...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      },
      {
        "label": "Material",
        "value": "Waterproof heavy-duty"
      }
    ],
    "stock": 12,
    "rating": 4.7,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/71ok0RV4J4L._AC_UF8941000_QL80_-2.jpg",
    "comparePrice": 6899,
    "badge": "Sale"
  },
  {
    "slug": "mazda-demio-car-cover",
    "name": "Mazda Demio Car Cover",
    "category": "Car covers",
    "ageRange": "All Ages",
    "price": 5499,
    "cert": "Verified Quality",
    "description": "Keep your Mazda Demio Car protected in every season with our premium Heavy Duty Car Cover, specially designed to provide maximum protection and convenience. Made from durable multi-layer heavy-duty material, this cover helps shield your vehicle from harsh weather conditions and everyday outdoor dama...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      },
      {
        "label": "Material",
        "value": "Waterproof heavy-duty"
      }
    ],
    "stock": 9,
    "rating": 4.4,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/71ok0RV4J4L._AC_UF8941000_QL80_-2.jpg",
    "comparePrice": 6899,
    "badge": "Sale"
  },
  {
    "slug": "mazda-axela-car-cover",
    "name": "Mazda Axela Car Cover",
    "category": "Car covers",
    "ageRange": "All Ages",
    "price": 5499,
    "cert": "Verified Quality",
    "description": "Keep your Mazda Axela Car protected in every season with our premium Heavy Duty Car Cover, specially designed to provide maximum protection and convenience. Made from durable multi-layer heavy-duty material, this cover helps shield your vehicle from harsh weather conditions and everyday outdoor dama...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      },
      {
        "label": "Material",
        "value": "Waterproof heavy-duty"
      }
    ],
    "stock": 6,
    "rating": 4.1,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/71ok0RV4J4L._AC_UF8941000_QL80_-2.jpg",
    "comparePrice": 6899,
    "badge": "Sale"
  },
  {
    "slug": "mazda-atenza-sedan-car-cover",
    "name": "Mazda Atenza Sedan Car Cover",
    "category": "Car covers",
    "ageRange": "All Ages",
    "price": 5499,
    "cert": "Verified Quality",
    "description": "Keep your Mazda Atenza Sedan Car\u00a0 protected in every season with our premium Heavy Duty Car Cover, specially designed to provide maximum protection and convenience. Made from durable multi-layer heavy-duty material, this cover helps shield your vehicle from harsh weather conditions and everyday outd...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      },
      {
        "label": "Material",
        "value": "Waterproof heavy-duty"
      }
    ],
    "stock": 23,
    "rating": 4.8,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/71ok0RV4J4L._AC_UF8941000_QL80_-2.jpg",
    "comparePrice": 6899,
    "badge": "Sale"
  },
  {
    "slug": "nissan-fuga-heavy-duty-car-cover",
    "name": "Nissan Fuga Heavy-duty Car Cover",
    "category": "Car covers",
    "ageRange": "All Ages",
    "price": 5499,
    "cert": "Verified Quality",
    "description": "Keep your Nissan Fuga Car protected in every season with our premium Heavy Duty Car Cover, specially designed to provide maximum protection and convenience. Made from durable multi-layer heavy-duty material, this cover helps shield your vehicle from harsh weather conditions and everyday outdoor dama...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      },
      {
        "label": "Material",
        "value": "Waterproof heavy-duty"
      }
    ],
    "stock": 20,
    "rating": 4.5,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/71ok0RV4J4L._AC_UF8941000_QL80_-2.jpg",
    "comparePrice": 6899,
    "badge": "Sale"
  },
  {
    "slug": "nissan-tiida-latio-heavy-duty-car-cover",
    "name": "Nissan Tiida Latio Heavy-duty Car Cover",
    "category": "Car covers",
    "ageRange": "All Ages",
    "price": 5499,
    "cert": "Verified Quality",
    "description": "Keep your Nissan Tiida Latio Car protected in every season with our premium Heavy Duty Car Cover, specially designed to provide maximum protection and convenience. Made from durable multi-layer heavy-duty material, this cover helps shield your vehicle from harsh weather conditions and everyday outdo...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      },
      {
        "label": "Material",
        "value": "Waterproof heavy-duty"
      }
    ],
    "stock": 17,
    "rating": 4.2,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/71ok0RV4J4L._AC_UF8941000_QL80_-2.jpg",
    "comparePrice": 6899,
    "badge": "Sale"
  },
  {
    "slug": "nissan-teana-heavy-duty-car-cover",
    "name": "Nissan Teana Heavy-duty Car Cover",
    "category": "Car covers",
    "ageRange": "All Ages",
    "price": 5499,
    "cert": "Verified Quality",
    "description": "Keep your Nissan Teana protected in every season with our premium Heavy Duty Car Cover, specially designed to provide maximum protection and convenience. Made from durable multi-layer heavy-duty material, this cover helps shield your vehicle from harsh weather conditions and everyday outdoor damage....",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      },
      {
        "label": "Material",
        "value": "Waterproof heavy-duty"
      }
    ],
    "stock": 12,
    "rating": 4.7,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/71ok0RV4J4L._AC_UF8941000_QL80_-2.jpg",
    "comparePrice": 6899,
    "badge": "Sale"
  },
  {
    "slug": "nissan-sylphy-heavy-duty-car-cover",
    "name": "Nissan Sylphy Heavy-duty Car Cover",
    "category": "Car covers",
    "ageRange": "All Ages",
    "price": 5499,
    "cert": "Verified Quality",
    "description": "Keep your Nissan Sylphy Car protected in every season with our premium Heavy Duty Car Cover, specially designed to provide maximum protection and convenience. Made from durable multi-layer heavy-duty material, this cover helps shield your vehicle from harsh weather conditions and everyday outdoor da...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      },
      {
        "label": "Material",
        "value": "Waterproof heavy-duty"
      }
    ],
    "stock": 9,
    "rating": 4.4,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/71ok0RV4J4L._AC_UF8941000_QL80_-2.jpg",
    "comparePrice": 6899,
    "badge": "Sale"
  },
  {
    "slug": "nissan-bluebird-heavy-duty-car-cover",
    "name": "Nissan Bluebird Heavy-duty Car Cover",
    "category": "Car covers",
    "ageRange": "All Ages",
    "price": 5499,
    "cert": "Verified Quality",
    "description": "Keep your Nissan Bluebird Car protected in every season with our premium Heavy Duty Car Cover, specially designed to provide maximum protection and convenience. Made from durable multi-layer heavy-duty material, this cover helps shield your vehicle from harsh weather conditions and everyday outdoor ...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      },
      {
        "label": "Material",
        "value": "Waterproof heavy-duty"
      }
    ],
    "stock": 6,
    "rating": 4.1,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/71ok0RV4J4L._AC_UF8941000_QL80_-2.jpg",
    "comparePrice": 6899,
    "badge": "Sale"
  },
  {
    "slug": "nissan-sunny-heavy-duty-car-cover",
    "name": "Nissan Sunny Heavy-duty Car Cover",
    "category": "Car covers",
    "ageRange": "All Ages",
    "price": 5499,
    "cert": "Verified Quality",
    "description": "Keep your Nissan Sunny Car protected in every season with our premium Heavy Duty Car Cover, specially designed to provide maximum protection and convenience. Made from durable multi-layer heavy-duty material, this cover helps shield your vehicle from harsh weather conditions and everyday outdoor dam...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      },
      {
        "label": "Material",
        "value": "Waterproof heavy-duty"
      }
    ],
    "stock": 23,
    "rating": 4.8,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/71ok0RV4J4L._AC_UF8941000_QL80_-2.jpg",
    "comparePrice": 6899,
    "badge": "Sale"
  },
  {
    "slug": "toyota-premio-heavy-duty-car-cover-2",
    "name": "Toyota Premio Heavy-duty Car Cover",
    "category": "Car covers",
    "ageRange": "All Ages",
    "price": 5499,
    "cert": "ASTM / CE certified",
    "description": "Keep your Toyota Premio protected in every season with our premium Heavy Duty Car Cover, specially designed to provide maximum protection and convenience. Made from durable multi-layer heavy-duty material, this cover helps shield your vehicle from harsh weather conditions and everyday outdoor damage...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      },
      {
        "label": "Material",
        "value": "Waterproof heavy-duty"
      }
    ],
    "stock": 12,
    "rating": 4.7,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/71ok0RV4J4L._AC_UF8941000_QL80_-2.jpg",
    "comparePrice": 6899,
    "badge": "Sale"
  },
  {
    "slug": "saloon-car-cover-heavy-duty",
    "name": "Saloon Car Cover Heavy-duty",
    "category": "Car covers",
    "ageRange": "All Ages",
    "price": 5499,
    "cert": "Verified Quality",
    "description": "Keep your Saloon Car protected in every season with our premium Heavy Duty Car Cover, specially designed to provide maximum protection and convenience. Made from durable multi-layer heavy-duty material, this cover helps shield your vehicle from harsh weather conditions and everyday outdoor damage.\nP...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      },
      {
        "label": "Material",
        "value": "Waterproof heavy-duty"
      }
    ],
    "stock": 15,
    "rating": 4.0,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/71ok0RV4J4L._AC_UF8941000_QL80_-2.jpg",
    "comparePrice": 6899,
    "badge": "Sale"
  },
  {
    "slug": "toyota-crown-heavy-duty-car-cover",
    "name": "Toyota Crown Heavy-duty Car Cover",
    "category": "Car covers",
    "ageRange": "All Ages",
    "price": 5499,
    "cert": "ASTM / CE certified",
    "description": "Keep your Toyota Crown Car\u00a0 protected in every season with our premium Heavy Duty Car Cover, specially designed to provide maximum protection and convenience. Made from durable multi-layer heavy-duty material, this cover helps shield your vehicle from harsh weather conditions and everyday outdoor da...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      },
      {
        "label": "Material",
        "value": "Waterproof heavy-duty"
      }
    ],
    "stock": 12,
    "rating": 4.7,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/71ok0RV4J4L._AC_UF8941000_QL80_-2.jpg",
    "comparePrice": 6899,
    "badge": "Sale"
  },
  {
    "slug": "toyota-mark-x-heavy-duty-car-cover",
    "name": "Toyota Mark X Heavy-duty Car Cover",
    "category": "Car covers",
    "ageRange": "All Ages",
    "price": 5499,
    "cert": "ASTM / CE certified",
    "description": "Keep your Toyota Mark X Car protected in every season with our premium Heavy Duty Car Cover, specially designed to provide maximum protection and convenience. Made from durable multi-layer heavy-duty material, this cover helps shield your vehicle from harsh weather conditions and everyday outdoor da...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      },
      {
        "label": "Material",
        "value": "Waterproof heavy-duty"
      }
    ],
    "stock": 9,
    "rating": 4.4,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/71ok0RV4J4L._AC_UF8941000_QL80_-2.jpg",
    "comparePrice": 6899,
    "badge": "Sale"
  },
  {
    "slug": "toyota-camry-heavy-duty-car-cover",
    "name": "Toyota Camry Heavy-duty Car Cover",
    "category": "Car covers",
    "ageRange": "All Ages",
    "price": 5499,
    "cert": "ASTM / CE certified",
    "description": "Keep your Toyota Camry Car protected in every season with our premium Heavy Duty Car Cover, specially designed to provide maximum protection and convenience. Made from durable multi-layer heavy-duty material, this cover helps shield your vehicle from harsh weather conditions and everyday outdoor dam...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      },
      {
        "label": "Material",
        "value": "Waterproof heavy-duty"
      }
    ],
    "stock": 6,
    "rating": 4.1,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/71ok0RV4J4L._AC_UF8941000_QL80_-2.jpg",
    "comparePrice": 6899,
    "badge": "Sale"
  },
  {
    "slug": "toyota-fielder-heavy-duty-car-cover",
    "name": "Toyota Fielder Heavy-duty Car Cover",
    "category": "Car covers",
    "ageRange": "All Ages",
    "price": 5499,
    "cert": "ASTM / CE certified",
    "description": "Keep your Toyota Fielder Car\u00a0 protected in every season with our premium Heavy Duty Car Cover, specially designed to provide maximum protection and convenience. Made from durable multi-layer heavy-duty material, this cover helps shield your vehicle from harsh weather conditions and everyday outdoor ...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      },
      {
        "label": "Material",
        "value": "Waterproof heavy-duty"
      }
    ],
    "stock": 24,
    "rating": 4.9,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/71ok0RV4J4L._AC_UF8941000_QL80_-2.jpg",
    "comparePrice": 6899,
    "badge": "Sale"
  },
  {
    "slug": "toyota-axio-heavy-duty-car-cover",
    "name": "Toyota Axio Heavy-duty Car Cover",
    "category": "Car covers",
    "ageRange": "All Ages",
    "price": 5499,
    "cert": "ASTM / CE certified",
    "description": "Keep your Toyota Axio car protected in every season with our premium Heavy Duty Car Cover, specially designed to provide maximum protection and convenience. Made from durable multi-layer heavy-duty material, this cover helps shield your vehicle from harsh weather conditions and everyday outdoor dama...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      },
      {
        "label": "Material",
        "value": "Waterproof heavy-duty"
      }
    ],
    "stock": 21,
    "rating": 4.6,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/71ok0RV4J4L._AC_UF8941000_QL80_-2.jpg",
    "comparePrice": 6899,
    "badge": "Sale"
  },
  {
    "slug": "toyota-corolla-heavy-duty-car-cover",
    "name": "Toyota Corolla Heavy-duty Car Cover",
    "category": "Car covers",
    "ageRange": "All Ages",
    "price": 5499,
    "cert": "ASTM / CE certified",
    "description": "Keep your Toyota Corolla Car protected in every season with our premium Heavy Duty Car Cover, specially designed to provide maximum protection and convenience. Made from durable multi-layer heavy-duty material, this cover helps shield your vehicle from harsh weather conditions and everyday outdoor d...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      },
      {
        "label": "Material",
        "value": "Waterproof heavy-duty"
      }
    ],
    "stock": 18,
    "rating": 4.3,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/71ok0RV4J4L._AC_UF8941000_QL80_-2.jpg",
    "comparePrice": 6899,
    "badge": "Sale"
  },
  {
    "slug": "toyota-allion-heavy-duty-car-cover",
    "name": "Toyota Allion Heavy-duty Car Cover",
    "category": "Car covers",
    "ageRange": "All Ages",
    "price": 5499,
    "cert": "ASTM / CE certified",
    "description": "Keep your Toyota Allion Car protected in every season with our premium Heavy Duty Car Cover, specially designed to provide maximum protection and convenience. Made from durable multi-layer heavy-duty material, this cover helps shield your vehicle from harsh weather conditions and everyday outdoor da...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      },
      {
        "label": "Material",
        "value": "Waterproof heavy-duty"
      }
    ],
    "stock": 16,
    "rating": 4.1,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/71ok0RV4J4L._AC_UF8941000_QL80_-2.jpg",
    "comparePrice": 6899,
    "badge": "Sale"
  },
  {
    "slug": "toyota-premio-heavy-duty-car-cover",
    "name": "Toyota Premio Heavy-duty Car Cover",
    "category": "Car covers",
    "ageRange": "All Ages",
    "price": 5499,
    "cert": "ASTM / CE certified",
    "description": "Keep your Toyota Premio protected in every season with our premium Heavy Duty Car Cover, specially designed to provide maximum protection and convenience. Made from durable multi-layer heavy-duty material, this cover helps shield your vehicle from harsh weather conditions and everyday outdoor damage...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      },
      {
        "label": "Material",
        "value": "Waterproof heavy-duty"
      }
    ],
    "stock": 13,
    "rating": 4.8,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/05/71ok0RV4J4L._AC_UF8941000_QL80_-2.jpg",
    "comparePrice": 6899,
    "badge": "Sale"
  },
  {
    "slug": "12ft-trampoline-with-ladder-and-safety-net",
    "name": "12ft Trampoline with Ladder and Safety Net",
    "category": "Kids Outdoor Play",
    "ageRange": "3-12 yrs",
    "price": 51999,
    "cert": "Verified Quality",
    "description": "\ud83c\udfc0 12ft Outdoor Trampoline with Safety Enclosure \u2013 Fun, Fitness & Family Bonding in One!\nBring excitement and exercise to your backyard with this premium 12ft trampoline \u2014 the perfect mix of fun, safety, and durability. Built for both kids and adults, this trampoline delivers hours of active play, st...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 23,
    "rating": 4.8,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/02/IMG-20250516-WA0018.jpg",
    "comparePrice": 68999,
    "badge": "Sale"
  },
  {
    "slug": "test-pro",
    "name": "test pro",
    "category": "Other",
    "ageRange": "3-12 yrs",
    "price": 1900,
    "cert": "Verified Quality",
    "description": "",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 22,
    "rating": 4.7,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/Generated-Image-January-30-2026-1_47PM.png"
  },
  {
    "slug": "test-product-dont-buy",
    "name": "test product dont buy",
    "category": "Other",
    "ageRange": "3-12 yrs",
    "price": 1,
    "cert": "Verified Quality",
    "description": "",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 17,
    "rating": 4.2,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/apple-shopping-event-full-img-opt.png",
    "badge": "New"
  },
  {
    "slug": "kids-slide-with-swing-outdoor-playset-for-ages-1-5-years",
    "name": "Kids Slide with Swing \u2013 Outdoor Playset for Ages 1\u20135 Years",
    "category": "Kids Outdoor Play",
    "ageRange": "3-12 yrs",
    "price": 29999,
    "cert": "Verified Quality",
    "description": "Keep your little ones active and entertained with this Kids Slide with Swing, a perfect addition to any backyard or play area. Designed for children aged 1\u20135 years, it combines a slide and swing in one durable and safe playset.\nMade with high-quality, weather-resistant materials, this playset ensure...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 20,
    "rating": 4.5,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-22-at-12.36.57-PM.jpeg"
  },
  {
    "slug": "foldable-camping-table-portable-outdoor-picnic-table",
    "name": "Foldable Camping Table \u2013 Portable Outdoor Picnic Table",
    "category": "Camping & Outdoor Gear",
    "ageRange": "3-12 yrs",
    "price": 8499,
    "cert": "Verified Quality",
    "description": "Make outdoor meals and activities easier with this Foldable Camping Table, designed for portability, convenience, and durability. Ideal for camping trips, picnics, beach outings, or backyard gatherings, it provides a stable and reliable surface for dining or games.\nThe foldable design makes it easy ...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 17,
    "rating": 4.2,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-22-at-12.35.35-PM.jpeg",
    "badge": "Hot"
  },
  {
    "slug": "mastela-3-in-1-electric-baby-swing-side-to-side-motion-with-canopy-toys-2",
    "name": "Mastela 3-in-1 Electric Baby Swing \u2013 Side-to-Side Motion with Canopy &#038; Toys",
    "category": "Baby Gear $ Toys",
    "ageRange": "3-12 yrs",
    "price": 12499,
    "cert": "ASTM / CE certified",
    "description": "Give your baby a safe and fun swinging experience with the Mastela 3-in-1 Electric Swing, designed to grow with your child. Its side-to-side movement and 5 adjustable angles provide comfort and support for play, exploration, or napping.\nThe canopy with mosquito net keeps your little one safe, while ...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 14,
    "rating": 4.9,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/bby-.jpeg",
    "badge": "New"
  },
  {
    "slug": "mastela-3-in-1-electric-baby-swing-side-to-side-motion-with-canopy-toys",
    "name": "Mastela 3-in-1 Electric Baby Swing \u2013 Side-to-Side Motion with Canopy &#038; Toys",
    "category": "Baby Gear $ Toys",
    "ageRange": "3-12 yrs",
    "price": 12999,
    "cert": "ASTM / CE certified",
    "description": "Make playtime, nap time, and exploration safe and enjoyable for your little one with the Mastela 3-in-1 Electric Swing. Designed with side-to-side motion and 5 adjustable angles, this swing grows with your child, providing comfort and support at every stage.\nThe reclining seat positions are perfect ...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 11,
    "rating": 4.6,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-22-at-12.33.16-PM.jpeg"
  },
  {
    "slug": "aluminium-outdoor-camping-table-lightweight-foldable-portable-table",
    "name": "Aluminium Outdoor/Camping Table \u2013 Lightweight Foldable Portable Table",
    "category": "Camping & Outdoor Gear",
    "ageRange": "3-12 yrs",
    "price": 4999,
    "cert": "Verified Quality",
    "description": "Enjoy convenient outdoor dining and activities with this Aluminium Outdoor/Camping Table, designed for portability, durability, and ease of use. Ideal for camping trips, beach outings, picnics, or backyard gatherings, this table is lightweight yet sturdy enough for everyday outdoor use.\nMade from hi...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 7,
    "rating": 4.2,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/alm.jpeg",
    "badge": "New"
  },
  {
    "slug": "foldable-adjustable-camping-picnic-table-multi-function-outdoor-table-with-benches-1-8m",
    "name": "Foldable Adjustable Camping Picnic Table \u2013 Multi-Function Outdoor Table with Benches (1.8M)",
    "category": "Camping & Outdoor Gear",
    "ageRange": "3-12 yrs",
    "price": 10999,
    "cert": "Verified Quality",
    "description": "Make outdoor meals and activities easy with this Foldable Adjustable Camping Picnic Table. Designed for flexibility and convenience, it can transform into multiple configurations: a bench, a standalone table, or a table with 4 attached seats, making it perfect for family camping trips, picnics, or b...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 23,
    "rating": 4.8,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-22-at-12.26.26-PM.jpeg"
  },
  {
    "slug": "armrest-camping-chair-heavy-duty-foldable-outdoor-chair-with-carry-bag",
    "name": "Armrest Camping Chair \u2013 Heavy-Duty Foldable Outdoor Chair with Carry Bag",
    "category": "Camping & Outdoor Gear",
    "ageRange": "3-12 yrs",
    "price": 5999,
    "cert": "Verified Quality",
    "description": "Relax in comfort anywhere with this Armrest Camping Chair, designed for durability, convenience, and portability. Featuring sturdy armrests and a heavy-duty construction, this chair supports adults while providing a comfortable outdoor seating experience.\nIts foldable design makes it easy to store a...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 19,
    "rating": 4.4,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/dd.jpeg"
  },
  {
    "slug": "kids-swing-outdoor-indoor-play-swing",
    "name": "Kids Swing \u2013 Outdoor &#038; Indoor Play Swing",
    "category": "Kids Outdoor Play",
    "ageRange": "3-12 yrs",
    "price": 7999,
    "cert": "Verified Quality",
    "description": "Bring hours of fun and active play to your children with this Kids Swing, designed for safety, comfort, and durability. Perfect for backyards, gardens, or playrooms, it encourages outdoor activity and imaginative play.\nMade with strong and durable materials, this swing is easy to install and provide...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 16,
    "rating": 4.1,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-22-at-11.36.20-AM.jpeg"
  },
  {
    "slug": "bouncing-castle-kids-inflatable-play-castle-1-75-x-1-75-x-1-35-m",
    "name": "Bouncing Castle \u2013 Kids Inflatable Play Castle (1.75 \u00d7 1.75 \u00d7 1.35 m)",
    "category": "Kids Outdoor Play",
    "ageRange": "3-12 yrs",
    "price": 19999,
    "cert": "Verified Quality",
    "description": "Keep your kids entertained for hours with this Bouncing Castle, designed for safe and fun indoor or outdoor play. The durable inflatable construction ensures stability while allowing children to jump, bounce, and enjoy themselves safely.\nLightweight and easy to inflate, this bouncing castle is ideal...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 11,
    "rating": 4.6,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-22-at-11.32.28-AM.jpeg",
    "badge": "Hot"
  },
  {
    "slug": "heavy-duty-camping-chair-portable-outdoor-folding-chai",
    "name": "Heavy-Duty Camping Chair \u2013 Portable Outdoor Folding Chai",
    "category": "Camping & Outdoor Gear",
    "ageRange": "3-12 yrs",
    "price": 5999,
    "cert": "Verified Quality",
    "description": "Enjoy comfortable seating outdoors with this Heavy-Duty Camping Chair, built for stability, strength, and convenience. Perfect for camping trips, fishing trips, picnics, beach outings, or backyard lounging, it combines portability with durability.\nConstructed from high-quality, heavy-duty materials,...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 8,
    "rating": 4.3,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-22-at-11.29.26-AM.jpeg"
  },
  {
    "slug": "camping-reclining-foldable-chair-sunbed-portable-outdoor-lounger",
    "name": "Camping Reclining Foldable Chair / Sunbed \u2013 Portable Outdoor Lounger",
    "category": "Camping & Outdoor Gear",
    "ageRange": "3-12 yrs",
    "price": 8499,
    "cert": "Verified Quality",
    "description": "Upgrade your outdoor relaxation with this Camping Reclining Foldable Chair / Sunbed, designed for comfort, convenience, and portability. Featuring a reclining zero-gravity design, this chair allows you to sit back, relax, and enjoy long hours of outdoor leisure.\nPerfect for camping trips, beach outi...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 23,
    "rating": 4.8,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-22-at-11.21.31-AM.jpeg"
  },
  {
    "slug": "outdoor-camping-folding-chair-portable-chair-green-black",
    "name": "Outdoor Camping Folding Chair \u2013 Portable Chair (Green &#038; Black)",
    "category": "Camping & Outdoor Gear",
    "ageRange": "3-12 yrs",
    "price": 2999,
    "cert": "Verified Quality",
    "description": "Relax anywhere with this Outdoor Camping Folding Chair, designed for convenience, comfort, and portability. Perfect for camping trips, picnics, beach outings, or backyard use, it folds easily for quick setup and compact storage.\nMade with durable, weather-resistant materials, this chair can withstan...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 20,
    "rating": 4.5,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-22-at-11.20.36-AM.jpeg"
  },
  {
    "slug": "mega-family-camping-tent-7-10-person-two-room-tent",
    "name": "Mega Family Camping Tent \u2013 7\u201310 Person Two-Room Tent",
    "category": "Camping & Outdoor Gear",
    "ageRange": "3-12 yrs",
    "price": 24999,
    "cert": "Verified Quality",
    "description": "Make your family camping trips comfortable and organized with this Mega Family Camping Tent, designed to accommodate 7\u201310 people. The two separate rooms provide privacy, extra space, and a functional layout for families or small groups.\nConstructed from high-quality, durable materials, this tent off...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 17,
    "rating": 4.2,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/ms.jpeg"
  },
  {
    "slug": "mega-huge-family-camping-tent-10-12-person-two-room-tent",
    "name": "Mega Huge Family Camping Tent \u2013 10\u201312 Person Two-Room Tent",
    "category": "Camping & Outdoor Gear",
    "ageRange": "3-12 yrs",
    "price": 29999,
    "cert": "Verified Quality",
    "description": "Make every camping trip comfortable and convenient with this Mega Huge Family Camping Tent, designed to accommodate 10\u201312 people. With two separate rooms, it offers privacy, organization, and spacious sleeping arrangements for families or groups.\nBuilt with high-quality, durable materials, this tent...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 12,
    "rating": 4.7,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/meg2.jpeg",
    "badge": "New"
  },
  {
    "slug": "automatic-camping-tent-6-to-8-person-four-sided-tent",
    "name": "Automatic Camping Tent \u2013 6 to 8 Person Four-Sided Tent",
    "category": "Camping & Outdoor Gear",
    "ageRange": "3-12 yrs",
    "price": 9499,
    "cert": "Verified Quality",
    "description": "Enjoy stress-free outdoor adventures with this Automatic Camping Tent for 6\u20138 Persons, designed for quick setup and maximum comfort. Featuring an automatic opening system, the tent pops up in seconds\u2014no complicated poles or tools required.\nWith a generous interior space and four-sided tent design, i...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 7,
    "rating": 4.2,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-22-at-11.05.09-AM.jpeg"
  },
  {
    "slug": "inflatable-mattress-portable-air-bed-3x6-4x6-sizes",
    "name": "Inflatable Mattress \u2013 Portable Air Bed (3\u00d76 &#038; 4\u00d76 Sizes)",
    "category": "Home Furniture",
    "ageRange": "3-12 yrs",
    "price": 7999,
    "cert": "Verified Quality",
    "description": "Enjoy convenient and comfortable sleeping anywhere with this Inflatable Mattress, designed for versatility and everyday use. Whether for guests, travel, camping, or temporary sleeping arrangements, this air mattress provides reliable support and comfort.\nLightweight and easy to store when deflated, ...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 21,
    "rating": 4.6,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-22-at-11.00.44-AM.jpeg"
  },
  {
    "slug": "inflatable-bed-with-backrest-self-pumping-electric-air-mattress-heavy-duty",
    "name": "Inflatable Bed with Backrest \u2013 Self-Pumping Electric Air Mattress (Heavy Duty)",
    "category": "Home Furniture",
    "ageRange": "3-12 yrs",
    "price": 15899,
    "cert": "Verified Quality",
    "description": "Experience superior comfort and support with this Inflatable Bed with Backrest, designed for both relaxation and sleeping. The built-in self-pumping electric pump allows fast, hassle-free inflation and deflation at the push of a button\u2014no manual pumping needed.\nThe integrated backrest makes this inf...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 18,
    "rating": 4.3,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-22-at-10.59.21-AM.jpeg",
    "comparePrice": 18000,
    "badge": "Sale"
  },
  {
    "slug": "colorful-inflatable-lazy-sofa-portable-lounge-chair-with-pump",
    "name": "Colorful Inflatable Lazy Sofa \u2013 Portable Lounge Chair (With Pump)",
    "category": "Inflatable & Frame Pools",
    "ageRange": "3-12 yrs",
    "price": 4999,
    "cert": "Verified Quality",
    "description": "Add color and comfort to your relaxation time with this New Design Colorful Inflatable Lazy Sofa. Lightweight, portable, and easy to set up, it\u2019s perfect for living rooms, balconies, bedrooms, or outdoor lounging.\nDesigned for convenience, this inflatable sofa comes with a pump for quick inflation a...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 15,
    "rating": 4.0,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-22-at-10.50.54-AM.jpeg",
    "comparePrice": 5500,
    "badge": "Sale"
  },
  {
    "slug": "5-in-1-inflatable-multifunction-sofa-bed-pull-out-lounge-bed",
    "name": "5-in-1 Inflatable Multifunction Sofa-Bed \u2013 Pull-Out Lounge Bed",
    "category": "Inflatable & Frame Pools",
    "ageRange": "3-12 yrs",
    "price": 7799,
    "cert": "Verified Quality",
    "description": "Relax your way with this 5-in-1 Inflatable Multifunction Sofa-Bed, designed for comfort, flexibility, and convenience. It easily transforms from a sofa into a lounger or a full sleeping bed, making it perfect for homes, balconies, camping, or guest use.\nBuilt with a 2-way interlocking design for add...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 10,
    "rating": 4.5,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-22-at-10.48.40-AM.jpeg"
  },
  {
    "slug": "car-travel-inflatable-mattress-automotive-air-bed-for-back-seat-with-pump",
    "name": "Car Travel Inflatable Mattress \u2013 Automotive Air Bed for Back Seat (With Pump)",
    "category": "Travel & Outdoor Gear",
    "ageRange": "3-12 yrs",
    "price": 4999,
    "cert": "Verified Quality",
    "description": "Make long trips and outdoor adventures more comfortable with this Car Travel Inflatable Mattress. Designed to fit most car back seats, it transforms your car into a cozy sleeping area, perfect for rest, naps, or camping.\nBuilt with durable, multifunctional material, this mattress is ideal for sleepi...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 17,
    "rating": 4.2,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-22-at-10.45.39-AM.jpeg",
    "badge": "New"
  },
  {
    "slug": "5-in-1-inflatable-couch-lazy-sofa-bed-l-shaped-armrest-waterproof",
    "name": "5-in-1 Inflatable Couch Lazy Sofa Bed \u2013 L-Shaped Armrest (Waterproof)",
    "category": "Home Furniture",
    "ageRange": "3-12 yrs",
    "price": 6499,
    "cert": "Verified Quality",
    "description": "Enjoy unmatched flexibility and comfort with this 5-in-1 Inflatable Couch Lazy Sofa Bed, designed to adapt to your lifestyle. Whether you need a relaxing chair, a comfortable sofa, a lounging bed, or a sleeping surface, this inflatable solution does it all.\nFeaturing an L-shaped armrest, the couch o...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 15,
    "rating": 4.0,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-22-at-10.44.30-AM.jpeg"
  },
  {
    "slug": "3-seater-intex-inflatable-pull-out-sofa-bed-free-electric-pump",
    "name": "3-Seater Intex Inflatable Pull-Out Sofa Bed \u2013 FREE Electric Pump",
    "category": "Home Furniture",
    "ageRange": "3-12 yrs",
    "price": 15499,
    "cert": "Verified Quality",
    "description": "Upgrade your living space with this 3-Seater Intex Inflatable Pull-Out Sofa, designed for comfort, flexibility, and convenience. During the day, it functions as a spacious inflatable sofa, and at night, it extends into a comfortable bed, making it ideal for guests, apartments, or temporary sleeping ...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 13,
    "rating": 4.8,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/abb.jpeg"
  },
  {
    "slug": "double-king-size-inflatable-bed-built-in-electric-pump-4x6",
    "name": "Double King-Size Inflatable Bed \u2013 Built-In Electric Pump (4\u00d76)",
    "category": "Travel & Outdoor Gear",
    "ageRange": "3-12 yrs",
    "price": 15499,
    "cert": "Verified Quality",
    "description": "Enjoy instant comfort anywhere with this Double King-Size Inflatable Bed, designed for convenience, durability, and restful sleep. Featuring a built-in electric pump, the bed inflates and deflates quickly at the push of a button\u2014no manual pumping needed.\nWith a generous 4\u00d76 sleeping surface, this in...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 11,
    "rating": 4.6,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/bd.jpeg"
  },
  {
    "slug": "6-5-inch-smart-hoverboard-self-balancing-with-bluetooth-guards-2",
    "name": "6.5-Inch Smart Hoverboard \u2013 Self-Balancing with Bluetooth &#038; Guards",
    "category": "Hover Boards",
    "ageRange": "3-12 yrs",
    "price": 18499,
    "cert": "Verified Quality",
    "description": "The 6.5-Inch Smart Hoverboard is designed for fun, safety, and easy control, making it an excellent choice for kids, teens, and beginners. Its 6.5-inch wheels provide smooth riding on flat surfaces such as pavements, driveways, and indoor spaces.\nFeaturing smart self-balancing technology, this hover...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 9,
    "rating": 4.4,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/ihov.jpeg",
    "badge": "Hot"
  },
  {
    "slug": "6-5-inch-smart-hoverboard-self-balancing-with-bluetooth-guards",
    "name": "6.5-Inch Smart Hoverboard \u2013 Self-Balancing with Bluetooth &#038; Guards",
    "category": "Hover Boards",
    "ageRange": "3-12 yrs",
    "price": 18499,
    "cert": "Verified Quality",
    "description": "The 6.5-Inch Smart Hoverboard is the perfect entry-level ride for kids, teens, and first-time riders. Its compact 6.5-inch wheels are designed for smooth, controlled riding on flat surfaces such as pavements, indoors, and driveways.\nBuilt with self-balancing technology, this hoverboard makes learnin...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 7,
    "rating": 4.2,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/6.5.jpeg"
  },
  {
    "slug": "8-inch-electric-hoverboard-self-balancing-with-bluetooth-led-lights",
    "name": "8-Inch Electric Hoverboard \u2013 Self-Balancing with Bluetooth &#038; LED Lights",
    "category": "Hover Boards",
    "ageRange": "3-12 yrs",
    "price": 22999,
    "cert": "Verified Quality",
    "description": "Enjoy smooth, fun, and safe rides with this 8-Inch Electric Hoverboard, designed for kids, teens, and beginners. Equipped with self-balancing technology, this hoverboard makes riding simple and confidence-building.\nThe LED lights improve visibility and style, while Bluetooth connectivity lets riders...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 5,
    "rating": 4.0,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/8.jpeg"
  },
  {
    "slug": "10-inch-off-road-hoverboard-all-terrain-self-balancing-scooter",
    "name": "10-Inch Off-Road Hoverboard \u2013 All-Terrain Self-Balancing Scooter",
    "category": "Hover Boards",
    "ageRange": "3-12 yrs",
    "price": 24999,
    "cert": "Verified Quality",
    "description": "Take your riding experience to the next level with this 10-Inch Off-Road Hoverboard, designed for strength, stability, and outdoor performance. The inflatable 10-inch wheels handle rough and uneven terrain with ease, while built-in guards add extra protection during rides.\nPowered by advanced self-b...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 22,
    "rating": 4.7,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/10.jpeg"
  },
  {
    "slug": "8-inch-hoverboard-self-balancing-electric-scooter",
    "name": "8-Inch Hoverboard \u2013 Self-Balancing Electric Scooter",
    "category": "Hover Boards",
    "ageRange": "3-12 yrs",
    "price": 22999,
    "cert": "Verified Quality",
    "description": "Enjoy smooth rides and exciting movement with this 8-Inch Hoverboard, built for balance, stability, and fun. Its 8-inch wheels provide a comfortable riding experience on flat surfaces, making it ideal for kids, teens, and first-time riders.\nThe self-balancing technology allows for easy control, help...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 19,
    "rating": 4.4,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/hov.jpeg"
  },
  {
    "slug": "kids-electric-ride-on-car-rechargeable-2-motors-remote-control-ages-1-4-years",
    "name": "Kids Electric Ride-On Car \u2013 Rechargeable, 2 Motors, Remote Control (Ages 1\u20134 Years)",
    "category": "Recreational Rides",
    "ageRange": "3-12 yrs",
    "price": 28499,
    "cert": "Verified Quality",
    "description": "Introduce your little one to exciting and safe playtime with this Kids Electric Ride-On Car, specially designed for children aged 1 to 4 years. Powered by a rechargeable battery and 2 smooth-running motors, this ride-on car delivers gentle performance suitable for toddlers.\nParents can take full con...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 16,
    "rating": 4.1,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/lb.jpeg",
    "comparePrice": 35000,
    "badge": "Sale"
  },
  {
    "slug": "kids-electric-ride-on-car-12v-4-motors-remote-control-ages-1-9-years",
    "name": "Kids Electric Ride-On Car \u2013 12V, 4 Motors, Remote Control (Ages 1\u20139 Years)",
    "category": "Recreational Rides",
    "ageRange": "3-12 yrs",
    "price": 40999,
    "cert": "Verified Quality",
    "description": "Turn playtime into an exciting adventure with this Kids Electric Ride-On Car, designed for children aged 1 to 9 years. Built with a powerful 12V rechargeable battery and 4 motors, this ride-on car delivers smooth performance and stable driving on flat surfaces.\nParents can enjoy peace of mind with t...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 13,
    "rating": 4.8,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/ca-scaled.jpeg",
    "comparePrice": 55000,
    "badge": "Sale"
  },
  {
    "slug": "kids-foldable-electric-scooter-120w-24v-18km-h-with-adjustable-height",
    "name": "Kids Foldable Electric Scooter \u2013 120W, 24V, 18km/h with Adjustable Height",
    "category": "Recreational Rides",
    "ageRange": "3-12 yrs",
    "price": 19999,
    "cert": "Verified Quality",
    "description": "Make everyday rides exciting with this Kids Foldable Electric Scooter, designed for comfort, safety, and convenience. Powered by a 120W motor with a 24V lithium battery, it delivers smooth performance at a controlled top speed of 18km/h, making it suitable for kids and beginner riders.\nThe scooter f...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 12,
    "rating": 4.7,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-21-at-9.38.49-PM.jpeg",
    "comparePrice": 25000,
    "badge": "Sale"
  },
  {
    "slug": "electric-scooter-32km-h-top-speed-45km-range-with-head-brake-lights",
    "name": "Electric Scooter \u2013 32km/h Top Speed, 45km Range with Head &#038; Brake Lights",
    "category": "Recreational Rides",
    "ageRange": "3-12 yrs",
    "price": 45000,
    "cert": "Verified Quality",
    "description": "Enjoy fast, efficient, and eco-friendly mobility with this Electric Scooter, designed for urban commuting and everyday rides. With a powerful motor that delivers a top speed of 32km/h and an impressive 45km range on a full charge, this scooter is perfect for city travel, errands, and leisure rides.\n...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 7,
    "rating": 4.2,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-21-at-9.38.49-PM.jpeg"
  },
  {
    "slug": "drift-scooter-with-bluetooth-led-lights-3-speed-electric-scooter",
    "name": "Drift Scooter with Bluetooth &#038; LED Lights \u2013 3 Speed Electric Scooter",
    "category": "Recreational Rides",
    "ageRange": "3-12 yrs",
    "price": 29000,
    "cert": "Verified Quality",
    "description": "Experience fun, balance, and modern style with the Drift Scooter. Built for smooth rides and exciting movement, this electric drift scooter comes packed with smart features that make every ride enjoyable. Whether for kids, teens, or casual riders, it\u2019s designed for both performance and entertainment...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 5,
    "rating": 4.0,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-21-at-9.26.05-PM.jpeg"
  },
  {
    "slug": "inflatable-swimming-pool-large-family-pool-with-free-pump",
    "name": "Inflatable Swimming Pool \u2013 Large Family Pool with Free Pump",
    "category": "Inflatable & Frame Pools",
    "ageRange": "3-12 yrs",
    "price": 10499,
    "cert": "ASTM / CE certified",
    "description": "Create fun-filled moments at home with this Inflatable Swimming Pool, designed for quick setup, comfort, and safe family enjoyment. Made from durable, high-quality inflatable material, this pool is ideal for kids, families, and casual backyard relaxation.\nWhether you choose the larger size for group...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      },
      {
        "label": "Type",
        "value": "Inflatable / Frame"
      }
    ],
    "stock": 16,
    "rating": 4.1,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-21-at-9.20.04-PM.jpeg"
  },
  {
    "slug": "intex-prism-frame-swimming-pool-round-305-x-76-cm-grey",
    "name": "Intex Prism Frame Swimming Pool \u2013 Round 305 x 76 cm (Grey)",
    "category": "Inflatable & Frame Pools",
    "ageRange": "3-12 yrs",
    "price": 35999,
    "cert": "ASTM / CE certified",
    "description": "Upgrade your outdoor fun with the Intex Prism Frame Swimming Pool (305 x 76 cm). Designed with a strong metal frame and a high-quality pool liner, this round swimming pool offers durability, safety, and comfort for kids and families. Its compact yet spacious design makes it ideal for home use, weeke...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      },
      {
        "label": "Type",
        "value": "Inflatable / Frame"
      }
    ],
    "stock": 14,
    "rating": 4.9,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/1.jpeg",
    "comparePrice": 45000,
    "badge": "Sale"
  },
  {
    "slug": "intex-rectangular-frame-swimming-pool-kids-family-pool-ages-6",
    "name": "Intex Rectangular Frame Swimming Pool \u2013 Kids &#038; Family Pool (Ages 6+)",
    "category": "Kids Outdoor Play",
    "ageRange": "3-12 yrs",
    "price": 449999,
    "cert": "ASTM / CE certified",
    "description": "Turn your backyard into a fun and relaxing water play zone with the Intex Rectangular Frame Swimming Pool. Built with a strong metal frame and durable pool liner, this pool is ideal for kids aged 6 years and above, offering a safe and enjoyable swimming experience for the whole family.\nAvailable in ...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      },
      {
        "label": "Type",
        "value": "Inflatable / Frame"
      }
    ],
    "stock": 12,
    "rating": 4.7,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-21-at-9.04.39-PM.jpeg"
  },
  {
    "slug": "ultra-xtra-prism-frame-swimming-pool-rectangular-400-x-200-x-122-cm",
    "name": "Ultra Xtra Prism Frame Swimming Pool \u2013 Rectangular 400 x 200 x 122 cm",
    "category": "Kids Outdoor Play",
    "ageRange": "3-12 yrs",
    "price": 14000,
    "cert": "ASTM / CE certified",
    "description": "Enjoy endless summer fun with the Ultra Xtra Prism Frame Swimming Pool! Perfect for families, this large rectangular pool (400 x 200 x 122 cm) is durable, safe, and easy to assemble. Delivered anywhere in Kenya \u2013 pay on delivery, only cover a small delivery fee.",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      },
      {
        "label": "Type",
        "value": "Inflatable / Frame"
      }
    ],
    "stock": 9,
    "rating": 4.4,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-21-at-9.03.44-PM.jpeg",
    "comparePrice": 18000,
    "badge": "Sale"
  }
];

export function getProductBySlug(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function formatPrice(amount: number) {
  return `KSh ${amount.toLocaleString("en-KE")}`;
}
