import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Twitter, Phone, MapPin, Heart, Flower } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border-2 border-white rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info - More personal */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
                <Flower className="h-5 w-5 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold">Sarah's Blooms</span>
                <div className="text-xs text-gray-400 -mt-1">Since 1987</div>
              </div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Three generations of flower lovers creating beautiful moments. Every arrangement is made with the same
              care I'd give my own family.
              <Heart className="inline h-4 w-4 text-pink-400 mx-1" />
            </p>
            <div>
              <p className="text-sm text-gray-400 mb-3">Follow our daily flower adventures:</p>
              <div className="flex items-center gap-3">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white hover:bg-pink-600 rounded-full transition-colors duration-200"
                >
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white hover:bg-blue-600 rounded-full transition-colors duration-200"
                >
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white hover:bg-blue-400 rounded-full transition-colors duration-200"
                >
                  <Twitter className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-semibold text-lg text-pink-300">Explore Our Garden</h3>
            <div className="space-y-3">
              <Link
                href="/shop"
                className="block text-gray-300 hover:text-pink-300 transition-colors text-sm hover:translate-x-1 transform duration-200"
              >
                → Browse All Flowers
              </Link>
              <Link
                href="/about"
                className="block text-gray-300 hover:text-pink-300 transition-colors text-sm hover:translate-x-1 transform duration-200"
              >
                → Sarah's Story
              </Link>
              <Link
                href="/contact"
                className="block text-gray-300 hover:text-pink-300 transition-colors text-sm hover:translate-x-1 transform duration-200"
              >
                → Get in Touch
              </Link>
              <Link
                href="/care-tips"
                className="block text-gray-300 hover:text-pink-300 transition-colors text-sm hover:translate-x-1 transform duration-200"
              >
                → Flower Care Tips
              </Link>
              <Link
                href="/delivery"
                className="block text-gray-300 hover:text-pink-300 transition-colors text-sm hover:translate-x-1 transform duration-200"
              >
                → Delivery Areas
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="font-semibold text-lg text-rose-300">Special Occasions</h3>
            <div className="space-y-3">
              <Link
                href="/weddings"
                className="block text-gray-300 hover:text-rose-300 transition-colors text-sm hover:translate-x-1 transform duration-200"
              >
                💒 Wedding Magic
              </Link>
              <Link
                href="/sympathy"
                className="block text-gray-300 hover:text-rose-300 transition-colors text-sm hover:translate-x-1 transform duration-200"
              >
                🕊️ Sympathy Arrangements
              </Link>
              <Link
                href="/corporate"
                className="block text-gray-300 hover:text-rose-300 transition-colors text-sm hover:translate-x-1 transform duration-200"
              >
                🏢 Corporate Events
              </Link>
              <Link
                href="/subscriptions"
                className="block text-gray-300 hover:text-rose-300 transition-colors text-sm hover:translate-x-1 transform duration-200"
              >
                📅 Weekly Flower Club
              </Link>
              <Link
                href="/custom"
                className="block text-gray-300 hover:text-rose-300 transition-colors text-sm hover:translate-x-1 transform duration-200"
              >
                ✨ Custom Creations
              </Link>
            </div>
          </div>

          {/* Newsletter & Contact */}
          <div className="space-y-6">
            <h3 className="font-semibold text-lg text-orange-300">Stay in the Loop</h3>
            <p className="text-gray-300 text-sm">
              Get Sarah's weekly flower tips, seasonal specials, and first dibs on new arrivals!
            </p>
            <div className="space-y-3">
              <div className="flex gap-2">
                <Input
                  placeholder="your@email.com"
                  className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 rounded-full"
                />
                <Button className="bg-pink-600 hover:bg-pink-700 rounded-full px-6 transition-colors duration-200">
                  Join
                </Button>
              </div>
              <p className="text-xs text-gray-400">No spam, just flower love! 🌸</p>
            </div>

            <div className="space-y-3 pt-4 border-t border-gray-700">
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <Phone className="h-4 w-4 text-pink-400" />
                <div>
                  <span className="font-medium">(555) 123-ROSE</span>
                  <div className="text-xs text-gray-400">Call Sarah directly!</div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <MapPin className="h-4 w-4 text-rose-400" />
                <div>
                  <span>123 Flower Street</span>
                  <div className="text-xs text-gray-400">Garden City, CA 90210</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Sarah's Blooms. Made with <Heart className="inline h-4 w-4 text-pink-400 mx-1" /> in Garden City
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-pink-300 transition-colors duration-200">
                Privacy Promise
              </Link>
              <Link href="/terms" className="hover:text-pink-300 transition-colors duration-200">
                Our Terms
              </Link>
              <Link href="/returns" className="hover:text-pink-300 transition-colors duration-200">
                Return Policy
              </Link>
            </div>
          </div>
          <div className="text-center mt-6">
            <p className="text-xs text-gray-500 italic">
              "Every flower is a soul blossoming in nature" - Grandma Rose's favorite quote
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
