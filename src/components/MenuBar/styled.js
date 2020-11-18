import styled from "styled-components"
import { Link } from "gatsby"

export const MenuBarWrapper = styled.aside`
  width: 2rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 0;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 0.8rem 1.5rem 0.8rem 1rem;
  border-left: 1px solid #38444d;
  background-color: #192734;
  color: #fff;
`

export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;
`

export const MenuBarLink = styled(Link)`
display: block;
`

export const MenuBarIten = styled.span`
width: 3.75rem;
height: 3.75rem;
display: block;
position: relative;
padding: 1.1rem;
color: #8899a6;
cursor: pointer;
transition: color 0.5s;

&:hover{
  color: #1fa1f2;
}
`


