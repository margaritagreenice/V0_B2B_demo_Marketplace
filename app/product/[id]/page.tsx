"use client"

import { useState } from "react"
import { Star, MapPin, Truck, Shield, ArrowLeft, Heart, Share2, Calculator, FileText, Send } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock product data
const productData = {
  1: {
    id: 1,
    name: "Industrial Steel Pipes",
    business: "MetalWorks Inc",
    businessId: 1,
    price: "$45.99",
    unit: "per unit",
    images: ["/images/steel-pipes.jpg", "/images/steel-beams.jpg", "/images/custom-fabrication.jpg"],
    rating: 4.8,
    reviews: 124,
    location: "Chicago, IL",
    category: "Industrial Materials",
    description:
      "High-quality industrial steel pipes manufactured to meet the most demanding specifications. Perfect for construction, plumbing, and industrial applications.",
    specifications: {
      Material: "Carbon Steel",
      Diameter: "1-12 inches",
      Length: "20-40 feet",
      "Wall Thickness": "Schedule 40/80",
      Coating: "Galvanized",
      Standards: "ASTM A53, API 5L",
    },
    features: [
      "Corrosion resistant galvanized coating",
      "Available in multiple sizes",
      "Meets ASTM standards",
      "Fast delivery nationwide",
      "Bulk pricing available",
    ],
    shipping: {
      method: "Freight shipping",
      time: "5-7 business days",
      cost: "Calculated at checkout",
    },
    basePrice: 45.99,
    bulkDiscounts: [
      { min: 100, discount: 0.05 },
      { min: 500, discount: 0.1 },
      { min: 1000, discount: 0.15 },
    ],
  },
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = productData[Number.parseInt(params.id) as keyof typeof productData]
  const [quantity, setQuantity] = useState(1)
  const [diameter, setDiameter] = useState("")
  const [length, setLength] = useState("")

  if (!product) {
    return <div>Product not found</div>
  }

  const calculatePrice = () => {
    let unitPrice = product.basePrice
    const bulkDiscount = product.bulkDiscounts.find((discount) => quantity >= discount.min)
    if (bulkDiscount) {
      unitPrice = unitPrice * (1 - bulkDiscount.discount)
    }
    return unitPrice * quantity
  }

  const getBulkDiscountText = () => {
    const bulkDiscount = product.bulkDiscounts.find((discount) => quantity >= discount.min)
    if (bulkDiscount) {
      return `${bulkDiscount.discount * 100}% bulk discount applied`
    }
    return ""
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
              <Link href="/businesses" className="text-gray-600 hover:text-gray-900">
                Businesses
              </Link>
            </nav>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                className="border-primary-600 text-primary-700 hover:bg-primary-50 bg-transparent"
              >
                <Heart className="h-4 w-4 mr-2" />
                Add to Favorites
              </Button>
              <Button variant="outline" size="icon">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              {product.category}
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Button variant="outline" className="mb-6 bg-transparent">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Results
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-lg border overflow-hidden">
              <Image
                src={product.images[0] || "/placeholder.svg"}
                alt={product.name}
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {product.images.slice(1).map((image, index) => (
                <div
                  key={index}
                  className="aspect-square bg-white rounded border overflow-hidden cursor-pointer hover:border-gray-400"
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} ${index + 2}`}
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge className="mb-2 bg-secondary-600 text-white">{product.category}</Badge>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>

              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="ml-1 font-semibold">{product.rating}</span>
                  <span className="ml-1 text-gray-600">({product.reviews} reviews)</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-4 w-4 mr-1" />
                  {product.location}
                </div>
              </div>

              <Link href={`/business/${product.businessId}`} className="text-gray-600 hover:text-gray-800 mb-4 block">
                Sold by: <span className="font-semibold">{product.business}</span>
              </Link>

              <p className="text-gray-600 mb-6">{product.description}</p>
            </div>

            <Separator />

            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {product.price} <span className="text-lg font-normal text-gray-600">{product.unit}</span>
              </div>
              <p className="text-sm text-gray-500 mb-6">Bulk pricing available for orders over 100 units</p>
            </div>

            <div className="space-y-3">
              <Button size="lg" className="w-full bg-primary-700 hover:bg-primary-800 text-white">
                Request Quote
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full border-secondary-600 text-secondary-700 hover:bg-secondary-50 bg-transparent"
              >
                Contact Supplier
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
              <div className="flex items-center space-x-2">
                <Truck className="h-5 w-5 text-gray-400" />
                <div>
                  <div className="text-sm font-semibold">Fast Shipping</div>
                  <div className="text-xs text-gray-500">5-7 business days</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-gray-400" />
                <div>
                  <div className="text-sm font-semibold">Quality Assured</div>
                  <div className="text-xs text-gray-500">ASTM certified</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-gray-400" />
                <div>
                  <div className="text-sm font-semibold">Top Rated</div>
                  <div className="text-xs text-gray-500">4.8/5 rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Tabs defaultValue="specifications" className="w-full">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="shipping">Shipping</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="quote">Quote Request</TabsTrigger>
            <TabsTrigger value="calculator">Calculator</TabsTrigger>
          </TabsList>

          <TabsContent value="specifications" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Product Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b">
                      <span className="font-medium text-gray-600">{key}:</span>
                      <span className="text-gray-900">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="features" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-secondary-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="shipping" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Shipping Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-600">Shipping Method:</span>
                    <span>{product.shipping.method}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-600">Delivery Time:</span>
                    <span>{product.shipping.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-600">Shipping Cost:</span>
                    <span>{product.shipping.cost}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Customer Reviews ({product.reviews})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[1, 2, 3].map((review) => (
                    <div key={review} className="border-b pb-4 last:border-b-0">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <span className="ml-2 font-semibold">Construction Co. Inc</span>
                        </div>
                        <span className="text-sm text-gray-500">2 weeks ago</span>
                      </div>
                      <p className="text-gray-600">
                        Excellent quality steel pipes. Used them for our latest construction project and they exceeded
                        expectations. Fast delivery and great customer service.
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="quote" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  Request Custom Quote
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="quoteFirstName">First Name *</Label>
                      <Input id="quoteFirstName" placeholder="John" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="quoteLastName">Last Name *</Label>
                      <Input id="quoteLastName" placeholder="Smith" className="mt-1" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="quoteEmail">Email Address *</Label>
                      <Input id="quoteEmail" type="email" placeholder="john@company.com" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="quotePhone">Phone Number</Label>
                      <Input id="quotePhone" placeholder="+1 (555) 123-4567" className="mt-1" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="quoteCompany">Company Name *</Label>
                    <Input id="quoteCompany" placeholder="Your Company Inc." className="mt-1" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="quoteQuantity">Quantity Needed *</Label>
                      <Input id="quoteQuantity" type="number" placeholder="100" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="quoteDiameter">Diameter</Label>
                      <Select>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select diameter" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 inch</SelectItem>
                          <SelectItem value="2">2 inches</SelectItem>
                          <SelectItem value="4">4 inches</SelectItem>
                          <SelectItem value="6">6 inches</SelectItem>
                          <SelectItem value="8">8 inches</SelectItem>
                          <SelectItem value="12">12 inches</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="quoteLength">Length (feet)</Label>
                      <Input id="quoteLength" type="number" placeholder="20" className="mt-1" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="quoteDeliveryDate">Required Delivery Date</Label>
                    <Input id="quoteDeliveryDate" type="date" className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="quoteLocation">Delivery Location *</Label>
                    <Input id="quoteLocation" placeholder="City, State, ZIP" className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="quoteRequirements">Special Requirements</Label>
                    <Textarea
                      id="quoteRequirements"
                      placeholder="Please describe any special requirements, certifications needed, or project details..."
                      rows={4}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="quoteUsage">Intended Usage</Label>
                    <Select>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select usage type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="construction">Construction</SelectItem>
                        <SelectItem value="plumbing">Plumbing</SelectItem>
                        <SelectItem value="industrial">Industrial Process</SelectItem>
                        <SelectItem value="infrastructure">Infrastructure</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button type="submit" className="w-full bg-primary-700 hover:bg-primary-800 text-white">
                    <Send className="h-4 w-4 mr-2" />
                    Request Quote
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="calculator" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calculator className="h-5 w-5 mr-2" />
                  Price Calculator
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="calcQuantity">Quantity *</Label>
                      <Input
                        id="calcQuantity"
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value) || 1)}
                        min="1"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="calcDiameter">Diameter</Label>
                      <Select value={diameter} onValueChange={setDiameter}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select diameter" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 inch</SelectItem>
                          <SelectItem value="2">2 inches</SelectItem>
                          <SelectItem value="4">4 inches</SelectItem>
                          <SelectItem value="6">6 inches</SelectItem>
                          <SelectItem value="8">8 inches</SelectItem>
                          <SelectItem value="12">12 inches</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="calcLength">Length (feet)</Label>
                      <Input
                        id="calcLength"
                        type="number"
                        value={length}
                        onChange={(e) => setLength(e.target.value)}
                        placeholder="20"
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-3">Price Breakdown</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Unit Price:</span>
                        <span>${product.basePrice.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Quantity:</span>
                        <span>{quantity} units</span>
                      </div>
                      {getBulkDiscountText() && (
                        <div className="flex justify-between text-green-600">
                          <span>Bulk Discount:</span>
                          <span>{getBulkDiscountText()}</span>
                        </div>
                      )}
                      <Separator />
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total Price:</span>
                        <span>${calculatePrice().toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Bulk Pricing Tiers</h4>
                    <div className="space-y-1 text-sm">
                      <div>100+ units: 5% discount</div>
                      <div>500+ units: 10% discount</div>
                      <div>1000+ units: 15% discount</div>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <Button className="flex-1 bg-primary-700 hover:bg-primary-800 text-white">Add to Cart</Button>
                    <Button variant="outline" className="flex-1 bg-transparent">
                      Request Quote for This Configuration
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
