import React from "react"
import Link from "next/link"
import { FaGithub, FaLinkedin } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-800 to-purple-700 text-white">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left border-b border-purple-600">
        
        {/* Branding */}
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight">Minify.Me</h2>
          <p className="text-sm text-purple-200 mt-3 leading-relaxed">
            Simple, fast, and reliable URL shortener to keep your links clean and shareable.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="flex flex-col gap-2 text-purple-200">
            {[
              { name: "Home", href: "/" },
              { name: "Shorten", href: "/Shorten" },
              { name: "About", href: "/About" },
              { name: "Contact", href: "/Contact" },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="relative hover:text-white transition group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white rounded-full transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Credits */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <p className="text-purple-200 text-sm">
            &copy; {new Date().getFullYear()} Minify.Me. All rights reserved.
          </p>
          <p className="text-sm">
            Made with <span className="text-red-400">❤️</span> by{" "}
            <a
              href="https://github.com/akshat172003"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white transition"
            >
              Akshat Jain
            </a>
          </p>
          {/* Social icons */}
          <div className="flex gap-4 mt-2">
            <a
              href="https://github.com/akshat172003"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-gray-300 transition transform hover:scale-110"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-gray-300 transition transform hover:scale-110"
            >
              <FaLinkedin size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-purple-900 border-t border-purple-700 py-4 text-center text-xs text-purple-300">
        🚀 Built with <span className="font-semibold">Next.js</span> &{" "}
        <span className="font-semibold">Tailwind CSS</span>
      </div>
    </footer>
  )
}

export default Footer
