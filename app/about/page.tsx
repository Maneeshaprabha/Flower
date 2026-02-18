import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Star, Users, Award, Flower2, Quote } from "lucide-react"

export default function AboutPage() {
  const milestones = [
    {
      year: "1987",
      title: "Grandmother of a Rose's Dream",
      description: "Rose started with a small cart selling flowers from her garden on weekends",
      image: "/assets/shop03.jpg?height=200&width=300",
    },
    {
      year: "1995",
      title: "Sarah Joins the Family Business",
      description: "At 16, Sarah started helping after school, learning Rose's secret techniques",
      image: "/assets/flowershop02.jpg?height=200&width=300",
    },
    {
      year: "2003",
      title: "Our First Real Shop",
      description: "We opened our brick-and-mortar store on Flower Street with just 3 employees",
      image: "/assets/flowerShop.jpg?height=200&width=300",
    },
    {
      year: "2015",
      title: "Emma's Fresh Ideas",
      description: "Sarah's daughter Emma brought social media and online ordering to the business",
      image: "/assets/shop04.jpg?height=200&width=300",
    },
    {
      year: "2024",
      title: "Three Generations Strong",
      description: "Today we're still family-owned, serving thousands of happy customers",
      image: "/assets/shop05.jpg?height=200&width=300",
    },
  ]

  const values = [
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every arrangement gets the same care we'd give our own family",
      color: "text-red-500",
    },
    {
      icon: Flower2,
      title: "Always Fresh",
      description: "We source from local farms and get new flowers every morning",
      color: "text-pink-500",
    },
    {
      icon: Users,
      title: "Personal Touch",
      description: "We remember your preferences and special occasions",
      color: "text-blue-500",
    },
    {
      icon: Award,
      title: "Quality Promise",
      description: "37 years of experience in every single bouquet",
      color: "text-orange-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100/50 to-rose-100/50"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="bg-pink-100 text-pink-800 px-4 py-2 rounded-full transform -rotate-1">
                  <Heart className="h-4 w-4 mr-2" />
                  Our Family Storys
                </Badge>
                <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                  Three generations of
                  <span className="block text-pink-600 transform rotate-1">flower magic</span>
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed">
                  What started as Grandma Rose's weekend flower cart has blossomed into a family legacy of bringing joy
                  through beautiful arrangements.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-pink-600 hover:bg-pink-700 rounded-full px-8 py-4 transition-colors duration-200"
                >
                  <Link href="/shop">Visit Our Garden</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-pink-300 text-pink-700 hover:bg-pink-50 rounded-full px-8 py-4 bg-white/80 transition-all duration-200"
                >
                  <Link href="/contact">Meet Us in Person</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <Image
                    src="/assets/pexels-trueniko.png?height=250&width=200"
                    alt="Grandma Rose in her garden"
                    width={200}
                    height={250}
                    className="rounded-2xl shadow-lg transform rotate-2"
                  />
                  <Image
                    src="/assets/pexels-karina-kholina.png?height=180&width=200"
                    alt="Sarah arranging flowers"
                    width={200}
                    height={180}
                    className="rounded-2xl shadow-lg transform -rotate-1"
                  />
                </div>
                <div className="space-y-4 mt-8">
                  <Image
                    src="/assets/pexels-shkrabaanthony.png?height=200&width=200"
                    alt="Emma with social media"
                    width={200}
                    height={200}
                    className="rounded-2xl shadow-lg transform rotate-1"
                  />
                  <Image
                    src="/assets/pexels-khadija-qasanova.png?height=220&width=200"
                    alt="Three generations together"
                    width={200}
                    height={220}
                    className="rounded-2xl shadow-lg transform -rotate-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Family */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet the Flower Family</h2>
            <p className="text-xl text-gray-600">The women behind every beautiful arrangement</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Grandma Rose */}
            <Card className="bg-gradient-to-br from-rose-50 to-pink-50 border-2 border-rose-200 transform rotate-1 hover:rotate-0 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="relative mb-6">
                  <Image
                    src="/assets/grandmother.jpg?height=200&width=200"
                    alt="Grandma Rose"
                    width={200}
                    height={200}
                    className="rounded-full mx-auto shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-rose-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl">🌹</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Grandma Rose</h3>
                <p className="text-rose-600 font-medium mb-4">The Original Flower Lady (1925-2018)</p>
                <p className="text-gray-700 leading-relaxed">
                  "Every flower has a story to tell." Rose started it all with her magical touch and endless love for
                  bringing smiles to people's faces.
                </p>
              </CardContent>
            </Card>

            {/* Sarah */}
            <Card className="bg-gradient-to-br from-pink-50 to-rose-50 border-2 border-pink-200 transform -rotate-1 hover:rotate-0 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="relative mb-6">
                  <Image
                    src="/assets/sarah.jpg?height=200&width=200"
                    alt="Sarah"
                    width={200}
                    height={200}
                    className="rounded-full mx-auto shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl">🌸</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Sarah</h3>
                <p className="text-pink-600 font-medium mb-4">Head Florist & Owner</p>
                <p className="text-gray-700 leading-relaxed">
                  Learning from Rose since age 16, Sarah combines traditional techniques with modern style. She
                  personally designs every wedding and special occasion arrangement.
                </p>
              </CardContent>
            </Card>

            {/* Emma */}
            <Card className="bg-gradient-to-br from-orange-50 to-pink-50 border-2 border-orange-200 transform rotate-1 hover:rotate-0 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="relative mb-6">
                  <Image
                    src="/assets/emma.jpg?height=200&width=200"
                    alt="Emma"
                    width={200}
                    height={200}
                    className="rounded-full mx-auto shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl">🌻</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Emma</h3>
                <p className="text-orange-600 font-medium mb-4">Social Media & Modern Arrangements</p>
                <p className="text-gray-700 leading-relaxed">
                  The tech-savvy generation bringing fresh ideas! Emma handles our online presence and creates those
                  Instagram-worthy arrangements you love.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="py-20 px-4 bg-gradient-to-br from-rose-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Blooming Journey</h2>
            <p className="text-xl text-gray-600">37 years of growing, learning, and spreading joy</p>
          </div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className={`flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="lg:w-1/2">
                  <Image
                    src={milestone.image || "/assets/flowershop.jpg"}
                    alt={milestone.title}
                    width={400}
                    height={300}
                    className={`rounded-2xl shadow-xl w-full ${
                      index % 2 === 0 ? "transform rotate-1" : "transform -rotate-1"
                    }`}
                  />
                </div>
                <div className="lg:w-1/2 space-y-4">
                  <Badge className="bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-lg font-bold">
                    {milestone.year}
                  </Badge>
                  <h3 className="text-3xl font-bold text-gray-900">{milestone.title}</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Believe In</h2>
            <p className="text-xl text-gray-600">The values that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={value.title}
                className={`text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                  index % 2 === 0 ? "rotate-1" : "-rotate-1"
                } hover:rotate-0`}
              >
                <CardContent className="p-8">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center`}>
                    <value.icon className={`h-8 w-8 ${value.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Love */}
      <section className="py-20 px-4 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Love Notes from Our Flower Family</h2>
            <p className="text-xl text-gray-600">What our customers really think (we never make these up!)</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/80 backdrop-blur-sm transform rotate-1 hover:rotate-0 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote className="h-6 w-6 text-gray-400 mb-3" />
                <p className="text-gray-700 mb-4 italic">
                  "Sarah remembered my mom's favorite flowers from 3 years ago when I called for her birthday. That's
                  the kind of personal service you just don't find anymore!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-pink-200 rounded-full flex items-center justify-center">
                    <span className="text-pink-700 font-bold">J</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Jennifer M.</p>
                    <p className="text-sm text-gray-600">Customer since 2018</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm transform -rotate-1 hover:rotate-0 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote className="h-6 w-6 text-gray-400 mb-3" />
                <p className="text-gray-700 mb-4 italic">
                  "Emma helped me propose with the most perfect arrangement. She even hid the ring in the bouquet! My
                  fiancée still talks about how beautiful it was."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center">
                    <span className="text-blue-700 font-bold">M</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Michael R.</p>
                    <p className="text-sm text-gray-600">Now planning his wedding with us!</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm transform rotate-1 hover:rotate-0 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote className="h-6 w-6 text-gray-400 mb-3" />
                <p className="text-gray-700 mb-4 italic">
                  "When my grandmother passed, Sarah personally delivered the most beautiful sympathy arrangement and
                  stayed to give me a hug. That meant everything to our family."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-200 rounded-full flex items-center justify-center">
                    <span className="text-orange-700 font-bold">L</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Lisa T.</p>
                    <p className="text-sm text-gray-600">Part of our flower family</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Want to be part of our flower family?</h2>
          <p className="text-xl mb-8 opacity-90">
            Come visit us in person! We'd love to meet you and help you find the perfect flowers for your special
            moments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-pink-600 hover:bg-gray-100 rounded-full px-8 py-4 transition-colors duration-200"
            >
              <Link href="/shop">Browse Our Garden</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-pink-600 rounded-full px-8 py-4 bg-transparent transition-all duration-200"
            >
              <Link href="/contact">Visit Our Shop</Link>
            </Button>
          </div>
          <div className="mt-8 text-center">
            <p className="text-pink-100">
              📍 123 Flower Street, Garden City, CA • 📞 (555) 123-ROSE • Open 7 days a week
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
