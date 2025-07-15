"use client"

import { useState } from "react"
import { ArrowLeft, Upload, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

const categories = ["Industrial Materials", "Electronics", "Furniture", "Safety", "Machinery", "Software", "Services"]

export default function NewProductPage() {
  const [images, setImages] = useState<string[]>([])

  const handleImageUpload = () => {
    // Mock image upload - in real app, this would handle file upload
    const newImage = "/placeholder.svg?height=200&width=200"
    setImages([...images, newImage])
  }

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index))
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
              <Link href="/dashboard" className="text-gray-600 hover:text-gray-900">
                Dashboard
              </Link>
              <Link href="/dashboard/products" className="text-gray-600 hover:text-gray-900">
                Products
              </Link>
              <span className="text-gray-900 font-semibold">New Product</span>
            </nav>
            <Button variant="outline">Save Draft</Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="flex items-center mb-8">
          <Link href="/dashboard/products">
            <Button variant="outline" size="icon" className="mr-4 bg-transparent">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Add New Product</h1>
            <p className="text-gray-600">Create a new product listing for your business</p>
          </div>
        </div>

        <form className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Product Information */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Basic Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="productName">Product Name *</Label>
                    <Input id="productName" placeholder="Enter product name" className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="description">Description *</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe your product in detail..."
                      rows={4}
                      className="mt-1"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="category">Category *</Label>
                      <Select>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category} value={category.toLowerCase()}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="sku">SKU</Label>
                      <Input id="sku" placeholder="Product SKU" className="mt-1" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Pricing & Inventory</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="price">Price *</Label>
                      <Input id="price" type="number" placeholder="0.00" className="mt-1" />
                    </div>

                    <div>
                      <Label htmlFor="unit">Unit</Label>
                      <Select>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select unit" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="piece">Per Piece</SelectItem>
                          <SelectItem value="unit">Per Unit</SelectItem>
                          <SelectItem value="set">Per Set</SelectItem>
                          <SelectItem value="kg">Per Kg</SelectItem>
                          <SelectItem value="meter">Per Meter</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="minOrder">Minimum Order</Label>
                      <Input id="minOrder" type="number" placeholder="1" className="mt-1" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="stock">Stock Quantity</Label>
                      <Input id="stock" type="number" placeholder="Available quantity" className="mt-1" />
                    </div>

                    <div>
                      <Label htmlFor="leadTime">Lead Time (days)</Label>
                      <Input id="leadTime" type="number" placeholder="Processing time" className="mt-1" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Product Images</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {images.map((image, index) => (
                        <div key={index} className="relative group">
                          <Image
                            src={image || "/placeholder.svg"}
                            alt={`Product image ${index + 1}`}
                            width={150}
                            height={150}
                            className="w-full h-32 object-cover rounded-lg border"
                          />
                          <Button
                            type="button"
                            variant="destructive"
                            size="icon"
                            className="absolute top-2 right-2 h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
                            onClick={() => removeImage(index)}
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        </div>
                      ))}

                      <Button
                        type="button"
                        variant="outline"
                        className="h-32 border-dashed bg-transparent"
                        onClick={handleImageUpload}
                      >
                        <div className="text-center">
                          <Upload className="h-6 w-6 mx-auto mb-2" />
                          <span className="text-sm">Upload Image</span>
                        </div>
                      </Button>
                    </div>
                    <p className="text-sm text-gray-500">
                      Upload up to 8 images. First image will be the main product image.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Specifications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="material">Material</Label>
                      <Input id="material" placeholder="e.g., Steel, Aluminum" className="mt-1" />
                    </div>

                    <div>
                      <Label htmlFor="dimensions">Dimensions</Label>
                      <Input id="dimensions" placeholder="e.g., 10x5x2 cm" className="mt-1" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="weight">Weight</Label>
                      <Input id="weight" placeholder="e.g., 2.5 kg" className="mt-1" />
                    </div>

                    <div>
                      <Label htmlFor="color">Color</Label>
                      <Input id="color" placeholder="e.g., Silver, Black" className="mt-1" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="additionalSpecs">Additional Specifications</Label>
                    <Textarea
                      id="additionalSpecs"
                      placeholder="Any other technical specifications..."
                      rows={3}
                      className="mt-1"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Publishing Options</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="active"
                      defaultChecked
                      className="border-primary-300 data-[state=checked]:bg-primary-600"
                    />
                    <Label htmlFor="active">Publish immediately</Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="featured" />
                    <Label htmlFor="featured">Mark as featured</Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="bulk" />
                    <Label htmlFor="bulk">Available for bulk orders</Label>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>SEO Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="metaTitle">Meta Title</Label>
                    <Input id="metaTitle" placeholder="SEO title" className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="metaDescription">Meta Description</Label>
                    <Textarea id="metaDescription" placeholder="SEO description" rows={3} className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="tags">Tags</Label>
                    <Input id="tags" placeholder="Comma separated tags" className="mt-1" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Shipping Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="shippingWeight">Shipping Weight (kg)</Label>
                    <Input id="shippingWeight" type="number" placeholder="0.0" className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="shippingDimensions">Shipping Dimensions</Label>
                    <Input id="shippingDimensions" placeholder="L x W x H (cm)" className="mt-1" />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="freeShipping" />
                    <Label htmlFor="freeShipping">Free shipping</Label>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex items-center justify-end space-x-4 pt-6 border-t">
            <Link href="/dashboard/products">
              <Button variant="outline">Cancel</Button>
            </Link>
            <Button
              variant="outline"
              className="border-secondary-600 text-secondary-700 hover:bg-secondary-50 bg-transparent"
            >
              Save as Draft
            </Button>
            <Button type="submit" className="bg-primary-700 hover:bg-primary-800 text-white">
              Publish Product
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
