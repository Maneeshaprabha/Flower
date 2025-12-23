"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, Heart, Search, Filter, Sparkles, Leaf, Sun, Snowflake, Wheat } from "lucide-react"

export default function ShopPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("featured")
  const [filterBy, setFilterBy] = useState("all")
  const [selectedSeason, setSelectedSeason] = useState("all") // New state for seasonal filter

  const products = [
    {
      id: 1,
      name: "Grandma's Garden Roses",
      price: 89.99,
      originalPrice: 109.99,
      image: "/assets/gradenRose.png?height=320&width=280",
      rating: 4.8,
      reviews: 124,
      category: "roses",
      badge: "Sarah's Pick",
      story: "These remind me of my grandmother's garden",
      mood: "romantic",
      season: "Summer",
    },
    {
      id: 2,
      name: "Wildflower Meadow Mix",
      price: 65.99,
      image: "/assets/wildFlower.png?height=280&width=320",
      rating: 4.9,
      reviews: 89,
      category: "mixed",
      badge: "Just Picked",
      story: "Fresh from local farms this morning",
      mood: "cheerful",
      season: "Spring",
    },
    {
      id: 3,
      name: "Sunday Morning Lilies",
      price: 75.99,
      image: "/assets/Lilly.png?height=300&width=300",
      rating: 4.7,
      reviews: 156,
      category: "lilies",
      badge: "Customer Fave",
      story: "Perfect for lazy Sunday brunches",
      mood: "peaceful",
      season: "Spring",
    },
    {
      id: 4,
      name: "Sunshine Sunflowers",
      price: 45.99,
      image: "/assets/sunflower.png?height=290&width=310",
      rating: 4.6,
      reviews: 78,
      category: "sunflowers",
      badge: "Mood Booster",
      story: "Guaranteed to make you smile",
      mood: "happy",
      season: "Summer",
    },
    {
      id: 5,
      name: "Date Night Roses",
      price: 95.99,
      image: "/assets/NightRose.png??height=310&width=290",
      rating: 4.9,
      reviews: 203,
      category: "roses",
      badge: "Romance Special",
      story: "For those special moments",
      mood: "romantic",
      season: "Autumn",
    },
    {
      id: 6,
      name: "Tropical Getaway",
      price: 125.99,
      image: "/assets/Tropical.png??height=300&width=320",
      rating: 4.8,
      reviews: 67,
      category: "tropical",
      badge: "Exotic Beauty",
      story: "Brings vacation vibes home",
      mood: "adventurous",
      season: "Summer",
    },
    {
      id: 7,
      name: "Winter Wonderland Bouquet",
      price: 110.0,
      image: "/assets/winterFlower.png??height=300&width=300",
      rating: 4.5,
      reviews: 50,
      category: "mixed",
      badge: "Holiday Special",
      story: "Sparkling whites and silvers for a magical season",
      mood: "festive",
      season: "Winter",
    },
    {
      id: 8,
      name: "Autumn Harvest Mix",
      price: 70.0,
      image: "/assets/Autumn.png??height=300&width=300",
      rating: 4.7,
      reviews: 95,
      category: "mixed",
      badge: "Seasonal Favorite",
      story: "Warm tones of fall, perfect for cozy evenings",
      mood: "cozy",
      season: "Autumn",
    },
  ]

  const seasons = [
    { name: "All Seasons", icon: Sparkles, value: "all" },
    { name: "Spring", icon: Leaf, value: "Spring" },
    { name: "Summer", icon: Sun, value: "Summer" },
    { name: "Autumn", icon: Wheat, value: "Autumn" },
    { name: "Winter", icon: Snowflake, value: "Winter" },
  ]

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = filterBy === "all" || product.category === filterBy
    const matchesSeason = selectedSeason === "all" || product.season === selectedSeason
    return matchesSearch && matchesCategory && matchesSeason
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "rating":
        return b.rating - a.rating
      case "name":
        return a.name.localeCompare(b.name)
      default:
        return 0
    }
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50">
      {/* Header - More personal */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-pink-100">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <div className="inline-block mb-4">
              <Badge className="bg-pink-100 text-pink-800 px-4 py-2 rounded-full transform -rotate-1">
                <Sparkles className="h-4 w-4 mr-2" />
                Fresh arrivals daily
              </Badge>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Sarah's Flower Garden</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Each arrangement tells a story. What story do you want to tell today?
            </p>
          </div>

          {/* Search and Filters - More organic layout */}
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between bg-white/60 backdrop-blur-sm p-6 rounded-3xl border border-pink-200">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="What flowers are calling to you?"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 rounded-full border-pink-200 bg-white/80"
              />
            </div>
            <div className="flex gap-4">
              <Select value={filterBy} onValueChange={setFilterBy}>
                <SelectTrigger className="w-48 rounded-full border-pink-200 bg-white/80 transition-all duration-200 hover:border-pink-300">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Browse by type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Our Beauties</SelectItem>
                  <SelectItem value="roses">Classic Roses</SelectItem>
                  <SelectItem value="lilies">Elegant Lilies</SelectItem>
                  <SelectItem value="sunflowers">Happy Sunflowers</SelectItem>
                  <SelectItem value="mixed">Mixed Bouquets</SelectItem>
                  <SelectItem value="tropical">Tropical Vibes</SelectItem>
                </SelectContent>
              </Select>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48 rounded-full border-pink-200 bg-white/80 transition-all duration-200 hover:border-pink-300">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Sarah's Favorites</SelectItem>
                  <SelectItem value="price-low">Budget Friendly First</SelectItem>
                  <SelectItem value="price-high">Luxury First</SelectItem>
                  <SelectItem value="rating">Most Loved</SelectItem>
                  <SelectItem value="name">A to Z</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Seasonal Collections */}
          <div className="mt-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Browse by Season</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {seasons.map((season) => (
                <Badge
                  key={season.value}
                  onClick={() => setSelectedSeason(season.value)}
                  className={`cursor-pointer px-4 py-2 rounded-full text-base font-medium transition-all duration-200 transform hover:scale-105 ${
                    selectedSeason === season.value
                      ? "bg-pink-600 text-white shadow-md"
                      : "bg-white text-gray-700 border border-pink-200 hover:bg-pink-50"
                  }`}
                >
                  <season.icon className="h-4 w-4 mr-2" />
                  {season.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid - Masonry-style layout */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-8 space-y-8">
          {sortedProducts.map((product, index) => (
            <Card
              key={product.id}
              className={`group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white break-inside-avoid transform hover:-translate-y-2 ${
                index % 3 === 0 ? "rotate-1" : index % 3 === 1 ? "-rotate-1" : "rotate-0"
              }`}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-2xl">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full object-cover group-hover:scale-110 transition-transform duration-700"
                    style={{ height: "auto" }}
                  />
                  <Badge
                    className={`absolute top-4 left-4 text-white shadow-lg transform -rotate-12 ${
                      product.badge.includes("Sarah")
                        ? "bg-pink-600"
                        : product.badge.includes("Just")
                          ? "bg-rose-600"
                          : product.badge.includes("Customer")
                            ? "bg-blue-600"
                            : "bg-orange-600"
                    }`}
                  >
                    {product.badge}
                  </Badge>
                  <Button
                    size="icon"
                    variant="secondary"
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-3 italic">"{product.story}"</p>

                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">({product.reviews} smiles)</span>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-pink-600">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                      )}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {product.mood}
                    </Badge>
                  </div>

                  <div className="flex gap-2">
                    <Button asChild size="sm" className="flex-1 bg-pink-600 hover:bg-pink-700 rounded-full">
                      <Link href={`/product/${product.id}`}>See This Beauty</Link>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-pink-200 text-pink-700 hover:bg-pink-50 bg-transparent rounded-full"
                    >
                      Quick Add
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {sortedProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="h-12 w-12 text-pink-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Hmm, no flowers match that search</h3>
              <p className="text-gray-600 mb-6">
                Don't worry! Sarah probably has something perfect in mind. Give her a call or try a different search.
              </p>
              <div className="flex gap-4 justify-center">
                <Button
                  onClick={() => {
                    setSearchTerm("")
                    setFilterBy("all")
                    setSelectedSeason("all") // Reset season filter too
                  }}
                  className="bg-pink-600 hover:bg-pink-700 rounded-full"
                >
                  Show All Flowers
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-pink-200 text-pink-700 hover:bg-pink-50 rounded-full bg-transparent"
                >
                  <Link href="/contact">Ask Sarah</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Personal touch section */}
      <div className="bg-white/60 backdrop-blur-sm border-t border-pink-100 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Can't find exactly what you're looking for?</h3>
          <p className="text-gray-600 mb-6">
            I love creating custom arrangements! Tell me about the person you're thinking of, and I'll design something
            perfect just for them.
          </p>
          <Button asChild className="bg-pink-600 hover:bg-pink-700 rounded-full px-8 py-4">
            <Link href="/contact">Let's Create Something Special</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
