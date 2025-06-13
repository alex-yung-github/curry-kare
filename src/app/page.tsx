"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, ShoppingCart, Utensils, Users, Star } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                <span className="block">Curry Kare</span>
                <span className="block text-2xl lg:text-4xl text-orange-200 font-normal">
                  Curry Kare Curry
                </span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-orange-100">
                Build your perfect curry bowl, your way. Fresh ingredients, bold flavors, fast service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-orange-50 text-lg px-8 py-4 h-auto"
                  asChild
                >
                  <Link href="/menu">
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Order Now
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white hover:bg-orange-50 hover:text-orange-600 text-lg px-8 py-4 h-auto"
                  asChild
                >
                  <Link href="/locations" className="text-red-500">
                    <MapPin className="h-5 w-5 mr-2 text-red-100" />
                    Find Locations
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://ugc.same-assets.com/h8bg4mMLqHuX03DtEar2P2viNlNK_IHp.jpeg"
                alt="Delicious curry bowl"
                className="rounded-2xl shadow-2xl w-full max-w-lg mx-auto"
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                <Badge className="bg-orange-600 text-white text-sm px-3 py-1">
                  Fast & Fresh
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Build your perfect curry in just 3 simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-orange-100 hover:border-orange-300 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Utensils className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Choose Your Base</h3>
                <p className="text-gray-600">
                  Select from our variety of broths and carbs - from traditional pork broth to vegetarian dashi, with rice or noodles.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-100 hover:border-orange-300 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Add Proteins & Toppings</h3>
                <p className="text-gray-600">
                  Choose from fresh proteins like chicken, beef, pork, or tofu, then add your favorite vegetables and toppings.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-100 hover:border-orange-300 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Ready in Minutes</h3>
                <p className="text-gray-600">
                  We prepare your custom curry bowl fresh and fast. Perfect for takeout, ready when you are.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Menu Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Fresh Ingredients, Bold Flavors
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              All ingredients are fresh daily and prepared to order
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <img
                src="https://ugc.same-assets.com/zungh0qAYOxJQadtckDLM3ijR3wvSrLA.jpeg"
                alt="Fresh vegetables"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fresh Vegetables</h3>
              <p className="text-gray-600">Potatoes, carrots, onions, and more</p>
            </div>

            <div className="text-center">
              <img
                src="https://ugc.same-assets.com/oXNDHjzCzcLSc98ii4Xof5ZFeXXck5rT.jpeg"
                alt="Quality proteins"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Proteins</h3>
              <p className="text-gray-600">Chicken, beef, pork, and tofu options</p>
            </div>

            <div className="text-center">
              <img
                src="https://ugc.same-assets.com/hmFhf-OMBH8oQqZuRnqdKgXjbKlyMlqJ.jpeg"
                alt="Perfect rice"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Perfect Rice</h3>
              <p className="text-gray-600">White rice, brown rice, and noodles</p>
            </div>

            <div className="text-center">
              <img
                src="https://ugc.same-assets.com/yLBp3i8mmq0M6eZqzsl5MOSr5KCWyadw.jpeg"
                alt="Signature broths"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Signature Broths</h3>
              <p className="text-gray-600">Rich, flavorful curry bases</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700" asChild>
              <Link href="/menu">
                View Full Menu
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-orange-200">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-orange-200">Fresh Ingredients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5</div>
              <div className="text-orange-200">Locations</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.8</div>
              <div className="text-orange-200 flex items-center justify-center gap-1">
                <Star className="h-4 w-4 fill-current" />
                Rating
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Build Your Perfect Curry?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Start your order now and taste the difference fresh ingredients make.
          </p>
          <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-lg px-12 py-4 h-auto" asChild>
            <Link href="/menu">
              <ShoppingCart className="h-5 w-5 mr-2" />
              Order Now
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
