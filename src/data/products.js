// Product catalogue for Natarajan and Co. Descriptions are original and
// intentionally general — no invented technical specifications, prices,
// certifications, or performance claims.

const products = [
  {
    id: 1,
    slug: "ultratech-cement",
    name: "UltraTech Cement",
    brandSlug: "ultratech",
    brand: "UltraTech",
    category: "Cement",
    image: "/logo/Ultratech_India-Logo.png",
    shortDescription:
      "India's No.1 cement brand, stocked for everyday residential and commercial construction needs.",
    description:
      "UltraTech Cement is the product we've supplied longest as an authorised UltraTech dealer in Karaikudi. It's used across a wide range of construction work, from foundations to finishing, and is a dependable choice for builders, contractors, and homeowners in our region.",
    features: [
      "Suitable for general residential and commercial construction",
      "Available through our authorised UltraTech dealership",
      "Consistent local availability in Karaikudi",
    ],
    benefits: [
      "Backed by a nationally recognised cement brand",
      "Sourced directly through an authorised dealership channel",
      "Local stock means faster availability for your project",
    ],
    applications: [
      "Residential home construction",
      "Small and mid-scale commercial buildings",
      "General masonry and structural work",
    ],
  },
  {
    id: 2,
    slug: "ultratech-building-solutions",
    name: "UltraTech Building Solutions",
    brandSlug: "ultratech",
    brand: "UltraTech",
    category: "Building Solutions",
    image: "/assets/ultratech buliding product.jpg",
    shortDescription:
      "The broader range of UltraTech building-solution products we stock alongside cement.",
    description:
      "Beyond core cement, UltraTech offers a wider building-solutions range designed to support different stages of construction. As part of our dealership, we help customers identify the right UltraTech products for their specific project needs.",
    features: [
      "Complements UltraTech cement for complete building needs",
      "Guidance available from our team on product selection",
    ],
    benefits: [
      "One dealer for multiple UltraTech building products",
      "Local expertise on matching products to your project",
    ],
    applications: [
      "New construction projects",
      "Renovation and repair work",
    ],
  },
  {
    id: 3,
    slug: "birla-white-cement",
    name: "Birla White Cement",
    brandSlug: "birla-white",
    brand: "Birla White",
    category: "White Cement",
    image: "/Bg/ULTRATECH BG.png",
    shortDescription: "White cement suited for decorative and finishing applications.",
    description:
      "Birla White cement is commonly chosen for decorative work and finishing tasks where a clean, white base is preferred. We stock it as part of our Birla product range for customers with specific finishing requirements.",
    features: ["Fine white cement", "Suitable for decorative finishing work"],
    benefits: ["Sourced through our authorised Birla dealership", "Consistent local stock"],
    applications: ["Decorative wall and surface finishing", "Architectural detailing"],
  },
  {
    id: 4,
    slug: "birla-wallcare-putty",
    name: "Birla Wallcare Putty",
    brandSlug: "birla-white",
    brand: "Birla White",
    category: "Wall Putty",
    image: "/Bg/WALLCARE BG.png",
    shortDescription: "Wall putty used to prepare smooth, paint-ready surfaces.",
    description:
      "Wallcare putty is applied before painting to help achieve a smoother wall surface. It's a regularly requested product from customers preparing walls for interior or exterior painting.",
    features: ["Used before painting for a smoother finish", "Available in the quantities our customers commonly need"],
    benefits: ["Helps achieve a more even paint finish", "Readily available through our dealership"],
    applications: ["Interior wall preparation", "Exterior wall preparation before painting"],
  },
  {
    id: 5,
    slug: "myk-laticrete-tile-adhesive",
    name: "Myk Laticrete Tile Adhesive",
    brandSlug: "myk-laticrete",
    brand: "Myk Laticrete",
    category: "Tile Adhesives",
    image: "/Bg/MYK BG.png",
    shortDescription: "Tile-fixing adhesive from the Myk Laticrete range.",
    description:
      "For customers working on tiling projects, we stock Myk Laticrete tile adhesives as part of our construction-chemicals range. Our team can help you understand which product fits your tiling job.",
    features: ["Part of the Myk Laticrete tiling range", "Stocked for residential and small commercial tiling"],
    benefits: ["Trusted tiling brand", "Available locally through our store"],
    applications: ["Floor and wall tiling", "Renovation tiling work"],
  },
  {
    id: 6,
    slug: "fosroc-construction-chemicals",
    name: "Fosroc Construction Chemicals",
    brandSlug: "fosroc",
    brand: "Fosroc",
    category: "Construction Chemicals",
    image: "/Bg/FOSROC BG.png",
    shortDescription: "Construction chemical products for repair and protection work.",
    description:
      "Fosroc's construction chemical range covers repair, protection, and waterproofing needs. We keep select products available for customers handling renovation or protective-treatment work.",
    features: ["Construction chemical solutions", "Selected products stocked based on customer demand"],
    benefits: ["Recognised construction chemicals brand", "Guidance from our team on suitable products"],
    applications: ["Repair work", "Surface protection and treatment"],
  },
  {
    id: 7,
    slug: "araldite-adhesive",
    name: "Araldite Adhesive",
    brandSlug: "araldite",
    brand: "Araldite",
    category: "Adhesives",
    image: "/assets/araldite.jpg",
    shortDescription: "General-purpose adhesive for bonding and repair tasks.",
    description:
      "Araldite is a widely recognised adhesive brand that we stock for everyday bonding and repair needs, useful for both construction-related tasks and general household repairs.",
    features: ["General-purpose bonding adhesive", "Commonly used for repair work"],
    benefits: ["Well-known, dependable adhesive brand", "Easy to find in our store"],
    applications: ["Household and construction repairs", "General bonding tasks"],
  },
  {
    id: 8,
    slug: "dr-fixit-waterproofing",
    name: "Dr Fixit Waterproofing",
    brandSlug: "dr-fixit",
    brand: "Dr Fixit",
    category: "Waterproofing",
    image: "/Bg/FIXIT BG.png",
    shortDescription: "Waterproofing products to help protect roofs and walls.",
    description:
      "Dr Fixit products are a common choice for customers looking to address water seepage or protect surfaces from moisture. We stock these as part of our waterproofing product range.",
    features: ["Waterproofing product range", "Stocked for roof and wall treatment needs"],
    benefits: ["Established waterproofing brand", "Available through our authorised dealership"],
    applications: ["Roof waterproofing", "Wall seepage treatment"],
  },
];

export default products;
