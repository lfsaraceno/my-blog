import styled from "styled-components";

export const SocialMediaWrapper = styled.nav`
  width: 100%;
  margin: 2rem auto;
`;

export const SocialMediaList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
`;

export const SocialMediaIten = styled.li`
  margin: 0.3rem;
`;

export const SocialMediaLink = styled.a`
  text-decoration: none;
  color: #8899a6;
  transition: color 0.5s;

  &:hover {
    color: #1fa1f2;
  }
`;

export const IconWrapper = styled.div`
  width: 30px;
  height: 30px;
  fill: #bbb;
`;