// Nexora Curated Luxury 210-Product Catalog Data Engine

// Unique Unsplash Image IDs curated specifically for luxury styling
const UNSPLASH_IMAGES = {
  Watches: [
    "photo-1524592094714-0f0654e20314", // Patek Nautilus
    "photo-1542496658-e326756858e9", // Tissot PRX
    "photo-1587836374828-4dbaba94ee0e", // Rolex Submariner
    "photo-1614164185128-e4ec99c436d7", // Cartier Santos
    "photo-1508685096489-7aacd43bd3b1", // Vintage Gold
    "photo-1623998021446-45ca2e0f2d12", // Seiko Diver
    "photo-1612817288484-6f916006741a", // Carrera Chrono
    "photo-1548171915-e7af505e6080", // Royal Oak
    "photo-1522337360788-8b13dee7a37e", // Speedmaster
    "photo-1619134778706-7015533a6150", // Dress watch
    "photo-1539874754764-5a96559165b0", // Active sports watch
    "photo-1639006570490-79c0c53f1080", // Chrono watch
    "photo-1622434641406-a158123450f9", // Black steel
    "photo-1605481775796-03c00438cfce", // Watch leather strap
    "photo-1509048191080-d2984bad6ae5"  // Rugged watch
  ],
  Audio: [
    "photo-1618366712010-f4ae9c647dcb", // Sony WH-XM5
    "photo-1618384887929-16ec33fab9ef", // Bose QC
    "photo-1613040809024-b4ef7ba99bc3", // AirPods Max
    "photo-1545454675-3531b543be5d", // Marshall Stanmore
    "photo-1608156639585-b3a032ef9689", // True wireless
    "photo-1589003077984-894e133dabab", // Portable speaker
    "photo-1524282745852-a463fa495973", // Studio headphones
    "photo-1590658268037-6bf12165a8df", // Earbuds case
    "photo-1558089687-f282ffcabed2", // Retro speaker
    "photo-1505740420928-5e560c06d30e", // Headset wood table
    "photo-1487215078519-e21cc028cb29", // Studio monitor
    "photo-1546435770-a3e426bf472b", // Wireless headphone
    "photo-1606220588913-b3aacb4e2f46", // Audio amplifier
    "photo-1628202926206-c63a34b1618f", // In-ear monitor
    "photo-1522338242992-e1a54906a8da"  // Audio mixer desk
  ],
  Accessories: [
    "photo-1511499767390-903390e6fbc4", // Wayfarer sunglasses
    "photo-1565026057447-bc90a3dceb87", // Leather wallet
    "photo-1627124118308-fc514a33d93a", // Designer sunglasses
    "photo-1524498250428-ec517a25501d", // Luxury travel bag
    "photo-1622560480605-d83c853bc5c3", // Premium backpack
    "photo-1608248543803-ba4f8c70ae0b", // Skincare spray
    "photo-1594223274512-ad4803739b7c", // Luxury watch roll
    "photo-1590564853875-d94f288f30e3", // Premium belt
    "photo-1617137968427-85924c800a22", // Designer tie
    "photo-1600857544200-b2f666a9a2ec", // Leather key holder
    "photo-1581655353564-df123a1eb820", // Luxury pen
    "photo-1523170335258-f5ed11857fbf", // Chronograph casing
    "photo-1509048191080-d2984bad6ae5", // Outdoor strap
    "photo-1607604276583-eef5d076aa5f", // Tech organizer case
    "photo-1505740420928-5e560c06d30e"  // Premium travel case
  ],
  Lifestyle: [
    "photo-1534073828943-f801091bb18c", // Designer desk lamp
    "photo-1584824388164-940428d0176d", // Air purifier
    "photo-1627933675402-999332e9894e", // Stainless tumbler
    "photo-1505843490538-5133c6c7d0e1", // Herman Miller Aeron
    "photo-1584990347449-a6efa1a51ebe", // Le Creuset Dutch Oven
    "photo-1574633968138-e42761825828", // Yeti Cooler
    "photo-1517438476312-10d79c077509", // Tech setup desk
    "photo-1616486338812-3dadae4b4ace", // Midcentury credenza
    "photo-1581608505413-4357224de53b", // Premium diffuser
    "photo-1563298723-dcfebaa392e3", // Action camera rig
    "photo-1556911220-e15b29be8c8f", // Copper pot set
    "photo-1540555700478-4be289fbecef", // Premium spa cream
    "photo-1585551796475-74b28d9fbecef", // Smart air humidifier
    "photo-1507679799987-c73779587ccf", // Premium office desk
    "photo-1522338242992-e1a54906a8da"  // Multi-styler station
  ],
  Apparel: [
    "photo-1591047139829-d91aecb6caea", // Arc'teryx shell
    "photo-1539533113208-f6df8cc8b543", // Moncler Maya short
    "photo-1556821840-3a63f95609a7", // Essentials hoodie
    "photo-1503342217505-b0a15ec3261c", // Box logo tee
    "photo-1542272604-787c3835535d", // Diesel jeans
    "photo-1620799140408-edc6dcb6d633", // Designer sweatshirt
    "photo-1618354691373-d851c5c3a990", // Diagonal design hoodie
    "photo-1507679799987-c73779587ccf", // Textured suit blazer
    "photo-1582552938357-32b906df40cb", // Denim jacket
    "photo-1434389677669-e08b4cac3105", // Knit wool sweater
    "photo-1544441893-675973e31985", // Luxury trench coat
    "photo-1617137968427-85924c800a22", // Formal silk shirt
    "photo-1490481651871-ab68de25d43d", // Italian linen jacket
    "photo-1592842416755-d851c5c3a990", // Technical windbreaker
    "photo-1624378439575-d8705ad7ae80"  // Casual luxury vest
  ],
  Footwear: [
    "photo-1584000302521-137233816694", // Air Jordan High Chicago
    "photo-1600185365483-26d7a4cc7519", // Dunk Low Panda
    "photo-1595950653106-6c9ebd614d3a", // AF1 Triple White
    "photo-1514989940723-e8e51635b782", // AM97 Silver Bullet
    "photo-1587563871167-1ee9c731aefb", // Yeezy Boost Zebra
    "photo-1620794341491-76be6eeb6946", // Samba OG
    "photo-1636718282214-0b414081303c", // NB 550 Grey
    "photo-1608231387042-66d1773070a5", // Puma RS-X
    "photo-1552346154-21d32810baa3", // Air Max Plus Purple
    "photo-1606107557195-0e29a4b5b4aa", // Ultraboost
    "photo-1511556532299-8f662fc26c06", // NB 990v6 Grey
    "photo-1608667508764-33cf0726b13a", // Blazer Mid Retro
    "photo-1525966222134-fcfa99b8ae77", // Old Skool
    "photo-1494496195158-c3becb4f2475", // Converse Chuck 70
    "photo-1622445214032-47596009a25b"  // Comfort slip clogs
  ]
};

