import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Flower2, Droplet, Scissors, Sun, Leaf } from "lucide-react"

export default function FlowerCareTipsPage() {
  const careTips = [
    {
      title: "Prepare Your Vase",
      icon: Droplet,
      description:
        "Before arranging, clean your vase thoroughly with soap and water to remove any bacteria that could shorten your flowers' life. Fill it with fresh, cool water and add flower food if provided.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Trim Stems Properly",
      icon: Scissors,
      description:
        "Using a sharp knife or floral shears, cut about 1-2 inches off the bottom of each stem at a 45-degree angle. Do this under running water if possible to prevent air bubbles from blocking water absorption. Remove any leaves that would fall below the waterline to prevent bacterial growth.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Choose the Right Spot",
      icon: Sun,
      description:
        "Place your flowers in a cool spot away from direct sunlight, heat sources (like radiators or electronics), and ripening fruit. Heat and ethylene gas from fruit can cause flowers to wilt prematurely.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Change Water Regularly",
      icon: Droplet,
      description:
        "Change the water in your vase every one to two days, or whenever it appears cloudy. Re-cut the stems each time you change the water to ensure maximum water uptake.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Remove Fading Blooms",
      icon: Leaf,
      description:
        "As individual flowers start to fade, remove them from the arrangement. This not only keeps your bouquet looking fresh but also prevents the release of ethylene gas, which can accelerate the aging of other blooms.",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const faqItems = [
    {
      question: "How often should I change the water?",
      answer:
        "Ideally, every one to two days, or as soon as the water starts to look cloudy. Fresh water is key to longevity.",
    },
    {
      question: "What is flower food and do I need it?",
      answer:
        "Flower food contains nutrients, sugar for energy, and a bactericide to keep water clean. It's highly recommended as it significantly extends the life of your cut flowers.",
    },
    {
      question: "Why do my roses droop so quickly?",
      answer:
        "Roses are heavy drinkers! Ensure they have plenty of water, re-cut their stems frequently, and consider giving them a 'drink' by submerging the entire rose (head and stem) in cool water for 30 minutes if they look very thirsty.",
    },
    {
      question: "Can I use household bleach in the water?",
      answer:
        "A tiny drop of bleach (about 1/4 teaspoon per liter of water) can act as a bactericide, but too much can harm the flowers. It's safer to use commercial flower food or change water frequently.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100/50 to-rose-100/50"></div>
        <div className="max-w-7xl mx-auto relative text-center">
          <Badge className="bg-pink-100 text-pink-800 px-4 py-2 rounded-full transform -rotate-1 mb-4">
            <Flower2 className="h-4 w-4 mr-2" />
            Flower Care Secrets
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-4">
            Keep Your Blooms
            <span className="block text-pink-600 transform rotate-1">Fresh & Vibrant</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Sarah's personal tips and tricks to make your beautiful flowers last longer, just like they do in our shop!
          </p>
        </div>
      </section>

      {/* Care Tips Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Top Care Tips</h2>
            <p className="text-xl text-gray-600">Simple steps for lasting beauty</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {careTips.map((tip, index) => (
              <Card
                key={index}
                className={`group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                  index % 2 === 0 ? "rotate-1" : "-rotate-1"
                } hover:rotate-0`}
              >
                <CardContent className="p-6">
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <Image
                      src={tip.image || "/placeholder.svg"}
                      alt={tip.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                      <tip.icon className="h-5 w-5 text-pink-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{tip.title}</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{tip.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Common Questions</h2>
            <p className="text-xl text-gray-600">Answers from Sarah's years of experience</p>
          </div>

          <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
            {faqItems.map((item, index) => (
              <Card
                key={index}
                className="mb-4 border-pink-100 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <AccordionItem value={`item-${index}`} className="border-b-0">
                  <AccordionTrigger className="text-lg font-semibold text-gray-800 hover:no-underline px-6 py-4">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 px-6 pb-4">{item.answer}</AccordionContent>
                </AccordionItem>
              </Card>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Still have questions?</h2>
          <p className="text-xl mb-8 opacity-90">
            Don't hesitate to reach out! Sarah loves talking about flowers and is happy to help with any specific care
            needs.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-pink-600 hover:bg-gray-100 rounded-full px-8 py-4 transition-colors duration-200"
          >
            <Link href="/contact">Chat with Sarah</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
