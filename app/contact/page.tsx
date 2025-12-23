"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact form submitted:", formData)
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      inquiryType: "",
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-50 to-rose-50 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions about our flowers or need help with a custom arrangement? We're here to help make your floral
            dreams come true.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-pink-600" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-pink-600 mt-1" />
                  <div>
                    <h3 className="font-medium">Visit Our Shop</h3>
                    <p className="text-gray-600">
                      123 Flower Street
                      <br />
                      Garden City, CA 90210
                      <br />
                      United States
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-pink-600 mt-1" />
                  <div>
                    <h3 className="font-medium">Call Us</h3>
                    <p className="text-gray-600">
                      Main: (555) 123-4567
                      <br />
                      Orders: (555) 123-4568
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-pink-600 mt-1" />
                  <div>
                    <h3 className="font-medium">Email Us</h3>
                    <p className="text-gray-600">
                      info@bloomhaven.com
                      <br />
                      orders@bloomhaven.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-pink-600 mt-1" />
                  <div>
                    <h3 className="font-medium">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 7:00 PM
                      <br />
                      Saturday: 9:00 AM - 6:00 PM
                      <br />
                      Sunday: 10:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Services */}
            <Card>
              <CardHeader>
                <CardTitle>Our Services</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                  <span className="text-sm">Custom Wedding Arrangements</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                  <span className="text-sm">Corporate Event Flowers</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                  <span className="text-sm">Funeral & Sympathy Arrangements</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                  <span className="text-sm">Weekly Flower Subscriptions</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                  <span className="text-sm">Same-Day Delivery</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
                <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <Label htmlFor="inquiryType">Inquiry Type</Label>
                      <Select
                        value={formData.inquiryType}
                        onValueChange={(value) => setFormData({ ...formData, inquiryType: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Question</SelectItem>
                          <SelectItem value="custom">Custom Arrangement</SelectItem>
                          <SelectItem value="wedding">Wedding Flowers</SelectItem>
                          <SelectItem value="corporate">Corporate Events</SelectItem>
                          <SelectItem value="delivery">Delivery Question</SelectItem>
                          <SelectItem value="complaint">Complaint</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="How can we help you?"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please provide details about your inquiry..."
                      rows={6}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-pink-600 hover:bg-pink-700 transition-colors duration-200"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Do you offer same-day delivery?</h3>
                <p className="text-gray-600 text-sm">
                  Yes! We offer free same-day delivery within city limits for orders placed before 2 PM. Rush delivery
                  is available for an additional fee.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Can you create custom arrangements?</h3>
                <p className="text-gray-600 text-sm">
                  Our expert florists love creating custom arrangements. Contact us with your vision and we'll bring it
                  to life.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">What's your freshness guarantee?</h3>
                <p className="text-gray-600 text-sm">
                  We guarantee the freshness of our flowers for 7 days. If you're not satisfied, we'll replace them free
                  of charge.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Do you handle wedding flowers?</h3>
                <p className="text-gray-600 text-sm">
                  Yes! We specialize in wedding flowers including bridal bouquets, centerpieces, and ceremony
                  decorations. Schedule a consultation to discuss your special day.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
