import styled from "styled-components"

export const PaginationWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 3rem;
  color: #8899a6;
  border-top: 1px solid #38444d;


  a {
    color: #8899a6;
    text-decoration: none;
    transition: color 0.5s;

    &:hover {
      color: #1fa1f2;
    }
  }

  .page-inactive {
    font-weight: 300;
    letter-spacing: 0.4px;
    color: #38444d;
  }
`
