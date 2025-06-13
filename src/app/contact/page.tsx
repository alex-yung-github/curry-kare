"use client"

import Image from "next/image"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 py-16">
      <div className="max-w-3xl mx-auto px-4">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-extrabold text-orange-700 mb-2 tracking-tight drop-shadow">
            Contact Us
          </h1>
          <p className="text-lg text-orange-900/80">
            We’d love to hear from you! Reach out with questions, feedback, or just to say hello.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg border border-orange-100 p-8 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-orange-700 font-semibold mb-1">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full border border-orange-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-orange-700 font-semibold mb-1">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full border border-orange-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-orange-700 font-semibold mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full border border-orange-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
              <button
                type="submit"
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full font-medium transition"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <Image
              src="/curry_kare_logo_words.png"
              alt="Curry Kare Logo"
              width={120}
              height={120}
              className="rounded-full shadow mb-4 border-4 border-white bg-white"
              priority
            />
            <div className="text-center">
              <p className="text-orange-700 font-semibold mb-1">Email</p>
              <a href="mailto:hello@currykare.com" className="text-orange-600 underline">
                hello@currykare.com
              </a>
              <p className="text-orange-700 font-semibold mt-4 mb-1">Phone</p>
              <a href="tel:+17035551234" className="text-orange-600 underline">
                (703) 555-1234
              </a>
              <p className="text-orange-700 font-semibold mt-4 mb-1">Address</p>
              <p className="text-gray-700">
                X Metrotech Dr<br />
                Chantilly, VA 20151
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}