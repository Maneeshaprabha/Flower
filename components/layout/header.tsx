"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ShoppingCart, Heart, Search, Phone, Flower, Menu } from "lucide-react"

export default function Header() {
  const cartItemCount = 3

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Our Garden", href: "/shop" },
    { name: "Sarah's Story", href: "/about" },
    { name: "Chat with Us", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-pink-100 shadow-sm">
      {/* Top Bar - More personal */}
      <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span className="font-medium">(555) 123-ROSE</span>
            </div>
            <span className="hidden md:block">🌻 Fresh flowers delivered with love daily</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:block">Follow our flower journey @sarahsblooms</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo - More personal */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                <Flower className="h-5 w-5 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
            </div>
            <div>
              <span className="text-2xl font-bold text-gray-900">Sarah's Blooms</span>
              <div className="text-xs text-gray-500 -mt-1">Est. 1987</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-pink-600 font-medium transition-colors relative group"
              >
                {item.name}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-600 group-hover:w-full transition-all duration-300"></div>
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="hidden md:flex hover:bg-pink-50 rounded-full transition-colors duration-200"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-pink-50 rounded-full relative transition-colors duration-200"
            >
              <Heart className="h-5 w-5" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="relative hover:bg-pink-50 rounded-full transition-colors duration-200"
            >
              <Link href="/cart">
                <ShoppingCart className="h-5 w-5" />
                {cartItemCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-pink-600 text-xs animate-bounce">
                    {cartItemCount}
                  </Badge>
                )}
              </Link>
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden hover:bg-pink-50 rounded-full transition-colors duration-200"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-gradient-to-b from-pink-50 to-rose-50">
                <div className="flex flex-col gap-6 mt-6">
                  <Link href="/" className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
                      <Flower className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <span className="text-xl font-bold text-gray-900">Sarah's Blooms</span>
                      <div className="text-xs text-gray-500 -mt-1">Est. 1987</div>
                    </div>
                  </Link>
                  <nav className="flex flex-col gap-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-lg font-medium text-gray-700 hover:text-pink-600 transition-colors duration-200 p-3 rounded-xl hover:bg-white/60"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                  <div className="pt-4 border-t border-pink-200">
                    <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl">
                      <div className="flex items-center gap-2 text-sm text-gray-700 mb-2 font-medium">
                        <Phone className="h-4 w-4" />
                        <span>(555) 123-ROSE</span>
                      </div>
                      <p className="text-sm text-gray-600">Call Sarah directly for custom arrangements!</p>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
