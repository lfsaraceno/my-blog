import React from "react"
import propTypes from "prop-types"

import * as S from "./styled"

const RecommendedPosts = ({next, previous}) => (

  <S.RecommendedWrapper>
    {previous ? <S.RecommendedLink
      to={previous.fields.slug}
      className="previous">
      {previous.frontmatter.title}
        <S.RecommendedTag background={previous.frontmatter.background}>
          {previous.frontmatter.category}
        </S.RecommendedTag>
      </S.RecommendedLink> :
      <p className="recommended-inactive -previous">Posts Novos</p>
    }
    {next ? <S.RecommendedLink
     to={next.fields.slug}
     className="next">
       <S.RecommendedTag background={next.frontmatter.background}>
        {next.frontmatter.category}
        </S.RecommendedTag>
       {next.frontmatter.title}
     </S.RecommendedLink> :
     <p className="recommended-inactive -next">Post Antigos</p>
    }
  </S.RecommendedWrapper>
)

RecommendedPosts.propTypes = {
  next: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired,
      category: propTypes.string.isRequired,
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired,

    }),
  }),
  previous: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired,
      category: propTypes.string.isRequired,
    }),
    fields : propTypes.shape({
      slug: propTypes.string.isRequired,
    }),
  }),
}

export default RecommendedPosts
