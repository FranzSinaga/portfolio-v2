import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

export const ProjectList = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: {}) {
        nodes {
          frontmatter {
            title
            slug
            stack
            date
            thumb {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED)
              }
            }
          }
        }
      }
    }
  `)
  const projects = data.allMarkdownRemark.nodes
  console.log(projects)

  return (
    <section id="profile">
      <div className="">
        <h1
          className="mb-10 text-4xl font-bold text-slate-300"
          data-sal="slide-up"
          data-sal-delay="5000"
          data-sal-easing="ease-in"
        >
          Projects
        </h1>
        <div className="flex-1" id="profile-description">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {projects.map(project => {
              return (
                // <Link
                //   to={"/projects/" + project.frontmatter.slug}
                //   key={project.id}
                // >
                <div
                  key={project.frontmatter.slug}
                  data-sal="fade"
                  data-sal-delay="5000"
                  data-sal-easing="ease-in"
                >
                  <GatsbyImage
                    image={
                      project.frontmatter.thumb.childImageSharp.gatsbyImageData
                    }
                    alt=""
                  />
                  <h3>{project.frontmatter.title}</h3>
                  <p>{project.frontmatter.stack}</p>
                  {/* <p>{project.frontmatter.date}</p> */}
                </div>
                // </Li nk>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
export default ProjectList
