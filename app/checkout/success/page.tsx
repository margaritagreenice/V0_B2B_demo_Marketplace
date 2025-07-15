import { CheckCircle, Download, Truck, Mail } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function OrderSuccessPage() {
  const orderNumber = "ORD-2024-001234"
  const estimatedDelivery = "January 25, 2024"

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            B2B Market
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="mb-8">
            <CheckCircle className="h-20 w-20 text-secondary-600 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Confirmed!</h1>
            <p className="text-gray-600">
              Thank you for your purchase. Your order has been successfully placed and is being processed.
            </p>
          </div>

          {/* Order Details */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Order Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Order Number:</span>
                <span className="font-semibold">{orderNumber}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Order Date:</span>
                <span className="font-semibold">January 15, 2024</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Total Amount:</span>
                <span className="font-semibold text-lg">$1,259.96</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Estimated Delivery:</span>
                <span className="font-semibold">{estimatedDelivery}</span>
              </div>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>What happens next?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-left">
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-gray-400 mt-0.5" />
                  <div>
                    <div className="font-medium">Order Confirmation Email</div>
                    <div className="text-sm text-gray-600">
                      You'll receive a detailed confirmation email within the next few minutes.
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Truck className="h-5 w-5 text-gray-400 mt-0.5" />
                  <div>
                    <div className="font-medium">Processing & Shipping</div>
                    <div className="text-sm text-gray-600">
                      Your order will be processed within 1-2 business days and shipped via standard freight.
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-gray-400 mt-0.5" />
                  <div>
                    <div className="font-medium">Delivery Tracking</div>
                    <div className="text-sm text-gray-600">
                      You'll receive tracking information once your order ships.
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              className="border-secondary-600 text-secondary-700 hover:bg-secondary-50 bg-transparent"
            >
              <Download className="h-4 w-4 mr-2" />
              Download Invoice
            </Button>
            <Link href={`/buyer/orders`}>
              <Button variant="outline" className="bg-transparent">
                Track Order
              </Button>
            </Link>
            <Link href="/">
              <Button className="bg-primary-700 hover:bg-primary-800 text-white">Continue Shopping</Button>
            </Link>
          </div>

          {/* Support */}
          <div className="mt-12 p-6 bg-gray-100 rounded-lg">
            <h3 className="font-semibold mb-2">Need Help?</h3>
            <p className="text-sm text-gray-600 mb-4">
              If you have any questions about your order, our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <Button variant="outline" size="sm" className="bg-transparent">
                Contact Support
              </Button>
              <Button variant="outline" size="sm" className="bg-transparent">
                Live Chat
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
