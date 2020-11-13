import React from "react"
import { graphql } from "gatsby"

const BlogPost = ({ data }) => {
  const post = data.markdownRemark

  return (
      <>
        <h1>Title: {post.frontmatter.title}</h1>
        <h2>Date: {post.frontmatter.date}</h2>
        <h3>Category: {post.frontmatter.category}</h3>
        <p>Time To Read: {post.frontmatter.timeToRead}</p>
        <div dangerouslySetInnerHTML={{__html: post.html }} ></div>
      </>
  )

}
export const query = graphql`
query Post($slug: String) {
  markdownRemark(fields: {slug: {eq: $slug}}) {
    frontmatter {
      title
      date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
      category
    }
    html
    timeToRead
  }
}
`
export default BlogPost
