"use client"

import { useState } from "react"
import { Minus, Plus, Trash2, ShoppingCart, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

// Mock cart data
const initialCartItems = [
  {
    id: 1,
    productId: 1,
    name: "Industrial Steel Pipes",
    business: "MetalWorks Inc",
    businessId: 1,
    price: 45.99,
    quantity: 10,
    unit: "unit",
    image: "/images/steel-pipes.jpg",
    leadTime: "5-7 days",
    minOrder: 5,
  },
  {
    id: 2,
    productId: 2,
    name: "Commercial LED Lighting System",
    business: "BrightTech Solutions",
    businessId: 2,
    price: 299.99,
    quantity: 2,
    unit: "set",
    image: "/images/led-lighting.jpg",
    leadTime: "3-5 days",
    minOrder: 1,
  },
]

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems)

  const updateQuantity = (id: number, newQuantity: number) => {
    setCartItems((items) =>
      items.map((item) => (item.id === id ? { ...item, quantity: Math.max(item.minOrder, newQuantity) } : item)),
    )
  }

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 150.0 // Mock shipping cost
  const tax = subtotal * 0.08 // 8% tax
  const total = subtotal + shipping + tax

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
            </nav>
            <Button variant="outline">Sign In</Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="flex items-center mb-8">
          <Link href="/">
            <Button variant="outline" size="icon" className="mr-4 bg-transparent">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Shopping Cart</h1>
            <p className="text-gray-600">{cartItems.length} items in your cart</p>
          </div>
        </div>

        {cartItems.length === 0 ? (
          <Card className="text-center py-12">
            <CardContent>
              <ShoppingCart className="h-16 w-16 mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Your cart is empty</h3>
              <p className="text-gray-600 mb-6">Add some products to get started</p>
              <Link href="/">
                <Button>Continue Shopping</Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <Card key={item.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={100}
                        height={100}
                        className="rounded-lg object-cover"
                      />

                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <Link href={`/product/${item.productId}`}>
                              <h3 className="font-semibold text-lg hover:text-gray-600 transition-colors">
                                {item.name}
                              </h3>
                            </Link>
                            <Link href={`/business/${item.businessId}`}>
                              <p className="text-gray-600 hover:text-gray-800 transition-colors">{item.business}</p>
                            </Link>
                            <Badge variant="secondary" className="mt-2 bg-secondary-100 text-secondary-800">
                              Lead time: {item.leadTime}
                            </Badge>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeItem(item.id)}
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>

                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center space-x-3">
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              disabled={item.quantity <= item.minOrder}
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <Input
                              type="number"
                              value={item.quantity}
                              onChange={(e) =>
                                updateQuantity(item.id, Number.parseInt(e.target.value) || item.minOrder)
                              }
                              className="w-20 text-center"
                              min={item.minOrder}
                            />
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                            <span className="text-sm text-gray-500">
                              {item.unit} (min: {item.minOrder})
                            </span>
                          </div>

                          <div className="text-right">
                            <div className="text-sm text-gray-500">
                              ${item.price.toFixed(2)} per {item.unit}
                            </div>
                            <div className="text-xl font-bold">${(item.price * item.quantity).toFixed(2)}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Order Summary */}
            <div>
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>

                  <div className="space-y-3 pt-4">
                    <Link href="/checkout">
                      <Button className="w-full bg-primary-700 hover:bg-primary-800 text-white" size="lg">
                        Proceed to Checkout
                      </Button>
                    </Link>
                    <Link href="/">
                      <Button
                        variant="outline"
                        className="w-full border-secondary-600 text-secondary-700 hover:bg-secondary-50 bg-transparent"
                      >
                        Continue Shopping
                      </Button>
                    </Link>
                  </div>

                  <div className="text-sm text-gray-500 pt-4">
                    <p>• Secure checkout</p>
                    <p>• 30-day return policy</p>
                    <p>• Free shipping on orders over $500</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
