import { Package, Heart, Settings, TrendingUp, ShoppingCart, Star, Eye } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

// Mock data
const recentOrders = [
  {
    id: "ORD-2024-001234",
    date: "Jan 15, 2024",
    status: "Shipped",
    total: "$1,259.96",
    items: 2,
    supplier: "MetalWorks Inc",
  },
  {
    id: "ORD-2024-001233",
    date: "Jan 10, 2024",
    status: "Delivered",
    total: "$899.50",
    items: 1,
    supplier: "BrightTech Solutions",
  },
  {
    id: "ORD-2024-001232",
    date: "Jan 5, 2024",
    status: "Processing",
    total: "$2,150.00",
    items: 3,
    supplier: "SafeGuard Industries",
  },
]

const savedProducts = [
  {
    id: 1,
    name: "Industrial Steel Pipes",
    business: "MetalWorks Inc",
    price: "$45.99/unit",
    image: "/placeholder.svg?height=100&width=100",
    inStock: true,
  },
  {
    id: 2,
    name: "Safety Equipment Kit",
    business: "SafeGuard Industries",
    price: "$89.99/kit",
    image: "/placeholder.svg?height=100&width=100",
    inStock: false,
  },
]

export default function BuyerDashboardPage() {
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
              <Link href="/buyer/dashboard" className="text-gray-900 font-semibold">
                My Account
              </Link>
            </nav>
            <Link href="/cart">
              <Button variant="outline" size="icon">
                <ShoppingCart className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Dashboard Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, John!</h1>
          <p className="text-gray-600">Here's what's happening with your account</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">+3 from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$12,450</div>
              <p className="text-xs text-muted-foreground">+15% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Saved Products</CardTitle>
              <Heart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">18</div>
              <p className="text-xs text-muted-foreground">2 back in stock</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Suppliers</CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">Trusted partners</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Link href="/buyer/orders">
                  <Button className="w-full justify-start bg-primary-700 hover:bg-primary-800 text-white">
                    <Package className="h-4 w-4 mr-2" />
                    View All Orders
                  </Button>
                </Link>
                <Link href="/buyer/wishlist">
                  <Button
                    variant="outline"
                    className="w-full justify-start border-secondary-600 text-secondary-700 hover:bg-secondary-50 bg-transparent"
                  >
                    <Heart className="h-4 w-4 mr-2" />
                    Saved Products
                  </Button>
                </Link>
                <Link href="/">
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <Eye className="h-4 w-4 mr-2" />
                    Browse Marketplace
                  </Button>
                </Link>
                <Link href="/buyer/settings">
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <Settings className="h-4 w-4 mr-2" />
                    Account Settings
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Account Progress */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Account Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Profile Completion</span>
                    <span>85%</span>
                  </div>
                  <Progress value={85} className="h-2 [&>div]:bg-primary-600" />
                </div>
                <div className="text-sm text-gray-600">
                  <p>Complete your profile to unlock:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Net 30 payment terms</li>
                    <li>Volume discounts</li>
                    <li>Priority support</li>
                  </ul>
                </div>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Complete Profile
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Recent Orders */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Recent Orders</CardTitle>
                <Link href="/buyer/orders">
                  <Button variant="outline" size="sm" className="bg-transparent">
                    View All
                  </Button>
                </Link>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="p-2 bg-gray-100 rounded-lg">
                          <Package className="h-5 w-5 text-gray-600" />
                        </div>
                        <div>
                          <div className="font-medium">{order.id}</div>
                          <div className="text-sm text-gray-600">{order.supplier}</div>
                          <div className="text-sm text-gray-500">
                            {order.date} • {order.items} items
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge
                          variant={
                            order.status === "Delivered"
                              ? "default"
                              : order.status === "Shipped"
                                ? "secondary"
                                : "destructive"
                          }
                          className={
                            order.status === "Delivered"
                              ? "bg-secondary-600 text-white"
                              : order.status === "Shipped"
                                ? "bg-primary-600 text-white"
                                : "bg-orange-600 text-white"
                          }
                        >
                          {order.status}
                        </Badge>
                        <div className="font-semibold mt-1">{order.total}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Saved Products */}
            <Card className="mt-6">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Recently Saved</CardTitle>
                <Link href="/buyer/wishlist">
                  <Button variant="outline" size="sm" className="bg-transparent">
                    View All
                  </Button>
                </Link>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {savedProducts.map((product) => (
                    <div key={product.id} className="flex items-center space-x-3 p-3 border rounded-lg">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={60}
                        height={60}
                        className="rounded object-cover"
                      />
                      <div className="flex-1">
                        <div className="font-medium text-sm">{product.name}</div>
                        <div className="text-xs text-gray-500">{product.business}</div>
                        <div className="text-sm font-semibold">{product.price}</div>
                        <Badge variant={product.inStock ? "default" : "secondary"} className="text-xs mt-1">
                          {product.inStock ? "In Stock" : "Out of Stock"}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
