import styled from "styled-components"

import { Link } from "gatsby"

export const PostItemLink = styled(Link) `
  display: flex;
  text-decoration: none;
  color: #8899A6;

  &:hover {
    cursor: pointer;
    color: #1FA1F2;
  }
`

export const PostItemWrapper = styled.section `
width: 100%;
display: flex;
align-items: center;
padding: 2rem 3rem;
border-bottom: 1px solid #38444D;
`

export const PostItemTag = styled.div `
  min-width: 90px;
  min-height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: 1.3rem;
  color: #FFF;
  border-radius: 50%;
  background:${props => props.background ? props.background : " #1FA1F2" };
`

export const PostItemInfo = styled.div `
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
`

export const PostItemDate = styled.time `
font-size: 0.9rem;
`

export const PostItemTitle = styled.h1 `
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;
`

export const PostItemDescription = styled.p `
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
`

