import { Star, MapPin, Phone, Mail, Globe, Users, Calendar, Award } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock business data
const businessData = {
  1: {
    id: 1,
    name: "MetalWorks Inc",
    logo: "/images/metalworks-logo.jpg",
    coverImage: "/images/metalworks-cover.jpg",
    description:
      "Leading manufacturer of high-quality industrial steel products with over 25 years of experience in the industry.",
    rating: 4.8,
    reviews: 324,
    location: "Chicago, IL",
    phone: "+1 (555) 123-4567",
    email: "contact@metalworks.com",
    website: "www.metalworks.com",
    founded: "1998",
    employees: "250-500",
    certifications: ["ISO 9001", "ISO 14001", "OSHA Certified"],
    specialties: ["Steel Manufacturing", "Industrial Pipes", "Custom Fabrication"],
    products: [
      {
        id: 1,
        name: "Industrial Steel Pipes",
        price: "$45.99/unit",
        image: "/images/steel-pipes.jpg",
        category: "Pipes & Fittings",
      },
      {
        id: 5,
        name: "Steel Beams",
        price: "$89.99/unit",
        image: "/images/steel-beams.jpg",
        category: "Structural Steel",
      },
      {
        id: 6,
        name: "Custom Fabrication",
        price: "Quote on Request",
        image: "/images/custom-fabrication.jpg",
        category: "Custom Work",
      },
    ],
  },
}

export default function BusinessProfilePage({ params }: { params: { id: string } }) {
  const business = businessData[Number.parseInt(params.id) as keyof typeof businessData]

  if (!business) {
    return <div>Business not found</div>
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
            <Button className="bg-primary-700 hover:bg-primary-800 text-white">Contact Business</Button>
          </div>
        </div>
      </header>

      {/* Cover Image */}
      <div className="relative h-64 bg-gray-200">
        <Image
          src={business.coverImage || "/placeholder.svg"}
          alt={`${business.name} cover`}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
      </div>

      {/* Business Info Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
            <div className="relative -mt-16 md:-mt-20">
              <Image
                src={business.logo || "/placeholder.svg"}
                alt={`${business.name} logo`}
                width={120}
                height={120}
                className="rounded-lg border-4 border-white bg-white object-cover"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{business.name}</h1>
              <div className="flex items-center space-x-4 mb-3">
                <div className="flex items-center">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="ml-1 font-semibold">{business.rating}</span>
                  <span className="ml-1 text-gray-600">({business.reviews} reviews)</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-4 w-4 mr-1" />
                  {business.location}
                </div>
              </div>
              <p className="text-gray-600 mb-4">{business.description}</p>
              <div className="flex flex-wrap gap-2">
                {business.specialties.map((specialty) => (
                  <Badge key={specialty} className="bg-secondary-100 text-secondary-800">
                    {specialty}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <Button className="bg-primary-700 hover:bg-primary-800 text-white" size="lg">
                Contact Business
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-secondary-600 text-secondary-700 hover:bg-secondary-50 bg-transparent"
              >
                Request Quote
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="products" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="products">Products</TabsTrigger>
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="products" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {business.products.map((product) => (
                    <Card key={product.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader className="p-0">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          width={300}
                          height={200}
                          className="w-full h-48 object-cover rounded-t-lg"
                        />
                      </CardHeader>
                      <CardContent className="p-4">
                        <Badge className="mb-2">{product.category}</Badge>
                        <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                        <div className="flex items-center justify-between">
                          <span className="text-xl font-bold text-gray-900">{product.price}</span>
                          <Button size="sm">View Details</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="about" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Company Overview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{business.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center">
                        <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-600">Founded: {business.founded}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-5 w-5 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-600">Employees: {business.employees}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Certifications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {business.certifications.map((cert) => (
                        <Badge
                          key={cert}
                          variant="outline"
                          className="flex items-center border-primary-200 text-primary-700"
                        >
                          <Award className="h-3 w-3 mr-1" />
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Customer Reviews</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[1, 2, 3].map((review) => (
                        <div key={review} className="border-b pb-4 last:border-b-0">
                          <div className="flex items-center mb-2">
                            <div className="flex">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                            <span className="ml-2 font-semibold">John Smith</span>
                            <span className="ml-2 text-sm text-gray-500">2 weeks ago</span>
                          </div>
                          <p className="text-gray-600">
                            Excellent quality products and outstanding customer service. Highly recommend for any
                            industrial steel needs.
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-gray-400 mr-3" />
                  <span>{business.phone}</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-gray-400 mr-3" />
                  <span>{business.email}</span>
                </div>
                <div className="flex items-center">
                  <Globe className="h-5 w-5 text-gray-400 mr-3" />
                  <span>{business.website}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-gray-400 mr-3" />
                  <span>{business.location}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Products Listed</span>
                  <span className="font-semibold">{business.products.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Years in Business</span>
                  <span className="font-semibold">{new Date().getFullYear() - Number.parseInt(business.founded)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Response Rate</span>
                  <span className="font-semibold">98%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Response Time</span>
                  <span className="font-semibold">{"< 2 hours"}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
