import React from "react"

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero flex flex-col justify-center">
        <div
          data-sal="slide-up"
          data-sal-delay="5000"
          data-sal-easing="ease-in"
        >
          <p className="mb-5 ml-1 intro">Hi, my name is</p>
          <p className="font-bold text-3xl text-slate-300 md:text-7xl">
            Franz Sinaga.
          </p>
        </div>
        <div
          data-sal="slide-up"
          data-sal-delay="5000"
          data-sal-easing="ease-in"
        >
          <p className="font-bold text-3xl text-slate-500 md:text-7xl">
            I build things for the web.
          </p>
          <p
            className="text-slate-500 mt-5 font-medium"
            style={{ "maxWidth": "540px" }}
          >
            I’m a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I’m focused
            on building accessible, human-centered products at Upstatement.
          </p>
        </div>
        <div
          className="mt-10"
          data-sal="slide-up"
          data-sal-delay="5000"
          data-sal-easing="ease-in"
        >
          <button className="bg-cyan-500 shadow-lg shadow-cyan-500/50 py-3 px-10 text-gray-50 rounded">
            Check out my course!
          </button>
        </div>
      </div>
    </section>
  )
}
