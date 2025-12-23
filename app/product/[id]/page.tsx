"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, Heart, Minus, Plus, Truck, Shield, ArrowLeft, Share2 } from "lucide-react"

export default function ProductPage({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  // Mock product data - in real app, fetch based on params.id
  const product = {
    id: Number.parseInt(params.id),
    name: "Rose Bouquet Deluxe",
    price: 89.99,
    originalPrice: 109.99,
    images: [
      "/assets/rose01.jpg?height=600&width=600",
      "/assets/rose02.jpg?height=600&width=600",
      "/assets/rose03.jpg?height=600&width=600",
      "/assets/rose04.jpg?height=600&width=600",
    ],
    rating: 4.8,
    reviews: 124,
    badge: "Best Seller",
    description:
      "Our signature Rose Bouquet Deluxe features 24 premium long-stem roses arranged with baby's breath and eucalyptus. Each rose is hand-selected for its beauty and freshness, creating an elegant arrangement perfect for expressing love and appreciation.",
    features: [
      "24 premium long-stem roses",
      "Fresh baby's breath and eucalyptus",
      "Professional arrangement and wrapping",
      "Includes care instructions",
      "Same-day delivery available",
    ],
    care: "Keep in cool water, trim stems at an angle, change water every 2-3 days for maximum freshness.",
    delivery: "Free same-day delivery within city limits for orders placed before 2 PM.",
  }

  const relatedProducts = [
    {
      id: 2,
      name: "Spring Garden Mix",
      price: 65.99,
      image: "/assets/spring.jpg?height=200&width=200",
      rating: 4.9,
    },
    {
      id: 3,
      name: "Elegant Lily Arrangement",
      price: 75.99,
      image: "/assets/Lilly.png?height=200&width=200",
      rating: 4.7,
    },
    {
      id: 5,
      name: "Romantic Red Roses",
      price: 95.99,
      image: "/assets/Rose05.jpg?height=200&width=200",
      rating: 4.9,
    },
  ]

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      date: "2 days ago",
      comment:
        "Absolutely beautiful arrangement! The roses were fresh and lasted over a week. Perfect for our anniversary.",
    },
    {
      id: 2,
      name: "Michael Chen",
      rating: 5,
      date: "1 week ago",
      comment: "Exceeded expectations. The delivery was on time and the presentation was stunning. Highly recommend!",
    },
    {
      id: 3,
      name: "Emily Davis",
      rating: 4,
      date: "2 weeks ago",
      comment:
        "Beautiful flowers and great service. Only minor issue was one rose had a small blemish, but overall very satisfied.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-pink-600">
              Home
            </Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-pink-600">
              Shop
            </Link>
            <span>/</span>
            <span className="text-gray-900">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <Button asChild variant="ghost" className="mb-6 transition-colors duration-200 hover:text-pink-700">
          <Link href="/shop">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Shop
          </Link>
        </Button>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative">
              <Image
                src={product.images[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                width={600}
                height={600}
                className="w-full h-96 lg:h-[500px] object-cover rounded-lg shadow-lg"
              />
              <Badge className="absolute top-4 left-4 bg-pink-600 text-white">{product.badge}</Badge>
              <Button size="icon" variant="secondary" className="absolute top-4 right-4">
                <Heart className="h-5 w-5" />
              </Button>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative rounded-lg overflow-hidden transition-all duration-200 hover:scale-105 ${
                    selectedImage === index ? "ring-2 ring-pink-600" : ""
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} ${index + 1}`}
                    width={150}
                    height={150}
                    className="w-full h-20 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-lg font-medium">{product.rating}</span>
                  <span className="text-gray-600">({product.reviews} reviews)</span>
                </div>
                <Button variant="ghost" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl font-bold text-pink-600">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-2xl text-gray-500 line-through">${product.originalPrice}</span>
                )}
                {product.originalPrice && (
                  <Badge variant="destructive">Save ${(product.originalPrice - product.price).toFixed(2)}</Badge>
                )}
              </div>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">{product.description}</p>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="font-medium">Quantity:</span>
                <div className="flex items-center border rounded-lg">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <Button variant="ghost" size="sm" onClick={() => setQuantity(quantity + 1)}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="flex gap-4">
                <Button size="lg" className="flex-1 bg-pink-600 hover:bg-pink-700 transition-colors duration-200">
                  Add to Cart - ${(product.price * quantity).toFixed(2)}
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-pink-200 text-pink-700 hover:bg-pink-50 bg-transparent transition-all duration-200"
                >
                  <Link href="/cart">Buy Now</Link>
                </Button>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">What's Included:</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Delivery Info */}
            <div className="flex items-center gap-6 p-4 bg-rose-50 rounded-lg">
              <div className="flex items-center gap-2">
                <Truck className="h-5 w-5 text-rose-600" />
                <span className="text-sm font-medium text-rose-800">Free Same-Day Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium text-blue-800">7-Day Freshness Guarantee</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="details" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="care">Care Instructions</TabsTrigger>
              <TabsTrigger value="reviews">Reviews ({product.reviews})</TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Product Details</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{product.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-medium">Features:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {product.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="care" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Care Instructions</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{product.care}</p>
                  <div className="space-y-2">
                    <h4 className="font-medium">Delivery Information:</h4>
                    <p className="text-gray-600">{product.delivery}</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="reviews" className="mt-6">
              <div className="space-y-6">
                {reviews.map((review) => (
                  <Card key={review.id}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="font-medium">{review.name}</h4>
                          <div className="flex items-center gap-2 mt-1">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-gray-600">{review.date}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600">{review.comment}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">You Might Also Like</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={200}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-gray-900 mb-2">{product.name}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-pink-600">${product.price}</span>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600">{product.rating}</span>
                      </div>
                    </div>
                    <Button
                      asChild
                      size="sm"
                      className="w-full mt-3 bg-pink-600 hover:bg-pink-700 transition-colors duration-200"
                    >
                      <Link href={`/product/${product.id}`}>View Details</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
