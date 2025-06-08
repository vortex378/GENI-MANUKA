"use client"

import { Badge } from "@/components/ui/badge"

interface BrandFilterProps {
  brands: string[]
  selectedBrand: string
  onBrandSelect: (brand: string) => void
}

export default function BrandFilter({ brands, selectedBrand, onBrandSelect }: BrandFilterProps) {
  const allBrands = ["Të Gjitha", ...brands]

  const getBrandColor = (brand: string) => {
    switch (brand) {
      case "Të Gjitha":
        return "bg-gradient-to-r from-amber-500 to-orange-500 text-white"
      case "Manuka Koru":
        return selectedBrand === brand
          ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white"
          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
      case "Manuka NUI":
        return selectedBrand === brand
          ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-white"
          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
      case "Manuka Health":
        return selectedBrand === brand
          ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white"
          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
      case "Melora":
        return selectedBrand === brand
          ? "bg-gradient-to-r from-purple-500 to-violet-500 text-white"
          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
      default:
        return selectedBrand === brand
          ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white"
          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
    }
  }

  const getDisplayName = (brand: string) => {
    switch (brand) {
      case "Manuka Koru":
        return "KORU"
      case "Manuka NUI":
        return "NUI"
      case "Manuka Health":
        return "HEALTH"
      case "Melora":
        return "MELORA"
      default:
        return brand
    }
  }

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
      {allBrands.map((brand) => (
        <Badge
          key={brand}
          className={`px-6 py-3 text-lg font-semibold cursor-pointer transition-all duration-300 transform hover:scale-105 shadow-md ${getBrandColor(brand)} ${
            selectedBrand === brand || (brand === "Të Gjitha" && selectedBrand === "") ? "shadow-lg scale-105" : ""
          }`}
          onClick={() => onBrandSelect(brand === "Të Gjitha" ? "" : brand)}
        >
          {getDisplayName(brand)}
        </Badge>
      ))}
    </div>
  )
}
