import React, { useEffect } from "react"
import { Link } from "gatsby"

export default function Navbar() {
  useEffect(() => {
    if (typeof window !== `undefined`) {
      var prevScrollpos = window.pageYOffset
      window.onscroll = () => {
        var currentScrollPos = window.pageYOffset
        if (prevScrollpos > currentScrollPos) {
          document.getElementById("navbar").style.top = "0"
        } else {
          document.getElementById("navbar").style.top = "-200px"
        }
        prevScrollpos = currentScrollPos
      }
    }
  })

  return (
    <nav
      className="invisible md:visible sm:visible py-6 backdrop-filter backdrop-blur-lg opacity-90
    bg-gradient-to-r shadow-lg fixed w-full z-50"
      id="navbar"
    >
      <div className="flex justify-between w-full container mx-auto">
        <div className="px-10">
          <h3 className="text-2xl font-thin">F</h3>
        </div>
        <div className="space-x-8 px-10">
          <Link
            className="text-gray-300 hover:text-cyan-300 nav-link font-extralight"
            to="/"
          >
            Home
          </Link>
          <Link
            className="text-gray-300 hover:text-cyan-300 nav-link font-extralight"
            to="#profile"
          >
            About
          </Link>
          <Link
            className="text-gray-300 hover:text-cyan-300 nav-link font-extralight"
            to="/"
          >
            Blogs
          </Link>
          <Link
            className="text-gray-300 hover:text-cyan-300 nav-link font-extralight"
            to="/"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  )
}
