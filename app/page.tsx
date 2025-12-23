import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Truck, Shield, Heart, ArrowRight, Quote } from "lucide-react"


export default function HomePage() {
  const featuredProducts = [
    {
      id: 1,
      name: "Grandma's Garden Roses",
      price: 89.99,
      originalPrice: 109.99,
      image: "/assets/gradenRose.png?height=320&width=280",
      rating: 4.8,
      reviews: 124,
      badge: "Customer Favorite",
      story: "Just like the ones from my grandmother's backyard",
    },
    {
      id: 2,
      name: "Wildflower Meadow Mix",
      price: 65.99,
      image: "/assets/pexels.png?height=280&width=320",
      rating: 4.9,
      reviews: 89,
      badge: "Fresh Pick",
      story: "Picked this morning from local farms",
    },
    {
      id: 3,
      name: "Sunday Morning Lilies",
      price: 75.99,
      image: "/assets/Lilly.png?height=300&width=300",
      rating: 4.7,
      reviews: 156,
      badge: "Staff Pick",
      story: "Perfect for lazy Sunday brunches",
    },
  ]

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Hero Section - More organic layout */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-100 via-pink-50 to-orange-100"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              {/* Handwritten-style badge */}
              <div className="inline-block">
                <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border-2 border-pink-200 transform -rotate-1">
                  <span className="text-pink-700 font-medium text-sm">🌻 Fresh blooms daily since 1987</span>
                </div>
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Flowers that tell
                  <span className="block text-pink-600 transform -rotate-1 inline-block">your story</span>
                </h1>
                <div className="max-w-xl">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Hi there! I'm Sarah, and I've been arranging flowers for over 20 years. Every bouquet we create is
                    made with love, just like I'd make for my own family.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  <Link href="/shop">
                    Browse Our Garden <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-pink-300 text-pink-700 hover:bg-pink-50 px-8 py-4 rounded-full bg-white/80 backdrop-blur-sm"
                >
                  <Link href="/contact">Chat with Sarah</Link>
                </Button>
              </div>

              {/* Trust indicators - more personal */}
              <div className="flex flex-wrap items-center gap-6 pt-6">
                <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-3 py-2 rounded-full">
                  <Truck className="h-4 w-4 text-pink-600" />
                  <span className="text-sm text-gray-700">Same-day delivery</span>
                </div>
                <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-3 py-2 rounded-full">
                  <Shield className="h-4 w-4 text-blue-600" />
                  <span className="text-sm text-gray-700">7-day fresh promise</span>
                </div>
                <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-3 py-2 rounded-full">
                  <Heart className="h-4 w-4 text-red-600" />
                  <span className="text-sm text-gray-700">Made with love</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative">
                {/* Main image with organic shape */}
                <div className="relative z-10 transform rotate-2">
                  <Image
                    src = "/assets/beautiful-flowers-wallpaper.png"
                    alt="Beautiful flower arrangement"
                    width={500}
                    height={600}
                    className="rounded-3xl shadow-2xl"
                  />
                  {/* Floating review card */}
                  <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-xl transform -rotate-3 border-2 border-pink-100">
                    <div className="flex items-center gap-2 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-sm text-gray-700 font-medium">"Sarah's flowers made our day perfect!"</p>
                    <p className="text-xs text-gray-500">- Emma & Jake</p>
                  </div>
                </div>
                {/* Background decoration */}
                <div className="absolute -top-6 -right-6 w-full h-full bg-gradient-to-br from-pink-200/50 to-rose-200/50 rounded-3xl -z-10 transform -rotate-2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products - Asymmetrical layout */}
      <section className="py-20 px-4 bg-white relative">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-pink-100 rounded-full opacity-50"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-rose-100 rounded-full opacity-30"></div>

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 relative">
            <div className="inline-block transform -rotate-1">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">This Week's Favorites</h2>
              <div className="w-24 h-1 bg-pink-400 mx-auto rounded-full"></div>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-6">
              These are the arrangements our customers (and I!) can't stop talking about
            </p>
          </div>

          {/* Asymmetrical grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <Card
                key={product.id}
                className={`group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white transform hover:-translate-y-2 ${
                  index === 0
                    ? "lg:transform lg:rotate-1"
                    : index === 1
                      ? "lg:transform lg:-rotate-1 lg:mt-8"
                      : "lg:transform lg:rotate-1 lg:-mt-4"
                }`}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-2xl">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <Badge className="absolute top-4 left-4 bg-pink-600 text-white transform -rotate-12 shadow-lg">
                      {product.badge}
                    </Badge>
                    <Button
                      size="icon"
                      variant="secondary"
                      className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/90 backdrop-blur-sm hover:bg-white"
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
                      <span className="text-sm text-gray-600">({product.reviews} happy customers)</span>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-pink-600">${product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                        )}
                      </div>
                    </div>

                    <Button
                      asChild
                      className="w-full bg-pink-600 hover:bg-pink-700 rounded-full transition-colors duration-200"
                    >
                      <Link href={`/product/${product.id}`}>See This Beauty</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-pink-300 text-pink-700 hover:bg-pink-50 bg-white rounded-full px-8 py-4 transition-all duration-200"
            >
              <Link href="/shop">
                Explore All Our Creations <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section - More personal storytelling */}
      <section className="py-20 px-4 bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-20 w-40 h-40 bg-pink-300 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-rose-300 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-block">
                  <Badge className="bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm transform rotate-1">
                    Our Story
                  </Badge>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                  Three generations of
                  <span className="block text-pink-700">flower lovers</span>
                </h2>
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p>
                    It all started with my grandmother Rose (yes, really!) who taught me that flowers aren't just pretty
                    - they're messengers of the heart.
                  </p>
                  <p>
                    Today, my daughter Emma works alongside me, and we still use Grandma Rose's secret techniques for
                    making arrangements that last longer and look more natural.
                  </p>
                </div>
              </div>

              {/* Personal stats */}
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center bg-white/60 backdrop-blur-sm p-6 rounded-2xl transform rotate-1 hover:scale-105 hover:shadow-lg transition-all duration-300">
                  <div className="text-3xl font-bold text-pink-600 mb-2">12,000+</div>
                  <div className="text-gray-700">Smiles delivered</div>
                </div>
                <div className="text-center bg-white/60 backdrop-blur-sm p-6 rounded-2xl transform -rotate-1 hover:scale-105 hover:shadow-lg transition-all duration-300">
                  <div className="text-3xl font-bold text-pink-600 mb-2">37 years</div>
                  <div className="text-gray-700">Of flower magic</div>
                </div>
              </div>

              <Button asChild className="bg-pink-600 hover:bg-pink-700 rounded-full px-8 py-4">
                <Link href="/about">Read Our Full Story</Link>
              </Button>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <Image
                    src="/assets/pexels-trueniko.png?height=300&width=250"
                    alt="Sarah arranging flowers"
                    width={250}
                    height={300}
                    className="rounded-2xl shadow-lg transform rotate-2"
                  />
                  <Image
                    src="/assets/pexels-karina-kholina.png?height=200&width=250"
                    alt="Our flower shop"
                    width={250}
                    height={200}
                    className="rounded-2xl shadow-lg transform -rotate-1"
                  />
                </div>
                <div className="space-y-4 mt-8">
                  <Image
                    src="/assets/pexels-shkrabaanthony.png?height=250&width=250"
                    alt="Emma with flowers"
                    width={250}
                    height={250}
                    className="rounded-2xl shadow-lg transform rotate-1"
                  />
                  <Image
                    src="/assets/pexels-khadija-qasanova.png?height=180&width=250"
                    alt="Grandmother Rose"
                    width={250}
                    height={180}
                    className="rounded-2xl shadow-lg transform -rotate-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Love - More authentic testimonials */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Flower Family Says</h2>
            <p className="text-xl text-gray-600">Real words from real people (we never fake these!)</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-pink-50 border-2 border-pink-100 transform rotate-1 hover:rotate-0 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-pink-400 mb-4" />
                <p className="text-gray-700 mb-4 italic">
                  "Sarah remembered it was my mom's birthday and added extra baby's breath because she knows mom loves
                  them. That's the kind of care you just don't find anymore."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-pink-200 rounded-full flex items-center justify-center">
                    <span className="text-pink-700 font-bold">M</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Maria Rodriguez</p>
                    <p className="text-sm text-gray-600">Regular customer for 8 years</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-rose-50 border-2 border-rose-100 transform -rotate-1 hover:rotate-0 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-rose-400 mb-4" />
                <p className="text-gray-700 mb-4 italic">
                  "I was nervous about proposing, but Sarah created the most perfect bouquet. She said yes! (The flowers
                  definitely helped 😊)"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-rose-200 rounded-full flex items-center justify-center">
                    <span className="text-rose-700 font-bold">D</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">David Chen</p>
                    <p className="text-sm text-gray-600">Now planning his wedding with us!</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-orange-50 border-2 border-orange-100 transform rotate-1 hover:rotate-0 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-orange-400 mb-4" />
                <p className="text-gray-700 mb-4 italic">
                  "When my grandmother passed, Sarah personally delivered the most beautiful arrangement. She even
                  stayed to give me a hug. That meant everything."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-200 rounded-full flex items-center justify-center">
                    <span className="text-orange-700 font-bold">L</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Lisa Thompson</p>
                    <p className="text-sm text-gray-600">Part of our flower family</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action - More personal */}
      <section className="py-20 px-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="text-4xl font-bold mb-6">Ready to brighten someone's day?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's create something beautiful together. I promise to put as much love into your arrangement as I would
            for my own family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-pink-600 hover:bg-gray-100 rounded-full px-8 py-4 transition-colors duration-200"
            >
              <Link href="/shop">Start Shopping</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-pink-600 rounded-full px-8 py-4 bg-transparent transition-all duration-200"
            >
              <Link href="/contact">Call Sarah Directly</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
