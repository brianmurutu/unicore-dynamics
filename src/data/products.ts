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
  "12ft-trampoline-with-ladder-and-safety-net": "https://payafterdelivery.co.ke/wp-content/uploads/2026/02/IMG-20250516-WA0018.jpg",
  "kids-slide-with-swing-outdoor-playset-for-ages-1-5-years": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-22-at-12.36.57-PM.jpeg",
  "mastela-3-in-1-electric-baby-swing-side-to-side-motion-with-canopy-toys-2": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/bby-.jpeg",
  "mastela-3-in-1-electric-baby-swing-side-to-side-motion-with-canopy-toys": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-22-at-12.33.16-PM.jpeg",
  "kids-swing-outdoor-indoor-play-swing": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-22-at-11.36.20-AM.jpeg",
  "6-5-inch-smart-hoverboard-self-balancing-with-bluetooth-guards-2": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/ihov.jpeg",
  "6-5-inch-smart-hoverboard-self-balancing-with-bluetooth-guards": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/6.5.jpeg",
  "8-inch-electric-hoverboard-self-balancing-with-bluetooth-led-lights": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/8.jpeg",
  "10-inch-off-road-hoverboard-all-terrain-self-balancing-scooter": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/10.jpeg",
  "8-inch-hoverboard-self-balancing-electric-scooter": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/hov.jpeg",
  "kids-electric-ride-on-car-rechargeable-2-motors-remote-control-ages-1-4-years": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/lb.jpeg",
  "kids-electric-ride-on-car-12v-4-motors-remote-control-ages-1-9-years": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/ca-scaled.jpeg",
  "electric-scooter-32km-h-top-speed-45km-range-with-head-brake-lights": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-21-at-9.38.49-PM.jpeg",
  "drift-scooter-with-bluetooth-led-lights-3-speed-electric-scooter": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-21-at-9.26.05-PM.jpeg",
  "intex-rectangular-frame-swimming-pool-kids-family-pool-ages-6": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-21-at-9.04.39-PM.jpeg",
  "ultra-xtra-prism-frame-swimming-pool-rectangular-400-x-200-x-122-cm": "https://payafterdelivery.co.ke/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-21-at-9.03.44-PM.jpeg"
};

export const PRODUCTS: Product[] = [
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
