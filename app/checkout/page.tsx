"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, CreditCard, Truck, Shield } from "lucide-react"

export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
    deliveryDate: "",
    deliveryTime: "",
    specialInstructions: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: "",
    sameAsShipping: true,
  })

  const orderSummary = {
    items: [
      { name: "Rose Bouquet Deluxe", quantity: 2, price: 89.99 },
      { name: "Spring Garden Mix", quantity: 1, price: 65.99 },
      { name: "Elegant Lily Arrangement", quantity: 1, price: 75.99 },
    ],
    subtotal: 321.97,
    discount: 32.2,
    shipping: 0,
    tax: 23.18,
    total: 312.95,
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Order submitted:", formData)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Button asChild variant="ghost" className="mb-4 transition-colors duration-200 hover:text-pink-700">
            <Link href="/cart">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Cart
            </Link>
          </Button>
          <h1 className="text-3xl font-bold text-gray-900">Checkout</h1>
          <p className="text-gray-600 mt-2">Complete your order</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2 space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-pink-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(555) 123-4567"
                      required
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Delivery Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-pink-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    Delivery Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="address">Street Address</Label>
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      placeholder="123 Main Street"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="state">State</Label>
                      <Select
                        value={formData.state}
                        onValueChange={(value) => setFormData({ ...formData, state: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select state" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ca">California</SelectItem>
                          <SelectItem value="ny">New York</SelectItem>
                          <SelectItem value="tx">Texas</SelectItem>
                          <SelectItem value="fl">Florida</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="zipCode">ZIP Code</Label>
                    <Input
                      id="zipCode"
                      value={formData.zipCode}
                      onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                      placeholder="12345"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="deliveryDate">Delivery Date</Label>
                      <Input
                        id="deliveryDate"
                        type="date"
                        value={formData.deliveryDate}
                        onChange={(e) => setFormData({ ...formData, deliveryDate: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="deliveryTime">Preferred Time</Label>
                      <Select
                        value={formData.deliveryTime}
                        onValueChange={(value) => setFormData({ ...formData, deliveryTime: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning">Morning (9AM - 12PM)</SelectItem>
                          <SelectItem value="afternoon">Afternoon (12PM - 5PM)</SelectItem>
                          <SelectItem value="evening">Evening (5PM - 8PM)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="specialInstructions">Special Instructions (Optional)</Label>
                    <Textarea
                      id="specialInstructions"
                      value={formData.specialInstructions}
                      onChange={(e) => setFormData({ ...formData, specialInstructions: e.target.value })}
                      placeholder="Any special delivery instructions..."
                      rows={3}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Payment Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-pink-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    Payment Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <div className="relative">
                      <Input
                        id="cardNumber"
                        value={formData.cardNumber}
                        onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                        placeholder="1234 5678 9012 3456"
                        required
                      />
                      <CreditCard className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiryDate">Expiry Date</Label>
                      <Input
                        id="expiryDate"
                        value={formData.expiryDate}
                        onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
                        placeholder="MM/YY"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="cvv">CVV</Label>
                      <Input
                        id="cvv"
                        value={formData.cvv}
                        onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                        placeholder="123"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="cardName">Name on Card</Label>
                    <Input
                      id="cardName"
                      value={formData.cardName}
                      onChange={(e) => setFormData({ ...formData, cardName: e.target.value })}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="sameAsShipping"
                      checked={formData.sameAsShipping}
                      onCheckedChange={(checked) => setFormData({ ...formData, sameAsShipping: checked as boolean })}
                    />
                    <Label htmlFor="sameAsShipping" className="text-sm">
                      Billing address same as delivery address
                    </Label>
                  </div>
                </CardContent>
              </Card>
            </form>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {orderSummary.items.map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                    </div>
                    <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
                <Separator />
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${orderSummary.subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-pink-600">
                    <span>Discount</span>
                    <span>-${orderSummary.discount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>{orderSummary.shipping === 0 ? "Free" : `$${orderSummary.shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>${orderSummary.tax.toFixed(2)}</span>
                  </div>
                </div>
                <Separator />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>${orderSummary.total.toFixed(2)}</span>
                </div>
              </CardContent>
            </Card>

            {/* Security & Guarantees */}
            <Card>
              <CardContent className="p-4 space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="h-4 w-4 text-pink-600" />
                  <span>Secure SSL encrypted checkout</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Truck className="h-4 w-4 text-rose-600" />
                  <span>Free same-day delivery</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-4 h-4 bg-pink-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>7-day freshness guarantee</span>
                </div>
              </CardContent>
            </Card>

            {/* Place Order Button */}
            <Button
              type="submit"
              size="lg"
              className="w-full bg-pink-600 hover:bg-pink-700 transition-colors duration-200"
              onClick={(e) => {
                e.preventDefault()
                // Handle form submission
                alert("Order placed successfully!")
              }}
            >
              Place Order - ${orderSummary.total.toFixed(2)}
            </Button>

            <p className="text-xs text-gray-500 text-center">
              By placing your order, you agree to our Terms of Service and Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
