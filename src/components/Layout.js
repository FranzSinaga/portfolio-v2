import React from "react"
import Navbar from "./Navbar"

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="container px-20 set-width-default">{children}</div>
      <footer className="text-center">
        <div className="p-10 text-slate-500 hover:text-cyan-300 cursor-pointer">
          <p>Designed & Built with ☕ by Franz Sinaga</p>
        </div>
      </footer>
    </div>
  )
}   