import React from "react"
import { graphql } from "gatsby"

import Layout  from "../components/Layout"
import SEO from "../components/seo"
import * as S from "../components/PostStyled/styled"

const BlogPost = ({ data }) => {
  const post = data.markdownRemark

  return (
      <Layout >
        <SEO title={post.frontmatter.title} />
        <S.PostStyledHeader>

          <S.PostStyledTitle>{post.frontmatter.title}</S.PostStyledTitle>
          <S.PostStyledDate> {post.frontmatter.category} • {post.frontmatter.date} • {post.timeToRead} Min. de Leitura</S.PostStyledDate>
          <S.PostStyledDate></S.PostStyledDate>
          <S.PostStyledDescription>{post.frontmatter.description}</S.PostStyledDescription>

        </S.PostStyledHeader>

        <S.MainContent><div dangerouslySetInnerHTML={{__html: post.html }} ></div></S.MainContent>




      </Layout>
  )

}
export const query = graphql`
query blogPost($slug: String) {
  markdownRemark(fields: {slug: {eq: $slug}}) {
    frontmatter {
      title
      date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
      category
      description
    }
    html
    timeToRead
  }
}
`
export default BlogPost
