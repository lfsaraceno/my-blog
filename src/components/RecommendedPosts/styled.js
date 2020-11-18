import styled from "styled-components"
import { Link } from "gatsby"

export const RecommendedWrapper = styled.section`
  border-bottom: 1px solid #38444d;
  border-top: 1px solid #38444d;
  background: #192734;
  display: flex;

  .recommended-inactive {
    width: 50%;
    display: flex;
    align-items: center;
    font-weight: 300;
    letter-spacing: 0.4px;
    padding: 2rem;
    color: #38444d;

    &.-previous{
      border-right: 1px solid #38444d;
    }

    &.-next {
      justify-content: flex-end;
    }

    &.-previous:before {
    content: "\\2190";
      margin-right: 0.5rem;
    }
    &.-next:after {
      content: "\\2192";
      margin-left: 0.5rem;
    }
  }
`


export const RecommendedLink = styled(Link)`
  width: 50%;
  display: flex;
  align-items: center;
  background: #192734;
  color: #1fa1f2;
  padding: 1.5rem;
  text-decoration: none;
  transition: background 0.5s;
  &:hover {
    background: #38444d;
  }
  &.previous {
    border-right: 1px solid #38444d;
  }
  &.next {
    justify-content: flex-end;
  }
  &.previous:before {
    content: "\\2190";
    margin-right: 0.5rem;
  }
  &.next:after {
    content: "\\2192";
    margin-left: 0.5rem;
  }

`
export const RecommendedTag = styled.div `
  min-width: 50px;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  margin: 0 1rem;
  font-size: 0.8rem;
  font-weight: bold;
  color: #FFF;
  border-radius: 50%;
  background:${props => props.background ? props.background : "#1FA1F2" };
`
