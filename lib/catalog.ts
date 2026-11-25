// Single source of truth for products that can be paid online.
// The checkout page and the payment API both read prices from here,
// so the amount charged never comes from the browser.

export type Brand = "KORU" | "NUI" | "HEALTH" | "MELORA"

export interface CatalogProduct {
  id: string
  name: string
  description: string
  image: string
  mgoLevel: string
  brand: Brand
  isPremium: boolean
  /** Price in Albanian lek (ALL), whole units */
  price: number
  rating: number
  whatsappMessage: string
}

export const featuredProducts: CatalogProduct[] = [
  {
    id: "koru-300",
    name: "Manuka Koru MGO 300+",
    description: "Mjalte Manuka premium me përmbajtje të lartë antioksidantësh",
    image: "https://m.media-amazon.com/images/I/71+la-DryjL.jpg",
    mgoLevel: "MGO 300+",
    brand: "KORU",
    isPremium: true,
    price: 7500,
    rating: 5,
    whatsappMessage: "Manuka Koru MGO 300+",
  },
  {
    id: "koru-500",
    name: "Manuka Koru MGO 500+",
    description: "Mjalte Manuka me aktivitet të lartë antibakterial",
    image: "/images/img-2841.png",
    mgoLevel: "MGO 500+",
    brand: "KORU",
    isPremium: false,
    price: 10000,
    rating: 5,
    whatsappMessage: "Manuka Koru MGO 500+",
  },
  {
    id: "koru-800",
    name: "Manuka Koru MGO 800+",
    description: "Mjalte Manuka super premium për përdorim terapeutik",
    image: "https://bioceuticals.co.uk/cdn/shop/products/koru800.jpg?v=1590247373",
    mgoLevel: "MGO 800+",
    brand: "KORU",
    isPremium: true,
    price: 17000,
    rating: 5,
    whatsappMessage: "Manuka Koru MGO 800+",
  },
  {
    id: "koru-1000",
    name: "Manuka Koru MGO 1000+",
    description: "Mjalte Manuka me koncentrim të lartë të vetive aktive",
    image: "https://bioceuticals.co.uk/cdn/shop/products/koru1000.jpg?v=1590247497",
    mgoLevel: "MGO 1000+",
    brand: "KORU",
    isPremium: false,
    price: 22000,
    rating: 5,
    whatsappMessage: "Manuka Koru MGO 1000+",
  },
]

export function findProduct(id: string | null | undefined): CatalogProduct | undefined {
  if (!id) return undefined
  return featuredProducts.find((product) => product.id === id)
}

/** Formats a lek amount the same way in every browser, e.g. 17000 -> "17 000 L" */
export function formatLek(amount: number): string {
  return `${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} L`
}