// Real brand metadata and deep-links
const BRAND_DETAILS = {
  Watches: [
    { brand: "Rolex", url: "https://www.rolex.com/en-us/watches/submariner" },
    { brand: "Cartier", url: "https://www.cartier.com/en-us/watches" },
    { brand: "Omega", url: "https://www.omegawatches.com/en-us/watch-omega-speedmaster" },
    { brand: "Patek Philippe", url: "https://www.patek.com/en/collection" },
    { brand: "Audemars Piguet", url: "https://www.audemarspiguet.com/com/en" },
    { brand: "Tudor", url: "https://www.tudorwatch.com/en/watches" },
    { brand: "Seiko", url: "https://www.seikowatches.com" },
    { brand: "Tag Heuer", url: "https://www.tagheuer.com" },
    { brand: "Garmin", url: "https://www.garmin.com" },
    { brand: "Tissot", url: "https://www.tissotwatches.com" }
  ],
  Audio: [
    { brand: "Sony", url: "https://electronics.sony.com/audio/headphones" },
    { brand: "Bose", url: "https://www.bose.com/en_us/products/headphones" },
    { brand: "Sennheiser", url: "https://www.sennheiser-hearing.com" },
    { brand: "Bang & Olufsen", url: "https://www.bang-olufsen.com" },
    { brand: "Apple", url: "https://www.apple.com/airpods-max" },
    { brand: "Marshall", url: "https://www.marshallheadphones.com" },
    { brand: "Devialet", url: "https://www.devialet.com" },
    { brand: "Sonos", url: "https://www.sonos.com" },
    { brand: "Bowers & Wilkins", url: "https://www.bowerswilkins.com" }
  ],
  Accessories: [
    { brand: "Ray-Ban", url: "https://www.ray-ban.com" },
    { brand: "Gucci", url: "https://www.gucci.com" },
    { brand: "Prada", url: "https://www.prada.com" },
    { brand: "Louis Vuitton", url: "https://us.louisvuitton.com" },
    { brand: "Hermes", url: "https://www.hermes.com" },
    { brand: "Montblanc", url: "https://www.montblanc.com" },
    { brand: "Rimowa", url: "https://www.rimowa.com" },
    { brand: "Oakley", url: "https://www.oakley.com" },
    { brand: "Tom Ford", url: "https://www.tomford.com" }
  ],
  Lifestyle: [
    { brand: "Dyson", url: "https://www.dyson.com" },
    { brand: "Stanley", url: "https://www.stanley1913.com" },
    { brand: "Yeti", url: "https://www.yeti.com" },
    { brand: "Herman Miller", url: "https://store.hermanmiller.com" },
    { brand: "Le Creuset", url: "https://www.lecreuset.com" },
    { brand: "Aesop", url: "https://www.aesop.com" },
    { brand: "Molekule", url: "https://molekule.com" },
    { brand: "Theragun", url: "https://www.therabody.com" },
    { brand: "Leica", url: "https://leica-camera.com" },
    { brand: "Fujifilm", url: "https://www.fujifilm.com" }
  ],
  Apparel: [
    { brand: "Fear of God", url: "https://fearofgod.com" },
    { brand: "Arc'teryx", url: "https://arcteryx.com" },
    { brand: "Stone Island", url: "https://www.stoneisland.com" },
    { brand: "Moncler", url: "https://www.moncler.com" },
    { brand: "Supreme", url: "https://supremenewyork.com" },
    { brand: "Off-White", url: "https://www.off---white.com" },
    { brand: "Ralph Lauren", url: "https://www.ralphlauren.com" },
    { brand: "Burberry", url: "https://us.burberry.com" }
  ],
  Footwear: [
    { brand: "Nike", url: "https://www.nike.com" },
    { brand: "Adidas", url: "https://www.adidas.com" },
    { brand: "New Balance", url: "https://www.newbalance.com" },
    { brand: "Salomon", url: "https://www.salomon.com" },
    { brand: "Asics", url: "https://www.asics.com" },
    { brand: "Balenciaga", url: "https://www.balenciaga.com" },
    { brand: "Prada", url: "https://www.prada.com" },
    { brand: "Birkenstock", url: "https://www.birkenstock.com" },
    { brand: "Dr. Martens", url: "https://www.drmartens.com" }
  ]
};

