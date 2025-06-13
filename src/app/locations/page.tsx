"use client"

import Image from "next/image"

const locations = [
  {
    name: "Chantilly, VA",
    address: "X Metrotech Dr Chantilly, VA 20151",
    image: "/placeholder.jpg", // Place a placeholder image in public/location1.jpg
    hours: "Mon-Sun: 11am - 9pm",
  },
  {
    name: "TBD",
    address: "TBD",
    image: "/placeholder.jpg", // Place a placeholder image in public/location2.jpg
    hours: "Mon-Sat: 10am - 8pm",
  },
  {
    name: "TBD",
    address: "TBD",
    image: "/placeholder.jpg", // Place a placeholder image in public/location3.jpg
    hours: "Mon-Fri: 11am - 7pm",
  },
  {
    name: "TBD",
    address: "TBD",
    image: "/placeholder.jpg", // Place a placeholder image in public/location4.jpg
    hours: "Mon-Sun: 12pm - 10pm",
  },
]

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-extrabold text-orange-700 mb-2 tracking-tight drop-shadow">
            Find a Curry Kare Near You
          </h1>
          <p className="text-lg text-orange-900/80">
            Visit one of our convenient locations and enjoy your perfect curry bowl!
          </p>
        </div>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {locations.map((loc, idx) => (
            <div
              key={loc.name}
              className="bg-white rounded-2xl shadow-lg hover:shadow-orange-200 transition-shadow flex flex-col overflow-hidden border border-orange-100"
            >
              <div className="relative h-40 w-full">
                <Image
                  src={loc.image}
                  alt={loc.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                  priority={idx === 0}
                />
              </div>
              <div className="flex-1 flex flex-col justify-between p-6">
                <div>
                  <h2 className="text-2xl font-bold text-orange-700 mb-1">{loc.name}</h2>
                  <p className="text-gray-700 mb-2">{loc.address}</p>
                </div>
                <div className="mt-4">
                  <span className="inline-block bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                    {loc.hours}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}