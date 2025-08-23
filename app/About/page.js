"use client"
import React from "react"
import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-purple-700 mb-4">
          About Minify.Me
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Minify.Me is a simple and powerful URL shortener that helps you
          transform long, messy links into clean and shareable ones.
        </p>
      </div>

      {/* About Content */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Image/Illustration */}
        <div className="flex justify-center">
          <img
            src="https://illustrations.popsy.co/violet/remote-work.svg"
            alt="URL Shortening Illustration"
            className="w-80 md:w-96"
          />
        </div>

        {/* Right: Text */}
        <div>
          <h2 className="text-2xl font-bold text-purple-700 mb-4">
            Why choose Minify.Me?
          </h2>
          <ul className="space-y-4 text-gray-700">
            <li>✅ Shorten links instantly with one click</li>
            <li>✅ Track and manage your URLs with ease</li>
            <li>✅ Mobile-friendly and fast to use</li>
            <li>✅ Free and open-source project</li>
          </ul>
        </div>
      </div>

      {/* Closing Note */}
      <div className="text-center mt-16">
        <h3 className="text-xl font-semibold text-purple-700 mb-2">
          Our Mission
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We believe in making the web easier to navigate by providing creators,
          developers, and everyday users with a simple way to share links that
          look clean and professional.
        </p>
      </div>
    </div>
  )
}

export default About