// Luxury models and details
const PRODUCT_TEMPLATES = {
  Watches: [
    { name: "Submariner Date", price: 10400, desc: "The definitive divers' watch, featuring a gorgeous unidirectional bezel and oystersteel band.", specs: ["Oystersteel Case", "Cerachrom Bezel", "300m Waterproof"] },
    { name: "Santos Large Model", price: 7750, desc: "A timeless classic design featuring a square bezel, exposed screws, and a quick-switch strap system.", specs: ["18K Yellow Gold", "QuickSwitch System", "Automatic Winding"] },
    { name: "Speedmaster Moonwatch", price: 7600, desc: "One of the world's most iconic chronographs, worn on all six lunar missions. Certified Master Chronometer.", specs: ["Hesalite Crystal", "Co-Axial Calibre 3861", "Nylon Strap"] },
    { name: "Nautilus Self-Winding", price: 42500, desc: "The gold standard of sports watches. Features a rounded octagonal bezel and horizontal embossed dial.", specs: ["Stainless Steel", "Saphire Case Back", "Screw-down Crown"] },
    { name: "Royal Oak " + "Selfwinding", price: 27800, desc: "Features AP's iconic octagonal bezel, tapisserie dial, and integrated premium steel bracelet.", specs: ["Grande Tapisserie", "50-hour Reserve", "Glareproofed Sapphire"] },
    { name: "Black Bay 58", price: 3900, desc: "A tribute to Tudor's first divers' watches, featuring clean vintage proportions and golden hour markers.", specs: ["Riveted Steel Bracelet", "MT5402 Manufacture", "200m Waterproof"] },
    { name: "Prospex Alpinist", price: 725, desc: "Rugged elegance featuring a dynamic green sunburst dial, golden markers, and an internal compass bezel.", specs: ["Automatic Calibre 6R35", "Compass Inner Ring", "Leather D-Buckle Strap"] }
  ],
  Audio: [
    { name: "WH-1000XM5 Headphones", price: 398, desc: "Industry-leading noise cancellation. Re-engineered with dual processors and 8 microphones.", specs: ["Auto NC Optimizer", "30-Hour Battery Life", "Hi-Res Audio Wireless"] },
    { name: "QuietComfort Ultra", price: 429, desc: "Breakthrough spatialized audio for immersive listening. World-class quiet with CustomTune calibration.", specs: ["Immersive Audio", "CustomTune Tech", "Ultra Comfort Bands"] },
    { name: "AirPods Max Titanium", price: 549, desc: "A perfect balance of exhilarating high-fidelity audio and the effortless magic of custom device pairing.", specs: ["Apple H1 Audio Chips", "Adaptive EQ Casing", "Spatial Audio Head Tracking"] },
    { name: "Stanmore III Speaker", price: 379, desc: "Classic rock design with home-filling sound. Wide stereo soundstage optimized for pure acoustics.", specs: ["Dynamic Loudness", "Bluetooth 5.2", "Sustainable Casing"] },
    { name: "Beoplay H95", price: 899, desc: "Exclusive over-ear headphones crafted for the ultimate listening experience. Titanium drivers and luxury oval fit.", specs: ["Titanium Drivers", "Adaptive ANC", "Lambskin Ear Pads"] },
    { name: "Phantom II 98dB", price: 1400, desc: "Implosive sound in a portable body. Features unique heart-bass architecture and lossless connectivity.", specs: ["98 dB SPL Rating", "900 Watts Peak", "Devialet Intelligence"] },
    { name: "Beosound A1 2nd Gen", price: 279, desc: "Waterproof Bluetooth speaker delivering deep 360-degree signature sound. Sleek aluminum finish.", specs: ["360 Signature Sound", "IP67 Dust & Water Proof", "Alexa Built-in Support"] }
  ],
  Accessories: [
    { name: "Wayfarer Classic", price: 180, desc: "The most recognizable style in the history of sunglasses. Perfect clarity, comfort, and iconic styling.", specs: ["G-15 Polarized Lenses", "Acetate Frame Casing", "100% UV Protection"] },
    { name: "GG Marmont Leather Belt", price: 490, desc: "A luxury leather belt highlighted with the signature double G metal emblem in a smooth gold finish.", specs: ["Premium Calfskin", "Double G Buckle", "Made in Italy"] },
    { name: "Saffiano Leather Wallet", price: 550, desc: "Elegant pocket wallet constructed from Prada's legendary textured Saffiano leather. Multi-card slots.", specs: ["Saffiano Calf Leather", "8 Card Compartments", "Fabric Inner Lining"] },
    { name: "Rimowa Original Cabin", price: 1430, desc: "The definitive aluminum suitcase. Engineered for ultimate longevity, lightweight carry-on tracking.", specs: ["Anodized Aluminum", "Multiwheel System", "TSA-Approved Locks"] },
    { name: "Meisterstück Fountain Pen", price: 680, desc: "The legendary writing instrument. Crafted in deep black precious resin with detailed gold-coated accents.", specs: ["Au585 Hand-crafted Nib", "Precious Resin Barrel", "Montblanc Gold Clips"] },
    { name: "Resurrection Hand Balm", price: 33, desc: "A blend of fragrant botanicals and skin-softening emollients to deliver intensive hydration for hands.", specs: ["Mandarin Rind Extract", "Rosemary Leaf Oil", "Non-greasy Hydration"] },
    { name: "Carrera Acetate Sunglasses", price: 240, desc: "Sophisticated pilot sunglasses detailed with double-bridges, lightweight hinges, and gold accents.", specs: ["UV400 Shield Casing", "Adjustable Nose Pads", "Scratch Resistant Lenses"] }
  ],
  Lifestyle: [
    { name: "Airwrap Multi-styler", price: 599, desc: "Style with air, not extreme heat. Includes re-engineered barrels to curl and wave in both directions.", specs: ["V9 Digital Motor", "Intelligent Heat Control", "Coanda Smoothing Effect"] },
    { name: "Quencher H2.0 FlowState", price: 45, desc: "The viral tumbler crafted from recycled stainless steel. Keeps drinks ice cold for hours on end.", specs: ["90% Recycled Steel", "FlowState 3-Way Lid", "Double-Wall Vacuum"] },
    { name: "Tundra 45 Cooler", price: 325, desc: "Indestructible rotomolded cooler. PermaFrost insulation locks in ice for multi-day excursions.", specs: ["FatWall Design", "PermaFrost Insulation", "AnchorPoint Tie-Downs"] },
    { name: "Aeron Ergonomic Chair", price: 1695, desc: "The gold standard of office seating. Supports posture, spinal health, and heat dissipation dynamically.", specs: ["PosturFit SL Support", "Pellicle Z Breathable Mesh", "Fully Adjustable Arms"] },
    { name: "Signature Dutch Oven", price: 420, desc: "The legendary enameled cast iron cookware. Delivers even heat distribution and locks in rich flavors.", specs: ["Enameled Cast Iron", "Sand-colored interior", "Dishwasher Safe"] },
    { name: "Leica Q3 Camera", price: 5995, desc: "Full-frame compact camera featuring a state-of-the-art 60MP sensor and a legendary Summilux lens.", specs: ["60MP BSI CMOS Sensor", "Summilux 28mm f/1.7", "8K Luxury Video Codecs"] },
    { name: "Instax Mini 90 Neo", price: 179, desc: "Premium instant camera detailed with classic design. Multiple creative shooting modes.", specs: ["High-performance Flash", "Double Exposure Mode", "Macro Close-ups Support"] }
  ],
  Apparel: [
    { name: "Beta AR Gore-Tex Shell", price: 750, desc: "Lightweight, packable, highly versatile waterproof shell jacket engineered with GORE-TEX Pro tech.", specs: ["GORE-TEX Pro Shell", "RECCO Reflector Casing", "StormHood Helmet Sync"] },
    { name: "Maya Short Down Jacket", price: 1650, desc: "A short puffer detailed with iconic glossy lacquered nylon, goose down quilting, and sleeve pocket.", specs: ["Lacquered Nylon Casing", "90% Pure Goose Down", "Detachable Hood"] },
    { name: "Essentials Oversized Hoodie", price: 135, desc: "Fear of God's staple hoodie, constructed from heavyweight fleece with dropped shoulders and back logos.", specs: ["Oversized Boxy Fit", "80% Heavyweight Cotton", "Silicone Back Logos"] },
    { name: "Diag Outline Zip Hoodie", price: 620, desc: "Features Off-White's legendary industrial diagonal stripes printed on the back and sleeves.", specs: ["Diagonal Industrial Print", "100% Loopback Cotton", "Signature Ring Zip Pull"] },
    { name: "Classic Trench Coat", price: 2250, desc: "The iconic double-breasted trench jacket crafted in Yorkshire from weatherproof cotton gabardine.", specs: ["Cotton Gabardine Shield", "Vintage Check Lining", "Buffalo Horn Buttons"] },
    { name: "Supreme Box Logo Tee", price: 150, desc: "The legendary street-culture staple. Features Supreme's bold red box logo screenprinted on premium cotton.", specs: ["Preshrunk Heavy Cotton", "Bold Box Logo Chest Print", "Limited Edition Curation"] },
    { name: "Textured Weave Blazer", price: 340, desc: "A tailored modern blazer crafted in structured cotton weave. Ideal for layering over fine knits.", specs: ["Notched Lapels", "Chest Patch Pockets", "Dual Back Vent Openings"] }
  ],
  Footwear: [
    { name: "Air Jordan 1 Retro High", price: 180, desc: "The sneaker that changed the culture. Hand-crafted leather detailed with legendary Chicago accents.", specs: ["Premium Full Leather", "Air-Sole Cushioning Unit", "Padded High-Top Collar"] },
    { name: "Dunk Low Panda", price: 115, desc: "The highly versatile modern classic. Sleek black and white panels detailed with standard rubber soles.", specs: ["Classic Color Blocking", "Rubber Cupsole Traction", "Low-cut Ankle Comfort"] },
    { name: "Air Force 1 '07", price: 110, desc: "The basketball icon. Crisp triple-white leather overlays, metallic laces tag, and foam cushioning.", specs: ["Full Grain Leather", "AF1 Metal Lace Tag", "Perforated Toe Box Ventilation"] },
    { name: "Yeezy Boost 350 V2", price: 230, desc: "Constructed with Adidas' patented Primeknit technology and highly responsive full-length Boost soles.", specs: ["Primeknit Seamless Upper", "Full-length Boost Midsole", "Translucent Stripe Sides"] },
    { name: "Ultraboost 1.0", price: 190, desc: "Performance running meets luxury streetwear. Features foot-hugging Primeknit and Boost energy return.", specs: ["Primeknit Foot Hug Fit", "Boost Energy Return Soles", "Continental Rubber Grip"] },
    { name: "Samba OG Premium", price: 100, desc: "Classic soccer trainer styling refined for urban luxury. Textured suede overlay and rubber gum soles.", specs: ["Soft Leather & Suede", "Classic Gum Rubber Sole", "Gold Foil Samba Lettering"] },
    { name: "XT-6 Advanced Sneaker", price: 200, desc: "High-performance trail running shoe adapted for lifestyle luxury. Weatherproof shell and toggle laces.", specs: ["Agile Chassis System", "Quicklace Toggle Closure", "Contagrip Lugged Tread"] }
  ]
};

