"use client"

import { useState } from "react"
import { ArrowLeft, Heart, Trash2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Mock favorite products data
const initialFavoriteItems = [
  {
    id: 1,
    productId: 1,
    name: "Industrial Steel Pipes",
    business: "MetalWorks Inc",
    businessId: 1,
    price: "$45.99/unit",
    image: "/images/steel-pipes.jpg",
    inStock: true,
  },
  {
    id: 2,
    productId: 2,
    name: "Commercial LED Lighting System",
    business: "BrightTech Solutions",
    businessId: 2,
    price: "$299.99/set",
    image: "/images/led-lighting.jpg",
    inStock: true,
  },
  {
    id: 3,
    productId: 3,
    name: "Office Furniture Bundle",
    business: "WorkSpace Pro",
    businessId: 3,
    price: "$1,299.99/set",
    image: "/images/office-furniture.jpg",
    inStock: false,
  },
  {
    id: 4,
    productId: 4,
    name: "Safety Equipment Kit",
    business: "SafeGuard Industries",
    businessId: 4,
    price: "$89.99/kit",
    image: "/images/safety-equipment.jpg",
    inStock: true,
  },
]

export default function FavoritesPage() {
  const [favoriteItems, setFavoriteItems] = useState(initialFavoriteItems)

  const removeItem = (id: number) => {
    setFavoriteItems((items) => items.filter((item) => item.id !== id))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              B2B Market
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-gray-600 hover:text-gray-900">
                Marketplace
              </Link>
              <Link href="/buyer/dashboard" className="text-gray-600 hover:text-gray-900">
                My Account
              </Link>
              <span className="text-gray-900 font-semibold">Favorites</span>
            </nav>
            <Button variant="outline">Sign In</Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="flex items-center mb-8">
          <Link href="/buyer/dashboard">
            <Button variant="outline" size="icon" className="mr-4 bg-transparent">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">My Favorites</h1>
            <p className="text-gray-600">{favoriteItems.length} saved products</p>
          </div>
        </div>

        {favoriteItems.length === 0 ? (
          <Card className="text-center py-12">
            <CardContent>
              <Heart className="h-16 w-16 mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Your favorites list is empty</h3>
              <p className="text-gray-600 mb-6">Start browsing the marketplace to save products you like.</p>
              <Link href="/">
                <Button>Browse Marketplace</Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favoriteItems.map((item) => (
              <Card key={item.id} className="group hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                    />
                    <Badge
                      className={`absolute top-2 right-2 ${
                        item.inStock ? "bg-secondary-600" : "bg-gray-500"
                      } text-white`}
                    >
                      {item.inStock ? "In Stock" : "Out of Stock"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <Link href={`/product/${item.productId}`}>
                    <h3 className="font-semibold text-lg mb-2 hover:text-gray-600 transition-colors">{item.name}</h3>
                  </Link>
                  <Link href={`/business/${item.businessId}`}>
                    <p className="text-gray-600 mb-2 hover:text-gray-800 transition-colors">{item.business}</p>
                  </Link>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900">{item.price}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeItem(item.id)}
                      className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Remove from favorites</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
