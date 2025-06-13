"use client"

import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Logo Section */}
      <section className="flex flex-col items-center justify-center py-16 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 relative">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative flex flex-col items-center z-10">
          <Image
            src="/curry_kare_logo_words.png" // Place your logo in public/logo.png
            alt="Curry Kare Logo"
            width={96}
            height={96}
            className="rounded-full shadow-lg mb-4 border-4 border-white bg-white"
            priority
          />
          <h1 className="text-5xl font-bold text-white drop-shadow mb-2">About Curry Kare</h1>
          <p className="text-lg text-orange-100 max-w-2xl text-center">
            Fresh, fast, and flavorful—discover our story and what makes us different.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-orange-600 mb-4">Our Story</h2>
          <p className="text-gray-700 text-lg">
            Curry Kare was founded with a simple mission: to bring the comfort of Japanese curry at an affordable price, 
            and made the way you like it.
            We believe in using only the freshest ingredients, prepared daily, and giving you the freedom to build your perfect bowl.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-orange-50 rounded-xl p-8 shadow">
            <h3 className="text-xl font-semibold text-orange-700 mb-2">Why Curry Kare?</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Customizable curry bowls for every taste</li>
              <li>Fresh, high-quality ingredients sourced daily</li>
              <li>Fast, friendly service—perfect for dine-in or takeout</li>
              <li>Vegetarian and vegan options always available</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-8 shadow border border-orange-100 flex flex-col justify-center">
            <h3 className="text-xl font-semibold text-orange-700 mb-2">Our Promise</h3>
            <p className="text-gray-700">
              We’re committed to making every visit delicious and memorable. Whether you’re a curry connoisseur or trying it for the first time, our team is here to help you build a bowl you’ll love.
            </p>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-orange-600 mb-4">Meet the Founders</h2>
          <p className="text-gray-700 text-lg">
            The passion behind Curry Kare comes from our founders, who share a love for bold flavors and fresh food.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Founder 1 */}
          <div className="bg-white rounded-xl p-8 shadow flex flex-col items-center">
            <Image
              src="/alex_pfp.jpg" // Place a photo in public/founder1.jpg
              alt="Alex"
              width={96}
              height={96}
              className="rounded-full mb-4 border-4 border-orange-200 object-cover"
            />
            <h3 className="text-xl font-semibold text-orange-700 mb-2">Alex Yung</h3>
            <p className="text-gray-700 text-center">
              Alex is a UVA student who loves to eat and cook. 
              His passion for food led him to co-found Curry Kare, where he 
              aims to share his favorite flavors with the community.
            </p>
          </div>
          {/* Founder 2 */}
          <div className="bg-white rounded-xl p-8 shadow flex flex-col items-center">
            <Image
              src="/andy_pfp.jpg" // Place a photo in public/founder2.jpg
              alt="Andy"
              width={96}
              height={96}
              className="rounded-full mb-4 border-4 border-orange-200 object-cover"
            />
            <h3 className="text-xl font-semibold text-orange-700 mb-2">Andy Liang</h3>
            <p className="text-gray-700 text-center">
              Andy's love for spices and hospitality inspired him to co-found Curry Kare. 
              His vision is to create a welcoming space where everyone can enjoy fresh, customizable meals made with care.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}