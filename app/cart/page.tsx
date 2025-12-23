"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from "lucide-react"

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Rose Bouquet Deluxe",
      price: 89.99,
      quantity: 2,
      image: "/assets/rose.jpg?height=100&width=100",
    },
    {
      id: 2,
      name: "Spring Garden Mix",
      price: 65.99,
      quantity: 1,
      image: "/assets/spring.jpg?height=100&width=100",
    },
    {
      id: 3,
      name: "Elegant Lily Arrangement",
      price: 75.99,
      quantity: 1,
      image: "/assets/LillyFlowers.jpg?height=100&width=100",
    },
  ])

  const [promoCode, setPromoCode] = useState("")
  const [discount, setDiscount] = useState(0)

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter((item) => item.id !== id))
    } else {
      setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
    }
  }

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === "save10") {
      setDiscount(0.1)
    } else if (promoCode.toLowerCase() === "welcome20") {
      setDiscount(0.2)
    } else {
      setDiscount(0)
    }
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const discountAmount = subtotal * discount
  const shipping = subtotal > 75 ? 0 : 9.99
  const tax = (subtotal - discountAmount) * 0.08
  const total = subtotal - discountAmount + shipping + tax

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center space-y-6">
          <ShoppingBag className="h-24 w-24 text-gray-400 mx-auto" />
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-gray-900">Your cart is empty</h1>
            <p className="text-gray-600">Add some beautiful flowers to get started!</p>
          </div>
          <Button asChild size="lg" className="bg-pink-600 hover:bg-pink-700 transition-colors duration-200">
            <Link href="/shop">Continue Shopping</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Button asChild variant="ghost" className="mb-4 transition-colors duration-200 hover:text-pink-700">
            <Link href="/shop">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Continue Shopping
            </Link>
          </Button>
          <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
          <p className="text-gray-600 mt-2">{cartItems.length} items in your cart</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={100}
                      height={100}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-gray-900">{item.name}</h3>
                      <p className="text-pink-600 font-bold text-xl">${item.price}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center border rounded-lg">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="transition-colors duration-200 hover:bg-gray-100"
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="px-4 py-2 font-medium">{item.quantity}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="transition-colors duration-200 hover:bg-gray-100"
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeItem(item.id)}
                        className="text-red-600 hover:text-red-700 hover:bg-red-50 transition-colors duration-200"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-gray-600">Subtotal:</span>
                    <span className="font-bold text-lg">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            {/* Promo Code */}
            <Card>
              <CardHeader>
                <CardTitle>Promo Code</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    placeholder="Enter promo code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                  />
                  <Button
                    onClick={applyPromoCode}
                    variant="outline"
                    className="transition-colors duration-200 hover:bg-gray-100 bg-transparent"
                  >
                    Apply
                  </Button>
                </div>
                {discount > 0 && <p className="text-pink-600 text-sm">✓ Promo code applied! {discount * 100}% off</p>}
                <div className="text-xs text-gray-500">Try: SAVE10 or WELCOME20</div>
              </CardContent>
            </Card>

            {/* Order Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-pink-600">
                    <span>Discount ({discount * 100}%)</span>
                    <span>-${discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-pink-600 hover:bg-pink-700 transition-colors duration-200"
                >
                  <Link href="/checkout">Proceed to Checkout</Link>
                </Button>
                <p className="text-xs text-gray-500 text-center">
                  {shipping > 0 && "Free shipping on orders over $75"}
                </p>
              </CardContent>
            </Card>

            {/* Security Info */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span>Secure checkout with SSL encryption</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>7-day freshness guarantee</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
