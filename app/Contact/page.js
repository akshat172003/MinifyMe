"use client"

import React from "react"

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12">
      <div className="max-w-2xl w-full bg-white shadow-lg rounded-2xl p-10 text-center border border-gray-200">
        <h1 className="text-3xl font-extrabold text-purple-700 mb-4">Contact Us</h1>
        <p className="text-gray-600 mb-8">
          Have questions or suggestions? We’d love to hear from you.
        </p>

        <div className="space-y-6 text-lg text-gray-700">
          <div className="border-b pb-4">
            <p className="font-semibold">📧 Email</p>
            <a
              href="mailto:1702akshat@gmail.com"
              className="text-purple-600 hover:underline"
            >
              1702akshat@gmail.com
            </a>
          </div>

          <div className="border-b pb-4">
            <p className="font-semibold">📍 Location</p>
            <p className="text-gray-600">Raipur,Chhattisgarh, India</p>
          </div>

          <div>
            <p className="font-semibold">🔗 GitHub</p>
            <a
              href="https://github.com/akshat172003"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 hover:underline"
            >
              @akshat172003
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
