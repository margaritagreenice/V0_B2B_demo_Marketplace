import { Search, Filter, MapPin, Star, Calendar, Award, Grid, List, Building2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock businesses data
const businesses = [
  {
    id: 1,
    name: "MetalWorks Inc",
    logo: "/images/metalworks-logo.jpg",
    coverImage: "/images/metalworks-cover.jpg",
    description: "Leading manufacturer of high-quality industrial steel products with over 25 years of experience.",
    rating: 4.8,
    reviews: 324,
    location: "Chicago, IL",
    founded: "1998",
    employees: "250-500",
    industry: "Manufacturing",
    specialties: ["Steel Manufacturing", "Industrial Pipes", "Custom Fabrication"],
    certifications: ["ISO 9001", "ISO 14001", "OSHA Certified"],
    productsCount: 45,
    responseTime: "< 2 hours",
    responseRate: 98,
    verified: true,
  },
  {
    id: 2,
    name: "BrightTech Solutions",
    logo: "/images/brighttech-logo.jpg",
    coverImage: "/placeholder.svg?height=200&width=400",
    description: "Innovative LED lighting solutions for commercial and industrial applications.",
    rating: 4.9,
    reviews: 189,
    location: "Austin, TX",
    founded: "2010",
    employees: "50-100",
    industry: "Electronics",
    specialties: ["LED Lighting", "Smart Controls", "Energy Solutions"],
    certifications: ["Energy Star", "UL Listed", "FCC Certified"],
    productsCount: 28,
    responseTime: "< 1 hour",
    responseRate: 99,
    verified: true,
  },
  {
    id: 3,
    name: "WorkSpace Pro",
    logo: "/images/workspace-logo.jpg",
    coverImage: "/placeholder.svg?height=200&width=400",
    description: "Premium office furniture and workspace solutions for modern businesses.",
    rating: 4.7,
    reviews: 156,
    location: "New York, NY",
    founded: "2005",
    employees: "100-250",
    industry: "Furniture",
    specialties: ["Office Furniture", "Ergonomic Design", "Space Planning"],
    certifications: ["GREENGUARD", "SCS Certified", "BIFMA"],
    productsCount: 67,
    responseTime: "< 3 hours",
    responseRate: 95,
    verified: true,
  },
  {
    id: 4,
    name: "SafeGuard Industries",
    logo: "/images/safeguard-logo.jpg",
    coverImage: "/placeholder.svg?height=200&width=400",
    description: "Comprehensive safety equipment and training solutions for industrial environments.",
    rating: 4.6,
    reviews: 203,
    location: "Denver, CO",
    founded: "2001",
    employees: "25-50",
    industry: "Safety",
    specialties: ["Safety Equipment", "Training Programs", "Compliance Solutions"],
    certifications: ["ANSI Certified", "OSHA Approved", "CE Marked"],
    productsCount: 89,
    responseTime: "< 4 hours",
    responseRate: 92,
    verified: true,
  },
  {
    id: 5,
    name: "TechFlow Systems",
    logo: "/placeholder.svg?height=80&width=80",
    coverImage: "/placeholder.svg?height=200&width=400",
    description: "Advanced automation and control systems for manufacturing and industrial processes.",
    rating: 4.5,
    reviews: 78,
    location: "Seattle, WA",
    founded: "2015",
    employees: "10-25",
    industry: "Technology",
    specialties: ["Automation", "Control Systems", "IoT Solutions"],
    certifications: ["ISO 27001", "IEC 61508", "UL Listed"],
    productsCount: 23,
    responseTime: "< 6 hours",
    responseRate: 88,
    verified: false,
  },
  {
    id: 6,
    name: "GreenBuild Materials",
    logo: "/placeholder.svg?height=80&width=80",
    coverImage: "/placeholder.svg?height=200&width=400",
    description: "Sustainable building materials and eco-friendly construction solutions.",
    rating: 4.4,
    reviews: 134,
    location: "Portland, OR",
    founded: "2012",
    employees: "50-100",
    industry: "Construction",
    specialties: ["Sustainable Materials", "Green Building", "LEED Solutions"],
    certifications: ["LEED Certified", "FSC Certified", "Cradle to Cradle"],
    productsCount: 56,
    responseTime: "< 5 hours",
    responseRate: 90,
    verified: true,
  },
]

const industries = [
  "All Industries",
  "Manufacturing",
  "Electronics",
  "Furniture",
  "Safety",
  "Technology",
  "Construction",
  "Services",
]

const locations = [
  "All Locations",
  "Chicago, IL",
  "Austin, TX",
  "New York, NY",
  "Denver, CO",
  "Seattle, WA",
  "Portland, OR",
]

export default function BusinessesPage() {
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
              <span className="text-gray-900 font-semibold">Businesses</span>
              <Link href="/buyer/dashboard" className="text-gray-600 hover:text-gray-900">
                My Account
              </Link>
              <Link href="/dashboard" className="text-gray-600 hover:text-gray-900">
                Sell
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="outline">Sign In</Button>
              <Button className="bg-primary-700 hover:bg-primary-800 text-white">Get Started</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-800 to-secondary-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Trusted Business Partners</h1>
          <p className="text-xl mb-8 text-gray-300">
            Connect with verified suppliers and manufacturers from around the world
          </p>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search businesses, products, or services..."
                  className="pl-10 h-12 border-0 focus-visible:ring-0"
                />
              </div>
              <Select>
                <SelectTrigger className="w-full md:w-48 h-12 border-0">
                  <SelectValue placeholder="Industry" />
                </SelectTrigger>
                <SelectContent>
                  {industries.map((industry) => (
                    <SelectItem key={industry} value={industry.toLowerCase()}>
                      {industry}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full md:w-48 h-12 border-0">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((location) => (
                    <SelectItem key={location} value={location.toLowerCase()}>
                      {location}
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
      <section className="py-8 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{businesses.length}+</div>
              <div className="text-gray-600">Verified Businesses</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900 mb-1">95%</div>
              <div className="text-gray-600">Average Response Rate</div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">4.7</div>
            <div className="text-gray-600">Average Rating</div>
            <div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{"< 3hrs"}</div>
              <div className="text-gray-600">Average Response Time</div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Business Directory</h2>
            <p className="text-gray-600">Discover and connect with trusted suppliers and manufacturers</p>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Advanced Filters
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

        {/* Filters */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input placeholder="Search businesses..." className="pl-10" />
              </div>
              <Select>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Industry" />
                </SelectTrigger>
                <SelectContent>
                  {industries.map((industry) => (
                    <SelectItem key={industry} value={industry.toLowerCase()}>
                      {industry}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((location) => (
                    <SelectItem key={location} value={location.toLowerCase()}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Company Size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Sizes</SelectItem>
                  <SelectItem value="small">1-50 employees</SelectItem>
                  <SelectItem value="medium">51-250 employees</SelectItem>
                  <SelectItem value="large">250+ employees</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Business Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businesses.map((business) => (
            <Card key={business.id} className="group hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={business.coverImage || "/placeholder.svg"}
                    alt={`${business.name} cover`}
                    width={400}
                    height={200}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20" />
                  {business.verified && (
                    <Badge className="absolute top-2 right-2 bg-secondary-600 text-white">
                      <Award className="h-3 w-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <Image
                    src={business.logo || "/placeholder.svg"}
                    alt={`${business.name} logo`}
                    width={60}
                    height={60}
                    className="rounded-lg border bg-white object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <Link href={`/business/${business.id}`}>
                      <h3 className="font-semibold text-lg mb-1 hover:text-gray-600 transition-colors truncate">
                        {business.name}
                      </h3>
                    </Link>
                    <Badge variant="secondary" className="mb-2 bg-primary-100 text-primary-800">
                      {business.industry}
                    </Badge>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{business.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="font-medium">{business.rating}</span>
                      <span className="text-gray-500 ml-1">({business.reviews})</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <MapPin className="h-3 w-3 mr-1" />
                      {business.location}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <Building2 className="h-3 w-3 mr-1" />
                      {business.employees} employees
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      Since {business.founded}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {business.specialties.slice(0, 2).map((specialty) => (
                    <Badge
                      key={specialty}
                      variant="outline"
                      className="text-xs border-secondary-200 text-secondary-700"
                    >
                      {specialty}
                    </Badge>
                  ))}
                  {business.specialties.length > 2 && (
                    <Badge variant="outline" className="text-xs border-gray-200 text-gray-600">
                      +{business.specialties.length - 2} more
                    </Badge>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4 text-xs text-gray-500">
                  <div>
                    <div className="font-medium text-gray-700">{business.productsCount}</div>
                    <div>Products</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-700">{business.responseRate}%</div>
                    <div>Response Rate</div>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Link href={`/business/${business.id}`} className="flex-1">
                    <Button className="w-full bg-primary-700 hover:bg-primary-800 text-white" size="sm">
                      View Profile
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-secondary-600 text-secondary-700 hover:bg-secondary-50 bg-transparent"
                  >
                    Contact
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="bg-transparent">
            Load More Businesses
          </Button>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-secondary-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Join Our Network?</h2>
          <p className="text-xl text-gray-600 mb-8">
            List your business and connect with thousands of potential customers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard">
              <Button size="lg" className="bg-primary-700 hover:bg-primary-800 text-white">
                List Your Business
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="bg-transparent">
              Learn More
            </Button>
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
