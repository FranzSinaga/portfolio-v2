import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default function Profile() {
  return (
    <section id="profile" className="mb-28">
      <div className="flex flex-col md:flex-row items-center  ">
        <div className="flex-1 mt-14" id="profile-description">
          <div
            data-sal="slide-right"
            data-sal-easing="ease-out-back"
            data-sal-delay="5000"
          >
            <h1 className="text-4xl font-bold text-slate-300">About Me</h1>
          </div>
          <div data-sal="slide-right" data-sal-easing="ease-out-back">
            <p className="text-slate-500 mt-12 font-medium ">
              Hello! My name is Brittany and I enjoy creating things that live
              on the internet. My interest in web development started back in
              2012 when I decided to try editing custom Tumblr themes — turns
              out hacking together a custom reblog button taught me a lot about
              HTML & CSS!
            </p>
          </div>
          <div
            data-sal="slide-right"
            data-sal-easing="ease-out-back"
            data-sal-delay="5000"
          >
            <p className="text-slate-500 mt-3 font-medium">
              Fast-forward to today, and I’ve had the privilege of working at an
              advertising agency, a start-up, a huge corporation, and a
              student-led design studio. My main focus these days is building
              accessible, inclusive products and digital experiences at
              Upstatement for a variety of clients.
            </p>
          </div>
          <div data-sal="slide-right" data-sal-easing="ease-out-back">
            <p
              className="text-slate-500 mt-3 font-medium"
              data-sal-delay="5000"
            >
              I also recently launched a course that covers everything you need
              to build a web app with the Spotify API using Node & React.
            </p>
            <p className="text-slate-500 mt-3 font-medium">
              Here are a few technologies I’ve been working with recently:
            </p>
          </div>
          <div
            data-sal="slide-right"
            data-sal-easing="ease-out-back"
            data-sal-delay="5000"
          >
            <div className="mt-3">
              <ul className="list-outside list grid grid-cols-2">
                <li className="text-slate-500">JavaScript</li>
                <li className="text-slate-500">React</li>
                <li className="text-slate-500">Node.js</li>
                <li className="text-slate-500">TypeScript</li>
                <li className="text-slate-500">Eleventy</li>
                <li className="text-slate-500">WordPress</li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="flex-1 -z-10 text-center"
          data-sal="slide-left"
          data-sal-easing="ease-out-back"
          data-sal-delay="5000"
        >
          <StaticImage
            src="../../images/banner.png"
            alt="A dinosaur"
            placeholder="blurred"
            layout="constrained"
            width={300}
          />
        </div>
      </div>
    </section>
  )
}
