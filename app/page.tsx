import { Search, Filter, Grid, List, Star, MapPin, Package, ShoppingCart, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock data
const featuredProducts = [
  {
    id: 1,
    name: "Industrial Steel Pipes",
    business: "MetalWorks Inc",
    businessId: 1,
    price: "$45.99/unit",
    image: "/images/steel-pipes.jpg",
    rating: 4.8,
    reviews: 124,
    location: "Chicago, IL",
    category: "Industrial Materials",
  },
  {
    id: 2,
    name: "Commercial LED Lighting System",
    business: "BrightTech Solutions",
    businessId: 2,
    price: "$299.99/set",
    image: "/images/led-lighting.jpg",
    rating: 4.9,
    reviews: 89,
    location: "Austin, TX",
    category: "Electronics",
  },
  {
    id: 3,
    name: "Office Furniture Bundle",
    business: "WorkSpace Pro",
    businessId: 3,
    price: "$1,299.99/set",
    image: "/images/office-furniture.jpg",
    rating: 4.7,
    reviews: 156,
    location: "New York, NY",
    category: "Furniture",
  },
  {
    id: 4,
    name: "Safety Equipment Kit",
    business: "SafeGuard Industries",
    businessId: 4,
    price: "$89.99/kit",
    image: "/images/safety-equipment.jpg",
    rating: 4.6,
    reviews: 203,
    location: "Denver, CO",
    category: "Safety",
  },
]

const categories = [
  "All Categories",
  "Industrial Materials",
  "Electronics",
  "Furniture",
  "Safety",
  "Machinery",
  "Software",
  "Services",
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-2xl font-bold text-gray-900">
                B2B Market
              </Link>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-gray-600 hover:text-gray-900">
                Marketplace
              </Link>
              <Link href="/businesses" className="text-gray-600 hover:text-gray-900">
                Businesses
              </Link>
              <Link href="/buyer/dashboard" className="text-gray-600 hover:text-gray-900">
                My Account
              </Link>
              <Link href="/dashboard" className="text-gray-600 hover:text-gray-900">
                Sell
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link href="/cart">
                <Button variant="outline" size="icon">
                  <ShoppingCart className="h-4 w-4" />
                </Button>
              </Link>
              <Button variant="outline">Sign In</Button>
              <Button className="bg-primary-700 hover:bg-primary-800 text-white">Get Started</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-800 to-secondary-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Connect. Trade. Grow.</h1>
          <p className="text-xl mb-8 text-gray-300">The premier B2B marketplace connecting businesses worldwide</p>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search products, services, or businesses..."
                  className="pl-10 h-12 border-0 focus-visible:ring-0"
                />
              </div>
              <Select>
                <SelectTrigger className="w-full md:w-48 h-12 border-0">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category.toLowerCase()}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button size="lg" className="h-12 px-8 bg-primary-700 hover:bg-primary-800 text-white">
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">10K+</div>
              <div className="text-gray-600">Active Businesses</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">50K+</div>
              <div className="text-gray-600">Products Listed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">$2.5B+</div>
              <div className="text-gray-600">Transaction Volume</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">95%</div>
              <div className="text-gray-600">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <div className="flex border rounded-lg">
                <Button variant="ghost" size="sm">
                  <Grid className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                    />
                    <Badge className="absolute top-2 right-2 bg-secondary-600">{product.category}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <Link href={`/product/${product.id}`}>
                    <h3 className="font-semibold text-lg mb-2 hover:text-gray-600 transition-colors">{product.name}</h3>
                  </Link>
                  <Link href={`/business/${product.businessId}`}>
                    <p className="text-gray-600 mb-2 hover:text-gray-800 transition-colors">{product.business}</p>
                  </Link>
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="ml-1 text-sm text-gray-600">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    {product.location}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900">{product.price}</span>
                    <Button size="sm" className="bg-primary-700 hover:bg-primary-800 text-white">
                      Contact
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-primary-600 text-primary-700 hover:bg-primary-50 bg-transparent"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-secondary-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.slice(1).map((category) => (
              <Card key={category} className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <Package className="h-12 w-12 mx-auto mb-4 text-gray-600" />
                  <h3 className="font-semibold text-lg">{category}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">B2B Market</h3>
              <p className="text-gray-400">
                Connecting businesses worldwide through our comprehensive marketplace platform.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Marketplace</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/" className="hover:text-white">
                    Browse Products
                  </Link>
                </li>
                <li>
                  <Link href="/businesses" className="hover:text-white">
                    Find Businesses
                  </Link>
                </li>
                <li>
                  <Link href="/categories" className="hover:text-white">
                    Categories
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Businesses</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/dashboard" className="hover:text-white">
                    Seller Dashboard
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-white">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className="hover:text-white">
                    Resources
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/help" className="hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 B2B Market. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