// Image resolver — uses ONLY verified, rock-solid Unsplash photo IDs
const getUnsplashImage = (category, brand, templateName) => {
  const nameLower = templateName.toLowerCase();
  const U = (id) => `https://images.unsplash.com/photo-${id}?q=80&w=800&auto=format&fit=crop`;

  // WATCHES — verified mechanical watch photos
  if (category === "Watches") {
    if (nameLower.includes("submariner") || nameLower.includes("black bay")) return U("1629581678313-36cf745a9af9");
    if (nameLower.includes("santos") || nameLower.includes("nautilus")) return U("1522337360788-8b13dee7a37e");
    if (nameLower.includes("speedmaster") || nameLower.includes("moonwatch") || nameLower.includes("alpinist")) return U("1547996160-81dfa63595aa");
    if (nameLower.includes("royal oak") || nameLower.includes("selfwinding")) return U("1614162692292-7ac56d7f7f1e");
    return U("1523275335684-37898b6baf30");
  }

  // AUDIO — verified headphone & speaker photos
  if (category === "Audio") {
    if (nameLower.includes("wh-1000xm5") || nameLower.includes("quietcomfort")) return U("1505740420928-5e560c06d30e");
    if (nameLower.includes("airpods") || nameLower.includes("max titanium")) return U("1583394838336-acd977736f90");
    if (nameLower.includes("stanmore") || nameLower.includes("phantom") || nameLower.includes("beosound")) return U("1545454675-3531b543be5d");
    if (nameLower.includes("h95") || nameLower.includes("beoplay")) return U("1583394838336-acd977736f90");
    if (nameLower.includes("earbuds") || nameLower.includes("buds") || nameLower.includes("wireless")) return U("1590658268037-6bf12165a8df");
    return U("1505740420928-5e560c06d30e");
  }

  // ACCESSORIES — verified luxury accessory photos
  if (category === "Accessories") {
    if (nameLower.includes("wayfarer") || nameLower.includes("carrera") || nameLower.includes("sunglasses")) return U("1572635196237-14b3f281503f");
    if (nameLower.includes("belt") || nameLower.includes("marmont")) return U("1590564853875-d94f288f30e3");
    if (nameLower.includes("wallet") || nameLower.includes("saffiano")) return U("1565026057447-bc90a3dceb87");
    if (nameLower.includes("cabin") || nameLower.includes("luggage") || nameLower.includes("rimowa")) return U("1553062407-98eeb64c6a62");
    if (nameLower.includes("pen") || nameLower.includes("fountain") || nameLower.includes("meisterstück")) return U("1583485088034-697b5bc54ccd");
    if (nameLower.includes("balm") || nameLower.includes("resurrection") || nameLower.includes("hand")) return U("1556228578-8c89e6adf883");
    return U("1572635196237-14b3f281503f");
  }

  // LIFESTYLE — verified lifestyle product photos
  if (category === "Lifestyle") {
    if (nameLower.includes("airwrap") || nameLower.includes("multi-styler")) return U("1522338242992-e1a54906a8da");
    if (nameLower.includes("quencher") || nameLower.includes("flowstate") || nameLower.includes("tumbler")) return U("1602143407151-7111542de6e8");
    if (nameLower.includes("tundra") || nameLower.includes("cooler")) return U("1532634922-8fe0b757fb13");
    if (nameLower.includes("aeron") || nameLower.includes("ergonomic") || nameLower.includes("chair")) return U("1505843490538-5133c6c7d0e1");
    if (nameLower.includes("dutch oven") || nameLower.includes("signature")) return U("1584269600464-37b1b58a9fe7");
    if (nameLower.includes("leica") || nameLower.includes("q3")) return U("1495707902641-75cac588d2e9");
    if (nameLower.includes("instax") || nameLower.includes("mini 90") || nameLower.includes("neo")) return U("1516035069371-29a1b244cc32");
    return U("1480399129328-4dfa6b253b8e");
  }

  // APPAREL — verified premium clothing photos
  if (category === "Apparel") {
    if (nameLower.includes("beta ar") || nameLower.includes("gore-tex") || nameLower.includes("shell")) return U("1544441893-675973e31985");
    if (nameLower.includes("maya") || nameLower.includes("down jacket") || nameLower.includes("puffer")) return U("1539533113208-f6df8cc8b543");
    if (nameLower.includes("hoodie") || nameLower.includes("essentials") || nameLower.includes("sweatshirt")) return U("1556821840-3a63f95609a7");
    if (nameLower.includes("trench") || nameLower.includes("coat")) return U("1591047139829-d91aecb6caea");
    if (nameLower.includes("tee") || nameLower.includes("box logo") || nameLower.includes("shirt")) return U("1503342217505-b0a15ec3261c");
    if (nameLower.includes("blazer") || nameLower.includes("weave")) return U("1507679799987-c73779587ccf");
    if (nameLower.includes("diag") || nameLower.includes("zip")) return U("1551028719-00167b16eac5");
    return U("1556821840-3a63f95609a7");
  }

  // FOOTWEAR — verified sneaker photos
  if (category === "Footwear") {
    if (nameLower.includes("jordan 1") || nameLower.includes("retro high")) return U("1552346154-21d32810aba3");
    if (nameLower.includes("dunk low") || nameLower.includes("panda")) return U("1600185365926-3a2ce3cdb9eb");
    if (nameLower.includes("force 1") || nameLower.includes("air force")) return U("1606107557195-0e29a4b5b4aa");
    if (nameLower.includes("yeezy") || nameLower.includes("boost 350")) return U("1607522370275-f14206abe5d3");
    if (nameLower.includes("ultraboost") || nameLower.includes("running")) return U("1542291026-7eec264c27ff");
    if (nameLower.includes("samba") || nameLower.includes("og premium")) return U("1542291026-7eec264c27ff");
    if (nameLower.includes("xt-6") || nameLower.includes("advanced")) return U("1595950653106-6c9ebd614d3a");
    return U("1542291026-7eec264c27ff");
  }

  return U("1523275335684-37898b6baf30");
};

