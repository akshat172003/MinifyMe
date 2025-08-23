"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import minifymelogo from "@/public/minifymelogo.svg"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-purple-700 shadow-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center text-white">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image src={minifymelogo} alt="Logo" width={40} height={40} />
          <Link href="/" className="font-extrabold text-xl tracking-tight">
            Minify.Me
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 font-medium">
          <li>
            <Link href="/" className="hover:text-purple-200 transition">Home</Link>
          </li>
          <li>
            <Link href="/About" className="hover:text-purple-200 transition">About</Link>
          </li>
          <li>
            <Link href="/Shorten" className="hover:text-purple-200 transition">Shorten</Link>
          </li>
          <li>
            <Link href="/Contact" className="hover:text-purple-200 transition">Contact</Link>
          </li>
          <li>
            <Link
              href="/Shorten"
              className="bg-white text-purple-700 font-semibold px-4 py-2 rounded-lg hover:bg-purple-100 transition"
            >
              Try Now
            </Link>
          </li>
          <li>
            <Link
              href="/github"
              className="bg-purple-500 font-semibold px-4 py-2 rounded-lg hover:bg-purple-600 transition"
            >
              GitHub
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-purple-600 px-6 py-4 flex flex-col gap-4 text-white font-medium">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/About" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/Shorten" onClick={() => setIsOpen(false)}>Shorten</Link>
          <Link href="/Contact" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link
            href="/Shorten"
            onClick={() => setIsOpen(false)}
            className="bg-white text-purple-700 font-semibold px-4 py-2 rounded-lg text-center"
          >
            Try Now
          </Link>
          <Link
            href="/github"
            onClick={() => setIsOpen(false)}
            className="bg-purple-500 font-semibold px-4 py-2 rounded-lg text-center"
          >
            GitHub
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar
