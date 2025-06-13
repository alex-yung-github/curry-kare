"use client"

import Image from "next/image"

const positions = [
  {
    title: "Team Member",
    location: "Chantilly, VA",
    type: "Full-Time / Part-Time",
    description:
      "Join our front-of-house team and help guests build their perfect curry bowl. No experience necessary—just a positive attitude and a smile!",
    image: "/front_worker.jpg", // Place a placeholder image in public/careers_team.jpg
  },
  {
    title: "Kitchen Crew",
    location: "Chantilly, VA",
    type: "Full-Time",
    description:
      "Work behind the scenes preparing fresh ingredients and delicious curry. Food prep or kitchen experience is a plus, but we’ll train the right person.",
    image: "/cook_img.jpg", // Place a placeholder image in public/careers_kitchen.jpg
  },
  {
    title: "Shift Lead",
    location: "Chantilly, VA",
    type: "Full-Time",
    description:
      "Lead a team, ensure smooth operations, and deliver great guest experiences. Leadership or restaurant experience preferred.",
    image: "/shift_worker.jpg", // Place a placeholder image in public/careers_lead.jpg
  },
]

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-tl from-orange-100 via-white to-orange-50 py-16">
      <div className="max-w-5xl mx-auto px-4">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-extrabold text-orange-700 mb-2 tracking-tight drop-shadow">
            Join the Curry Kare Team
          </h1>
          <p className="text-lg text-orange-900/80">
            We’re always looking for friendly, energetic people who love food and hospitality. Explore our open positions below!
          </p>
        </div>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {positions.map((pos, idx) => (
            <div
              key={pos.title}
              className="bg-white rounded-2xl shadow-lg hover:shadow-orange-200 transition-shadow flex flex-col overflow-hidden border border-orange-100"
            >
              <div className="relative h-40 w-full">
                <Image
                  src={pos.image}
                  alt={pos.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={idx === 0}
                />
              </div>
              <div className="flex-1 flex flex-col justify-between p-6">
                <div>
                  <h2 className="text-xl font-bold text-orange-700 mb-1">{pos.title}</h2>
                  <p className="text-orange-600 text-sm mb-1">{pos.location} &middot; {pos.type}</p>
                  <p className="text-gray-700 mb-2">{pos.description}</p>
                </div>
                <div className="mt-4">
                  <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-full font-medium transition">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <p className="text-orange-700 text-lg">
            Don’t see the right fit? Email your resume to <a href="mailto:jobs@currykare.com" className="underline hover:text-orange-900">jobs@currykare.com</a>
          </p>
        </div>
      </div>
    </div>
  )
}