// Dynamic deep-link router that maps each luxury product model directly to its authentic retailer product page
const getProductDeepLink = (category, brand, templateName) => {
  const b = brand.toLowerCase();
  const n = templateName.toLowerCase();

  // 1. Watches
  if (category === "Watches") {
    if (b.includes("rolex")) return "https://www.rolex.com/en-us/watches/submariner/m126610ln-0001";
    if (b.includes("cartier")) return "https://www.cartier.com/en-us/watches/collections/santos-de-cartier/santos-watch-WSSA0018.html";
    if (b.includes("omega")) return "https://www.omegawatches.com/en-us/watch-omega-speedmaster-moonwatch-professional-co-axial-master-chronometer-chronograph-42-mm-31030425001002";
    if (b.includes("patek")) return "https://www.patek.com/en/collection/nautilus/5711-1A-010";
    if (b.includes("audemars")) return "https://www.audemarspiguet.com/com/en/watch-collection/royal-oak/15500ST.OO.1220ST.01.html";
    if (b.includes("tudor")) return "https://www.tudorwatch.com/en/watches/black-bay-58/m79030n-0001";
    if (b.includes("seiko")) return "https://www.seikowatches.com/global-en/products/prospex/spb121j1";
    if (b.includes("tag heuer")) return "https://www.tagheuer.com/us/en/watches/collections/tag-heuer-carrera/44-mm-calibre-heuer02-automatic/CBN2A1B.BA0643.html";
    if (b.includes("garmin")) return "https://www.garmin.com/en-US/p/852159";
    if (b.includes("tissot")) return "https://www.tissotwatches.com/en-us/t1374071104100.html";
    return "https://www.rolex.com";
  }

  // 2. Audio
  if (category === "Audio") {
    if (b.includes("sony")) return "https://electronics.sony.com/audio/headphones/headband/p/wh1000xm5-b";
    if (b.includes("bose")) return "https://www.bose.com/p/headphones/bose-quietcomfort-ultra-headphones/QCHIP-HEADPHONE-OPAL.html";
    if (b.includes("sennheiser")) return "https://www.sennheiser-hearing.com/en-US/p/hd-660s2/";
    if (b.includes("bang") || b.includes("olufsen")) {
      if (n.includes("h95")) return "https://www.bang-olufsen.com/en/us/headphones/beoplay-h95";
      return "https://www.bang-olufsen.com/en/us/speakers/beosound-a1";
    }
    if (b.includes("apple")) return "https://www.apple.com/airpods-max/";
    if (b.includes("marshall")) return "https://www.marshallheadphones.com/us/en/stanmore-iii.html";
    if (b.includes("devialet")) return "https://www.devialet.com/en-us/phantom-speaker/phantom-ii/phantom-ii-98db-white/";
    if (b.includes("sonos")) return "https://www.sonos.com/en-us/shop/era-300";
    if (b.includes("bowers")) return "https://www.bowerswilkins.com/en-us/product/headphones/px8";
    return "https://electronics.sony.com/audio/headphones";
  }

  // 3. Accessories
  if (category === "Accessories") {
    if (b.includes("ray-ban")) return "https://www.ray-ban.com/usa/sunglasses/RB2140%20UNISEX%20original%20wayfarer%20classic-black/805289126577";
    if (b.includes("gucci")) return "https://www.gucci.com/us/en/pr/men/accessories-for-men/belts-for-men/gg-marmont-leather-belt-with-shiny-buckle-p-406831DJ20T1000";
    if (b.includes("prada")) return "https://www.prada.com/us/en/men/accessories/wallets_and_card_holders/products.saffiano_leather_wallet.2MO513_QME_F0002.html";
    if (b.includes("louis vuitton")) return "https://us.louisvuitton.com/eng-us/products/slender-wallet-monogram-nvprod2630091v/M80520";
    if (b.includes("hermes")) return "https://www.hermes.com/us/en/product/h-belt-buckle-leather-strap-32mm-U_BELT_32_HOMMEvq_H073967CAAE100vq_H064544CB86080/";
    if (b.includes("montblanc")) return "https://www.montblanc.com/en-us/fountain-pens_cod22250485835262768.html";
    if (b.includes("rimowa")) return "https://www.rimowa.com/us/en/luggage/colour/silver/original-cabin/92553004.html";
    if (b.includes("oakley")) return "https://www.oakley.com/en-us/product/W0OO9208";
    if (b.includes("tom ford")) return "https://www.tomford.com/ft5859-b-classic-acetate-pantone-frame/889652391036.html";
    return "https://www.ray-ban.com";
  }

  // 4. Lifestyle
  if (category === "Lifestyle") {
    if (b.includes("dyson")) return "https://www.dyson.com/hair-care/hair-stylers/airwrap";
    if (b.includes("stanley")) return "https://www.stanley1913.com/products/adventure-quencher-travel-tumbler-40-oz";
    if (b.includes("yeti")) return "https://www.yeti.com/coolers/hard-coolers/tundra/tundra-45.html";
    if (b.includes("herman miller")) return "https://store.hermanmiller.com/office-chairs-aeron/aeron-chair/2197608.html";
    if (b.includes("le creuset")) return "https://www.lecreuset.com/signature-round-dutch-oven/ls2501.html";
    if (b.includes("aesop")) return "https://www.aesop.com/us/p/body-hand/hand/resurrection-aromatique-hand-balm/";
    if (b.includes("molekule")) return "https://molekule.com/products/air-mini-plus";
    if (b.includes("theragun")) return "https://www.therabody.com/us/en-us/theragun-prime.html";
    if (b.includes("leica")) return "https://leica-camera.com/en-US/photography/cameras/q/q3";
    if (b.includes("fujifilm")) return "https://www.fujifilm.com/us/en/consumer/instax/cameras/mini90";
    return "https://www.dyson.com";
  }

  // 5. Apparel
  if (category === "Apparel") {
    if (b.includes("fear of god")) return "https://fearofgod.com/products/essentials-oversized-hoodie-black";
    if (b.includes("arc'teryx")) return "https://arcteryx.com/us/en/shop/mens/beta-ar-jacket";
    if (b.includes("stone island")) return "https://www.stoneisland.com/us/stone-island/sweatshirt_cod43950294go.html";
    if (b.includes("moncler")) return "https://www.moncler.com/en-us/men/outerwear/short-down-jackets/moncler-maya-short-down-jacket-black-I20911A5360068950999.html";
    if (b.includes("supreme")) return "https://supremenewyork.com/shop";
    if (b.includes("off-white")) return "https://www.off---white.com/en-us/shopping/off-white-diag-outline-zip-hoodie-21118128";
    if (b.includes("ralph lauren")) return "https://www.ralphlauren.com/men-clothing-sportcoats/textured-weave-blazer/656133.html";
    if (b.includes("burberry")) return "https://us.burberry.com/the-kensington-heritage-trench-coat-p80280811";
    return "https://fearofgod.com";
  }

  // 6. Footwear
  if (category === "Footwear") {
    if (b.includes("nike")) {
      if (n.includes("jordan")) return "https://www.nike.com/t/air-jordan-1-retro-high-og-shoes-h1GD1V/DZ5485-061";
      if (n.includes("dunk")) return "https://www.nike.com/t/nike-dunk-low-retro-mens-shoes-z3H7G2/DD1391-100";
      return "https://www.nike.com/t/air-force-1-07-mens-shoes-j1DTKj/CW2288-111";
    }
    if (b.includes("adidas")) {
      if (n.includes("samba")) return "https://www.adidas.com/us/samba-shoes/B75807.html";
      return "https://www.adidas.com/us/ultraboost-1.0-shoes/HQ4199.html";
    }
    if (b.includes("new balance")) return "https://www.newbalance.com/550/";
    if (b.includes("salomon")) return "https://www.salomon.com/en-us/shop/product/xt-6-li3048.html";
    if (b.includes("asics")) return "https://www.asics.com/us/en-us/gel-kayano-14/p/ANA_1201A019-100.html";
    if (b.includes("balenciaga")) return "https://www.balenciaga.com/en-us/triple-s-sneaker-clear-sole-double-foam-and-mesh-white-541624W2FB19010.html";
    if (b.includes("prada")) return "https://www.prada.com/us/en/men/shoes/sneakers/products.prada_america_s_cup_leather_and_bike_fabric_sneakers.4E3400_ASZ_F0002.html";
    if (b.includes("birkenstock")) return "https://www.birkenstock.com/us/boston-clog/boston-suede-leather.html";
    if (b.includes("dr. martens")) return "https://www.drmartens.com/us/en/1460-smooth-leather-lace-up-boots-black/p/11822008";
    return "https://www.nike.com";
  }

  return "https://www.nike.com";
};

