import { Package, Truck, CheckCircle, Clock, Search, Filter, Download, Eye } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock orders data
const orders = [
  {
    id: "ORD-2024-001234",
    date: "Jan 15, 2024",
    status: "Shipped",
    total: 1259.96,
    items: [
      {
        name: "Industrial Steel Pipes",
        quantity: 10,
        price: 45.99,
        image: "/placeholder.svg?height=50&width=50",
      },
      {
        name: "Commercial LED Lighting",
        quantity: 2,
        price: 299.99,
        image: "/placeholder.svg?height=50&width=50",
      },
    ],
    supplier: "MetalWorks Inc",
    trackingNumber: "1Z999AA1234567890",
    estimatedDelivery: "Jan 22, 2024",
  },
  {
    id: "ORD-2024-001233",
    date: "Jan 10, 2024",
    status: "Delivered",
    total: 899.5,
    items: [
      {
        name: "Safety Equipment Kit",
        quantity: 1,
        price: 899.5,
        image: "/placeholder.svg?height=50&width=50",
      },
    ],
    supplier: "SafeGuard Industries",
    trackingNumber: "1Z999AA1234567891",
    deliveredDate: "Jan 15, 2024",
  },
  {
    id: "ORD-2024-001232",
    date: "Jan 5, 2024",
    status: "Processing",
    total: 2150.0,
    items: [
      {
        name: "Office Furniture Bundle",
        quantity: 1,
        price: 1299.99,
        image: "/placeholder.svg?height=50&width=50",
      },
      {
        name: "Industrial Steel Pipes",
        quantity: 20,
        price: 45.99,
        image: "/placeholder.svg?height=50&width=50",
      },
    ],
    supplier: "WorkSpace Pro",
    estimatedShipping: "Jan 20, 2024",
  },
  {
    id: "ORD-2024-001231",
    date: "Dec 28, 2023",
    status: "Cancelled",
    total: 450.0,
    items: [
      {
        name: "Commercial LED Lighting",
        quantity: 1,
        price: 450.0,
        image: "/placeholder.svg?height=50&width=50",
      },
    ],
    supplier: "BrightTech Solutions",
    cancelledDate: "Dec 30, 2023",
  },
]

const getStatusIcon = (status: string) => {
  switch (status) {
    case "Processing":
      return <Clock className="h-4 w-4" />
    case "Shipped":
      return <Truck className="h-4 w-4" />
    case "Delivered":
      return <CheckCircle className="h-4 w-4" />
    default:
      return <Package className="h-4 w-4" />
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "Processing":
      return "bg-orange-600 text-white"
    case "Shipped":
      return "bg-primary-600 text-white"
    case "Delivered":
      return "bg-secondary-600 text-white"
    case "Cancelled":
      return "bg-gray-500 text-white"
    default:
      return "bg-gray-500 text-white"
  }
}

export default function OrdersPage() {
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
                Dashboard
              </Link>
              <span className="text-gray-900 font-semibold">Orders</span>
            </nav>
            <Button variant="outline">Export Orders</Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Order History</h1>
          <p className="text-gray-600">Track and manage all your orders</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Total Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">In Transit</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">3</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Delivered</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">18</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Total Spent</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$12,450</div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input placeholder="Search orders..." className="pl-10" />
              </div>
              <Select>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="All Statuses" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="processing">Processing</SelectItem>
                  <SelectItem value="shipped">Shipped</SelectItem>
                  <SelectItem value="delivered">Delivered</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Last 30 days" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="30">Last 30 days</SelectItem>
                  <SelectItem value="90">Last 3 months</SelectItem>
                  <SelectItem value="365">Last year</SelectItem>
                  <SelectItem value="all">All time</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                More Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Orders List */}
        <div className="space-y-6">
          {orders.map((order) => (
            <Card key={order.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-gray-100 rounded-lg">{getStatusIcon(order.status)}</div>
                    <div>
                      <div className="font-semibold">{order.id}</div>
                      <div className="text-sm text-gray-600">
                        Ordered on {order.date} from {order.supplier}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant={getStatusColor(order.status) as any}>{order.status}</Badge>
                    <div className="text-lg font-bold mt-1">${order.total.toFixed(2)}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {/* Order Items */}
                <div className="space-y-3 mb-4">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={50}
                        height={50}
                        className="rounded object-cover"
                      />
                      <div className="flex-1">
                        <div className="font-medium">{item.name}</div>
                        <div className="text-sm text-gray-600">
                          Quantity: {item.quantity} × ${item.price.toFixed(2)}
                        </div>
                      </div>
                      <div className="font-medium">${(item.quantity * item.price).toFixed(2)}</div>
                    </div>
                  ))}
                </div>

                {/* Order Status Details */}
                {order.status === "Shipped" && (
                  <div className="bg-primary-50 p-4 rounded-lg mb-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-primary-900">In Transit</div>
                        <div className="text-sm text-primary-700">Tracking: {order.trackingNumber}</div>
                        <div className="text-sm text-primary-700">Estimated delivery: {order.estimatedDelivery}</div>
                      </div>
                      <Button variant="outline" size="sm" className="bg-transparent">
                        Track Package
                      </Button>
                    </div>
                  </div>
                )}

                {order.status === "Delivered" && (
                  <div className="bg-secondary-50 p-4 rounded-lg mb-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-secondary-900">Delivered</div>
                        <div className="text-sm text-secondary-700">Delivered on {order.deliveredDate}</div>
                      </div>
                      <Button variant="outline" size="sm" className="bg-transparent">
                        Leave Review
                      </Button>
                    </div>
                  </div>
                )}

                {order.status === "Processing" && (
                  <div className="bg-orange-50 p-4 rounded-lg mb-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-orange-900">Processing</div>
                        <div className="text-sm text-orange-700">Estimated shipping: {order.estimatedShipping}</div>
                      </div>
                      <Button variant="outline" size="sm" className="bg-transparent">
                        Contact Supplier
                      </Button>
                    </div>
                  </div>
                )}

                {order.status === "Cancelled" && (
                  <div className="bg-red-50 p-4 rounded-lg mb-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-red-900">Cancelled</div>
                        <div className="text-sm text-red-700">Cancelled on {order.cancelledDate}</div>
                      </div>
                      <Button variant="outline" size="sm" className="bg-transparent">
                        Reorder
                      </Button>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex items-center space-x-3">
                  <Button variant="outline" size="sm" className="bg-transparent">
                    <Eye className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                  <Button variant="outline" size="sm" className="bg-transparent">
                    <Download className="h-4 w-4 mr-2" />
                    Download Invoice
                  </Button>
                  {order.status === "Delivered" && (
                    <Button variant="outline" size="sm" className="bg-transparent">
                      Reorder
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
