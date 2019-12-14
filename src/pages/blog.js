import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Link from 'gatsby-link'


const BlogPage = ({data}) => (
  <Layout>
    <SEO title="Blog Pages" />
    <h1>Latest Posts</h1>
    {data.allMarkdownRemark.edges.map(post => (
        <div key={ post.node.id}>
            <h3>{ post.node.frontmatter.title }</h3>
            <small>Posted by { post.node.frontmatter.author }</small>
            <br />
            <br />
            <Link to={post.node.frontmatter.path}>Read More</Link>
            <br />
            <br />
            <hr />
        </div>
    ))}
  </Layout>
)

export const pageQuery = graphql`
    query BlogIndexQuery {
            allMarkdownRemark {
              edges {
                node {
                  id
                  frontmatter {
                    path
                    title
                    date
                    author
                  }
                }
              }
            }
    }
    `

export default BlogPage