// Data Generator: safely expands the catalog to exactly 210 products
const generateProducts = () => {
  const finalProducts = [];
  let currentId = 1;

  const categoriesList = ["Watches", "Audio", "Accessories", "Lifestyle", "Apparel", "Footwear"];

  categoriesList.forEach((cat) => {
    const brands = BRAND_DETAILS[cat];
    const templates = PRODUCT_TEMPLATES[cat];

    // Generate exactly 35 distinct products per category (6 * 35 = 210 products total)
    for (let i = 0; i < 35; i++) {
      const brandObj = brands[i % brands.length];
      const templateObj = templates[i % templates.length];

      // Formulate unique product names and details based on templates and brands
      const suffix = i >= templates.length ? ` Series ${Math.floor(i / templates.length) + 1}` : '';
      const name = `${brandObj.brand} ${templateObj.name}${suffix}`;

      // Introduce slight price variance per model and scale to Indian Rupees (INR)
      const priceModifier = (1 + (i % 5) * 0.05);
      const price = Math.round(templateObj.price * priceModifier * 85);

      // Create unique specs variations
      const specs = [...templateObj.specs];
      if (i >= templates.length) {
        specs[0] = `${specs[0]} (Gen ${Math.floor(i / templates.length) + 1})`;
        specs[2] = `${specs[2]} + Premium Bundle`;
      }

      // Build the final luxury product object with fail-safe, keyword-matched Unsplash images
      finalProducts.push({
        id: currentId++,
        name,
        price,
        category: cat,
        image: getUnsplashImage(cat, brandObj.brand, templateObj.name),
        description: `Premium, highly curated ${name}. ${templateObj.desc}`,
        specs,
        externalLink: getProductDeepLink(cat, brandObj.brand, templateObj.name)
      });
    }
  });

  return finalProducts;
};

// Export the massive 210-product array and category tags
export const products = generateProducts();

export const categories = ["All", "Watches", "Audio", "Accessories", "Lifestyle", "Apparel", "Footwear"];
